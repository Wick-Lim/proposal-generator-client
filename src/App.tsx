import { AppBar, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Toolbar } from '@mui/material';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Application, Container, Sprite, Text, Texture, Graphics, Color, utils } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

// @ts-ignore
import PptxGenJS from 'pptxgenjs';
import { saveAs } from 'file-saver';

export default function App() {
  const [loading, showLoading] = useState(false);
  const [data, setData] = useState<any | null>();
  const [binder, showBinder] = useState<any | null>();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const app = useMemo(() => new Application({
    backgroundColor: 0xcccccc,
  }), [])

  useEffect(() => {
    if (app && wrapperRef.current) {
      wrapperRef.current.appendChild(app.view as HTMLCanvasElement);
      app.resizeTo = wrapperRef.current;
    }
  }, [wrapperRef, app])

  const viewport = useMemo(() => {
    if (!app || !wrapperRef.current)
      return;

    const viewport = new Viewport({
      screenWidth: wrapperRef.current.offsetWidth,
      screenHeight: wrapperRef.current.offsetHeight,
      worldWidth: 1000,
      worldHeight: 1000,
      events: app.renderer.events
    })

    app.stage.removeChildren();
    app.stage.addChild(viewport)

    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()

    return viewport;
  }, [app, wrapperRef.current])

  const cursor = useMemo(() => {
    if (!viewport)
      return;

    const cursor = new Graphics();
    cursor.beginFill(0x000000, 0.5);
    cursor.drawRect(0, 0, 1, 1);
    cursor.endFill();

    viewport.addChild(cursor);

    return cursor;
  }, [viewport])

  useEffect(() => {
    if (viewport && data) {
      const { width, height } = data.pageSize;

      let pageTop = 16;
      data.slides.forEach((slide: any, i: number) => {
        const page = new Container();
        const bg = page.addChild(new Sprite(Texture.WHITE))
        bg.tint = 0xffffff;
        bg.width = width;
        bg.height = height;
        page.y = pageTop + (i * page.height);
        viewport.addChild(page);

        slide.shapes.forEach((element: any) => {
          if (!element.position)
            return;

          const container = new Container();
          container.x = element.position.x;
          container.y = element.position.y;
          page.addChild(container);

          const instance = new Graphics();
          instance.width = element.size.width;
          instance.height = element.size.height;
          container.addChild(instance);

          if (element.fillColor) {
            instance.beginFill(element.fillColor);
            instance.drawRect(0, 0, element.size.width, element.size.height);
            instance.endFill();
          }

          if (element.paragraphs) {
            element.paragraphs.forEach((paragraph: any) => {
              let left = 0;
              paragraph.textRuns.forEach((textRun: any) => {
                const instance = new Text(textRun.text, {
                  fontSize: textRun.fontSize,
                  fill: textRun.color,
                });

                instance.x = left;

                container.addChild(instance);

                left += instance.width;
              })
            })

            container.interactive = true;
            container.on('pointerdown', () => {
              if (!cursor)
                return;

              cursor.removeFromParent();
              page.addChild(cursor);

              cursor.x = container.x;
              cursor.y = container.y;
              cursor.width = container.width;
              cursor.height = container.height;

            })
          } else if (element.rows) {
            let rowTop = 0;
            element.rows.forEach((row: any) => {
              let cellLeft = 0;
              row.forEach((cell: any) => {
                const container = new Container();
                container.x = element.position.x + cellLeft;
                container.y = element.position.y + rowTop;
                page.addChild(container);

                if (cell.fillColor) {
                  const bg = new Graphics();
                  bg.x = 0;
                  bg.y = 0;
                  bg.width = cell.size.width;
                  bg.height = cell.size.height;

                  bg.beginFill(cell.fillColor);
                  bg.drawRect(0, 0, cell.size.width, cell.size.height);
                  bg.endFill();

                  container.addChild(bg);
                }

                container.interactive = true;
                container.on('pointerdown', () => {
                  if (!cursor)
                    return;

                  cursor.removeFromParent();
                  page.addChild(cursor);

                  cursor.x = container.x;
                  cursor.y = container.y;
                  cursor.width = container.width;
                  cursor.height = container.height;
                })

                let top = 0;
                cell.paragraphs?.forEach((paragraph: any) => {
                  let left = 0;

                  paragraph.textRuns?.forEach((textRun: any, i: number) => {
                    const instance = new Text(textRun.text, {
                      fontSize: textRun.fontSize,
                      fill: textRun.color,
                    });

                    instance.x = left;
                    instance.y = top;

                    container.addChild(instance);

                    left += instance.width;
                    if (i === paragraph.textRuns.length - 1)
                      top += instance.height;
                  })
                })
                cellLeft += cell.size.width;
              })
              rowTop += row[0].size.height;
            })
          }
        })

        pageTop += 16;
      })

      viewport.fit(true, 1);
    }
  }, [viewport, data])

  return (
    <>
      <AppBar position='relative' color='default'>
        <Toolbar sx={{ gap: '4px' }}>
          <Button variant='outlined' onClick={async () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
            fileInput.onchange = async (e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (!file)
                return;

              try {
                showLoading(true);

                const formData = new FormData();
                formData.append('file', file);

                const res = await fetch('https://proposal-generator-server.herokuapp.com/api/upload', {
                  method: 'POST',
                  body: formData,
                })

                const json = await res.json();
                setData(json);
              } catch (e) {
                window.alert(e);
              } finally {
                showLoading(false);
              }
            }
            fileInput.click();
          }}>Add New Template</Button>
          <Button variant='outlined' onClick={() => showBinder(true)}>Export with binding data</Button>
        </Toolbar>
      </AppBar>

      <Box flex='1' display='flex' flexDirection='row'>
        <Box width={160}>

        </Box>
        <Box position='relative' flex='1'>
          <Box ref={wrapperRef} position='absolute' sx={{ inset: 0 }} />
        </Box>
      </Box>

      <Dialog open={binder} onClose={() => showBinder(false)}>
        <Box component='form' onSubmit={async (e: FormEvent) => {
          e.preventDefault();

          try {
            showLoading(true);

            const pptx = new PptxGenJS();
            pptx.defineSlideMaster({
              title: 'MASTER_SLIDE',
              bkgd: 'ffffff',
              objects: [
                { rect: { x: 0, y: 0, w: '100%', h: '100%', fill: { color: 'f1f1f1' } } },
                { image: { x: 0.5, y: 0.5, w: 0.5, h: 0.5, path: 'https://raw.githubusercontent.com/gitbrent/PptxGenJS/master/docs/images/logo.png' } },
                { text: { text: 'PptxGenJS', options: { x: 0.5, y: 1.5, w: 10, h: 1, fontFace: 'Arial', fontSize: 18, color: '363636', bold: true } } },
                { text: { text: 'https://gitbrent.github.io/PptxGenJS/', options: { x: 0.5, y: 2.5, w: 10, h: 1, fontFace: 'Arial', fontSize: 14, color: '363636', bold: true } } },
              ]
            });
            
            const slide = pptx.addSlide('MASTER_SLIDE');
            slide.addText('Hello World!', { x: 0.5, y: 0.5, w: 10, h: 1, fontFace: 'Arial', fontSize: 18, color: '363636', bold: true });
            slide.addTable

            const blob = await pptx.writeFile();
            saveAs(blob, 'test.pptx');
            
          } catch (e) {
            window.alert(e);
          } finally {
            showLoading(false);
          }
        }}>
          <DialogTitle>Export with binding data</DialogTitle>
          <DialogContent>
            <TextField
              name='bindingData'
              label='Binding data'
              multiline
              rows={20}
              fullWidth
              sx={{
                width: '50vw',
                height: '50vh',
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => showBinder(false)}>Cancel</Button>
            <Button type='submit'>Export</Button>
          </DialogActions>
        </Box>
      </Dialog>
      <Dialog open={loading} PaperComponent={Box}>
        <CircularProgress />
      </Dialog>
    </>
  );
}

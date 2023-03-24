import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Application, Container, Sprite, Text, Texture, Graphics, Color, utils } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

// @ts-ignore
import PptxGenJS from 'pptxgenjs';

export default function App() {
  const [data, setData] = useState<any | null>();

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
    if (!app)
      return;

    const viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
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
  }, [app])

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

          const instance = new Graphics();
          instance.x = element.position.x;
          instance.y = element.position.y;
          instance.width = element.size.width;
          instance.height = element.size.height;
          page.addChild(instance);

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

                instance.x = element.position.x + left;
                instance.y = element.position.y;

                page.addChild(instance);

                left += instance.width;
              })
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

              const formData = new FormData();
              formData.append('file', file);

              const res = await fetch('https://proposal-generator-server.herokuapp.com/api/upload', {
                method: 'POST',
                body: formData,
              })

              const json = await res.json();
              setData(json);
            }
            fileInput.click();
          }}>Add New Template</Button>
          <Button variant='outlined'>Load Sample Template</Button>
        </Toolbar>
      </AppBar>

      <Box position='relative' flex='1'>
        <Box ref={wrapperRef} position='absolute' sx={{ inset: 0 }} />
      </Box>
    </>
  );
}

import { AppBar, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Toolbar } from '@mui/material';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Application, Container, Sprite, Text, Texture, Graphics, Color, utils } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

// @ts-ignore
import PptxGenJS from 'pptxgenjs';
import { saveAs } from 'file-saver';

export default function App() {
  const [loading, showLoading] = useState(false);
  const [data, setData] = useState<any | null>({
    "slides": [
      {
        "shapes": [
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 188.50393700787401,
              "height": 155.90551181102362
            },
            "position": {
              "x": 21.99488188976378,
              "y": 351.0606299212598
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "mapImage",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 280.62992125984255,
              "height": 14.173228346456693
            },
            "position": {
              "x": 477.82582677165357,
              "y": 60.34
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 9,
                    "text": "공실 현황",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "size": {
              "width": 238.11023622047244,
              "height": 268.3944094488189
            },
            "position": {
              "x": 225.06779527559056,
              "y": 77.5
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 20.51171875
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "위치",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#4472c4",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 20.51171875
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{address}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "({",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "roadNameAddress",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "})",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 100.01171875
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "교통",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 100.01171875
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "subwayStationInformation",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 120.80022268700787
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "연면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 120.80022268700787
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{totalAreaM2} ㎡",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "({",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "totalArea",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "평",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 19.227165354330708
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 141.58872662401575
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "빌딩 규모",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 19.227165354330708
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 141.58872662401575
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "지상 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "floorCount",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "/",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 지하 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "basementCount",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 162.81589197834646
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "건축물 용도",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 162.81589197834646
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "mainPurpose",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 183.60439591535433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "주 출입구 방향",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 183.60439591535433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "buildingDirection",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 204.3928998523622
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "사용승인일자",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 204.3928998523622
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "completedConstructDate",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "} / {",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "remodelingYear",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "} ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "리모델링",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 225.18140378937008
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용률",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 225.18140378937008
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "exclusiveRate",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "%",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 245.96990772637795
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "기준층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 임대 면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 245.96990772637795
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "standardLeasableArea",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "M2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "} ㎡ ({",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "standardLeasableArea",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "평",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 266.7584116633858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "기준층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 전용 면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 266.7584116633858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "standardNetLeasableArea",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "M2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "} ㎡ ({",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "standardNetLeasableArea",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "평",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 287.5469156003937
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "엘리베이터",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 287.5469156003937
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "elevatorTotalCount",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "일반 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "public",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ",",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 화물 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "freight",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 308.33541953740155
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층당 화장실 개수",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 308.33541953740155
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 329.1239234744094
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "총 주차 대수",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 18.788503937007874
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 329.1239234744094
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "totalParkingCount",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 63.883307086614174,
                    "height": 20.51171875
                  },
                  "position": {
                    "x": 225.06779527559056,
                    "y": 349.9124274114173
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "무료 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "/ ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "유료 주차",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 174.22692913385828,
                    "height": 20.51171875
                  },
                  "position": {
                    "x": 290.9511023622047,
                    "y": 349.9124274114173
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "freeParkingDetail",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "/ ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "paidParkingDetail",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 238.11023622047244,
              "height": 14.173228346456693
            },
            "position": {
              "x": 225.45062992125983,
              "y": 60.34
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 9,
                    "text": "건물 개요",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 128.44149606299212,
              "height": 12.994960629921259
            },
            "position": {
              "x": 630.0142519685039,
              "y": 60.92913385826772
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "(",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "단위",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": ": ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "원",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "/3.3m², VAT",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "별도",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": ")",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "RIGHT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 123.16976377952756,
              "height": 48.87503937007874
            },
            "position": {
              "x": 656.8301574803149,
              "y": 0
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "size": {
              "width": 135.20338582677167,
              "height": 28.392834645669293
            },
            "imageData": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABKCAMAAAGzwvyHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSUExURQAAAP////39/f7+/v39/f7+/v7+/v39/f////39/f7+/v39/f39/f39/f7+/v39/f39/f39/f7+/v////39/f7+/v39/f7+/v39/f39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f////7+/v39/f////39/f7+/v39/f39/f7+/v////39/f7+/v39/f7+/v////39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v////39/f////7+/v7+/v39/f39/f7+/v7+/v39/f7+/v7+/v39/f7+/v39/f////7+/v////39/f7+/v39/f7+/v39/f7+/v39/f////7+/v7+/v////39/f39/f7+/v39/f7+/v////////39/f7+/v7+/v7+/v39/f////39/f7+/v39/f////39/f7+/v39/f7+/v39/f7+/v39/f7+/v39/f39/f7+/v7+/v39/f39/f7+/v39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f7+/v39/f7+/v////7+/v39/f7+/v39/f39/f7+/v////39/f7+/v39/f////39/f39/f7+/v////39/f39/f7+/v39/f7+/v39/f////7+/v39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v39/f////39/f39/f7+/v////39/f7+/v////39/f7+/v39/f39/f7+/v////7+/v39/f7+/v39/f7+/v////39/f7+/v39/a2ECYoAAADGdFJOUwBAiRrKWwf48KQ15ZHSY7+s7X4PmSraa4bHWLT1MuJzBI4fz039YDrqDJYn17FCFJ4v33ABiwm5+qY35yTUZczBeFI/79xtGclaR/c05AYhiNEO7H2YKdk8Flf/s/Qx4XIDRM5fC0z8Hqg56aCVJtZnghPDVLDxLm+Ky1y4SfmlNuZ3CJIj02StPu5/ECvbbIfIWcC1RvYYouN0BY/QDb1O/iA763yX2IQVxVayQ/Oqn+BxAs1eMLpL++h5CiWBEsJTZpwt3S/hA7IAAAAJcEhZcwAAMsAAADLAAShkWtsAAAjKSURBVGhD7ZuJu1xFEcU7CCHKLorKZghgjCCLRIyyJeaxCQYIhK1NIAiERZ4CGnYUAwIBRVEEwYARVATEJbgEQuL6f1l16lR33+WFmy8zXzIf/cv3uk6dru7p9Jt3Z+beO2G3Igra2I/kIlQ/SE+sjPUv1/jnualYJ9HOTnE8V4OYl7JI6zHAkoIYnomfQ6f/WM205c3ikk2M71+KXdsg+6Qb1zBb+zxPPCuxf+tcYVCzGClaFus/ZD3F6MMPml+kQW5WRoVup22ox4cknoq80VjlrxnFsWh9PaSRXtE0TCSpDSKkYVmH1MvIwvi0KWleRKcXvMqIKphUbWyICmaWJNeN7CFHFzqZdUBHjAtYKHzDBoTwBgwzaVlUWA9Vqew69HkY42xRD0i80C0Ebz6Cdo765kH81yKsLqlvg4sc0W010tq8ueC95mULcRCNT7phTdCj2RyV35EDHrwwfN74fMtgtsY05l27A/OyE2EOR8G26Lq9DyCrFiy0ZIkI0y60ib+Xn/vL35tWDNiHGH+SM9Q9Fg834YY0ug+ulQH7q00qsiivRyasYsrmLSqH/t7CPlKyxJK4H8qleSrMjavM5Lx7qq3d25+3UqlUJoHTl1LsYng8NT7WtpAXxo9SDtFSkZ/Z+apoqEEJJE1HcUdrBqLlFymH+kgGiGuZw/iMC4+F0lMSrrFeiE30chfY2fVSHmyyNcGUpN+jZleuSEpjStJ6w3Wi7uhMubPrvcHGWItAvECjslT0MaXlSoKefojxTM3Sem9nvwYHHU6ft32sHKMEmvcy1c3RljbWu83HKFQMC+mXz9/L1aAGkuZ3IR6Hw/KX+obBO16av5RGCknpNiJdaYL7q08G85MwRrDeLO6S+HZy/AyE5le4+LALjbcgvKsp1FR+PszWftqIZCTrhbpA4kkqSO7JPN1wmKBOgMx/b+zS4Ei6M+vdQa4Z5+SVSqVSqVQqleEsnUexi+E7UOUgWu49yDQsp/GWpReLnAV1uajvQ2HMfSaLOX+KXAc43230E1QNgyMMOKcyEX4J4+fMBOR9670qdzfnnJZ8bOvFQEqwRnL9AJfQgr71orNvveqNeL0f1dMlj/jAoyTcqj3nW47Zz3HhD9+/3gOhkSTxaRsgHwQTajegP4SiWuTKEI7Nzr3a6HyHIoWU0LPeq0X8zHoFEQ01vvWK1vYDdBRzwUUiD+ldr8R981QiGmqs631bQ9zzdJrq/o+yePjuetF8FbYITmpq1OvVIbI+aY80h+ijvy7xCFQKavat9zH4r6IVJGZxtA1w9O8tQ5PZEFBtowR1cJaDhPB5tMSs7nolfNACbIkZyUe+3httmA98nJkQjpDmdbNt+hnWq6kEPQD6KoDm7fVSSl8Sg7FqG9Ycpze22ZRTdFAWwlZpG+tdDzuELzNKcDTFevuev/2Pu31YraOwNwV2ZNMeGieIPCqEJyV8CgYXKO1ryEXYnXdu28gxrHdLHrbMh18ASzvWmuE1EvREm/0K8mnUVMDwQ8ZxrBenQqE2unMlHQ14RqhY70KvFOjdE1JhrXKfKTc03iFxHOvF0KsZE3qn12JqQ0vPoVb0/gC9H9AQ+Y5NodkyivLv7TdWBZLS4oHkah+okTyMjn8yM77+Qgg/oMbDHyMBdYJaeSYIWf941quv/9B43gmLYCs0wmtos4N3yCrgCXdDZ8fUKNe7g4x18rGwjLFSqVQqlUqlUqlUKpVKpVLZaez0W5PNZ7GzyWJeVj52vd313uHAva0gxje30nq/w/3ociMLwNy1dDNTC9hnPEe74HZ2KX5+1S7aGHrpRsHlR0evoIA3aZDyBu4CXPYG5RncEl5N69xA38HqRgzn7mM+S8Km9H9ucg37eR2si311Qxm6vcWFCNwfkJhhewUWTNz2xuPbNX/V7NzPMotxH3SHfzAVDvtDWPjtTzARvmIVQ7dXbwZINE6S+/Y+QVbkyyknoMAf4YozmuyB3l28vcyMF/zZehtSXKQTkJDD5RBMGb7IfvvWhfE3WvE5ywdurxlv8RhOE/j2MgW0zPNHKC/5FexG2xvCtaVNPdPj6zc3AHNCM/4K2bDt5a/VB+ttGU7f9l5P70lNJml7G/YiJvF6pG3YOdMU5g/a3v9Yvo5fmIrxSnYIfdu7hN7BmkzS9r5R2guYZO58ai56FFzbFi5mnuj9z29ve+1WwbhCNQ9I8EHP9k7TMs8fYcN5Tfj+ZfqQLhxBrG7EpLl/TCVPHvuCpMAX79X97xzuR+ejzJCU+L2iODoM2V7LNpdJntW393cGv4UJlqPAH6FN8zanBqwgNEdLnhvfEG1g96iCPWg10XcOvr2zrTAzjx1Dt5eZJf5uRO8VA769Hfja+V7b2zk4iEdFrG7ElHPr12EzGzsbFsK/Fq/Re3wS+gSmfMkqMh9nhxxKh2zvmZbg0KA8ZPmzTHu3t7yryx9h6LFXPCpidSOmMfe7zJTmh7IW+7KoXKT1ZGib7zcR9m3vy5qsY4Ie0DSax14/WtnbEjAB21s8InNnNaNzQC47jrI1hKY9ee2OPOEeZMaf6CGhfhEJ4G9kpWWtlzZmxQfvidje8A6NeCEN4TDNVzEBN6Ekxi9o8lsm8Wb0AX/jnA7Jm5nnab9EB9925ge9b6KH8A3h/kha2xteYX4J8wnZ3vwKd5rleu+0c9vJ8i7r2b2YpW+UzGeqrJg1a+saaiEfYvIx+5XLTjkln1vYWzs/xASVCZr4DbW3N5xNw+48zdvbRm/QE3aX7Q3hNHpxoeWXMu3wvPULvS88Rnr7cSSNJnejjwmOwhl/56y6s73ha3Q2Wjox25tPrFxGYxvzBsex08C9wjPBI4R+p6TJVdbh30+yLEP7TpHd7c3HMWS75/aeaDBz6J6IT1xk/s1cRzxrr+IVqGDV31mw6N/IZzH9FjJj+h47dNz6qN52bcyWR6JsstBWoZ3bskwsoAdzC3Ubvd9aWM00IR4VsbrJYssfY9yPulKpVCqVSqVSqVQqIfwflpidciC4KpUAAAAASUVORK5CYII=",
            "position": {
              "x": 643.9314960629921,
              "y": 10.241102362204725
            },
            "type": "image"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 623.9974803149606,
              "height": 25.097874015748033
            },
            "position": {
              "x": 21.739055118110237,
              "y": 23.77716535433071
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "{",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "buildingName",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "} ",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#c00000",
                    "isUnderlined": false,
                    "fontSize": 14,
                    "text": "개요",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 56.65157480314961,
              "height": 40.54590551181102
            },
            "position": {
              "x": 600.4525196850394,
              "y": 8.329133858267717
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 780,
              "height": 11.295748031496062
            },
            "position": {
              "x": 0,
              "y": 0.00007874015748031496
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#7f7f7f",
            "size": {
              "width": 780,
              "height": 24.53220472440945
            },
            "position": {
              "x": 0,
              "y": 515.4677952755906
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 24.661417322834644,
              "height": 24.661417322834644
            },
            "position": {
              "x": 755.3385826771654,
              "y": 515.3385826771654
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10.5,
                    "text": "1",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "exo bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 357.661811023622,
              "height": 17.007874015748033
            },
            "position": {
              "x": 0,
              "y": 519.2299212598425
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": "* ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": "당사는 임대인으로부터 수집한 정보를 제공하며",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": ", ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": "이는 수집일자에 따라 건축물대장 및 실제 정보와 상이할 수 있습니다",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": ".",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "RIGHT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#ffffff",
            "size": {
              "width": 238.11023622047244,
              "height": 155.90551181102362
            },
            "position": {
              "x": 225.45062992125983,
              "y": 351.4692125984252
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {},
          {},
          {
            "size": {
              "width": 280.62984251968504,
              "height": 166.06811023622046
            },
            "position": {
              "x": 477.825905511811,
              "y": 77.5
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 34.2751968503937,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 477.825905511811,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 514.1011023622048,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 560.0534645669292,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 43.978818897637794,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 606.0058267716536,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "입주시기",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 40.66543307086614,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 651.9846456692914,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "보증금",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 694.6500787401575,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대료",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 733.5529133858267,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "관리비",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 34.2751968503937,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 477.825905511811,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.length",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "<11}{#products}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "prdLoc",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 514.1011023622048,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "leasableAreaM2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 560.0534645669292,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "netLeasableAreaM2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 43.978818897637794,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 606.0058267716536,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "vacancy",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 40.66543307086614,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 651.9846456692914,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "deposit",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 694.6500787401575,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "rent",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 113.61250126361847
                  },
                  "position": {
                    "x": 733.5529133858267,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "maintenanceFee",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}{/}{/}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 34.2751968503937,
                    "height": 62.66023622047244
                  },
                  "position": {
                    "x": 477.825905511811,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.length",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ">10}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 217.45181102362199,
                    "height": 62.66023622047243
                  },
                  "position": {
                    "x": 514.1011023622048,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "다음 페이지 참조",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 62.66023622047244
                  },
                  "position": {
                    "x": 560.0534645669292,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 43.978818897637794,
                    "height": 62.66023622047244
                  },
                  "position": {
                    "x": 606.0058267716536,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 40.66543307086614,
                    "height": 62.66023622047244
                  },
                  "position": {
                    "x": 651.9846456692914,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 62.66023622047244
                  },
                  "position": {
                    "x": 694.6500787401575,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 62.66023622047244
                  },
                  "position": {
                    "x": 733.5529133858267,
                    "y": 212.1203752793665
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{/}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 34.2751968503937,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 477.825905511811,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.length",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "<11}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "합계",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 514.1011023622048,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.totalLeasableAreaM2",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 43.95236220472441,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 560.0534645669292,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.totalNetLeasableAreaM2",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 164.44992125984243,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 606.0058267716536,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{/}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 40.66543307086614,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 651.9846456692914,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 694.6500787401575,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 36.902834645669294,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 733.5529133858267,
                    "y": 276.7806114998389
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "size": {
              "width": 280.62992125984255,
              "height": 155.8787401574803
            },
            "position": {
              "x": 477.82582677165357,
              "y": 351.496062992126
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cf5c5c",
                  "size": {
                    "width": 86.58724409448818,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 477.82582677165357,
                    "y": 351.496062992126
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "제안층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 위치",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#4472c4",
                  "size": {
                    "width": 194.04267716535432,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 566.4130708661418,
                    "y": 351.496062992126
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{floor[0].location}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cf5c5c",
                  "size": {
                    "width": 86.58724409448818,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 477.82582677165357,
                    "y": 384.67181102362207
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "제안층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "/ ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 194.04267716535432,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 566.4130708661418,
                    "y": 384.67181102362207
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{floor[0].area}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "m",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cf5c5c",
                  "size": {
                    "width": 86.58724409448818,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 477.82582677165357,
                    "y": 417.84755905511815
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "제안층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "월 합계 금액",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 194.04267716535432,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 566.4130708661418,
                    "y": 417.84755905511815
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "￦",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "RIGHT",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cf5c5c",
                  "size": {
                    "width": 86.58724409448818,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 477.82582677165357,
                    "y": 451.02330708661424
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "제안층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "초년차",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "NOC",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "할인조건 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "미반영",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "exo bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cfd5ea",
                  "size": {
                    "width": 194.04267716535432,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 566.4130708661418,
                    "y": 451.02330708661424
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#c00000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "￦ ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#c00000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#c00000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "floorNOC",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#c00000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "RIGHT",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#cf5c5c",
                  "size": {
                    "width": 86.58724409448818,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 477.82582677165357,
                    "y": 484.1990551181103
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "특이사항",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 194.04267716535432,
                    "height": 31.175748031496063
                  },
                  "position": {
                    "x": 566.4130708661418,
                    "y": 484.1990551181103
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": -5.669291338582677,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": true,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 188.92,
              "height": 283.46456692913387
            },
            "position": {
              "x": 21.5,
              "y": 60.34
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "buildingImage",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          }
        ]
      },
      {
        "shapes": [
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 736.7609448818897,
              "height": 14.173228346456693
            },
            "position": {
              "x": 21.739055118110237,
              "y": 60.34
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 9,
                    "text": "공실 현황",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 128.44149606299212,
              "height": 12.994960629921259
            },
            "position": {
              "x": 629.8194488188976,
              "y": 60.92913385826772
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "(",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "단위",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": ": ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "원",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "/3.3m², VAT",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": "별도",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 6,
                    "text": ")",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "RIGHT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "size": {
              "width": 354.33062992125986,
              "height": 84.20787401574803
            },
            "position": {
              "x": 20.820708661417324,
              "y": 77.5
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 38.37188976377953,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 20.820708661417324,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 61.19259842519685,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 116.48685039370079,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.40259842519685,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 171.78110236220473,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "입주시기",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 49.379133858267714,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 227.1837007874016,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "보증금",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 278.5628346456693,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대료",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 333.8570866141732,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "관리비",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 38.37188976377953,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 20.820708661417324,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#products",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "|splice:0:17",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}{",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "prdLoc",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 61.19259842519685,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "leasableAreaM2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 116.48685039370079,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "netLeasableAreaM2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.40259842519685,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 171.78110236220473,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "vacancy",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 49.379133858267714,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 227.1837007874016,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "deposit",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 278.5628346456693,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "rent",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 333.8570866141732,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "maintenanceFee",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}{/}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 38.37188976377953,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 20.820708661417324,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.length",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "<18}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "합계",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 61.19259842519685,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.totalLeasableAreaM2",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 116.48685039370079,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.totalNetLeasableAreaM2",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 215.37023622047244,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 171.78110236220473,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{/}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 49.379133858267714,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 227.1837007874016,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 278.5628346456693,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.294251968503936,
                    "height": 50.287500500679016
                  },
                  "position": {
                    "x": 333.8570866141732,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 123.16976377952756,
              "height": 48.87503937007874
            },
            "position": {
              "x": 656.8301574803149,
              "y": 0
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "size": {
              "width": 135.20338582677167,
              "height": 28.392834645669293
            },
            "imageData": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABKCAMAAAGzwvyHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSUExURQAAAP////39/f7+/v39/f7+/v7+/v39/f////39/f7+/v39/f39/f39/f7+/v39/f39/f39/f7+/v////39/f7+/v39/f7+/v39/f39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f////7+/v39/f////39/f7+/v39/f39/f7+/v////39/f7+/v39/f7+/v////39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v////39/f////7+/v7+/v39/f39/f7+/v7+/v39/f7+/v7+/v39/f7+/v39/f////7+/v////39/f7+/v39/f7+/v39/f7+/v39/f////7+/v7+/v////39/f39/f7+/v39/f7+/v////////39/f7+/v7+/v7+/v39/f////39/f7+/v39/f////39/f7+/v39/f7+/v39/f7+/v39/f7+/v39/f39/f7+/v7+/v39/f39/f7+/v39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f7+/v39/f7+/v////7+/v39/f7+/v39/f39/f7+/v////39/f7+/v39/f////39/f39/f7+/v////39/f39/f7+/v39/f7+/v39/f////7+/v39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v39/f////39/f39/f7+/v////39/f7+/v////39/f7+/v39/f39/f7+/v////7+/v39/f7+/v39/f7+/v////39/f7+/v39/a2ECYoAAADGdFJOUwBAiRrKWwf48KQ15ZHSY7+s7X4PmSraa4bHWLT1MuJzBI4fz039YDrqDJYn17FCFJ4v33ABiwm5+qY35yTUZczBeFI/79xtGclaR/c05AYhiNEO7H2YKdk8Flf/s/Qx4XIDRM5fC0z8Hqg56aCVJtZnghPDVLDxLm+Ky1y4SfmlNuZ3CJIj02StPu5/ECvbbIfIWcC1RvYYouN0BY/QDb1O/iA763yX2IQVxVayQ/Oqn+BxAs1eMLpL++h5CiWBEsJTZpwt3S/hA7IAAAAJcEhZcwAAMsAAADLAAShkWtsAAAjKSURBVGhD7ZuJu1xFEcU7CCHKLorKZghgjCCLRIyyJeaxCQYIhK1NIAiERZ4CGnYUAwIBRVEEwYARVATEJbgEQuL6f1l16lR33+WFmy8zXzIf/cv3uk6dru7p9Jt3Z+beO2G3Igra2I/kIlQ/SE+sjPUv1/jnualYJ9HOTnE8V4OYl7JI6zHAkoIYnomfQ6f/WM205c3ikk2M71+KXdsg+6Qb1zBb+zxPPCuxf+tcYVCzGClaFus/ZD3F6MMPml+kQW5WRoVup22ox4cknoq80VjlrxnFsWh9PaSRXtE0TCSpDSKkYVmH1MvIwvi0KWleRKcXvMqIKphUbWyICmaWJNeN7CFHFzqZdUBHjAtYKHzDBoTwBgwzaVlUWA9Vqew69HkY42xRD0i80C0Ebz6Cdo765kH81yKsLqlvg4sc0W010tq8ueC95mULcRCNT7phTdCj2RyV35EDHrwwfN74fMtgtsY05l27A/OyE2EOR8G26Lq9DyCrFiy0ZIkI0y60ib+Xn/vL35tWDNiHGH+SM9Q9Fg834YY0ug+ulQH7q00qsiivRyasYsrmLSqH/t7CPlKyxJK4H8qleSrMjavM5Lx7qq3d25+3UqlUJoHTl1LsYng8NT7WtpAXxo9SDtFSkZ/Z+apoqEEJJE1HcUdrBqLlFymH+kgGiGuZw/iMC4+F0lMSrrFeiE30chfY2fVSHmyyNcGUpN+jZleuSEpjStJ6w3Wi7uhMubPrvcHGWItAvECjslT0MaXlSoKefojxTM3Sem9nvwYHHU6ft32sHKMEmvcy1c3RljbWu83HKFQMC+mXz9/L1aAGkuZ3IR6Hw/KX+obBO16av5RGCknpNiJdaYL7q08G85MwRrDeLO6S+HZy/AyE5le4+LALjbcgvKsp1FR+PszWftqIZCTrhbpA4kkqSO7JPN1wmKBOgMx/b+zS4Ei6M+vdQa4Z5+SVSqVSqVQqleEsnUexi+E7UOUgWu49yDQsp/GWpReLnAV1uajvQ2HMfSaLOX+KXAc43230E1QNgyMMOKcyEX4J4+fMBOR9670qdzfnnJZ8bOvFQEqwRnL9AJfQgr71orNvveqNeL0f1dMlj/jAoyTcqj3nW47Zz3HhD9+/3gOhkSTxaRsgHwQTajegP4SiWuTKEI7Nzr3a6HyHIoWU0LPeq0X8zHoFEQ01vvWK1vYDdBRzwUUiD+ldr8R981QiGmqs631bQ9zzdJrq/o+yePjuetF8FbYITmpq1OvVIbI+aY80h+ijvy7xCFQKavat9zH4r6IVJGZxtA1w9O8tQ5PZEFBtowR1cJaDhPB5tMSs7nolfNACbIkZyUe+3httmA98nJkQjpDmdbNt+hnWq6kEPQD6KoDm7fVSSl8Sg7FqG9Ycpze22ZRTdFAWwlZpG+tdDzuELzNKcDTFevuev/2Pu31YraOwNwV2ZNMeGieIPCqEJyV8CgYXKO1ryEXYnXdu28gxrHdLHrbMh18ASzvWmuE1EvREm/0K8mnUVMDwQ8ZxrBenQqE2unMlHQ14RqhY70KvFOjdE1JhrXKfKTc03iFxHOvF0KsZE3qn12JqQ0vPoVb0/gC9H9AQ+Y5NodkyivLv7TdWBZLS4oHkah+okTyMjn8yM77+Qgg/oMbDHyMBdYJaeSYIWf941quv/9B43gmLYCs0wmtos4N3yCrgCXdDZ8fUKNe7g4x18rGwjLFSqVQqlUqlUqlUKpVKpVLZaez0W5PNZ7GzyWJeVj52vd313uHAva0gxje30nq/w/3ociMLwNy1dDNTC9hnPEe74HZ2KX5+1S7aGHrpRsHlR0evoIA3aZDyBu4CXPYG5RncEl5N69xA38HqRgzn7mM+S8Km9H9ucg37eR2si311Qxm6vcWFCNwfkJhhewUWTNz2xuPbNX/V7NzPMotxH3SHfzAVDvtDWPjtTzARvmIVQ7dXbwZINE6S+/Y+QVbkyyknoMAf4YozmuyB3l28vcyMF/zZehtSXKQTkJDD5RBMGb7IfvvWhfE3WvE5ywdurxlv8RhOE/j2MgW0zPNHKC/5FexG2xvCtaVNPdPj6zc3AHNCM/4K2bDt5a/VB+ttGU7f9l5P70lNJml7G/YiJvF6pG3YOdMU5g/a3v9Yvo5fmIrxSnYIfdu7hN7BmkzS9r5R2guYZO58ai56FFzbFi5mnuj9z29ve+1WwbhCNQ9I8EHP9k7TMs8fYcN5Tfj+ZfqQLhxBrG7EpLl/TCVPHvuCpMAX79X97xzuR+ejzJCU+L2iODoM2V7LNpdJntW393cGv4UJlqPAH6FN8zanBqwgNEdLnhvfEG1g96iCPWg10XcOvr2zrTAzjx1Dt5eZJf5uRO8VA769Hfja+V7b2zk4iEdFrG7ElHPr12EzGzsbFsK/Fq/Re3wS+gSmfMkqMh9nhxxKh2zvmZbg0KA8ZPmzTHu3t7yryx9h6LFXPCpidSOmMfe7zJTmh7IW+7KoXKT1ZGib7zcR9m3vy5qsY4Ie0DSax14/WtnbEjAB21s8InNnNaNzQC47jrI1hKY9ee2OPOEeZMaf6CGhfhEJ4G9kpWWtlzZmxQfvidje8A6NeCEN4TDNVzEBN6Ekxi9o8lsm8Wb0AX/jnA7Jm5nnab9EB9925ge9b6KH8A3h/kha2xteYX4J8wnZ3vwKd5rleu+0c9vJ8i7r2b2YpW+UzGeqrJg1a+saaiEfYvIx+5XLTjkln1vYWzs/xASVCZr4DbW3N5xNw+48zdvbRm/QE3aX7Q3hNHpxoeWXMu3wvPULvS88Rnr7cSSNJnejjwmOwhl/56y6s73ha3Q2Wjox25tPrFxGYxvzBsex08C9wjPBI4R+p6TJVdbh30+yLEP7TpHd7c3HMWS75/aeaDBz6J6IT1xk/s1cRzxrr+IVqGDV31mw6N/IZzH9FjJj+h47dNz6qN52bcyWR6JsstBWoZ3bskwsoAdzC3Ubvd9aWM00IR4VsbrJYssfY9yPulKpVCqVSqVSqVQqIfwflpidciC4KpUAAAAASUVORK5CYII=",
            "position": {
              "x": 643.9314960629921,
              "y": 10.241102362204725
            },
            "type": "image"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 623.9974803149606,
              "height": 25.097874015748033
            },
            "position": {
              "x": 21.739055118110237,
              "y": 23.77716535433071
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "{",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "buildingName",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "}",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": " ",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#c00000",
                    "isUnderlined": false,
                    "fontSize": 14,
                    "text": "개요",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 56.65157480314961,
              "height": 40.54590551181102
            },
            "position": {
              "x": 600.4525196850394,
              "y": 8.329133858267717
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 780,
              "height": 11.295748031496062
            },
            "position": {
              "x": 0,
              "y": 0.00007874015748031496
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#7f7f7f",
            "size": {
              "width": 780,
              "height": 24.53220472440945
            },
            "position": {
              "x": 0,
              "y": 515.4677952755906
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 24.661417322834644,
              "height": 24.661417322834644
            },
            "position": {
              "x": 755.3385826771654,
              "y": 515.3385826771654
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10.5,
                    "text": "2",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "exo bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 357.661811023622,
              "height": 17.007874015748033
            },
            "position": {
              "x": 0,
              "y": 519.2299212598425
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": "* ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": "당사는 임대인으로부터 수집한 정보를 제공하며",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": ", ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": "이는 수집일자에 따라 건축물대장 및 실제 정보와 상이할 수 있습니다",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR DemiLight"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 7,
                    "text": ".",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "RIGHT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "size": {
              "width": 354.33062992125986,
              "height": 122.60787401574804
            },
            "position": {
              "x": 404.1251181102362,
              "y": 77.5
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 38.36755905511811,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 404.1251181102362,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 444.4926771653543,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 499.78763779527554,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용면적",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.403385826771654,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 555.0825984251968,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "입주시기",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 49.37984251968504,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 610.4859842519685,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "보증금",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 661.8658267716535,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대료",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#808080",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 717.1607874015747,
                    "y": 77.5
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "관리비",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 38.36755905511811,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 404.1251181102362,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#products",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "|splice:17:34",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}{",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "prdLoc",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 444.4926771653543,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "leasableAreaM2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 499.78763779527554,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "netLeasableAreaM2",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.403385826771654,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 555.0825984251968,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "vacancy",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 49.37984251968504,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 610.4859842519685,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "deposit",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 661.8658267716535,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "rent",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 66.11875069141388
                  },
                  "position": {
                    "x": 717.1607874015747,
                    "y": 96.50787401574803
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "maintenanceFee",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}{/}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 38.36755905511811,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 404.1251181102362,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{#",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.length",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ">17}{#",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.length",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "<35}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#595959",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "합계",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 444.4926771653543,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.totalLeasableAreaM2",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 499.78763779527554,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "products.totalNetLeasableAreaM2",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 215.37314960629908,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 555.0825984251968,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{/}{/}",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 49.37984251968504,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 610.4859842519685,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 661.8658267716535,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 53.29496062992126,
                    "height": 97.7812510728836
                  },
                  "position": {
                    "x": 717.1607874015747,
                    "y": 164.6266247071619
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          }
        ]
      },
      {
        "shapes": [
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#404040",
            "size": {
              "width": 229.60629921259843,
              "height": 14.173228346456693
            },
            "position": {
              "x": 525.5767716535433,
              "y": 265.16984251968506
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "{photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "[2].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "photoLocalName",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#404040",
            "size": {
              "width": 229.60629921259843,
              "height": 14.173228346456693
            },
            "position": {
              "x": 25.45251968503937,
              "y": 478.9376377952756
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "{photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "[3].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "photoLocalName",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#404040",
            "size": {
              "width": 229.60629921259843,
              "height": 14.173228346456693
            },
            "position": {
              "x": 275.5146456692913,
              "y": 265.24976377952754
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "{photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "[1].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "photoLocalName",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#404040",
            "size": {
              "width": 229.60629921259843,
              "height": 14.173228346456693
            },
            "position": {
              "x": 525.5767716535433,
              "y": 478.9376377952756
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "{photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "[5].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "photoLocalName",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#404040",
            "size": {
              "width": 229.60629921259843,
              "height": 14.173228346456693
            },
            "position": {
              "x": 25.45251968503937,
              "y": 265.24976377952754
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "{photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "[0].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "photoLocalName",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#404040",
            "size": {
              "width": 229.60629921259843,
              "height": 14.173228346456693
            },
            "position": {
              "x": 275.5146456692913,
              "y": 478.9376377952756
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "{photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "[4].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "photoLocalName",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 123.16976377952756,
              "height": 48.87503937007874
            },
            "position": {
              "x": 656.8301574803149,
              "y": 0
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "size": {
              "width": 135.20338582677167,
              "height": 28.392834645669293
            },
            "imageData": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABKCAMAAAGzwvyHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSUExURQAAAP////39/f7+/v39/f7+/v7+/v39/f////39/f7+/v39/f39/f39/f7+/v39/f39/f39/f7+/v////39/f7+/v39/f7+/v39/f39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f////7+/v39/f////39/f7+/v39/f39/f7+/v////39/f7+/v39/f7+/v////39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v////39/f////7+/v7+/v39/f39/f7+/v7+/v39/f7+/v7+/v39/f7+/v39/f////7+/v////39/f7+/v39/f7+/v39/f7+/v39/f////7+/v7+/v////39/f39/f7+/v39/f7+/v////////39/f7+/v7+/v7+/v39/f////39/f7+/v39/f////39/f7+/v39/f7+/v39/f7+/v39/f7+/v39/f39/f7+/v7+/v39/f39/f7+/v39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f7+/v39/f7+/v////7+/v39/f7+/v39/f39/f7+/v////39/f7+/v39/f////39/f39/f7+/v////39/f39/f7+/v39/f7+/v39/f////7+/v39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v39/f////39/f39/f7+/v////39/f7+/v////39/f7+/v39/f39/f7+/v////7+/v39/f7+/v39/f7+/v////39/f7+/v39/a2ECYoAAADGdFJOUwBAiRrKWwf48KQ15ZHSY7+s7X4PmSraa4bHWLT1MuJzBI4fz039YDrqDJYn17FCFJ4v33ABiwm5+qY35yTUZczBeFI/79xtGclaR/c05AYhiNEO7H2YKdk8Flf/s/Qx4XIDRM5fC0z8Hqg56aCVJtZnghPDVLDxLm+Ky1y4SfmlNuZ3CJIj02StPu5/ECvbbIfIWcC1RvYYouN0BY/QDb1O/iA763yX2IQVxVayQ/Oqn+BxAs1eMLpL++h5CiWBEsJTZpwt3S/hA7IAAAAJcEhZcwAAMsAAADLAAShkWtsAAAjKSURBVGhD7ZuJu1xFEcU7CCHKLorKZghgjCCLRIyyJeaxCQYIhK1NIAiERZ4CGnYUAwIBRVEEwYARVATEJbgEQuL6f1l16lR33+WFmy8zXzIf/cv3uk6dru7p9Jt3Z+beO2G3Igra2I/kIlQ/SE+sjPUv1/jnualYJ9HOTnE8V4OYl7JI6zHAkoIYnomfQ6f/WM205c3ikk2M71+KXdsg+6Qb1zBb+zxPPCuxf+tcYVCzGClaFus/ZD3F6MMPml+kQW5WRoVup22ox4cknoq80VjlrxnFsWh9PaSRXtE0TCSpDSKkYVmH1MvIwvi0KWleRKcXvMqIKphUbWyICmaWJNeN7CFHFzqZdUBHjAtYKHzDBoTwBgwzaVlUWA9Vqew69HkY42xRD0i80C0Ebz6Cdo765kH81yKsLqlvg4sc0W010tq8ueC95mULcRCNT7phTdCj2RyV35EDHrwwfN74fMtgtsY05l27A/OyE2EOR8G26Lq9DyCrFiy0ZIkI0y60ib+Xn/vL35tWDNiHGH+SM9Q9Fg834YY0ug+ulQH7q00qsiivRyasYsrmLSqH/t7CPlKyxJK4H8qleSrMjavM5Lx7qq3d25+3UqlUJoHTl1LsYng8NT7WtpAXxo9SDtFSkZ/Z+apoqEEJJE1HcUdrBqLlFymH+kgGiGuZw/iMC4+F0lMSrrFeiE30chfY2fVSHmyyNcGUpN+jZleuSEpjStJ6w3Wi7uhMubPrvcHGWItAvECjslT0MaXlSoKefojxTM3Sem9nvwYHHU6ft32sHKMEmvcy1c3RljbWu83HKFQMC+mXz9/L1aAGkuZ3IR6Hw/KX+obBO16av5RGCknpNiJdaYL7q08G85MwRrDeLO6S+HZy/AyE5le4+LALjbcgvKsp1FR+PszWftqIZCTrhbpA4kkqSO7JPN1wmKBOgMx/b+zS4Ei6M+vdQa4Z5+SVSqVSqVQqleEsnUexi+E7UOUgWu49yDQsp/GWpReLnAV1uajvQ2HMfSaLOX+KXAc43230E1QNgyMMOKcyEX4J4+fMBOR9670qdzfnnJZ8bOvFQEqwRnL9AJfQgr71orNvveqNeL0f1dMlj/jAoyTcqj3nW47Zz3HhD9+/3gOhkSTxaRsgHwQTajegP4SiWuTKEI7Nzr3a6HyHIoWU0LPeq0X8zHoFEQ01vvWK1vYDdBRzwUUiD+ldr8R981QiGmqs631bQ9zzdJrq/o+yePjuetF8FbYITmpq1OvVIbI+aY80h+ijvy7xCFQKavat9zH4r6IVJGZxtA1w9O8tQ5PZEFBtowR1cJaDhPB5tMSs7nolfNACbIkZyUe+3httmA98nJkQjpDmdbNt+hnWq6kEPQD6KoDm7fVSSl8Sg7FqG9Ycpze22ZRTdFAWwlZpG+tdDzuELzNKcDTFevuev/2Pu31YraOwNwV2ZNMeGieIPCqEJyV8CgYXKO1ryEXYnXdu28gxrHdLHrbMh18ASzvWmuE1EvREm/0K8mnUVMDwQ8ZxrBenQqE2unMlHQ14RqhY70KvFOjdE1JhrXKfKTc03iFxHOvF0KsZE3qn12JqQ0vPoVb0/gC9H9AQ+Y5NodkyivLv7TdWBZLS4oHkah+okTyMjn8yM77+Qgg/oMbDHyMBdYJaeSYIWf941quv/9B43gmLYCs0wmtos4N3yCrgCXdDZ8fUKNe7g4x18rGwjLFSqVQqlUqlUqlUKpVKpVLZaez0W5PNZ7GzyWJeVj52vd313uHAva0gxje30nq/w/3ociMLwNy1dDNTC9hnPEe74HZ2KX5+1S7aGHrpRsHlR0evoIA3aZDyBu4CXPYG5RncEl5N69xA38HqRgzn7mM+S8Km9H9ucg37eR2si311Qxm6vcWFCNwfkJhhewUWTNz2xuPbNX/V7NzPMotxH3SHfzAVDvtDWPjtTzARvmIVQ7dXbwZINE6S+/Y+QVbkyyknoMAf4YozmuyB3l28vcyMF/zZehtSXKQTkJDD5RBMGb7IfvvWhfE3WvE5ywdurxlv8RhOE/j2MgW0zPNHKC/5FexG2xvCtaVNPdPj6zc3AHNCM/4K2bDt5a/VB+ttGU7f9l5P70lNJml7G/YiJvF6pG3YOdMU5g/a3v9Yvo5fmIrxSnYIfdu7hN7BmkzS9r5R2guYZO58ai56FFzbFi5mnuj9z29ve+1WwbhCNQ9I8EHP9k7TMs8fYcN5Tfj+ZfqQLhxBrG7EpLl/TCVPHvuCpMAX79X97xzuR+ejzJCU+L2iODoM2V7LNpdJntW393cGv4UJlqPAH6FN8zanBqwgNEdLnhvfEG1g96iCPWg10XcOvr2zrTAzjx1Dt5eZJf5uRO8VA769Hfja+V7b2zk4iEdFrG7ElHPr12EzGzsbFsK/Fq/Re3wS+gSmfMkqMh9nhxxKh2zvmZbg0KA8ZPmzTHu3t7yryx9h6LFXPCpidSOmMfe7zJTmh7IW+7KoXKT1ZGib7zcR9m3vy5qsY4Ie0DSax14/WtnbEjAB21s8InNnNaNzQC47jrI1hKY9ee2OPOEeZMaf6CGhfhEJ4G9kpWWtlzZmxQfvidje8A6NeCEN4TDNVzEBN6Ekxi9o8lsm8Wb0AX/jnA7Jm5nnab9EB9925ge9b6KH8A3h/kha2xteYX4J8wnZ3vwKd5rleu+0c9vJ8i7r2b2YpW+UzGeqrJg1a+saaiEfYvIx+5XLTjkln1vYWzs/xASVCZr4DbW3N5xNw+48zdvbRm/QE3aX7Q3hNHpxoeWXMu3wvPULvS88Rnr7cSSNJnejjwmOwhl/56y6s73ha3Q2Wjox25tPrFxGYxvzBsex08C9wjPBI4R+p6TJVdbh30+yLEP7TpHd7c3HMWS75/aeaDBz6J6IT1xk/s1cRzxrr+IVqGDV31mw6N/IZzH9FjJj+h47dNz6qN52bcyWR6JsstBWoZ3bskwsoAdzC3Ubvd9aWM00IR4VsbrJYssfY9yPulKpVCqVSqVSqVQqIfwflpidciC4KpUAAAAASUVORK5CYII=",
            "position": {
              "x": 643.9314960629921,
              "y": 10.241102362204725
            },
            "type": "image"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 623.9974803149606,
              "height": 25.097874015748033
            },
            "position": {
              "x": 21.739055118110237,
              "y": 23.77716535433071
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "{",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "buildingName",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "}",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": " ",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#c00000",
                    "isUnderlined": false,
                    "fontSize": 14,
                    "text": "사진",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 56.65157480314961,
              "height": 40.54590551181102
            },
            "position": {
              "x": 600.4525196850394,
              "y": 8.329133858267717
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 780,
              "height": 11.295748031496062
            },
            "position": {
              "x": 0,
              "y": 0.00007874015748031496
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#7f7f7f",
            "size": {
              "width": 780,
              "height": 24.53220472440945
            },
            "position": {
              "x": 0,
              "y": 515.4677952755906
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 24.661417322834644,
              "height": 24.661417322834644
            },
            "position": {
              "x": 755.3385826771654,
              "y": 515.3385826771654
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10.5,
                    "text": "3",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "exo bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 72,
              "height": 16.964094488188977
            },
            "position": {
              "x": 3.3485826771653544,
              "y": 49.893937007874015
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 8,
                    "text": "{",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 8,
                    "text": "#photos}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 229.60629921259843,
              "height": 178.58267716535434
            },
            "position": {
              "x": 24.816929133858267,
              "y": 85.45330708661417
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "[0].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "photoUrl",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 229.60629921259843,
              "height": 178.58267716535434
            },
            "position": {
              "x": 275.91165354330707,
              "y": 86.67811023622048
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "[1]. ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "photoUrl",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 229.88976377952756,
              "height": 178.58267716535434
            },
            "position": {
              "x": 525.2933070866142,
              "y": 85.34771653543307
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "[2]. ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "photoUrl",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 55.439370078740154,
              "height": 16.964094488188977
            },
            "position": {
              "x": 737.8558267716536,
              "y": 495.9234645669291
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 8,
                    "text": "{",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 8,
                    "text": "/photos}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 229.60629921259843,
              "height": 178.58267716535434
            },
            "position": {
              "x": 24.816929133858267,
              "y": 299.1766929133858
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "[3].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "photoUrl",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 229.60629921259843,
              "height": 178.58267716535434
            },
            "position": {
              "x": 274.8790551181102,
              "y": 298.7843307086614
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "[4].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "photoUrl",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 229.60629921259843,
              "height": 178.58267716535434
            },
            "position": {
              "x": 525.5767716535433,
              "y": 299.30590551181103
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "{%photos",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "[5].",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "photoUrl",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": "}",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Exo"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "TOP"
          }
        ]
      },
      {
        "shapes": [
          {
            "size": {
              "width": 680.3149606299213,
              "height": 93.54330708661418
            },
            "position": {
              "x": 49.84251968503937,
              "y": 87.72944881889764
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 550.5826771653543,
                    "height": 17.00787401574803
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "주차",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 195.57480314960628,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 282.61417322834643,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 369.6535433070866,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 428.34645669291336,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 515.3858267716536,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 143.73228346456688,
                    "height": 17.00787401574803
                  },
                  "position": {
                    "x": 602.4251968503937,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "엘리베이터",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 661.1181102362204,
                    "y": 87.72944881889764
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "총 주차 대수",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "주차 제공 기준 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "무료",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 195.57480314960628,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "주차 제공 기준 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "유료",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 282.61417322834643,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "주차장 이용 시간",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 369.6535433070866,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "관리 위탁 업체",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 428.34645669291336,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "기계식 입고 가능 크기",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 515.3858267716536,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "드랍 오프 존 유무",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 602.4251968503937,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "총대수",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 28.346456692913385
                  },
                  "position": {
                    "x": 661.1181102362204,
                    "y": 106.73732283464567
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "운영 현황",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "totalParkingCount",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "임대면적 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "80",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "평당 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "1",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 195.57480314960628,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 282.61417322834643,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "24",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "시간 이용 가능",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 369.6535433070866,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "어반포트",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 428.34645669291336,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "해당 없음",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 515.3858267716536,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "-",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 602.4251968503937,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "elevatorTotalCount",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 661.1181102362204,
                    "y": 137.08377952755905
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "승객용",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "6",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "화물용",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "1",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "VIP 1",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "대",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "size": {
              "width": 680.3149606299213,
              "height": 93.54330708661418
            },
            "position": {
              "x": 49.84251968503937,
              "y": 189.37307086614175
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 202.4251968503937,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "통신",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "통신",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#4472c4",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 167.22834645669292,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 172.07874015748035,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 254.26771653543307,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전기 용량",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 312.96062992125985,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 315.8110236220473,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 428.3464566929134,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "냉난방 방식",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 543.732283464567,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 659.1181102362206,
                    "y": 189.37307086614175
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582676,
                    "height": 40.26932200108925
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용 선",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 143.73228346456693,
                    "height": 14.173228346456682
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용 통신사 외 사용",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 14.173228346456693
                  },
                  "position": {
                    "x": 167.22834645669292,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.692913385826785,
                    "height": 40.26932200108925
                  },
                  "position": {
                    "x": 254.26771653543307,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "총 용량",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165357,
                    "height": 40.26932200108925
                  },
                  "position": {
                    "x": 312.96062992125985,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층별 용량",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165357,
                    "height": 40.26932200108925
                  },
                  "position": {
                    "x": 428.3464566929134,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "운영 방식",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165357,
                    "height": 40.26932200108925
                  },
                  "position": {
                    "x": 543.732283464567,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "추가 가동 시 비용",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874015,
                    "height": 40.26932200108925
                  },
                  "position": {
                    "x": 659.1181102362206,
                    "y": 215.4691645207743
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "개별 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "EHP ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "추가 설치",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "여부",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 167.22834645669292,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "방식",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 254.26771653543307,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 312.96062992125985,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 428.3464566929134,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 543.732283464567,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 659.1181102362206,
                    "y": 231.642392867231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "SK",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 108.53543307086613,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "가능",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 167.22834645669292,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "회선 임차",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 56.69291338582677,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 254.26771653543307,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "4,750kva",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 312.96062992125985,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "최대 전열 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "60kw",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "최대 전등 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "40kw",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 428.3464566929134,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "coolerState",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "/",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "{",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "heaterState",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "}",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 543.732283464567,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "협의",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 659.1181102362206,
                    "y": 257.7384865218636
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "가능",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "size": {
              "width": 680.3149606299213,
              "height": 93.54330708661418
            },
            "position": {
              "x": 49.84251968503937,
              "y": 298.6166929133858
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 172.07874015748033,
                    "height": 17.00787401574803
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "층고",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 9,
                          "text": "계단",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 346.1574803149606,
                    "height": 17.00787401574803
                  },
                  "position": {
                    "x": 223.9212598425197,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "보안",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 310.96062992125985,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 398,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 485.03937007874015,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 172.0787401574803,
                    "height": 17.00787401574803
                  },
                  "position": {
                    "x": 572.0787401574803,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "화장실",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 17.007874015748033
                  },
                  "position": {
                    "x": 659.1181102362204,
                    "y": 298.6166929133858
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874015,
                    "height": 40.26932200108928
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "마감 기준",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874018,
                    "height": 40.26932200108928
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "노출 기준",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874015,
                    "height": 40.26932200108928
                  },
                  "position": {
                    "x": 223.9212598425197,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "스피드 게이트",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874015,
                    "height": 40.26932200108928
                  },
                  "position": {
                    "x": 310.96062992125985,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "보안 시설 업체",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874015,
                    "height": 40.26932200108928
                  },
                  "position": {
                    "x": 398,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "전용층",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 내 ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "\n",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "타 보안업체 사용",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874015,
                    "height": 40.26932200108928
                  },
                  "position": {
                    "x": 485.03937007874015,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "빌딩 출입 시간",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 172.0787401574803,
                    "height": 14.17322834645671
                  },
                  "position": {
                    "x": 572.0787401574803,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "양변기 개수",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 14.173228346456693
                  },
                  "position": {
                    "x": 659.1181102362204,
                    "y": 317.62456692913383
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 9,
                          "text": "내진 설계",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 223.9212598425197,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 310.96062992125985,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 398,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#e9ebf5",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 485.03937007874015,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 572.0787401574803,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "남",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 659.1181102362204,
                    "y": 333.79779527559054
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "여",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "2.6m",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "-",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 223.9212598425197,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "없음",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 310.96062992125985,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "에스원",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 398,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "협의",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 485.03937007874015,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "24",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "시간 출입 가능",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 572.0787401574803,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "3",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "칸",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    },
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "소변기 ",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "3",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "칸",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": ")",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 659.1181102362204,
                    "y": 359.8938889302231
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "3",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "칸",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "size": {
              "width": 680.3149606299213,
              "height": 85.03937007874016
            },
            "position": {
              "x": 49.84251968503937,
              "y": 407.8602362204724
            },
            "type": "table",
            "rows": [
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#7f7f7f",
                  "size": {
                    "width": 692.3149606299212,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#ffffff",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "기타",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#4472c4",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 252.26771653543307,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 367.6535433070866,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 483.03937007874015,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#4472c4",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 570.0787401574803,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [],
                      "alignment": "LEFT",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "TOP"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 24.09609365463257
                  },
                  "position": {
                    "x": 657.1181102362204,
                    "y": 407.8602362204724
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "엑세스",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": " 플로어",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "바닥 하중",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 252.26771653543307,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "내진 설계",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 367.6535433070866,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "흡연실 위치",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 483.03937007874015,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "계단 개소",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 570.0787401574803,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "지하철 연결 여부",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR Bold"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#f2f2f2",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 19.84251968503937
                  },
                  "position": {
                    "x": 657.1181102362204,
                    "y": 433.956329875105
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "LEED ",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Exo"
                        },
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "등급",
                          "isBold": true,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ],
              [
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 49.84251968503937,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "존재",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    },
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "(10.0 cm)",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 136.88188976377953,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "-",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 252.26771653543307,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "-",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 113.38582677165354,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 367.6535433070866,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": null,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "-",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": null
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 483.03937007874015,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "-",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Exo"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 570.0787401574803,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "미연결",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                },
                {
                  "textDirection": "HORIZONTAL",
                  "fillColor": "#ffffff",
                  "size": {
                    "width": 85.03937007874016,
                    "height": 48.188976377952756
                  },
                  "position": {
                    "x": 657.1181102362204,
                    "y": 455.79884956014433
                  },
                  "type": "text",
                  "paragraphs": [
                    {
                      "indent": 0,
                      "textRuns": [
                        {
                          "isItalic": false,
                          "color": "#000000",
                          "isUnderlined": false,
                          "fontSize": 8,
                          "text": "플래티넘",
                          "isBold": false,
                          "isStrikethrough": false,
                          "font": "Noto Sans CJK KR DemiLight"
                        }
                      ],
                      "alignment": "CENTER",
                      "bullet": false,
                      "lineSpacing": 100
                    }
                  ],
                  "verticalAlignment": "MIDDLE"
                }
              ]
            ]
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 123.16976377952756,
              "height": 48.87503937007874
            },
            "position": {
              "x": 656.8301574803149,
              "y": 0
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "size": {
              "width": 135.20338582677167,
              "height": 28.392834645669293
            },
            "imageData": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABKCAMAAAGzwvyHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSUExURQAAAP////39/f7+/v39/f7+/v7+/v39/f////39/f7+/v39/f39/f39/f7+/v39/f39/f39/f7+/v////39/f7+/v39/f7+/v39/f39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f////7+/v39/f////39/f7+/v39/f39/f7+/v////39/f7+/v39/f7+/v////39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v////39/f////7+/v7+/v39/f39/f7+/v7+/v39/f7+/v7+/v39/f7+/v39/f////7+/v////39/f7+/v39/f7+/v39/f7+/v39/f////7+/v7+/v////39/f39/f7+/v39/f7+/v////////39/f7+/v7+/v7+/v39/f////39/f7+/v39/f////39/f7+/v39/f7+/v39/f7+/v39/f7+/v39/f39/f7+/v7+/v39/f39/f7+/v39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f7+/v39/f7+/v////7+/v39/f7+/v39/f39/f7+/v////39/f7+/v39/f////39/f39/f7+/v////39/f39/f7+/v39/f7+/v39/f////7+/v39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v39/f////39/f39/f7+/v////39/f7+/v////39/f7+/v39/f39/f7+/v////7+/v39/f7+/v39/f7+/v////39/f7+/v39/a2ECYoAAADGdFJOUwBAiRrKWwf48KQ15ZHSY7+s7X4PmSraa4bHWLT1MuJzBI4fz039YDrqDJYn17FCFJ4v33ABiwm5+qY35yTUZczBeFI/79xtGclaR/c05AYhiNEO7H2YKdk8Flf/s/Qx4XIDRM5fC0z8Hqg56aCVJtZnghPDVLDxLm+Ky1y4SfmlNuZ3CJIj02StPu5/ECvbbIfIWcC1RvYYouN0BY/QDb1O/iA763yX2IQVxVayQ/Oqn+BxAs1eMLpL++h5CiWBEsJTZpwt3S/hA7IAAAAJcEhZcwAAMsAAADLAAShkWtsAAAjKSURBVGhD7ZuJu1xFEcU7CCHKLorKZghgjCCLRIyyJeaxCQYIhK1NIAiERZ4CGnYUAwIBRVEEwYARVATEJbgEQuL6f1l16lR33+WFmy8zXzIf/cv3uk6dru7p9Jt3Z+beO2G3Igra2I/kIlQ/SE+sjPUv1/jnualYJ9HOTnE8V4OYl7JI6zHAkoIYnomfQ6f/WM205c3ikk2M71+KXdsg+6Qb1zBb+zxPPCuxf+tcYVCzGClaFus/ZD3F6MMPml+kQW5WRoVup22ox4cknoq80VjlrxnFsWh9PaSRXtE0TCSpDSKkYVmH1MvIwvi0KWleRKcXvMqIKphUbWyICmaWJNeN7CFHFzqZdUBHjAtYKHzDBoTwBgwzaVlUWA9Vqew69HkY42xRD0i80C0Ebz6Cdo765kH81yKsLqlvg4sc0W010tq8ueC95mULcRCNT7phTdCj2RyV35EDHrwwfN74fMtgtsY05l27A/OyE2EOR8G26Lq9DyCrFiy0ZIkI0y60ib+Xn/vL35tWDNiHGH+SM9Q9Fg834YY0ug+ulQH7q00qsiivRyasYsrmLSqH/t7CPlKyxJK4H8qleSrMjavM5Lx7qq3d25+3UqlUJoHTl1LsYng8NT7WtpAXxo9SDtFSkZ/Z+apoqEEJJE1HcUdrBqLlFymH+kgGiGuZw/iMC4+F0lMSrrFeiE30chfY2fVSHmyyNcGUpN+jZleuSEpjStJ6w3Wi7uhMubPrvcHGWItAvECjslT0MaXlSoKefojxTM3Sem9nvwYHHU6ft32sHKMEmvcy1c3RljbWu83HKFQMC+mXz9/L1aAGkuZ3IR6Hw/KX+obBO16av5RGCknpNiJdaYL7q08G85MwRrDeLO6S+HZy/AyE5le4+LALjbcgvKsp1FR+PszWftqIZCTrhbpA4kkqSO7JPN1wmKBOgMx/b+zS4Ei6M+vdQa4Z5+SVSqVSqVQqleEsnUexi+E7UOUgWu49yDQsp/GWpReLnAV1uajvQ2HMfSaLOX+KXAc43230E1QNgyMMOKcyEX4J4+fMBOR9670qdzfnnJZ8bOvFQEqwRnL9AJfQgr71orNvveqNeL0f1dMlj/jAoyTcqj3nW47Zz3HhD9+/3gOhkSTxaRsgHwQTajegP4SiWuTKEI7Nzr3a6HyHIoWU0LPeq0X8zHoFEQ01vvWK1vYDdBRzwUUiD+ldr8R981QiGmqs631bQ9zzdJrq/o+yePjuetF8FbYITmpq1OvVIbI+aY80h+ijvy7xCFQKavat9zH4r6IVJGZxtA1w9O8tQ5PZEFBtowR1cJaDhPB5tMSs7nolfNACbIkZyUe+3httmA98nJkQjpDmdbNt+hnWq6kEPQD6KoDm7fVSSl8Sg7FqG9Ycpze22ZRTdFAWwlZpG+tdDzuELzNKcDTFevuev/2Pu31YraOwNwV2ZNMeGieIPCqEJyV8CgYXKO1ryEXYnXdu28gxrHdLHrbMh18ASzvWmuE1EvREm/0K8mnUVMDwQ8ZxrBenQqE2unMlHQ14RqhY70KvFOjdE1JhrXKfKTc03iFxHOvF0KsZE3qn12JqQ0vPoVb0/gC9H9AQ+Y5NodkyivLv7TdWBZLS4oHkah+okTyMjn8yM77+Qgg/oMbDHyMBdYJaeSYIWf941quv/9B43gmLYCs0wmtos4N3yCrgCXdDZ8fUKNe7g4x18rGwjLFSqVQqlUqlUqlUKpVKpVLZaez0W5PNZ7GzyWJeVj52vd313uHAva0gxje30nq/w/3ociMLwNy1dDNTC9hnPEe74HZ2KX5+1S7aGHrpRsHlR0evoIA3aZDyBu4CXPYG5RncEl5N69xA38HqRgzn7mM+S8Km9H9ucg37eR2si311Qxm6vcWFCNwfkJhhewUWTNz2xuPbNX/V7NzPMotxH3SHfzAVDvtDWPjtTzARvmIVQ7dXbwZINE6S+/Y+QVbkyyknoMAf4YozmuyB3l28vcyMF/zZehtSXKQTkJDD5RBMGb7IfvvWhfE3WvE5ywdurxlv8RhOE/j2MgW0zPNHKC/5FexG2xvCtaVNPdPj6zc3AHNCM/4K2bDt5a/VB+ttGU7f9l5P70lNJml7G/YiJvF6pG3YOdMU5g/a3v9Yvo5fmIrxSnYIfdu7hN7BmkzS9r5R2guYZO58ai56FFzbFi5mnuj9z29ve+1WwbhCNQ9I8EHP9k7TMs8fYcN5Tfj+ZfqQLhxBrG7EpLl/TCVPHvuCpMAX79X97xzuR+ejzJCU+L2iODoM2V7LNpdJntW393cGv4UJlqPAH6FN8zanBqwgNEdLnhvfEG1g96iCPWg10XcOvr2zrTAzjx1Dt5eZJf5uRO8VA769Hfja+V7b2zk4iEdFrG7ElHPr12EzGzsbFsK/Fq/Re3wS+gSmfMkqMh9nhxxKh2zvmZbg0KA8ZPmzTHu3t7yryx9h6LFXPCpidSOmMfe7zJTmh7IW+7KoXKT1ZGib7zcR9m3vy5qsY4Ie0DSax14/WtnbEjAB21s8InNnNaNzQC47jrI1hKY9ee2OPOEeZMaf6CGhfhEJ4G9kpWWtlzZmxQfvidje8A6NeCEN4TDNVzEBN6Ekxi9o8lsm8Wb0AX/jnA7Jm5nnab9EB9925ge9b6KH8A3h/kha2xteYX4J8wnZ3vwKd5rleu+0c9vJ8i7r2b2YpW+UzGeqrJg1a+saaiEfYvIx+5XLTjkln1vYWzs/xASVCZr4DbW3N5xNw+48zdvbRm/QE3aX7Q3hNHpxoeWXMu3wvPULvS88Rnr7cSSNJnejjwmOwhl/56y6s73ha3Q2Wjox25tPrFxGYxvzBsex08C9wjPBI4R+p6TJVdbh30+yLEP7TpHd7c3HMWS75/aeaDBz6J6IT1xk/s1cRzxrr+IVqGDV31mw6N/IZzH9FjJj+h47dNz6qN52bcyWR6JsstBWoZ3bskwsoAdzC3Ubvd9aWM00IR4VsbrJYssfY9yPulKpVCqVSqVSqVQqIfwflpidciC4KpUAAAAASUVORK5CYII=",
            "position": {
              "x": 643.9314960629921,
              "y": 10.241102362204725
            },
            "type": "image"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 623.9974803149606,
              "height": 25.097874015748033
            },
            "position": {
              "x": 21.739055118110237,
              "y": 23.77716535433071
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "{",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "buildingName",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "}",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": " ",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#c00000",
                    "isUnderlined": false,
                    "fontSize": 14,
                    "text": "시설물",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 56.65157480314961,
              "height": 40.54590551181102
            },
            "position": {
              "x": 600.4525196850394,
              "y": 8.329133858267717
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 780,
              "height": 11.295748031496062
            },
            "position": {
              "x": 0,
              "y": 0.00007874015748031496
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#7f7f7f",
            "size": {
              "width": 780,
              "height": 24.53220472440945
            },
            "position": {
              "x": 0,
              "y": 515.4677952755906
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 24.661417322834644,
              "height": 24.661417322834644
            },
            "position": {
              "x": 755.3385826771654,
              "y": 515.3385826771654
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10.5,
                    "text": "4",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "exo bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          }
        ]
      },
      {
        "shapes": [
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 123.16976377952756,
              "height": 48.87503937007874
            },
            "position": {
              "x": 656.8301574803149,
              "y": 0
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "size": {
              "width": 135.20338582677167,
              "height": 28.392834645669293
            },
            "imageData": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABKCAMAAAGzwvyHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSUExURQAAAP////39/f7+/v39/f7+/v7+/v39/f////39/f7+/v39/f39/f39/f7+/v39/f39/f39/f7+/v////39/f7+/v39/f7+/v39/f39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f////7+/v39/f////39/f7+/v39/f39/f7+/v////39/f7+/v39/f7+/v////39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v////39/f////7+/v7+/v39/f39/f7+/v7+/v39/f7+/v7+/v39/f7+/v39/f////7+/v////39/f7+/v39/f7+/v39/f7+/v39/f////7+/v7+/v////39/f39/f7+/v39/f7+/v////////39/f7+/v7+/v7+/v39/f////39/f7+/v39/f////39/f7+/v39/f7+/v39/f7+/v39/f7+/v39/f39/f7+/v7+/v39/f39/f7+/v39/f7+/v39/f39/f7+/v39/f7+/v////39/f7+/v39/f7+/v39/f7+/v39/f7+/v////7+/v39/f7+/v39/f39/f7+/v////39/f7+/v39/f////39/f39/f7+/v////39/f39/f7+/v39/f7+/v39/f////7+/v39/f7+/v39/f39/f39/f7+/v39/f7+/v39/f7+/v39/f////39/f39/f7+/v////39/f7+/v////39/f7+/v39/f39/f7+/v////7+/v39/f7+/v39/f7+/v////39/f7+/v39/a2ECYoAAADGdFJOUwBAiRrKWwf48KQ15ZHSY7+s7X4PmSraa4bHWLT1MuJzBI4fz039YDrqDJYn17FCFJ4v33ABiwm5+qY35yTUZczBeFI/79xtGclaR/c05AYhiNEO7H2YKdk8Flf/s/Qx4XIDRM5fC0z8Hqg56aCVJtZnghPDVLDxLm+Ky1y4SfmlNuZ3CJIj02StPu5/ECvbbIfIWcC1RvYYouN0BY/QDb1O/iA763yX2IQVxVayQ/Oqn+BxAs1eMLpL++h5CiWBEsJTZpwt3S/hA7IAAAAJcEhZcwAAMsAAADLAAShkWtsAAAjKSURBVGhD7ZuJu1xFEcU7CCHKLorKZghgjCCLRIyyJeaxCQYIhK1NIAiERZ4CGnYUAwIBRVEEwYARVATEJbgEQuL6f1l16lR33+WFmy8zXzIf/cv3uk6dru7p9Jt3Z+beO2G3Igra2I/kIlQ/SE+sjPUv1/jnualYJ9HOTnE8V4OYl7JI6zHAkoIYnomfQ6f/WM205c3ikk2M71+KXdsg+6Qb1zBb+zxPPCuxf+tcYVCzGClaFus/ZD3F6MMPml+kQW5WRoVup22ox4cknoq80VjlrxnFsWh9PaSRXtE0TCSpDSKkYVmH1MvIwvi0KWleRKcXvMqIKphUbWyICmaWJNeN7CFHFzqZdUBHjAtYKHzDBoTwBgwzaVlUWA9Vqew69HkY42xRD0i80C0Ebz6Cdo765kH81yKsLqlvg4sc0W010tq8ueC95mULcRCNT7phTdCj2RyV35EDHrwwfN74fMtgtsY05l27A/OyE2EOR8G26Lq9DyCrFiy0ZIkI0y60ib+Xn/vL35tWDNiHGH+SM9Q9Fg834YY0ug+ulQH7q00qsiivRyasYsrmLSqH/t7CPlKyxJK4H8qleSrMjavM5Lx7qq3d25+3UqlUJoHTl1LsYng8NT7WtpAXxo9SDtFSkZ/Z+apoqEEJJE1HcUdrBqLlFymH+kgGiGuZw/iMC4+F0lMSrrFeiE30chfY2fVSHmyyNcGUpN+jZleuSEpjStJ6w3Wi7uhMubPrvcHGWItAvECjslT0MaXlSoKefojxTM3Sem9nvwYHHU6ft32sHKMEmvcy1c3RljbWu83HKFQMC+mXz9/L1aAGkuZ3IR6Hw/KX+obBO16av5RGCknpNiJdaYL7q08G85MwRrDeLO6S+HZy/AyE5le4+LALjbcgvKsp1FR+PszWftqIZCTrhbpA4kkqSO7JPN1wmKBOgMx/b+zS4Ei6M+vdQa4Z5+SVSqVSqVQqleEsnUexi+E7UOUgWu49yDQsp/GWpReLnAV1uajvQ2HMfSaLOX+KXAc43230E1QNgyMMOKcyEX4J4+fMBOR9670qdzfnnJZ8bOvFQEqwRnL9AJfQgr71orNvveqNeL0f1dMlj/jAoyTcqj3nW47Zz3HhD9+/3gOhkSTxaRsgHwQTajegP4SiWuTKEI7Nzr3a6HyHIoWU0LPeq0X8zHoFEQ01vvWK1vYDdBRzwUUiD+ldr8R981QiGmqs631bQ9zzdJrq/o+yePjuetF8FbYITmpq1OvVIbI+aY80h+ijvy7xCFQKavat9zH4r6IVJGZxtA1w9O8tQ5PZEFBtowR1cJaDhPB5tMSs7nolfNACbIkZyUe+3httmA98nJkQjpDmdbNt+hnWq6kEPQD6KoDm7fVSSl8Sg7FqG9Ycpze22ZRTdFAWwlZpG+tdDzuELzNKcDTFevuev/2Pu31YraOwNwV2ZNMeGieIPCqEJyV8CgYXKO1ryEXYnXdu28gxrHdLHrbMh18ASzvWmuE1EvREm/0K8mnUVMDwQ8ZxrBenQqE2unMlHQ14RqhY70KvFOjdE1JhrXKfKTc03iFxHOvF0KsZE3qn12JqQ0vPoVb0/gC9H9AQ+Y5NodkyivLv7TdWBZLS4oHkah+okTyMjn8yM77+Qgg/oMbDHyMBdYJaeSYIWf941quv/9B43gmLYCs0wmtos4N3yCrgCXdDZ8fUKNe7g4x18rGwjLFSqVQqlUqlUqlUKpVKpVLZaez0W5PNZ7GzyWJeVj52vd313uHAva0gxje30nq/w/3ociMLwNy1dDNTC9hnPEe74HZ2KX5+1S7aGHrpRsHlR0evoIA3aZDyBu4CXPYG5RncEl5N69xA38HqRgzn7mM+S8Km9H9ucg37eR2si311Qxm6vcWFCNwfkJhhewUWTNz2xuPbNX/V7NzPMotxH3SHfzAVDvtDWPjtTzARvmIVQ7dXbwZINE6S+/Y+QVbkyyknoMAf4YozmuyB3l28vcyMF/zZehtSXKQTkJDD5RBMGb7IfvvWhfE3WvE5ywdurxlv8RhOE/j2MgW0zPNHKC/5FexG2xvCtaVNPdPj6zc3AHNCM/4K2bDt5a/VB+ttGU7f9l5P70lNJml7G/YiJvF6pG3YOdMU5g/a3v9Yvo5fmIrxSnYIfdu7hN7BmkzS9r5R2guYZO58ai56FFzbFi5mnuj9z29ve+1WwbhCNQ9I8EHP9k7TMs8fYcN5Tfj+ZfqQLhxBrG7EpLl/TCVPHvuCpMAX79X97xzuR+ejzJCU+L2iODoM2V7LNpdJntW393cGv4UJlqPAH6FN8zanBqwgNEdLnhvfEG1g96iCPWg10XcOvr2zrTAzjx1Dt5eZJf5uRO8VA769Hfja+V7b2zk4iEdFrG7ElHPr12EzGzsbFsK/Fq/Re3wS+gSmfMkqMh9nhxxKh2zvmZbg0KA8ZPmzTHu3t7yryx9h6LFXPCpidSOmMfe7zJTmh7IW+7KoXKT1ZGib7zcR9m3vy5qsY4Ie0DSax14/WtnbEjAB21s8InNnNaNzQC47jrI1hKY9ee2OPOEeZMaf6CGhfhEJ4G9kpWWtlzZmxQfvidje8A6NeCEN4TDNVzEBN6Ekxi9o8lsm8Wb0AX/jnA7Jm5nnab9EB9925ge9b6KH8A3h/kha2xteYX4J8wnZ3vwKd5rleu+0c9vJ8i7r2b2YpW+UzGeqrJg1a+saaiEfYvIx+5XLTjkln1vYWzs/xASVCZr4DbW3N5xNw+48zdvbRm/QE3aX7Q3hNHpxoeWXMu3wvPULvS88Rnr7cSSNJnejjwmOwhl/56y6s73ha3Q2Wjox25tPrFxGYxvzBsex08C9wjPBI4R+p6TJVdbh30+yLEP7TpHd7c3HMWS75/aeaDBz6J6IT1xk/s1cRzxrr+IVqGDV31mw6N/IZzH9FjJj+h47dNz6qN52bcyWR6JsstBWoZ3bskwsoAdzC3Ubvd9aWM00IR4VsbrJYssfY9yPulKpVCqVSqVSqVQqIfwflpidciC4KpUAAAAASUVORK5CYII=",
            "position": {
              "x": 643.9314960629921,
              "y": 10.241102362204725
            },
            "type": "image"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 623.9974803149606,
              "height": 25.097874015748033
            },
            "position": {
              "x": 21.739055118110237,
              "y": 23.77716535433071
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "{",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "buildingName",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 20,
                    "text": "}",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#000000",
                    "isUnderlined": false,
                    "fontSize": 18,
                    "text": " ",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#c00000",
                    "isUnderlined": false,
                    "fontSize": 14,
                    "text": "도면",
                    "isBold": true,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "LEFT",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 56.65157480314961,
              "height": 40.54590551181102
            },
            "position": {
              "x": 600.4525196850394,
              "y": 8.329133858267717
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#cf5c5c",
            "size": {
              "width": 780,
              "height": 11.295748031496062
            },
            "position": {
              "x": 0,
              "y": 0.00007874015748031496
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "fillColor": "#7f7f7f",
            "size": {
              "width": 780,
              "height": 24.53220472440945
            },
            "position": {
              "x": 0,
              "y": 515.4677952755906
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 12,
                    "text": "업무동",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 12,
                    "text": " ",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 12,
                    "text": "기준층",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  },
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 12,
                    "text": " 평면도",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "Noto Sans CJK KR Bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          },
          {
            "textDirection": "HORIZONTAL",
            "size": {
              "width": 24.661417322834644,
              "height": 24.661417322834644
            },
            "position": {
              "x": 755.3385826771654,
              "y": 515.3385826771654
            },
            "type": "text",
            "paragraphs": [
              {
                "indent": null,
                "textRuns": [
                  {
                    "isItalic": false,
                    "color": "#ffffff",
                    "isUnderlined": false,
                    "fontSize": 10.5,
                    "text": "5",
                    "isBold": false,
                    "isStrikethrough": false,
                    "font": "exo bold"
                  }
                ],
                "alignment": "CENTER",
                "bullet": false,
                "lineSpacing": null
              }
            ],
            "verticalAlignment": "MIDDLE"
          }
        ]
      }
    ],
    "pageSize": {
      "width": 780,
      "height": 540
    }
  });
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
    if (wrapperRef.current && viewport && data) {
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
  }, [wrapperRef.current, viewport, data])

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

            // Set the page size
            const pageSize = data.pageSize;
            pptx.defineLayout({ name: 'custom', width: pageSize.width, height: pageSize.height });
            console.log(pageSize)

            // Create slides based on the JSON data
            for (const slideData of data.slides) {
              const slide = pptx.addSlide();

              // Create shapes based on the JSON data
              for (const shapeData of slideData.shapes) {
                const type = shapeData.type;

                // inches to pixels
                const x = (shapeData.position?.x ?? 0) / pageSize.width * 100;
                const y = (shapeData.position?.y ?? 0) / pageSize.height * 100;
                const w = (shapeData.size?.width ?? 0) / pageSize.width * 100;
                const h = (shapeData.size?.height ?? 0) / pageSize.height * 100;

                if (type === 'text') {
                  for (const paragraphData of shapeData.paragraphs) {
                    const paragraph = {
                      align: paragraphData.alignment,
                      textRuns: [] as Array<any>,
                    };

                    for (const textRunData of paragraphData.textRuns) {
                      const textRun: PptxGenJS.TextProps = {
                        text: textRunData.text,
                        options: {
                          fontFace: textRunData.font,
                          fontSize: textRunData.fontSize * (72 / 96),
                          bold: textRunData.bold,
                          italic: textRunData.italic,
                          underline: textRunData.underline,
                          strike: textRunData.strikethrough,
                          color: textRunData.color ? textRunData.color.slice(1) : undefined,
                        },
                      };
                      paragraph.textRuns.push(textRun);
                    }

                    slide.addText(paragraph.textRuns, {
                      x: `${Number(x)}%`, y: `${Number(y)}%`, w: `${Number(w)}%`, h: `${Number(h)}%`,
                      color: shapeData.fillColor ? shapeData.fillColor.slice(1) : undefined,
                      valign: shapeData.verticalAlignment,
                      fill: shapeData.fillColor ? { color: shapeData.fillColor.slice(1) } : undefined,
                    });
                  }
                } else if (type === 'image') {
                  slide.addImage({
                    x: `${Number(x)}%`, y: `${Number(y)}%`, w: `${Number(w)}%`, h: `${Number(h)}%`,
                    data: shapeData.imageData,
                  });
                } else if (type === 'table') {
                  const rows = shapeData.rows.map((row: any) => {
                    const cells = row.map((cellData: any) => {
                      return {
                        text: cellData.paragraphs.map((p: any) => {
                          return {
                            text: p.textRuns.map((t: any) => t.text).join(''),
                            options: {
                              fontSize: p.textRuns[0]?.fontSize * (72 / 96),
                              bold: p.textRuns[0]?.bold,
                              italic: p.textRuns[0]?.italic,
                              underline: p.textRuns[0]?.underline,
                              strike: p.textRuns[0]?.strikethrough,
                              color: p.textRuns[0]?.color ? p.textRuns[0].color.slice(1) : undefined,
                            },
                          }
                        }),
                        options: {},
                      } as PptxGenJS.TableCell
                    });

                    return cells as PptxGenJS.TableRow;
                  });

                  slide.addTable(rows, {
                    x: `${Number(x)}%`, y: `${Number(y)}%`, w: `${Number(w)}%`, h: `${Number(h)}%`,
                  });
                }
              }
            }

            await pptx.writeFile({
              fileName: 'test.pptx',
            });
          } catch (e) {
            console.log(e)
          } finally {
            showLoading(false);
          }
        }}>
          <DialogTitle>Export with binding data</DialogTitle>
          <DialogContent sx={{ p: '16px' }}>
            <TextField
              name='bindingData'
              label='Binding data'
              multiline
              rows={20}
              fullWidth
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

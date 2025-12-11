var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5727881026197323,
          "pitch": 0.6860402724011774,
          "rotation": 5.497787143782138,
          "target": "1-cuarto-de-tv"
        },
        {
          "yaw": -1.9208339313424485,
          "pitch": 0.6845342228478817,
          "rotation": 0.7853981633974483,
          "target": "2-bano-visitas"
        },
        {
          "yaw": -0.8853735967072218,
          "pitch": 0.46972323912030234,
          "rotation": 0,
          "target": "3-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cuarto-de-tv",
      "name": "Cuarto de TV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3364035836045982,
          "pitch": 0.643914630931917,
          "rotation": 13.351768777756625,
          "target": "0-entrada"
        },
        {
          "yaw": -2.157944333266851,
          "pitch": 0.703390607778509,
          "rotation": 5.497787143782138,
          "target": "2-bano-visitas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bano-visitas",
      "name": "Baño visitas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5967976752477755,
          "pitch": 0.7024791331279872,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": -2.9214291491473467,
          "pitch": 0.8962757083617987,
          "rotation": 0.7853981633974483,
          "target": "1-cuarto-de-tv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-comedor",
      "name": "Sala comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8145678331662296,
          "pitch": 0.3774549286632265,
          "rotation": 0.7853981633974483,
          "target": "4-comedor"
        },
        {
          "yaw": 3.0757346993087307,
          "pitch": 0.38606300572798524,
          "rotation": 5.497787143782138,
          "target": "5-cocina"
        },
        {
          "yaw": 1.5038617956500904,
          "pitch": 0.4824957256053519,
          "rotation": 25.132741228718363,
          "target": "6-segunda-planta"
        },
        {
          "yaw": 0.5257905169312576,
          "pitch": 0.48375090364216433,
          "rotation": 6.283185307179586,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.37401829975123313,
          "pitch": 0.41879410133908124,
          "rotation": 0.7853981633974483,
          "target": "5-cocina"
        },
        {
          "yaw": -0.8035750280486909,
          "pitch": 0.3719359508018094,
          "rotation": 5.497787143782138,
          "target": "3-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2306293875078076,
          "pitch": 0.5320866254992804,
          "rotation": 4.71238898038469,
          "target": "4-comedor"
        },
        {
          "yaw": 0.8395317782468261,
          "pitch": 0.42744519452926255,
          "rotation": 0.7853981633974483,
          "target": "3-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-segunda-planta",
      "name": "Segunda planta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8609005537217609,
          "pitch": 0.4609458060684446,
          "rotation": 0,
          "target": "8-segunda-habitacion"
        },
        {
          "yaw": -0.35734174433430255,
          "pitch": 0.4018927082786483,
          "rotation": 0,
          "target": "9-tercera-habitacion"
        },
        {
          "yaw": 0.05308533636095625,
          "pitch": 0.3645693710811635,
          "rotation": 6.283185307179586,
          "target": "7-bano-compartido"
        },
        {
          "yaw": 1.6105824183028545,
          "pitch": 0.6597344598253674,
          "rotation": 0.7853981633974483,
          "target": "10-habitacion-principal"
        },
        {
          "yaw": -1.4906471641272514,
          "pitch": 0.6506856458221364,
          "rotation": 29.845130209103058,
          "target": "3-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bano-compartido",
      "name": "Baño compartido",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7321233482149463,
          "pitch": 0.4263289805810704,
          "rotation": 0,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-segunda-habitacion",
      "name": "Segunda habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5600052011828893,
          "pitch": 0.31268497538211015,
          "rotation": 1.5707963267948966,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-tercera-habitacion",
      "name": "Tercera habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7959358426029501,
          "pitch": 0.37033550826721395,
          "rotation": 0,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacion-principal",
      "name": "Habitación principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.02673578979212,
          "pitch": 0.3120659856377248,
          "rotation": 0,
          "target": "6-segunda-planta"
        },
        {
          "yaw": 3.073976803761301,
          "pitch": 0.6192253235872265,
          "rotation": 0,
          "target": "11-bano-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bano-closet",
      "name": "Baño closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4086146340694157,
          "pitch": 0.6208006750690132,
          "rotation": 7.0685834705770345,
          "target": "10-habitacion-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Josefa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

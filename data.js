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
          "yaw": -3.1201267384286044,
          "pitch": 0.9257073098645101,
          "rotation": 6.283185307179586,
          "target": "4-cuarto-de-tv"
        },
        {
          "yaw": -1.5031153893611364,
          "pitch": 0.823789796963613,
          "rotation": 0,
          "target": "1-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala",
      "name": "Sala",
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
          "yaw": -2.183116028337423,
          "pitch": 0.456340220452784,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": -1.9787397439261927,
          "pitch": 0.39862936284299977,
          "rotation": 0,
          "target": "4-cuarto-de-tv"
        },
        {
          "yaw": -1.1018320492816134,
          "pitch": 0.558283265619206,
          "rotation": 1.5707963267948966,
          "target": "2-comedor"
        },
        {
          "yaw": -1.285238808281271,
          "pitch": 0.4453157878399914,
          "rotation": 0.7853981633974483,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comedor",
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
          "yaw": 0.8290473376370642,
          "pitch": 0.4507161528877486,
          "rotation": 0.7853981633974483,
          "target": "3-cocina"
        },
        {
          "yaw": 0.4566472824625709,
          "pitch": 0.3894423742692261,
          "rotation": 5.497787143782138,
          "target": "1-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
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
          "yaw": -0.8197221585356473,
          "pitch": 0.549004278643725,
          "rotation": 6.283185307179586,
          "target": "2-comedor"
        },
        {
          "yaw": -0.3654308280627152,
          "pitch": 0.4609120425033719,
          "rotation": 0.7853981633974483,
          "target": "1-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuarto-de-tv",
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
          "yaw": -1.3408778278324878,
          "pitch": 0.8118798936147105,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        },
        {
          "yaw": -2.0136127202416727,
          "pitch": 0.8539712199753335,
          "rotation": 11.780972450961727,
          "target": "5-bao-visitas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao-visitas",
      "name": "Baño visitas",
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
          "yaw": -2.5227206691185184,
          "pitch": 1.0099509902027197,
          "rotation": 0.7853981633974483,
          "target": "4-cuarto-de-tv"
        },
        {
          "yaw": 3.0421330792216654,
          "pitch": 0.9765140158415946,
          "rotation": 11.780972450961727,
          "target": "0-entrada"
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
          "yaw": -1.43309586933022,
          "pitch": 0.9611667666251975,
          "rotation": 10.995574287564278,
          "target": "1-sala"
        },
        {
          "yaw": -0.9099382466819765,
          "pitch": 0.6373112736673985,
          "rotation": 12.566370614359176,
          "target": "8-segunda-habitacin"
        },
        {
          "yaw": -0.32491480103180415,
          "pitch": 0.5349005309451798,
          "rotation": 0,
          "target": "9-tercera-habitacin"
        },
        {
          "yaw": 0.03543296152049358,
          "pitch": 0.5503857678879598,
          "rotation": 7.0685834705770345,
          "target": "7-bao-compartido"
        },
        {
          "yaw": 1.618191093694639,
          "pitch": 0.8695085356026659,
          "rotation": 0.7853981633974483,
          "target": "10-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao-compartido",
      "name": "Baño compartido",
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
          "yaw": -2.749456709734199,
          "pitch": 0.7204472368899157,
          "rotation": 0,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-segunda-habitacin",
      "name": "Segunda habitación",
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
          "yaw": 2.1908816533441238,
          "pitch": 0.9730066938787978,
          "rotation": 14.137166941154074,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-tercera-habitacin",
      "name": "Tercera habitación",
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
          "yaw": 1.7904614430946335,
          "pitch": 0.6511389010732866,
          "rotation": 6.283185307179586,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacin-principal",
      "name": "Habitación principal",
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
          "yaw": -3.084739796442342,
          "pitch": 0.9285754058814639,
          "rotation": 0,
          "target": "11-bao-y-vestidor"
        },
        {
          "yaw": -2.001877480902131,
          "pitch": 0.5961123487912356,
          "rotation": 0,
          "target": "6-segunda-planta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bao-y-vestidor",
      "name": "Baño y vestidor",
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
          "yaw": -1.4253466901248295,
          "pitch": 0.6331072349623135,
          "rotation": 0.7853981633974483,
          "target": "10-habitacin-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

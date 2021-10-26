var APP_DATA = {
  "scenes": [
    {
      "id": "0-beach",
      "name": "Beach",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4126924692571101
      },
      "linkHotspots": [
        {
          "yaw": 2.6161521374730796,
          "pitch": 0.030659259749640455,
          "rotation": 6.283185307179586,
          "target": "1-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.19578894466847174,
          "pitch": -0.32452906979634655,
          "title": "Entry Point",
          "text": "Welcome to the Mansion&nbsp;"
        }
      ]
    },
    {
      "id": "1-parking",
      "name": "parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8776724214520266,
          "pitch": 0.20102393755715298,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.34371991807742575,
          "pitch": 0.05279954946157872,
          "title": "Bustop",
          "text": "Office Bustop"
        }
      ]
    },
    {
      "id": "2-lobby",
      "name": "lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3899658800667005,
          "pitch": 0.09483849632008301,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.027226937544853058,
          "pitch": -0.46951378541145594,
          "title": "Windsor SHOP",
          "text": "CLOTHING Store"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

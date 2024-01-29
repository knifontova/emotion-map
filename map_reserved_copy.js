mapboxgl.accessToken = 'pk.eyJ1Ijoia3NuaWZvbnRvdmEiLCJhIjoiY2w3MHJvYWNhMGhieDNwcGdiN2luamJ2NSJ9.P6p3srRpmB1MHge4ulAQfw';
const map = new mapboxgl.Map({
    container: 'emap', // container ID
    style: 'mapbox://styles/ksnifontova/clpzhwyfu003l01pl3ss9ap2c', // style URL
    center: [11.573617, 48.155559], // starting position [lng, lat]
    zoom: 10.5, // starting zoom
    minZoom: 9,
    projection: 'albers' // projection
});

// Add the control to the map.
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);

const zoomThreshold = 13;

// Layers loading
map.on('style.load', function() {
// Use 'style.load' instead of 'load' because there are actions to be performed after the map has loaded its visual appearance

  map.addSource('emotions', {
    type: 'vector',
    url: 'mapbox://ksnifontova.1mpe3w9e'
  });

  map.addLayer({
    'id': 'Heatmap-happiness',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'visible',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Happiness"],
        0.2
      ]
    ],
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "Happiness"],
        0,
        0,
        0.4,
        0.5,
        0.75,
        2
      ],
      'heatmap-intensity': 0.5,
      'heatmap-color': [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(0, 0, 255, 0)",
        1,
        "#ffd747"
      ],
      'heatmap-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        [
          "interpolate",
          ["linear"],
          ["get", "Happiness"],
          0,
          1,
          0.8,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Happiness"],
          0,
          3,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Happiness"],
          0,
          5,
          0.8,
          40
        ]
      ],
      'heatmap-opacity': 0.6
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Point-happiness',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'none',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Happiness"],
        0.2
      ]
    ],
    'minzoom': zoomThreshold,
    'paint': {
      'circle-color': "#ffd747",
      'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Happiness"],
          0,
          0,
          0.2,
          2,
          0.4,
          4,
          0.8,
          6
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "Happiness"],
          0,
          0,
          0.2,
          3,
          0.4,
          6,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Happiness"],
          0,
          0,
          0.2,
          6,
          0.4,
          10,
          0.8,
          20
        ]
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': "#ffffff",
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Heatmap-sadness',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Sadness"],
        0.2
      ]
    ],
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "Sadness"],
        0,
        0,
        0.1,
        0.5,
        0.65,
        2
      ],
      'heatmap-intensity': 0.5,
      'heatmap-color': [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(0, 0, 255, 0)",
        1,
        "#19455E"
      ],
      'heatmap-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        [
          "interpolate",
          ["linear"],
          ["get", "Sadness"],
          0,
          1,
          0.8,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Sadness"],
          0,
          3,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Sadness"],
          0,
          5,
          0.8,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Point-sadness',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Sadness"],
        0.2
      ]
    ],
    'minzoom': zoomThreshold,
    'paint': {
      'circle-color': "#19455E",
      'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Sadness"],
          0,
          0,
          0.2,
          2,
          0.4,
          4,
          0.8,
          6
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "Sadness"],
          0,
          0,
          0.2,
          3,
          0.4,
          6,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Sadness"],
          0,
          0,
          0.2,
          6,
          0.4,
          10,
          0.8,
          20
        ]
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': "#ffffff",
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Heatmap-disgust',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Disgust"],
        0.2
      ]
    ],
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "Disgust"],
        0,
        0,
        0.05,
        0.5,
        0.5,
        2
      ],
      'heatmap-intensity': 0.5,
      'heatmap-color': [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(0, 0, 255, 0)",
        1,
        "#4BA0A5"
      ],
      'heatmap-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        [
          "interpolate",
          ["linear"],
          ["get", "Disgust"],
          0,
          1,
          0.8,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Disgust"],
          0,
          3,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Disgust"],
          0,
          10,
          0.8,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Point-disgust',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Disgust"],
        0.2
      ]
    ],
    'minzoom': zoomThreshold,
    'paint': {
      'circle-color': "#4BA0A5",
      'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Disgust"],
          0,
          0,
          0.2,
          2,
          0.4,
          4,
          0.8,
          6
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "Disgust"],
          0,
          0,
          0.2,
          3,
          0.4,
          6,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Disgust"],
          0,
          0,
          0.2,
          6,
          0.4,
          10,
          0.8,
          20
        ]
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': "#ffffff",
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Heatmap-surprise',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Surprise"],
        0.2
      ]
    ],
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "Surprise"],
        0,
        0,
        0.1,
        0.5,
        0.25,
        2
      ],
      'heatmap-intensity': 0.5,
      'heatmap-color': [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(0, 0, 255, 0)",
        1,
        "#F87C48"
      ],
      'heatmap-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        [
          "interpolate",
          ["linear"],
          ["get", "Surprise"],
          0,
          1,
          0.8,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Surprise"],
          0,
          3,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Surprise"],
          0,
          5,
          0.8,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Point-surprise',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Surprise"],
        0.2
      ]
    ],
    'minzoom': zoomThreshold,
    'paint': {
      'circle-color': "#F87C48",
      'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Surprise"],
          0,
          0,
          0.2,
          2,
          0.4,
          4,
          0.8,
          6
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "Surprise"],
          0,
          0,
          0.2,
          3,
          0.4,
          6,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Surprise"],
          0,
          0,
          0.2,
          6,
          0.4,
          10,
          0.8,
          20
        ]
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': "#ffffff",
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Heatmap-anger',
    'type': 'heatmap',
    'source': 'emotions',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Anger"],
        0.2
      ]
    ],
    'visibility': 'none',
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "Anger"],
        0,
        0,
        0.1,
        0.5,
        0.55,
        2
      ],
      'heatmap-intensity': 0.5,
      'heatmap-color': [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(0, 0, 255, 0)",
        1,
        "#AB2377"
      ],
      'heatmap-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        [
          "interpolate",
          ["linear"],
          ["get", "Anger"],
          0,
          1,
          0.8,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Anger"],
          0,
          3,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Anger"],
          0,
          5,
          0.8,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Point-anger',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Anger"],
        0.2
      ]
    ],
    'minzoom': zoomThreshold,
    'paint': {
      'circle-color': "#AB2377",
      'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Anger"],
          0,
          0,
          0.2,
          2,
          0.4,
          4,
          0.8,
          6
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "Anger"],
          0,
          0,
          0.2,
          3,
          0.4,
          6,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Anger"],
          0,
          0,
          0.2,
          6,
          0.4,
          10,
          0.8,
          20
        ]
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': "#ffffff",
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Heatmap-fear',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Fear"],
        0.2
      ]
    ],
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "Fear"],
        0,
        0,
        0.1,
        0.5,
        0.8,
        2
      ],
      'heatmap-intensity': 0.5,
      'heatmap-color': [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(0, 0, 255, 0)",
        1,
        "#5E69FF"
      ],
      'heatmap-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        [
          "interpolate",
          ["linear"],
          ["get", "Fear"],
          0,
          1,
          0.8,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Fear"],
          0,
          3,
          0.95,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Fear"],
          0,
          5,
          0.8,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  map.addLayer({
    'id': 'Point-fear',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
    'filter': [
      "all",
      [
        ">=",
        ["get", "Fear"],
        0.2
      ]
    ],
    'minzoom': zoomThreshold,
    'paint': {
      'circle-color': "#5E69FF",
      'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "Fear"],
          0,
          0,
          0.2,
          2,
          0.4,
          4,
          0.8,
          6
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "Fear"],
          0,
          0,
          0.2,
          3,
          0.4,
          6,
          0.8,
          10
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "Fear"],
          0,
          0,
          0.2,
          6,
          0.4,
          10,
          0.8,
          20
        ]
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': "#ffffff",
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_merged-62mari',
  });

  door_filter();

});

// Combination of all the layer IDs into a single array called emotionLayers
const emotionLayers = ['Heatmap-happiness', 'Heatmap-sadness', 'Heatmap-disgust', 'Heatmap-surprise', 'Heatmap-anger', 'Heatmap-fear',
                      'Point-happiness', 'Point-sadness', 'Point-disgust', 'Point-surprise', 'Point-anger', 'Point-fear'];
const emotionPointLayers = ['Point-happiness', 'Point-sadness', 'Point-disgust', 'Point-surprise', 'Point-anger', 'Point-fear'];

// Define global variables to keep track of the current emotion and filter mode
var currentEmotion = "happiness"; // Set the initial emotion
var currentFilterMode = "all"; // Set the initial filter mode






function emotion_change() {
  var emotion_type = document.querySelector('input[name="rtoggle"]:checked').value;
  console.log(emotion_type);

// Create an emotionMap object to map each emotion type to an array of visibility values for the respective layers
  var emotionMap = {
                      "happiness": ['visible', 'none', 'none', 'none', 'none', 'none',
                                    'visible', 'none', 'none', 'none', 'none', 'none'],
                      "sadness": ['none', 'visible', 'none', 'none', 'none', 'none',
                                  'none', 'visible', 'none', 'none', 'none', 'none'],
                      "disgust": ['none', 'none', 'visible', 'none', 'none', 'none',
                                  'none', 'none', 'visible', 'none', 'none', 'none'],
                      "surprise": ['none', 'none', 'none', 'visible', 'none', 'none',
                                  'none', 'none', 'none', 'visible', 'none', 'none'],
                      "anger": ['none', 'none', 'none', 'none', 'visible', 'none',
                                'none', 'none', 'none', 'none', 'visible', 'none'],
                      "fear": ['none', 'none', 'none', 'none', 'none', 'visible',
                              'none', 'none', 'none', 'none', 'none', 'visible']
                    };

// Used a single loop to iterate through all layers and set their visibility based on the emotionMap for the selected emotion type
                    emotionLayers.forEach(function(layerId, index) {
                      map.setLayoutProperty(layerId, 'visibility', emotionMap[emotion_type][index]);
                    });

                    currentEmotion = emotion_type;
                    door_filter();

};


function door_filter() {
  var filterMode = document.querySelector('input[name="toggle-door"]:checked').value;

  var filter;
  if (filterMode === 'all') {
    // Reset the filter for all layers when 'all' is selected
    emotionLayers.forEach(function (layerId) {
      map.setFilter(layerId, null);
    });
  } else {
    filter = ['match', ['get', 'indoor_outdoor'], 2, filterMode === 'outdoor', filterMode === 'indoor'];

    // Apply the filter to all layers except for those with 'Heatmap' in their IDs
    emotionLayers.forEach(function (layerId) {
      if (!layerId.includes('Heatmap')) {
        map.setFilter(layerId, filter);
      }
    });
  }

  // Update the global variable with the current filter mode
  currentFilterMode = filterMode;
  // Apply the filter based on the current emotion
  emotionLayers.forEach(function (layerId, index) {
    map.setFilter(layerId, emotionMap[currentEmotion][index]);
  });

};

emotionPointLayers.forEach(function(layerId, index){
  map.on('click', layerId, function(e) {
    let popup = new mapboxgl.Popup()
    .setHTML('<b>' + e.features[0].properties.main_category + '<br></b>' + '<span id = "name"></span>')
		.setLngLat(e.lngLat)
		.addTo(map);

		var all = document.getElementsByClassName('mapboxgl-popup-content')
		for (var i = 0; i < all.length; i++) {
      if (e.features[i].properties.name == null) {
        document.getElementById("name").outerHTML = "Unfortunately, the dataset doesn't have a name of a place :(";
      }
      else {
        document.getElementById("name").outerHTML = e.features[i].properties.name;
      }
    }

  });
});

emotionPointLayers.forEach(function(layerId, index){
  map.on('mouseenter', layerId, function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', layerId, function () {
    map.getCanvas().style.cursor = 'default';
  });

});
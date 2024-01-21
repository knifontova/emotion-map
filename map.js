mapboxgl.accessToken = 'pk.eyJ1Ijoia3NuaWZvbnRvdmEiLCJhIjoiY2w3MHJvYWNhMGhieDNwcGdiN2luamJ2NSJ9.P6p3srRpmB1MHge4ulAQfw';
const map = new mapboxgl.Map({
    container: 'emap', // container ID
    style: 'mapbox://styles/ksnifontova/clpzhwyfu003l01pl3ss9ap2c', // style URL
    center: [11.573617, 48.155559], // starting position [lng, lat]
    zoom: 10.5, // starting zoom
    minZoom: 9,
    projection: 'albers' // projection
});


// Geocoder – https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/

const zoomThreshold = 13;

// Layers loading
map.on('style.load', function() {
// Use 'style.load' instead of 'load' because there are actions to be performed after the map has loaded its visual appearance

  map.addSource('emotions', {
    type: 'vector',
    url: 'mapbox://ksnifontova.benwblnb'
  });

  map.addLayer({
    'id': 'Heatmap-happiness',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'visible',
  //   'filter': [
  //     "all",
  //     ["match",
  //     ["get", "alone_company"],
  //     ["1", "3", "2", "99"],
  //     true,
  //     false
  //   ]
  // ],
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "happiness"],
        0,
        0,
        0.95,
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
          ["get", "happiness"],
          0,
          1,
          0.95,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "happiness"],
          0,
          1,
          0.95,
          7
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "happiness"],
          0,
          5,
          0.95,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Point-happiness',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
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
          ["get", "happiness"],
          0,
          0,
          0.2,
          1,
          0.5,
          2,
          0.95,
          4
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "happiness"],
          0,
          0,
          0.2,
          2,
          0.5,
          4,
          0.95,
          8
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "happiness"],
          0,
          0,
          0.2,
          4,
          0.5,
          6,
          0.95,
          12
        ]
      ],
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-sadness',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "sadness"],
        0,
        0,
        0.95,
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
          ["get", "sadness"],
          0,
          1,
          0.95,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "sadness"],
          0,
          1,
          0.95,
          7
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "sadness"],
          0,
          5,
          0.95,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Point-sadness',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
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
          ["get", "sadness"],
          0,
          0,
          0.2,
          1,
          0.5,
          2,
          0.95,
          4
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "sadness"],
          0,
          0,
          0.2,
          2,
          0.5,
          4,
          0.95,
          8
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "sadness"],
          0,
          0,
          0.2,
          4,
          0.5,
          6,
          0.95,
          12
        ]
      ],
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-disgust',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "disgust"],
        0,
        0,
        0.95,
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
          ["get", "disgust"],
          0,
          1,
          0.95,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "disgust"],
          0,
          1,
          0.95,
          7
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "disgust"],
          0,
          5,
          0.95,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Point-disgust',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
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
          ["get", "disgust"],
          0,
          0,
          0.2,
          1,
          0.5,
          2,
          0.95,
          4
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "disgust"],
          0,
          0,
          0.2,
          2,
          0.5,
          4,
          0.95,
          8
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "disgust"],
          0,
          0,
          0.2,
          4,
          0.5,
          6,
          0.95,
          12
        ]
      ],
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-surprise',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "surprise"],
        0,
        0,
        0.95,
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
          ["get", "surprise"],
          0,
          1,
          0.95,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "surprise"],
          0,
          1,
          0.95,
          7
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "surprise"],
          0,
          5,
          0.95,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Point-surprise',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
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
          ["get", "surprise"],
          0,
          0,
          0.2,
          1,
          0.5,
          2,
          0.95,
          4
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "surprise"],
          0,
          0,
          0.2,
          2,
          0.5,
          4,
          0.95,
          8
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "surprise"],
          0,
          0,
          0.2,
          4,
          0.5,
          6,
          0.95,
          12
        ]
      ],
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-anger',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "anger"],
        0,
        0,
        0.95,
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
          ["get", "anger"],
          0,
          1,
          0.95,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "anger"],
          0,
          1,
          0.95,
          7
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "anger"],
          0,
          5,
          0.95,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Point-anger',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
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
          ["get", "anger"],
          0,
          0,
          0.2,
          1,
          0.5,
          2,
          0.95,
          4
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "anger"],
          0,
          0,
          0.2,
          2,
          0.5,
          4,
          0.95,
          8
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "anger"],
          0,
          0,
          0.2,
          4,
          0.5,
          6,
          0.95,
          12
        ]
      ],
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-fear',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
    'maxzoom': zoomThreshold,
    'paint': {
      'heatmap-weight': [
        "interpolate",
        ["linear"],
        ["get", "fear"],
        0,
        0,
        0.95,
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
          ["get", "fear"],
          0,
          1,
          0.95,
          2
        ],
        13,
        [
          "interpolate",
          ["linear"],
          ["get", "fear"],
          0,
          1,
          0.95,
          7
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "fear"],
          0,
          5,
          0.95,
          40
        ]
      ],
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Point-fear',
    'type': 'circle',
    'source': 'emotions',
    'visibility': 'visible',
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
          ["get", "fear"],
          0,
          0,
          0.2,
          1,
          0.5,
          2,
          0.95,
          4
        ],
        17,
        [
          "interpolate",
          ["linear"],
          ["get", "fear"],
          0,
          0,
          0.2,
          2,
          0.5,
          4,
          0.95,
          8
        ],
        22,
        [
          "interpolate",
          ["linear"],
          ["get", "fear"],
          0,
          0,
          0.2,
          4,
          0.5,
          6,
          0.95,
          12
        ]
      ],
      'circle-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  // company_filter();

});

// Combination of all the layer IDs into a single array called emotionLayers
const emotionLayers = ['Heatmap-happiness', 'Heatmap-sadness', 'Heatmap-disgust', 'Heatmap-surprise', 'Heatmap-anger', 'Heatmap-fear',
                      'Point-happiness', 'Point-sadness', 'Point-disgust', 'Point-surprise', 'Point-anger', 'Point-fear'];
const emotionPointLayers = ['Point-happiness', 'Point-sadness', 'Point-disgust', 'Point-surprise', 'Point-anger', 'Point-fear'];

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
                  };


// function emotion_change() {
//   var emotion_type = document.querySelector('input[name="rtoggle"]:checked').value;
//   console.log(emotion_type);
//
//   var happiness_id = 'Heatmap-happiness';
//   var sadness_id = 'Heatmap-sadness';
//   var disgust_id = 'Heatmap-disgust';
//   var surprise_id = 'Heatmap-surprise';
//   var anger_id = 'Heatmap-anger';
//   var fear_id = 'Heatmap-fear';
//   var happiness_id2 = 'Point-happiness';
//   var sadness_id2 = 'Point-sadness';
//   var disgust_id2 = 'Point-disgust';
//   var surprise_id2 = 'Point-surprise';
//   var anger_id2 = 'Point-anger';
//   var fear_id2 = 'Point-fear';
//   //
//   if (emotion_type === "happiness") {
//     map.setLayoutProperty(happiness_id, 'visibility', 'visible');
//     map.setLayoutProperty(sadness_id, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id, 'visibility', 'none');
//     map.setLayoutProperty(anger_id, 'visibility', 'none');
//     map.setLayoutProperty(fear_id, 'visibility', 'none');
//     map.setLayoutProperty(happiness_id2, 'visibility', 'visible');
//     map.setLayoutProperty(sadness_id2, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id2, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id2, 'visibility', 'none');
//     map.setLayoutProperty(anger_id2, 'visibility', 'none');
//     map.setLayoutProperty(fear_id2, 'visibility', 'none');
//   } else if (emotion_type === "sadness") {
//     map.setLayoutProperty(happiness_id, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id, 'visibility', 'visible');
//     map.setLayoutProperty(disgust_id, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id, 'visibility', 'none');
//     map.setLayoutProperty(anger_id, 'visibility', 'none');
//     map.setLayoutProperty(fear_id, 'visibility', 'none');
//     map.setLayoutProperty(happiness_id2, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id2, 'visibility', 'visible');
//     map.setLayoutProperty(disgust_id2, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id2, 'visibility', 'none');
//     map.setLayoutProperty(anger_id2, 'visibility', 'none');
//     map.setLayoutProperty(fear_id2, 'visibility', 'none');
//   } else if (emotion_type === "disgust") {
//     map.setLayoutProperty(happiness_id, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id, 'visibility', 'visible');
//     map.setLayoutProperty(surprise_id, 'visibility', 'none');
//     map.setLayoutProperty(anger_id, 'visibility', 'none');
//     map.setLayoutProperty(fear_id, 'visibility', 'none');
//     map.setLayoutProperty(happiness_id2, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id2, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id2, 'visibility', 'visible');
//     map.setLayoutProperty(surprise_id2, 'visibility', 'none');
//     map.setLayoutProperty(anger_id2, 'visibility', 'none');
//     map.setLayoutProperty(fear_id2, 'visibility', 'none');
//   } else if (emotion_type === "surprise") {
//     map.setLayoutProperty(happiness_id, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id, 'visibility', 'visible');
//     map.setLayoutProperty(anger_id, 'visibility', 'none');
//     map.setLayoutProperty(fear_id, 'visibility', 'none');
//     map.setLayoutProperty(happiness_id2, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id2, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id2, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id2, 'visibility', 'visible');
//     map.setLayoutProperty(anger_id2, 'visibility', 'none');
//     map.setLayoutProperty(fear_id2, 'visibility', 'none');
//   } else if (emotion_type === "anger") {
//     map.setLayoutProperty(happiness_id, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id, 'visibility', 'none');
//     map.setLayoutProperty(anger_id, 'visibility', 'visible');
//     map.setLayoutProperty(fear_id, 'visibility', 'none');
//     map.setLayoutProperty(happiness_id2, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id2, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id2, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id2, 'visibility', 'none');
//     map.setLayoutProperty(anger_id2, 'visibility', 'visible');
//     map.setLayoutProperty(fear_id2, 'visibility', 'none');
//   } else if (emotion_type === "fear") {
//     map.setLayoutProperty(happiness_id, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id, 'visibility', 'none');
//     map.setLayoutProperty(anger_id, 'visibility', 'none');
//     map.setLayoutProperty(fear_id, 'visibility', 'visible');
//     map.setLayoutProperty(happiness_id2, 'visibility', 'none');
//     map.setLayoutProperty(sadness_id2, 'visibility', 'none');
//     map.setLayoutProperty(disgust_id2, 'visibility', 'none');
//     map.setLayoutProperty(surprise_id2, 'visibility', 'none');
//     map.setLayoutProperty(anger_id2, 'visibility', 'none');
//     map.setLayoutProperty(fear_id2, 'visibility', 'visible');
//   }
// };

// function company_change() {
//   var filterValue = document.querySelector('input[name="toggle-company"]:checked').value;
//   console.log(filterValue);
//
//   var filter = ['==', 'alone', alone]; // Change 'column1' to your actual column name
//   map.setFilter('Heatmap-happiness', filter);
//   map.setFilter('Heatmap-sadness', filter);
//   map.setFilter('Heatmap-disgust', filter);
//   map.setFilter('Heatmap-surprise', filter);
//   map.setFilter('Heatmap-anger', filter);
//   map.setFilter('Heatmap-fear', filter);
//   // Repeat for other layers
//
//   var filter = ['==', ['==', ['get', 'company'], 1], company]; // Change 'column1' to your actual column name
//   map.setFilter('Heatmap-happiness', filter);
//   map.setFilter('Heatmap-sadness', filter);
//   map.setFilter('Heatmap-disgust', filter);
//   map.setFilter('Heatmap-surprise', filter);
//   map.setFilter('Heatmap-anger', filter);
//   map.setFilter('Heatmap-fear', filter);
//
//   var filter = ['==', 'company', all]; // Change 'column1' to your actual column name
//   map.setFilter('Heatmap-happiness', filter);
//   map.setFilter('Heatmap-sadness', filter);
//   map.setFilter('Heatmap-disgust', filter);
//   map.setFilter('Heatmap-surprise', filter);
//   map.setFilter('Heatmap-anger', filter);
//   map.setFilter('Heatmap-fear', filter);
//
//   console.log(filter);
// };


// function company_filter() {
//   var filterMode = document.querySelector('input[name="toggle-company"]:checked').value;
//   var filter = ['==', ['get', 'alone_company'], parseInt(filterValue)];
//
//   emotionLayers.forEach(function(layerId, index) {
//   map.setFilter(layerId, filter);
//   });
// };

// function door_filter() {
//   var filterMode = document.querySelector('input[name="toggle-door"]:checked').value;
//
//   var filter;
//   if (filterMode === 'all') {
//     filter = ['!=', ['string', ['get', 'indoor_ourdoor']], 'none'];
//   } else {
//     filter = ['match', ['get', 'indoor_ourdoor'], 1, filterMode === 'indoor', filterMode === 'outdoor'];
//   }
//
//   console.log(filter);
//
//
//   // Apply the filter to all layers
//   emotionLayers.forEach(function(layerId) {
//     map.setFilter(layerId, filter);
//   });
// };


// document.getElementById('navEmotionCompany').addEventListener('change', (event) => {
//   const company = event.target.value;
//   // update the map filter
//   if (company === 'all') {
//     filterCompany = ["all", ["match", ["get", "alone_company"], ["1", "3", "2", "99"],true, false]];
//   } else if (company === 'alone') {
//     filterCompany = ['match', ['get', 'alone_company'], ["1", "3"], true, false];
//   } else if (company === 'company') {
//     filterCompany = ['match', ['get', 'alone_company'], ["1", "3"], false, true];
//   } else {
//     console.log('error');
//   }
//
//   // emotionLayers.forEach(function(layerId, index) {
//   //   // Check if the layer is a heatmap
//   //   const isHeatmap = map.getLayer(layerId).type === 'heatmap';
//   //
//   //   if (isHeatmap) {
//   //     // Adjust heatmap-weight property for heatmap layers
//   //     map.setPaintProperty(layerId, 'filter', filterCompany);
//   //   } else {
//   //     // For point layers, use setFilter
//   //     map.setFilter(layerId, ['all', filterCompany]);
//   //   }
//   // });
//
//   emotionLayers.forEach(function(layerId, index) {
//     map.setFilter(layerId, ['all', filterCompany]);
//   });
//
// });

///https://docs.mapbox.com/help/tutorials/show-changes-over-time/

emotionPointLayers.forEach(function(layerId, index){
  map.on('click', layerId, function(e) {
    let popup = new mapboxgl.Popup()
    .setHTML('<b>' + e.features[0].properties.fclass + '<br></b>' + '<span id = "name"></span>')
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

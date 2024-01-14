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
    // 'maxzoom': 9,
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
      'heatmap-radius': 5,
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-sadness',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
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
      'heatmap-radius': 5,
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-disgust',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
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
      'heatmap-radius': 5,
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-surprise',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
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
      'heatmap-radius': 5,
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-anger',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
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
      'heatmap-radius': 5,
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

  map.addLayer({
    'id': 'Heatmap-fear',
    'type': 'heatmap',
    'source': 'emotions',
    'visibility': 'none',
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
      'heatmap-radius': 5,
      'heatmap-opacity': 0.75
    },
    'source-layer': 'p_Munich_features_TEST-aunrnw',
  });

});

const emotionLayers = ['Heatmap-happiness', 'Heatmap-sadness', 'Heatmap-disgust', 'Heatmap-disgust', 'Heatmap-surprise', 'Heatmap-anger', 'Heatmap-fear'];

function emotion_change() {
  var emotion_type = document.querySelector('input[name="rtoggle"]:checked').value;
  console.log(emotion_type);

  // Set visibility of all layers to 'none'
  emotionLayers.forEach(function (layerId) {
    map.setLayoutProperty(layerId, 'visibility', 'none');
    });

    // Set visibility of the clicked layer to 'visible'
    map.setLayoutProperty(emotion_type, 'visibility', 'visible');

  // var happiness_id = 'Heatmap-happiness';
  // var sadness_id = 'Heatmap-sadness';
  // var disgust_id = 'Heatmap-disgust';
  // var surprise_id = 'Heatmap-surprise';
  // var anger_id = 'Heatmap-anger';
  // var fear_id = 'Heatmap-fear';
  //
  // if (emotion_type === "Heatmap-happiness") {
  //   map.setLayoutProperty(happiness_id, 'visibility', 'visible');
  //   map.setLayoutProperty(sadness_id, 'visibility', 'none');
  //   map.setLayoutProperty(disgust_id, 'visibility', 'none');
  //   map.setLayoutProperty(surprise_id, 'visibility', 'none');
  //   map.setLayoutProperty(anger_id, 'visibility', 'none');
  //   map.setLayoutProperty(fear_id, 'visibility', 'none');
  // } else if (emotion_type === "Heatmap-sadness") {
  //   map.setLayoutProperty(sadness_id, 'visibility', 'visible');
  //   map.setLayoutProperty(happiness_id, 'visibility', 'none');
  //   map.setLayoutProperty(disgust_id, 'visibility', 'none');
  //   map.setLayoutProperty(surprise_id, 'visibility', 'none');
  //   map.setLayoutProperty(anger_id, 'visibility', 'none');
  //   map.setLayoutProperty(fear_id, 'visibility', 'none');
  // } else if (emotion_type === "Heatmap-disgust") {
  //   map.setLayoutProperty(disgust_id, 'visibility', 'visible');
  //   map.setLayoutProperty(sadness_id, 'visibility', 'none');
  //   map.setLayoutProperty(happiness_id, 'visibility', 'none');
  //   map.setLayoutProperty(surprise_id, 'visibility', 'none');
  //   map.setLayoutProperty(anger_id, 'visibility', 'none');
  //   map.setLayoutProperty(fear_id, 'visibility', 'none');
  // } else if (emotion_type === "Heatmap-surprise") {
  //   map.setLayoutProperty(surprise_id, 'visibility', 'visible');
  //   map.setLayoutProperty(disgust_id, 'visibility', 'none');
  //   map.setLayoutProperty(sadness_id, 'visibility', 'none');
  //   map.setLayoutProperty(happiness_id, 'visibility', 'none');
  //   map.setLayoutProperty(anger_id, 'visibility', 'none');
  //   map.setLayoutProperty(fear_id, 'visibility', 'none');
  // } else if (emotion_type === "Heatmap-anger") {
  //   map.setLayoutProperty(anger_id, 'visibility', 'visible');
  //   map.setLayoutProperty(surprise_id, 'visibility', 'none');
  //   map.setLayoutProperty(disgust_id, 'visibility', 'none');
  //   map.setLayoutProperty(sadness_id, 'visibility', 'none');
  //   map.setLayoutProperty(happiness_id, 'visibility', 'none');
  //   map.setLayoutProperty(fear_id, 'visibility', 'none');
  // } else if (emotion_type === "Heatmap-fear") {
  //   map.setLayoutProperty(fear_id, 'visibility', 'visible');
  //   map.setLayoutProperty(anger_id, 'visibility', 'none');
  //   map.setLayoutProperty(surprise_id, 'visibility', 'none');
  //   map.setLayoutProperty(disgust_id, 'visibility', 'none');
  //   map.setLayoutProperty(sadness_id, 'visibility', 'none');
  //   map.setLayoutProperty(happiness_id, 'visibility', 'none');
  // }
};

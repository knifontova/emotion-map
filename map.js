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
  // 'maxzoom': 9,
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

});

// Layers showing and hiding

// Enumerate ids of the layers
// const toggleableLayerIds = ['Heatmap-happiness', 'Heatmap-sadness'];

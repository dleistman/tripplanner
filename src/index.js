const mapboxgl = require('mapbox-gl');
const createMarker = require('./marker').createMarker;

console.log(typeof createMarker);

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF3b2xlZSIsImEiOiJjamV6dHhjNmkwNm11MnBrOXl4eXd4c3l0In0.eTtx3L2gUeL54kg67IOmAg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

createMarker([-74.009151, 40.705086], 'activity').addTo(map);

createMarker([-74.003151, 40.708086], 'restaurant').addTo(map);

createMarker([-74.013151, 40.718086], 'hotel').addTo(map);


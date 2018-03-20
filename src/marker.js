const mapboxgl = require('mapbox-gl');

const createMarker = function (lngLat, type = 'activity') {
  let markerImgUrl;
  if (type.toLowerCase() === 'activity') markerImgUrl = 'http://i.imgur.com/WbMOfMl.png';
  else if (type.toLowerCase() === 'hotel') markerImgUrl = 'http://i.imgur.com/D9574Cu.png';
  else if (type.toLowerCase() === 'restaurant') markerImgUrl = 'http://i.imgur.com/cqR6pUI.png';

  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${markerImgUrl})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(lngLat);
};

module.exports = { createMarker };

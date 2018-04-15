const container = document.querySelector('#quake-map');

const MapMaker = function(container, lat, long, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: lat, long,
    zoom: zoom
  });
  this.markers = []
}

MapMaker.prototype.addMarker = function (lat, long) {
  const marker = new google.maps.Marker({
    position: lat, long,
    map: this.googleMap
  })
  this.markers.push(marker)
};

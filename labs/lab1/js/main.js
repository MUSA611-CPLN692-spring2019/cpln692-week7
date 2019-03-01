/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [39.95, -75.16],
  zoom: 14
});

// Try some differnet basemaps:
basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
// basemapURL = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
// basemapURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


var Stamen_TonerLite = L.tileLayer(basemapURL, {
// if you change the basemap, and publish it on the web, you should attribute accurately
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


/* =====================

Lab 1 - GeoJSON + Review


The purpose of this lab is to introduce geoJSON by comparing it to the
json objects we've used this far to generate points.

Take a look at `squares.json`, `squares.geojson`, and `squaresPoly.geojson`


And read up on the structure of geoJSON, there are lots of great resources:
http://geojson.io/#map=2/20.0/0.0
https://macwright.org/2015/03/23/geojson-second-bite.html
https://medium.com/@sumit.arora/what-is-geojson-geojson-basics-visualize-geojson-open-geojson-using-qgis-open-geojson-3432039e336d


===================== */


// Task 1.1 - add the five markers from squares.json to the map using the methods
// we've used so far in class: _.map or _.each, forEach()
var mapMarkers = function(data) {
  var markers = [];
    _.each(data, function(feature) {
      var m = L.marker([Number(feature.LAT), Number(feature.LNG)]).bindPopup(feature.NAME);
      markers.push(m);
      m.addTo(map);
  });
  return markers;
};

var squaresJson_markers = mapMarkers(squaresJson);

// Task 1.2 - remove squares.json from the map
// iterating over each marker  using map.removeLayer(point)
var removeMarkers = function(marks) {
    _.each(marks, function(m) { map.removeLayer(m); });
};

removeMarkers(squaresJson_markers);

// task 2.1 - add squares.geojson to the map
var squaresGeoJson_markers = L.geoJSON(squaresGeoJson).addTo(map);

// task 2.2 - remove squares.geojson from the map
map.removeLayer(squaresGeoJson_markers);

// task 3 - filter by some property on squares.geojson
var filtered_squaresGeoJson_markers = L.geoJSON(squaresGeoJson, {
  filter: function(d) { return d.properties.INDEGO_STATION; }
}).addTo(map);

// task 4.1 - add squaresPoly.geojson to the map
var layerPoly = L.geoJSON(squaresPoly).addTo(map);
map.removeLayer(layerPoly);

// task 4.2 - add conditional coloring to squaresPoly.geojson
layerPoly = L.geoJSON(squaresPoly, {
  style: function (feature) {
    switch (feature.properties.TYPE) {
      case 'circle': return {color: '#000000'};
      case 'square': return {color: '#FF00FF'};
      default: return {color: '#0000FF'};
    }
  }
});

// task 5 - add two buttons to the sidebar from javascript using jquery: (1) add layer (2) remove layer
$('<br><input type="button" id="btnToAdd" value="add" />').appendTo($(".sidebar"));
$('<br><input type="button" id="btnToRemove" value="remove" />').appendTo($(".sidebar"));

$( "#btnToAdd" ).click(function() {
  layerPoly.addTo(map);
});

$( "#btnToRemove" ).click(function() {
  map.removeLayer(layerPoly);
});

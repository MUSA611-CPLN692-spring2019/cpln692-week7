/* ================================
Week 7 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
//var slideDeck = [slideExample1, slideExample2, slideExample3]

var slide1 = {
  slideNumber: 1,
  title: "All The Divvy Stations"
};
var slide2 = {
  slideNumber: 2,
  title: "The Divvy Stations in Service",
  filter: function(feature) {return feature.properties.Status == 'In Service';}
};
var slide3 = {
  slideNumber: 3,
  title: "The Divvy Stations with Large Capacity",
  filter: function(feature) {return feature.properties['Docks in Service'] >= '15';}
};
var slideDeck = [slide1, slide2, slide3];

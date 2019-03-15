/* ================================
Week 7 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]


//This is sample code for how my map will operate
//Had some correspondence with Ling today on .hover() which I will be using to bring up a pop up for each county...still working on that
//Will also be working on a slide button to sync with my HTML 
var dataset = 'https://gist.githubusercontent.com/smullarkUPENN/f121bdb4aed7cb43f039582628aebde9/raw/e58644a0fe871acf02d2543dd83360f69215595c/map.geojson'
var featuregroup = () => {
    $.ajax(dataset).done(console.log)
}
console.log(featuregroup.feature)

var myStyle = function(featuregroup) {
  if (featuregroup.properties.PIT_THP_CHG > 0) {
  return {color: 'green'};
} else return {color: 'red'}
};

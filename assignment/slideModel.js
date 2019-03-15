/* ================================
Week 7 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
// var slideExample = {
//   slideNumber: 1,
//   title: "My first slide",
//   filter: function(geojsonFeature) { return true; }
// };

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
// var slideDeck = [slideExample1, slideExample2, slideExample3];

class Slide {
  constructor(order, title) {
    this.order = order;
    this.title = title;
    this.first = false;
    this.last = false;
  }
  filter() { return true; } //filter executes here rather than returning function
  setToFirst() { this.first = true; }
  setToLast() { this.last = true; }
}

var slide1 = Slide(1, "First Slide");
var slide2 = Slide(2, "Second Slide");
var slide3 = Slide(3, "Third Slide");
var slide4 = Slide(4, "Fourth Slide");
var slide5 = Slide(5, "Fifth Slide");

var slideDeck = [slide1, slide2, slide3, slide4, slide5];

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

//set map attr in html file, height:100%, right: 5px, left: 5px, position: absolute, and so

//build a slide
var slides = [{title: "", text: "some description of slide 1"}];

//and build another slide, do the following attr like color for slide 2
var slides = [{title: "", text: "some description of slide 1"}];

var currentSlide = 0;  //create a single slide first

var addTitle = (title) => {
  $('.sidebar').append(`<h1>${title}</h1>`)
}

var addText = (text) => {
  $('.sidebar').append(`<p>${text}</p>`)
}

//set background color
var setColor(color) => {
  $('#map').css('background-color',color)
}

var buildSlide = (slideObject) => {
  addTitle(slideObject.title);
  addText(slideObject.text);
  setColor(slideObject.color);
};

//add buttons in html

//click then go to second slide
buildSlide(slides[currentSlide]){
  $("#next").click(()=>{
    currentSlide = currentSlide +1;
    buildSlide([currentSlide]);
  });
}

//clean up the first page title and text
var clearnup = () ={
  $('#title').remove();
  $('#text').remove();
};

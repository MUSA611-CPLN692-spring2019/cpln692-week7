var slides = [
  {title: "slide 1", text: "some description of slide 1", color: "red"},
  {title: "slide 2", text: "some description of slide 2, it's different", color: "green"},
  {title: "slide 3", text: "some description of slide 3, it's different (also)", color: "blue"}
]
var currentSlide = 0;

var addTitle = (title) => {
  $('.sidebar').append(`<h1 id='title'>${title}</h1>`)
}

var addText = (text) => {
  $('.sidebar').append(`<p id='text'>${text}</p>`)
}

var setColor = (color) => {
  $('#map').css('background-color', color)
}

var cleanup = () => {
  $('#title').remove()
  $('#text').remove()
}

var buildSlide = (slideObject) => {
  cleanup()
  addTitle(slideObject.title)
  addText(slideObject.text)
  setColor(slideObject.color)
}


buildSlide(slides[currentSlide])
$("#next").click(() => {
  currentSlide = currentSlide + 1;
  buildSlide(slides[currentSlide]);
})

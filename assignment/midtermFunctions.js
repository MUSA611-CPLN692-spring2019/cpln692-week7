/* ================================
Week 7 Assignment: Midterm Functions + Signatures
================================ */

// Figures out which function to display feature by type
function mapType(feature) {
  switch(feature.type) {
    case "museum":
      museum(feature);
      break;
    case "grocery":
      grocery(feature);
      break;
    case "transit":
      transit(feature);
      break;
    default:
      general(feature);
  }
}

// Create marker and add to map (change marker size, color, shape by properties)
// general properties: distance, type
function general(feature) {
  var marker = L.marker(feature.coordinates).bindPopUp(feature.name);
}

// Create custom marker for museum and add to map
// unique properties: rating
function museum(feature) {
  var marker = L.marker(feature.coordinates).bindPopUp(feature.name);
}

// Create custom marker for grocery and add to map
// unique properties: stories, has-housing, year-built
function grocery(feature) {
  var marker = L.marker(feature.coordinates).bindPopUp(feature.name);
}

// Create custom marker for transit and add to map
// unique properties: transit-type
function transit(feature) {
  var marker = L.marker(feature.coordinates).bindPopUp(feature.name);
}

// Take in markers to remove and remove them - requires global list(?) of markers
function remover(markers) {
  // remove layer
}

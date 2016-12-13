////////////////
///Objectives///
////////////////

// Flow
  // load JSON file
  // populate Page
  // add event listeners once page is loaded

var color = "firebrick"; // Must be a color reconized by CSS
var inventory = []
loadInventory()
//Execute this function call after DOM loaded
$('.product-card').matchHeight()


// Loads in the JSON and stores in a variable
// Executed upon JSON file loading
function loadInventory() {
  var request = new XMLHttpRequest()
  request.addEventListener("load", function(loadEvt) {
    inventory = JSON.parse(loadEvt.target.responseText)
    populatePage();
  })
  request.open("GET", "/inventory.json")
  request.send()
}

// Function to populate the page
// Executed after loadIventory?
function populatePage() {
  var myHTML = ""
  myHTML += '<div class="row">'
  // Loop over length of array and generate HTML string
  // After 3 loops, add </div><div class="row">
  // At the end, add </div>
  // We don't want to add </div><div class="row"> if it's the last row
  for(var i = 0; i < inventory.cars.length; i++) {
    myHTML += `
    <div class="col-md-4 product-card">
      <img src="${inventory.cars[i].image}" alt="car">
      <table>
        <tr>
          <td>Make: </td>
          <td>${inventory.cars[i].make}</td>
        </tr>
        <tr>
          <td>Model: </td>
          <td>${inventory.cars[i].model}</td>
        </tr>
        <tr>
          <td>Year: </td>
          <td>${inventory.cars[i].year}</td>
        </tr>
        <tr>
          <td>Price: </td>
          <td>${inventory.cars[i].price}</td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>${inventory.cars[i].description}</td>
        </tr>
      </table>
    </div>`
    if((i + 1) % 3 === 0) {
      myHTML += '</div>'
      // If our current car is NOT the last car
      if((i + 1) != inventory.cars.length) {
        myHTML += '<div class="row">'
      }
    }
  }
  console.log(myHTML)
}

// Adds all the event listeners on DOM
function activateEvents() {
  // Listen for click event on card
  // Listen for description to be updated (so border can go away)

}

// Executed when car description is changed (enter pressed)
// (Optional) Executed when focus is lost?
function resetBorder() {

}

// Executed whenever a click occurs anywhere?
  // Checks to see if that element is the card div
  // Checks to see if any of the parent elements are the card div
// Takes a color variable and manually changes CSS?
  // Would be better if it changed class and color was changed in CSS file
  // But...I will follow instructions
function makeCardBorder(node, color) {

}

















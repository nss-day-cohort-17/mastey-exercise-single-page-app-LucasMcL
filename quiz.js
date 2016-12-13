////////////////
///Objectives///
////////////////

// Flow
  // load JSON file
  // populate Page
  // add event listeners once page is loaded

var inventory = []
var idCounter = 0; // create each product card with unique ID
var currentId
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
// Executed after loadIventory
function populatePage() {
  // Init html string by starting first row
  var myHTML = '<div class="row">'
  // Loop over length of array and generate HTML string
  for(var i = 0; i < inventory.cars.length; i++) {
    myHTML += `
    <div class="col-md-4 product-card" id="${idCounter}">
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
    // Closes current row every 3 loops
    if((i + 1) % 3 === 0) {
      myHTML += '</div>'
      // Adds new row if we are NOT on last car
      if((i + 1) != inventory.cars.length) {
        myHTML += '<div class="row">'
      }
    }
    // If we're at the end and not on a 3rd car, close the row
    // If we are on a 3rd car, it will close from previous if statement
    else {
      if((i + 1) === inventory.cars.length) {
        myHTML += '</div>'
      }
    }
    idCounter++
  }
  document.getElementById('product-container').innerHTML = myHTML
  $('.product-card').matchHeight()
  activateEvents()
}

// Every 3 cars
  // Close current row
  // If not last car
    // Start new row
  // If it was the last car...
    // Don't do anything.  Row was just closed.
// At the end
  // Close current row
  // Unless you just closed it from being a 3rd car


// Adds all the event listeners on DOM
function activateEvents() {
  // Listen for click event on card
    // Focus on the input field
    // Remove styling on any other card
  // Listen for typing in the input field to update description
    // On Key up?
  // Listen for the enter button to be pressed
    // Stop highlighting current product card
    // Stop giving it a background color
    // Clear input field
    // Stop matching the description text to the input text
  // Maybe generate cards with IDs?
    // store id of product currently being edited


  document.querySelector("body").addEventListener("click", function(clickEvt) {

    // Loop through parent nodes to see if any of them contain class = product card
    // Stop at document
    // Passes product card node to makeCardBorder
    var currentNode = clickEvt.target
    while(currentNode != document) {
      if(currentNode.classList.contains("product-card")) {
        makeCardBorder(currentNode);
        break;
      }
      currentNode = currentNode.parentNode
    }
  });


}

// Executed when car description is changed (enter pressed)
// Executed when a new car is selected
function resetBorder() {

}

// Executed whenever a click occurs anywhere?
  // Checks to see if that element is the card div
  // Checks to see if any of the parent elements are the card div
// Takes a color variable and manually changes CSS?
  // Would be better if it changed class and color was changed in CSS file
  // But...I will follow instructions
function makeCardBorder(node, color) {
  console.dir(node)
  node.classList.add("highlight")
}

















'use strict';

//construtor function to create an object for each image
//properties: name, filepath, number of times that has been shown, number of times that hs been clicked ,array of each instance

var numClicksAllowed = 25;
var numClicksThisRound = 0;
var prevImageSet = [];

function ImagesInstance(filepath, name){
  this.name = name;
  this.filepath = filepath;
  this.numDisplayed = 0;
  this.numClicked = 0;
  ImagesInstance.list.push(this);
}

ImagesInstance.list = [];

// Change the filepath

new ImagesInstance('./images/bag.jpg', 'Bag');
new ImagesInstance('./images/banana.jpg', 'Banana');
new ImagesInstance('./images/bathroom.jpg', 'Bathroom');
new ImagesInstance('./images/boots.jpg', 'Boots');
new ImagesInstance('./images/breakfast.jpg', 'Breakfast');
new ImagesInstance('./images/bubblegum.jpg', 'BubbleGum');
new ImagesInstance('./images/chair.jpg', 'Chair');
new ImagesInstance('./images/cthulhu.jpg', 'cthulhu');
new ImagesInstance('./images/dog-duck.jpg', 'dog-duck');
new ImagesInstance('./images/dragon.jpg', 'dragon');
new ImagesInstance('./images/pen.jpg', 'Pen');
new ImagesInstance('./images/pet-sweep.jpg', 'petSweep');
new ImagesInstance('./images/scissors.jpg', 'scissors');
new ImagesInstance('./images/shark.jpg', 'shark');
new ImagesInstance('./images/sweep.png', 'sweep');
new ImagesInstance('./images/tauntaun.jpg','Tauntaun');
new ImagesInstance('./images/unicorn.jpg','Unicorn');
new ImagesInstance('./images/usb.gif','USB');
new ImagesInstance('./images/water-can.jpg','Water Can');
new ImagesInstance('./images/wine-glass.jpg','Wine Glass');


// functions to create and remove listeners

function createListeners() {
  var imageContainer = document.getElementById('images-container');
  imageContainer.addEventListener('click', handleClick);
}

function removeListeners() {
  var imageContainer = document.getElementById('images-container');
  imageContainer.removeEventListener('click', handleClick);
}

// function to generate random nums

function getRandoNum() {
  return Math.floor(Math.random() * ImagesInstance.list.length);
}

// function to handle click events

function handleClick (event) {

  for (var i = 0; i < ImagesInstance.list.length; i++) {
    if (ImagesInstance.list[i].name === event.target.alt) {
      ImagesInstance.list[i].numClicked++;
      numClicksThisRound++;
      if (numClicksThisRound === numClicksAllowed) {
        removeListeners();
      }
      break;
    }
  }
  getRandoImages();
}


// function to get random images
function getRandoImages() {

  // List of images from DOM
  var images = ['image1', 'image2', 'image3'];
  var texts = ['image1-text','image2-text','image3-text'];

  // Begin with empty set of images to compare against
  var currImageSet = [];
  console.log(currImageSet);

  // Repeat for each image showing
  for (var i = 0; i < images.length; i++) {

    // Find it in the DOM
    var image = document.getElementById(images[i]);
    var text = document.getElementById(texts[i]);

    // False flag
    var ok = false;

    // Keep looking for a unique image to display
    while (ok === false) {

      // Get random number between 0 and # of images
      var randoNum = getRandoNum();

      // If not previously shown and not currently displayed
      if (!prevImageSet.includes(randoNum) && !currImageSet.includes(randoNum)) {
        console.log(currImageSet);

        // Update display count
        ImagesInstance.list[randoNum].numDisplayed++;

        // Render it
        image.src = ImagesInstance.list[randoNum].filepath;
        console.log(image.src);
        image.alt = ImagesInstance.list[randoNum].name;
        text.textContent = ImagesInstance.list[randoNum].name;

        // Add image to list of images displayed
        currImageSet.push(randoNum);
        console.log(currImageSet);


        // End
        ok = true;
      }
    }
  }
  // Set previous set of images displayed to current set
  prevImageSet = currImageSet;
  console.log(currImageSet);

}


createListeners();
getRandoImages();

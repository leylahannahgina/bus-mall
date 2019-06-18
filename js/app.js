'use strict';

//construtor function to create an object for each image
//properties: name, filePath, description, number of times that has been shown, number of times that hs been clicked ,array of each instance


//var images = ['./images/bag.jpg','./images/banana.jpg','./images/bathroom.jpg','./images/boots.jpg','./images/breakfast.jpg','./images/bubblegum.jpg','./images/chair.jpg','./images/cthulhu.jpg','./images/dog-duck.jpg','./images/dragon.jpg','./images/pen.jpg','./images/pet-sweep.jpg','./images/scissors.jpg','./images/shark.jpg','./images/sweep.png'];

function ImagesInstance(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  this.description = description;
  this.numDisplayed = 0;
  this.numClicked = 0;
  ImagesInstance.list.push(this);
}

ImagesInstance.list = [];


function getrandomnumber(){
  var randomImageIndex = Math.floor(Math.random()* ImagesInstance.list.length);
  return randomImageIndex;
}


function setupEventListener(){
  var imgGroups = document.getElementsById('images-container');
  imgGroups.addEventListener('click', runClick);
}

var clickedCount = 0;
var maxClicked = 25;
//setup event listener
//remove event listener
//getrandomnumber
//handle click 
//get random images
//addEventListener for click
var img1 = document.getElementById('image1');
img1.addEventListener('click', getRandoImage);

var img2 = document.getElementById('image2');
img2.addEventListener('click', getRandoImage);

var img3 = document.getElementById('image3');
img3.addEventListener('click', getRandoImage);

var imgDisplayArr = [image1, image2, image3];
//function to get random images

var previousImgDisplayedArr = [];

function getRandoImage(){
  var randomImageIndex = Math.floor(Math.random()* ImagesInstance.list.length);
  var currentImgDisplayedArr = [];
  for (var i = 0; i < imgDisplayArr.length; i++){
    image = document.
    if (currentImgDisplayedArr[i] === randomImageIndex){
      randomImageIndex = Math.floor(Math.random()* ImagesInstance.list.length);  
    }else{
      currentImgDisplayedArr.push(randomImageIndex);
    }
    
    
  }
  var imageSrc = ImagesInstance.list[randomImageIndex].filePath;
  previousImgDisplayedArr.push(randomImageIndex);
  currentImgDisplayedArr.push(randomImageIndex);
  return imageSrc;
}


//function to render images

function renderImages(){
  currentImgDisplayedArr = [];
  for(var i = 0; i < imgDisplayArr.length; i++){
    var renderImage = document.createElement('img');
    renderImage.className = 'image-display';
    renderImage.src = getRandoImage();
    imgDisplayArr[i].appendChild(renderImage);
  }
} 


new ImagesInstance('bag.jpg','./images/bag.jpg', 'Bag');
new ImagesInstance('banana.jpg','./images/banana.jpg', 'Banana');
new ImagesInstance('bathroom.jpg','./images/bathroom.jpg', 'Bathroom');
new ImagesInstance('boots.jpg','./images/boots.jpg', 'Boots');
new ImagesInstance('breakfast.jpg','./images/breakfast.jpg', 'Breakfast');
new ImagesInstance('bubblegum.jpg','./images/bubblegum.jpg', 'BubbleGum');
new ImagesInstance('chair.jpg','./images/chair.jpg', 'Chair');
new ImagesInstance('cthulhu.jpg','./images/cthulhu.jpg', 'cthulhu');
new ImagesInstance('dog-duck.jpg','./images/dog-duck.jpg', 'dog-duck');
new ImagesInstance('dragon.jpg','./images/dragon.jpg', 'dragon');
new ImagesInstance('pen.jpg','./images/pen.jpg', 'Pen');
new ImagesInstance('pet-sweep.jpg','./images/pet-sweep.jpg', 'petSweep');
new ImagesInstance('scissors.jpg','./images/scissors.jpg', 'scissors');
new ImagesInstance('shark.jpg','./images/shark.jpg', 'shark');
new ImagesInstance('sweep.png','./images/sweep.png', 'sweep');

renderImages();



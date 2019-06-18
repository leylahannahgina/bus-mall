'use strict';

//construtor function to create an object for each image
//properties: name, filePath, description, number of times that has been shown, number of times that hs been clicked ,array of each instance


var images = ['./images/bag.jpg','./images/banana.jpg','./images/bathroom.jpg','./images/boots.jpg','./images/breakfast.jpg','./images/bubblegum.jpg','./images/chair.jpg','./images/cthulhu.jpg','./images/dog-duck.jpg','./images/dragon.jpg','./images/pen.jpg','./images/pet-sweep.jpg','./images/scissors.jpg','./images/shark.jpg','./images/sweep.png'];

function ImagesInstance(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  this.description = description;
  this.numDisplayed = 0;
  this.numClicked = 0;
  ImagesInstance.list.push(this);
}

ImagesInstance.list = [];
// console.log(ImagesInstance.list);
// console.log(ImagesInstance.numDisplayed);

//addEventListener for click
var img1 = document.getElementById('image1');
img1.addEventListener('click', getRandoImage);

var img2 = document.getElementById('image2');
img2.addEventListener('click', getRandoImage);

var img3 = document.getElementById('image3');
img3.addEventListener('click', getRandoImage);

var imgDisplayArr = [img1, img2, img3];


//function to get random images

var previousImgDisplayedArr = [];
var currentImgDisplayedArr = [];
console.log(currentImgDisplayedArr);
function getRandoImage(){
  var randomImageIndex = Math.floor(Math.random()* images.length);
  for (var i = 0; i < currentImgDisplayedArr.length; i++){
    if (currentImgDisplayedArr[i] === randomImageIndex){
      randomImageIndex = Math.floor(Math.random()* images.length);  
      console.log(randomImageIndex);
    }else{
      currentImgDisplayedArr.push(randomImageIndex);
      console.log(randomImageIndex);
    }
    
    
  }
  var imageSrc = ImagesInstance.list[randomImageIndex].filePath;
  previousImgDisplayedArr.push(randomImageIndex);
  currentImgDisplayedArr.push(randomImageIndex);
  return imageSrc;
}

// console.log(getRandoImage());
// console.log(currentImgDisplayedArr);

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

// console.log(previousImgDisplayedArr);

//function to find out the image instance index

  

//function to render descriptions

//function to deduplicate(looks at the previous array of images, )

// function deduplicate(){
  

// }




//clickEventListener(user initial count)

//function to remove eventlistener (after 25 clicks)

//function to calculate percentage of clicks

var bag = new ImagesInstance('bag.jpg','./images/bag.jpg', 'Bag');
var banana = new ImagesInstance('banana.jpg','./images/banana.jpg', 'Banana');
var bathroom = new ImagesInstance('bathroom.jpg','./images/bathroom.jpg', 'Bathroom');
var boots = new ImagesInstance('boots.jpg','./images/boots.jpg', 'Boots');
var breakfast = new ImagesInstance('breakfast.jpg','./images/breakfast.jpg', 'Breakfast');
var bubblegum = new ImagesInstance('bubblegum.jpg','./images/bubblegum.jpg', 'BubbleGum');
var chair = new ImagesInstance('chair.jpg','./images/chair.jpg', 'Chair');
var cthulhu = new ImagesInstance('cthulhu.jpg','./images/cthulhu.jpg', 'cthulhu');
var dogDuck = new ImagesInstance('dog-duck.jpg','./images/dog-duck.jpg', 'dog-duck');
var dragon = new ImagesInstance('dragon.jpg','./images/dragon.jpg', 'dragon');
var pen = new ImagesInstance('pen.jpg','./images/pen.jpg', 'Pen');
var petSweep = new ImagesInstance('pet-sweep.jpg','./images/pet-sweep.jpg', 'petSweep');
var scissors = new ImagesInstance('scissors.jpg','./images/scissors.jpg', 'scissors');
var shark = new ImagesInstance('shark.jpg','./images/shark.jpg', 'shark');
var sweep = new ImagesInstance('sweep.png','./images/sweep.png', 'sweep');

renderImages();

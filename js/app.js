'use strict';

var clickedCount = 0;
var maxClicked = 25;
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

//getrandomnumber
function getrandomnumber(){
  return Math.floor(Math.random()* ImagesInstance.list.length);
}

//setup event listener
function setupEventListener(){
  var imgDisplayArr = ['image1', 'image2', 'image3'];
  for(var i =0; i < imgDisplayArr.length; i++){
    var imgGroups = document.getElementById(imgDisplayArr[i]);
    imgGroups.addEventListener('click', runClick);
  }
}



//remove event listener
function rmEventListener(){
  var imgDisplayArr = ['image1', 'image2', 'image3'];
  for(var i =0; i < imgDisplayArr.length; i++){
    var imgGroups = document.getElementById(imgDisplayArr[i]);
    imgGroups.removeEventListener('click', runClick);
  }
}


//TODO handle clicks
function runClick(event){
  clickedCount++;
  for(var i = 0; i < ImagesInstance.list.length; i++){
    if(ImagesInstance.list[i].name === event.target.alt){
      ImagesInstance.list[i].numClicked++;
      
      if(clickedCount === maxClicked){
        rmEventListener();
        break;
      }
      
    }
  }
  getRandoImages();
}
//function to get random images


var previousImgDisplayedArr = [];

function getRandoImages(){
  var imgDisplayArr = ['image1', 'image2', 'image3'];
  var currentImgDisplayedArr = [];

  for (var i = 0; i < imgDisplayArr.length; i++){
    currentImgDisplayedArr = [];
    var image = document.getElementById(imgDisplayArr[i]);
    var deDuplicated = false;
    while(deDuplicated === false){
      var randomImageIndex = getrandomnumber();
      if (!currentImgDisplayedArr.includes(randomImageIndex) && !previousImgDisplayedArr.includes(randomImageIndex)){
        currentImgDisplayedArr.push(randomImageIndex);
        ImagesInstance.list[i].numDisplayed++;
        image.src = ImagesInstance.list[randomImageIndex].filePath;
        image.alt = ImagesInstance.list[randomImageIndex].name;
        deDuplicated = true;
      }

    }
    previousImgDisplayedArr = currentImgDisplayedArr;
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


setupEventListener();
getRandoImages();
console.log(clickedCount);



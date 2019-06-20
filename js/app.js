'use strict';


var imagesPaths = ['../images/bag.jpg','../images/banana.jpg','../images/bathroom.jpg','../images/boots.jpg','../images/breakfast.jpg','../images/bubblegum.jpg','../images/chair.jpg','../images/cthulhu.jpg','../images/dog-duck.jpg','../images/dragon.jpg','../images/pen.jpg','../images/pet-sweep.jpg','../images/scissors.jpg','../images/shark.jpg','../images/sweep.png','../images/usb.gif','../images/water-can.jpg','../images/wine-glass.jpg'];

var imagesDescriptions = ['bag', 'banana', 'bathroom', 'boots', 'breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','usb','water-can','wine-glass'];

var imagesNames = ['bag.jpg', 'banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark','sweep.png','usb.gif','water-can.jpg','wine-glass.jpg'];

ImagesInstance.list = [];

var clickedCount = 0;
var maxClicked = 25;

//check if there is a ls



//constructor funtion
function ImagesInstance(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  this.description = description;
  this.numDisplayed = 0;
  this.numClicked = 0;
  ImagesInstance.list.push(this);
}
if(localStorage.previousChartData){
 ImagesInstance.list = JSON.parse(localStorage.getItem('previousChartData'));
}else{
  createNewInstances(imagesNames,imagesPaths,imagesDescriptions);
}

//create Instances
function createNewInstances(newName, newFilePath, newDescription){
  for (var i = 0; i< imagesNames.length; i++){
    new ImagesInstance(newName[i], newFilePath[i], newDescription[i]);
  }
}

console.log(ImagesInstance.list);
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
        localStorage.setItem('previousChartData', JSON.stringify(ImagesInstance.list));
        rmEventListener();
        //todo create currentChartData and asign it to the combination to current one with previous one
        doTheChartThing();
        // var stringyfiedCurrentChartData =JSON.stringify(ImagesInstance.list);
        // console.log(stringyfiedCurrentChartData);

        // //todo need to combine current data (instanlist) with previous data and update currentchartdata
       
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
    var image = document.getElementById(imgDisplayArr[i]);
    var deDuplicated = false;
    while(deDuplicated === false){
      var randomImageIndex = getrandomnumber();
      if (!currentImgDisplayedArr.includes(randomImageIndex) && !previousImgDisplayedArr.includes(randomImageIndex)){
        currentImgDisplayedArr.push(randomImageIndex);
        ImagesInstance.list[randomImageIndex].numDisplayed++;
        image.src = ImagesInstance.list[randomImageIndex].filePath;
        image.alt = ImagesInstance.list[randomImageIndex].name;
        deDuplicated = true;
      }

    }
  }
  previousImgDisplayedArr = currentImgDisplayedArr;
}



setupEventListener();
getRandoImages();

var ctx = document.getElementById('chartArea').getContext('2d');

var allTheData = ImagesInstance.list;

function doTheChartThing(){
  var labels = [];
  var voteData = [];
  var colors = [];

  for(var i = 0; i < allTheData.length; i++){
    allTheData[i].pct = Math.round((allTheData[i].numClicked / allTheData[i].numDisplayed)*100);
  }

  allTheData.sort(function(a,b){
    return b.pct -a.pct;
  });

  for(var x =0; x < allTheData.length; x++){
    labels.push(allTheData[x].name);
    voteData.push(allTheData[x].pct);
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data:{
      labels: labels,
      datasets: [
        {
          label:'Popularity based on % of clicks',
          data: voteData,
          backgroundColor: colors
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales:{
        xAxes: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    }
  });


}


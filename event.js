window.onload = init;

function init(){
  var images = document. getElementsByTagName ("img") ;
  for (var i = 0; i < images. length; i++)
  images[i].onclick = showAnswer
  }
function showAnswer (eventObj) {
  var image = eventObj.target;
  var name = image.id;
  name = name + ".jpg";
  image.src = name;

  setTimeout(reblur, 2000, image)
  }

function reblur(image){
  var name = image.id
  name = name + "blur.png"
  image.src = name;
}








// this is the long way to do it.
/* function init() {
  var image0 = document.getElementById("zero") ; 
  image0.onclick = showImagezero;
  
  var image1 = document.getElementById("one") ;
  image1.onclick = showImageone;
  
  var image2 = document.getElementById("two") ; 
  image2.onclick = showImagetwo;
  
  var image3 = document.getElementById("three") ; 
  image3.onclick = showImagethree;
  
  var image4 = document.getElementById("four") ;
  image4.onclick = showImagefour;
  var image5 = document.getElementById("five") ; 
  image5.onclick = showImagefive;
}

function showImagezero() {
  var image = document.getElementById("zero")
  image.src = "image/1vis.jpg";
}

function showImageone (){
var image = document.getElementById ("one");
image.src = "image/2vis.jpg";}

function showImagetwo() {
  var image = document.getElementById("two")
  image.src = "image/3vis.jpeg";
}

function showImagethree (){
var image = document.getElementById ("three");
image.src = "image/4vis.jpeg";}

function showImagefour() {
  var image = document.getElementById("four")
  image.src = "image/5vis.jpeg";
}
function showImagefive() {
  var image = document.getElementById("five")
  image.src = "image/6vis.jpg";
}*/


//image slider
var myIndex = 0;
var duration = 3000;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";    
  setTimeout(carousel, duration);
}


// FOR THE FIRST MODAL
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//THE SECOND MODAL
var modal = document.getElementById("myModal1");
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img011");
var captionText = document.getElementById("caption1");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function() { 
  modal.style.display = "none";
}

// THE THIRD MODAL
var modal = document.getElementById("myModal2");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img012");
var captionText = document.getElementById("caption2");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() { 
  modal.style.display = "none";
}


//MENU BUTTON
var menuList = document.getElementById('menu-list');
function testFunction (x) {
  if (x.matches) 
  {
    menuList.style.width ='0px'
  }
}
// menuList.style.width ='0px';
function toggleMenu(){
  if(menuList.style.width == '0px'){
      menuList.style.width = '240px';

  } else {
      menuList.style.width = '0px';
  }
}
var x = window.matchMedia("(max-width: 1080px")
testFunction(x)
// x.addListener(testFunction)
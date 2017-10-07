function openNavr() {
    document.getElementById("mySidenavr").style.width = "250px";
}
function openNavl() {
    document.getElementById("mySidenavl").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenavr").style.width = "0";
    document.getElementById("mySidenavl").style.width = "0";
} 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideShow");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//Info
var mInfo = document.getElementById('mInfo');
var bInfo = document.getElementById("bInfo");
var span = document.getElementsByClassName("close")[0];
bInfo.onclick = function() {
    mInfo.style.display = "block";
}
span.onclick = function() {
    mInfo.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == mInfo) {
        mInfo.style.display = "none";
    }
}
//Gallery
/*var mGallery = document.getElementById('mGallery');
var bGallery = document.getElementById("bGallery");
var span = document.getElementsByClassName("close")[0];
bGallery.onclick = function() {
    mGallery.style.display = "block";
}
span.onclick = function() {
    mGallery.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == mGallery) {
        mGallery.style.display = "none";
    }
}*/
//Members
var mMembers = document.getElementById('mMembers');
var bMembers = document.getElementById("bMembers");
var span = document.getElementsByClassName("close")[0];
bMembers.onclick = function() {
    mMembers.style.display = "block";
}
span.onclick = function() {
    mMembers.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == mMembers) {
        mMembers.style.display = "none";
    }
}
function init(){
    ul = document.getElementById('image_slider');
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].clientWidth;
    // set ul's width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    /*.onclike = onClickPrev() will be fired when onload; is this because closure?? */
    prev.onclick = function(){ onClickPrev();};
    next.onclick = function(){ onClickNext();};
}
/**
* clicking prev. if current image is the first image, ul slide all the way to the last one
* otherwise, it slide to the image on the left of current image.
**/
function onClickPrev(){
    if (currentImage == 0){
        slideTo(imageNumber - 1);
    } 
    else{
        slideTo(currentImage - 1);
    }       
   }

/**
* clicking next. if current image is the last image, ul slide all the way to the first one
* otherwise, it slide to the image on the right of current image.
**/

function onClickNext(){
    if (currentImage == imageNumber - 1){
         slideTo(0);
    }
    else{
        slideTo(currentImage + 1);
    }       
}
/**
* slideTo is the function that actually does the movement.
* it takes one variable--imageToGo as parameter. it's an int stands for the image will be displayed
* By comparing imageToGo and currentImage, it can be decided which direction to move, left or right
* left: direction = -1; right: direction = 1
* so the new left position is the current postion plus/minus (number of imagesToGo * image width)
* when the step function is finished, a callback function will be called to set current image to imageToGo
**/
function slideTo(imageToGo){
    var direction;
    var numOfImageToGo = Math.abs(imageToGo - currentImage);
    direction = currentImage > imageToGo ? 1 : -1;
    currentPosition = -1 * currentImage * imageWidth;
    var opts = {
        duration:1000,
        delta:function(p){return p;},
        step:function(delta){
            ul.style.left = parseInt(currentPosition + direction * delta * imageWidth * numOfImageToGo) + 'px';
        },
        callback:function(){currentImage = imageToGo;}  
    };
    animate(opts);
}
function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration;
        if (progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
         }
    }, opts.delay || 17);
}
window.onload = init;
function generatePager(imageNumber){    
    var pageNumber;
    var pagerDiv = document.getElementById('pager');
    for (i = 0; i < imageNumber; i++){
            var li = document.createElement('li');
        pageNumber = document.createTextNode(parseInt(i + 1));
        li.appendChild(pageNumber);
        pagerDiv.appendChild(li);
        // add event inside a loop, closure issue.
        li.onclick = function(i){
                return function(){
                slideTo(i);
            }
        }(i);
    }
    // style.width can't get width from css sheet.  
    var computedStyle = document.defaultView.getComputedStyle(li, null);
    //border width 1px; offsetWidth = 22; offsetWidth returns a number
    var liWidth = li.offsetWidth;
    // remove px from the string returned. like '5px'-->'5'
    var liMargin = parseInt(computedStyle.margin.replace('px',""));
    // margin on both left and right side.
    pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
    }

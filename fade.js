var counter = 0;
setInterval(staticImage, 3000);
let elementsArray = document.getElementsByClassName("line");
let elementArraysImage = document.getElementsByClassName("UpperImage");
let lowerDiv = document.querySelector(".lower_div");
lowerDiv.addEventListener('scroll', fadeIn ); 
let b=true;
function fadeIn() {
    if(b){
        for (var i = 0; i < elementsArray.length; i++) {
            var elem = elementsArray[i]
            var elemImage = elementArraysImage[i];
            var distInView = elem.getBoundingClientRect().top - window.innerHeight + 200;
            if (distInView < 0 && distInView > -155) {
                elem.classList.add("current-line");
                elemImage.classList.add("graphic-view");
                if(i==elementsArray.length-1){
                    elemImage.classList.add("zindexSet");
                    b=false;
                    document.getElementById('lower_div').style.display="none";
                }
            } else {
                elem.classList.remove("current-line");
                elemImage.classList.remove("graphic-view");
            }
        }
    }
}
fadeIn();
function staticImage(){
    setTimeout(ClosedImage, 100)
    function ClosedImage(){
        document.getElementById("static-imageOpen").style.display="none";
        document.getElementById("static-imageClosed").style.display="block";
    }
    document.getElementById("static-imageOpen").style.display="block";
    document.getElementById("static-imageClosed").style.display="none";
}

const slider1 = document.getElementsByClassName('slider');
const slider= slider1[0];
const slides = document.getElementsByClassName('audi-car');
 
// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;
 
// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);
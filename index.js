//slideindex 1 to set slide 1 as default
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  console.log(slideIndex);

  console.log(slides.length);

  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  /**only if the first slide is prev */
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  /**--------------- */

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

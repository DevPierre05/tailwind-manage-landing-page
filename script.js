"use strict mode";


const toggle = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggle-icon");
const menu_bg = document.querySelector(".menu-bg");
const hamburger = document.querySelector(".hamburger");

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));

// Hamburger Menu
let showMenu = false;

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    toggleIcon.src = "img/icon-close.svg";
    hamburger.classList.remove("hidden");
    menu_bg.classList.remove("hidden")

    showMenu = true;
  } else {
    toggleIcon.src = "img/icon-hamburger.svg";
    hamburger.classList.add("hidden");
    menu_bg.classList.add("hidden");

    showMenu = false;
  }
}

// Overlay Click
menu_bg.addEventListener("click", function() {
  hamburger.classList.toggle("hidden");
  menu_bg.classList.toggle("hidden");
  toggleIcon.src = "img/icon-hamburger.svg";
})



//SLIDESHOW FOR SMALL SCREENS
const smallScreenSlide = function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  // dot image controls
  dots.forEach((dot,i) => {
    dot.addEventListener("click", (e) => {
      slideIndex = i + 1;
      showSlides(slideIndex);
      e.target.classList.add("bg-brightRed");
    })
  })

  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  //  cycle through cards
  function nextSlide() {
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    showSlides(slideIndex);
  }

  // show selected Card
  function showSlides(n) {
    let mql = window.matchMedia("(max-width: 720px)");
    if (mql.matches === true) {
      let i;
      
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach(slide => {
        if (slide.classList.contains("hidden")) {
          return;
        } else {
          slide.classList.add("hidden");
          slide.classList.remove("animate-slidefade");
        }
      })
      
      dots.forEach(dot => {
        dot.classList.remove("bg-brightRed");
      })
      
      slides[slideIndex - 1].classList.remove("hidden");
      slides[slideIndex - 1].classList.add("animate-slidefade");
      dots[slideIndex - 1].classList.add("bg-brightRed");
    }
  }
      
  setInterval(nextSlide, 15000);
}

smallScreenSlide()


// SlideShow for medium screen +


//Function to move testimonials
let curIndex = 3;
const mediumScreenSlide = function () {
  const mql = window.matchMedia("(max-width: 720px)");
    if (mql.matches === false) {
      if (curIndex === 4) curIndex = 0;
      slides.forEach(slide => {
        slide.classList.remove("hidden");
      });

      slides[curIndex].classList.add("hidden");
      curIndex++;
    }
}

// setInterval(mediumScreenSlide, 5000);
/* ==========================
   ALPHA MAIL WEBSITE SYSTEM
   Version 1.0
========================== */


/* ==========================
   MOBILE MENU
========================== */

const mobileMenu = document.querySelector(".mobile-menu");

const navLinks = document.querySelector(".nav-links");


if (mobileMenu) {

  mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("nav-active");

  });

}


/* ==========================
   ACTIVE PAGE HIGHLIGHT
========================== */

const currentPage = window.location.pathname;

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(link => {

  if (link.getAttribute("href") === currentPage ||

      currentPage.endsWith(link.getAttribute("href"))) {

    link.classList.add("active");

  }

});


/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {

    header.classList.add("header-scrolled");

  }

  else {

    header.classList.remove("header-scrolled");

  }

});


/* ==========================
   STATISTICS ANIMATION
========================== */

const statNumbers = document.querySelectorAll(".stats-grid h3");


function animateStats() {

  statNumbers.forEach(stat => {

    const target = parseInt(

      stat.innerText.replace(/\D/g, "")

    );

    let count = 0;

    const speed = target / 60;


    const update = () => {

      count += speed;


      if (count >= target) {

        stat.innerText = stat.innerText.includes("+")
          ? target + "+"
          : target;

        return;

      }


      stat.innerText = stat.innerText.includes("+")
        ? Math.floor(count) + "+"
        : Math.floor(count);


      requestAnimationFrame(update);

    };


    update();

  });

}


let statsPlayed = false;


window.addEventListener("scroll", () => {

  const statsSection = document.querySelector(".statistics");


  if (!statsSection || statsPlayed) return;


  const top = statsSection.getBoundingClientRect().top;


  if (top < window.innerHeight - 100) {

    statsPlayed = true;

    animateStats();

  }

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealItems = document.querySelectorAll(

  ".card, .statistics, .contact-banner"

);


function reveal() {

  revealItems.forEach(item => {

    const top = item.getBoundingClientRect().top;


    if (top < window.innerHeight - 100) {

      item.classList.add("show");

    }

  });

}


window.addEventListener("scroll", reveal);

reveal();


/* ==========================
   TRACKING SYSTEM
   (FUTURE FEATURE)
========================== */

function searchTracking() {

  const input = document.getElementById("tracking-input");


  if (!input) return;


  const value = input.value.trim();


  if (value === "") {

    alert("Please enter a tracking number.");

    return;

  }


  alert(

    "Tracking functionality will be available in a future update."

  );

}


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();


    const target = document.querySelector(

      this.getAttribute("href")

    );


    if (target) {

      target.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});

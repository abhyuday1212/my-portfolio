/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===============  MENU SHOW ===============*/
// validate if constant exists

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===============  MENU HIDDEN ===============*/

// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ==============SHADOW HEADER ========
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
// ============== Projects

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = () => {
  Email.send({
    SecureToken: "a39e3a7a-e0ca-44d9-acac-876bd3550a0d",
    To: "apsworks1212@gmail.com",
    From: "apsworks1212@gmail.com",
    Subject: document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> Phone:" +
      document.getElementById("phone").value +
      "<br> Subject:" +
      document.getElementById("subject").value +
      "<br> Message:" +
      document.getElementById("message").value,
  }).then(() => {
    //show sent message
    contactMessage.textContent = "Message sent successfully ✅";

    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);

    // Clear input fields
    contactForm.reset();
  });
};

// ================== typed js =============================

var typed1 = new Typed(".home__title", {
  strings: ["Developer", "Designer", "Mentor"],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true,
  loop: true,
  showCursor: false,
});

function initializeTyped() {
  var typed2 = new Typed(".my-skills", {
    strings: [
      "My Skills are: <strong>HTML</strong> ",
      "My Skills are: <strong>CSS</strong> ",
      "My Skills are: <strong>JavaScript</strong> ",
      "My Skills are: <strong>Git</strong> ",
      "My Skills are: <strong>Github</strong> ",
      "My Skills are: <strong>Bootstrap</strong> ",
      "My Skills are: <strong>Tailwind</strong> ",
      "My Skills are: <strong>C</strong> ",
      "My Skills are: <strong>Java</strong> ",
      "My Skills are: <strong>Data-Structures</strong> ",
      "My Skills are: <strong>Figma</strong> ",
      "My Skills are: <strong>front-end Development</strong> ",
      "My Skills are: <strong>Web Development</strong> ",
      "My Skills are: <strong>Netlify</strong> ",
      "My Skills are: <strong>Analytical Skills</strong> ",
      "My Skills are: <strong>HTML, CSS, JavaScript, Git, Github, Bootstrap, Tailwind, C, JAVA,DSA, Figma, front-end Development, Web-Development, Netlify,Analytical Skills </strong>",
    ],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    loop: false,
  });
}


window.addEventListener("scroll", updateURL);
    function updateURL() {
      const scrollY = window.scrollY;
      const url = `#scroll-${scrollY}`;
      history.replaceState({}, document.title, url);
}
    

    window.addEventListener('scroll', function () {
      if (window.location.hash === '#scroll-933.5') {
        initializeTyped();
      }
    
    });

        

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

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
  })
  .then(() => {
    //show sent message
    contactMessage.textContent = "Message sent successfully ✅";

    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);

    // Clear input fields
    contactForm.reset();
  }, () => {
        contactMessage.textContent = "Message NOT sent ❌";
  }
  )
};

// ================== typed js =============================

var typed1 = new Typed(".home__title", {
  strings: [" Developer", " UI/UX Designer", " Freelancer", " Mentor"],
  typeSpeed: 40,
  backSpeed: 20,
  smartBackspace: true,
  loop: true,
  showCursor: false,
});

function initializeTyped() {
  var typed2 = new Typed(".my-skills", {
    strings: [
      "<strong>HTML</strong> ",
      "<strong>CSS</strong> ",
      "<strong>JavaScript</strong> ",
      "<strong>Git</strong> ",
      "<strong>Github</strong> ",
      "<strong>Bootstrap</strong> ",
      "<strong>Tailwind</strong> ",
      "<strong>C</strong> ",
      "<strong>Java</strong> ",
      "<strong>Data-Structures</strong> ",
      "<strong>Figma</strong> ",
      "<strong>front-end Development</strong> ",
      "<strong>Web Development</strong> ",
      "<strong>Netlify</strong> ",
      "<strong>Analytical Skills</strong> ",
      "<strong>HTML, CSS, JavaScript, Git, Github, Bootstrap, Tailwind, C, JAVA,DSA, Figma, front-end Development, Web-Development, Netlify,Analytical Skills </strong>",
    ],
    typeSpeed: 25,
    backSpeed: 0,
    smartBackspace: true,
    loop: true,
  });
}
initializeTyped();

// window.addEventListener("scroll", updateURL);
//     function updateURL() {
//       const scrollY = window.scrollY;
//       const url = `#scroll-${scrollY}`;
//       history.replaceState({}, document.title, url);
// }

// window.addEventListener('scroll', function () {
//   if (window.location.hash === '#scroll-933.5') {
//     initializeTyped();
//   }

// });

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

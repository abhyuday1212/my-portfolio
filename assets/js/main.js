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
  }).then(
    () => {
      //show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      contactMessage.textContent = "Message NOT sent ❌";
    }
  );
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

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true  //animations repeat
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' })
sr.reveal(
  `.home__name,.home__info, .about__container , .section__title-1 , .about__info, .contact__social, .contact__data,.autotype1`,
  { origin: "left" }
);
sr.reveal(`.services__card, card__container`, { interval: 100 });











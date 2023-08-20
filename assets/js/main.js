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

const sendEmail = (e) => {
  e.preventDefault();

  Email.send({
    secureToken: "5b4d9066-1f4e-4133-bb26-c44ee1416d62",
    // Host: "smtp.gmail.com",
    // Username: "kuch bhi",
    // Password: "password",
    To: "apsworks1212@gmail.com",
    From: document.getElementById("email").value,
    Phone: document.getElementById("phone").value,
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
      }, 4000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      // Show error message
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
};

contactForm.addEventListener("submit", sendEmail);

// ===============================================

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

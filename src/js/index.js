import "../sass/main.scss";
import "../images/about-min.jpg";
import "../images/contact-small.jpg";
import "../images/gallery1-min-min.jpg";
import Slider from "./slider";
import Terms from "./terms";
import Form from "./form";

class Start {
  constructor() {
    this.slider = new Slider();
    this.terms = new Terms();
    this.form = new Form();
    this.goToButtons = document.querySelectorAll("[data-target]");
    this.hamburger = document.querySelector(".hamburger");
    this.menu = document.querySelector(".menu");
    this.menuList = document.querySelector(".menu__list");
    this.menuItem = document.querySelectorAll(".menu__item");
  }

  openMobileMenu() {
    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("hamburger--active");
      this.menu.classList.toggle("menu--active");
    });
  }

  init() {
    this.slideToSection();
    this.slider.init();
    this.terms.init();
    this.form.validateForm();
  }

  slideToSection() {
    this.goToButtons.forEach(button => {
      button.addEventListener("click", () => {
        const buttonTarget = button.getAttribute("data-target");
        document
          .querySelector(buttonTarget)
          .scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}

addEventListener("DOMContentLoaded", () => {
  const start = new Start();
  start.init();
  start.openMobileMenu();
});

/* function inputContactMessage() {
  const activeCourse = document.querySelector(".terms__btn--active");
  const selectedTerm = document.querySelector(".terms__table-body-row--active");
  const contactForm = document.querySelector(".contact__form");
  contactForm.reset();
  contactForm.contact__title.value = `Zapis na ${activeCourse.textContent.trim()} ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}`;
  contactForm.contact__message.value = `Dzień dobry,
zapisuję się na ${activeCourse.textContent.trim()} w ${selectedTerm.children[0].textContent.trim()} w dniach ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}.
Pozdrawiam.`;
}
 */

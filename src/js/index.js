import "../sass/main.scss";
import "../images/about-min.jpg";
import "../images/contact-small.jpg";
import "../images/gallery1-min-min.jpg";
import Slider from "./slider";
import Terms from "./terms";

const term = new Terms();
term.changeActiveBtn();
term.selectTerm();

const slider = new Slider();
slider.showArrows();

const buttonsToSections = document.querySelectorAll("[data-target]");
buttonsToSections.forEach(button => {
  slideToSection(button);
});

function slideToSection(button) {
  button.addEventListener("click", () => {
    const buttonTarget = button.getAttribute("data-target");
    document.querySelector(buttonTarget).scrollIntoView({ behavior: "smooth" });
  });
}

function inputContactMessage() {
  const activeCourse = document.querySelector(".terms__btn--active");
  const selectedTerm = document.querySelector(".terms__table-body-row--active");
  const contactForm = document.querySelector(".contact__form");
  contactForm.reset();
  contactForm.contact__title.value = `Zapis na ${activeCourse.textContent.trim()} ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}`;
  contactForm.contact__message.value = `Dzień dobry,
zapisuję się na ${activeCourse.textContent.trim()} w ${selectedTerm.children[0].textContent.trim()} w dniach ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}.
Pozdrawiam.`;
}

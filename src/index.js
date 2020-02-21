import "./sass/main.scss";

const toTermsBtn = document.querySelector(".btn--ghost");
const termsSection = document.querySelector("#terms");
toTermsBtn.addEventListener("click", () => {
  termsSection.scrollIntoView({ behavior: "smooth" });
});

const toAboutBtn = document.querySelector("#more-info-btn");
const aboutSection = document.querySelector("#about");
toAboutBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const allCoursesBtns = document.querySelectorAll(".terms__btn");
allCoursesBtns.forEach(singleCourse => {
  singleCourse.addEventListener("click", () => {
    allCoursesBtns.forEach(btn => {
      btn.classList.remove("terms__btn--active");
    });
    singleCourse.classList.add("terms__btn--active");
  });
});

const tableRows = document.querySelectorAll(".terms__table-body-row");
const getCourseBtn = document.querySelector("#getcourse");
const contactSection = document.querySelector("#contact");
const contactForm = document.querySelector(".contact__form");
tableRows.forEach(row => {
  row.addEventListener("click", () => {
    tableRows.forEach(row => {
      row.classList.remove("is-active");
    });
    row.classList.toggle("is-active");
    getCourseBtn.classList.add("is-active");
  });
});
getCourseBtn.addEventListener("click", () => {
  if (getCourseBtn.classList.contains("is-active")) {
    const selectedCourse = document.querySelector(".terms__btn--active");
    const selectedTerm = document.querySelector(
      ".terms__table-body-row.is-active"
    );
    contactForm.reset();
    contactSection.scrollIntoView({ behavior: "smooth" });
    console.log(selectedTerm.children);
    contactForm[
      "contact__title"
    ].value = `Zapis na ${selectedCourse.textContent.trim()} ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}`;
    contactForm["contact__message"].value = `Dzień dobry,
zapisuję się na ${selectedCourse.textContent.trim()} w ${selectedTerm.children[0].textContent.trim()} na godzinę ${selectedTerm.children[3].textContent.trim()} w dniach ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}.
Pozdrawiam
    `;
  }
});

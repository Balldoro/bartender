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
const toSliderBtn = document.querySelector("#show-img-btn");
const sliderSection = document.querySelector("#slider");
toSliderBtn.addEventListener("click", () => {
  sliderSection.scrollIntoView({ behavior: "smooth" });
});
const termsTables = document.querySelectorAll(".terms__table");
const allCoursesBtns = document.querySelectorAll(".terms__btn");
const tableContainer = document.querySelector(".terms__table-container");
const tableRows = document.querySelectorAll(".terms__table-body-row");
termsTables[0].classList.add("is-visible");
tableContainer.appendChild(termsTables[0]);
allCoursesBtns.forEach(singleCourse => {
  singleCourse.addEventListener("click", () => {
    allCoursesBtns.forEach(btn => {
      btn.classList.remove("terms__btn--active");
    });
    tableRows.forEach(row => {
      row.classList.remove("is-active");
    });
    getCourseBtn.classList.remove("is-active");
    singleCourse.classList.add("terms__btn--active");

    tableContainer.innerHTML = "";
    if (allCoursesBtns[0].classList.contains("terms__btn--active")) {
      termsTables[0].classList.add("is-visible");
      tableContainer.appendChild(termsTables[0]);
    } else if (allCoursesBtns[1].classList.contains("terms__btn--active")) {
      termsTables[1].classList.add("is-visible");
      tableContainer.appendChild(termsTables[1]);
    } else if (allCoursesBtns[2].classList.contains("terms__btn--active")) {
      termsTables[2].classList.add("is-visible");
      tableContainer.appendChild(termsTables[2]);
    } else if (allCoursesBtns[3].classList.contains("terms__btn--active")) {
      termsTables[3].classList.add("is-visible");
      tableContainer.appendChild(termsTables[3]);
    } else if (allCoursesBtns[4].classList.contains("terms__btn--active")) {
      termsTables[4].classList.add("is-visible");
      tableContainer.appendChild(termsTables[4]);
    }
  });
});

const getCourseBtn = document.querySelector("#getcourse");
const contactSection = document.querySelector("#contact");
const contactForm = document.querySelector(".contact__form");

tableRows.forEach(row => {
  row.addEventListener("click", () => {
    tableRows.forEach(row => {
      row.classList.remove("is-active");
    });
    row.classList.toggle("is-active");
    if (row.classList.contains("is-active")) {
      getCourseBtn.classList.add("is-active");
    } else {
      getCourseBtn.classList.remove("is-active");
    }
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
Pozdrawiam.`;
  }
});

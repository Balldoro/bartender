import "./sass/main.scss";

function slideToSection(btn, section) {
  const goToSectionBtn = document.querySelector(btn);
  goToSectionBtn.addEventListener("click", () => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  });
}
slideToSection(".btn--ghost", "#terms");
slideToSection("#more-info-btn", "#about");
slideToSection("#show-img-btn", "#slider");

function showTable(btnIndex) {
  const termTables = document.querySelectorAll(".terms__table");
  termTables.forEach(table => {
    table.classList.remove("is-visible");
  });
  termTables[btnIndex].classList.add("is-visible");
}

function changeTableBtn() {
  const tableBtns = document.querySelectorAll(".terms__btn");
  tableBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < tableBtns.length; i++) {
        tableBtns[i].classList.remove("terms__btn--active");
      }
      btn.classList.add("terms__btn--active");
      showTable(index);
    });
  });
}

function selectRow() {
  const tableRows = document.querySelectorAll(".terms__table-body-row");
  tableRows.forEach(row => {
    row.addEventListener("click", () => {
      if (row.classList.contains("terms__table-body-row--active")) {
        row.classList.remove("terms__table-body-row--active");
        getCourseBtn.classList.add("btn--disabled");
      } else {
        for (let i = 0; i < tableRows.length; i++) {
          tableRows[i].classList.remove("terms__table-body-row--active");
        }
        row.classList.add("terms__table-body-row--active");
        getCourseBtn.classList.remove("btn--disabled");
      }
    });
  });
}

function inputContactMessage() {
  const activeCourse = document.querySelector(".terms__btn--active");
  const selectedTerm = document.querySelector(".terms__table-body-row--active");
  const contactForm = document.querySelector(".contact__form");
  contactForm.reset();
  contactForm[
    "contact__title"
  ].value = `Zapis na ${activeCourse.textContent.trim()} ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}`;
  contactForm["contact__message"].value = `Dzień dobry,
zapisuję się na ${activeCourse.textContent.trim()} w ${selectedTerm.children[0].textContent.trim()} w dniach ${selectedTerm.children[1].textContent.trim()} - ${selectedTerm.children[2].textContent.trim()}.
Pozdrawiam.`;
}

const getCourseBtn = document.querySelector("#getcourse");
getCourseBtn.addEventListener("click", () => {
  if (!getCourseBtn.classList.contains("btn--disabled")) {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    inputContactMessage();
  }
});

changeTableBtn();
selectRow();

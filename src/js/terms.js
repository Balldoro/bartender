import Table from "./table";

class Terms {
  constructor() {
    this.tableContainer = document.querySelector(".terms__table-container");
    this.changingTermBtns = document.querySelectorAll(".terms__btn");
    this.tableRows = document.querySelectorAll(".terms__table-body-row");
    this.singInButton = document.querySelector("#getcourse");
  }

  changeActiveBtn() {
    this.changingTermBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.changingTermBtns.forEach(btn => {
          btn.classList.remove("terms__btn--active");
        });
        btn.classList.add("terms__btn--active");
        this.singInButton.classList.remove("btn--active");
        this.removeActiveTerm();
      });
    });
  }

  selectTerm() {
    this.tableRows.forEach(row => {
      row.addEventListener("click", () => {
        if (!row.classList.contains("terms__table-body-row--active")) {
          this.removeActiveTerm();
          row.classList.add("terms__table-body-row--active");
        } else {
          row.classList.remove("terms__table-body-row--active");
        }
        this.activateSignInButton(row);
      });
    });
  }

  removeActiveTerm() {
    this.tableRows.forEach(row => {
      row.classList.remove("terms__table-body-row--active");
    });
  }

  activateSignInButton(row) {
    if (row.classList.contains("terms__table-body-row--active")) {
      this.singInButton.classList.add("btn--active");
    } else {
      this.singInButton.classList.remove("btn--active");
    }
  }
}

export default Terms;

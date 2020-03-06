import Table from "./table";

class Terms {
  constructor() {
    this.tableContainer = document.querySelector(".terms__table-container");
    this.changingTermBtns = document.querySelectorAll(".terms__btn");
    this.singInButton = document.querySelector("#getcourse");
    this.table = new Table();
  }

  init() {
    const activeBtn = document.querySelector(".terms__btn--active");
    this.showTable(activeBtn);
    this.changeActiveBtn();
  }

  changeActiveBtn() {
    this.changingTermBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.changingTermBtns.forEach(btn => {
          btn.classList.remove("terms__btn--active");
        });
        btn.classList.add("terms__btn--active");
        this.showTable(btn);
        this.singInButton.classList.remove("btn--active");
      });
    });
  }

  showTable(activeBtn) {
    const tableForActiveButton = activeBtn.getAttribute("data-tableName");
    switch (tableForActiveButton) {
      case "Igrade":
        this.tableContainer.innerHTML = this.table.createTableIGrade();
        break;
      case "IIgrade":
        this.tableContainer.innerHTML = this.table.createTableIIGrade();
        break;
      case "instructors":
        this.tableContainer.innerHTML = this.table.createTableInstructors();
        break;
      case "party":
        this.tableContainer.innerHTML = this.table.createTableParty();
        break;
      case "barista":
        this.tableContainer.innerHTML = this.table.createBaristaTable();
        break;
    }
    this.selectTerm();
  }

  selectTerm() {
    const tableRows = document.querySelectorAll(".terms__table-body-row");
    tableRows.forEach(row => {
      row.addEventListener("click", () => {
        if (!row.classList.contains("terms__table-body-row--active")) {
          tableRows.forEach(row => {
            row.classList.remove("terms__table-body-row--active");
          });
          row.classList.add("terms__table-body-row--active");
        } else {
          row.classList.remove("terms__table-body-row--active");
        }
        this.activateSignInButton(row);
      });
    });
  }

  activateSignInButton(row) {
    if (row.classList.contains("terms__table-body-row--active")) {
      this.singInButton.classList.add("btn--active");
      this.singInButton.addEventListener("click", () => {
        document
          .querySelector("#contact")
          .scrollIntoView({ behavior: "smooth" });
      });
    } else {
      this.singInButton.classList.remove("btn--active");
    }
  }
}

export default Terms;

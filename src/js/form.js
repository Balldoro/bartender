class Form {
  constructor() {
    this.form = document.querySelector(".contact__form");
    this.inputs = this.form.querySelectorAll("input,textarea");
  }

  validateForm() {
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      this.inputs.forEach(input => {
        input.value === "" ? this.wrongInput(input) : this.correctInput(input);
      });
    });
  }

  correctInput(input) {
    input.labels.forEach(inputLabel => {
      inputLabel.classList.add("contact__label--correct");
    });
    input.classList.remove("contact__input--wrong");
    input.classList.add("contact__input--correct");
  }

  wrongInput(input) {
    input.labels.forEach(inputLabel => {
      inputLabel.classList.remove("contact__label--correct");
      inputLabel.classList.add("contact__label--wrong");
    });
    input.classList.remove("contact__input--correct");
    input.classList.add("contact__input--wrong");
  }
}
export default Form;

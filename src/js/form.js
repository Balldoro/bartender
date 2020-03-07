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
      inputLabel.classList.add("contact__label--accept");
    });
    input.classList.remove("contact__wrong");
    input.classList.add("contact__correct");
  }

  wrongInput(input) {
    input.labels.forEach(inputLabel => {
      inputLabel.classList.remove("contact__label--accept");
      inputLabel.classList.add("contact__label--wrong");
    });
    input.classList.remove("contact__correct");
    input.classList.add("contact__wrong");
  }
}
export default Form;

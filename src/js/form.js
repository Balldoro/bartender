class Form {
  constructor() {
    this.form = document.querySelector(".contact__form");
    this.inputs = this.form.querySelectorAll("input,textarea");
  }

  validateForm() {
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      this.inputs.forEach(input => {
        input.value === "" ? this.wrongForm(input) : this.correctForm(input);
      });
    });
  }

  correctForm(input) {
    input.labels.forEach(inputLabel => {
      inputLabel.classList.add("contact__label--accept");
    });
    input.classList.add("contact__input--accept");
  }

  wrongForm(input) {
    input.labels.forEach(inputLabel => {
      inputLabel.classList.remove("contact__label--accept");
      inputLabel.classList.add("contact__label--required");
    });
    input.classList.remove("contact__input--accept");
    input.classList.add("contact__input--required");
    this.createWarningMessage(input);
  }

  createWarningMessage(input) {
    const message = document.createElement("div");
    message.classList.add("contact__warning");
    message.textContent = "Uzupełnij to pole";
    input.parentElement.appendChild(message);
    setTimeout(() => {
      input.parentElement.removeChild(message);
    }, 3000);
  }
}
export default Form;

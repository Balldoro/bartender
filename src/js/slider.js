import "../images/gallery2-min.jpg";
import "../images/gallery3-min.jpg";
import "../images/gallery4-min.jpg";
import "../images/gallery6-min.jpg";

class Slider {
  constructor() {
    this.slides = Array.from(
      document.querySelectorAll(".slider__slide-container")
    );
    this.slidesContainer = document.querySelector(".slider__slides-container");
  }
  showArrows() {
    const leftArrow = this.createLeftArrow();
    const rightArrow = this.createRightArrow();
    this.slides[this.slides.length - 1].appendChild(rightArrow);
    this.slides[0].appendChild(leftArrow);
    leftArrow.addEventListener("click", () => {
      this.slides.push(this.slides[0]);
      this.slides.shift();
      this.slides.forEach(slide => {
        this.slidesContainer.appendChild(slide);
      });
      this.slides[0].appendChild(leftArrow);
      this.slides[this.slides.length - 1].appendChild(rightArrow);
    });
    rightArrow.addEventListener("click", () => {
      this.slides.unshift(this.slides[this.slides.length - 1]);
      this.slides.pop();
      this.slides.forEach(slide => {
        this.slidesContainer.appendChild(slide);
      });
      this.slides[0].appendChild(leftArrow);
      this.slides[this.slides.length - 1].appendChild(rightArrow);
    });
  }

  createLeftArrow() {
    const arrow = document.createElement("div");
    arrow.classList.add("slider__arrow");
    arrow.innerHTML = '<span class="fas fa-chevron-left"></span>';
    return arrow;
  }
  createRightArrow() {
    const arrow = document.createElement("div");
    arrow.classList.add("slider__arrow");
    arrow.classList.add("slider__arrow--right");
    arrow.innerHTML = '<span class="fas fa-chevron-right"></span>';
    return arrow;
  }
}
export default Slider;

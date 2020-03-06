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

  init() {
    setInterval(() => {
      this.slides.push(this.slides[0]);
      this.slides.shift();
      this.slides.forEach(slide => {
        this.slidesContainer.appendChild(slide);
      });
    }, 1000);
  }
}
export default Slider;

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
    console.log(window.matchMedia("(max-width: 710px)").matches);
  }
}
export default Slider;

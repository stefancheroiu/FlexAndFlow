/// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
}

// Function to handle the scroll event
function handleScroll() {
  const aboutSection = document.querySelector(".aboutpilates");
  const paragraphs = document.querySelectorAll(".paragraphs");
  const slider = document.querySelector(".carousel-inner");
  const trainerSection = document.querySelector(".trainer");
  const titluTrainer = document.querySelector(".cine");
  const imagineBianca = document.querySelector(".imaginebianca");
  const paragraftrainer = document.querySelector(".paragraftrainer");
  const insideSection = document.querySelector(".insidesection");
  const insidetitle = document.querySelector(".insidetitle");
  const sliderwrapper = document.querySelector(".slider-wrapper");
  const pricesSection = document.querySelector(".prices");
  const headerprices = document.querySelector(".headerprices");
  const line = document.querySelector(".line");
  const private = document.querySelector(".private");
  const group = document.querySelector(".group");

  if (isInViewport(aboutSection) || isInViewport(slider)) {
    paragraphs.forEach((p) => p.classList.add("slide-in-from-left"));
    slider.classList.add("carouselright");
  } else {
    paragraphs.forEach((p) => p.classList.remove("slide-in-from-left"));
    slider.classList.remove("carouselright");
  }

  if (isInViewport(trainerSection)) {
    titluTrainer.classList.add("slidefromdown");
    imagineBianca.classList.add("slidefromlefttrainer");
    paragraftrainer.classList.add("slidefromrighttrainer");
  } else {
    titluTrainer.classList.remove("slidefromdown");
    imagineBianca.classList.remove("slidefromlefttrainer");
    paragraftrainer.classList.remove("slidefromrighttrainer");
  }

  if (isInViewport(insideSection)) {
    insidetitle.classList.add("fadeintitlu");
    sliderwrapper.classList.add("fadeincontainer");
  } else {
    insidetitle.classList.remove("fadeintitlu");
    sliderwrapper.classList.remove("fadeincontainer");
  }

  if (isInViewport(pricesSection)) {
    headerprices.classList.add("slidefromtop");
    line.classList.add("slidefrombottomprices");
    private.classList.add("slidefromleftprices");
    group.classList.add("slidefromrightprices");
  } else {
    headerprices.classList.remove("slidefromtop");
    line.classList.remove("slidefrombottomprices");
    private.classList.remove("slidefromleftprices");
    group.classList.remove("slidefromrightprices");
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

const initSlider = () => {
  const sliders = document.querySelectorAll(".container"); // Select all slider containers

  sliders.forEach((slider) => {
    const imageList = slider.querySelector(".slider-wrapper .image-list");
    const slideButtons = slider.querySelectorAll(
      ".slider-wrapper .slide-button"
    );
    const sliderScrollbar = slider.querySelector(".slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition =
        sliderScrollbar.getBoundingClientRect().width -
        scrollbarThumb.offsetWidth;

      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        // Ensure the scrollbar thumb stays within bounds
        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

//Add the map

let map;

async function initMap() {
  // The location of FlexAndFLow
  const position = { lat: 44.314546798192744, lng: 23.79917795317521 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at FlexAndFlow
  map = new Map(document.getElementById("map"), {
    zoom: 11,
    center: position,
    mapId: "8e0a97af9386fef",
  });

  // The marker, positioned at Flex&Flow
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "FlexAndFlow",
  });
}

initMap();

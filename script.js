/// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight / 2 &&
    rect.bottom >= 0
  );
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
  const container = document.querySelector(".container");
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

  if(isInViewport(insideSection)){
    insidetitle.classList.add("fadeintitlu");
    container.classList.add("fadeincontainer");
  } else {
    insidetitle.classList.remove("fadeintitlu");
    container.classList.remove("fadeincontainer");
  }

  if(isInViewport(pricesSection)){
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


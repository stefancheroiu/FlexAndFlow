/// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
}

// Function to handle the scroll event
function handleScroll() {}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

//Add the map

let map;

async function initMap() {
  // The location of FlexAndFLow
  const position = { lat: 44.314546798192744, lng: 23.79917795317521 };
  const position1 = { lat: 44.32979860112324, lng: 23.800036398299586 };
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
    title: "Flex and Flow",
  });
  const marker1 = new AdvancedMarkerElement({
    map: map,
    position: position1,
    title: "Flex and Flow II",
  });
}

initMap();

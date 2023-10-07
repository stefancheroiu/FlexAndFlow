// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.left <= window.innerWidth && rect.right >= 0;
}

// Function to handle the scroll event
function handleScroll() {
  const aboutSection = document.querySelector(".aboutpilates");
  const paragraphs = document.querySelectorAll(".paragraphs");
  const pricesSection = document.querySelector(".prices");
  const header = document.querySelector(".header");

  if (isInViewport(aboutSection, pricesSection)) {
    paragraphs.forEach((p) => p.classList.add("slide-in-from-left"));
    header.classList.add("slidefromleft");
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
    mapId: "DEMO_MAP_ID",
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });

  // The marker, positioned at Flex&Flow
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "FlexAndFlow",
  });
}

initMap();


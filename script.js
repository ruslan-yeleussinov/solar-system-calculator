const firstButton = document.getElementById("calculate-diameter-button");
const secondButton = document.getElementById("calculate-distance-button");

const originalDiameterInKmSun = Number(document.getElementById("original-diameter-sun").innerText.replace(/ /g, ''));
const originalDiameterInKmMercury = Number(document.getElementById("original-diameter-mercury").innerText.replace(/ /g, ''));
const originalDiameterInKmVenus = Number(document.getElementById("original-diameter-venus").innerText.replace(/ /g, ''));
const originalDiameterInKmEarth = Number(document.getElementById("original-diameter-earth").innerText.replace(/ /g, ''));
const originalDiameterInKmMars = Number(document.getElementById("original-diameter-mars").innerText.replace(/ /g, ''));
const originalDiameterInKmJupiter = Number(document.getElementById("original-diameter-jupiter").innerText.replace(/ /g, ''));
const originalDiameterInKmSaturn = Number(document.getElementById("original-diameter-saturn").innerText.replace(/ /g, ''));
const originalDiameterInKmUranus = Number(document.getElementById("original-diameter-uranus").innerText.replace(/ /g, ''));
const originalDiameterInKmNeptune = Number(document.getElementById("original-diameter-neptune").innerText.replace(/ /g, ''));
const originalDiameterInKmMoon = Number(document.getElementById("original-diameter-moon").innerText.replace(/ /g, ''));

const originalDistanceInKmSun = Number(document.getElementById("original-distance-sun").innerText.replace(/ /g, ''));
const originalDistanceInKmMercury = Number(document.getElementById("original-distance-mercury").innerText.replace(/ /g, ''));
const originalDistanceInKmVenus = Number(document.getElementById("original-distance-venus").innerText.replace(/ /g, ''));
const originalDistanceInKmEarth = Number(document.getElementById("original-distance-earth").innerText.replace(/ /g, ''));
const originalDistanceInKmMars = Number(document.getElementById("original-distance-mars").innerText.replace(/ /g, ''));
const originalDistanceInKmJupiter = Number(document.getElementById("original-distance-jupiter").innerText.replace(/ /g, ''));
const originalDistanceInKmSaturn = Number(document.getElementById("original-distance-saturn").innerText.replace(/ /g, ''));
const originalDistanceInKmUranus = Number(document.getElementById("original-distance-uranus").innerText.replace(/ /g, ''));
const originalDistanceInKmNeptune = Number(document.getElementById("original-distance-neptune").innerText.replace(/ /g, ''));
const originalDistanceInKmMoon = Number(document.getElementById("original-distance-moon").innerText.replace(/ /g, ''));

const modelDiameterSun = document.getElementById("model-diameter-sun").innerText;
const modelDiameterMercury = document.getElementById("model-diameter-mercury").innerText;
const modelDiameterVenus = document.getElementById("model-diameter-venus").innerText;
const modelDiameterEarth = document.getElementById("model-diameter-earth").innerText;
const modelDiameterMars = document.getElementById("model-diameter-mars").innerText;
const modelDiameterJupiter = document.getElementById("model-diameter-jupiter").innerText;
const modelDiameterSaturn = document.getElementById("model-diameter-saturn").innerText;
const modelDiameterUranus = document.getElementById("model-diameter-uranus").innerText;
const modelDiameterNeptune = document.getElementById("model-diameter-neptune").innerText;
const modelDiameterMoon = document.getElementById("model-diameter-moon").innerText;

const unitDiameterSun = document.getElementById("unit-diameter-sun").innerText;
const unitDiameterMercury = document.getElementById("unit-diameter-mercury").innerText;
const unitDiameterVenus = document.getElementById("unit-diameter-venus").innerText;
const unitDiameterEarth = document.getElementById("unit-diameter-earth").innerText;
const unitDiameterMars = document.getElementById("unit-diameter-mars").innerText;
const unitDiameterJupiter = document.getElementById("unit-diameter-jupiter").innerText;
const unitDiameterSaturn = document.getElementById("unit-diameter-saturn").innerText;
const unitDiameterUranus = document.getElementById("unit-diameter-uranus").innerText;
const unitDiameterNeptune = document.getElementById("unit-diameter-neptune").innerText;
const unitDiameterMoon = document.getElementById("unit-diameter-moon").innerText;

const modelDistanceSun = document.getElementById("model-distance-sun").innerText;
const modelDistanceMercury = document.getElementById("model-distance-mercury").innerText;
const modelDistanceVenus = document.getElementById("model-distance-venus").innerText;
const modelDistanceEarth = document.getElementById("model-distance-earth").innerText;
const modelDistanceMars = document.getElementById("model-distance-mars").innerText;
const modelDistanceJupiter = document.getElementById("model-distance-jupiter").innerText;
const modelDistanceSaturn = document.getElementById("model-distance-saturn").innerText;
const modelDistanceUranus = document.getElementById("model-distance-uranus").innerText;
const modelDistanceNeptune = document.getElementById("model-distance-neptune").innerText;
const modelDistanceMoon = document.getElementById("model-distance-moon").innerText;

const unitDistanceSun = document.getElementById("unit-distance-sun").innerText;
const unitDistanceMercury = document.getElementById("unit-distance-mercury").innerText;
const unitDistanceVenus = document.getElementById("unit-distance-venus").innerText;
const unitDistanceEarth = document.getElementById("unit-distance-earth").innerText;
const unitDistanceMars = document.getElementById("unit-distance-mars").innerText;
const unitDistanceJupiter = document.getElementById("unit-distance-jupiter").innerText;
const unitDistanceSaturn = document.getElementById("unit-distance-saturn").innerText;
const unitDistanceUranus = document.getElementById("unit-distance-uranus").innerText;
const unitDistanceNeptune = document.getElementById("unit-distance-neptune").innerText;
const unitDistanceMoon = document.getElementById("unit-distance-moon").innerText;



// ARRAYS OF ORIGINAL DIAMETERS IN DIFFERENT UNITS
console.log('ARRAYS OF ORIGINAL DIAMETERS IN DIFFERENT UNITS\n\n');

// create array of original diameters of the planets in kilometers
const originalDiametersInKilometersArray = [originalDiameterInKmSun, originalDiameterInKmMercury, originalDiameterInKmVenus, originalDiameterInKmEarth, originalDiameterInKmMars, originalDiameterInKmJupiter, originalDiameterInKmSaturn, originalDiameterInKmUranus, originalDiameterInKmNeptune, originalDiameterInKmMoon];
console.log('Array of original diameters of the planets in kilometers:\n', originalDiametersInKilometersArray);

// create array of original diameters of the planets in meters
const originalDiametersInMetersArray = [];
for (let i = 0; i < originalDiametersInKilometersArray.length; i++) {
  const originalDiameterInKilometers = originalDiametersInKilometersArray[i];
  originalDiametersInMetersArray.push(originalDiameterInKilometers * 1000);
}
console.log('Array of original diameters of the planets in meters:\n', originalDiametersInMetersArray);

// create array of original diameters of the planets in centimeters
const originalDiametersInCentimetersArray = [];
for (let i = 0; i < originalDiametersInMetersArray.length; i++) {
  const originalDiameterInMeters = originalDiametersInMetersArray[i];
  originalDiametersInCentimetersArray.push(originalDiameterInMeters * 100);
}
console.log('Array of original diameters of the planets in centimeters:\n', originalDiametersInCentimetersArray);

// create array of original diameters of the planets in millimeters
const originalDiametersInMillimetersArray = [];
for (let i = 0; i < originalDiametersInCentimetersArray.length; i++) {
  const originalDiameterInCentimeters = originalDiametersInCentimetersArray[i];
  originalDiametersInMillimetersArray.push(originalDiameterInCentimeters * 10);
}
console.log('Array of original diameters of the planets in millimeters:\n', originalDiametersInMillimetersArray);

// Four diameters arrays in one big array
diametersArray = [originalDiametersInKilometersArray, originalDiametersInMetersArray, originalDiametersInCentimetersArray, originalDiametersInMillimetersArray];
console.log('Diameters array\n', diametersArray);



// ARRAYS OF ORIGINAL DISTANCES IN DIFFERENT UNITS
console.log('\nARRAYS OF ORIGINAL DISTANCES IN DIFFERENT UNITS\n\n');

// create array of original diameters of the planets in kilometers
const originalDistancesInKilometersArray = [originalDistanceInKmSun, originalDistanceInKmMercury, originalDistanceInKmVenus, originalDistanceInKmEarth, originalDistanceInKmMars, originalDistanceInKmJupiter, originalDistanceInKmSaturn, originalDistanceInKmUranus, originalDistanceInKmNeptune, originalDistanceInKmMoon];
console.log('Array of original distances of the planets in kilometers:\n', originalDistancesInKilometersArray);

// create array of original diameters of the planets in meters
const originalDistancesInMetersArray = [];
for (let i = 0; i < originalDistancesInKilometersArray.length; i++) {
  const originalDistanceInKilometers = originalDistancesInKilometersArray[i];
  originalDistancesInMetersArray.push(originalDistanceInKilometers * 1000);
}
console.log('Array of original distances of the planets in meters:\n', originalDistancesInMetersArray);

// create array of original distances of the planets in centimeters
const originalDistancesInCentimetersArray = [];
for (let i = 0; i < originalDistancesInMetersArray.length; i++) {
  const originalDistanceInMeters = originalDistancesInMetersArray[i];
  originalDistancesInCentimetersArray.push(originalDistanceInMeters * 100);
}
console.log('Array of original distances of the planets in centimeters:\n', originalDistancesInCentimetersArray);

// create array of original distances of the planets in millimeters
const originalDistancesInMillimetersArray = [];
for (let i = 0; i < originalDistancesInCentimetersArray.length; i++) {
  const originalDistanceInCentimeters = originalDistancesInCentimetersArray[i];
  originalDistancesInMillimetersArray.push(originalDistanceInCentimeters * 10);
}
console.log('Array of original distances of the planets in millimeters:\n', originalDistancesInMillimetersArray);

// Four distances array in one big array
distancesArray = [originalDistancesInKilometersArray, originalDistancesInMetersArray, originalDistancesInCentimetersArray, originalDistancesInMillimetersArray];
console.log('Distances array\n', distancesArray);



// PLANETS' NAMES AND MEASUREMENT UNITS ARRAYS

const firstArrayOfPlanetsNames = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Moon"];
const secondArrayOfPlanetsNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const unitsArray = ["km", "m", "cm", "mm"];



// CALCULATE BUTTONS

// First button calculates new model according to selected planet, its new diameter and selected measurement unit 
firstButton.addEventListener("click", () => {

  // Every selected planet has its own index that will be used to find the right name and diameter of this planet in the arrays of original diameters
  const selectedPlanetIndex = document.getElementById("select-diameter-planet").value;
  const selectedPlanet = firstArrayOfPlanetsNames[selectedPlanetIndex];
  // Get number of new diameter
  const newDiameter = Number(document.getElementById("diameter-input").value);
  // Every selected mesurement unit has its own index that will be used to find the right unit and right diameters array for further calculations  
  const selectedUnitIndex = document.getElementById("select-diameter-unit").value;
  const selectedUnit = unitsArray[selectedUnitIndex];

  console.log('\nNEW MODEL\n'); 
  console.log(`\nSelected planet: ${selectedPlanet}`);
  console.log(`New diameter: ${newDiameter} ${selectedUnit}`);
  
  calculateNewModelAcordingToNewDiameter(selectedPlanetIndex, newDiameter, selectedUnitIndex);
});

function calculateNewModelAcordingToNewDiameter(selectedPlanetIndex, newDiameter, selectedUnitIndex) {
  // Create new empty model diameters and distances arrays
  const modelDiametersArray = [];
  const modelDistancesArray = [];

  // Calculate new model scale
  let scale = diametersArray[selectedUnitIndex][selectedPlanetIndex] / newDiameter;
  console.log('Scale: ', scale, '\n');

  // Display this scale on table's header 
  let modelHeader = document.querySelector(".model-header");
  modelHeader.innerHTML = "New Model Scale " + "1 : " + scale.toLocaleString();

  // Calculate new model diameters
  for (let i = 0; i < originalDiametersInMillimetersArray.length; i++) {
    const originalDiameterInMillimeters = originalDiametersInMillimetersArray[i];
    const modelDiameterInMillimeters = originalDiameterInMillimeters / scale;
    modelDiametersArray.push(modelDiameterInMillimeters);
  }
  console.log('\nArray of model diameters of the planets in millimeters\n', modelDiametersArray, '\n\n');

  // Calculate new model distances and generate HTML
  for (let i = 0; i < originalDistancesInMillimetersArray.length; i++) {
    const originalDistanceInMillimeters = originalDistancesInMillimetersArray[i];
    const modelDistanceInMillimeters = originalDistanceInMillimeters / scale;
    modelDistancesArray.push(modelDistanceInMillimeters);
  }
  console.log('\nArray of model distances from the Sun in millimeters\n', modelDistancesArray, '\n\n');

  // Calculate new model diameters and generate HTML 
  for (let i = 0; i < modelDiametersArray.length; i++) {
    const modelDiameter = modelDiametersArray[i];

    if (modelDiameter < 10) {
      console.log(i, 'modelDiameter < 10');
      document.querySelectorAll(".model-diameter")[i].innerText = modelDiameter.toLocaleString(); 
      document.querySelectorAll(".unit-diameter")[i].innerText = "mm";

    } else if (modelDiameter >= 10 && modelDiameter < 1000) {
      console.log(i, 'modelDiameter >= 10 && modelDiameter < 1 000');
      document.querySelectorAll(".model-diameter")[i].innerText = (modelDiameter / 10).toLocaleString(); 
      document.querySelectorAll(".unit-diameter")[i].innerText = "cm";

    } else if (modelDiameter >= 1000 && modelDiameter < 1000000) {
      console.log(i, 'modelDiameter >= 10 && modelDiameter < 1 000 000');
      document.querySelectorAll(".model-diameter")[i].innerText = (modelDiameter / 1000).toLocaleString(); 
      document.querySelectorAll(".unit-diameter")[i].innerText = "m";

    } else if (modelDiameter >= 1000000) {
      console.log(i, 'modelDiameter >= 1 000 000');
      document.querySelectorAll(".model-diameter")[i].innerText = (modelDiameter / 1000000).toLocaleString(); 
      document.querySelectorAll(".unit-diameter")[i].innerText = "km";

    }
  }
  console.log('\n');

  // Calculate new model distances and generate HTML
  for (let i = 0; i < modelDistancesArray.length; i++) {
    const modelDistance = modelDistancesArray[i];

    if (modelDistance < 10) {
      console.log(i, 'modelDistance < 10');
      document.querySelectorAll(".model-distance")[i].innerText = modelDistance.toLocaleString(); 
      document.querySelectorAll(".unit-distance")[i].innerText = "mm";

    } else if (modelDistance >= 10 && modelDistance < 1000) {
      console.log(i, 'modelDistance >= 10 && modelDistance < 1 000');
      document.querySelectorAll(".model-distance")[i].innerText = (modelDistance / 10).toLocaleString(); 
      document.querySelectorAll(".unit-distance")[i].innerText = "cm";

    } else if (modelDistance >= 1000 && modelDistance < 1000000) {
      console.log(i, 'modelDistance >= 10 && modelDistance < 1 000 000');
      document.querySelectorAll(".model-distance")[i].innerText = (modelDistance / 1000).toLocaleString(); 
      document.querySelectorAll(".unit-distance")[i].innerText = "m";

    } else if (modelDistance >= 1000000) {
      console.log(i, 'modelDistance >= 1 000 000');
      document.querySelectorAll(".model-distance")[i].innerText = (modelDistance / 1000000).toLocaleString(); 
      document.querySelectorAll(".unit-distance")[i].innerText = "km";

    }
  }
  console.log('\n');

}

// ARRAYS OF ORIGINAL DIAMETERS IN DIFFERENT UNITS
console.log('ARRAYS OF ORIGINAL DIAMETERS IN DIFFERENT UNITS\n\n');

// create array of original diameters of the planets in kilometers
const originalDiametersInKilometersArray = [1392700, 4878, 12104, 12756, 6779, 139820, 116460, 50724, 49244, 3475];
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
const originalDistancesInKilometersArray = [0, 57910000, 108200000, 149600000, 227900000, 778500000, 1429000000, 2875000000, 4497000000, 384403];
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

// First button calculates new model according to selected planet, its new diameter in selected measurement unit 
const firstButton = document.getElementById("calculate-diameter-button");
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

  // Clear input field and reset select fields
  document.getElementById("select-diameter-planet").value = 0;
  document.getElementById("diameter-input").value = "";
  document.getElementById("select-diameter-unit").value = 0;
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

  // Calculate new model distances
  for (let i = 0; i < originalDistancesInMillimetersArray.length; i++) {
    const originalDistanceInMillimeters = originalDistancesInMillimetersArray[i];
    const modelDistanceInMillimeters = originalDistanceInMillimeters / scale;
    modelDistancesArray.push(modelDistanceInMillimeters);
  }
  console.log('\nArray of model distances from the Sun in millimeters\n', modelDistancesArray, '\n\n');

  // Format new model diameters and generate HTML 
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

  // Format new model distances and generate HTML
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

// Second button new model according to selected planet, its new distance from the Sun in selected measurement unit
const secondButton = document.getElementById("calculate-distance-button");
secondButton.addEventListener('click', () => {
  // Every selected planet has its own index that will be used to find the right name and distance of this planet from the Sun in the arrays of original distances
  const selectedPlanetIndex = document.getElementById("select-distance-planet").value;
  const selectedPlanet = secondArrayOfPlanetsNames[selectedPlanetIndex];
  // Get number of new distance
  const newDistance = Number(document.getElementById("distance-input").value);
  // Every selected mesurement unit has its own index that will be used to find the right unit and right distances array for further calculations  
  const selectedUnitIndex = document.getElementById("select-distance-unit").value;
  const selectedUnit = unitsArray[selectedUnitIndex];

  console.log('\nNEW MODEL\n'); 
  console.log(`\nSelected planet: ${selectedPlanet}`);
  console.log(`New distance: ${newDistance} ${selectedUnit}`);
  
  calculateNewModelAcordingToNewDistance(selectedPlanetIndex, newDistance, selectedUnitIndex);

  // Clear input field and reset select fields
  document.getElementById("select-distance-planet").value = 1;
  document.getElementById("distance-input").value = "";
  document.getElementById("select-distance-unit").value = 0;
});

function calculateNewModelAcordingToNewDistance(selectedPlanetIndex, newDistance, selectedUnitIndex) {
  // Create new empty model diameters and distances arrays
  const modelDiametersArray = [];
  const modelDistancesArray = [];

  // Calculate new model scale
  let scale = distancesArray[selectedUnitIndex][selectedPlanetIndex] / newDistance;
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

  // Calculate new model distances
  for (let i = 0; i < originalDistancesInMillimetersArray.length; i++) {
    const originalDistanceInMillimeters = originalDistancesInMillimetersArray[i];
    const modelDistanceInMillimeters = originalDistanceInMillimeters / scale;
    modelDistancesArray.push(modelDistanceInMillimeters);
  }
  console.log('\nArray of model distances from the Sun in millimeters\n', modelDistancesArray, '\n\n');

  // Format new model diameters and generate HTML 
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

  // Format new model distances and generate HTML
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

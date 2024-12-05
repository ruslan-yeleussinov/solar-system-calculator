const selectDiameterUnit = document.getElementById("select-diameter-unit");
const selectDistanceUnit = document.getElementById("select-distance-unit");
const calculateDiameterButton = document.getElementById("calculate-diameter-button");
const calculateDistanceButton = document.getElementById("calculate-distance-button");

const originalDiameterSun = Number(document.getElementById("original-diameter-sun").innerText.replace(/ /g, ''));
const originalDiameterMercury = Number(document.getElementById("original-diameter-mercury").innerText.replace(/ /g, ''));
const originalDiameterVenus = Number(document.getElementById("original-diameter-venus").innerText.replace(/ /g, ''));
const originalDiameterEarth = Number(document.getElementById("original-diameter-earth").innerText.replace(/ /g, ''));
const originalDiameterMars = Number(document.getElementById("original-diameter-mars").innerText.replace(/ /g, ''));
const originalDiameterJupiter = Number(document.getElementById("original-diameter-jupiter").innerText.replace(/ /g, ''));
const originalDiameterSaturn = Number(document.getElementById("original-diameter-saturn").innerText.replace(/ /g, ''));
const originalDiameterUranus = Number(document.getElementById("original-diameter-uranus").innerText.replace(/ /g, ''));
const originalDiameterNeptune = Number(document.getElementById("original-diameter-neptune").innerText.replace(/ /g, ''));
const originalDiameterMoon = Number(document.getElementById("original-diameter-moon").innerText.replace(/ /g, ''));

const originalDistanceSun = Number(document.getElementById("original-distance-sun").innerText.replace(/ /g, ''));
const originalDistanceMercury = Number(document.getElementById("original-distance-mercury").innerText.replace(/ /g, ''));
const originalDistanceVenus = Number(document.getElementById("original-distance-venus").innerText.replace(/ /g, ''));
const originalDistanceEarth = Number(document.getElementById("original-distance-earth").innerText.replace(/ /g, ''));
const originalDistanceMars = Number(document.getElementById("original-distance-mars").innerText.replace(/ /g, ''));
const originalDistanceJupiter = Number(document.getElementById("original-distance-jupiter").innerText.replace(/ /g, ''));
const originalDistanceSaturn = Number(document.getElementById("original-distance-saturn").innerText.replace(/ /g, ''));
const originalDistanceUranus = Number(document.getElementById("original-distance-uranus").innerText.replace(/ /g, ''));
const originalDistanceNeptune = Number(document.getElementById("original-distance-neptune").innerText.replace(/ /g, ''));
const originalDistanceMoon = Number(document.getElementById("original-distance-moon").innerText.replace(/ /g, ''));

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




calculateDiameterButton.addEventListener("click", () => {
  const selectDiameterPlanetIndex = document.getElementById("select-diameter-planet").value;
  console.log("selected planet index: ", selectDiameterPlanetIndex);

  const inputDiameter = Number(document.getElementById("diameter-input").value);
  console.log("input diameter: ", inputDiameter);

  const selectDiameterUnit = document.getElementById("select-diameter-unit");
  console.log("selected unit: ", selectDiameterUnit.value);
  
  calculateNewModelAcordingToNewDiameter(selectDiameterPlanetIndex, inputDiameter, selectDiameterUnit.value);
});

function calculateNewModelAcordingToNewDiameter(selectedPlanetIndex, newDiameter, selectedUnit) {
  const originalDiametersArray = [originalDiameterSun, originalDiameterMercury, originalDiameterVenus, originalDiameterEarth, originalDiameterMars, originalDiameterJupiter, originalDiameterSaturn, originalDiameterUranus, originalDiameterNeptune, originalDiameterMoon];
  console.log("original Diameters Array: ", originalDiametersArray);
  
  const originalDistancesArray = [originalDistanceSun, originalDistanceMercury, originalDistanceVenus, originalDistanceEarth, originalDistanceMars, originalDistanceJupiter, originalDistanceSaturn, originalDistanceUranus, originalDistanceNeptune, originalDistanceMoon];
  console.log("original Distances Array: ", originalDistancesArray);

  const modelDiametersArray = [];
  const modelDistancesArray = [];
  let scale = 0; 

  if (selectedUnit === "m") {
    scale = (originalDiametersArray[Number(selectedPlanetIndex)] * 1000) / newDiameter; 
  } else if (selectedUnit === "cm") {
    scale = (originalDiametersArray[Number(selectedPlanetIndex)] * 100000) / newDiameter; 
  } else if (selectedUnit === "mm") {
    scale = (originalDiametersArray[Number(selectedPlanetIndex)] * 1000000) / newDiameter; 
  } else {
    scale = originalDiametersArray[Number(selectedPlanetIndex)] / newDiameter; 
  }
  console.log("scale: ", scale);
  
  let modelHeader = document.querySelector(".model-header");
  modelHeader.innerHTML = "Scale " + "1 : " + scale.toLocaleString();

  for (let i = 0; i < originalDiametersArray.length; i++) {
    const originalDiameter = originalDiametersArray[i];

    if (selectedUnit === "km") {
      const modelDiameter = originalDiameter / scale;
      modelDiametersArray.push(modelDiameter);
    } else if (selectedUnit === "m") {
      const modelDiameter = originalDiameter / (scale / 1000);
      modelDiametersArray.push(modelDiameter);
    } else if (selectedUnit = "cm") {
      const modelDiameter = originalDiameter / (scale / 100000);
      modelDiametersArray.push(modelDiameter);
    } else if (selectedUnit = "mm") {
      const modelDiameter = originalDiameter / (scale / 1000000);
      modelDiametersArray.push(modelDiameter);
    }

    // const modelDiameter = originalDiameter / scale;
    // modelDiametersArray.push(modelDiameter);
  }
  console.log("model Diameters Array: ", modelDiametersArray);

  for (let i = 0; i < originalDistancesArray.length; i++) {
    const originalDistance = originalDistancesArray[i];
    const modelDistance = originalDistance / scale;
    modelDistancesArray.push(modelDistance);
  }
  console.log("model Distances Array: ", modelDistancesArray);

  for (let i = 0; i < modelDiametersArray.length; i++) {
    const modelDiameter = modelDiametersArray[i];

    document.querySelectorAll(".model-diameter")[i].innerText = modelDiameter.toLocaleString(); 
    document.querySelectorAll(".unit-diameter")[i].innerText = selectedUnit;

    // if (modelDiameter < 1 && selectedUnit === "km") {
    //   document.querySelectorAll(".model-diameter")[i].innerText = (modelDiameter * 1000).toLocaleString(); 
    //   document.querySelectorAll(".unit-diameter")[i].innerText = "m";
    // } else if (modelDiameter < 1 && selectedUnit === "m") {
    //   document.querySelectorAll(".model-diameter")[i].innerText = (modelDiameter * 100).toLocaleString(); 
    //   document.querySelectorAll(".unit-diameter")[i].innerText = "cm";
    // } else {
    //   document.querySelectorAll(".model-diameter")[i].innerText = modelDiameter.toLocaleString(); 
    //   document.querySelectorAll(".unit-diameter")[i].innerText = selectedUnit;
    // }
     
  }

  for (let i = 0; i < modelDistancesArray.length; i++) {
    const modelDistance = modelDistancesArray[i];

    document.querySelectorAll(".model-distance")[i].innerText = modelDistance.toLocaleString(); 
    document.querySelectorAll(".unit-distance")[i].innerText = selectedUnit;
  }

  console.log("---------------------------------");
  console.log("---------------------------------");
  console.log("---------------------------------");
}





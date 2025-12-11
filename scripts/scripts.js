"use strict";

/****************** create variables ******************/
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/

function recalculate() {
  const costLabel = document.getElementById("calculated-cost");
  if (modelName === "XYZ") {
    const cost = duration * 100;
    costLabel.textContent = cost.toFixed(2);
  } else if (modelName === "CPRG") {
    const cost = duration * 213;
    costLabel.textContent = cost.toFixed(2);
  }
}

/****************** model button logic ******************/
const modelButton = document.getElementById("model-button");

function changeModel() {
  const modelLabel = document.getElementById("model-text");

  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelLabel.textContent = "Model CPRG";
  } else {
    modelName = "XYZ";
    modelLabel.textContent = "Model XYZ";
  }

  recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
const durationButton = document.getElementById("duration-button");

function changeDuration() {
  const durationLabel = document.getElementById("duration-text");
  const input = prompt("How many days?");
  if (input === null) return;
  const days = Number(input);
  if (isNaN(days) || days < 1) {
    alert("The duration needs to be a number greater than 1");
    return;
  }
  duration = days;
  durationLabel.textContent = duration;
  recalculate();
}

durationButton.addEventListener("click", changeDuration);

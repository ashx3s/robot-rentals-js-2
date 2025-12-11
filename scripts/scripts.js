/****************** create variables ******************/
var modelName = "XYZ";
var duration = 0;

/****************** helper function ******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");

    if (modelName === "XYZ") {
        costLabel.innerHTML = duration * 100;
    }
    else if (modelName === "CPRG") {
        costLabel.innerHTML = duration * 213;
    }
}

/****************** model button logic ******************/
var modelButton = document.getElementById("model-button");

function changeModel() {
    let modelLabel = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelLabel.innerHTML = "Model CPRG";
    }
    else {
        modelName = "XYZ";
        modelLabel.innerHTML = "Model XYZ";
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
var durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationLabel = document.getElementById("duration-text");

    duration = prompt('How many days?');
    durationLabel.innerHTML = duration;
    recalculate();
}

durationButton.addEventListener("click", changeDuration);
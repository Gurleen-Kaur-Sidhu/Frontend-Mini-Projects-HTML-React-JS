let currentLight= "yellow";

function redlight() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function yellowlight() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function greenlight() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor   = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor   = "black";
}

function SwitchLight() {
    if (currentLight === "red") {
        greenlight();
        currentLight = "green";
        setTimeout(SwitchLight, 3000);
    } else if (currentLight === "green") {
        yellowlight();
        currentLight = "yellow";
        setTimeout(SwitchLight, 2000);

    } else if (currentLight === "yellow") {
        redlight();
        currentLight = "red";
        setTimeout(SwitchLight, 3000);

    }
}

// setInterval(SwitchLight, 3000);

setTimeout(SwitchLight, 0);
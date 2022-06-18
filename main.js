let sketchPad = document.querySelector(".sketch-pad");
let markerButton = false;
let drawing = false;
let eraserButton = false;
let erasing = false;
let clearButton = false;
let colorGrabbingButton = false;
let colorPicking = false;
let shadeButton = false;
let shadening = false;
let lightButton = false;
let lightening = false;
let rainbowButton = false;
let randomColoring = false;
let arrayOfRandomColors = [
  "#DFFF00",
  "FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF",
];

main();

function main() {
  setButtonsUp();
  backgroundColorPicker();
  setUpSlider();
}

function setButtonsUp() {
  setMarkerButtonUp();
  setEraserButtonUp();
  setUpClearButton();
  setUpColorGrabbingButton();
  setUpShadeButton();
  setUpLighteningButton();
  setUpRainbowButton();
}

function setUpRainbowButton() {
  let randomColors = document.getElementById("rainbow");
  randomColors.addEventListener("click", () => {
    if (
      !markerButton &&
      !eraserButton &&
      !clearButton &&
      !colorGrabbingButton &&
      !shadeButton &&
      !lightButton
    ) {
      if (rainbowButton) {
        randomColors.style.backgroundColor = "gold";
        randomColors.style.boxShadow = "1px 4px 4px black";
      } else {
        randomColors.style.backgroundColor = "lightgrey";
        randomColors.style.boxShadow = "none";
      }
      rainbowButton = !rainbowButton;
    }
  });
}

function setUpLighteningButton() {
  let lighten = document.getElementById("light");
  lighten.addEventListener("click", () => {
    if (
      !markerButton &&
      !eraserButton &&
      !clearButton &&
      !colorGrabbingButton &&
      !shadeButton &&
      !rainbowButton
    ) {
      if (lightButton) {
        lighten.style.backgroundColor = "gold";
        lighten.style.boxShadow = "1px 4px 4px black";
      } else {
        lighten.style.backgroundColor = "lightgrey";
        lighten.style.boxShadow = "none";
      }
      lightButton = !lightButton;
    }
  });
}

function setUpShadeButton() {
  let shaden = document.getElementById("shade");
  shaden.addEventListener("click", () => {
    if (
      !markerButton &&
      !eraserButton &&
      !clearButton &&
      !colorGrabbingButton &&
      !lightButton &&
      !rainbowButton
    ) {
      if (shadeButton) {
        shaden.style.backgroundColor = "gold";
        shaden.style.boxShadow = "1px 4px 4px black";
      } else {
        shaden.style.backgroundColor = "lightgrey";
        shaden.style.boxShadow = "none";
      }
      shadeButton = !shadeButton;
    }
  });
}

function setUpColorGrabbingButton() {
  let selectedColor = document.getElementById("colGrabber");
  selectedColor.addEventListener("click", () => {
    if (
      !markerButton &&
      !eraserButton &&
      !clearButton &&
      !shadeButton &&
      !lightButton &&
      !rainbowButton
    ) {
      if (colorGrabbingButton) {
        selectedColor.style.backgroundColor = "gold";
        selectedColor.style.boxShadow = "1px 4px 4px black";
      } else {
        selectedColor.style.backgroundColor = "lightgrey";
        selectedColor.style.boxShadow = "none";
      }
      colorGrabbingButton = !colorGrabbingButton;
    }
  });
}

function setUpClearButton() {
  let clear = document.getElementById("clear");
  clear.addEventListener("click", () => {
    if (
      !markerButton &&
      !eraserButton &&
      !colorGrabbingButton &&
      !shadeButton &&
      !lightButton &&
      !rainbowButton
    ) {
      if (clearButton) {
        clear.style.backgroundColor = "gold";
        clear.style.boxShadow = "1px 4px 4px black";
      } else {
        clear.style.backgroundColor = "lightgrey";
        clear.style.boxShadow = "none";
        clearScreen();
      }
      clearButton = !clearButton;
    }
  });
}

function clearScreen() {
  //takeaway the 'colored' class
  let coloredCells = document.querySelectorAll(".colored");
  coloredCells.forEach((cell) => cell.classList.remove("colored"));

  let cells = document.querySelectorAll(".column");
  let currentBackgroundColor = document.getElementById("colorpicker2").value;
  cells.forEach((cell) => {
    cell.style.backgroundColor = currentBackgroundColor;
  });
}

function setMarkerButtonUp() {
  let pen = document.getElementById("marker");
  pen.addEventListener("click", () => {
    if (
      !eraserButton &&
      !clearButton &&
      !colorGrabbingButton &&
      !shadeButton &&
      !lightButton &&
      !rainbowButton
    ) {
      if (markerButton) {
        pen.style.backgroundColor = "gold";
        pen.style.boxShadow = "1px 4px 4px black";
      } else {
        pen.style.backgroundColor = "lightgrey";
        pen.style.boxShadow = "none";
      }
      markerButton = !markerButton;
    }
  });
}

function setEraserButtonUp() {
  let eraser = document.getElementById("eraser");
  eraser.addEventListener("click", () => {
    if (
      !lightButton &&
      !markerButton &&
      !clearButton &&
      !colorGrabbingButton &&
      !shadeButton &&
      !rainbowButton
    ) {
      if (eraserButton) {
        eraser.style.backgroundColor = "gold";
        eraser.style.boxShadow = "1px 4px 4px black";
      } else {
        eraser.style.backgroundColor = "lightgrey";
        eraser.style.boxShadow = "none";
      }
      eraserButton = !eraserButton;
    }
  });
}

function createSketchPad(dimension) {
  let cellWidth = (sketchPad.offsetWidth - (dimension + 1)) / dimension;
  let cellHeight = (sketchPad.offsetHeight - 2 * dimension) / dimension;

  for (let i = 0; i < dimension; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("row");
    rowContainer.classList.add(i);

    for (let j = 0; j < dimension; j++) {
      let columnContainer = document.createElement("div");
      columnContainer.classList.add("column");
      columnContainer.classList.add(j);

      columnContainer.style.width = cellWidth.toString() + "px";
      columnContainer.style.height = cellHeight.toString() + "px";

      columnContainer.addEventListener("mousedown", () => {
        if (markerButton) {
          drawing = true;
        } else if (eraserButton) {
          erasing = true;
        } else if (colorGrabbingButton) {
          colorPicking = true;
        } else if (shadeButton) {
          shadening = true;
        } else if (lightButton) {
          lightening = true;
        } else if (rainbowButton) {
          randomColoring = true;
        }
        fill(rowContainer.classList[1], columnContainer.classList[1]);
      });

      window.addEventListener("mouseup", () => {
        setOptionsToFalse();
      });
      columnContainer.addEventListener("mouseup", () => {
        setOptionsToFalse();
      });
      columnContainer.addEventListener("click", () => {
        setOptionsToFalse();
      });
      columnContainer.addEventListener("mousemove", () => {
        fill(rowContainer.classList[1], columnContainer.classList[1]);
      });
      rowContainer.appendChild(columnContainer);
    }
    sketchPad.appendChild(rowContainer);
  }
}

function setOptionsToFalse() {
  drawing = false;
  erasing = false;
  colorPicking = false;
  shadening = false;
  lightening = false;
  randomColoring = false;
}

function fill(row, column) {
  let rows = document.querySelectorAll(".row");
  let cellToFill = rows[row].childNodes[column];
  let markerColor = document.getElementById("colorpicker1");
  markerColor = markerColor.value;

  if (markerButton) {
    if (drawing) {
      cellToFill.style.backgroundColor = markerColor;
      cellToFill.classList.add("colored");
    }
  } else if (erasing) {
    let colorPicker = document.getElementById("colorpicker2");
    cellToFill.style.backgroundColor = colorPicker.value;
  } else if (colorPicking || shadening || lightening) {
    let color = cellToFill.style.backgroundColor;
    color = convertRGBToHex(color);

    if (colorPicking) {
      let colorPicker1 = document.getElementById("colorpicker1");
      colorPicker1.value = color;
    } else if (shadening || lightening) {
      let tone;
      if (shadening) {
        tone = "darken";
      } else if (lightening) {
        tone = "lighten";
      }
      color = tonePixel(color, tone);
      cellToFill.style.backgroundColor = color;
    }
  } else if (randomColoring) {
    //create an array of random colors
    let randomColor = Math.round(Math.random() * 7);
    randomColor = arrayOfRandomColors[randomColor];

    cellToFill.style.backgroundColor = randomColor;
    cellToFill.classList.add("colored");
  }
}

function tonePixel(color, tone) {
  color = color.slice(1);
  color = parseInt(color, 16);

  if (tone == "darken") {
    color = ((color & 0x7e7e7e) >> 1) | (color & 0x808080);
  } else if (tone == "lighten") {
    color = ((color & 0x7f7f7f) << 1) | (color & 0x080808);
    console.log(color);
  }

  color = color.toString(16);
  color = "#" + color;

  return color;
}

function convertRGBToHex(color) {
  let rgbColors = [];
  let red = [];
  let green = [];
  let blue = [];

  for (let i = 0; i < color.length; i++) {
    if (color.charAt(i) == "(") {
      i += 1;
      for (let j = 0; j < 3; j++) {
        if (!isNaN(parseInt(color.charAt(i + j)))) {
          red.push(parseInt(color.charAt(i + j)));
        } else {
          j = 3;
        }
      }
    } else if (
      color.charAt(i) == "," &&
      (color.charAt(i + 3) == "," ||
        color.charAt(i + 4) == "," ||
        color.charAt(i + 5) == ",")
    ) {
      i += 2;
      for (let j = 0; j < 3; j++) {
        if (!isNaN(parseInt(color.charAt(i + j)))) {
          green.push(parseInt(color.charAt(i + j)));
        } else {
          j = 3;
        }
      }
    } else if (
      color.charAt(i) == "," &&
      (color.charAt(i + 3) == ")" ||
        color.charAt(i + 4) == ")" ||
        color.charAt(i + 5) == ")")
    ) {
      i += 2;
      for (let j = 0; j < 3; j++) {
        if (!isNaN(parseInt(color.charAt(i + j)))) {
          blue.push(parseInt(color.charAt(i + j)));
        } else {
          j = 3;
        }
      }
    }
  }

  let redString = red.join("");
  let greenString = green.join("");
  let blueString = blue.join("");

  rgbColors.push(redString);
  rgbColors.push(greenString);
  rgbColors.push(blueString);

  rgbColors = convertColorToHex(rgbColors);
  return rgbColors;
}

function convertColorToHex(rgbColors) {
  let hexColors = [];

  //for each element of the input
  //divide by color, round down take that number and check the letter
  //second number is color % 16
  rgbColors.forEach((color) => {
    let sixteensPlace = Math.floor(color / 16);
    sixteensPlace = checkHexCode(sixteensPlace);
    let onesPlace = color % 16;
    onesPlace = checkHexCode(onesPlace);
    hexColors.push(sixteensPlace);
    hexColors.push(onesPlace);
  });

  hexColors.unshift("#");
  hexColors = hexColors.join("");
  return hexColors;
}

function checkHexCode(number) {
  if (number > 9) {
    if (number == 10) {
      number = "A";
    } else if (number == 11) {
      number = "B";
    } else if (number == 12) {
      number = "C";
    } else if (number == 13) {
      number = "D";
    } else if (number == 14) {
      number = "E";
    } else if (number == 15) {
      number = "F";
    }
  }
  return number;
}

function backgroundColorPicker() {
  let colorPicker = document.getElementById("colorpicker2");
  colorPicker.addEventListener(
    "input",
    () => {
      updateBackground(colorPicker.value);
    },
    false
  );
}

function updateBackground(color) {
  let cells = document.querySelectorAll(".column");

  cells.forEach((cell) => {
    if (!cell.classList.contains("colored")) {
      cell.style.backgroundColor = color;
    }
  });
}

function setUpSlider() {
  let slider = document.getElementById("dimensions");
  let value = document.getElementById("sliderValue");
  let sliderValue = slider.value;
  value.textContent = sliderValue + " x " + sliderValue;
  createSketchPad(sliderValue);

  slider.addEventListener("input", () => {
    let value = document.getElementById("sliderValue");
    let sliderValue = slider.value;
    value.textContent = sliderValue + " x " + sliderValue;
  });

  slider.addEventListener("change", () => {
    let value = document.getElementById("sliderValue");
    let sliderValue = slider.value;
    let cells = document.querySelectorAll(".column");
    cells.forEach((cell) => {
      let sketchPad = document.querySelector(".sketch-pad");
      console.log(sketchPad);
      sketchPad.textContent = "";
    });
    createSketchPad(sliderValue);
  });
}

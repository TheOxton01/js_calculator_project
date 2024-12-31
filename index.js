const buttons = document.querySelectorAll(".button");
const numberBar = document.querySelector("#numberBar");

let primaryFloat = null;
let currentOperator;
let displayedFloat = "0";
let calculationPreviouslyOccured = false;

function updateCurrentNumb(newValue) {
  if (calculationPreviouslyOccured === true) { // Allow for operator chaining by clearing the display float
    displayedFloat = "" + newValue;
    numberBar.textContent = displayedFloat;
  } else {
    const pattern = /\./; 
    if (pattern.test(displayedFloat) === false && newValue === "."){ // Allows for only one floating point dot.
        displayedFloat += newValue;
        numberBar.textContent = displayedFloat;
      } else if (displayedFloat === "0") { // Remove 0 as first input
        displayedFloat = "";
        displayedFloat += newValue;
        numberBar.textContent = displayedFloat;
      } else if (newValue != "."){ // If displayedFloat is not just 0 add the new value
        displayedFloat += newValue;
        numberBar.textContent = displayedFloat;
    }}}

function isCalculationNeeded() {
  if (primaryFloat === null) {
    primaryFloat = displayedFloat;
    displayedFloat = "0";
    numberBar.textContent = "0";
  } else {
    calculation();
  }}

function calculation() {
  if (currentOperator === "division") {
    let result = parseFloat(primaryFloat) / parseFloat(displayedFloat);
    calculationPayload(result);
  } else if (currentOperator === "multiplication") {
    let result = parseFloat(primaryFloat) * parseFloat(displayedFloat);
    calculationPayload(result);
  } else if (currentOperator === "addition") {
    let result = parseFloat(primaryFloat) + parseFloat(displayedFloat);
    calculationPayload(result);
  } else if (currentOperator === "subtraction") {
    let result = parseFloat(primaryFloat) - parseFloat(displayedFloat);
    calculationPayload(result);
  }}

function calculationPayload(value) {
  displayedFloat = `${value}`;
  numberBar.textContent = `${value}`;
  primaryFloat = `${value}`;
  calculationPreviouslyOccured = true;
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "clearBtn":
        displayedFloat = "0";
        primaryFloat = "0";
        numberBar.textContent = "0";
        primaryFloat = null;
        calculationPreviouslyOccured = false;
        break;

      case "divideBtn":
        currentOperator = "division";
        isCalculationNeeded();
        break;

      case "numb7":
        updateCurrentNumb("7");
        break;

      case "numb8":
        updateCurrentNumb("8");
        break;

      case "numb9":
        updateCurrentNumb("9");
        break;

      case "multiplyBtn":
        currentOperator = "multiplication";
        isCalculationNeeded();
        break;

      case "numb4":
        updateCurrentNumb("4");
        break;

      case "numb5":
        updateCurrentNumb("5");
        break;

      case "numb6":
        updateCurrentNumb("6");
        break;

      case "subtractBtn":
        currentOperator = "subtraction";
        isCalculationNeeded();
        break;

      case "numb1":
        updateCurrentNumb("1");
        break;

      case "numb2":
        updateCurrentNumb("2");
        break;

      case "numb3":
        updateCurrentNumb("3");
        break;

      case "addBtn":
        currentOperator = "addition";
        isCalculationNeeded();
        break;

      case "numb0":
        updateCurrentNumb("0");
        break;

      case "floatPointBtn":
        updateCurrentNumb(".")
        break;

      case "equalsBtn":
        calculation();
        primaryFloat = null;
        calculationPreviouslyOccured = false;
        break;
    }})});

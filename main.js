const buttons = document.querySelectorAll("button");
const display = document.querySelector(".screen");

// Eventlistener for click
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// Function for calculating
function calculate(event) {
  const clickedBtnValue = event.target.value;

  if (clickedBtnValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }

    //Reset button - set value null
  } else if (clickedBtnValue === "C") {
    display.value = null;
  } else {
    display.value += clickedBtnValue;
  }
}

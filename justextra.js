// Initialize variables
let userInput = "";

// Update the display on the screen
function updateDisplay() {
  const display = document.getElementById("input-display");
  display.textContent = userInput.padEnd(4, "_").split("").join(" ");
}

// Add a digit to the input
function addDigit(digit) {
  if (userInput.length < 4) {
    userInput += digit;
    updateDisplay();
  }
}

// Remove the last digit
function backspace() {
  userInput = userInput.slice(0, -1);
  updateDisplay();
}

// Clear the input
function clearInput() {
  userInput = "";
  updateDisplay();
}

// Submit the input and handle logic
function submitInput() {
  if (userInput.length === 4) {
    const gameStatus = document.getElementById("game-status");
    gameStatus.textContent = `You entered: ${userInput}`;
    clearInput();
  } else {
    alert("Please enter a 4-digit number before pressing Enter.");
  }
}

// Initialize the display when the page loads
updateDisplay();

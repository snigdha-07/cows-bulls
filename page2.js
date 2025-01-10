let userInput = ""; // Initialize user input
const secretNumber = "1234"; // Example secret number (can be dynamic)

// Update the input display
function updateDisplay() {
  const display = document.getElementById("input-display");
  display.textContent = userInput.padEnd(4, "_").split("").join(" "); // Displays digits with spaces
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

// Placeholder logic for bulls and cows
function calculateBullsAndCows(guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(guess[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

// Submit the input
function submitInput() {
  if (userInput.length === 4) {
    const gameLog = document.getElementById("game-log");

    // Calculate bulls and cows
    const { bulls, cows } = calculateBullsAndCows(userInput);

    // Append the new result to the game log
    const resultEntry = document.createElement("div");
    resultEntry.classList.add("result-entry", "mb-2");
    resultEntry.innerHTML = `
      <strong>Input:</strong> ${userInput.split("").join(" ")} 
      <span class="ms-3"><strong>Bulls:</strong> ${bulls}</span> 
      <span class="ms-3"><strong>Cows:</strong> ${cows}</span>
    `;
    gameLog.appendChild(resultEntry);

    // Scroll to the bottom of the results section
    gameLog.scrollTop = gameLog.scrollHeight;

    // Reset input for the next round
    clearInput();
  } else {
    alert("Please enter a 4-digit number before pressing Enter.");
  }
}

// Initialize the display when the page loads
updateDisplay();

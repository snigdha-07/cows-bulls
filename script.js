
// References to elements
const editNameButton = document.getElementById("editNameButton");
const namePopup = document.getElementById("namePopup");
const nameDisplay = document.getElementById("nameDisplay");
const displayName = document.getElementById("displayName");
const saveNameButton = document.getElementById("saveNameButton");
const closePopupButton = document.getElementById("closePopupButton");

// Load saved name from local storage (if it exists) and display it
window.onload = function () {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
        displayName.textContent = `Welcome, ${savedName}`; // Display the saved name
    } else {
        displayName.textContent = "Welcome, Guest";
    }
};

// Show the popup
editNameButton.addEventListener("click", () => {
    const currentName = localStorage.getItem("userName") || "";
    nameDisplay.value = currentName; // Populate input with current name
    namePopup.style.display = "flex";
});

// Save the name to localStorage and update the display name only
saveNameButton.addEventListener("click", () => {
    const newName = nameDisplay.value.trim();
    if (newName) {
        localStorage.setItem("userName", newName);
        displayName.textContent = `Welcome, ${newName}`; // Update only the display name
    }
    namePopup.style.display = "none"; // Close the popup
});

// Close the popup without saving
closePopupButton.addEventListener("click", () => {
    namePopup.style.display = "none";
});

// Function to add a letter to the name
function addLetter(letter) {
    nameDisplay.value += letter;
}

// Function to delete the last letter
function deleteLast() {
    nameDisplay.value = nameDisplay.value.slice(0, -1);
}

// Function to clear the input
function clearInput() {
    nameDisplay.value = '';
}

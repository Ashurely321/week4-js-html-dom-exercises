// Proof of life: script is connected
console.log("hello world");

// Global state object to hold form data
const state = {};
console.table(state); // Proof of life 1: empty state

// Factory function to create a pet owner object
function createPetOwner(data) {
  return {
    ...data, // spread all properties from state
    status: function () {
      // Method to print pet owner details
      console.log(
        `Owner: ${this.name}, Pet: ${this.petName} (${this.petType}), Location: ${this.city}, ${this.zip}`
      );
    },
  };
}

// Function to capture form data and populate state
function saveForm() {
  console.log("button clicked!"); // Proof of life 2: button is hooked up

  // Capture each input value from the form
  const name = document.getElementById("ownerName").value;
  console.log("Name:", name); // Proof of life: name captured

  const email = document.getElementById("email").value;
  console.log("Email:", email);

  const phone = document.getElementById("phone").value;
  console.log("Phone:", phone);

  const city = document.getElementById("city").value;
  console.log("City:", city);

  const zip = document.getElementById("zip").value;
  console.log("Zip:", zip);

  const petName = document.getElementById("petName").value;
  console.log("Pet Name:", petName);

  const petType = document.getElementById("petType").value;
  console.log("Pet Type:", petType);

  // Proof of life 2: set a breakpoint here to inspect variables in DevTools

  // Populate the state object with captured values
  state.name = name;
  state.email = email;
  state.phone = phone;
  state.city = city;
  state.zip = zip;
  state.petName = petName;
  state.petType = petType;

  // Final proof of life: log full state
  console.table(state);

  // Create a pet owner object using the factory function
  const petOwner = createPetOwner(state);

  // Call the status method to log pet owner details
  petOwner.status();
}

// Event listener setup: wait for DOM to load before binding button
document.addEventListener("DOMContentLoaded", function () {
  // Connect the button to trigger saveForm when clicked
  document.getElementById("signUpBtn").addEventListener("click", saveForm);
});

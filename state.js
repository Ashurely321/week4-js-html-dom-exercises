console.log("Hello from state.js"); // Proof of life

// Global state object
const state = {
  name: "",
  email: "",
  phone: "",
  city: "",
  zip: "",
  petName: "",
  petType: "",
  pets: []
};

// Optional: load from localStorage if needed later
state.name = localStorage.getItem("name") || "";
state.email = localStorage.getItem("email") || "";
state.zip = localStorage.getItem("zip") || "";
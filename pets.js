// Proof of Life
console.log("Hello from pets.js!");

// Global state object to store pets
const state = {
  pets: [],
};

// Create a test pet to verify shared function
const testPet = createPet("Hello", 2, "Dog");
testPet.status();
console.log(testPet.html()); //Day4 : Proof of life: HTML output

//Function to render all pets as HTML
function renderPets() {
  let htmlOutput = "";

  for (const pet of state.pets) {
    const petHTML = pet.html();
    console.log("Pet HTML:", petHTML); //Day 4: proof of life
    htmlOutput += petHTML;
  }

  console.log("All Pets HTML:", htmlOutput); //Proof of life
  return htmlOutput;
}

//Event listener for form button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("createPetBtn");

  btn.addEventListener("click", () => {
    const name = document.getElementById("petName").value;
    const age = parseInt(document.getElementById("petAge").value);
    const species = document.getElementById("petSpecies").value;

    console.log("Form values:", { name, age, species });

    const newPet = createPet(name, age, species);
    state.pets.push(newPet);

    newPet.status();
    console.table(
      state.pets.map((pet) => ({
        Name: pet.name,
        Age: pet.age,
        Species: pet.species,
        Energy: pet.energy,
        Happiness: pet.happiness,
      }))
    );

    //Day 4: Render pets to the page
    const petsHTML = renderPets();
    console.log("Render HTML:", petsHTML); //Proof of life

    const container = document.getElementById("petsContainer");
    container.innerHTML = petsHTML;
  });
});

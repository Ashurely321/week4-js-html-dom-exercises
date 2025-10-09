//Proof of Life!
console.log("Hello from petCreator.js!");

//Factory function to create pet objects
function createPet(name, age, species) {
  const energy = 50;
  const happiness = 50;

  return {
    name,
    age,
    species,
    energy,
    happiness,

    status() {
      console.log(
        `${this.name} the ${this.species} | Age: ${this.age} | Energy: ${this.energy} | Happiness: ${this.happiness}`
      );
    },

    feed() {
      this.energy += 10;
      if (this.energy > 100) this.energy = 100;
    },

    play() {
      if (this.energy >= 10) {
        this.energy -= 10;
        this.happiness += 5;
        if (this.happiness > 100) this.happiness = 100;
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
    },
  };
}

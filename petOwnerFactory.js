// factory function to create a petOwner object

export function createPetOwner(name, city, petName, petType) {
  console.log("Factory called with:", name, city, petName, petType); // proof of life

  return {
    name,
    city,
    petName,
    petType,

    //Method: status
    status() {
      console.table({
        Owner: this.name,
        City: this.city,
        Pet: this.petName,
        Type: this.petType,
      });
    },

    // Method: render
    render() {
      console.log("Rendering petOwner to DOM"); // proof of life
      document.getElementById("outputownerName").textContent = this.name;
      document.getElementById("outputownerCity").textContent = this.city;
      document.getElementById("outputpetName").textContent = this.petName;
      document.getElementById("outputpetType").textContent = this.petType;
    },
  };
}

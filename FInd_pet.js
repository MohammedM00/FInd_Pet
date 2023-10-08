// dog data
const allDogs = [
  {
    dogName: "Abby",
    breed: "Shar-Pei",
    age: 7
  },
  {
    dogName: "Akino",
    breed: "Husky",
    age: 5
  },
  {
    dogName: "Baxter",
    breed: "Mixed Breed",
    age: 1
  },
  {
    dogName: "Bella",
    breed: "Beagle",
    age: 2
  },
  {
    dogName: "Bentley",
    breed: "Golden Retriever",
    age: 3
  },
  {
    dogName: "Charlie",
    breed: "Labrador Retriever",
    age: 4
  },
  {
    dogName: "Cooper",
    breed: "German Shepherd",
    age: 5
  },
  {
    dogName: "Daisy",
    breed: "Border Collie",
    age: 6
  },
  {
    dogName: "Duke",
    breed: "Pit Bull Terrier",
    age: 7
  },
  {
    dogName: "Ellie",
    breed: "Poodle",
    age: 8
  }
];

// Function to find and display older dogs using forEach
function findDogs() {
  // Get the minimum age entered by the user
  const minAge = parseInt(document.getElementById("minAge").value);

  // Create a new array to store selected dog objects
  const selectedDogs = [];

  // Use forEach to find dogs older than minAge and add them to selectedDogs
  allDogs.forEach(dog => {
    if (dog.age > minAge) {
      selectedDogs.push(dog);
    }
  });

  // Display the list of selected dogs on the web page
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (selectedDogs.length === 0) {
    resultElement.textContent = "No dogs found older than the specified age.";
  } else {
    selectedDogs.forEach(dog => {
      const dogInfo = `${dog.dogName} (${dog.breed}) is ${dog.age} years old.`;
      const listItem = document.createElement("p");
      listItem.textContent = dogInfo;
      resultElement.appendChild(listItem);
    });
  }
}

// Attach the findDogs function to the button click event
const findButton = document.getElementById("findButton");
findButton.addEventListener("click", findDogs);
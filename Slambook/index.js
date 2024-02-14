let form;
let allSlamArray = [];
//Write code below to select the form element

form = document.querySelector(".form");
// Write your code above
console.log(form, "form");

// Add the evenlistner below
const dataArray = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("I am inside submit");

  const formData = new FormData(form);

  for (const [name, value] of formData) {
    allSlamArray.push({ name, value });
  }
  console.log(allSlamArray);
  if (allSlamArray.length >= 11) {
    allSlamArray.splice(0, 10);
  }
  form.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
});
//Write your code above

function showSlamList() {
  //Update the function here
 
  // Write your code above this line
  showSlamList();
}



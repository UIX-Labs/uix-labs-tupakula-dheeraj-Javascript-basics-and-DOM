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

 
    const contactName = form.querySelector('input[name="contactName"]');
    const relationship = form.querySelector('input[name="relationship"]');
    const likeInMe = form.querySelector('input[name="likeInMe"]');
    const hateInMe = form.querySelector('input[name="hateInMe"]');
    const deadReaction = form.querySelector('input[name="deadReaction"]');
    const firstImpression = form.querySelector('input[name="firstImpression"]');
    const beautifulMessage = form.querySelector('input[name="beautifulMessage"]');
    const nickname = form.querySelector('input[name="nickname"]');
    const songForMe = form.querySelector('input[name="songForMe"]');
    const shareOpinion = form.querySelector('input[name="shareOpinion"]');

    // Validate inputs
    validateInput(contactName);
    validateInput(relationship);
    validateInput(likeInMe);
    validateInput(hateInMe);
    validateInput(deadReaction);
    validateInput(firstImpression);
    validateInput(beautifulMessage);
    validateInput(nickname);
    validateInput(songForMe);
    validateInput(shareOpinion);
    
    allSlamArray.splice(0, allSlamArray.length);

    // Store the data in allSlamArray
    const formValues = {};
    formValues.contactName = contactName.value;
    formValues.relationship = relationship.value;
    formValues.likeInMe = likeInMe.value;
    formValues.hateInMe = hateInMe.value;
    formValues.deadReaction = deadReaction.value;
    formValues.firstImpression = firstImpression.value;
    formValues.beautifulMessage = beautifulMessage.value;
    formValues.nickname = nickname.value;
    formValues.songForMe = songForMe.value;
    formValues.shareOpinion = shareOpinion.value;

    if((contactName,relationship,likeInMe, hateInMe ,deadReaction, firstImpression, beautifulMessage, nickname, shareOpinion, songForMe).value !== "") {
    allSlamArray.push(formValues);
    console.log(allSlamArray);
    showSlamList();
  }
   
  });

  

  function validateInput(input) {
    if (input.value.trim() === "") {
      input.style.borderBottom = "2px solid red";
      const errorMessage = document.createElement("span");
      errorMessage.textContent = "Error: The text is required";
      input.after(errorMessage);
      setTimeout(() => {
        errorMessage.textContent = "";
      },5000);
      return false;
    }
    return true;
  }
//Write your code above

function showSlamList() {
  //Update the function here
  const allSlams = document.querySelector('.allSlams');
   allSlamArray.forEach((item) => {
     // Create a new element for each item
     const element = document.createElement("div");
    element.classList = "card";

     element.innerHTML = `
      <p>My name in your contact is <span class="answer">${item.contactName}</span></p>

<p>Relationship between us is <span class="answer">${item.relationship}</span></p>

<p>Something you like in me is <span class="answer">${item.likeInMe}</span></p>

<p>Something you hate in me is <span class="answer">${item.hateInMe}</span></p>

<p>If I die what would be your reaction?</p>

<p><span class="answer">${item.deadReaction}</span></p>

<p>What did you feel when you first saw me?</p>

<p><span class="answer">${item.firstImpression}</span></p>

<p>A beautiful message for me?</p>

<p><span class="answer">${item.beautifulMessage}</span></p>

<p>A nickname for me is <span class="answer">${item.nickname}</span></p>

<p>A song you want to dedicate to me is <span class="answer">${item.songForMe}</span></p>

<p>Can I share your opinion in my status?</p>

<p><span class="answer">${item.shareOpinion}</span></p>
      <hr>
    `;

     allSlams.appendChild(element);
   });
  // Write your code above this line
 
}



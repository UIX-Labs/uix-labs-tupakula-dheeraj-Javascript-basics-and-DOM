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

const entry = {};
entry[contactName] = contactName.value;
entry[relationship] = relationship.value;
entry[likeInMe] = likeInMe.value;
entry[hateInMe] = hateInMe.value;
entry[deadReaction] = deadReaction.value;
entry[firstImpression] = firstImpression.value;
entry[beautifulMessage] = beautifulMessage.value;
entry[nickname] = nickname.value;
entry[songForMe] = songForMe.value;
entry[shareOpinion] = shareOpinion.value;

allSlamArray.splice(0, allSlamArray.length);

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


allSlamArray.push(entry);


  function validateInput(input) {
    if(input.value.length === "") {
        input.style.borderBottom = "2px solid red";
        const errorMessage = document.createElement('span');
        errorMessage.innerText = "*Error: This is required.";
        input.after(errorMessage);
        
        return false;
    }
    return true;
  }
  console.log(allSlamArray);
});
//Write your code above

function showSlamList() {
  //Update the function here
  
  // Write your code above this line
}
  showSlamList();



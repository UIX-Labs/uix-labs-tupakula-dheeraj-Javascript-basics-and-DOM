const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Write the code for 1st task below


//Write your code above
const catName = cat['name'];

cat.greeting();

cat.color = "black";



//Write your 2nd task below this



//Write your code above

const myFavoriteBand = {
  name: "Rockstars",
  nationality: "India",
  genre: " Rock, Electronic",
  members: 4,
  formed: 2023,
  split: false,
  albums: [
    { name: "Vellake", released: 2023 },
    { name: "Husn", released: 2023 },
  ],
};

const date = new Date();
const yearsActive = date.getFullYear() - myFavoriteBand.formed;

const bandInfo = `${myFavoriteBand.name} is a ${myFavoriteBand.genre} band from ${myFavoriteBand.nationality}. Formed in ${myFavoriteBand.formed}, they have been active for ${yearsActive} years. Their first album, "${myFavoriteBand.albums[0].name}", was released in ${myFavoriteBand.albums[0].released}.`;
console.log(bandInfo);
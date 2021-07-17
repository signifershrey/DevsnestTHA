const input = document.querySelector("input");
const searchBtn = document.querySelector(".btn");
const displayArea = document.querySelector(".results");
// console.log(displayArea);

searchBtn.addEventListener("click", fetchImage);

function fetchImage() {
  let query = input.value;
  //   displayArea.innerHTML = " ";
  fetch(`https://dog.ceo/api/breed/${query}/images/random/8`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.message);
      showResponse(data);
    });
}


function showResponse(data) {
  // console.log(data.message);

  if (data.status == "success") {
    data.message.forEach((dog) => {
      console.log(dog);
      let dogDiv = document.createElement(`div`);
      // console.log(dogDiv);
      dogDiv.className = "doggo";
      dogDiv.innerHTML = `<img src=${dog}>`;
      displayArea.append(dogDiv);
    });
  } else {
    const notFound = document.createElement(`div`);
    notFound.innerText = "dog not found";
    notFound.className = "notFound";
    displayArea.innerHTML = "";
    displayArea.append(notFound);
  }
}

fetchImage();

// const result = document.querySelector(".cats");
// const btn = document.querySelector('button')

// async function getCats() {

//   const res = await fetch("https://api.thecatapi.com/v1/images/search");

//   const image = res.url;

// }

// getCats();

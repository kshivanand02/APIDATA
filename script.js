const gallery = document.getElementById("dogGallery");
const refreshBtn = document.getElementById("refreshBtn");
const breedInput = document.getElementById("breedInput");

let allDogs = [];

async function fetchDogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();
  allDogs = data.message;
  displayDogs(allDogs);
}

function displayDogs(dogs) {
  gallery.innerHTML = "";
  dogs.slice(0, 10).forEach((dogUrl) => {
    const img = document.createElement("img");
    img.src = dogUrl;
    gallery.appendChild(img);
  });
}

refreshBtn.addEventListener("click", fetchDogs);

breedInput.addEventListener("input", () => {
  const filter = breedInput.value.toLowerCase();
  const filteredDogs = allDogs.filter((url) =>
    url.toLowerCase().includes(filter)
  );
  displayDogs(filteredDogs);
});

fetchDogs();

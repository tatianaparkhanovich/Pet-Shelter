import petsData from "./database.js";
const mobmenu = document.querySelector(".mob-menu");
const dropdown = document.getElementById("myDropdown");
const body = document.querySelector("body");
export const pets = document.querySelector(".pets");
export const carousel = document.querySelector(".carousel");
const mypopup = document.getElementById("mypopup");

//Cards render
const createCard = (imgUrl, petName) => {
  return `<div class=" mypets">
                <img src="${imgUrl}" alt="" />
                <h3>${petName}</h3>
                <button class="popup-btn">Learn more</button>
            </div>`;
};
export const addCards = (parent, from, capacity) => {
  for (let i = 0; i < capacity; i++) {
    const currentIndex = (from + i) % petsData.length;
    let item = petsData[currentIndex];
    const card = createCard(item.img, item.name);
    parent.innerHTML += card;
  }
};

// Mobile menu
mobmenu.addEventListener("click", (event) => {
  if (dropdown.style.opacity === "0" || dropdown.style.opacity === "") {
    dropdown.style.opacity = "1";
    dropdown.style.visibility = "visible";
    body.style.position = "fixed";
    mobmenu.style.transform = "rotate(90deg)";
  } else {
    dropdown.style.opacity = "0";
    dropdown.style.visibility = "hidden";
    body.style.position = "static";
    mobmenu.style.transform = "rotate(0deg)";
  }
});

window.addEventListener("click", (event) => {
  if (event.target.matches(".dropdown")) {
    dropdown.style.opacity = "0";
    dropdown.style.visibility = "hidden";
    body.style.position = "static";
    mobmenu.style.transform = "rotate(0deg)";
  }
});

// Modal window
export const creatModal = (
  petImg,
  petName,
  petType,
  petBreed,
  petDescription,
  petAge,
  inoculations,
  diseases,
  parasites
) => {
  return `<div class="popup-content">
        <button class="close">
            <img src="./images/modal_close_button.svg" alt="" />
        </button>
        <div class="wrapper-popup">
            <div class="left-pets">
            <img src="${petImg}" alt="" />
            </div>
            <div class="text-pets">
            <h3>${petName}</h3>
            <h4>${petType} - ${petBreed}</h4>
            <p class="p">${petDescription}</p>
            <p><b>Age:</b> ${petAge}</p>
            <p><b>Inoculations:</b> ${inoculations.join(", ")}</p>
            <p><b>Diseases:</b> ${diseases.join(", ")}</p>
            <p><b>Parasites:</b> ${parasites.join(", ")}</p>
            </div>
        </div>
        </div>`;
};

//  carousel
export const deleteСards = () => {
  const mypets = document.querySelectorAll(".mypets");
  mypets.forEach((item) => {
    item.remove();
  });
};

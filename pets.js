import petsData from "./database.js";
import { pets, addCards, creatModal } from "./app.js";

if (pets) {
  addCards(pets, pets.dataset.start, pets.dataset.capacity);
}

const popupBtns = document.querySelectorAll(".popup-btn");
popupBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    mypopup.classList.add("visible");
    mypopup.innerHTML = "";
    mypopup.insertAdjacentHTML(
      "afterbegin",
      creatModal(
        petsData[i].img,
        petsData[i].name,
        petsData[i].type,
        petsData[i].breed,
        petsData[i].description,
        petsData[i].age,
        petsData[i].inoculations,
        petsData[i].diseases,
        petsData[i].parasites
      )
    );
    window.addEventListener("click", (e) => {
      if (e.target.matches("#mypopup") || e.target.closest(".close")) {
        mypopup.classList.remove("visible");
      }
    });
  });
});

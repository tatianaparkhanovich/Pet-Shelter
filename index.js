import petsData from "./database.js";
import { addCards, deleteСards, carousel, creatModal } from "./app.js";

const left1 = document.querySelector(".left1");
const right1 = document.querySelector(".right1");
right1.addEventListener("click", () => {
  deleteСards();
  if (carousel.dataset.start >= petsData.length) {
    carousel.setAttribute("data-start", 0);
  } else {
    carousel.setAttribute("data-start", +carousel.dataset.start + 1);
  }

  addCards(carousel, carousel.dataset.start, carousel.dataset.capacity);
});
left1.addEventListener("click", () => {
  deleteСards();
  if (carousel.dataset.start <= 0) {
    carousel.setAttribute("data-start", petsData.length - 1);
  } else {
    carousel.setAttribute("data-start", +carousel.dataset.start - 1);
  }

  addCards(carousel, carousel.dataset.start, carousel.dataset.capacity);
});
if (carousel) {
  addCards(carousel, carousel.dataset.start, carousel.dataset.capacity);
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

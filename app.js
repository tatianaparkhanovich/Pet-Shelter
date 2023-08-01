import petsData from './pets.js';

const mobmenu = document.querySelector('.mob-menu');
const dropdown = document.getElementById('myDropdown');
const body = document.querySelector('body')
const pets = document.querySelector(".pets");
const carousel = document.querySelector(".carousel");
const mypopup = document.getElementById('mypopup');

//Cards render

const createCard = (imgUrl, petName) => {
    return `<div class=" mypets">
                <img src="${imgUrl}" alt="" />
                <h3>${petName}</h3>
                <button class="popup-btn">Learn more</button>
            </div>`
}
const addCards = ((parent, count) => {
    petsData.forEach((item, i) => {
        if(count > i){
            const card = createCard(item.img, item.name);
            parent.innerHTML += card;
        }
})
})
if (carousel) {
    addCards(carousel, 3);
}
if (pets) {
    addCards(pets, 8);
}

// Mobile menu
mobmenu.addEventListener('click', (event) => {
    if (dropdown.style.opacity === '0' || dropdown.style.opacity === "") {
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        body.style.position = 'fixed';
        mobmenu.style.transform = 'rotate(90deg)';
    }  else {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        body.style.position = 'static';
        mobmenu.style.transform = 'rotate(0deg)';    
    }
})

window.addEventListener('click', (event) => {
    if (event.target.matches('.dropdown')) {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        body.style.position = 'static';
        mobmenu.style.transform = 'rotate(0deg)';    
    }
})

// Modal window
const creatModal = (petImg, petName, petType,petBreed,petDescription,petAge, inoculations, diseases,parasites) => {
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
            <p><b>Inoculations:</b> ${inoculations.join(', ')}</p>
            <p><b>Diseases:</b> ${diseases.join(', ')}</p>
            <p><b>Parasites:</b> ${parasites.join(', ')}</p>
            </div>
        </div>
        </div>`
}

const popupBtns = document.querySelectorAll('.popup-btn');
popupBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        mypopup.classList.add('visible');
        mypopup.innerHTML = '';
        mypopup.insertAdjacentHTML('afterbegin', creatModal(petsData[i].img, petsData[i].name,petsData[i].type,
        petsData[i].breed,petsData[i].description,petsData[i].age,petsData[i].inoculations,petsData[i].diseases,
        petsData[i].parasites));
        window.addEventListener('click', (e) => {
            if(e.target.matches('#mypopup') || e.target.closest('.close')) {
                mypopup.classList.remove('visible');
            }
        })
    })
})


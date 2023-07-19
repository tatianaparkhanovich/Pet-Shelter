const mobmenu = document.querySelector('.mob-menu');
const dropdown = document.getElementById('myDropdown');
const body = document.querySelector('body')
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
const profilePage = document.querySelector('.profile');
const navbarSearchMobile = document.querySelector('.navbar__items--search');
const navbarLogo = document.querySelector('.navbar__items--logo');
const inputField = document.querySelector('.input-field');

profilePage.addEventListener('click', e => {
    let target = e.target;
    let targetSibling = target.nextElementSibling;
    if(targetSibling.classList.contains('profile__dropdown--show')) {
        targetSibling.classList.remove('profile__dropdown--show')
    } else {
        targetSibling.classList.add('profile__dropdown--show');
    }
})
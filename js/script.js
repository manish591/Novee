const listingFilter = document.querySelector('.listing__filters');
const btn = document.querySelector('.listing-header__right');


btn.addEventListener('click', e => {
    listingFilter.classList.toggle('filter-list__open');
})
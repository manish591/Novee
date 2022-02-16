const listingFilter = document.querySelector('.listing__filters');
const btn = document.querySelector('.listing-header__right');


btn.addEventListener('click', e => {
    if(listingFilter.classList.contains('filter-list__open')) {
        listingFilter.classList.remove('filter-list__open')
    } else {
        listingFilter.classList.add('filter-list__open')
    }
})
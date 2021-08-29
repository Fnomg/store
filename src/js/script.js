let sortSize = document.querySelector('.sort__toggle-size')
let sortSizeToggle = sortSize.querySelector('.sort__list')

let filterList = document.querySelector('.filter')
let filterListToggle = filterList.querySelector('.filter__list')

sortSize.addEventListener('click', function (e) {
  if (e.target.className !== 'sort__input') {
    sortSizeToggle.classList.toggle('sort__list--active')
  }
})

filterList.addEventListener('click', function (e) {
  if (e.target.className !== 'filter__title' && e.target.className !== 'filter__subtitle') {
    filterListToggle.classList.toggle('filter__list--active')
  }
})
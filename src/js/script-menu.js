'use strict'

let navButton = document.querySelector('.header__menu-btn')
let navBlock = document.querySelector('.header__nav')
let opened = document.querySelector('.header__icon--opened')
let closed = document.querySelector('.header__icon--closed')

navButton.addEventListener('click', function (){
  closed.classList.toggle('visually-hidden')
  opened.classList.toggle('visually-hidden')
  navBlock.classList.toggle('visually-hidden')
})
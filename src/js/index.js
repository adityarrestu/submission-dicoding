const nav = document.getElementById('nav')
const content = document.getElementById('content')
const aside = document.getElementById('aside')
const menuToggle = document.getElementById('toggle')
const root = document.documentElement
const layout = document.querySelector('.layout')

const btnDropdown = document.getElementById('btn-dropdown')
const kategori = document.getElementById('kategori')

const btnMenu = document.getElementById('btn-menu')

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('close')
  content.classList.toggle('menu-close')
  menuToggle.classList.toggle('close')
  if (kategori.className.includes('open')) {
    kategori.classList.toggle('open')
    btnDropdown.classList.toggle('open')
  }
})

kategori.addEventListener('click', () => {
  kategori.classList.toggle('open')
  btnDropdown.classList.toggle('open')
})

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('open')
  content.classList.toggle('open-menu')
  aside.classList.toggle('open-menu')
  layout.classList.toggle('open-menu')
})

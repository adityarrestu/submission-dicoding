const nav = document.getElementById('nav')
const content = document.getElementById('content')
const menuToggle = document.getElementById('toggle')
const root = document.documentElement

const btnDropdown = document.getElementById('btn-dropdown')
const kategori = document.getElementById('kategori')

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('close')
  content.classList.toggle('menu-close')
  menuToggle.classList.toggle('close')
})

kategori.addEventListener('click', () => {
  kategori.classList.toggle('open')
  btnDropdown.classList.toggle('open')
})

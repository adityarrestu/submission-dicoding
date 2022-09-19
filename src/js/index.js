const nav = document.getElementById('nav')
const content = document.getElementById('content')
const menuToggle = document.getElementById('toggle')
const root = document.documentElement

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('close')
  content.classList.toggle('menu-close')
  menuToggle.classList.toggle('close')
})

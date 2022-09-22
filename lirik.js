const darkMode = document.querySelector('.btn-dark')
const body = document.querySelector('body')
const iconMode = document.querySelector('#icon-mode')
const tooltip = document.querySelector('.tooltip')
const btnKategori = document.querySelector('#kategori')

darkMode.addEventListener('click', () => {
  iconMode.classList.toggle('fa-sun')
  iconMode.classList.toggle('fa-moon')
  body.classList.toggle('dark-mode')

  tooltip.innerText === 'Dark Mode' ?  
    tooltip.innerText = 'Light Mode' :  
    tooltip.innerText = 'Dark Mode'
})

btnKategori.addEventListener('click', () => {
  btnKategori.classList.toggle('open')
})

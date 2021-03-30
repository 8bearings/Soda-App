// main.js
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
  fetch('/sodas',{
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        brand: 'COKE',
        flavor: 'VANILLA'
      })
  })
})
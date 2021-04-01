// main.js
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
  fetch('/sodas',{
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        brand: 'Coke',
        flavor: 'VANILLA'
      })
  })
})

const deleteButton = document.querySelector('#delete-button')

      deleteButton.addEventListener('click', _ => {
        fetch('/sodas', {
          method: 'delete',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
          brand: 'Coke'
          
          })
        })
          .then(response => {
            if (response.ok) return response.json()
          })
          .then(data => {
            window.location.reload()
          })
      })

      yu
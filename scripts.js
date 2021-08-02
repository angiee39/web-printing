
const next1 = document.getElementById("next1")
next1.addEventListener('click', (e) => {
  document.getElementById('dropbox').classList.add('hide')
  document.getElementById('options').classList.remove('hide')
  console.log(e.type)
})

const back2 = document.getElementById("back2")
back2.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('dropbox').classList.remove('hide')
  document.getElementById('options').classList.add('hide')
  console.log(e.type)
})
const next2 = document.getElementById("next2")
next2.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('options').classList.add('hide')
  document.getElementById('delivery').classList.remove('hide')
  console.log(e.type)
})

const back3 = document.getElementById("back3")
back3.addEventListener('click', (e) => {
  document.getElementById('delivery').classList.add('hide')
  document.getElementById('options').classList.remove('hide')
  console.log(e.type)
})
const next3 = document.getElementById("next3")
next3.addEventListener('click', (e) => {
  document.getElementById('delivery').classList.add('hide')
  document.getElementById('payment').classList.remove('hide')
  console.log(e.type)
})

const next4 = document.getElementById("next4")
next4.addEventListener('click', (e) => {
  document.getElementById('payment').classList.add('hide')
  document.getElementById('success').classList.remove('hide')
  console.log(e.type)
})
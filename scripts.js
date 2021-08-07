// import axios from 'axios'

// const baseURL = 'http://localhost:3001/items'

// const getItems = () =>{
//   const req = axios.get(baseURL)
//   return req.then(res => {
//     return res.data
//   })
// }

// const createItem = (newItem) => {
//   const req = axios.post(baseURL, newItem)
//   return req.then(res => res.data)
// }

// const removeItem = (id) => {
//   const req = axios.delete(`${baseUrl}/${id}`)
//   return req.then(res => res.data)
// }

let customerInfo = [
  {deliver: false},
  {uname: ''},
  {address: ''},
  {contact: ''},
  {city: ''}
]

const deliveryCharges = {
  "borelasgamuwa": 100,
  "nugegoda": 150,
  "borella": 200
}

const itemCost = 100

let items = [
  "workout", "receipt" 
] 

/** PAGE 1 - UPLOAD PRINT FILES **/
// render list
const renderList = () => {
  const displayItems = document.getElementById('list')
  displayItems.innerHTML = ""
  items.forEach(item => {
    const listItem = document.createElement('li')
    listItem.innerText += item
    // const deleteBtn = document.createElement('button')
    // deleteBtn.innerText = 'x'
    // listItem.appendChild(deleteBtn)
    displayItems.appendChild(listItem)
  })
}
renderList()

//  upload files
const addFile = document.getElementById("addfile")
addFile.addEventListener('click', (e) => {
  const input = document.querySelector('input[type="file"]');
  const file = input.files[0] ? input.files[0].name : null
  if (!file) return
  items.push(`${file}`)
  console.log(items)
  renderList()
})

const next1 = document.getElementById("next1")
next1.addEventListener('click', (e) => {
  document.getElementById('dropbox').classList.add('hide')
  document.getElementById('options').classList.remove('hide')
});



/** PAGE 2 - DELIVERY INFO **/
document.getElementById('pickup').addEventListener('click', (e) => {
  document.querySelector('input[id="address"]').setAttribute('disabled', 'true')
  document.querySelector('select[id="city"]').setAttribute('disabled', 'true')
})
document.getElementById('deliver').addEventListener('click', (e) => {
  document.querySelector('input[id="address"]').removeAttribute('disabled')
  document.querySelector('select[id="city"]').removeAttribute('disabled')
})

const back2 = document.getElementById("back2")
back2.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('dropbox').classList.remove('hide')
  document.getElementById('options').classList.add('hide')
})
const next2 = document.getElementById("next2")
next2.addEventListener('click', (e) => {
  e.preventDefault()

  customerInfo.deliver = document.querySelector('input[name="delivery-method"]:checked').value === "deliver" ? true : false 
  customerInfo.uname = document.getElementById('uname') ? document.getElementById('uname').value : ''
  customerInfo.address = document.getElementById('address') ? document.getElementById('address').value : ''
  customerInfo.contact = document.getElementById('contact') ? document.getElementById('contact').value : ''
  customerInfo.city = document.getElementById('city') ? document.getElementById('city').value : ''

  document.getElementById('options').classList.add('hide')
  document.getElementById('cost-page').classList.remove('hide')

  document.getElementById('item-cost').textContent = `Rs.${itemCost}`
  if (customerInfo.deliver === false) {
    document.getElementById('delivery-cost').textContent = "none"
    document.getElementById('total-cost').textContent = `Rs.${itemCost}`
  } else {
    document.getElementById('delivery-cost').textContent = `Rs.${deliveryCharges[customerInfo.city]}`
    document.getElementById('total-cost').textContent = `Rs.${itemCost + deliveryCharges[customerInfo.city]}`
  }
  console.log(customerInfo.deliver, customerInfo.uname, customerInfo.address, customerInfo.contact, customerInfo.city)
})



/** PAGE 3 - COST DETAILS **/

const back3 = document.getElementById("back3")
back3.addEventListener('click', (e) => {
  document.getElementById('cost-page').classList.add('hide')
  document.getElementById('options').classList.remove('hide')
})
const next3 = document.getElementById("next3")
next3.addEventListener('click', (e) => {
  document.getElementById('cost-page').classList.add('hide')
  document.getElementById('payment').classList.remove('hide')
})



// PAGE 4
const back4 = document.getElementById("back4")
back4.addEventListener('click', (e) => {
  document.getElementById('payment').classList.add('hide')
  document.getElementById('cost-page').classList.remove('hide')
})
const next4 = document.getElementById("next4")
next4.addEventListener('click', (e) => {
  document.getElementById('payment').classList.add('hide')
  document.getElementById('success').classList.remove('hide')
})
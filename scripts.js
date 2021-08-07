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

/******
GLOBALS
******/
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

let printList = [
  "workout", "receipt" 
] 

/**************************
PAGE 1 - UPLOAD PRINT FILES 
**************************/
// render list
const renderList = () => {
  const displayItems = document.getElementById('list')
  displayItems.innerHTML = ""
  printList.forEach(item => {
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
  printList.push(`${file}`)
  // console.log(printList)
  renderList()
})

const next1 = document.getElementById("next1")
next1.addEventListener('click', (e) => {
  document.getElementById('dropbox').classList.add('hide')
  document.getElementById('options').classList.remove('hide')
});



/*********************
PAGE 2 - DELIVERY INFO 
*********************/
// delivery method
document.getElementById('pickup').addEventListener('click', (e) => {
  document.querySelector('input[id="address"]').setAttribute('disabled', 'true')
  document.querySelector('select[id="city"]').setAttribute('disabled', 'true')
})
document.getElementById('deliver').addEventListener('click', (e) => {
  document.querySelector('input[id="address"]').removeAttribute('disabled')
  document.querySelector('select[id="city"]').removeAttribute('disabled')
})

// back button
document.getElementById("back2").addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('dropbox').classList.remove('hide')
  document.getElementById('options').classList.add('hide')
})
// next button
document.getElementById("next2").addEventListener('click', (e) => {
  e.preventDefault()
  if (document.querySelector('input[name="delivery-method"]:checked').value === "pickup") {
    if (document.getElementById('uname').value === '' || document.getElementById('contact').value === '') {
      return alert('fields cannot be empty')
    }
  } else {
    if (document.getElementById('uname').value === '' || document.getElementById('address').value === ''
    || document.getElementById('contact').value === '' || document.getElementById('city').value === '') {
      return alert('fields cannot be empty')
    }
  }
  // save user input
  customerInfo.deliver = document.querySelector('input[name="delivery-method"]:checked').value === "deliver" ? true : false 
  customerInfo.uname = document.getElementById('uname').value
  customerInfo.address = document.getElementById('address').value
  customerInfo.contact = document.getElementById('contact').value
  customerInfo.city = document.getElementById('city').value

  // render cost details
  document.getElementById('customer-name').innerText = customerInfo.uname
  document.getElementById('item-cost').textContent = `Rs.${itemCost}`
  if (customerInfo.deliver === false) {
    document.getElementById('delivery-cost').textContent = "none"
    document.getElementById('total-cost').textContent = `Rs.${itemCost}`
  } else {
    document.getElementById('delivery-cost').textContent = `Rs.${deliveryCharges[customerInfo.city]}`
    document.getElementById('total-cost').textContent = `Rs.${itemCost + deliveryCharges[customerInfo.city]}`
  }
  document.getElementById('options').classList.add('hide')
  document.getElementById('cost-page').classList.remove('hide')
  console.log(customerInfo.deliver, customerInfo.uname, customerInfo.address, customerInfo.contact, customerInfo.city)
})

/******************** 
PAGE 3 - COST DETAILS 
********************/
document.getElementById("back3").addEventListener('click', (e) => {
  document.getElementById('cost-page').classList.add('hide')
  document.getElementById('options').classList.remove('hide')
})
document.getElementById("next3").addEventListener('click', (e) => {
  document.getElementById('cost-page').classList.add('hide')
  document.getElementById('payment').classList.remove('hide')
})



/*****
PAGE 4
*****/
document.getElementById("back4").addEventListener('click', (e) => {
  document.getElementById('payment').classList.add('hide')
  document.getElementById('cost-page').classList.remove('hide')
})
document.getElementById("next4").addEventListener('click', (e) => {
  document.getElementById('payment').classList.add('hide')
  document.getElementById('success').classList.remove('hide')
})
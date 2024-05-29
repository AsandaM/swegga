let priceFemale = document.querySelectorAll('td')[3]
let priceMale = document.querySelectorAll('td')[9]

let quantityFemale = document.querySelectorAll('input')[0]
let quantityMale = document.querySelectorAll('input')[1]

let buttonTotal = document.querySelector('button')
let totalFemale = document.querySelectorAll('td')[5]
let totalMale = document.querySelectorAll('td')[11]
let total = document.querySelectorAll('td')[14]

let totalAll

function calc() {
    totalFemale.innerText = (quantityFemale.value * priceFemale.innerText).toFixed(2)
    totalMale.innerText = (quantityMale.value * priceMale.innerText).toFixed(2)
    totalAll = eval(`${totalFemale.innerText} + ${totalMale.innerText}`)

    

    total.innerText = totalAll.toFixed(2)
    
}

buttonTotal.addEventListener('click', calc)

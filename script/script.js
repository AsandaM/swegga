let priceFemale = document.querySelectorAll('td')[3]
let priceMale = document.querySelectorAll('td')[9]

let quantityFemale = document.querySelectorAll('input')[0]
let quantityMale = document.querySelectorAll('input')[1]

let buttonTotal = document.querySelector('button')
let totalFemale = document.querySelectorAll('td')[5]
let totalMale = document.querySelectorAll('td')[11]
let total = document.querySelectorAll('td')[14]

// let totalAll

function calc(fQuantity, mQuantity) {
    
    let arr = [totalFemale.innerText, totalMale.innerText].join().split('R').join().split(',').reduce((total,current)=>{
        return total + +current
    },0)

    total.innerText = 'R' + arr.toFixed(2)
    
}
buttonTotal.addEventListener('click', ()=>{
    calc()
})

function FemaleTotal() {
    totalFemale.innerText = 'R ' + (quantityFemale.value * priceFemale.innerText).toFixed(2)
}
function MaleTotal() {
    totalMale.innerText = 'R ' + (quantityMale.value * priceMale.innerText).toFixed(2)
}

quantityFemale.onchange = function () {FemaleTotal()}
quantityMale.onchange = function () {MaleTotal()}

// buttonTotal.onmouseover = function(){calc()}
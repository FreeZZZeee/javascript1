"use strict";

const createCotainer = () => {

    let container = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)
}

createCotainer()

const createMainDiv = () => {
    let container = document.querySelector('.container')
    let arr = ['header', 'main', 'footer']

    for (let i = 0; i < arr.length; i++) {

        let mainDiv = document.createElement('div')
        mainDiv.classList.add(arr[i])
        container.appendChild(mainDiv)
    }
}

createMainDiv()

const createHeadDiv = () => {
    let head = document.querySelector('.header')
    let arr = ['header-up', 'header-down']

    for (let i = 0; i < arr.length; i++) {

        let headDiv = document.createElement('div')
        headDiv.classList.add(arr[i])
        head.appendChild(headDiv)
    }
}

createHeadDiv()

const createElHeadDivDown = () => {
    let headerDown = document.querySelector('.header-down')
    let headerDownElArr = ['span', 'input', 'button']
    let headerDownClassArr = ['header-down-span', 'header-down-input', 'header-down-button']

    for (let i = 0; i < headerDownElArr.length; i++) {
        let headerDownEl = document.createElement(headerDownElArr[i])
        headerDownEl.classList.add(headerDownClassArr[i])

        if (headerDownClassArr[i] === 'header-down-span') {
            headerDownEl.innerText = 'e-shop'
        } else if (headerDownClassArr[i] === 'header-down-input') {
            headerDownEl.setAttribute("type", "search")
        } else if (headerDownClassArr[i] === 'header-down-button') {
            headerDownEl.innerText = 'корзина'
        }

        headerDown.appendChild(headerDownEl)
    }

}

createElHeadDivDown()

let PRODUCTS_NAMES = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad']
let PRICES = [1000, 200, 20, 10, 25, 30, 18, 24]
let IDS = [0, 1, 2, 3, 4, 5, 6, 7]

let products = []

function createProductsDTO() {
    let length = IDS.length

    for (let i = 0; i < length; i++) {
        products.push(createProduct(i))
    }
}

createProductsDTO()

function createProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        id_product: IDS[index]
    }
}

createProduct()

const createProductMain = () => {
    let main = document.querySelector('.main')

    for(var i = 0; i < IDS.length;i++){
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('main-product')  
        let mainProductImg = document.createElement('img')
        mainProductImg.setAttribute("src", "http://placehold.it/200x150")
        mainProductImg.setAttribute("width", "200")
        mainProductImg.setAttribute("height", "150")
        let mainProductSpan = document.createElement('span')
        mainProductSpan.classList.add('main-product-title') 
        mainProductSpan.innerText = products[i].product_name
        let mainProductPrice = document.createElement('span')
        mainProductPrice.classList.add('main-product-price') 
        mainProductPrice.innerHTML = `${products[i].price} &#36;`
        let mainProductButton = document.createElement('button')
        mainProductButton.innerText = 'Купить'
        mainDiv.appendChild(mainProductImg)
        mainDiv.appendChild(mainProductSpan)
        mainDiv.appendChild(mainProductPrice)
        mainDiv.appendChild(mainProductButton)
        main.appendChild(mainDiv)


        console.log(products[i].product_name + ' ' + products[i].price);
      }
}

createProductMain()
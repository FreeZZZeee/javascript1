"use strict";

const createCotainer = () => {

let container = document.createElement ('div')
container.classList.add('container')
document.body.appendChild(container)
}

createCotainer ()

const createMainDiv = () => {  
    let container = document.querySelector ('.container')
    let arr = ['header', 'main', 'footer']

    for (let i = 0; i < arr.length; i++) {

        let mainDiv = document.createElement ('div')
        mainDiv.classList.add(arr[i])
        container.appendChild(mainDiv)              
    }    
}

createMainDiv ()

const createHeadDiv = () => {
    let head = document.querySelector ('.header')
    let arr = ['header-up', 'header-down']

    for (let i = 0; i < arr.length; i++) {

        let headDiv = document.createElement ('div')
        headDiv.classList.add (arr[i])
        head.appendChild(headDiv)
    }    
}

createHeadDiv ()

const createElHeadDivDown = () => {
    let headerDown = document.querySelector ('.header-down')    
    let headerDownElArr = ['span', 'input', 'button']
    let headerDownClassArr = ['header-down-span', 'header-down-input', 'header-down-button']

    for (let i = 0; i < headerDownElArr.length; i++) {
        let headerDownEl = document.createElement (headerDownElArr[i])
        headerDownEl.classList.add (headerDownClassArr[i])

        if (headerDownClassArr[i] === 'header-down-span') {
            headerDownEl.innerText = 'e-shop'
        } else if (headerDownClassArr[i] === 'header-down-input') {
            headerDownEl.setAttribute ("type", "search")
        } else if (headerDownClassArr[i] === 'header-down-button') {
            headerDownEl.innerText = 'корзина'
        }        

        headerDown.appendChild (headerDownEl)
    }

}

createElHeadDivDown ()
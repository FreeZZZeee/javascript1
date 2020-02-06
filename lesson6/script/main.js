let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'HeadPhones', 'Microphone']
let PRICES = [100, 120, 1000, 15, 18, 10, 20]
let IDS = [0, 1, 2, 3, 4, 5, 6]

let products = []

// function createProductsDTO (arr) {
//     arr = []
//     let length = IDS.length

//     for (let i = 0; i < length; i++) {
//         arr.push (createProduct (i))
//     }
// }

function createProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        id_product: IDS[index],
        img: 'https://placehold.it/200x150',
        createTemplate() {
            return `
                        <div class="product-item" data-id="${this.id_product}">
                            <img src="${this.img}" alt="${this.product_name}">
                            <div class="desc">
                                <h3>${this.product_name}</h3>
                                <p> ${this.price} $</p>
                                <button class="buy-btn"
                                    data-id="${this.id_product}"
                                    data-name="${this.product_name}"
                                    data-price="${this.price}">
                                    Купить
                                </button>
                            </div>
                        </div>                        
                    `
        }
    }
}

let catalog = {
    items: [],
    container: '.products',
    cartDiv: '.cart-section',
    cart: null,

    init() {
        this._fetchItems()
        this._render()
        document.querySelector(this.container).addEventListener('click', (evt) => {

            if (evt.target.classList.contains('buy-btn')) {
                let product = evt.target.dataset
                let cont = document.querySelector(this.cartDiv)

                this.items.forEach(item => {
                    if (product.name === item.product_name) {
                        let Divcart = `
                    <div class="cart" data-id="${item.id_product}">
                        <img src="${item.img}" alt="${item.product_name}">                    
                        <h3>${item.product_name}</h3>
                        <p> ${item.price} $</p>
                    </div>
                    `
                        cont.innerHTML += Divcart
                    }
                })

                console.log(`
                            Куплен ${product.name}, по цене ${+product.price}$
                        `)
                // this.items.forEach (item => {
                //     if (item.product_name === product.name)
                //     console.log(item.product_name)
                // })
            }

        })
    },
    _fetchItems() {
        let length = IDS.length

        for (let i = 0; i < length; i++) {
            this.items.push(createProduct(i))
        }
    },
    _render() {
        let container = document.querySelector(this.container)
        let domString = ''

        this.items.forEach(item => {
            domString += item.createTemplate()
        })
        container.innerHTML = domString
    }
}

catalog.init()

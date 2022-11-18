class Products {
    constructor(){
        this.classActive = ' products-element__btn_active'
        this.cardAdd = 'Добавить в корзину'
        this.cardRemove = 'Удалить из корзины'
    }

    handleSetLocationSotarage(elem, id){
        const {checkPushProducts, products} = localStorageUtil.putItem(id)
        
        if(checkPushProducts){
            elem.classList.add('products-element__btn_active')
            elem.innerHTML = this.cardRemove
        } else{
            elem.classList.remove('products-element__btn_active')
            elem.innerHTML = this.cardAdd
        }

        headerPage.render(products.length)
    }

    render(){
        const productsStore = localStorageUtil.getItem()
        let catalogList = ''


        CATALOG.map(({id, name, price, img}) => {
            let activeClass = ''
            let activeText = ''

            if(productsStore.indexOf(id) === -1){
                activeText = this.cardAdd
            } else{
                activeClass = this.classActive
                activeText = this.cardRemove
            }

            catalogList += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img src="${img}" class="products-element__img" />
                    <span class="products-element__price">♦️ ${price}₽</span>
                    <button class="products-element__btn${activeClass}" onclick = "pageProducts.handleSetLocationSotarage(this, '${id}')">
                    ${activeText}
                    </button>
                </li>
            `
        })
        const html = `
            <ul class="products-container">
                ${catalogList}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }
}
const pageProducts = new Products()
pageProducts.render()
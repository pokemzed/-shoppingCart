class Header {
    handleOpenBasketPage(){
        basketPage.render()
    }

    render(count){
        const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handleOpenBasketPage()">🧺 ${count}</div>
        </div>
        `

        ROOT_HEADER.innerHTML = html
    }
}
const headerPage = new Header

const productsStore = localStorageUtil.getItem()
headerPage.render(productsStore.length)
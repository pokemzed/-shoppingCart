class Basket {

    handleClear(){
        ROOT_BASKET.innerHTML = ''
    }

    render(){
        const productsStore = localStorageUtil.getItem()
        let htmlCatalog = ''
        let sumCatalog = 0
        
        CATALOG.map(({id, name, price}) => {
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td class="basket-element__name">${name}</td>
                        <td class="basket-element__price">♦️ ${price}</td>
                    </tr>
                `
                sumCatalog += price
            }
        })

        const html = `
        <div class="basket-container">
            <div class="basket-close" onclick="basketPage.handleClear()"></div>
            <table>
                ${htmlCatalog}
                <tr class="basket-wrap__sum">
                    <td class="basket-element__name">Сумма</td>
                    <td class="basket-element__sum">♦️ ${sumCatalog.toLocaleString()}</td>
                </tr>
            </table>
        </div>
        `

        ROOT_BASKET.innerHTML = html
    }
}
const basketPage = new Basket()
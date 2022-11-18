class LocalStorageUtil {

    constructor(){
        this.keyName = 'products'
    }

    //Добавление элементов в хранилище
    getItem(){
        const productsLocalStorage = localStorage.getItem(this.keyName)
        if(productsLocalStorage !== null){
            return JSON.parse(productsLocalStorage)
        }
        return []
    }

    //Получение элементов из хранилища
    putItem(id){
        let products = this.getItem() //массив - результат выполнения функции getItem
        let checkPushProducts = false //проверка элемента на наличие в корзине
        const index = products.indexOf(id)

        if(index === -1){
            products.push(id)
            checkPushProducts = true
        } else {
            products.splice(index,1) //удаляем элемент из массива
        }

        localStorage.setItem(this.keyName, JSON.stringify(products))
        return {checkPushProducts, products}
    }
}
const localStorageUtil = new LocalStorageUtil()
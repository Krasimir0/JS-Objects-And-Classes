function AddItemsInStore(arr, secondArr) {
    let objOfProducts = {};
    for (let i = 0; i < arr.length; i+=2) {
        let product = arr[i];
        let quantity = Number(arr[i+1]);
         if (!objOfProducts.hasOwnProperty(product)) {
           objOfProducts[product] = Number(quantity)
           continue;
        }
        objOfProducts[product] += Number(quantity)
    }
    for (let i = 0; i < secondArr.length; i+=2) {
        let product = secondArr[i];
        let quantity = Number(secondArr[i+1]);
        if (!objOfProducts.hasOwnProperty(product)) {
           objOfProducts[product] = Number(quantity)
           continue
        }
        objOfProducts[product] += Number(quantity)
    }
    for (const product in objOfProducts) {
            console.log(`${product} -> ${objOfProducts[product]}`);
    }
}

AddItemsInStore([
'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
])
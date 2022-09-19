// 1) 
    const productList = [
        {productName: 'potatoe', number: 5, isBuy: true, priseForOne: 2, totalSum: 10},
        {productName: 'wine', number: 2, isBuy: false, priseForOne: 7, totalSum: 14},
        {productName: 'chocolate', number: 3, isBuy: true, priseForOne: 4, totalSum: 12},
        {productName: 'milk', number: 1, isBuy: false, priseForOne: 5, totalSum: 5}
    ];

        // 1.1)
        function showList(array) {
            array.sort(function(a, b) {
                if (a.isBuy == true && b.isBuy == false) {
                    return 1;
                } else if (a.isBuy == false && b.isBuy == true) {
                    return -1
                } else {
                    return 0
                }
            })
            return array;
        };

        // 1.2)
        function isBought(name) {
            for (let key of productList) {
                if (key.productName == name) {
                    key.isBuy = true;
                } 
            }
            return productList;
        };

    // 2)
    function deleteProduct(name) {
        for (let key of productList) {
            if (key.productName == name) {
                productList.splice(key, 1)
            } 
        }
        return productList;
    };

    // 3)
    function addProduct(name, num, bought, prise) {
        let total = num * prise;
        const newProduct = {
            productName: name, 
            number: num, 
            isBuy: bought, 
            priseForOne: prise, 
            totalSum: total
        }
        productList.push(newProduct);
        return productList;
    };

    // 4)
    function totalCost(array) {
        let cost = 0;
        for (let key of array) {
            cost += key.number * key.priseForOne;
        }
        return `Сума всіх продуктів  = ${cost}`
    };

    // 5)
    function totalForNotBought(array) {
        let cost = 0;
        for (let key of array) {
            if (key.isBuy == false) {
                cost += key.number * key.priseForOne;
            }
        }
        return `Сума некуплених продуктів  = ${cost}`
    };

    // 6)
    function listFromRrices(array) {
        array.sort(function(a, b) {
            if (a.totalSum < b.totalSum) {
                return 1;
            } else if (a.totalSum > b.totalSum) {
                return -1
            } else {
                return 0
            }
        })
        return array;
    };

    // 1.1)
    // console.log(showList(productList))

    // 1.2)
    // console.log(isBought('wine'));

    // 2)
    // console.log(deleteProduct('potatoe'));

    // 3)
    // console.log(addProduct('apple', 8, true, 2));

    // 4)
    // console.log(totalCost(productList));

    // 5)
    //console.log(totalForNotBought(productList));

    // 6)
    // console.log(listFromRrices(productList));



    
    
    



    


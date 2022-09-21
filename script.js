//Кожну функцію потрібно визивати окремо, так як кожна змінює масив!

//Мінімум
// 1) Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
    //кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
    const productList = [
        {productName: 'potatoe', number: 5, isBuy: true, priseForOne: 2, totalSum: 10},
        {productName: 'wine', number: 2, isBuy: false, priseForOne: 7, totalSum: 14},
        {productName: 'chocolate', number: 3, isBuy: true, priseForOne: 4, totalSum: 12},
        {productName: 'milk', number: 1, isBuy: false, priseForOne: 5, totalSum: 5}
    ];

        // 1.1) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, 
        //а потім - ті, що вже придбали.
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

        // 1.2) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
        function isBought(name) {
            for (let key of productList) {
                if (key.productName == name) {
                    key.isBuy = true;
                } 
            }
            return productList;
        };

//Норма
// 2) Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, 
    // що ми шукаємо, буде відсутнім)
    function deleteProduct(name) {
        for (let key of productList) {
            if (key.productName == name) {
                productList.splice(key, 1)
            } 
        }
        return productList;
    };

// 3) Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
    //необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, 
    //наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
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

//Максимум
// 4)Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    function totalCost(array) {
        let cost = 0;
        for (let key of array) {
            cost += key.number * key.priseForOne;
        }
        return `Сума всіх продуктів  = ${cost}`
    };

// 5) Підрахунок суми всіх (не) придбаних продуктів.
    function totalForNotBought(array) {
        let cost = 0;
        for (let key of array) {
            if (key.isBuy == false) {
                cost += key.number * key.priseForOne;
            }
        }
        return `Сума некуплених продуктів  = ${cost}`
    };

// 6) Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності 
    //від параметра функції, який вона приймає)
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



    
    
    



    


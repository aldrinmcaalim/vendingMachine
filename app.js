// let coins = [500, 200, 100, 50, 20, 10];



// var Products = [
//     { name: 'Gum', cost: 400 },
//     { name: 'Ritbits', cost: 170 },
//     { name: 'Hershey bar', cost: 100 },
//     { name: 'Honeybun', cost: 50 },
//     { name: 'Cookies n Cream', cost: 100 },
//     { name: 'Honeybun', cost: 50 },
//     { name: 'Crackers', cost: 300 },
//   ]
  
//   function vendingMachine() {
//     if (arguments[2] == 0 || arguments[2] > arguments[2].length)
//       return "Enter a valid product number"
//     else if (arguments[1] < arguments[0][arguments[2] - 1].cost)
//       return "Not enough money for this product"
  
//     var totalremainder = arguments[1] - arguments[0][arguments[2] - 1].cost;
//     console.log(totalremainder);
//     var change = [];
//     while (totalremainder > 0) {
//       for (i = 0; i < coins.length; i++) {
//         if (totalremainder >= coins[i]) {
//           change.push(coins[i]);
//           totalremainder -= coins[i]
//           break;
//         }
//       }
//     }
//     return "{product: " + arguments[0][arguments[2] - 1].name + ",change: " + JSON.stringify(change) + "}";
  
  
//   }

//   vendingMachine(products, 200, 7)

const coins = [500, 200, 100, 50, 20, 10];

function vendingMachine(products, cost, productNumber) {
    if (productNumber == 0 || productNumber > products.length) 
        return "Enter a valid product number";
    if (cost < products[productNumber-1].cost)
        return "Not enough money for this product";
    cost -= products[productNumber-1].cost;
    let change = [];
    for (const coin of coins) {
        while (cost >= coin) {
            cost -= coin;
            change.push(coin);
        }
    }
    return {product: products[productNumber-1].name, change};
}

function displayProducts(product) {
    const productsArray = [];
    for (let i = 0; i < product.length; i++) {
        productsArray.push(product[i]);
    }
    console.log(productsArray);
}

const products = [
    {name: "Chips", cost: 100},
    {name: "Apple", cost: 250},
    {name: "Pretzels", cost: 200},
    {name: "Nuts", cost: 350},
    {name: "Banana", cost:200}
];

displayProducts(products);

console.log(vendingMachine(products, 400, 1));
console.log(vendingMachine(products, 200, 2));
console.log(vendingMachine(products, 1000, 4));
console.log(vendingMachine(products, 400, 5));
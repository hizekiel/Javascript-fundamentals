/*  write a program that filters out products that are out of stock.
Write a function that takes an array of products as a parameter. 
The product should be an object with name, price, and stockAmount. 
Add multiple products to the array, with varying stock amount, 
where some of the products have stock amount 0. 

Return the total sum of all the items in stock. */

const product = [{ name: 'Chair', price: 55, stockAmount: 13 },
    { name: 'Table', price: 66, stockAmount: 40 },
    { name: 'laptop', price: 300, stockAmount: 0 },
    { name: 'mouse', price: 15, stockAmount: 32 },
    { name: 'keyboared', price: 18, stockAmount: 0 },
    { name: 'printer', price: 35, stockAmount: 0 },
    { name: 'headphones', price: 23, stockAmount: 23 }
]




function totalStockAmount(element) {
    sum = 0;

    for (i = 0; i < element.length; i++) {
        sum = sum + element[i].stockAmount;

    }
    return sum;
}
console.log(totalStockAmount(product));

/*Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock. */

function instock(element) {

    for (i = 0; i < element.length; i++) {
        if (element[i].stockAmount > 0) {
            console.log(element[i]);
        }

    }
}

console.log(instock(product));

/*Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then should return true/false if that product name exists
	in the products array. */
function exist(element, name) {

    for (i = 0; i < element.length; i++) {
        if (name === element[i].name) {
            return true;

        }

    }
}
/* Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)*/


console.log(exist(product, 'Table'));

function doesntexist(element, name) {

    const notInProducts = [];
    for (i = 0; i < element.length; i++) {

        if (name !== element[i].name) {
            notInProducts.push(name);

        }

    }
    return notInProducts;
}



console.log(doesntexist(product, 'Table'));
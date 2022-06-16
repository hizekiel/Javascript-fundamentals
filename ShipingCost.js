/*The program calculates the shiping cost based on the location*/
function calshipingCost(cost, location) {
    let shippingPrice;
    if (location === 'EU') {
        shippingPrice = 5;
        newPrice = cost + shippingPrice;
        return console.log('you have to pay a total of' + " " + newPrice + "€ " + cost + "€ " + 'for the product and ' + shippingPrice + "€ " + 'for shipping');
    } else if (location === 'US' || location === 'Canada') {
        shippingPrice = 15;
        newPrice = cost + shippingPrice;
        return console.log('you have to pay a total of' + " " + newPrice + "€ " + cost + "€ " + 'for the product and ' + shippingPrice + "€ " + 'for shipping');
    } else {
        shippingPrice = 20;
        newPrice = cost + shippingPrice;
        return console.log('you have to pay a total of' + " " + newPrice + "€ " + cost + "€ " + 'for the product and ' + shippingPrice + "€ " + 'for shipping');

    }

}
calshipingCost(40, 'US');
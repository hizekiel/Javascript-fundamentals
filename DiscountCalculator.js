 //Discount calaulator,with a parameter of price and discount persentage//

 function discCalulate(price, discPercent) {
     if (price < 0 || discPercent < 0) {
         return "Invalid Amount";
     } else {

         newprice = price - (price * discPercent / 100);
         return newprice;
     }

 }

 discountedAmount = discCalulate(30, 50);
 console.log('tThe new price is' + "" +
     discountedAmount);
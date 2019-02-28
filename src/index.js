// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   let nominals= {"H":50,"Q":25,"D":10,"N":5,"P":1};
   let quantityBills= {};
   if(currency>10000) { quantityBills= {error: "You are rich, my friend! We don't have so much coins for exchange"};}
   else {
      for(let nominal in nominals) {
         let count=currency/nominals[nominal];
         if(count>=1) {
            quantityBills[nominal]=(count)|0;
            currency-=nominals[nominal]*quantityBills[nominal];
         }
      }
   }
 return quantityBills;
}

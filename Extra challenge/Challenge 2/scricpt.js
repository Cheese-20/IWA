const normalValue = "40";
const Day3Discount = "20";
const Day7Discount = "50";

let numDays = "8";
let total ="";

if(numDays>=7){
 total=numDays*normalValue - Day7Discount;
} else if(numDays>=3 && numDays<7){
 total = numDays *normalValue - Day3Discount ;
} else {
    total = numDays * normalValue ;
}

console.log(total);
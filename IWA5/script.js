const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;
let country = "SA";
let shipping;
let currency;

if (country === "RSA"){ 
    shipping = 400 ;
    currency = "R"
  
    }   
    else if(country === "NAM"){
            shipping = 600;
            currency ="$" 
            
        }
         else{
            shipping = 800;
            currency = "$";
         }

shoes = 300 * 1;
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED ;
const Calcshipping = shoes + batteries + pens + shirts + toys;
customers = 1;
//currency = "$";

if ( currency === "R" && Calcshipping >= 1000 || currency === "$" && Calcshipping >=60 ) {
	if (country === "NAM" || "RSA" && customers < 2) {
		    shipping = null; 
            console.log("Total: " ,currency,Calcshipping )
		}
        else {
            console.log(FREE_WARNING) ;
         }
	}  else {
        console.log(FREE_WARNING) ;
    }
  

 country ==='NK' ? console.log(BANNED_WARNING) : console.log("price", currency, shoes + batteries + pens + shirts + shipping);




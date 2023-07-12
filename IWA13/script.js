let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc =() => { 
    const isString = typeof calculated === 'string' ? true : false; // checking sring 
    const calculatedAsNumber = isString ? parseInt(calculated)  : calculated; // changing the string to a num 
    calculated = calculatedAsNumber + 1 ;
    return calculated ;
};

// using if to check the state and to set user to John 
const calcUser= () => {
 user = 'John';
 state = calculated <= logCalc() ? state = 'requesting': state = 'idle' ; 
  return state ;
};

const checkUser =() => {
    calcUser()  // calling the function to be used in this function
	if (state === calcUser()) {
        const sentence = `User: ${user} (${calculated})` ; 
		return sentence; // returning sentence to avoid multiple logs
	}
};
console.log(checkUser());
// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
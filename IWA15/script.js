const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const  [first, firstNum] = data.lists[0]; // destructuring by going into the first array from list and then going into the second array
const  [second,secondNum]   = data.lists[1] ;
const [third,thirdNum] = data.lists[2] ;

const extractBiggest = () => {
	if (firstNum[firstNum.length-1] > secondNum[secondNum.length-1])  // checking if the value is greater than popping it  
		return firstNum.pop()  // pop is a function so it need to be called 
    else
	if (thirdNum[thirdNum.length-1] < secondNum[secondNum.length-1]) 
		return secondNum.pop()
    else
	return thirdNum.pop()
  
}
const result = []

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
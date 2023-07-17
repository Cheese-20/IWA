const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const [first, firstNum] = data.lists[0];
const [second, secondNum] = data.lists[1];
const [third, thirdNum] = data.lists[2];
let Val=0;


// const extractBiggest = () => {
// 	for(i=0;i<= 15; i++){
// 	if (firstNum[i] >= secondNum[i]) {console.log(secondNum[i])
// 		return firstNum[i]
// 	} else
// 	if (thirdNum[i] <= secondNum[i]) {
// 		return secondNum[i]
// 	} else
// 	return thirdNum[i]
// }
// }
const extractBiggest = () => {
  for (i = 0; i <= 15; i++) {
    if (firstNum[i] > secondNum[i]) 
	Val= firstNum[i];
    else if (thirdNum[i] < secondNum[i]) 
      Val= secondNum[i];
     else Val= thirdNum[i];
  }
  return Val
}

const result = [Val]
// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);

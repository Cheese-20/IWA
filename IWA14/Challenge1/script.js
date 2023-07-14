const firstName = 'John';
const age = 35;
const hobbyName = 'Coding'; // changed name 

function hobby() {
    let sentence = `Hello, ${firstName} (${age}). I love ${hobbyName}!`; // declared new variable to make a sentence
    return sentence;
   }

const logTwice = () => {
  console.log(hobby()) ;  // switched hobby and logtwice functions 
  console.log(hobby());
}

logTwice();
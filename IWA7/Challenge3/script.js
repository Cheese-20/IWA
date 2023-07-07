const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '-9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line
const balance = parseFloat(sarahBalance*-1);

const owed = parseFloat((leoBalance)*-1 ) + balance+ 1000;
const leo = `${leoName}  ${leoSurname} (Owed : R  ${leoBalance*-1})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed : R ${balance.toFixed(2)})\n`;
const total = "Total amount owed: ";
const result = leo + sarah + divider+" \n" + total + owed.toFixed(2) +" \n" + divider;

console.log(result);
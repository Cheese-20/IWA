const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(`${holidays[futureId] || "ID"} ${futureId} not created yet`); // Checking if ID9 is created

const copied = {
  ...holidays[christmas], // copying the data from the holiday object[6] to a new object 
  name: "X-mas",
  date: new Date(`25 December ${currentYear} 00:00`),  // Changing the name and time X-mas begins
};
correctDate = copied.date;
correctDate.hours = 0;
correctDate.minutes = 0;  
isEarlier = copied.date < holidays[christmas].date; // Checking if the copied date is less than the holidays date 
console.log("New date is earlier:", isEarlier); 
if (isEarlier) {
  console.log(`ID change: ${holidays[christmas].id === copied.id ? false : true || copied.id}`); 
  console.log(`Name change: ${holidays[christmas].name !== copied.name ? copied.name : 'none' || copied.name}`);
  console.log(`Date change: ${holidays[christmas].date == copied.date || copied.date}`);
}

const firstHolidayTimestamp = Math.min(
  new Date(holidays[0].date).getTime(),  // turned the dates into seconds
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(),
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime()
);

const lastHolidayTimestamp = Math.max(
  new Date(holidays[0].date).getTime(), // turned the dates into seconds
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(),
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime()
);

const firstDay = new Date(firstHolidayTimestamp).getDate(); // converted the min seconds back to a date 
const firstMonth = new Date(firstHolidayTimestamp).getMonth() +1; // converted the min seconds back to a month and added 1
const lastDay = new Date(lastHolidayTimestamp).getDate(); // converted the max seconds back to a date 
const lastMonth = new Date(lastHolidayTimestamp).getMonth() +1; // converted the max seconds back to a date and added 1

console.log(`${firstDay}/${firstMonth}/${currentYear}`);  // displaying dates 
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

let randomHoliday = Math.floor(Math.random() *10); // getting a random value multiplyinging it by 10 to get a whole number
console.log(holidays[randomHoliday].date);  // displaying the date of the random holiday 

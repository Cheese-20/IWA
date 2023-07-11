const order1 = document.querySelector('[data-key="order1"]'); // getting the root of the data in order to put associate the specific data 
const order2 = document.querySelector(' [data-key="order2"] ');
const order3 = document.querySelector('[data-key="order3"] ');

// Associating data from the document
const biscuits1 = order1.dataset.biscuits ;  
const donuts1 = order1.dataset.donuts ;  
const pancakes1 = order1.dataset.pancakes;
const status1 = order1.dataset.delivered;

const biscuits2 = order2.dataset.biscuits ;  
const donuts2 = order2.dataset.donuts ;  
const pancakes2 = order2.dataset.pancakes;
const status2 = order2.dataset.delivered;

const biscuits3 = order3.dataset.biscuits ;  
const donuts3 = order3.dataset.donuts ;  
const pancakes3 = order3.dataset.pancakes;
const status3 = order3.dataset.delivered;

document.querySelector('[data-key="order1"] .biscuits .count').innerHTML= biscuits1;
document.querySelector('[data-key="order1"] .donuts .count').innerHTML= donuts1;   // placing the updated data into the html document
document.querySelector('[data-key="order1"] .pancakes .count').innerHTML= pancakes1;
document.querySelector('[data-key="order1"] .status dd').innerHTML =  status1 ===true ? 'Delivered' : 'Pending';;

document.querySelector('[data-key="order2"] .biscuits .count').innerHTML= biscuits2;
document.querySelector('[data-key="order2"] .donuts .count').innerHTML= donuts2;  
document.querySelector('[data-key="order2"] .pancakes .count').innerHTML= pancakes2;
document.querySelector('[data-key="order2"] .status dd').innerHTML =   status2 ==='true' ? 'Delivered' : 'Pending';

document.querySelector('[data-key="order3"] .biscuits .count').innerHTML= biscuits3;
document.querySelector('[data-key="order3"] .donuts .count').innerHTML= donuts3;  
document.querySelector('[data-key="order3"] .pancakes .count').innerHTML= pancakes3;
document.querySelector('[data-key="order3"] .status dd').innerHTML =   status3 === 'true' ? 'Delivered' : 'Pending';
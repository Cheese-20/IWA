const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status1 = document.querySelector('#book1 .status').innerHTML;  
const reserve1 = document.querySelector('#book1 .reserve'); // getting the values from the html
const checkout1 = document.querySelector('#book1  .checkout');
const checkin1 = document.querySelector('#book1 .checkin ');


const status2 = document.querySelector('#book2 .status').innerHTML;  
const reserve2 = document.querySelector('#book2  .reserve'); // getting the values from the html
const checkout2 = document.querySelector('#book2  .checkout');
const checkin2 = document.querySelector('#book2 .checkin ');

const status3 = document.querySelector('#book3 .status').innerHTML;  
const reserve3 = document.querySelector('#book3  .reserve'); // getting the values from the html
const checkout3 = document.querySelector('#book3  .checkout');
const checkin3 = document.querySelector('#book3 .checkin ');

checkin1.style.color = "black";
document.querySelector('#book1 .status').style.color =`${STATUS_MAP[status1].color}`; // changing the colours
reserve1.disabled = STATUS_MAP[status1].canReserve ? false : true; 
checkout1.disabled = STATUS_MAP[status1].canCheckout ? false : true; 
checkin1.disabled = STATUS_MAP[status1].canCheckIn ? false : true; 


checkin2.style.color = "black";
document.querySelector('#book2 .status').style.color =`${STATUS_MAP[status2].color}`; // changing the colours
reserve1.disabled = STATUS_MAP[status2].canReserve ? false : true; 
checkout1.disabled = STATUS_MAP[status2].canCheckout ? false : true; 
checkin1.disabled = STATUS_MAP[status2].canCheckIn ? false : true; 

checkin3.style.color = "black";
document.querySelector('#book3 .status').style.color =`${STATUS_MAP[status3].color}`; // changing the colours
reserve1.disabled = STATUS_MAP[status3].canReserve ? false : true; 
checkout1.disabled = STATUS_MAP[status3].canCheckout ? false : true; 
checkin1.disabled = STATUS_MAP[status3].canCheckIn ? false : true; 
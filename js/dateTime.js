const todayDate = new Date();
console.log("today's date: ", todayDate);

const modifiedDate = new Date(2013, 3, 30);
console.log("Modified Date: ", modifiedDate);

const timeStamp = new Date(0);
console.log("Timestamp at 0 mili sec: ", timeStamp);

const currentDateTimestamp = new Date().getTime();
console.log("Current date Timestamp: ", currentDateTimestamp);

console.log("Week of the day: ", todayDate.getDay());


const clock = document.querySelector(".clock");
let block1 = document.createElement("button");
let block2 = document.createElement("button");
let block3 = document.createElement("button");

block1.setAttribute("class", "hour");
block2.setAttribute("class", "minute");
block3.setAttribute("class", "second");

clock.append(block1, block2, block3);

const tick = () => {
  const tickClock = new Date();
  block1.textContent = tickClock.getHours();
  block2.textContent = tickClock.getMinutes();
  block3.textContent = tickClock.getSeconds();
};

setInterval(tick, 1000)

// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");


// const tick = () => {
//   const tickClock = new Date();
//   hour.textContent = tickClock.getHours();
//   minute.textContent = tickClock.getMinutes();
//   second.textContent = tickClock.getSeconds();
// };

// setInterval(tick, 1000);


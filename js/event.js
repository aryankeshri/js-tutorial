const eventElement = document.querySelector(".click-me");
console.log(eventElement);

eventElement.addEventListener('click', () => { console.log("clicked!!!!") })

const liEventElement = document.querySelectorAll("li");
console.log(liEventElement);

// liEventElement.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     e.target.style.textDecoration = "line-through";
//   });
// });

//// removing
// liEventElement.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// adding
const ul = document.querySelector("ul");
const preButtonElement = document.querySelector("#pre");
const postButtonElement = document.querySelector("#post");

preButtonElement.addEventListener('click', () => { 
  const li = document.createElement('li');
  li.textContent = "New Apple pre insert";
  ul.prepend(li);
});

postButtonElement.addEventListener('click', () => { 
  const li = document.createElement('li');
  li.textContent = "New Apple Post append";
  ul.append(li);
});


///// Event Bubbling and Delegation
ul.addEventListener('click', (e) => {
  if(e.target.nodeName == "LI"){
    e.target.style.color = "red";
  }
});


// Copy event

const h3CopyElement = document.querySelector(".copy");

h3CopyElement.addEventListener('copy', (e) => {
  console.log(e);
  console.log("Protected H3 tag!");
});

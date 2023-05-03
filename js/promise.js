console.log(`----------- Promise JavaScript -----------`);
// The Promise object represents the eventual completion (or failure) of an 
// asynchronous operation and its resulting value.

// // example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Resolve Promise!");
//     // or
//     reject("Reject Promise!");
//   })
// }

// getSomething()
//   .then((data) => {
//     console.log("Passed!!");
//   })
//   .catch((error) => {
//     console.log("Failed!!");
//   })


// Promise async example
const todo = () => {

  return  new Promise((resolve, reject) => {
    const c_request = new XMLHttpRequest();
  
    c_request.addEventListener('readystatechange', ()=>{    
      if(c_request.readyState === 4 && c_request.status == 200){
        resolve(JSON.parse(c_request.responseText));
      } else if(c_request.readyState === 4){
        reject("Error in response");
      }
    });
  
    // setup request
    c_request.open(
      'get', 
      'https://jsonplaceholder.typicode.com/todos'
    );
  
    // send request
    c_request.send();
  })
};

todo()
  .then((data) => {console.log(data)})
  .catch((error) => {console.log(error)});

todo()
  .then((data) => {console.log('First promise call', data)})
  .then((data) => {console.log('Second promise call', data)})
  .catch((error) => {console.log(error)})


// featch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {return response.json();})
  .then((data) => {console.log('featch response data: ', data);})
  .catch((error) => {console.log(error)})


// async and await
getText("resources/fetch_info.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  console.log(y);
  document.getElementById("demo").innerHTML = y;
}


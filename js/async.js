console.log(`----------- Asynchronous JavaScript -----------`);

console.log("statment 1");
console.log("statment 2");

// async code
setTimeout(() => {
  console.log("async code");
}, 2000);

console.log("statment 3");
console.log("statment 4");

console.log(`----------- HTTP Request -----------`);

const request = new XMLHttpRequest();
console.log(request);

// setup request
request.open(
  'get', 
  'https://jsonplaceholder.typicode.com/todos/1'
  );

// send request
request.send();

request.addEventListener('readystatechange', ()=>{
  console.log(request);
  console.log(`request ${request}, State: ${request.readyState}`);

  if(request.readyState === 4 && request.status == 200){
    console.log(request.response);
  } else if(request.readyState === 4){
    console.log(request.responseText);
  }
});

// 0   UNSENT  open() has not been called yet.
// 1   OPENED  send() has been called.
// 2   HEADERS_RECEIVED    send() has been called, and headers and status are available.
// 3   LOADING Downloading; responseText holds partial data.
// 4   DONE    The operation is complete.


// callback function

const todo = (callback) => {
  const c_request = new XMLHttpRequest();
  
  c_request.addEventListener('readystatechange', ()=>{
    console.log(c_request);
    console.log(`request ${c_request}, State: ${c_request.readyState}`);
  
    if(c_request.readyState === 4 && c_request.status == 200){
      callback(undefined, JSON.parse(c_request.responseText));
    } else if(c_request.readyState === 4){
      callback("Error in response", c_request.responseText);
    }
  });

  // setup request
  c_request.open(
    'get', 
    'https://jsonplaceholder.typicode.com/todos'
    );

  // send request
  c_request.send();
};


todo((error, data) => {
  console.log("callback function");
  console.log("Data: ", data);
  console.log("Error: ", error);
});


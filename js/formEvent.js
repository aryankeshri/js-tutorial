const form = document.querySelector(".modal-content");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.uname.value, form.psw.value);
  let username = form.uname.value;
  let password = form.psw.value;
  console.log(username, password);
});


// Live feedback

username.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  console.log(username.value);

  if(e.target.value.length > 3){
    username.setAttribute('class', 'success')
  } else {
    username.setAttribute('class', 'error')
  }
})


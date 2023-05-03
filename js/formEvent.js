console.log(`----------- Form Event JavaScript -----------`);
document.getElementById("form-event").innerHTML = `
  <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
  <div id="id01" class="modal">  
    <form class="modal-content animate" action="/" method="post">  
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input id="username" type="text" placeholder="Enter Username" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input id="password" type="password" placeholder="Enter Password" name="psw" required>
          
        <button type="submit">Login</button>
      </div>

      <div class="container" style="background-color:#f1f1f1">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      </div>
    </form>
  </div>
`;

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


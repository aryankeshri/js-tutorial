const modal = document.getElementById('id01');
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const selectElement = document.getElementById("mySelect");
const body = document.querySelector("body");
const jsScripts = ["js/for-in-loop.js", "js/event.js", "js/formEvent.js", "js/array.js", "js/dateTime.js", "js/localStorage.js"];    

jsScripts.map((js) => {
  let option  = document.createElement('option');
  option.setAttribute('value', js);
  option.textContent = js;
  selectElement.append(option);
});

selectElement.addEventListener('change', (e) => {
  let custonScript = document.querySelector('.customScript');
  if(e.target.nodeName == "SELECT"){
    let scriptTag = document.createElement('Script');
    scriptTag.setAttribute('src', e.target.value);
    scriptTag.setAttribute('class', 'customScript');

    if(custonScript != null) {
      console.log(custonScript);
      custonScript.remove();
    }
    body.append(scriptTag);
  };    
});
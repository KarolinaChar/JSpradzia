//Single Element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

console.log(document.querySelectorAll("h1"));

//textContent
var form = document.querySelector(".name");
form.textContent = "This was changed";

//innerText innerHTML
var ul = document.querySelector(".items");
ul.lastElementChild.innerText ="whynot";
ul.children[1].innerHTML = "<h4>THIS IS THE MIDDLE</h4>";


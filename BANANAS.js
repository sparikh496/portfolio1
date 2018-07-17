// alert("this is an alert box");
var myButton = document.querySelector('button')
var myButton = document.querySelector('h1')
myButton.onclick = function() {
  var name = promt("please enter your name")
  localStorage.setItem("name: " name );
}

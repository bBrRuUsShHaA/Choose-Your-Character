nameElement = document.getElementById("name");
btnElement = document.getElementById("btn");
listElement = document.getElementById("listItems");
formElement = document.getElementById("form");

btnElement.addEventListener("submit", function () {
    e.preventDefault();
    let name = nameElement.value;
   let liElement = document.createElement("li");
   listElement.appendChild(liElement);
   nameElement.value = "";
})
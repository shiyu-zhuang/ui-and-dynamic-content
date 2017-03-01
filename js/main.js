/*global prompt*/
var newItem, uList, listItem, eventTargetObject, i;

//Event-Target Object
eventTargetObject = document.querySelector("button");


function removeItem(ev) {
    "use strict";
    var caughtElement;
    caughtElement = ev.target;
  
    for (i = 0; i < listItem.length; i += 1) {
        listItem[i].removeAttribute("class");
    }
     caughtElement.setAttribute("class", "new");
}

//Event-Handler
function addItem() {
    "use strict";
    newItem = prompt("Enter a new item for to-buy list!");
    uList = document.querySelector("ul");

    listItem = document.createElement("li");

    listItem.innerHTML = newItem;
    
    if (listItem.length !== 0) {
        uList.appendChild(listItem);
        listItem.addEventListener("click", removeItem, false);
    }
}

//Registering Event-Handler
eventTargetObject.addEventListener("click", addItem, false);

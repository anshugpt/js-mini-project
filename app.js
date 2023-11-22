//* Event Bubbling 
// event will activate for its parente and all the ansistors
//* -> To stop this we need to use "event.stopPPropagation()" method


// TODO-- Making todo app

let input = document.querySelector("#inputArea");
let btn = document.querySelector(".addingButton");
let list = document.querySelector(".listItem");

btn.addEventListener("click", function(event){
    let newItem = document.createElement("li");
    list.appendChild(newItem);
    newItem.innerText = input.value
    input.value = ""; //* -> to clear the input area after adding
});

// TODO --> look at event.target
// TODO --> Make this todo app more nice, add more feature
let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el")
let count = 0


function increment(){
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - " //this code rendering the number to the screen when button is clicked.
    saveEl.textContent += countStr;
    countEl.textContent = count
}

function reset(){
    count = 0
    countEl.textContent = 0 
    countStr = 0
    saveEl.textContent = "Previous save: " 

}


// document.getElementById("count-el").innerText = 5;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Butonu tanımak:

//  function increment() {
//      console.log("button clicked")
//  }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// BUTONLA BİRLİKTE GİREN KİŞİLERİ SAYMAK VE KAYDETMEK
let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el")
let count = 0


function increment(){
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - " //bu ve alttaki kod save button a basıldığında numarayı ekrana yazdırır.
    saveEl.textContent += countStr;
    countEl.textContent = count
    //console.log(count)
}

function reset(){
    count = 0
    countEl.textContent = 0 
    countStr = 0
    saveEl.textContent = "Previous save: " 

}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let username = "Mustafa"
// let message = "You have tree notifications"
// let messageToUser = "Hey" + " " +  username + "," + message

// console.log(messageToUser)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let name = "Mustafa"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

//console.log(myGreeting)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//STRİNG VE NUMBER AYRIMI 

// let var1 = 4
// let var2 = "10"
// let var3 = "15"
// console.log(var1 + var2)
// console.log(var2 + var1)
// console.log(var2 + var3)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myname = "mustafa"
// let greeting = "Welcome back "
// let welcomeEl = document.getElementById("welcome-el")

// welcomeEl.innerText = (greeting + myname);



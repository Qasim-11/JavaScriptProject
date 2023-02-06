let Display = document.getElementById("numbers");
let counter = 0
let Display2 = document.getElementById("saved");
let avr = 0
let Display3 = document.getElementById("avr");






function INCREASE(x) {

    counter += x
 Display.innerHTML = counter

}

// function reset(){

//     counter = 0
//     Display.innerHTML = counter  //0
//     Display2.innerHTML = "Saved Numbers : "
//     Display3.innerHTML = "The average is : 0"

// }

function SAVE(){

let saved = counter
if (counter != 0){
Display2.innerHTML += " ("+ saved +") + " 
}
avr += counter 
counter = 0
Display.innerHTML = counter

}

function CALCULATE(){
avr += counter ;
console.log(avr)
counter = 0
Display.innerHTML = counter
Display2.innerHTML = "Saved Numbers : "
Display3.innerHTML = "The average is : " + avr


}

function DECREASE(x){
  if  ( counter > 0){  //this does not allow the counter to go below "0"
    counter -= x
    Display.innerHTML = counter
}

}




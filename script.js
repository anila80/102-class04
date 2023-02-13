let apple = 1;
let myname = "";

function applepie() { 
}



let pie2 = function(cinamon) {
}


function whodat () {
    myname = prompt("What is your name?");
    if (myname != "Anila"){
        alert ('ERROR HACKER ERROR');   
    } else {
    alert ("Hello, " + myname);
    }
}

whodat();

// applepie

function callFunc(){
    let blankAns = prompt("what is the temp in Farenheit?");

    document.getElementById("celsius").innerHTML = toCelsius(blankAns);
}

function toCelsius(f) {
    return (5/9) * (f-32);
}


function userName() {

    let thisName;
    while (thisName != "5") {
        thisName = prompt("What is 2 +  3?");
        if (thisName == "5") {
            alert("You are right")
        }
        else {
            alert("Try Again")
        }
    }
}
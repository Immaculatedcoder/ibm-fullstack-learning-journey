function temperature() {
    // Grab what the user inputted in the Celsius section and store it in a Variable
    var c = document.getElementById("celsius").value;
    // Perform the temparature conversion from Celcius to Fahrenheit
    var f = (c * 9/5) + 32;
    console.log(f)

    // drop your calculation in the Fahrenheit section 
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2;
    document.getElementById("pounds").value = p;
}

function distance() {
    var km = document.getElementById("km").value;
    var m = km * 0.62137;
    document.getElementById("miles").value = m;
}

// Listen to mouse clicks
var noOfResetButton = document.getElementsByClassName("reset").length;

for (var i = 0; i<noOfResetButton; i++){
    document.querySelectorAll(".reset")[i].addEventListener("click", clearAll);
}


function clearAll() {
    var buttonHTML = this.id; // logs "t"
    // console.log(buttonHTML);

    switch (buttonHTML) {
        case "t":
            document.getElementById("celsius").value = "";
            document.getElementById("fahrenheit").value = "";
            break;
        case "w":
            document.getElementById("kilo").value = "";
            document.getElementById("pounds").value = "";
            break;
        case "d":
            document.getElementById("km").value = "";
            document.getElementById("miles").value = "";
        break;
        default:
            break;
    }
}





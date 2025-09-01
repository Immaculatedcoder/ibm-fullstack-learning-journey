function temperature() {
    // Grab what the user inputted in the Celsius section and store it in a Variable
    var c = document.getElementById("celsius").value;
    // Perform the temparature conversion from Celcius to Fahrenheit
    var f = (c * 9/5) + 32;

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
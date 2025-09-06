function updateRate() {
    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateval + "%";
}

function compute() {
    var pricipal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = pricipal * years * rate / 100;
    var amount = parseInt(pricipal) + parseFloat(interest);
    var result = document.getElementById("result");

    var year = new Date().getFullYear() + parseInt(years);

    if (pricipal <= 0){
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = `If you deposit $${pricipal}, \<br\> at an interest rate of of ${rate} %\<br\> You will receive an amount of ${amount}, \<br\> in the year ${year} \<br\>`;
    }
    
}
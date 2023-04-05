var amount = document.getElementById('amount');
var percent = document.getElementById('percent');
var time = document.getElementById('time');
var ay = document.getElementById('ay')
var payone  = document.getElementById('payone')

var button = document.getElementById('button')


button.onclick = function () {
   Ay();
}

function Ay() {
    var ayliq = (amount.value * (1 + percent.value/100))/time.value
    ay.innerHTML= ayliq;
}





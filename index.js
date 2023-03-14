
function sum(a,b){
    var a = document.getElementById("fn").value;
var b = document.getElementById("sn").value;
var c = parseInt(a)+parseInt(b);
document.getElementById('res').value=c;
}
function sub(a,b){
    var a = document.getElementById("fn").value;
var b = document.getElementById("sn").value;
var c = parseInt(a)-parseInt(b);
document.getElementById('res').value=c;
}
function div(a,b){
    var a = document.getElementById("fn").value;
var b = document.getElementById("sn").value;
var c = parseInt(a)/parseInt(b);
document.getElementById('res').value=c;
}
function mul(a,b){
    var a = document.getElementById("fn").value;
var b = document.getElementById("sn").value;
var c = parseInt(a)*parseInt(b);
document.getElementById('res').value=c;
}

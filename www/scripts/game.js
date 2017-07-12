/**
 * Created by paulinarataj on 12.07.2017.
 */
var userNumber;
var computerNumber = 9;

function game() {
 userNumber = document.getElementById("input").value;
    if(userNumber==computerNumber) {
        alert("Zgadles");
    }else {
        alert("Proboj dalej");
    }
}
function guzik() {
    var g = document.getElementById('guzik');
    console.log(g.value); //korzystamy z okienka dialogowego by wypisać value pobranego guzika

}

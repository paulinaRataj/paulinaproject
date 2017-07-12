/**
 * Created by paulinarataj on 12.07.2017.
 */


var buttonTest = document.getElementById('buttonTest');
buttonTest.tekst = 'To jest tekst do wypisania';

var buttonAdd =  document.getElementById('buttonTestAdd');
var buttonRemove =  document.getElementById('buttonTestRemove');

function showText() {
    alert(this.tekst);
}

function addTestEvent() {
    buttonTest.value = 'No dobra. Można klikać!';
    buttonTest.addEventListener('click', showText);
}

function removeTestEvent() {
    buttonTest.value = 'Wpierw podepnij zdarzenie!';
    buttonTest.removeEventListener('click', showText);
}

document.addEventListener("DOMContentLoaded", function() {
    buttonAdd.addEventListener('click', addTestEvent, false);
    buttonRemove.addEventListener('click', removeTestEvent);
});
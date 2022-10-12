var money = document.getElementById("inputMoney").value;
var people = document.getElementById("inputPeople").value;
var servis = document.getElementById("inputServis").value;

function process() {
    var tip = money * 100 / servis;
    var tipPeople = tip / people;
    var tipTotal = tip + tipPeople;
    print(tipTotal);
}
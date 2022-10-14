function calculate() {

    var money = document.getElementById("inputMoney").value;
    var people = document.getElementById("inputPeople").value;
    var servis = document.getElementById("inputServis").value;

    var tip = ((money * servis) / (people));

    if (tip === "none") {
        tip = "Tip $0 each";
        alert(tip);

    } else {
        tip = "Tip $" + tip + " each";
        alert(tip);

    }

}
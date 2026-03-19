const howKm = document.getElementById("kmuser")
const howAge = document.getElementById("ageuser")
const formEl = document.querySelector("form")
const nameEl = document.getElementById("nameuser")


formEl.addEventListener("submit", function (event) {
    event.preventDefault(event);
    let cost = howKm.value * 0.21;
    let ticketname = document.getElementById("ticket-name");
    let ticketoffer = document.getElementById("tariffa")
let ticketcarr = document.getElementById("Carrozza")
let ticketcod = document.getElementById("Codice")
let ticketcost = document.getElementById("Costo")
        console.log(howKm.value);
    if (howAge.value < 18) {
        cost = cost * 0.8
        ticketoffer.innerText="Biglietto Under 18"
    }
    else if (howAge.value > 65) {
        cost = cost * 0.6
        ticketoffer.innerText = "Biglietto Over 65"
    }
    else {
        ticketoffer.innerText= "Biglietto Standard"
    }

    console.log(cost);
ticketname.innerText = nameEl.value
ticketcarr.innerText = "7"
ticketcod.innerText = "47389"
ticketcost.innerText = cost



}

    
)


const howKm = document.getElementById("km")
const howAge = document.getElementById("age")
const buttonEl = document.getElementById("btn")

buttonEl.addEventListener("click", function (event) {
    event.preventDefault;
    let cost = howKm.value * 0.21;
        console.log(howKm.value);
    if (howAge.value < 18) {
        cost = cost * 0.8
    }
    else if (howAge.value > 65) {
        cost = cost * 0.6
    }

    console.log(cost);
    
})


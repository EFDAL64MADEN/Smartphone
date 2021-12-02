moment.locale('fr')

let bouton = document.querySelector(".bouton")
let ecran = document.querySelector(".ecran")
bouton.addEventListener("click", function(){
    ecran.classList.toggle("active")
})

let heure = document.querySelector("h1")
heure.innerHTML += moment().format('LT')

let heureDeux = document.getElementById("heure")
heureDeux.innerHTML += moment().format('LT')

let date = document.getElementById("date")
date.innerHTML += moment().format('ll')
//exercicio1
const frutas = ["laranja", "limão", "uva"];

let primeiraFruta = document.getElementById("fruta-1")
primeiraFruta.innerHTML += frutas[0]

let segundaFruta = document.getElementById("fruta-2")
segundaFruta.innerHTML += frutas[1]

let terceiraFruta = document.getElementById("fruta-3")
terceiraFruta.innerHTML += frutas[2]

//exercicio2
console.log(document.getElementById("nome").value)

//exercicio3
function adcFruta(){
    let quartaFruta = document.getElementById("fruta-4")
    quartaFruta.innerHTML = document.getElementById("nome").value
}

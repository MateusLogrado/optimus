let resposta = document.getElementById("resposta")
console.log(resposta)

function calcula(){

    let base = Number(document.getElementById("base").value)
    let altura = Number(document.getElementById("altura").value)
    console.log("a base do triangulo retangulo é = ", base)
    console.log("a altura do triangulo retangulo é = ", altura)

    let area = base * altura / 2
    console.log("O valor da área é =",area)

    resposta.innerHTML = "O valor da área é = " + area
    resposta.style.fontSize = "2rem"
    resposta.style.color = "#de3163"

}
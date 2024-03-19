// Carne - 400 gr por pessoa / se + de  6 horas - 650 gr
// Cerveja - 1200 ml por pessoa / se + de  6 horas - 2000 ml
// Bebidas - 1000 ml por pessoa / se + de  6 horas - 1500 ml

//criancas valem por metade de tudo (menos cerveja)



//modificar - 


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calmai gordo to calculando")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) / 2 * criancas;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + bebidaPP(duracao) / 2 * criancas;

    resultado.innerHTML = `<p>${Math.ceil(qtdTotalCarne / 1000)} Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} Garrafas de Bebida </p>`
}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    let cerveja = 400;
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidaPP(duracao){
    let bebida = 400;
    if(duracao >= 6){
        return 1000;
    }else{
        return 1500;
    }
}
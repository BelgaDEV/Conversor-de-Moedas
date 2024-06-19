// definiu o valor da variavel dolar igual a 5.1
let dolar = 5.1

// solicitei ao JavaScript para ir no HTML e pegar o ID #USD e #BRL
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

// ao digitar uma tecla no campo ele vai converter
usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

// ao digitar uma tecla no campo ele vai converter
brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

// blur serve para formatar o que foi digitado quando clicado fora do campo.
usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

// blur serve para formatar o que foi digitado quando clicado fora do campo.
brlInputInput.addEventListener("blur", () => {
    brlInputInput.value = formatCurrency(brlInput.value)
})

// define no campo USD por padrão o valor 1000,00
usdInput.value = "1000,00"
// chama a funão convert para converter para BRL.
convert("usd-to-brl")

// funções
function formatCurrency(value) {
    // ajustar o valor 
    let fixedValue = fixValue(value)

    // formata o numero
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-br", options)
    
    // retorna o numero formatado
    return formatter.format(fixedValue)
}

function fixValue(value) {
    // replace troca a virgula pelo ponto.
    let fixedValue = value.replace(",", ".") 

    // parsefloat transforma um string texto em numero.
    let floatValue = parseFloat(fixedValue)

    //if = se condição para mostrar resultado.
    // NaN verifica se o que foi digitado é um numero
    if(floatValue == NaN) {
        floatValue = 0
    }

    return floatValue
}


function convert(type) {
    if(type == "usd-to-brl") {
        // ajuste o valor
        let fixedValue = fixValue(usdInput.value)

        // converta para dolar
        let result = fixedValue * dolar
        result = result.toFixed(2)

        // retorna o valor formatado.
        brlInput.value = formatCurrency(result)
    }

    if(type == "brl-to-usd") {
        // ajuste o valor 
        let fixedValue = fixValue(brlInput.value)

        // converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)

       // mostra no campo de dolar
        usdInput.value = formatCurrency(result)
    }
}
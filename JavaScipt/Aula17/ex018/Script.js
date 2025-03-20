let num = document.getElementById('fnum')
let lista = document.getElementById('flis')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}


function inlista(n, l) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
 }

function adicionar() {
    if(isNumero(num.value) && !inlista(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Numero invalido ou já existente')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('É necessario digitar um número para continuarmos')
    } else {
        let tamanho = valores.length
        let maior = 0
        let menor = 0
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        media = soma / tamanho
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tamanho} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor cadastrado é: ${Math.max.apply(null,valores)}</p>`
        res.innerHTML += `<p>O menor valor cadatrado é: ${Math.min.apply(null,valores)}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A media de todos os numeros é: ${media}</p>`
    }
}
function adicao() {
let v1 = document.getElementById('valor1')
let v2 = document.getElementById('valor2')
let res = document.getElementById('res')
let n1 = Number(v1.value)
let n2 = Number(v2.value)
res.innerHTML = ''

     let soma = n1 + n2
    res.innerHTML = (`O reultado entre ${n1} e ${n2} é ${soma}`)
}

function subtracao () {
    let v1 = document.getElementById('valor1')
    let v2 = document.getElementById('valor2')
    let res = document.getElementById('res')
    let n1 = Number(v1.value)
    let n2 = Number(v2.value)
    res.innerHTML = ''

    let subtracao = n1 - n2
    res.innerHTML = (`O resultado entre ${n1} e ${n2} é ${subtracao}`)
}

function multiplicacao() {
    let v1 = document.getElementById('valor1')
    let v2 = document.getElementById('valor2')
    let res = document.getElementById('res')
    let n1 = Number(v1.value)
    let n2 = Number(v2.value)
    res.innerHTML = ''

    let mult = n1 * n2
    res.innerHTML = (`O resultado entre ${n1} e ${n2} é ${mult}`)
}

function divisao() {
    let v1 = document.getElementById('valor1')
    let v2 = document.getElementById('valor2')
    let res = document.getElementById('res')
    let n1 = Number(v1.value)
    let n2 = Number(v2.value)
    res.innerHTML = ''

    let divisao = n1 / n2
    res.innerHTML = (`O resultado entre ${n1} e ${n2} é ${divisao.toFixed(2)}`)
}
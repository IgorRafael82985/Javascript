function calcular () {
    let x1 = document.getElementById('valor1')
    let x2 = document.getElementById('valor2')
    let x3 = document.getElementById('valor3')
    let res = document.getElementById('res')
    let n1 = Number(x1.value)
    let n2 = Number(x2.value)
    let n3 = Number(x3.value)

    let mult = n3 * n2
    let div = mult / n1

    res.innerHTML +=  ( div.toFixed(0))

}

function limpar() {
    res.innerHTML = 'é igual a '
}
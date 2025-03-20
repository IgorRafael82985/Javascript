function tabuada() {
    let n = document.getElementById('num')
    let res = document.getElementById('res')
    
    if (n.lenght == 0) {
        window.alert('[ERRO] Coloque um número')
    } else {

    res.innerHTML = ''

    let tab = Number(n.value)

    let n1 = tab * 1
    let n2 = tab * 2
    let n3 = tab * 3
    let n4 = tab * 4
    let n5 = tab * 5
    let n6 = tab * 6
    let n7 = tab * 7
    let n8 = tab * 8
    let n9 = tab * 9
    let n10 = tab * 10

    res.innerHTML += `${tab} *1 = ${n1}<br>`

    res.innerHTML += `${tab} *2 = ${n2}<br>`

    res.innerHTML += `${tab} *3 = ${n3}<br>`

    res.innerHTML += `${tab} *4 = ${n4}<br>`

    res.innerHTML += `${tab} *5 = ${n5}<br>`

    res.innerHTML += `${tab} *6 = ${n6}<br>`

    res.innerHTML += `${tab} *7 = ${n7}<br>`

    res.innerHTML += `${tab} *8 = ${n8}<br>`

    res.innerHTML += `${tab} *9 = ${n9}<br>`

    res.innerHTML += `${tab} *10 = ${n10}<br>`

    }
}
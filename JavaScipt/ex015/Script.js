function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res') 
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Dados incorretos')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade >=11 && idade < 21) {
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade >=11 && idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.borderRadius = "50%"
        img.style.width = "250"
        img.style.height = "250"
        img.style.padding = "16px"
    }
}
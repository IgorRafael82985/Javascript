let amigo = {nome:'José',
sexo:'M',
peso:'85.4',
engordar(p=0){
console.log('Engordou')
 this.peso += p
}}

amigo.engordar(2)
consosole.log(`${amigo.nome} pesa ${amigo.peso} KG`)
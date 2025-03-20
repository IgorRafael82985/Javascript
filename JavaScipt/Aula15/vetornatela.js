
let num = [7,5,4,6,3,2,1]
/*
num.sort() 

for(let pos=0; pos <num.length ; pos++) {
    console.log(num[pos])
}
*/

for (let pos in num) {
    console.log(num[pos])
}

let p = num.indexOf(9)

console.log(`O valor 3 está na posição ${p}`)
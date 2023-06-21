let P = prompt("1 A 10")
const radom = Math.round(Math.random() * 10)
let x = 1

while( Number(P) != radom){
    P = prompt('Erro! tente novamente')
    x++
}

if(P < 2){
  alert(`Acertou com ${x} tentativa`)
} else{
  alert(`Acertou com ${x} tentativas`)  
}

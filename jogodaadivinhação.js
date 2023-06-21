let P = prompt("1 A 10")
const radom = Math.round(Math.random() * 10) //Gerando um numero aauto
let x = 1

//Estrutura de repetição 
while( Number(P) != radom){
    P = prompt('Erro! tente novamente')
    x++ // A cada tentativa o x esta recebendo + 1
}

if(P < 2){
  alert(`Acertou com ${x} tentativa`)
} else{
  alert(`Acertou com ${x} tentativas`)  
}

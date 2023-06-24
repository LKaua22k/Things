const P1 = Number(prompt("Digite o primeiro numero"))
const P2 = Number(prompt("Digite o primeiro numero"))
const soma = P1 + P2

alert(`A soma dos dois números é : ${soma}`)
alert(`A subtração dos dois números é : ${P1 - P2}`)
alert(`A multiplicação dos dois números; é : ${P1 * P2}`)
alert(`A divisão dos dois números é : ${P1 / P2}`)
alert(`O resto da divisão dos dois números é : ${P1 % P2}`)
let dif = soma % 2

if(dif == 0){
  alert(`A soma dos numeros inseridos é par: ${soma}`)
} else{
  alert(`A soma dos numeros inseridos é impar: ${soma}`)
}

if(P1 == P2){
  alert("Os numeros inseridos são iguais")
} else{
  alert("Os numeros inseridos são diferentes")
}

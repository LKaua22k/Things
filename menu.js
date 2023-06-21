let nome = prompt('Seu Nome')

let p 
let items = []

while(p != 3){
 p = Number(prompt(`Ola ${nome} Digite o numero da opção desejada
 1 Adicionar item
 2 ver
 3 sair`))

 if(p === 1){
    let item = prompt("Nome do item")
    items.push(item)
 }else if(p === 2){
    if(items.length == 0){
      alert("Nada")
    } else{
      alert(items)
    }
 }else{
    alert("Tchau")
 }
}

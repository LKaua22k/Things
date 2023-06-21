let items = [];

// se o intem for menor que 10 sera acrescentado +1
for (let item = 0; item < 10; item++) {
    let itemName = prompt("Digite o item" + (item + 1))
    
    items[item] = itemName // Adicionando os intem nas lista
}

alert(items)
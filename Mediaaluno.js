let nome = prompt('Qual seu nome?')

let AP = prompt('Sua nota da avaliação parcial foi?')
let B1 = prompt('Sua nota no primeiro bimestre foi?')
let B2 = prompt('Sua nota no segundo bimestr foi?')

AP = Number(AP)
B1 = Number(B1)
B2 = Number(B2)

let media = (AP + B1 + B2) /3


function test() {
    if(media>= 6){
        alert(`Parabens ${nome} sua nota foi ${media.toFixed(2)} voce passou de ano`)
    } else{
        alert(`${nome} sua nota foi ${media.toFixed(2)} voce não passou de ano`)
    }
}

test()
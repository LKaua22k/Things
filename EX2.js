let students = [
    {
        nome: "kauã",
        n1: 8,
        n2: 7
    },
    {
        nome: "Sol",
        n1: 8,
        n2: 7
    },
    {
        nome: "Pablo",
        n1: 5,
        n2: 7
    }
]

function calc(nota1 , nota2){
    return (nota1 + nota2) / 2
}

function printMedia(student){
    let result = calc(student.n1 , student.n2)

    if(result >= 7){
        return `A media do(a) aluno(a) ${student.nome} é de ${result}
      Parabens ${student.nome}! Você foi aprovado(a) no concurso`
    } else{
        return`A media do(a) aluno(a) ${student.nome} é de ${result}
      Não foi dessa vez ${student.nome}! Tente Novamente`
    }
}

for (const student of students) {
    let msg = printMedia(student)
    alert(msg)
}
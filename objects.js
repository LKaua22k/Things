const pacientes = [
    {
        name: "SOl",
        idade: 19,
        peso:"90kg",
    },
    {
        name: "Pablo",
        idade: 20,
        peso: "75kg",
    },
    {
        name:"kauã",
        idade: 20 ,
        peso: "67kg"
    },
]

let pacientesNames = []
let pacientesIdade = []
let pacientePesos = []

for (let paciente of pacientes) {
    pacientesNames.push(paciente.name)
    pacientesIdade.push(paciente.idade)
    pacientePesos.push(paciente.peso)
}

alert(`Ola seu nome é ${pacientesNames[0]}.
Sua idade é de ${pacientesIdade[0]}.
Seu peso é de ${pacientePesos[0]}`)

alert(`Ola seu nome é ${pacientesNames[1]}.
Sua idade é de ${pacientesIdade[1]}.
Seu peso é de ${pacientePesos[1]}`)

alert(`Ola seu nome é ${pacientesNames[2]}.
Sua idade é de ${pacientesIdade[2]}.
Seu peso é de ${pacientePesos[2]}`)
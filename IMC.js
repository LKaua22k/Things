const pacientes = [
    {
        name: "SOl",
        idade: 19,
        peso: 90,
        altura:180,
    },
    {
        name: "Pablo",
        idade: 20,
        peso: 76,
        altura:180,
    },
    {
        name:"kauã",
        idade: 20 ,
        peso: 80,
        altura:180,
    },
]

function calc (altura , peso){
    return (peso / ((altura / 100) ** 2)).toFixed(2)
}

function PrintIMC (paciente){
    return `O Paciente ${paciente.name} Possui o IMC de 
    ${calc(paciente.altura,paciente.peso)}`
}

for (const paciente of pacientes) {
    let msg = PrintIMC(paciente)
    alert(msg)
}
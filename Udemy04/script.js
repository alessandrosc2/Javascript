const alunos = ['Joao', 'Maria', 'Jose', 'Paula']

//alterando índice dentro do Array
alunos[0] = 'Fabio'

console.log(alunos)

// buscando string dentro do Array
console.log(alunos[2])

// incluindo elemento dentro do Array
alunos[4] = 'Alex'
console.log(alunos)

//Mostrando tamanho do Array
console.log(alunos.length)

// Adicionando elemento no final do Array
alunos.push('Luiza')
//console.log(alunos.length) = 'Hugo' 
console.log(alunos)

// Adicionando no índice [0] no inicio
alunos.unshift('Tadeu')
console.log(alunos)

// Excluindo último elemento do Array
alunos.pop('Luiza')
console.log(alunos)

// Excluindo do começo
alunos.shift()
console.log(alunos)

// Mostrar elementos do Array 
console.log(alunos.slice(0, -1))
console.log(alunos.slice(0, 2)) // mostra até um elemento antes...



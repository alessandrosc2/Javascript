let num = 152.8496415221655
let num1 = 15
let num2 = 10.5
// Para formatar número com duas casas decimais

console.log(num.toFixed(2))

// aqui soma normal
console.log(num1 + num2)

// aqui vou concatenar num1 com num2
console.log(num1.toString() + num2)

//aqui vou mostrar como o número digitado fica em binário
console.log(num2.toString(2))

// aqui para saber se o número é inteiro, retorna true ou false
console.log(Number.isInteger(num1))
console.log(Number.isInteger(num2))

// consertar bug do javascript que parece ler apenas os binários

let numb2 = 0.1
let numb = 0.7
numb += numb2
numb += numb2
numb += numb2

numb = parseFloat(numb.toFixed(2)) // pode-se usar Number também no lugar do parseFloat

console.log(numb)

// arredondando números para cima ou para baixo
let arredon = 9.83409558

console.log(Math.floor(arredon))  // para baixo

console.log(Math.ceil(arredon)) // para cima

console.log(Math.round(arredon)) // arredonda para o mais próximo, ex: .50 acima 

// pegando maior número e menor número

console.log(Math.max(3, 5, 50, 140, 420, 2300, 941))

console.log(Math.min(3, 5, 50, 140, 420, 2300, 941))

// gerando números aleatórios

const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // gerando entre 1 e 10
console.log(aleatorio)

// pegando raiz quadrada de qualquer número

let raiz = 16 // só precisa trocar aqui
console.log(raiz ** 0.5)


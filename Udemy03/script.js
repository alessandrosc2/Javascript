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


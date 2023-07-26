var num = [2, 9, 5,7]
num.push(6)
num[5] = 4
num.sort()
console.log(num)
console.log(num[3])
console.log(`Nosso número é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O Primeiro número do vetor é ${num[0]}`)

for (pos = 0;pos < num.length;pos++)
console.log(num[pos])
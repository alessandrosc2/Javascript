function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(8, 3))

// =0 dentro do parametro mostra zero caso não seja chamado o parametro.
function soma2(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma2(8, 9))

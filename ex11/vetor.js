var valores = [2, 9, 5,7]

//Ordenar com sort()
valores.sort()

//Mostrar valores
console.log(valores)

/* for (pos = 0;pos < valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
//Código simplificado
for(var pos in valores){
    console.log(valores[pos])
    
}
*/
//Código simplificado com comentário
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}


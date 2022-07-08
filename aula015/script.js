let num = [1, 6, 7, 4, 9]

num[5] = 3

num.push(2)
    
num.sort()
/*
console.log(`Nosso vetor é o ${num}`)

console.log(`Agora o vetor tem o valor ${num}`)

console.log(`Vou acessar apenas o terceiro número do meu vetor, e esse número é ${num[2]}`)

console.log(`Agora adicionei mais um valor para meu vetor usando o .push, o valor do meu vetor agora é ${num}, e o valor adicionado foi ${num[6]}`)

console.log(`E esse aqui é o tamanho do meu vetor ${num.length}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


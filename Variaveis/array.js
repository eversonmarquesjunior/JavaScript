var num = [8, 4, 7]
//num[4] = 5                        //cria a posição 4 e adiciona o valor 5
num.push(3, 5)                      //cria a última posição e adiciona o valor 10 
//num.sort()                        //ordena os valores do array

console.log(num)
console.log(`Tamanho do vetor: ${+num.length} posições. \n`)       //mostra o tamanho do array
console.log(`Valor na primeira posição: ${num[0]} \n`)

console.log(`O valor 5 está no vetor: ${num.indexOf(5)} \n`)       //pesquisa valor dentro do vetor

for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}

for(var pos in num){            //para cada posição mostrar um vetor num
    console.log(num[pos])
}
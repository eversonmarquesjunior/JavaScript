function parimp(n){
    if(n%2==0){
        return "PAR"
    }
    else{
        return "IMPAR"
    }
}

console.log(parimp(67))

function mult(n1=0, n2=0){
    return n1 * n2
}

console.log("Resultado da multiplicação: " +mult(5, 9))
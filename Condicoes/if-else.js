function conferirMulta(){
    var cx1 = document.querySelector("input#txtvel")
    var sit = document.getElementById("situacao")

    var vel = Number(cx1.value)

    if(vel > 60){
        sit.innerHTML = "MULTADO! Você foi multado em R$500."
    }
    else{
        sit.innerHTML = "PARABÉNS! Você não foi multado."
    }
}

function conferirIdade(){
    var cx2 = document.querySelector("input#txtidade")
    var vot = document.getElementById("votacao")
    var a = document.getElementById("anos")

    var idade = Number(cx2.value)
    a.innerHTML = `Você tem ${idade} anos`

    if(idade == ""){
        a.innerHTML = "Resposta em branco"
    }

    if(idade == ""){
        vot.innerHTML = "Digite sua idade"
    }
    else if(idade < 16){
        vot.innerHTML = "Não vota"
    }
    else if(idade < 18 || idade >= 67){
        vot.innerHTML = "Voto opcional"
    }
    else{
        vot.innerHTML = "Voto obrigatório"
    }
}
 
    
    



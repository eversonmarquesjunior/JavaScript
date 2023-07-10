function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19      

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12){
        img.src = "imagens/manha.jpg"
        document.body.style.background = "#ffb969"
    }
    else if(hora >= 12 && hora <= 18){
        img.src = "imagens/tarde.jpg"
        document.body.style.background = "#87c9ff"
    }
    else{
        img.src = "imagens/noite.jpg"
        document.body.style.background = "#153063"
    }
}
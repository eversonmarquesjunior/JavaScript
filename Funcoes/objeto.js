var amigo = {nome: "Junior", 
sobrenome: "Marques", 
peso: 85,
engordar(p=0){
    console.log("Engordou")
    this.peso += p
}}

amigo.engordar(3)
console.log(`O amigo ${amigo.nome} ${amigo.sobrenome} pesa ${amigo.peso}KG`)

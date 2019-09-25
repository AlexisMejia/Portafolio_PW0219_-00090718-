function guessNumber(){
    let array=[];
    let numero=parseInt(prompt("Ingrese numero entre [1,20]"))
    for(let i=0; i< array.length; i++){
    array.push(math.floor(math.random()*20)+1);

    }
    if(array.indexOf(numero)!=-1){
        console.log("gano")

    } else(console.log("perdio"))

}
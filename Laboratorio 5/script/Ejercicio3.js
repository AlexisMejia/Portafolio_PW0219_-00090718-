function findNumber(numero,array){
    let contador = 0;
    for(let i= 0; i<array.length; i++){
        if(array[i] == numero){
            contador++;
        }else{
            contador;
        }
    }
    console.log(`cantida de repeticiones: ${contador}`);
}
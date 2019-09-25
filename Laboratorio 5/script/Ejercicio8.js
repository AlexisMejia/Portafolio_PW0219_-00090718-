
function binario(numero){
    let arreglo=[];
    while(numero >0){
        if(numero %2 === 1){
        arreglo.splice(0,0,1);
        numero= (numero-1)/2;
        }else{
            arreglo.splice(0,0,0);
            numero/=2;
        }
    }
    arreglo=arreglo.join("");
    console.log(arreglo);
}
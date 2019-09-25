let palabra;
function palindromo(palabra){

    for(let i=0; i < palabra.length/2 ; i++){
        if(palabra[i] == palabra[palabra.length-1 -i]){
            return true;
        }
    }
    return false;
}
console.log(palindromo(`oso`));
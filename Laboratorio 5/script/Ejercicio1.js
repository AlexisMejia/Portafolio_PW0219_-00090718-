function type(arreglo){
    let nowString=0;
    let nowString=0;
    let nowNumero=0;
    let nowObjeto=0;
    let nowBoolean=0;

    list.forEach(element => {
            console.log(typeof element)
            switch(typeof element){

                case'boolean': nowBoolean++;
                break;

                case 'number': nowNumero++;
                    break;

                case 'object': nowObjeto++;
                    break;

                case 'string': nowString++;
                    break;
            }
    
        });

        console.log(`Resultados: Booleano: ${nowBoolean} ,Numoero: ${nowNumero}, Objeto: ${nowObjeto} ,String ${nowString}`)
}
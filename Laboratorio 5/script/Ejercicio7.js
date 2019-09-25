

function fibonnachi(n){
    let a=1, b=0;
    console.log(b +"");
    console.log(a + "")
    for(let i=3; i<= n; i++){
        let temp= a +b;
        b=a;
        a=temp;
        console.log(temp + "");
    }
    if(n<=2){
        return 1;
    }
    return b+a;
}
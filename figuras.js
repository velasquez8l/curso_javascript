
function area_cuad(lc){
    return lc**2;
}

function per_cuad(lc){
    return lc*4;
}

function altura_tria_iso(a,b,c){

    var altura;
    if (a===c && b!==a && b!==c) {
        var base=b;
        var l=a;

    } else if(b===c && a!==b && a!==c) {
        var base=a;
        var l=b;
    }else if(b===a && c!==b && a!==c){
        var base=c;
        var l=a;
    }else{
        return "el triangulo no es isosceles, vuelve"+
        " a ingresar los datos"
    }

    altura=Math.sqrt((l**2)-((base/2)**2))
    return altura
}
    

// var lc =5;
// console.log("los lados del cuadrado miden: "+lc)

// var per_cuad=lc*4;
// console.log("el perimetro del cuadrado es: "+per_cuad)

// var area_cuad=lc*lc;
// console.log("el area del cuadrado es: "+area_cuad)


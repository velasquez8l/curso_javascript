

// funciones para calculo de area y perimetro 
function area_cuad(lc){
    return lc**2;
}

function per_cuad(lc){
    return lc*4;
}

function area_tri(a,b,c){

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
        " a ingresar los datos";
    }

    altura=Math.sqrt((l**2)-((base/2)**2))
    return (altura *base)/2;
}

function per_tri(a,b,c){
    var altura;
    if (a===c && b!==a && b!==c) {
        var base=b.t;
        var l1=a;
        var l2=c;

    } else if(b===c && a!==b && a!==c) {
        var base=a;
        var l1=b;
        var l2=c;
    }else if(b===a && c!==b && a!==c){
        var base=c;
        var l1=a;
        var l2=b;
    }else{
        return "el triangulo no es isosceles, vuelve"+
        " a ingresar los datos";
    }
    perimetro= Number(base) +Number(l1) + Number(l2);

    return perimetro;
}


function area_circ(r){
    return Math.PI*r**2;
}

function per_circ(r){
    return 2*Math.PI*r;
}



// funciones para HTML
function boton_per_cuad(){
    var input=document.getElementById("input_cuad").value;

    var perimetro=per_cuad(input);

    alert(perimetro);
}


function boton_area_cuad(){
    
    var input=document.getElementById("input_cuad").value;

    var area=area_cuad(input);

    alert(area);
}

function boton_per_tri(){
    var input1=document.getElementById("input_base").value;
    var input2=document.getElementById("input_lado2").value;
    var input3=document.getElementById("input_lado3").value;

    var perimetro=per_tri(input1,input2,input3);

    alert(perimetro);
}


function boton_area_tri(){
    
    var input1=document.getElementById("input_base").value;
    var input2=document.getElementById("input_lado2").value;
    var input3=document.getElementById("input_lado3").value;

    var area=area_tri(input1,input2,input3);

    alert(area);
}

function boton_per_circ(){
    var input=document.getElementById("input_circ").value;

    var perimetro=per_circ(input);

    alert(perimetro);
}


function boton_area_circ(){
    
    var input=document.getElementById("input_circ").value;

    var area=area_circ(input);

    alert(area);
}
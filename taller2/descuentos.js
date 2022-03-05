
// funcion de calculo de descuento
function precios(precio,descuento){
    return precio*(1-(descuento/100));
}

// funcion para HTML

function des(){
    var precio=document.getElementById("precio").value;
    var descuento=document.getElementById("descuento").value;
    var cupones =document.getElementById("cupon").value;

    var valor_cupon={"hola":10,"hola1":20,"hola2":50};

    
    if (typeof descuento==="undefined" && typeof cupones!=="undefined"){
        for (var i in valor_cupon ){
            if(cupones===i){
                var descuento=valor_cupon[cupones];
            }
        }
        
        var res = precios(precio,descuento);
        document.getElementById("resultado").innerHTML="el precio nuevo "+
        `es de ${res}`;

    }else if (typeof descuento!=="undefined" && typeof cupones==="undefined") {
        var res = precios(precio,descuento);
        document.getElementById("resultado").innerHTML="el precio nuevo "+
        `es de ${res}`;
    }
}


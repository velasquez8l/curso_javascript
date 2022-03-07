
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

    
    if (descuento==="" &&  cupones!==""){
        for (var i in valor_cupon ){
            if(cupones===i){
                console.log( i)
                var descuento=valor_cupon[cupones];
                var res = precios(precio,descuento);
                document.getElementById("resultado").innerHTML="el precio nuevo "+
                `es de ${res}`;
                break;
            }else {
                console.log( cupones)
                document.getElementById("resultado").innerHTML=`el cupon no 
                es valido, ingrese un cupon valido. Usted ingreso el cupon ${cupones}`;
            }
        }
        
        

    }else if ( descuento!=="" &&  cupones==="") {
        var res = precios(precio,descuento);
        document.getElementById("resultado").innerHTML="el precio nuevo "+
        `es de ${res}`;

    }else if ( descuento!=="" &&  cupones!==""){
        document.getElementById("resultado").innerHTML=`no puede ingresar un cupon
         y un descuento al mismo tiempo, 
          debe decidir uno de los dos `
    }else{
        document.getElementById("resultado").innerHTML=`ingrese valores
         en los campos, no los deje vacios`
    }
}


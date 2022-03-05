
// funcion de calculo de descuento
function precios(precio,descuento){
    return precio*(1-(descuento/100));
}

// funcion para HTML

function des(){
    var precio=document.getElementById("precio").value;
    var descuento=document.getElementById("descuento").value;

    var res = precios(precio,descuento);
    document.getElementById("resultado").innerHTML="el precio nuevo "+
    `es de ${res}`;

}
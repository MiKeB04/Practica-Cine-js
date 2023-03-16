let hora=function(){
    let horario=document.getElementById("horario").value;
    localStorage.setItem('horario',JSON.stringify(horario));
}

let pel=function(){
    var peliculas=document.getElementById("peliculas").value;
    localStorage.setItem('peliculas',JSON.stringify(peliculas));
}

function generarP(){
    document.getElementById('generarP').addEventListener('click',function(){generarPersonas()})
 }
 
//Cantidad de personas
let personas=document.getElementById('personas').innerHTML;
let generarPersonas=function(){
    let num1=document.getElementById("n-personas").value;
    if(num1>0){
        for(let i=0; i<num1;i++){
            personas+=estructuraPersonas(i);
        }
        document.getElementById("personas").innerHTML=personas;
        //mostrar los botones de agregar y generar ticket
        document.getElementById("agregarP").classList.add('mostrar-agregarP');
        //quitar la funcionalidad de conceptos
        document.getElementById("titulo-personas").classList.add=('quitar-titulo-personas');
    }
}
//Cantidad de personas
function estructuraPersonas(){
return `<div>
<label>Adultos:
<select type="number" id="cantA" onchange="numeroDePersonas();"><option value="a">seleccione los adultos</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>
</div>
`;
}

 let numeroDePersonas=function(){
    let niños = document.getElementById("cantA").value;

    let cantAdultos=document.getElementById("cantA").value;
    localStorage.setItem('cantA',JSON.stringify(cantAdultos));
    //let inputsDiv = document.getElementById("cajasNiños");
    //inputsDiv.innerHTML = "";
    //if(num1>0){
        //for(let i=0; i<num1;i++){
            //personas+=estructuraPersonas(i);

            /*if(niños==A1){
                document.getElementById("cajasNiños").innerHTML = '<div><label >Niños:<select type="number" id="cantM"><option value="M1">1</option><option value="M2">2</option><option value="M3">3</option><option value="M4">4</option></select></div>';
            }*/
            switch(niños) {
                case "1":
                    document.getElementById("cajasNiños").innerHTML = '<div><label >Niños:<select type="number" id="cantM" onchange="cantNiños();"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div>';
                    break;
                case "2":
                    document.getElementById("cajasNiños").innerHTML = '<div><label >Niños:<select type="number" id="cantM" onchange="cantNiños();"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>';
                    break;
                case "3":
                    document.getElementById("cajasNiños").innerHTML = '<div><label >Niños:<select type="number" id="cantM" onchange="cantNiños();"><option value="1">1</option><option value="2">2</option></select></div>';
                    break;
                case "4":
                    document.getElementById("cajasNiños").innerHTML = '<div><label >Niños:<select type="number" onchange="cantNiños();"><option value="M1">0</option></div>';
                    break;
            }
        }

let cantNiños=function(){
    let cantNiños=document.getElementById("cantM").value;
    localStorage.setItem('cantM',JSON.stringify(cantNiños));
}

document.getElementById('agregarP').addEventListener('click',function(){agregarPersonas()});
let agregarPersonas=function(){
    let totalPersonas=document.getElementsByTagName('cantidad1');
    let persona=document.createElement('div');
    persona.innerHTML=estructuraPersonas('totalPersonas.length');
    document.getElementById('personas').appendChild(persona);
}
/**************************************************************************************************/
/*Caja Compra*/

function generarC(){
    document.getElementById('generarC').addEventListener('click',function(){generarCompras()})
 }
 

//Cantidad de personas
let compras=document.getElementById('compras').innerHTML;

let generarCompras=function(){

    let num2=document.getElementById("n-compras").value;
    if(num2>0){
        for(let i=0; i<num2;i++){
            compras+=estructuraCompras(i);
        }
        document.getElementById("compras").innerHTML=compras;
        //mostrar los botones de agregar y generar ticket
        document.getElementById("agregarC").classList.add('mostrar-agregarC');
        document.getElementById("ticket").classList.add('mostrar-ticket');
        //quitar la funcionalidad de conceptos
        document.getElementById("titulo-compras").classList.add=('quitar-titulo-compras');
    }
}
//Cantidad de personas
function estructuraCompras(num2){
    return `<hr>
    <div>
    <label>Boletos:
    <br>
    <input type="number" name="cantidad" id="c${num2}" value="" onblur="CalcularImporte(${num2});"/></label>
    <label>Valor Unitario:
    <br>
    <input type="number" name="valorUnitario"  id="v${num2}" value="" step="0.01" onblur="CalcularImporte(${num2});" /></label>
    <br>

    <label>Importe:
    <br>
    <input type="number" name="importe"  id="i${num2}" value="" step="0.01"/></label>
    <label>Nombre:
    <br>
    <input type="text" name="nombre" placeholder="Nombre" /></label>
    <br>
    
    <label>Apellidos:
    <br>
    <input type="text" name="apellidos" placeholder="Apallidos" /></label>
    <label>Correro electronico:
    <br>
    <input type="text" name="correo" placeholder="Correo elctronico" /></label>
    <br>

    <label>Numero de tarjeta Club Cine:
    <br>
    <input type="number" name="clubCine" placeholder="numero de membresia" /></label>
    <label>Metodo de pago:
    <br>
    <select type="number" name="metP" onchange=""><option value="Tarjeta credito/debito" id="metP">Tarjeta credito/debito</option><option value="Club cine" id="metP">Club cine</option><option value="Paypal" id="metP">Paypal</option></select>
    </div>
    <br>`;
    }

document.getElementById('agregarC').addEventListener('click',function(){agregarCompras()});
document.getElementById('ticket').addEventListener('click',function(){generarTicket()});
let agregarCompras=function(){
    let totalCompras=document.getElementsByTagName('cantidad2');
    let compra=document.createElement('div');
    compra.innerHTML=estructuraCompras('totalCompras.length');
    document.getElementById('compras').appendChild(compra);
}

var CalcularImporte=function(x){
    document.getElementById('i'+x).value=document.getElementById('c'+x).value*document.getElementById('v'+x).value;
     calculosAdicionales();
    }

let calculosAdicionales=function(){
    let importes=document.getElementsByName('importe');
    let j=subtotal=0;
    while(importes.length>j){
    subtotal+=parseFloat(importes[j].value);
    j++

    }
    let iva=subtotal *.16;
    let total=subtotal + iva;
    document.getElementById('subTotal').innerHTML=subtotal;
    document.getElementById('iva').innerHTML=iva;
    document.getElementById('total').innerHTML=total;

    localStorage.setItem('subTotal',JSON.stringify(subtotal));
    localStorage.setItem('iva',JSON.stringify(iva));
    localStorage.setItem('total',JSON.stringify(total));

}

let generarTicket=function(){
    let cantidadAr=document.getElementsByName('cantidad');
    let ValorUnitarioAr=document.getElementsByName('valorUnitario');
    let importeAr=document.getElementsByName('importe');
    let nombreAr=document.getElementsByName('nombre');
    let apellidoAr=document.getElementsByName('apellidos');
    let correoAr=document.getElementsByName('correo');
    let clubCineAr=document.getElementsByName('clubCine');
    let metodoAr=document.getElementsByName('metP');
    let ticket=[];
    
    

    for( var i=0;i<cantidadAr.length;i++){
        var objCantidad=cantidadAr[i].value;
        var objValorUnitario=ValorUnitarioAr[i].value;
        var objImporte=importeAr[i].value;
        var objNombre=nombreAr[i].value;
        var objApellido=apellidoAr[i].value;
        var objCorreo=correoAr[i].value;
        var objClubCine=clubCineAr[i].value;
        var objMetodo=metodoAr[i].value;
        ticket[i]={
            cantidad:objCantidad,
            valorUnitario:objValorUnitario,
            importe:objImporte,
            nombre:objNombre,
            apellido:objApellido,
            correo:objCorreo,
            clubCine:objClubCine,
            metP:objMetodo,
        };
    }

/**************************************************************************************************/
/*JSON*/
        //USAR JSON Y OTRA PAGINA
        localStorage.setItem('ticket',JSON.stringify(ticket));
        console.table(JSON.stringify(ticket));
        window.open("ticket.html", width="800", heigth="500");
      

}

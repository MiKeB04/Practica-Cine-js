let conceptos=JSON.parse(localStorage.getItem('ticket'));
let sub=JSON.parse(localStorage.getItem('subTotal'));
let iva=JSON.parse(localStorage.getItem('iva'));
let total=JSON.parse(localStorage.getItem('total'));

let peliculas=JSON.parse(localStorage.getItem('peliculas'));
let hora=JSON.parse(localStorage.getItem('horario'));

let cantidadadultos=JSON.parse(localStorage.getItem('cantA'));

let cantidadniños=JSON.parse(localStorage.getItem('cantM'));

(
    function(){
        let con="";
        for(var i=0; i<conceptos.length;i++){
            con+='<div class="container mt-3"><h2>Mostrar datos factura</h2><table class="table table-striped"><thead><tr><th>cantidad</th><th>Valor unitario</th><th>Importe</th><th>Nombre</th><th>Apellidos</th><th>Correo</th><th>Numero de Membresia</th><th>Metodo de pago</th></tr></thead><tbody><tr><td name="cantidad" id="cantidad">'+conceptos[i].cantidad+'</td><td name="valorUnitario" id="valorUnitario">'+conceptos[i].valorUnitario+'</td><td name="importe" id="importe">'+conceptos[i].importe+'</td><td name="nombre" id="nombre">'+conceptos[i].nombre+'</td><td name="apellido" id="apellido">'+conceptos[i].apellido+'</td><td name="correo" id="correo">'+conceptos[i].correo+'</td><td name="clubCine" id="clubCine">'+conceptos[i].clubCine+'</td><td name="metP" id="metP">'+conceptos[i].metP+'</td></tr></tbody></table></div>';
        }         

        document.getElementById('conceptos').innerHTML=con;
        document.getElementById('subtotal').innerHTML=sub;
        document.getElementById('iva').innerHTML=iva;
        document.getElementById('total').innerHTML=total;
        
        document.getElementById('peliculas').innerHTML=peliculas; 
        document.getElementById('horario').innerHTML=hora; 

        document.getElementById('adultos').innerHTML=cantidadadultos; 
        document.getElementById('niños').innerHTML=cantidadniños;

    }
)();

//<label> descripcion <div name="descripcion" id="descripcion"><div></div>'+conceptos[i].descripcion+'</div></label>
//<label> Pelicula <div name="peliculas" id="peliculas">'+conceptos[i].peliculas+'</div></label> <br></br>

//'<div> <label> Cantidad <div name="cantidad" id="cantidad">'+conceptos[i].cantidad+'</div></label><label> valor unitario <div name="valorUnitario" id="valorUnitario"><div></div>'+conceptos[i].valorUnitario+'</div></label><label> importe <div name="importe" id="importe"><div></div>'+conceptos[i].importe+'</div></label><label> Nombre <div name="nombre" id="nombre"><div></div>'+conceptos[i].nombre+'</div></label><label> Apellido <div name="apellido" id="apellido"><div></div>'+conceptos[i].apellido+'</div></label><label> Correo <div name="correo" id="correo"><div></div>'+conceptos[i].correo+'</div></label><label> Numero de mebresia <div name="clubCine" id="clubCine"><div></div>'+conceptos[i].clubCine+'</div></label><label> Metodo de pago <div name="metP" id="metP"><div></div>'+conceptos[i].metP+'</div></label></div>';

    
//'<div class="container mt-3"><h2>Mostrar datos factura</h2><table class="table table-striped"><thead><tr><th>cantidad</th><th>Valor unitario</th><th>Importe</th><th>Nombre</th><th>Apellidos</th><th>Correo</th><th>Numero de Membresia</th><th>Metodo de pago</th></tr></thead><tbody><tr><td name="cantidad" id="cantidad">'+conceptos[i].cantidad+'</td><td name="valorUnitario" id="valorUnitario">'+conceptos[i].valorUnitario+'</td><td name="importe" id="importe">'+conceptos[i].importe+'</td><td name="nombre" id="nombre">'+conceptos[i].nombre+'</td><td name="apellido" id="apellido">'+conceptos[i].apellido+'</td><td name="correo" id="correo">'+conceptos[i].correo+'</td><td name="clubCine" id="clubCine">'+conceptos[i].clubCine+'</td><td name="metP" id="metP">'+conceptos[i].metP+'</td></tr></tbody></table></div>';
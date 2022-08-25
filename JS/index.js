let comanda = "";
let ingreseNombre;

ingreseNombre = prompt(`Ingrese su nombre`)
alert(`@@@@  BIENVENIDO AL SERVICIO ${ingreseNombre} @@@@`)

do{
    listaPedidos = prompt("Ingresar el pedido");
    if(listaPedidos ===""){
        alert(`No ingresaste ningun pedido.`);
        listaPedidos = prompt(`Ingrese su pedido.`);
    }
    else if( listaPedidos !== ""){
        
        comanda = comanda+ " \n "+ listaPedidos;
    }

}while(confirm(`Desear continuar`));

alert(`Su pedido son los siguientes: ${comanda}`);
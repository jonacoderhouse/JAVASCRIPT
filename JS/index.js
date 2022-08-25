let comanda = "";

const nombreMozo = () =>{
let ingreseNombre = prompt(`Ingrese su nombre`)
alert(`@@@@  BIENVENIDO AL SERVICIO ${ingreseNombre} @@@@`)
pedidos();
comandaFinal();
}

const pedidos = () => {
do{
    listaPedidos = prompt("Ingresar el pedido");
    if(listaPedidos ===""){
        alert(`No ingresaste ningun pedido.`);
        listaPedidos = prompt(`Ingrese su pedido.`);
    }
    else if( listaPedidos !== ""){
        
        comanda = comanda+ " \n "+ listaPedidos;
        alert(`su comanda hasta ahora es: \n ${comanda}`)
    }

}while(confirm(`Desear continuar`));
}

const comandaFinal = () => {
alert(`Su pedido son los siguientes: ${comanda}.`);
}

nombreMozo();
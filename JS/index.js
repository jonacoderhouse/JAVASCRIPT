//@@@@@@@@@@@@ APLICACION JONY @@@@@@@@@@@

/*Realice un ejercicio aplicando Bucle do while con el fin de lograr una aplicacion que te permita
realizar una lista de pedidos para un mozo y que sea mas rapido para mejorar el tiempo de pedido en las mesas
y a su vez que la comanda llegue directamente a la cocina, 
de todos modos solo pude hacer el ejercio esta mas que claro
que me falta mucho para desarrollar una apliacion asi..*/

//@@@@@@ OBJETO @@@@@@@@@@@@@@@
const restoBar = {
    razonSocial: "BONNIE UMA MARGOT",
    cuit: 20 - 32891150 - 9,
    domicilio: "OTAMENDI 386",
    cantidadEmpleados: 10,
}
const datos = []; // ARRYA PARA OBJETO RESTOBAR
datos.push(restoBar);
console.log(datos);


//@@@@@@@@@@@@@@@@@@@@@@@ CLASS CONSTRUCTORA @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
class DatosEmpleado {
    constructor(nombre, apellido, idEmpleando) {
        this.nombre = nombre
        this.apellido = apellido
        this.idEmpleando = idEmpleando
    } mensaje() {
        alert(`bienvenido al servicio ${this.nombre} ${this.apellido} tu id es: ${this.idEmpleando} 
                @@@@@@@ VAMOS A COMENZAR @@@@@@@@`)
    }
}

class Comandas {
    constructor(menu, bebida, postre,) {
        this.menu = menu;
        this.bebida = bebida;
        this.postre = postre
    } comandas() {
        alert(`ingreso un Menu de ${this.menu} Bebida: ${this.bebida} y Postre ${this.postre}`)
    }
}


//@@@@@@@@@@@@@@@@@@@ FUNCION FLECHA PARA SOLICITAR DATOS@@@@@@@@@@@@@@@@@@2

const datosEmpleados = [];    // ARRAY PARA GUARDAR DATOS DE LA CANTIDAD DE EMPLEADOS QUE SE REGISTRA

const datosMozo = () => {
    let nombreMozo = prompt("ingresar nombre mozo");
    if (nombreMozo === "") {
        alert(`No ingresaste ningun nombre`);
        nombreMozo = prompt("ingresar nombre correcto")
    }
    let apellidoMozo = prompt("ingresar apellido")
    if (apellidoMozo === "") {
        alert(`No ingresaste ningun nombre`);
        apellidoMozo = prompt("ingresar nombre correcto")
    }
    let idMozo = Number(prompt("Ingrese su id"))
    if (idMozo === "" || idMozo !== (idMozo)) {
        alert(`ingresar id`)
        idMozo = Number(prompt("Ingrese su id"))
    }

    const infoEmpleado = new DatosEmpleado(nombreMozo, apellidoMozo, idMozo)
    datosEmpleados.push(infoEmpleado);
    infoEmpleado.mensaje();
    console.log(datosEmpleados);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ FUNCION PARA REGISTRO DE COMANDAS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
let canComandas = 0;
let listapedido;
let bebidas;
let postres;
const arrayGourmet = [];// ARRAY DE OBJETOS


const registroPedidos = () => {// FUNCION FLECHA
    do {
        menu = prompt("ingrese el menu")
        if (menu === "") {
            alert(`No ingreso el menu`)
            menu = prompt("igresar menu")
        }

        bebidas = prompt("ingresar bebidas")
        if (listapedido === "") {
            alert(`No ingreso el menu`)
            listapedido = prompt("igresar menu")

        }

        postres = prompt("ingrese el postre")
        if (listapedido === "") {
            alert(`No ingreso el postre`)
            postres = prompt("igresar menu")
        }

        const comanda = new Comandas(menu, bebidas, postres); // const comanda es el objeto creado.
        arrayGourmet.push(comanda);//ARRAY
        console.log(arrayGourmet);
        comanda.comandas();
    } while (confirm("Desea continuar"));
    canComandas++
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@ FUNCION PARA SABER CANTIDAD COMANDAS@@@@@@@@@@@@@@@@@@@@@@@@@@

const cantComandas = () => {
    alert(`Usted ingreso un total de ${canComandas} comandas`);

}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PANTALLA DE INICIO@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


do {
    opciones = Number(prompt(`#@#@#BIENVENIDO AL SERVICIO DE ${restoBar.razonSocial} #@#@#@
    Opcion 1- Ingresar nombre Mozo.
    Opcion 2- Ingresar comandas.
    Opcion 3- Cantidad comandas.

    $$$$$$ PRESIEONE ENTER PARA FINALIZAR $$$$$$`));

    if (opciones === 1) {
        datosMozo();
    } else if (opciones === 2) {
        registroPedidos();
    } else if (opciones === 3) {
        cantComandas();
    }
} while (parseInt(opciones));
alert(`Terminaste el dia con ${canComandas} comandas.
gracias por tu servicio @@@@${restoBar.razonSocial}@@@@`)

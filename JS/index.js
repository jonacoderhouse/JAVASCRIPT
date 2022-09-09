
//-------OBJETO LITERAL------
const restoBar = {
    nombreFantasia: "RestoCAn",
    razonSocial: "BONNIE UMA MARGOT",
    cuit: "20 - 32891150 - 9",
    domicilio: "OTAMENDI 386",
    cantidadEmpleados: 10,
    habilitado: "GBA habilitacion numero 000000000",
    socios: [
        {
            nombre: "Jonathan Giano",
            idSocio: 34567
        },
        {
            nombre: "Bonnie Margot Giano",
            idSocio: 34456
        },
        {
            nombre: "Uma Rius",
            idSocio: 34456
        }
    ]
}


//---------------------NODOS--------------------
const msjDespedida = document.querySelector(`#textoFinal`)
const msj = document.querySelector('#textoFinalUno')
const msjUno = document.querySelector('#textoFinalDos')
const msjDos = document.querySelector('#textoFinalTres')
const msjTres = document.querySelector('#textoFinalFour')
const javas = document.querySelector(`#btn__javas`)
const java = document.querySelector(`#btn__java`)
const cantindad = document.querySelector(`#btn__cant`)
const rendir = document.querySelector(`#btn__rendir`)
const despedida = document.querySelector(`#btn__despedida`)


//-------------------CLASS CONSTRUCTOR-------------


class DatosEmpleado {
    constructor(nombre, apellido, idEmpleando) {
        this.nombre = nombre
        this.apellido = apellido
        this.idEmpleando = idEmpleando
    } mensaje() {
        
        msj.innerHTML = `<p> Bienvenido al servicio ${this.nombre} ${this.apellido} \n Tu id es: ${this.idEmpleando} 
        @@@@@@@ VAMOS A COMENZAR @@@@@@@@ </p>`;
    }
}

class Comandas {
    constructor(opcion) {
        this.id = opcion.id
        this.menu = opcion.menu
        this.bebida = opcion.bebida
        this.precio = opcion.precio
    }
}

//----------------FUNCION FLECHA PARA SOLICITAR DATOS------------------

const datosEmpleados = [];// ARRAY PARA GUARDAR DATOS DE LA CANTIDAD DE EMPLEADOS QUE SE REGISTRA

const loguearEmpleado = (nombre, apellido, id) => {
    const infoEmpleado = new DatosEmpleado(nombre, apellido, id)
    datosEmpleados.push(infoEmpleado);
    infoEmpleado.mensaje();
    console.log(datosEmpleados);
}
javas.onclick =()=>{datosMozo()}

const datosMozo = () => {
    let nombreMozo = prompt("Ingresar nombre mozo");
    if (nombreMozo === "") {
        alert(`No ingresaste ningun nombre`);
        nombreMozo = prompt("Ingresar nombre correcto")
    }
    let apellidoMozo = prompt("ingresar apellido")
    if (apellidoMozo === "") {
        alert(`No ingresaste ningun nombre`);
        apellidoMozo = prompt("Ingresar nombre correcto")
    }
    let idMozo = Number(prompt("Ingrese su id"))
    if (idMozo === "" || idMozo !== (idMozo)) {
        alert(`ingresar id`)
        idMozo = Number(prompt("Ingrese su id"))
    }
    loguearEmpleado(nombreMozo, apellidoMozo, idMozo)
}

//--------------FUNCION PARA REGISTRO DE COMANDAS---------------------------------
let canComandas = 0;
const arrayGourmet = [];// ARRAY 
const fecha = new Date;

const menuDelDia = [
    {
        id: 1,
        menu: 'Milanesa con Pure',
        bebida: `coca cola`,
        precio: 1200
    },

    {
        id: 2,
        menu: 'Mila napo con fritas',
        bebida: `coca cola`,
        precio: 1200
    },

    {
        id: 3,
        menu: 'bife de chorizo con papas epanola',
        bebida: `coca cola`,
        precio: 1120
    },

    {
        id: 4,
        menu: `Ravioles con salsa rosa`,
        bebida: `coca cola`,
        precio: 800

    },

    {
        id: 5,
        menu: 'Tallarines con salsa portugueza',
        bebida: `coca cola`,
        precio: 900
    },

    {
        id: 6,
        menu: `Sorretinos salsa mixta`,
        bebida: `coca cola`,
        precio: 950
    },

    {
        id: 7,
        menu: `Matambre a la pizza`,
        bebida: `coca cola`,
        precio: 1250
    }
]

java.onclick =()=>{registroPedidos()}

const registroPedidos = () => {
    do {
        ingresaMenu = Number(prompt(`Ingresar opciones de menu
        1-Milanesa con pure
        2-MIlanesa Napo con fritas
        3-Bife de chorizo con papas espanolas
        4-Ravioles con salsa rosa
        5-Tallarines con salsa portugueza
        6-Sorretinos salsa mixta
        7-Matambre a la pizza
        `))
        nuevaComanda = menuDelDia.find(e => e.id === Number(ingresaMenu))
        console.log(nuevaComanda)

        arrayGourmet.push(new Comandas(nuevaComanda))
        console.log(arrayGourmet)

        precioPagar = arrayGourmet.map(e => e.precio)
        console.log(precioPagar)

        totalRendir= precioPagar.reduce((ac,total) => ac +total, 0)
        console.log(`valor total a pagar es ${totalRendir}`);
        
    } while (confirm("Desea continuar"));
    canComandas++

    for (let i = 1; i <= arrayGourmet.length; i++) {
        alert(`El menu ${i} fue ${arrayGourmet[i - 1].menu} 
        \n Fecha y hora: ${fecha.toLocaleString()}
        `)}

}


//-----------------FUNCION PARA SABER CANTIDAD COMANDAS---------------------
cantindad.onclick = ()=>{cantComandas()}
const cantComandas = () => {
    msjDos.innerHTML = `Usted ingreso un total de ${canComandas} comandas`;

}
//----------------FUNCION PARA RENDIR IMPORTE FINAL DEL DIA-----------------

rendir.onclick = ()=>{importeRendirCaja()} 

const importeRendirCaja = () =>{
    msjTres.innerHTML =`TOTAL A RENDIR: ${totalRendir}`
}
despedida.onclick =()=>{
msjDespedida.innerHTML = `${datosEmpleados[0].nombre} Terminaste el dia con ${canComandas} comandas.
gracias por tu servicio @@@@${restoBar.razonSocial}@@@@`}

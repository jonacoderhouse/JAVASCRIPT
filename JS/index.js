
//-------------NODOS
const contenedor = document.querySelector(`#mainUno`)
const botonUno = document.querySelector(`#botonUno`)
const botonDos = document.querySelector(`#botonDos`)
const respuesta = document.querySelector(`#respuesta`)
const selectContenedor = document.querySelector(`#select`)

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
const restoBarJson = JSON.stringify(restoBar);//transforme un objeto en formato JSON asi lo guardo en el locastorage
localStorage.setItem("Datos local", restoBarJson)//localstorage

// --------CLASS CONTRUCTORA DE OBJETOS
class Empleados {
    constructor(nombre, apellido, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
    }
}
const empleadoUno = new Empleados(`Jonathan`, `Juarez`, 12)
const empleadoDos = new Empleados(`Emanuel`, `Manolo`, 13)
const empleadoTres = new Empleados(`Fernando`, `Pera`, 2)

//---------ARRAY EMPLEADOS
const empleados = [];
empleados.push(empleadoUno, empleadoDos, empleadoTres)
console.log(empleados);

//------FUNCION QUE OCULTA Y APARECE BOTON Y SELECT DE OPCIONES
const apareceDesaparece = () => {
    botonDos.classList.toggle(`oculto`)
    botonUno.classList.toggle(`aparecer`)
    selectContenedor.style.display = `block`;
}

//----- ----PANTALLA INICO
selectContenedor.style.display = 'none';
botonUno.classList.toggle(`oculto`)

//---------BOTON CON EVENTO Y FUNCION PARA CREAR OPCION DE MOZOS RECORRIENDO EL ARRAY
botonDos.onclick = () => {

    apareceDesaparece();

    const canasta = () => {
        empleados.forEach(contendorCanasta => {
            const option = document.createElement(`option`)
            option.classList = `canastaUno`
            option.id = `botonId`
            option.innerHTML = `
        <p>Nombre: ${contendorCanasta.nombre}</p>
        <P>Apellido: ${contendorCanasta.apellido}</P>
        <b> ID:${contendorCanasta.id}</b>`
            selectContenedor.appendChild(option)
        });
    }

    //-------FUNCION PARA OCULTAR
    const ocultarFormulario = () => {
        selectContenedor.style.display = 'none';
        botonUno.style.display = `none`;
    }

    //-------- FUNCION SALUDO BIENVENIDAe
    const fecha = new Date().toLocaleString();
    const mensajeBienvenida = () => {
        selectContenedor.addEventListener('change', (event) => {
            if (!!`${event.target.value}`) {
                ocultarFormulario();
                respuesta.innerHTML = `BIENVENIDO AL SERVICIO : ${event.target.value} Fecha y Hora:${fecha}`;
            }
            localStorage.setItem("saludo", event.target.value) //localStorage
            sessionStorage.setItem("saludo", event.target.value) //sessionStorage
        });
    }



    const funcionFonal = () => {
        canasta();
        mensajeBienvenida();
    }


    botonUno.onclick = () => {
        funcionFonal();

    }
}


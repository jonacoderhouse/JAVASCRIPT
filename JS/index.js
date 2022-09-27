let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
let edadUsuario = localStorage.getItem('edadUsuario');
let inputNombre = sessionStorage.getItem('inputNombre');


//Variables DOM
const saludoEstudiantes = document.querySelector('#saludoUsuario');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#id');
const contFormulario = document.querySelector('#contFormulario');
const contenido = document.querySelector('#contenido');
const logout = document.querySelector('#logout');


//funciones
const ocultarFormulario = () => {
    contFormulario.style.display = 'none';
    contenido.innerHTML = `<p> LIBRERIA SWEET ALERT.</p>`;
}

saludoEstudiantes.innerHTML = `<P>Bienvenido a la entrega de LIBRERIA</P>`;

formulario.onsubmit = (e) => {
    e.preventDefault();
    nombreUsuario = nombre.value;
    apellidoUsuario = apellido.value;
    edadUsuario = edad.value;

    Swal.fire({
        title: 'Bienvenid@',
        text: `${nombre.value} estamos felices de tenerte
        ID: ${id.value}`,
        icon: 'success',
        confirmButtonText: 'Iniciemos la jornada'
    });

    localStorage.setItem('nombreUsuario', nombre.value);
    localStorage.setItem('apellidoUsuario', apellido.value);
    localStorage.setItem('edadUsuario', id.value);
    ocultarFormulario();
}


//OPERADOR AVANZADO &&
!!nombreUsuario && !!apellidoUsuario && !!edadUsuario && ocultarFormulario();


logout.onclick = () => {
    // localStorage.clear();
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('apellidoUsuario');
    localStorage.removeItem('edadUsuario');

}





const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/?limit=151";
const JSON_POST = "https://jsonplaceholder.typicode.com/posts";

// DOM
const container = document.querySelector("#container");
const btn = document.querySelector("#button");
const form = document.querySelector("#form");

// FUNCION
const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

// APLICANDO FETCH CON API DE POKEMON
const obtenerPokemon = () => {

    fetch(URL_POKEMON)
        .then((respuesta) => {
            return respuesta.json();
        }).then(pokemonResults => {

            const { results } = pokemonResults; //OBJETO DESESTRUCTURADO

            for (const pokemon of results) {

                const { url, name } = pokemon;//OBJETO DESESTRUCTURADO
                const id = url.split('/')[url.split('/').length - 2];

                const element = document.createElement('div');
                element.className = 'card';
                element.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
        <h2 class="poke-name">#${id} - ${capitalize(name)}</h2>`;
                container.append(element);
            }

        })
        .catch(error => {
            console.log('Hago algo en caso que falle');
        }).finally(() => {

        });
}

btn.addEventListener("click", () => {
    obtenerPokemon();
});



//---------------REGISTRO NOMBRE Y CORREO EN IMPUT
const enviarInformacion = (info) => {
    fetch(JSON_POST, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => res.json())
        .then(respuesta => {

            Swal.fire({
                title: 'Bienvenid@',
                text: `Hola ${respuesta.nombre}.
       El correo ${respuesta.valor} ha sido registrado`,
                icon: 'success',
                confirmButtonText: 'Iniciemos'
            });

        })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = document.getElementById('email');
    const nombre = document.getElementById('nombre');
    enviarInformacion({ valor: mail.value, nombre: nombre.value });
});
let contedor = document.getElementById('calculadora');

// let input = document.createElement('input');
// input.setAttribute('type', 'number');
// input.setAttribute('id', 'input');
// input.setAttribute('placeholder', 'Ingrese un número');
// contedor.appendChild(input);
const visor = document.getElementById('display')

/* creamos una funcion para agregar los numeros al visor y si el visor esta en 0 agregar el numero que se precione, si existe numero producto de la operacion borrAR para agregar nuevo */
function agregar(e) {
    if (visor.value == "0") {
        visor.value = e;
    } else {
        visor.value += e;
    }
}

/* agregamos el signo de operacion si aun no existe y si eya existe mandamos un alert */

function operar(e) {
    if (visor.value == "0") {
        visor.value = "0";
        alert('ingrese un numero antes')
    } else if (visor.value.indexOf("+") == -1 && visor.value.indexOf("-") == -1 && visor.value.indexOf("*") == -1 && visor.value.indexOf("/") == -1) {
        visor.value += e;
    } else {
        alert('Ya existe una operación');
    }
}
/* creamos una funcion "del" para eliminar el ultimo elemento del visor si no existe ningun numero agregar un 0 */
function del() {
    if (visor.value.length == 1) {
        visor.value = "0";
    } else {
        visor.value = visor.value.substring(0, visor.value.length - 1);
    }
}

function borrar() { 
    visor.value = "0";
}
/* realizamos la opereacion cunado se precione en = */
function resultado() {
    visor.value = eval(visor.value);
    console.log(visor.value);
}

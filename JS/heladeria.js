alert("hola broder")

//variables
let saludo;
let gusto;
let tamaño;
let resultado;


saludo = alert("Bienvenido a nuestra heladeria , a continuacion tomaremos su pedido")

const gustos = {
  chocolate: {
    nombre: 'chocolate',
    precio: 650
  },
  vainilla: {
    nombre: 'vainilla',
    precio: 520
  },
  frutilla: {
    nombre: 'frutilla',
    precio: 350
  }
};

const tamaños = ['pequeño', 'mediano', 'grande'];

function Precio(gusto, tamaño) {
  let precio = 0;

  if (gusto in gustos) {
    precio = gustos[gusto].precio;

    switch (tamaño) {
      case 'pequeño':
        precio *= 1.2;
        break;
      case 'mediano':
        precio *= 1.4;
        break;
      case 'grande':
        precio *= 1.8;
        break;
      default:
        precio = 0;
        break;
    }
  }
  return precio.toFixed(2);
}
// inicia la simulación
function iniciarSimulacion() {
  gusto = prompt('Ingrese su gusto: chocolate/vainilla/frutilla');
  tamaño = prompt('Ingrese el tamaño: pequeño/mediano/grande');

  resultado = Precio(gusto, tamaño);

  if (resultado > 0) {
    alert(`El precio del helado de ${gustos[gusto].nombre} en tamaño ${tamaño} es: $${resultado}`);
  } else {
    alert('La opción no es válida, haga otro intento.');
  }
}
iniciarSimulacion();
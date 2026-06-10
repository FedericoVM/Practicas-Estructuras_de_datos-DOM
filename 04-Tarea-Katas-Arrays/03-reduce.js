/* ==========================================================================
   03 — Katas de .reduce() | 10 Katas de Acumulación
   Completá cada función usando OBLIGATORIAMENTE .reduce().
   ⚠️  NO uses bucles for/while ni .forEach().
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — La Caja Registradora
   Dado un array de números (precios), retorná la suma total.
   Ej: [10, 20, 30] → 60
-------------------------------------------------------------------------- */
function sumarTotal(numeros) {
  // TU CÓDIGO AQUÍ 👇
  const total = numeros.reduce((acum, numero) => {
    return (acum += numero);
  }, 0);

  return total;
}

/* --------------------------------------------------------------------------
   KATA 2 — El Producto
   Dado un array de números, retorná la multiplicación de todos entre sí.
   Ej: [2, 3, 4] → 24
-------------------------------------------------------------------------- */
function multiplicarTodo(numeros) {
  // TU CÓDIGO AQUÍ 👇
  const total = numeros.reduce((acum, numero) => {
    return (acum *= numero);
  }, 1);

  return total;
}

/* --------------------------------------------------------------------------
   KATA 3 — El Mayor
   Dado un array de números, retorná el valor máximo usando .reduce().
   (No vale Math.max con spread)
   Ej: [3, 7, 1, 9, 4] → 9
-------------------------------------------------------------------------- */
function encontrarMaximo(numeros) {
  // TU CÓDIGO AQUÍ 👇
  const valorMaximo = numeros.reduce((numMax, num, index, array) => {
    if (index === 0) {
      numMax = num;
    }
    if (num > numMax) {
      numMax = num;
    }
    return numMax;
  }, 0);
  return valorMaximo;
}

/* --------------------------------------------------------------------------
   KATA 4 — Contar Ocurrencias
   Dado un array de strings, retorná un objeto que cuente cuántas veces
   aparece cada string.
   Ej: ['a','b','a','c','b','a'] → { a: 3, b: 2, c: 1 }
-------------------------------------------------------------------------- */
function contarOcurrencias(arr) {
  // TU CÓDIGO AQUÍ 👇
  const contadorString = arr.reduce((contador, elemento) => {
    if (contador[elemento]) {
      contador[elemento] += 1;
    } else {
      contador[elemento] = 1;
    }

    return contador;
  }, {});

  return contadorString;
}

/* --------------------------------------------------------------------------
   KATA 5 — Aplanar Array (flatten)
   Dado un array de arrays, retorná todos los elementos en un array plano.
   Ej: [[1,2],[3,4],[5]] → [1, 2, 3, 4, 5]
-------------------------------------------------------------------------- */
function aplanar(arrayDeArrays) {
  // TU CÓDIGO AQUÍ 👇
  const arrayPlano = arrayDeArrays.reduce((acum, array) => {
    return acum.concat(array);
  }, []);

  return arrayPlano;
}

/* --------------------------------------------------------------------------
   KATA 6 — Total del Carrito con Objetos
   Dado un array de objetos { nombre, precio, cantidad }, retorná el importe
   total sumando precio * cantidad de cada item.
   Ej: [{nombre:'TV',precio:500,cantidad:2}] → 1000
-------------------------------------------------------------------------- */
function totalCarrito(items) {
  // TU CÓDIGO AQUÍ 👇
  const total = items.reduce((acum, elemento) => {
    return acum + elemento.cantidad * elemento.precio;
  }, 0);

  return total;
}

/* --------------------------------------------------------------------------
   KATA 7 — Agrupar por Categoría
   Dado un array de objetos { nombre, categoria }, retorná un objeto donde
   cada clave es una categoría y su valor es un array con los nombres.
   Ej: [{nombre:'Manzana',categoria:'fruta'},{nombre:'TV',categoria:'electro'}]
       → { fruta: ['Manzana'], electro: ['TV'] }
-------------------------------------------------------------------------- */
function agruparPorCategoria(productos) {
  // TU CÓDIGO AQUÍ 👇
  const nuevoObjeto = productos.reduce((acum, element) => {
    let clave = element.categoria;
    let valor = element.nombre;

    if (!acum[clave]) {
      acum[clave] = [];
    }
    acum[clave].push(valor);

    return acum;
  }, {});

  return nuevoObjeto;
}

/* --------------------------------------------------------------------------
   KATA 8 — Promedio
   Dado un array de números, retorná el promedio (media aritmética).
   Redondeá a 2 decimales con Math.round(n * 100) / 100.
   Ej: [10, 20, 30] → 20
-------------------------------------------------------------------------- */
function promedio(numeros) {
  // TU CÓDIGO AQUÍ 👇
  let sumaNotas = 0;
  const promedio = numeros.reduce((acum, elemento) => {
    sumaNotas += elemento;
    return (acum = sumaNotas / numeros.length);
  }, 0);

  return Math.round(promedio * 100) / 100;
}

/* --------------------------------------------------------------------------
   KATA 9 — Construir String desde Array
   Dado un array de palabras, construí una oración uniéndolas con espacio
   usando reduce (sin usar .join()).
   Ej: ['Hola','Mundo','JS'] → 'Hola Mundo JS'
-------------------------------------------------------------------------- */
function construirOracion(palabras) {
  // TU CÓDIGO AQUÍ 👇
  const stringArray = palabras.reduce((acum, elemento, index) => {
    if (index === 0) {
      acum += `${elemento}`;
    } else {
      acum += ` ${elemento}`;
    }
    return acum;
  }, "");
  return stringArray;
}

/* --------------------------------------------------------------------------
   KATA 10 — Balance de Cuenta
   Dado un array de transacciones { tipo: 'ingreso'|'egreso', monto },
   calculá el saldo final. Los ingresos suman, los egresos restan.
   Ej: [{tipo:'ingreso',monto:1000},{tipo:'egreso',monto:300}] → 700
-------------------------------------------------------------------------- */
function calcularBalance(transacciones) {
  // TU CÓDIGO AQUÍ 👇
  const montoFinal = transacciones.reduce((acum, elemento) => {
    const tipo = elemento.tipo;
    const monto = elemento.monto;

    if (tipo === "ingreso") {
      acum += monto;
    } else if (tipo === "egreso") {
      acum -= monto;
    }

    return acum;
  }, 0);

  return montoFinal;
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  sumarTotal,
  multiplicarTodo,
  encontrarMaximo,
  contarOcurrencias,
  aplanar,
  totalCarrito,
  agruparPorCategoria,
  promedio,
  construirOracion,
  calcularBalance,
};

const precioOriginal = 120;
const descuento = 18

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precio *porcentajePrecioConDescuento)/100



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onCalcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const precioFinal = inputPrecio.value;

    const inputDescuento = document.getElementById("InputDescuento");
    const precioDescuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precioFinal, precioDescuento);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: " + precioConDescuento;
}
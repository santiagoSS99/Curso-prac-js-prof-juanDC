const Cupones = [
    "Santi10",
    "Santi20",
    "Santi30",
];


function calcularPrecioConDescuento(precio, discount){

    const porcentajePrecioConDescuento = 100 - discount;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onCalculateDiscountPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCupons = document.getElementById("InputDiscount");
    const precioFinal = inputPrice.value;
    const cuponsValue = inputCupons.value;
    
    let discount;

    switch (cuponsValue) {
        case Cupones[0]:
            discount = 10;
            break;
        case Cupones[1]:
            discount = 20;
            break;
        case Cupones[2]:
            discount = 30;
            break;
    
        default:
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(precioFinal, discount);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: " + precioConDescuento;

}
console.group("cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
} 


//console.log("El perimetro del cuadrado mide " + perimetroCuadrado);

function areaCuadrado(lado){
    lado * lado;
} 
//console.log("El area del cuadrado mide " + areaCuadrado + "cm");
console.groupEnd();

// Codigo triangulo 
console.group("triangulos");
                    // const ladoTriangulo1 = 6;
                    // const ladoTriangulo2 = 6;
                    // const baseTringulo = 4;


                    // console.log("los lados del triangulo miden: " 
                    // + ladoTriangulo1 
                    // + "cm, " 
                    // + ladoTriangulo2 + 
                    // "cm, " 
                    // + baseTringulo 
                    // + "cm"
                    // );

                    // const alturaTringulo = 5.5;
                    // console.log("la altura del triangulo es de: " + alturaTringulo + "cm");

function perimetroTriamgulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

console.log("el perimetro del triangulo es : " + perimetroTriamgulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) /2;
} 
console.log("el area del triangulo es: " + areaTriangulo + "cm")
console.groupEnd();

//codigo  del circulo

console.group("Circulo");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 

//PI
const PI = Math.PI
console.log("PI es: " + PI );

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area
function areaCirculo(radio){
    return (radio * radio) * PI
}
console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
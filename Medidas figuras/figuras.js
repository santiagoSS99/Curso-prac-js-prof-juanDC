console.group("cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
} 


//console.log("El perimetro del cuadrado mide " + perimetroCuadrado);

function areaCuadrado(lado){
    return lado * lado;
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

// TRIANGULO ISOCELES

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}

function calcularPerimetroTriangulo(){

}

function calcularAlturaIsoceles(){
    const inputA = document.getElementById("InputLadoa");
    const ladoa = inputA.value;
    const inputB = document.getElementById("InputLadob");
    const ladob = inputB.value;
    const Inputbase = document.getElementById("InputLadoBase");
    const base = Inputbase.value;

if(ladoa === ladob){
    if(ladoa > 0 && base > 0){
        const sumaLados = ladoa + ladob;
        if (base < sumaLados) {
            const q = ladoa;
            const b = base/2;
            const a = Math.sqrt((q*q)-(b*b));
            alert("La altura es de: " + a + " cm");
        }
        else{
            alert("La base es mayor o igual a la suma de los dos lados, no existe altura");
        }
    }
    else{
        alert("Los lados tienen que ser mayor a cero incluyendo la base");
    }   
}
else {
    alert("Los lados 1 y 2 tienen que ser el mismo tamaño");
}
}

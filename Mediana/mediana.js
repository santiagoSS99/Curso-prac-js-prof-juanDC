function calcularMedianaAritmetica(lista){
 
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;        
        }
    );
    
    const promedioLista = (sumaLista / lista.length);
    return promedioLista;   
    
    }

function calcularMediana(){
    const entradaTecleadaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaTecleadaMediana.value;

    let arrayMediana = Array.from(medianaValue.split(","),Number);

    const ordenLista = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
    // console.log(ordenLista);

    const mitadLista = parseInt((ordenLista.length / 2));
        // console.log(mitadLista);

        function esPar(numero){
            if (numero % 2 === 0) {
                return true;
            }else{
                return false;
            }
           }
           
           let mediana;
           
           if (esPar(ordenLista.length)) {
               const elemento1 = ordenLista[mitadLista - 1];
               const elemento2 = ordenLista[mitadLista];
           
               const promedioEl1El2 = calcularMedianaAritmetica([
                   elemento1,
                   elemento2,
               ]);
               mediana = promedioEl1El2;
           }else{
                   mediana = ordenLista[mitadLista];
           }
           
           const mostrarResultado = document.getElementById("resultaMediana");
           mostrarResultado.innerText = "La mediana es de: " + mediana;

}



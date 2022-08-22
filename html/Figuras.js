//console.log("Figuras Geometricas");
//cambio del nav tab para aplicaciones


//codificacion de cuadrado

//console.group("Cuadrado");

function perimetroCuadrado(ladoC) {
    return ladoC * 4;
};

function areaCuadrado(areaC) {
    return areaC * areaC;
};


//codificacion de triangulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
}
function alturaTriangulo(lado1, lado2, base) {
    const altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    return altura;
}


//codificacion de circulo
//console.log("Circulo");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diam = diametroCirculo(radio);
    return diam * PI;
}

function areaCirculo(radio) {
    const area = radio * radio;
    return area * PI;
}


//Funciones aritmeticas del cuadrado
function calcularAreaCuadrado() {
    let inputAC = document.getElementById("ladoCuadrado");
    let valor = inputAC.value;
    let resultado = areaCuadrado(valor);
    document.getElementById("resultadosC").innerHTML = "El area del cuadrado es: ";
    document.getElementById("resultadosCuadrado").value = resultado;
}

function calcularPerimetroCuadrado() {
    let inputPC = document.getElementById("ladoCuadrado");
    let valorpc = inputPC.value;
    let resultadopc = perimetroCuadrado(valorpc);
    document.getElementById("resultadosC").innerHTML = "El perimetro del cuadrado es: ";
    document.getElementById("resultadosCuadrado").value = resultadopc;
}

//Funciones aritmeticas del triangulo
function calcularAreaTriangulo() {
    let inputBase = document.getElementById("baseTri").value;
    let inputAltura = document.getElementById("alturaTri").value;
    let resultado = areaTriangulo(inputBase, inputAltura);
    if (inputBase.length == 0 || inputAltura.length == 0) {
        document.getElementById("resultadosT").innerHTML = "Debes insertar la base y la altura";
    } else {
        let resultado = areaTriangulo(inputBase, inputAltura);
        document.getElementById("resultadosT").innerHTML = "El area del triangulo es: ";
        document.getElementById("resultadosTriangulo").value = resultado;
    }

}

function calcularPerimetroTriangulo() {
    let inputAT = document.getElementById("ladoTrianguloA").value;
    let inputPT = document.getElementById("ladoTrianguloB").value;
    let inputBase = document.getElementById("baseTri").value;
    //let inputAltura = document.getElementById("alturaTri");
    //let valorAltura = inputAltura.value;
    if (inputAT.length == 0 || inputPT.length == 0 || inputBase.length == 0) {
        document.getElementById("resultadosT").innerHTML = "Debes ingresar los 2 lados y la base";
    } else {
        let resultado = perimetroTriangulo(inputAT, inputPT, inputBase);
        document.getElementById("resultadosT").innerHTML = "El perimetro del triangulo es: ";
        document.getElementById("resultadosTriangulo").value = resultado;
    }
}


function calcularAlturaTriangulo() {
    let inputAT = document.getElementById("ladoTrianguloA").value;
    let inputPT = document.getElementById("ladoTrianguloB").value;
    let inputBase = document.getElementById("baseTri").value;
    if (inputAT.length == 0 || inputPT.length == 0 || inputBase.length == 0) {
        document.getElementById("resultadosT").innerHTML = "Debes ingresar los 2 lados y la base";
    } else if (inputAT === inputPT) {
        const resultado = alturaTriangulo(inputAT, inputPT, inputBase);
        document.getElementById("resultadosT").innerHTML = "La altura del triangulo isoseles es: ";
        document.getElementById("resultadosTriangulo").value = resultado;
    } else {
        document.getElementById("resultadosT").innerHTML = "No es un triangulo isoseles lado A debe ser igual que lado B";
    }
}

//Funciones aritmeticas del circulo
function calcularAreaCirculo() {
    let inputC = document.getElementById("ladoCirculo");
    let valorC = inputC.value;
    let resultado = areaCuadrado(valorC);
    document.getElementById("resultadosCir").innerHTML = "El area del circulo es: ";
    document.getElementById("resultadosCirculo").value = resultado;
}

function calcularPerimetroCirculo() {
    let inputC = document.getElementById("ladoCirculo");
    let valorC = inputC.value;
    let resultadopc = perimetroCuadrado(valorC);
    document.getElementById("resultadosCir").innerHTML = "El perimetro del circulo es: ";
    document.getElementById("resultadosCirculo").value = resultadopc;
}


// Bonus: si ya eres una experta o experto en el lenguaje, 
//te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.
/*const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/


function tipoDeSuscripcion(suscripcion){
    if(suscripcion == 'free'){
        console.log("Solo puedes tomar los cursos gratis");
    }else if(suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if(suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if(suscripcion == 'ExpertDuo'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}
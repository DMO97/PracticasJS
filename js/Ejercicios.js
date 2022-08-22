
//cambiando parametros
const nombres = (name, lastname, nick) => {
    return console.log(`Hola mi nombre completo es: ${name}` +` `+`${lastname}`+ ` `+`pero me gusta que 
    me digan`+` `+`${nick}`)
} 

nombres('david','Mercado','jake')

//condicional if, else if y else
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}    

//condicional if solamente
const tipoDeSuscripcion2 = "Basic";

if(tipoDeSuscripcion == 'Free' || tipoDeSuscripcion == 'Basic') {
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}    


//ciclo de for a while ++

var i = 0;
while(i <=5 ){
    console.log("el valor de i es: "+" "+i++)
}

//ciclo de for a while --

var i = 10;
while(i >=2 ){
    console.log("el valor de i es: "+" "+i--)
}


//Juego de sumatorial 
let resultadoUser = prompt("Cual es el resultado de 2 + 2:");

while(resultadoUser!=2){
    console.log("El resultado esta mal, vuelve a intentar")
}


//recibir un array como parametros

var array = [1,2,3,4,5,6,7,8,9,10,11];

function recorridoArray(array){
    console.log(array.shift());
}
recorridoArray(array);


//recibir un array como parametros e imrimir cada elemento uno por uno 

var array = [1,2,3,4,5,6,7,8,9,10,11];

function recorridoArrayImp(array){
    var i = 0;
    while(i <= array.length){
        console.log("el valor del arreglo es: "+" "+ i++)
    }
}
recorridoArrayImp(array);




//Reto 1: Operadores condicionales
const time = 13;
let greeting;
if (time < 12) {
    greeting = "Good morning";
}
if (time < 20) {
    greeting = "Good afternoon";
}
if (time >= 24) {
    greeting = "Good evening";
}
console.log(greeting) // Good afternoon
const diameter = 1.6
const thickness = 0.6

const diametro = (diameter, thickness)
{
    if (diameter > 1.4) {
        console.log('La rueda es para un vehículo grande');
    } else if (diameter <= 1.4 && diameter > 0.8) {
        console.log('La rueda es para un vehículo mediano');
    } else {
        console.log('La rueda es para un vehículo pequeño');
    }
    if (diameter > 1.4 && thickness < 0.4 || diameter <= 1.4 && diameter > 0.8 && thickness < 0.25) {
        console.log('El grosor para esta rueda es inferior al recomendado');
    }
}

switch (true) {
    case (time < 12):
        greeting = "Good morning";
        break;
    case (time < 20):
        greeting = "Good afternoon";
        break;
    case (time <= 24):
        greeting = "Good evening";
        break;
}


//Reto 2: Números pares
console.log("Números pares")
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0)
    {console.log(i)}
}


//Reto 3: Números primos
console.log("Números primos")
for(let i = 0; i <= 100; i++){
    if(i % 2){console.log(i)}
}






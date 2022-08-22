var frutas = ['manzanas', 'mango'];

var masfrutas = frutas.push(5);

console.log(frutas);

var estudiantes = ['Maria','Perla','David'];

function saludarEstudiante(estudiantes){
    for(var i=0; i<estudiantes.length; i++){
    console.log('Hola, '+ estudiantes[i]);
 }
}


console.log(saludarEstudiante(estudiantes));


//Foreach

function saludarEstudiante(estudiantes){
    for(var estudiante of estudiantes){
        console.log('Hola, ' + estudiante);
 }
}

console.log(saludarEstudiante(estudiantes));


//Ciclo While
var estudiantes = ['Maria','Perla','David'];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//Objetos con apuntadores dentro del objeto 

var miAuto = {
    marca: "Toyota",
    modelo: "Corrola",
    annio: 2022,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};


// llenado de objetos mediante constructor

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }

    var autos = [];

    for(var i = 0; i <= 3; i++){
        var marca = prompt("ingresa la marca del auto: ");
        var modelo = prompt("ingresa el modelo del auto: ");
        var annio = prompt("ingresa el annio del auto: ");
        autos.push(new auto(marca,modelo,annio));
    }

    for(var auto of autos) {
        console.log("autos: " + auto);
    }


    //Recorrido de arraglo de objeto mediante index filter

    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    var articulosRecorrido = articulos.filter(function(articulo){
        return articulo.cost >= 500
    });

    // map 
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    var nombreArticulos = articulos.map(function(articulo){
        return articulo.name
    });

    //metdo de busqueda find
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    var nombreArticulos = articulos.find(function(articulo){
        return articulo.name === "Bici"
    });

    //metdo de busqueda foreach
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    articulos.forEach(function(articulo){
        console.log(articulo.cost);
    });


    //metdo de busqueda some retorna boolean
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    var articulosbaratos = articulos.some(function(articulo){
        return articulo.cost <= 500
    });

    //metdo de agregacion push
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    function newArticulo() {
        articulos.push({name: "Mouse", cost: 300})
        console.log(articulos);
    }

    newArticulo()

    //metdo de eliminacion del primer elemento de la lista shift
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    function newArticulo() {
        let eliminacion = articulos.shift();
        console.log(articulos);
    }

    newArticulo()

    //metdo de eliminacion del ultimo elemento de la lista pop
    var articulos = [
        {name: "Bici", cost: 5000 },
        {name: "TV", cost: 3000 },
        {name: "Libro", cost: 500 },
        {name: "Celular", cost: 2000 },
        {name: "Teclado", cost: 400 },
    ];

    function newArticulo() {
        let eliminacion = articulos.pop();
        console.log(articulos);
    }

    newArticulo()
    
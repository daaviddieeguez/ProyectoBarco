let columna;
let fila;

columna = prompt("¿Cuántas columnas tiene el tablero?");
if(columna<2){
    columna = 2;
}

fila = prompt("¿Cuántas filas tiene el tablero?");
if(fila<2){
    fila = 2;
}

console.log("Filas "+fila);
console.log("Columnas "+columna);

let barcox = aleatorio(columna);
let barcoy = aleatorio(fila);

let humox = [null, null, null];
let humoy = [null, null, null];

console.log("El barco esta en: "+barcox+", "+barcoy);

let ganador = false;
while(!ganador){
    let x = prompt("Introduce la columna: (0-"+columna+")");
    let y = prompt("Introduce la fila (0-"+fila+")");
    let i = 0;
    let eshumo = false;


    for(i = 0; i < humox.length && !eshumo; i++){
        if(x == humox[i] && y == humoy[i]){
            eshumo = true;
        }
    }
    
    if(x == barcox && y == barcoy){
        alert("Has ganado");
        ganador = true;
    }else if(eshumo){
        alert("Humo. El barco paso hace "+i+" casillas");
    }else{
        alert("Agua");
    }

    humox.unshift(barcox);
    humoy.unshift(barcoy);

    if(humox.length>3){
        humox.pop();
        humoy.pop();
    }

    if(!ganador){
        moverse();
        console.log("El barco esta en: "+barcox+", "+barcoy);
    }

    
}

function moverse(){
    let posibilidades = [];

    if(barcox>0){
        posibilidades.push([barcox-1, barcoy]);
    }

    if(barcox<fila-1){
        posibilidades.push([barcox+1, barcoy]);
    }

    if(barcoy>0){
        posibilidades.push([barcox, barcoy-1]);
    }

    if(barcoy < columna - 1){
        posibilidades.push([barcox, barcoy+1]);
    }

    let indice = aleatorio(posibilidades.length);

    barcox = posibilidades[indice][0];
    barcoy = posibilidades[indice][1];
}

function aleatorio(numero){
    return Math.floor(Math.random() * numero);
}
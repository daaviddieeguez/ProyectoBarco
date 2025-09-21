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
let humox = new Array(3);
let humoy = new Array(3);

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

    if(ganador){
        moverse();
    }
}

function moverse(){
    let posicion = aleatorio(2);
    console.log("La posicion es: "+posicion);
    if(posicion == 1){
        let x = aleatorio(2);
        if(barcox != 0 && x == 0){
            barcox--;
        }else{
            barcox++;
        }
    }else{
        let y = aleatorio(2);
        if(barcoy != 0 && y == 0){
            barcoy--;
        }else{
            barcoy++;
        }
    }
    console.log("El barco esta en: "+barcox+", "+barcoy);
}

function aleatorio(numero){
    return Math.floor(Math.random() * numero);
}
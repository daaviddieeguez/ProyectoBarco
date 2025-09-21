let columna;
let fila;
do{
    columna = prompt("¿Cuántas columnas tiene el tablero?");
    if(columna<2){
        alert("El tablero tiene que ser mayor o igual a 2");
    }
}while(columna<2);

do{
    fila = prompt("¿Cuántas filas tiene el tablero?");
    if(fila<2){
        alert("El tablero tiene que ser mayor o igual a 2");
    }
}while(fila<2);

console.log("Filas "+fila);
console.log("Columnas "+columna);

let barcox = Math.floor(Math.random() * columna);
let barcoy = Math.floor(Math.random() * fila);
let humox = new Array(3);
let humoy = new Array(3);

console.log("El barco esta en: "+barcox+", "+barcoy);

let singanador = true;
while(singanador){
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
        singanador = false;
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

    moverse();
}

function moverse(){
    let posicion = Math.floor(Math.random() * 2);
    console.log("La posicion es: "+posicion);
    if(posicion == 1){
        let x = Math.floor(Math.random() * 2);
        if(barcox != 0 && x == 0){
            barcox--;
        }else{
            barcox++;
        }
    }else{
        let y = Math.floor(Math.random() * 2);
        if(barcoy != 0 && y == 0){
            barcoy--;
        }else{
            barcoy++;
        }
    }
    console.log("El barco esta en: "+barcox+", "+barcoy);
}
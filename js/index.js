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

console.log("El barco esta en: "+barcox+", "+barcoy);

let singanador = true;
while(singanador){
    let x = prompt("Introduce la columna: (0-"+columna+")");
    let y = prompt("Introduce la fila (0-"+fila+")");
    if(x == barcox && y == barcoy){
        alert("Has ganado");
    }else if(x == humox && y == humoy){
        alert("Humo");
    }else{
        alert("Agua");
    }
}
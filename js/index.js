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

let tablero = [];
let matriz = new Array(columna);

for (let i = 0; i < fila; i++) {
  tablero[i] = [];
  for (let j = 0; j < columna; j++) {
    tablero[i][j] = 0;
  }
}

for(let i = 0; i<tablero.length; i++){
    for(let j = 0; j<tablero[i].length; j++){
        console.log("Fila "+ i +", Columna " + j + " = " + tablero[i][j]);
    }
}
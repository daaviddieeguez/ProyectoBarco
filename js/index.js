let columna;
do{
    columna = prompt("¿Cuántas columnas tiene el tablero?");
    if(columna<2){
        console.log("El tablero tiene que ser mayor o igual a 2");
    }
}while(columna<2);

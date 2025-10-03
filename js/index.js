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

let barco = [aleatorio(columna), aleatorio(fila)];

let humo = [[], [], []];

console.log("El barco esta en: "+(barco[0]+1)+", "+(barco[1]+1));

let ganador = false;
while(!ganador){
    let x = -1;
    let y = -1;
    
    do{
        x = parseInt(prompt("Introduce la columna: (1-"+columna+")")-1);
        if(x<0 || x>columna-1){
            alert("Número no permitido");
        }
    }while(x<0 || x>columna-1);
    
    do{
        y = parseInt(prompt("Introduce la fila (1-"+fila+")")-1);

        if(y<0 || y>fila-1){
            alert("Número no permitido");
        }
    }while(y<0 || y>fila-1);
    
    let posHumo = 0;
    
    let eshumo = false;

    for(let i = 0; i < humo.length && !eshumo; i++){
        if(x == humo[i][0] && y == humo[i][1]){
            eshumo = true;
        }
        posHumo++;
    }
    
    if(x == barco[0] && y == barco[1]){
        alert("Has ganado");
        ganador = true;
    }else if(eshumo){
        alert("Humo. El barco paso hace "+posHumo+" casillas");
    }else{
        alert("Agua");
    }

    humo.unshift([barco[0], barco[1]]);

    if(humo.length>3){
        humo.pop();
    }

    if(!ganador){
        moverse();

        console.log("El barco esta en: "+(barco[0]+1)+", "+(barco[1]+1));
    }
}

function moverse(){
    let posibilidades = [];

    if(barco[0]>0){
        posibilidades.push([barco[0]-1, barco[1]]);
    }

    if(barco[0]<fila-1){
        posibilidades.push([barco[0]+1, barco[1]]);
    }

    if(barco[1]>0){
        posibilidades.push([barco[0], barco[1]-1]);
    }

    if(barco[1] < columna - 1){
        posibilidades.push([barco[0], barco[1]+1]);
    }

    let indice = aleatorio(posibilidades.length);

    barco[0] = posibilidades[indice][0];
    barco[1] = posibilidades[indice][1];
}

function aleatorio(numero){
    return Math.floor(Math.random() * numero);
}
let tempo1 = 10;
let tempo2 = 11;
let tempo3 = 13;

if(tempo1 < tempo2 && tempo1 < tempo3){
    console.log(`O Corredor 01 Ganhou a corrida com ${tempo1} Segundos`);
}else if(tempo2 < tempo1 && tempo2 < tempo3){
    console.log(`O Corredor 02 Ganhou a corrida com ${tempo2} Segundos`);
}else{
    console.log(`O Corredor 03 Ganhou a corrida com ${tempo3} Segundos`);
}

//Switch case
switch(tempo1, tempo2, tempo3){
    case `${tempo1 < tempo2 && tempo1 < tempo3}`:
        console.log(`Corredor 01 ganhou com ${tempo1}`)
        break
}
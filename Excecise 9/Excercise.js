console.log("Random Name Generator");

let Adj_1="Crazy";
let Adj_2="Amazing";
let Adj_3="Fire";

let Middle_1="Engine";
let Middle_2="Foods";
let Middle_3="Garments";

let Last_1="Bors";
let Last_2="Limited";
let Last_3="Hub";


let random=Math.random();
console.log(random);
if( random<0.33){
    console.log(`${Adj_1} ${Middle_1} ${Last_1}`);
}
else if(random >=0.33 && random<0.66){
    console.log(`${Adj_2} ${Middle_2} ${Last_2}`);
}
else {
    console.log(`${Adj_3} ${Middle_3} ${Last_3}`);
}
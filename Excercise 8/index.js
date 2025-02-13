console.log("Calculator");

let random=Math.random();
console.log(random);

var a=prompt("Enter Your First Number");
var c=prompt("Enter Operation To be Performed");
var b=prompt("Enter Your Third Number");


let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    //Correct Calculation
    console.log(`The Result is ${a} ${c} ${b} `);
    alert(`The result is ${eval( `${a} ${c} ${b}`)} `);
}
else{
    //Wrong Calculation
    c = obj[c];
    alert(`The Result is ${eval(`${a} ${c} ${b}`)} `);
}
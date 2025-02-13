console.log("Get Me the Factorial of A Given Number");
var rem=1;
var n=prompt("Enter Any Number");
for( var i=n;i>=1;i--){
    rem=i*rem;
}
console.log(`The factorial of ${n} is ${rem}`)
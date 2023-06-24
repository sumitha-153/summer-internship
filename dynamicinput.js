function sum(num1,num2) {
    return num1+num2
}
function sub(num1,num2) {
    return num1-num2
}

function multiply(num1,num2) {
    return num1*num2
}
//console.log(multiply(10,20));
function div(num1,num2) {
    return num1/num2
}
module.exports={sum,sub,multiply,div}
const {sum,sub,multiply,div} = require( './second.js')

 let num1=parseInt(process.argv[2]);
 let num2=parseInt(process.argv[3]);

if(process.argv[4]=='+')
{
    console.log(sum(num1,num2));
}
if(process.argv[4]=='-')
{
    console.log(sub(num1,num2));
}
if(process.argv[4]=='*')
{
    console.log(multiply(num1,num2));
}
if(process.argv[4]=='/')
{
    console.log(div(num1,num2));
}

let a="10"/0
console.log(a)
let num1=10
let num2=50
console.log("Addition of two number",num1, "and", num2,"is",num1+num2)
console.log(`Addition of two numbers ${num1} and  ${num2} is ${num1+num2}`)
console.log(`     Name:sumitha
             Department:CSE
             Section:c
             College:SECE`)

console.log(x)
var x="true";


const user =Object.freeze({
    name:"xyz",
    age:25,
    place:"coimbatore",
    college:"SECE",
    phonenumber:827456723
});
user.school="vvm"
console.log(user.age)
delete user.age
console.log(user)

console.log(Object.keys(user))

console.log(Object.values(user))

const user1 =Object.keys({
    name:"xyz",
    age:25,
    place:"coimbatore",
    college:"SECE",
    phonenumber:827456723
});
user1.sch="vvm"
console.log(user1)
//--->TWO OBJECTS
const details={
    address:{
        city:"Coimbatore",
        street:"Second"
    }
};

console.log(details.address?.place)
for(const key in details){
    console.log(key,details[key])
    console.log(Object.keys(details))
    console.log(Object.keys(details.address))
}
//--->NORMAL FUNCTIONS
(function sum(num1,num2){
    if(typeof num1 === 'number' && typeof num2 === 'number')
    console.log(num1+num2)
    else
    console.log("invalid")
})(15,15)

console.log(`The reuslt is: ${sum(10,20)}`)
console.log(`The reuslt is: ${sum('abcd','90')}`)

//---->ARROW FUNCTION
const sum1=(num1,num2)=>num1+num2
const sum2=(num1,num2)=>{
    return num1+num2
}
console.log(sum1(10,20))
console.log(sum2(10,20))
//---->IIFE (Immediately Invoked Function Expression)
//Higher order function :it gets are return the another function
const sum=(num1,num2)=>num1+num2
const cal=(num1,num2,operation)=>{
    return operation(num1,num2)//call back function
}
console.log(cal(100,200,sum))//console.log(cal(100,200,(num1,num2)=>num1+num2))


----------->DAY-1<-----------------
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
let tstr=" I am sumitha "
console.log(tstr.trim())
let str=tstr.trim()
console.log(str)

let arr=[1,5,"3764",[7,8,9],5.6,(num1)=>num1*5,{a:2, b:2,c:3, say_hello:()=>"hello"}]
console.log(arr[3][1])
for(key in arr[6]){
    console.log(key,arr[6][key])
}
//Different types of Pushing the element at last
let arr=[1,2,3,4,5]
console.log(arr.push(6))
let arr2=[7,8]
arr=arr.concat(arr2)
arr.splice(8,0,9)
console.log(arr)
arr.splice(9,0,10,11,12)
console.log(arr)
console.log(arr.length)
arr.splice(arr.length,0,13,14,15)
console.log(arr)
console.log(arr.slice(4,arr.length))*/
//Slice operator in string
let str="sri eshwar college of engineering"
let str2=str.split(" ")
console.log(str2)
console.log(str2.join(" "))
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let word=[]
for(let i=0;i<str2.length;i++)
{   let ans=(str2[i].charAt(0).toUpperCase() + str2[i].slice(1,))
    word.push(ans)
   console.log(word.join(' '))
}


//----------------------->DAY-2<------------------------//

console.log("Happy morning");

//-------->Palindrome Program:
var str="malayalam"
var rev=str.split("").reverse().join("") //reverse function is applicable only for arrays
if(rev === str)
console.log(true);
else
console.log(false);
let rev1=""
for(var i=str.length-1;i>=0;i--)
{
    rev1+=str[i]
}
if(rev === str)

console.log("Palindrome");
else
console.log("Not Palindrome");
//-------------->For loop (for in and for of)<--------------//
let obj={
    a:2,
    b:3,
    c:4
};
for(keys in obj){
    console.log(keys,obj[keys]);
}
let obj1=[1,2,5,3,4]
for(let key of obj1){
    console.log(key);
}
//----------->Array call back Function<------------//
let name=["Rx100","Himalaiyan","Royal","RN5"]
name.forEach(element => {
    console.log(element.repeat(4).split(" "));
});
arr=[1,3,5,7]
arr.forEach(element=>{
    console.log(element*element);
})
//-------------->MAP FUNCTION<----------------//
let name=["Rx100","Himalaiyan","Royal","RN5"]
let arr3=name.map(ele => ele.repeat(3))//it automatically returns the values
console.log(arr3);
name.map(ele=>{
    console.log(ele.repeat(2))
})

//---------->FILTER FUNCTION<----------------//
//---------->ODD NUMBER<---------------//
let arr=[1,2,3,4,5,6,7,8,9]
let ans=arr.filter(ele=>{
    return (ele%2);
})
console.log(ans);
//----------->EVEN NUMBER<------------//
let ans1=arr.filter(ele=>{
    return !(ele%2);
})
console.log(ans1);
let obj=[
    {
    name:"Honda",
    model:2000
   },
    {
    name:"Splender",
    model:1000
   },
    {
    name:"Hero",
    model:1999
   },
    {
    name:"TVS",
    model:2000
   },
]
let res=obj.filter(ele=>{
    if(ele.model!=(2000))
    return ele.name;
})
console.log(res);
//---------->PRINTONG OLY THE PARTICULAR FIELDS<----------------//
let res1=obj.filter(ele=> ele.model == 2000).map(ele=>ele.name);
console.log(res1);

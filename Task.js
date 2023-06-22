//--------->TASK<--------------//
let emp=[{
    name:"Siva",
    age:35,
    salary:30000,
    phone:8239745
   },
   {
    name:"Pradeep",
    age:25,
    salary:35000,
    phone:823976745
   },
   {
    name:"Arun",
    age:27,
    salary:15000,
    phone:833976745
   },
   {
    name:"Vijay",
    age:50,
    salary:40000,
    phone:823576745
   }
]
let res=emp.filter(ele=>{
    if(ele.salary>=25000)
     console.log([ele.name, ele.age]);
})
let res1=emp.filter(ele=>ele.salary >= 25000).map(ele=>[ele.name,ele.age])
console.log(res1);

//------------->DAY-3<-----------------//
//------------>TASK<-------------//
export const USER_DATA1=[
    {
    id:150,
    name:"sruthi",
    age:30,
    email:"sruthi@sece.ac.in"
    }
]
//FIRST OBJECT

export const USER_DATA=[
    {
    id:150,
    name:"sruthi",
    age:30,
    email:"sruthi@sece.ac.in"
    }
]

// OPERATIONS:CRUD  
//--------->Adding the new object to the already exsisting object<--------------//
 export const adduser=
     {
         name:"sneha",
         id:120,
         email:"sneha@sece.ac.in",
         age:20
     }
//Add function to perform the opration
export const add=(new_user)=>{
  USER_DATA.push(new_user)
}

// Calling the add function
add(adduser)

//deleting the particular value from the object

const deleteid=(id)=>{
    const index=USER_DATA.findIndex((user)=>user.id==id);{
     USER_DATA.splice(index,1)
    }
}
deleteid(150)


//Editing the particular value in the object

const editdata=(id,key,value)=>{
    const user_edit=USER_DATA.findIndex((user)=>user.id==id);
    if(user_edit != -1)
    USER_DATA[user_edit][key]=value
}
editdata(150,'age',18)


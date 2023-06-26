/*
npm---->node package manager.React and express are the packages writen by someone.we are just installing and using it.
to run a express we required 58 packages.The code we installed are present inside the node modules.while creating a packages ,it will give a meta data of the
packages that we created.
To install --->npm instal 
To insatall express package----->npm install express
To uninstall some packges ------>npm uninstall express
JSON starts and ends with curly braceses ---->KEY-VALUE PAIR------------>Keys should always be in "". 
*/
//This the meta data for the package that i had created......


{
  "name": "color-generator",//key value pair
  "version": "1.0.0",
  "description": "To generate random color",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "learn",
    "npm"
  ],
  "author": "Sumitha",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}

//------------>Personal detailsin json formate<--------------------//

{
    "name":"Sumitha",
    "dob":"05-10-2003",
    "age":20,
    "education":{
        "college":"Sri Eshwar College of Engineering",
        "school":"VVM matric hr sec school",
        "CGPA":8.3,  
        "Grade":"95%"
    },
    "Address":{
        "Village":"Kurunalli palayam",
        "taluk":"kinathukadavu",
        "city":"Coimbatore",
        "state":"Tamil nadu",
        "pincode":641202
    },
  
     "parents":{
        "Father":"Palanisamy",
        "Mother":"Devi"
     }
         
}

//---------------->Accessing the json objects using javascrpit<--------------------//

const info=require('./personal.json')
console.log(info);
console.log(info.education);
console.log(info.Address);
console.log(info.parents);
console.log(info.name);

//---------->Accessing the json objexts using for loop and array<---------------//

var key=['name','dob','age','education','Address','parents']
for(var i=0;i<key.length-1;i++){
    console.log(info[key[i]]);
}

    const key=Object.keys(info);
console.log(key);
for(let i=0;i<key.length-1;i++){
    console.log(info[key[i]]);
}

  //----------->Accessing the child objects<------------//
for(let i=0;i<a.length-1;i++){

   if(typeof info[a[i]]== 'object'){
        const key2=Object.keys(info[a[i]])
        for(let j=0;j<key2.length;j++){
             console.log(info[a[i]][key2[j]]);
        }
    }
}

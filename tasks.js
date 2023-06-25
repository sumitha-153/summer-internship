const inputstates=[
'Andhra Pradesh                    ',		
'Arunachal Pradesh                 ',		
'Assam                             '	,	
'Bihar                            ',		
'Chhattisgarh                      ',	 	
'Goa                               ',	
'Haryana                           ',		
'Himachal Pradesh                  '	,	
'Jharkhand                         '		,
'Karnataka	                     '	,
'Kerala                           '	,
'Madhya Pradesh                    ',		
'Maharashtra                       '	,	
'Meghalaya                         '		,
'Mizoram                           '		,
'Nagaland                          '		,
'Punjab	                          '	,
'Rajasthan                         '	,	
'Sikkim	                          ',
'Tamil Nadu                        ',		
'Tripura                           '  ,
'Uttar Pradesh	                  ',	
'UttarakhandDehradun               '	,
'West Bengal                       '	,
'Andaman and Nicobar Islands       '	,
'Chandigarh	                    '	,
'Dadra Nagar Haveli and Daman Diu  '	,	
'Delhi                             ',
'Jammu and Kashmir                 '	,		 	
'Ladakh                            '	 	,
'Lakshadweep                       '	,
'Puducherry                        '];

const inputcapital=[
'   Amaravati',
'   Itanagar'	,
'   Dispur'	,
'   Patna'	,
'   Naya Raipur',
'   Panaji	',
'   Chandigarh	',
'   Shimla	',
'   Ranchi',	
'   Bangalore',
'   Thiruvananthapuram	',
'   Bhopal	',
'   Mumbai	',
'   Shillong',
'   Aizawl',	
'   Kohima',	
'   Chandigarh',	
'   Jaipur',	
'   Gangtok',
'   Chennai',
'   Agartala',	
'   Lucknow',
'   Dehradun, Gairsain (Summer)',
'   Kolkata',
'   Port Blair'	,
'   Chandigarh'	,
'   Daman'	,
'   New Delhi',	
'   Srinagar (Summer), Jammu (Winter)',
'   Leh',	
'   Kavaratti'	,
'   Puducherry']

//const { promises } = require('dns')
 const fs=require('fs')
function write(filename,input){
    return new Promise ((resolve,reject)=>{
        fs.writeFile(filename,input,(err)=>{
            const res=input.toString()
            if(err)
            reject("error")
            else
            resolve(res)
        })
    })
}
write(`${__dirname}/states.txt`,inputstates)
.then((data)=>{
  console.log(data.toString());
}).catch((err)=>{
    console.log(err);
})
write(`${__dirname}/states.txt`,inputcapital)
.then((data)=>{
  console.log(data.toString());
}).catch((err)=>{
    console.log(err);
})
// var {FilesManager }=require('./turbodepot-node.js')
// let fileManager=new FilesManager()
// fileManager.merge.Files('./states','./capital')
for(let i=0;i<inputstates.length-1;i++){
        write(`${__dirname}/statescapital.txt`,inputstates[i]+'-'+inputcapital[i])
           .then((data)=>{
                console.log(data.toString())
           }).catch((err)=>{
             console.log(err);
           })
        }


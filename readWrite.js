const fs= require('fs')
fs.readFile(`${__dirname}/states.txt`,(err,data)=>{
    if(err)
    console.log("Nakku");
    else
    console.log(data.toString());
    const inputdata= "Sing your fav song"
    fs.appendFile(`${__dirname}/states.txt`,inputdata,(err)=>{
        if(err)
        console.log("Oh my God , you caught an error!!!");
        else
        console.log("Well Done!...You completed your work perfectly...");
        console.log('world.....');
    })

})

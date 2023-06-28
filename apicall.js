//------------------->File 1(server.js)<--------------------//
let express=require('express')
let mongoose=require('mongoose')
let app=express()
let router=require('./router/router.js')
let port=3003
mongoose.connect("mongodb://127.0.0.1:27017/Expense_tracker",{//hypertext transfer protocal
useUnifiedTopology:true,//for deployment in cloud
useNewUrlParser:true,
})
.then(()=>console.log("Connected to Database"))
//to change into json formate of<--->incoming req and outgoing res 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//to commect router to external application
app.use(router)//middleware stack--->authentication //in-between the request and response
//give the access to the router before listening the action
//Database connection
//Body-parser---------->to study the data given by request in correct formate like JSON format
//orm---->object relational mapping (mongoose---->orm used in mongodb)

//listen function should always be at end of the file
app.listen(3003,callback())
function callback(){
    console.log("Connected to server");
}

//------------------------->file 2(router.js)<--------------------------------//
let express=require('express')
let expense=require('../models/expense.js')//(./)-->current dir,(../)->comes out of current dir and changes to the dir which we given
let router=express.Router()
let path=require('path')
// router.get('/',(req,res)=>{//function get,put,patch,delete,post
//     res.send("this is get call")
// })
// router.get('/login',(req,res)=>{
//     res.send("This is my login page")
// })
router.post('/expense/create',createExpense)
router.get('/expense/get')
router.patch('/expense/edit')
router.delete('/expense/delete/.id')

async function createExpense(req,res) {
    let body=req.body
    let newExpense=new expense({
        title:body.title,
        amount:body.amount,
        date:body.date
    })
    await newExpense.save()//await ---->waits until it completes the work of this line
    if(body.title=="" || typeof body.title !== String || typeof parseInt(body.amount) !== Number || typeof body.date !== String)
    return res.status(404).send("Values not matched")
    else
    {
        console.log(body);
        return res.send("Expense created")//api is completed becoz,it is responded to the request
    }
}
//(STATUS CODE)--->200->completed successfully,,300(rnge)--->redirecting to the next page,,400 (range)----->error,,(500)--->backend problem
module.exports=router

//----------------------->file 3(expense.js)<--------------------------------------//
let mongoose=require('mongoose')
let expenseSchema=mongoose.Schema({
    title:{type:String},
    amount:{type:Number},
    date:{type:String},
});

module.exports=mongoose.model("expense",expenseSchema)

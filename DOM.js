//------->DOCUMENT OBJECT MODEL<---------//

//console.log(document.body.childNodes);
const allchild=document.body.children;
setInterval(()=>setTimeout(() => {
    
    allchild[0].innerText="BLUE"
    allchild[0].style.color="blue"
   setTimeout(()=> allchild[0].style.color="Black",1000)
    
},1000))
let value=true
setTimeout(() => {
    
    allchild[1].style.color= (value ? "blue" :"Pink")
    value =!value    
},2000)
setTimeout(() => {
    allchild[1].innerText="PINK"
    allchild[1].style.color="pink"

},6000)
setTimeout(() => {
    allchild[2].innerText="YELLOW"
    allchild[2].style.color="Yellow"
    //document.body.innerText=' BLUE '
    //document.body.innerHTML='<div> YELLOW </div>'
},9000)

allchild[1].style.color="BLUE"
allchild[2].style.backgroundColor="green"

//document.body.innerHTML='<div> HELLO </div>'
//document.body.innerText=' Haii'
const button=document.getElementById("loginbutton")
const username=document.getElementById('user')
const password=document.getElementById('pass')
const form=document.getElementById('login')

button.addEventListener('click',(event)=>{
    console.log('event');
})
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('submit',username.value,password.value);
})

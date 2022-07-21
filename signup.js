import { navbar, footer, trust, boximg, silonavbar } from "./components/navbar.js" ;
    document.getElementById("kanavbar").innerHTML = silonavbar() ; 
    document.getElementById("kafooter").innerHTML = footer() ; 

    document.getElementById("b2").innerHTML=`<button id="amsignupbuton" class="a2signupbox">Sign Up With Your Email</button>`

    document.querySelector("#amsignupbuton").addEventListener("click",handlesignup)
   
    function handlesignup(){
        document.querySelector("#amsignupbox").innerHTML=` <label>Name</label>
            <input type="text" id="amname">
            <label>Email</label>
            <input type="email" id="amemail">
            <label>Password</label>
            <input type="password" id="ampassword">
            <label>Confirmation</label>
            <input type="password" id="campassword">
            <p>You will receive the confirmation email after submitting this form.</p>`
            document.getElementById("b2").innerHTML=null
            document.getElementById("b2").innerHTML=`<button id="ammainsignupbuton">Sign Up With Your Email</button>`
            document.querySelector("#ammainsignupbuton").addEventListener("click",handlemainsignup)
    }
        
//************************************************************
let useararr = JSON.parse(localStorage.getItem("Udata"))||[];
//************************************************************
class useardata{
    constructor(n,e,p){
        this.name=n;
        this.email=e;
        this.password=p;
    }
}
//************************************************************
function handlemainsignup(){
    

   let name=document.querySelector("#amname").value;

   let email=document.querySelector("#amemail").value;

   let password=document.querySelector("#ampassword").value;

   let cpassword=document.querySelector("#campassword").value;

   
    let usear = new useardata (name,email,password)
   
//************************************************************
   if(checkemail(email)==false){
    alert ("User already exist!")
    window.location.reload()
   }else if(name==""||email==""||password==""||cpassword==""){
    alert ("Please fill all the credentials!")

   }else  if(checkemail(email)==true&&password==cpassword){
    useararr.push(usear)
    localStorage.setItem("Udata",JSON.stringify(useararr))
    alert ("Sign-Up Succesfull!")
    window.location.reload()
   }
}
//*********************************************************
let checkemail=(email)=>{
    let filtered=useararr.filter((elem)=>{
        return email===elem.email
    })
    if(filtered.length>0){
        return false;
    }else{
        return true;
    }
}
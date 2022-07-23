import { navbar, footer, trust, boximg, silonavbar } from "./components/navbar.js" ;
    document.getElementById("kanavbar").innerHTML = silonavbar() ; 
    document.getElementById("kafooter").innerHTML = footer() ; 

    document.getElementById("b2").innerHTML=`<button id="amsignupbuton" class="a2signupbox">Next</button>`

    document.querySelector("#amsignupbuton").addEventListener("click",handlesignup)
   
    function handlesignup(){
        document.querySelector("#amsignupbox").innerHTML=` 
            <label>Password</label>
            <input type="password" id="ampassword">`
            document.getElementById("b2").innerHTML=null
            document.getElementById("b2").innerHTML=`<a href="sidebar.html" id="ammainsignupbuton">Login</a>`
            document.querySelector("#ammainsignupbuton").addEventListener("click",handlemainsignup)
    }
     //******************************************************    
    let useararr = JSON.parse(localStorage.getItem("Udata"))||[];

    function handlemainsignup(e){
        let lemail=document.querySelector("#amemail").value;
        let lpassword=document.querySelector("#ampassword").value;
        
       
          if(checkemail(lemail)==true && checkpassword(lpassword)==true){
           alert("Login Succesfull!")
          }else{
           e.preventDefault()
           alert("Wrong credentials!")
          }
    }
       
     
     
    
    
    
    //******************************************************
    let checkemail=(lemail)=>{
        let filtered=useararr.filter((elem)=>{
            return lemail===elem.email
        })
        if(filtered.length>0){
            return true;
        }else{
            return false;
        }
    }
    //******************************************************
    let checkpassword=(lpassword)=>{
        let filtered=useararr.filter((elem)=>{
            return lpassword===elem.password
        })
        if(filtered.length>0){
            return true;
        }else{
            return false;
        }
    }
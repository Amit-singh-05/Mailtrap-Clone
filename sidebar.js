// import sidebar from './commonSidebar.js' ; 
// document.getElementById("nsLists").innerHTML = sidebar() ; 
    import setting from "./setting.js" ; 
    document.getElementById("nsSetting").innerHTML = setting() ;
    import planPage from "./plan.js" ;
    document.getElementById("nsSetContainer").innerHTML = planPage() ;
    import dashboard from './db.js';
    document.getElementById("nsDashboard").innerHTML = dashboard() ; 
    let db = document.getElementById("nsDashboard") ; 
    import paymentPage from './payment.js' ;
    document.getElementById("nsPayment").innerHTML = paymentPage() ; 
    import um from './userManagement.js' ; 
    let userPage = document.getElementById('')
    document.getElementById("nsManagement").innerHTML = um() ; 
    import accountSettingPage from './accountSetting.js' ; 
    document.getElementById("nsAccountSetting").innerHTML = accountSettingPage() ; 
    import emailCategoriesPage from './emailCategories.js' ; 
    // console.log(emailCategoriesPage())
    document.getElementById('nsEmailCategories').innerHTML = emailCategoriesPage() ; 
    import apiPage from './api.js' ; 
    document.getElementById("nsApi").innerHTML = apiPage() ; 
    

 $('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
 $(this).parent(".sub-menu").children("ul").slideToggle("100");
 $(this).find(".right").toggleClass("fa-solid fa-angle-down");
});

// var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("page");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    // console.log(btns) ; 

 var current = document.getElementsByClassName("ancActive");
//  console.log(current.item)
 current[0].className = current[0].className.replace(" ancActive", "");
 this.className += " ancActive";
//  window.location.href =  `` ; 

});
} ; 



const links = document.querySelectorAll(".navbar>nav>ul>li>ul>li") ; 
const cards = document.querySelectorAll(".card") ; 

[...links].map((link,index)=>{
    link.addEventListener("click",()=>onLinkClick(link,index),false) ; 
}) ; 
const onLinkClick = (link,currentIndex)=>{
    // console.log(link,currentIndex) ; 
    const selectedItems = link.getAttribute("name") ; 

    cards.forEach((card)=>{
        card.classList.remove("active") ; 
    }) ; 
    const currentCard = [...cards].find((card)=>
    card.classList.contains(selectedItems)
    ) ; 
    currentCard.classList.add("active") ; 

} ; 

let name = JSON.parse(localStorage.getItem("Udata")) ; 
name[0].name ; 
let x=name[0].name
let y=document.querySelectorAll(".nsUserName")

document.querySelector('.nsUserName1').innerHTML = `Name - ${x}` ;
document.querySelector('.nsUserName2').innerHTML = `Name - ${x}` ;
document.querySelector('.nsUserName3').innerHTML = `Name - ${x}` ;
document.querySelector('.nsUserName4').innerHTML = `Name - ${x}` ;
document.querySelector('.nsUserName5').innerHTML = `Name - ${x}` ;
document.querySelector('.nsUserName6').innerHTML = `Name - ${x}` ;


document.querySelector("#nsLogOutButton").addEventListener('click',nsLogOut) ; 

function nsLogOut(){
    localStorage.removeItem("Udata") ; 
    window.location.href = 'index.html' ; 

}

document.querySelector("#am194").addEventListener("click",adddata);
document.querySelector("#am196").addEventListener("click",deletedata);

async function adddata(){
    let data ={
        s:+(document.querySelector("#am189").value),
        Email:document.querySelector("#am191").value,
        Name:document.querySelector("#am192").value,
        id:+(document.querySelector("#id").value),
    }

    data=JSON.stringify(data);

    let response=await fetch('http://127.0.0.1:3000/api/data',{
        method:"POST",
        body:data,
        headers:{
            'Content-Type':'application/json'
        }
    })
    console.log(response)
}


async function deletedata(){
    let itm=document.querySelector("#am195").value;

    let response=await fetch(`http://127.0.0.1:3000/api/data/${itm}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data = await response.json()
    console.log(data)
}







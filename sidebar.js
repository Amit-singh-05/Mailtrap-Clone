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
    console.log(emailCategoriesPage())
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
document.getElementsByClassName('nsUserName').innerHTML = name[0].name ;


document.querySelector("#nsLogOutButton").addEventListener('click',nsLogOut) ; 

function nsLogOut(){
    localStorage.removeItem("Udata") ; 
    window.location.href = 'index.html' ; 

}







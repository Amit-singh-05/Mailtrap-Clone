// import sidebar from './commonSidebar.js' ; 
// document.getElementById("nsLists").innerHTML = sidebar() ; 
import setting from "./setting.js" ; 
    document.getElementById("nsSetting").innerHTML = setting() ;
    import planPage from "./plan.js" ;
    document.getElementById("nsSetContainer").innerHTML = planPage() ;
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







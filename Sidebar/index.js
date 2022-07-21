// import sidebar from './commonSidebar.js' ; 
// document.getElementById("nsLists").innerHTML = sidebar() ; 

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

 var current = document.getElementsByClassName("active");
//  console.log(current.item)
 current[0].className = current[0].className.replace(" active", "");
 this.className += " active";
//  window.location.href =  `` ; 

});
} ; 

// $(document).ready(function () {
//     $('.nav li a ul li a').click(function(e) {

//         $('.nav li a ul li a').removeClass('active');

//         var $this = $(this);
//         if (!$this.hasClass('active')) {
//             $this.addClass('active');
//         }
//         e.preventDefault();
//     });
// }); 

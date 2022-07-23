let useararr = JSON.parse(localStorage.getItem("Udata"))

showdata(useararr)

function showdata(data){
    document.getElementById("hi_localinput").innerHTML=""
    document.getElementById("hi_localemail").innerHTML=""
    data.forEach((el)=>{

        // document.getElementById("#hi_localinput").value=el.name
        // document.getElementById("#hi_localemail").innerText=el.email
        let p=document.createElement("p")
        let input=document.createElement("input")
        input.value=el.name
        p.innerText=el.email

        document.getElementById("hi_localinput").append(input)

        document.getElementById("hi_localemail").append(p)
    })
}
// console.log(useremail)

let updatediv=document.getElementById("updatediv")
document.querySelector("button").addEventListener("click",updatename)

function updatename(){
    updatediv.innerText="Account has been successfully updated"
    updatediv.style.paddingTop="15px"
    updatediv.style.paddingBottom="15px"
    updatediv.style.textAlign="center"
}

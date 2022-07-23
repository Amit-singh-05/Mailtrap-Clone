let updatediv = document.getElementById("updatediv")
    
document.getElementById("hi_button").addEventListener("click",savecard)

savecard()

function savecard() {
    let name = document.querySelector("#hi_card_name").value
    let number = document.querySelector("#hi_card_number").value
    if (number.length == 16) {
            updatediv.innerText = "Your card has been successfully saved"
            updatediv.style.paddingTop = "15px"
            updatediv.style.paddingBottom = "15px"
            updatediv.style.textAlign = "center"
        } if(number.length<16 && number.length>0) {
            document.getElementById("hi_msg").innerText="Invalid card number"
            updatediv.innerText = "Your card has not been successfully saved, Please try again!"
            updatediv.style.paddingTop = "15px"
            updatediv.style.paddingBottom = "15px"
            updatediv.style.textAlign = "center"
            updatediv.style.backgroundColor = "rgb(254, 154, 154)"
            updatediv.style.color="red"

        }
    // console.log(num)
}

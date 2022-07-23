let paymentPage = ()=>{
    return `
    <div  id="hi_main" class="same">
                            <div>
                                <h1>Payment Method</h1>
                            </div>
                            <br>
                            <div id="hi_first">
                                <img src="https://imgkub.com/images/2022/07/22/mailtrap5.png" alt="mailtrap5.png" border="0">
                                <h3>New Card</h3>
                            </div>
                            <br>
                            <div id="hi_card" >
                                <label for="">Cardholder Name</label><br>
                                <input type="text" id="hi_card_name" value="" required><br>
                                <label for="">Card data</label><br>
                                <div id="hi_mm">
                                    <i class="fa fa-id-card" style=" margin-top: 5px;color: rgb(219, 219, 219);margin-left: 10px;"></i>
                                    <input type="number" placeholder="Card Number" id="hi_card_number" required><br>
                                    <div id="year">MM/YY CVC</div>
                                </div>
                                <div><p id="hi_msg" ></p></div>
                                <button id="hi_button" >Save</button>
                            </div>
                        </div>`
}
export default paymentPage ; 

let emailCategoriesPage = ()=>{
    return `
    <div  id="kacontainer">
                            <div class="kacate">
                            <span>Categories Overview</span>
                            <span>2022-07-16 - 2022-07-23</span>
                            </div>
                            <div class="kainput">
                                <input type="text" placeholder="All Domains" />
                                <input type="text" placeholder="All Mailbox Providers" />
                                <input type="text" placeholder="All Categories" />
                                <span>Clear Filters</span>
                            </div>
                            <div class="katable">
                                <span>Table</span>
                                <span>Charts</span>
                                <span>Timeline</span>
                                <div class="kahr"></div>
                            </div>
                            <div  class="kasts">
                                <img style="width: 9%;
                                margin: auto;
                                margin-bottom: 10px;" src="https://ehs.utoronto.ca/wp-content/uploads/2017/11/email-us.png" alt=""><br>
                                <span class="kasendmail">Send Emails to See Statistics</span>
                                <p style="margin: 10px 0px;">Spacify catrgories to get the following stats for each catrgory:</p>
                                <div>
                                    <div>
                                        <img src="https://images.onlinelabels.com/images/clip-art/andrea_S/andrea_S_checkmark_on_circle_1.png" alt="">
                                        <p class="kasendp">Open/Click Rate</p>    
                                    </div>
                                    <div>
                                        <img src="https://images.onlinelabels.com/images/clip-art/andrea_S/andrea_S_checkmark_on_circle_1.png" alt="">
                                        <p class="kasendp">Bounce & Spam</p>
                                    </div>
                                    <div>
                                        <img src="https://images.onlinelabels.com/images/clip-art/andrea_S/andrea_S_checkmark_on_circle_1.png" alt="">
                                        <p class="kasendp">Stats Visualization</p>
                                    </div>
                                    <div>
                                        <img src="https://images.onlinelabels.com/images/clip-art/andrea_S/andrea_S_checkmark_on_circle_1.png" alt="">
                                        <p class="kasendp">Daily Timeline</p>
                                    </div>
                            </div>
                        </div>
                        <div class="kabtn">
                            <button class="kakabtn">Set up Categories Now</button>
                        </div>
                    </div>` ; 

}
export default emailCategoriesPage ; 

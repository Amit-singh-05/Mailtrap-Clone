let accountSettingPage = ()=>{
    return `
    <div id="nsAccountSetting" style="border-radius: 10px;border: 0.5px solid rgb(238, 232, 232);width:100%;margin-left: 32%;" class="content">
                        <div id="updateshown">
                            <h2 id="updatediv"></h2>
                        </div>
                        <div id="hi_mainAS" style="line-height: 8px;">
                            <div>
                                <h1 >Account Settings</h1>
                            </div><br>
                            <!-- <div id="hi_first">
                                <p class="same" style="font-weight: 600; text-align: left;">Account Details</p>
                                
                            </div> -->
                            
                            <div style="margin-top: 10px;"> 
                                <h3 style="border-bottom: 0.5px solid rgb(238, 232, 232);width:50%;padding: 10px;">Account Details</h3>
                                <p style="line-height: 25px; width: 50%;">Accounts allow you to separate projects, for example one account for personal projects and one for company's projects. People who belong to more than one Mailtrap account will see the account name listed in their menu.</p>
                                <div style="margin-top: 20px; line-height: 30px;">
                                    <p style="font-weight: bold;">Account Name</p>
                                    <div style="display: flex; width: 100%;">
                                        <input style="width: 100%; border-radius: 9px;margin: auto; padding: 8px;border: 0.5px solid grey;" placeholder="Enter Name" type="text" >
                                        <button style="background-color: #22d172;margin: auto;cursor: pointer;; margin-left:16px;border-radius: 20px;">Update</button>
                                    </div>
                                    <p style="font-weight: bold; margin-top: 10px;">Account Owner</p>
                                    <div id="nsAccountSEmail">
                                        <p>rsoni2843@gmail.com</p>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                            `
}
export default accountSettingPage ; 

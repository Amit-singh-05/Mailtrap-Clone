let um = ()=>{
    return `
    <div id="nsUmMainDiv">
    <div id="nsUmHeading">
        <h2>User Management</h2>
        <h4>Total Users: 00</h4>
    </div>
    <div id="nsUmContent">
       <div style="border: 1px solid rgb(208, 207, 207); border-radius: 10px;padding: 10px; background: rgb(247, 247, 247);">
            <div class="nsUmLine">
                <span style="font-size: 16; color: #22d172; font-weight: bold;" class="material-symbols-outlined">done</span>
    
                <a style="font-size: 15;">Up to 999 Members</a>
            </div>
            <div class="nsUmLine">
                <span style="font-size: 16; color: #22d172; font-weight: bold;" class="material-symbols-outlined">done</span>
    
                <a style="font-size: 15;">Manage and setup rules of access for each member</a>
            </div>
            <div class="nsUmLine">
                <span style="font-size: 16; color: #22d172; font-weight: bold;" class="material-symbols-outlined">done</span>
    
                <a style="font-size: 15;">Count only users. Account owner is excluded from the limit of users</a>
            </div>
            <div id="nsUmButton">
                <a href="#">Upgrade</a>
                <p>Check how it works</p>
                
            </div>
            
            <div style="font-size: 15px; margin-left:13px" id="nsUmFeatures">
                <p>This feature is available on <b>Team</b>, <b>Business</b>, <b>Premium</b>, or <b>Enterprise</b> plans.</p>
            </div>
       </div>
        <div id="nsSecondHeading">
            <h3>Add or Remove Team Members</h3>
        </div>
        <div id="nsUmNewTable">
            
            <div id="nsUmTableRow">
                <p>Email</p>
                <p>Status</p>
                <p>Name</p>
                <p>Access</p>
            </div>
            <div id="nsUmTableData">
                Your team members will be displayed here
            </div>
        </div>
    </div>
</div>`
}
export default um ; 

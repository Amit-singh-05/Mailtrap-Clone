let apiPage = ()=>{
    return `
    <h1 id="am190">API (<a href="https://mailtrap.docs.apiary.io/#">Docs</a>)</h1>

                        <form id="amaddemail">
                            <h1>Add email</h1>
                            <input type="number" placeholder="S.no" id="am189" required>
                    
                            <input type="email" placeholder="Email" id="am191" required>
                            
                            <input type="text" placeholder="Name" id="am192" required>
                            
                            <input type="number" placeholder="ID" id="id" required>
                            <BUtton id="am194">Add</BUtton>
                        </form>
                        <form id="amdeleteemail">
                            <h1>Delete email</h1>
                            <input type="number" placeholder="ID" id="am195" required>
                            <BUtton id="am196">Delete</BUtton>
                        </form>`
}
export default apiPage ; 

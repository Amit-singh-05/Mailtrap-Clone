let useararr = JSON.parse(localStorage.getItem("Udata"))

        showdata(useararr)

        function showdata(data){
            document.getElementById("hi_JS_p").innerHTML=""
            data.forEach((el)=>{

                let p=document.createElement("p")
                p.innerText=el.email

                document.getElementById("hi_JS_p").append(p)
            })
        }


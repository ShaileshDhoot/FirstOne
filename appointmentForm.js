let submit = document.querySelector(".container");
submit.addEventListener("click", onSubmit)
function onSubmit(e){
    e.preventDefault()
    let name = document.querySelector("#fullname").value     //e.target.fullname.value
    let contact = document.querySelector("#mobileno").value  //e.target.mobileno.value
    let email = document.querySelector("#mailid").value      //e.target.mailid.value
    let dataStore= JSON.parse(localStorage.getItem('personData'))||[]
    const data = {
        name,
        contact,
        email
    }   
    localStorage.setItem("personData" , JSON.stringify(data))
    dataStore.push(JSON.parse(localStorage.getItem('personData')))
}

    //console.log(localStorage);
      
            
                  
            
      
    
      
    


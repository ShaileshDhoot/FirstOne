
  const data = document.querySelector("#press")  
  
  data.addEventListener("click", onRegister)

  function onRegister(event) {
    let fullname = document.getElementById("fullname").value
    console.log(fullname);

    

    let fathername = document.getElementById("fathername").value
    console.log(fathername);

   

    let mothername = document.getElementById("mothername").value
    console.log(mothername);

   
    let birthdate = document.getElementById("birthdate").value
    console.log(birthdate);

    

    let aadharid = document.getElementById("aadharid").value
    console.log(aadharid);

    

    let address = document.getElementById("address").value
    console.log(address);

    

    let mobileno = document.getElementById("mobileno").value
    console.log(mobileno);

    

    let mailid = document.getElementById("mailid").value
    console.log(mailid);
    
    
    // localStorage.setItem("fullname", JSON.stringify(fullname));
    // localStorage.setItem('mothername', JSON.stringify(mothername));
    // localStorage.setItem("fathername", JSON.stringify(fathername));  
    // localStorage.setItem('birthdate',JSON.stringify(birthdate));
    // localStorage.setItem('aadharid', JSON.stringify(aadharid));
    // localStorage.setItem('address',JSON.stringify(address));
    // localStorage.setItem('mobileno', JSON.stringify(mobileno));
    // localStorage.setItem('mailid', JSON.stringify(mailid));
  
    let data1 = {
      "fullname"   : fullname,
      "fathername" : fathername,
      "mothername" : mothername,
      "birthdate"  : birthdate,
      "aadharid"   : aadharid,
      "address"    : address,
      "mobileno"   : mobileno,
      "mailid"     : mailid
    }
    localStorage.setItem("data1", JSON.stringify(data1))
    
 


    }
  
    let myData1 = JSON.parse(localStorage.getItem('data1'))
    console.log(myData1);

  // const ul = document.querySelector('.items')
  // //console.log(ul.firstElementChild)
  // ul.firstElementChild.innerText = 'Hello World';
  // ul.children[0].style.color = 'green'
  // ul.children[1].style.color = 'yellow'

  // const btn = document.querySelector(".btn-dark");
  // btn.addEventListener("click", function(){
  //   console.log("click me more")
  // })
  // btn.addEventListener("click", ()=>{
  //   console.log("click me more");
  // })
 
  
  // btn.addEventListener("mouseover", function(){
  //   btn.style.color = "blue";
  // })
  //  btn.addEventListener("mouseout", ()=>{
  //   btn.style.color = "black";
  //  })






  const data = document.querySelector("#press")  
  
  data.addEventListener("click", onRegister)

  function onRegister(event) {
    let fullname = document.getElementById("fullname").value
    console.log(fullname);

    localStorage.setItem("fullname", fullname);

    let fathername = document.getElementById("fathername").value
    console.log(fathername);

   localStorage.setItem("fathername", fathername);  

    let mothername = document.getElementById("mothername").value
    console.log(mothername);

    localStorage.setItem('mothername', mothername);

    let birthdate = document.getElementById("birthdate").value
    console.log(birthdate);

    localStorage.setItem('birthdate',birthdate);

    let aadharid = document.getElementById("aadharid").value
    console.log(aadharid);

    localStorage.setItem('aadharid', aadharid);

    let address = document.getElementById("address").value
    console.log(address);

    localStorage.setItem('address',address);

    let mobileno = document.getElementById("mobileno").value
    console.log(mobileno);

    localStorage.setItem('mobileno',mobileno);

    let mailid = document.getElementById("mailid").value
    console.log(mailid);
    

    localStorage.setItem('mailid', mailid);
  }


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





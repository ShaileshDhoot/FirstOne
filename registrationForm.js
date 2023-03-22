const data = document.querySelector("#press")  
  
data.addEventListener("click", onRegister)

function onRegister(event) {
  event.preventDefault();
  let fullname = document.getElementById("fullname").value
  // let fathername = document.getElementById("fathername").value
  // let mothername = document.getElementById("mothername").value  
  // let birthdate = document.getElementById("birthdate").value
  // let aadharid = document.getElementById("aadharid").value
  // let address = document.getElementById("address").value
  let mobileno = document.getElementById("mobileno").value
  let mailid = document.getElementById("mailid").value

    // localStorage.setItem("fullname", (fullname));
    // localStorage.setItem('mothername', (mothername));
    // localStorage.setItem("fathername", (fathername));  
    // localStorage.setItem('birthdate',(birthdate));
    // localStorage.setItem('aadharid', (aadharid));
    // localStorage.setItem('address',(address));
    // localStorage.setItem('mobileno', (mobileno));
    // localStorage.setItem('mailid', (mailid));
  
   // make new array to store data on every time we enter new data and dubmit
    

     //condition has been enabled if data is there in array then return that data, else return empty array

    let dataRecords=JSON.parse(localStorage.getItem('data1'))?JSON.parse(localStorage.getItem('data1')):[]
    
    // push data into array in form of object

    dataRecords.push({
      "fullname"   : fullname,
      // "fathername" : fathername,
      // "mothername" : mothername,
      // "birthdate"  : birthdate,
      // "aadharid"   : aadharid,
      // "address"    : address,
      "mobileno"   : mobileno,
      "mailid"     : mailid
    })

   // set data in array in local storage string format using json method
    localStorage.setItem("data1", JSON.stringify(dataRecords))

   // now we push that data into array that we obtain after using JSON method
    dataRecords.push(JSON.parse(localStorage.getItem('dataRecords')))

    //  console.log(dataRecords);
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





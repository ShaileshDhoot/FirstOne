function onregister() {
    const fullname = document.getElementById("fullname").value
    console.log(name);
    const fathername = document.getElementById("fathername").value
    console.log(fathername);
    const mothername = document.getElementById("mothername").value
    console.log(mothername);
    const birthdate = document.getElementById("birthdate").value
    console.log(birthdate);
    const aadharid = document.getElementById("aadharid").value
    console.log(aadharid);
    const address = document.getElementById("address").value
    console.log(address);
    const mobileno = document.getElementById("mobileno").value
    console.log(mobileno);
    const mailid = document.getElementById("mailid").value
    console.log(mailid);
  }


  const ul = document.querySelector('.items')
  console.log(ul.firstElementChild)
  ul.firstElementChild.innerText = 'Hello World';
  ul.children[0].style.color = 'green'
  ul.children[1].style.color = 'yellow'
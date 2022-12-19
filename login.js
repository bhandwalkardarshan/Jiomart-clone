let form = document.querySelector("form");
    let LSdata =JSON.parse(localStorage.getItem("account-data"));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let email1 = document.getElementById("email").value;
      let password1 = document.getElementById("password").value;
      
     for(let i=0;i<LSdata.length;i++){
      if(LSdata[i].email == email1 && LSdata[i].password == password1){
        alert("Log in Successful");
      }
      else {
        alert("Wrong Credentials");
      }
     }
     form.reset()
    });
  
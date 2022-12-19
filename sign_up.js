let form = document.querySelector("form");
let data = JSON.parse(localStorage.getItem("account-data"))||[];

form.addEventListener("submit",(event)=> {
  event.preventDefault();

  let formData = {
    firstname:form.firstname.value,
    lastname:form.lastname.value,
    email:form.email.value,
    password:form.password.value
  }
  if(form.password.value.length>7){
      alert("Account has been created successfully!")
      data.push(formData);
      localStorage.setItem("account-data",JSON.stringify(data));
  }
  else {
      alert("Password must have more than 8 characters")
  }
  form.reset();
})
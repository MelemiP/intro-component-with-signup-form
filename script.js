const fname = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");
const submit = document.getElementById("submit");
const fSmall = document.getElementById("f");
const lSmall = document.getElementById("l");
const eSmall = document.getElementById("e");
const pSmall = document.getElementById("p");
const form = document.querySelector("form"); 

 
function needValueFirst() {
  if (fName.value === "") { 
      fName.classList.add("error")
      fName.removeAttribute("placeholder") 
      fSmall.innerHTML = "First name cannot be empty"
  }   
}

function needValueLast() {
  if (lName.value === "") {
    lName.classList.add("error")
    lName.removeAttribute("placeholder")
    lSmall.innerHTML = "Last name cannot be empty"
  }
}

function needValueEmail() { 
  if (email.value === "") { 
    email.classList.add("error")
    document.getElementsByName("email")[0].placeholder = "email@example/com" 
    email.classList.add("email")
    eSmall.innerHTML = "Looks like this is not an email"
  } 
}

/* RegEx
function emailValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const emailValid = (email) => {
   const ev =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return ev.test(email);
};
*/


function needValuePassword() {
  if (password.value === "") {
    password.classList.add("error")
    password.removeAttribute("placeholder")
    pSmall.innerHTML = "Password cannot be empty "
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  needValueFirst()
  needValueLast()
  needValueEmail()
  needValuePassword()
}) 








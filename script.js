const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const password2Error = document.getElementById("password2Error");

submitBtn.addEventListener("click" , (e) =>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatepassword() && checkPasswordMatch()){
        alert("Form Submitted Successfully")
      
       
    }
    
})

// Full Name function
function validateName(){
    let name = document.getElementById('name').value
   
   if(name.length == 0){
    nameError.innerHTML = "Name is required"
    nameError.previousElementSibling.classList.add('fa-times')
    return false;
   }

   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Write your full name"
    nameError.previousElementSibling.classList.add('fa-times')
    return false;
   }
   nameError.innerHTML = ""
   nameError.previousElementSibling.classList.add('fa-check')
   return true
   
}


// Email function

function validateEmail(){
    let email = document.getElementById('email').value
    
    if(email.length == 0){
        emailError.innerHTML = "Write valid email"
        emailError.previousElementSibling.classList.add('fa-times')
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter valid email"
        emailError.previousElementSibling.classList.add('fa-times')
        return false;
       }
       emailError.innerHTML = ""
       emailError.previousElementSibling.classList.add('fa-check')
       return true

}

// Password function

function validatepassword(){
    let password = document.getElementById('Password').value
    
    if(password.length == 0){
        passwordError.innerHTML = "Password is required"
        passwordError.previousElementSibling.classList.add('fa-times')
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/)){
        passwordError.innerHTML = "Password should contain 1 Uppercase , 1 Lowercase , 1 Digit & 1 Alphabet"
        passwordError.previousElementSibling.classList.add('fa-times')
        return false;
       }
       passwordError.innerHTML = ""
       passwordError.previousElementSibling.classList.add('fa-check')
       return true

}

// confirm password

function checkPasswordMatch(){
    let password2 = document.getElementById('password2').value
    let password = document.getElementById('Password').value
    // console.log(password2)
    // console.log(password)
    
    if(password2.length == 0){
        password2Error.innerHTML = "Password is required"
        password2Error.previousElementSibling.classList.add('fa-times')
        return false;
       
    }
    if(password !== password2){
        password2Error.innerHTML = " Password don't Match "
        password2Error.previousElementSibling.classList.add('fa-times')
        // console.log(password2)
        return false
    }
        password2Error.innerHTML = ""
        password2Error.previousElementSibling.classList.add('fa-check')
        // password2.innerHTML = "Match Password"
        return true;
       
}     
   




















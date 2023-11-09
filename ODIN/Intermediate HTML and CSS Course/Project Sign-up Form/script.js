const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword")





document.addEventListener('DOMContentLoaded', ()=> {

    let submitButton = document.getElementById('submitButton');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirmPassword');
    let error = document.getElementById("error");
    

    submitButton.addEventListener('click', ()=> {
        
        let passwordValue = passwordInput.value;
        let confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue !== confirmPasswordValue){
        error.textContent = "Error. Passwords don't match!";
       
    }else{
        error.textContent ="";
    }
    
    });
         
});
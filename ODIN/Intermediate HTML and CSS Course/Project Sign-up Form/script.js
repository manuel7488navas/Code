const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword")
const error = document.querySelector("#password + span.error");

function verifyPassword(){
    let passwordValue = document.getElementById("password").value;
    if(passwordValue === " "){
        document.getElementsById("error").innerHTML = "Must enter a valid password, please."
        return false;  
    }
}
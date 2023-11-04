const password = document.getElementById("password")
const message = document.getElementById("message")
const strength = document.getElementById("strength")

const submitButton = document.querySelector("button");

password.addEventListener("input", function (){

    const passwordValue = password.value;
    const passwordLength = passwordValue.length;
    // add more validation
const hasLetter = /[a-zA-Z]/.test(passwordValue);
const hasNumber = /\d/.test(passwordValue);
const hasSpecialChars = /[\^$*.\[\]{}()?\-"!@#%&/,><':;|_~`]/.test(passwordValue);


    let strengthValue = '';
    if (password === 0) {
        strengthValue = '';
    }
    else if(passwordLength < 6 || hasLetter && !hasNumber && !hasSpecialChars){
strengthValue = "Weak";
    }
    else if(passwordLength <10 || hasLetter && hasNumber && !hasSpecialChars){
        strengthValue = "Medium"
    }
    else if (passwordValue.length < 10 || hasLetter && hasNumber && hasSpecialChars) {
        strengthValue = "Strong";
    }

    strength.textContent = strengthValue;
    message.style.display = "block"

});


// on buttton click change the password visiblity

submitButton.addEventListener("click",function(){
    const passwordType = password.getAttribute('type');
    if(passwordType === 'password')
    {
        password.setAttribute('type','text')}
        else{
            password.setAttribute('type','password')
        }
})
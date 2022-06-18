const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errormsg = document.querySelectorAll(".error");


function validateForm() {

    // console.log("Done");

    clearMessage()

    if(firstNameInput.value.length < 1){
        errormsg[0].innerText =  "First Name cannot be empty";
        firstNameInput.classList.add("error-border");
        document.getElementById('fa1').style.display = 'block';
    }

    if(lastNameInput.value.length < 1){
        errormsg[1].innerText =  "Last Name cannot be empty";
        lastNameInput.classList.add("error-border");
        document.getElementById('fa2').style.display = 'block';
    }

    if(!emaiIsValid(email.value)){
        errormsg[2].innerText =  "Looks like this is not an email";
        emailInput.classList.add("error-border");
        document.getElementById('fa3').style.display = 'block';
    }

    if(passwordInput.value.length < 1){
        errormsg[3].innerText =  "password cannot be empty";
        passwordInput.classList.add("error-border");
        document.getElementById('fa4').style.display = 'block';
    }

}

function clearMessage(){
    for(let i = 0; i < errormsg.length; i++){
        errormsg[i].innerText = ""
    }
    firstNameInput.classList.remove("error-border");
    lastNameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border")
    passwordInput.classList.remove("error-border")
    document.getElementById('fa1').style.display = 'none';
    document.getElementById('fa2').style.display = 'none';
    document.getElementById('fa3').style.display = 'none';
    document.getElementById('fa4').style.display = 'none';

}

function emaiIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email); 
}
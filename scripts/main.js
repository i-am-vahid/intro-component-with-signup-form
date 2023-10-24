let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let submit_btn = document.getElementById('submit_btn')

let firstName_flag = false;
let lastName_flag = false;
let email_flag = false;
let password_flag = false;

window.onload= ()=>{
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
    
}
function removeError(elem){
    let error_pic = elem.nextElementSibling
    let error_msg = elem.nextElementSibling.nextElementSibling
    error_msg.style.display= 'none'
    error_pic.style.display= 'none'
}

function showError(elem){
    let error_pic = elem.nextElementSibling
    let error_msg = elem.nextElementSibling.nextElementSibling
    error_msg.style.display= 'block'
    error_pic.style.display= 'block'
}

function fistNameCheck(text,elem){
    if (!text){
        showError(elem)
    }else{
        firstName_flag = true
        removeError(elem)
    }
}
function lastNamecheck(text,elem){
    if (!text){
        showError(elem)
        
    }else{
        lastName_flag = true
        removeError(elem)

    }
}


function emaiCheck(text,elem){
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text))){
        showError(elem)
    }else{
        email_flag = true
        removeError(elem)
    }
}

function passwordCheck(text,elem){
    if (!(text)){
        showError(elem)
    }else{
        password_flag = true
        removeError(elem)

    }
}


firstName.addEventListener('blur',(e)=>{fistNameCheck(e.target.value,e.target)})
lastName.addEventListener('blur',(e)=>{lastNamecheck(e.target.value,e.target)})
email.addEventListener('blur',(e)=>{emaiCheck(e.target.value,e.target)})
password.addEventListener('bulr',(e)=>{passwordCheck(e.target.value,e.target)})

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if (!(firstName_flag && lastName_flag && email_flag && password_flag)){
        fistNameCheck(firstName.value,firstName)
        lastNamecheck(lastName.value,lastName)
        emaiCheck(email.value,email)
        passwordCheck(password.value,password)



    }else{
        console.log(true)
    }

})
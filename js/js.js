

function form(){
      event.preventDefault();


    let isValid = true;

    let name = document.getElementById('name').value.trim();
    let surname = document.getElementById('surname').value.trim();
    let age = document.getElementById('age').value.trim();
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let gender = document.getElementById('gender').value.trim();
    let pw = document.getElementById('pw').value.trim();
    let cp = document.getElementById('cp').value.trim();


if(!name){
    document.getElementById('name_error').innerHTML = "Name is required!";
    
    isValid = false;
}
if(!surname){
    document.getElementById('surname_error').innerHTML = "Surname is required!";
    isValid = false
}
if(!age){
    document.getElementById('age_error').innerHTML = "age is required!"
} else if (isNaN(age) || age <= 0) {
     document.getElementById('age_error').innerHTML = "please write in numbers"
     isValid = false;
}
if(!username){
    document.getElementById('username_error').innerHTML = "username is required!";
}else if(username.length < 5){
    document.getElementById('username_error').innerHTML = "username must be 8 characters long."
    isValid = false
}
if(!gender){
    document.getElementById('gen_error').innerHTML = "gender is required!"
    isValid = false
}
if(!email){
    document.getElementById('email_error').innerHTML = "email is required!"
}
if(!pw){
    document.getElementById('pw_error').innerHTML = "password is required!";
    isValid = false
}
if(!cp){
    document.getElementById('cp_error').innerHTML = "please confirm your password!";
    isValid = false
}else if(pw !== cp){
     document.getElementById('cp_error').innerHTML = "password do not match"
     isValid = false
}

document.onkeydown = (e) => {
    if (e.key === "Enter" && document.getElementById('gender').value !== "") {
        start(e);
    }

}
}

const form = document.getElementById('form');
const email = document.getElementById('email');
const checkbox = document.getElementById('check');

form.addEventListener('submit',function(event){
    event.preventDefault()

    if (check.checked == true){
        localStorage.setItem('usuario', email.value);
        location.href="index.html";
    }else{
        sessionStorage.setItem('usuario', email.value);
        location.href="index.html";
    }
});

document.addEventListener("DOMContentLoaded", function(e){
});
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('check');

let usuarios = Array({
    email: email.value,
    contraseña: password.value
});    

form.addEventListener('submit',function(event){
    event.preventDefault()

    if (check.checked == true){
        localStorage.setItem('usuario',JSON.stringify(usuarios));
        location.href="index.html";
    }else{
        sessionStorage.setItem('usuario',JSON.stringify(usuarios));
        location.href="index.html";
    }
});     

if onSignIn(googleUser){
    localStorage.setItem("guser", googleUser.getBasicProfile());
    location.href="index.html";
}

document.addEventListener("DOMContentLoaded", function(e){
});
let formLogin = document.querySelector ('#formLogin')

formLogin.addEventListener ('submit', function(e) {
    e.preventDefault();

    let inputEmail = document.querySelector('#inputEmail');
    let inputPassword = document.querySelector('#inputPassword');
    let errorEmail = document.querySelector('#errorEmail');
    let errorPassword = document.querySelector('#errorPassword');

    errorEmail.innerText = '';
    errorPassword.innerText = '';

    let hayErrores = false;

    if (inputEmail.value === '') {
        errorEmail.innerText = 'El email es obligatorio';
        hayErrores = true;
    }

    if (inputPassword.value === '') {
        errorPassword.innerText = 'La contraseña es obligatoria';
        hayErrores = true;
    } else if (inputPassword.value.length < 6) {
        errorPassword.innerText = 'La contraseña debe tener al menos 6 caracteres';
        hayErrores = true;
    }
    if (hayErrores === false) {
        window.location.href = './index.html?email=' + inputEmail.value;
    }
})
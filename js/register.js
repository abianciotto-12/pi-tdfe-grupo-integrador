let formRegister = document.querySelector('#formRegister');

formRegister.addEventListener('submit', function(e) {
    e.preventDefault();

    let inputEmail = document.querySelector('#inputEmail');
    let inputPassword = document.querySelector('#inputPassword');
    let inputRepetirPassword = document.querySelector('#inputRepetirPassword');

    let errorEmail = document.querySelector('#errorEmail');
    let errorPassword = document.querySelector('#errorPassword');
    let errorRepetirPassword = document.querySelector('#errorRepetirPassword');

    errorEmail.innerText = '';
    errorPassword.innerText = '';
    errorRepetirPassword.innerText = '';

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

    if (inputRepetirPassword.value !== inputPassword.value) {
        errorRepetirPassword.innerText = 'Las contraseñas no coinciden';
        hayErrores = true;
    }

    if (hayErrores === false) {
        window.location.href = './login.html';
    }
});
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let email = queryStringObj.get('email');

let navder = document.querySelector('.navder');

if (email !== null) {
    navder.innerHTML = '<li>Bienvenido: ' + email + '</li><li><a href="#" id="linkLogout">logout</a></li>';
} else {
    navder.innerHTML = '<li><a href="./login.html">LOGIN</a></li><li><a href="./register.html">REGISTRO</a></li>';
}
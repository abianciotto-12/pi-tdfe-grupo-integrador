let linkLogout = document.querySelector('#linkLogout');

if (linkLogout !== null) {
    linkLogout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('email');
        window.location.href = './index.html';
    });
}
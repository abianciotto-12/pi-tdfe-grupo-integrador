let linkLogout = document.querySelector('#linkLogout');

if (linkLogout !== null) {
    linkLogout.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = './index.html';
    });
}
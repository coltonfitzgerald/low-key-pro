var toggleNav = document.getElementById('menu-toggle'),
    body = document.body;

toggleNav.onclick = function () {
    if (body.classList.contains('show-nav')) {
        body.classList.remove('show-nav');
    } else {
        body.classList.add('show-nav');
    }
};

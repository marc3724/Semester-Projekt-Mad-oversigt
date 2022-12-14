const sidebar = document.querySelector('.sidebar');
const navItem = document.querySelector('nav .nav-item');
const toggle = document.querySelector('.slider .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');
});

va
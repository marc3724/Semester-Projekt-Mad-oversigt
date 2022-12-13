const sidebar = document.querySelector('.sidebar');
const navItem = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.slider .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');
        
});

navItem.forEach(navItem => {

    navItem.addEventListener('click',() => {

        navItem.forEach(navItem => {
            sidebar.classList.remove('active')
        });

        sidebar.classList.add('active')

    });

});
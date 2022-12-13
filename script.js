const sidebar = document.querySelector('.sidebar');
const navItem = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.slider .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');
        
});

/* ClassList can be changed to className and change the open to add Sidebar open/sidebar */

navItem.forEach(navItem => {

    navItem.addEventListener('click',() => {

        navItem.forEach(navItem => {
            sidebar.classList.remove('active')
        });

        sidebar.classList.add('active')

    });

});
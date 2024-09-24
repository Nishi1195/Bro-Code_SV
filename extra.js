document.addEventListener("DOMContentLoaded" , function(){
    const nav_center = document.querySelector('.navbar-center');
    const nav_right = document.querySelector('.navbar-right');
    const icon = document.querySelector('.Icon');

    function toggleNavbar() {
        if (window.innerWidth <= 768){
            nav_center.classList.add('hide');
            nav_right.classList.add('hide');
            icon.classList.remove('hide');
        }

        else{
            nav_center.classList.remove('hide');
            nav_right.classList.remove('hide');
            icon.classList.add('hide');
        }
    }

    // Run on page load
    toggleNavbar();
    
    // Run on window resize
    window.addEventListener('resize', toggleNavbar);

    // Toggle navbar visibility on icon click
    icon.addEventListener('click', function () {
        nav_center.classList.toggle('hide');
        nav_right.classList.toggle('hide');
        });
});
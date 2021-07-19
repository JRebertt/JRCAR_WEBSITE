(function(){
    
    'use strict';
    
    
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');
    var body = document.body;
    var bodyClass = 'menu-active';
    var show = false;
    var timeout = 300; // transition or animation duration
    
    
    menuIcon.addEventListener('click', function() {
        show = !show;
        if (show) return showMenu();
        return closeMenu();
    }, false);
    
    
    function showMenu() {
        menu.style.display = 'flex';

        setTimeout(function() {
            body.classList.add(bodyClass);
        }, 0);
    }

    
    function closeMenu() {
        body.classList.remove(bodyClass);

        setTimeout(function() {
            menu.style.display = 'none';
        }, timeout);
    }
    
    
}());
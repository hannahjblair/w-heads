//the select stat menu
var navLinks = document.querySelectorAll('.nav-menu li > a');

[].slice.call(navLinks).forEach(function(link) {
    link.addEventListener('click', function(e) {
        var subMenu = e.target.nextElementSibling;
        if (subMenu.tagName === 'UL') {
            var className = subMenu.className.indexOf('active') !== -1 ? 'menu' : 'menu active';
            subMenu.className = className;
        }
    }, false);
});
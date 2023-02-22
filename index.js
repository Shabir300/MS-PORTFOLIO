const menuBtn = document.querySelector(".menu-icon")
    nav = document.querySelector('nav');
 const   navStyles = window.getComputedStyle(nav);


menuBtn.addEventListener("click", function() {
    if(navStyles.getPropertyValue('clip-path') === 'circle(0% at 100% 0%)') {
        nav.style.clipPath = 'circle(100% at 50% 50%)'
    }

    else {
        nav.style.clipPath = 'circle(0% at 100% 0%)'
    }
})
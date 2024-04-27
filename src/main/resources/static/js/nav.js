export function stickNavigationOnTop() {
    window.onscroll = function () { stickyNav() }

    const weekNavigationElement = document.querySelector('.days-navigation');
    const sticky = weekNavigationElement.offsetTop;
    function stickyNav() {
        if (window.scrollY > sticky) {
            weekNavigationElement.classList.add('sticky');
        } else {
            weekNavigationElement.classList.remove('sticky');
        }
    }
}
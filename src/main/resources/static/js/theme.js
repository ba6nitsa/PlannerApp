const bodyElement = document.body;
const themeElement = document.querySelector('.dropdown .theme');
const sunElement = document.querySelector('.theme i');

export function changeTheme() {


    themeElement.addEventListener('click', () => {
        if (!localStorage.getItem('dark-theme')) {
            bodyElement.classList.add('dark-theme');
            sunElement.classList.remove('fa-solid', 'fa-sun', 'fa-xl')
            sunElement.classList.add('fa-solid', 'fa-moon', 'fa-xl')
            localStorage.setItem('dark-theme', 'dark-theme')
        } else {
            bodyElement.classList.remove('dark-theme');
            sunElement.classList.remove('fa-solid', 'fa-moon', 'fa-xl');
            sunElement.classList.add('fa-solid', 'fa-sun', 'fa-xl')
            localStorage.removeItem('dark-theme')
        }
    })
}


export function preloadTheme() {
    const theme = localStorage.getItem('dark-theme')
    if (theme) {
        bodyElement.classList.add(theme)
        sunElement.classList.remove('fa-solid', 'fa-sun', 'fa-xl')
        sunElement.classList.add('fa-solid', 'fa-moon', 'fa-xl')
    }
}
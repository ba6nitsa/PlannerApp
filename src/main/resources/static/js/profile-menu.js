export function styleMenu() {
    const profileElement = document.querySelector('.profile');
    const toggleElement = document.getElementById('toggle');
    const profileImage = document.querySelector('.profile img');
    const toggleLabel = document.querySelector('label[for="toggle"]');
    const closingmenuElement = document.createElement('i');
    closingmenuElement.classList.add('fa-solid', 'fa-x');


    profileElement.addEventListener('click', () => {
        if (!toggleElement.checked) {

            profileImage.remove()
            toggleLabel.appendChild(closingmenuElement)

        } else {

            closingmenuElement.remove();
            toggleLabel.appendChild(profileImage);
        }
    })
}


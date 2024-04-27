export function correctWeekInput() { weekInput() }

const weekInputElement = document.querySelector('.week-selector');



function weekInput() {
    const today = new Date();
    const weekNumber = getWeekNumber(today);
    const year = today.getFullYear();

    weekInputElement.value = `${year}-W${weekNumber}`
    

}

function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
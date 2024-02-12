export function getFormattedWeekday(date) {
    return date.toLocaleString('fr-FR', {weekday: 'long'});
}

export function getFormattedDayNumber(date) {
    return date.toLocaleString('fr-FR', {day: 'numeric'});
}

export function getFormattedMonth(date, long = false) {
    if(long) {
        return date.toLocaleString('fr-FR', {month: 'long'});
    }
    return date.toLocaleString('fr-FR', {month: 'short'});
}

export function getWeekMondayDate(date) {
    const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    const monday = new Date(date);
    return new Date(monday.setDate(diff));
}

export function getDateFromWeekMonday(weekMonday, day) {
    const date = new Date(weekMonday);
    return new Date(date.setDate(date.getDate() + day));
}
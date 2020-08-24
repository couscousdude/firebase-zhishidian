const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October', 
    11: 'November',
    12: 'December'
}

export default function monthYearCounter(currentMonth, currentYear) {
    if (!months.hasOwnProperty(currentMonth)) return {};
    let result = [];

    let year = currentYear;
    let month = currentMonth + 1;
    let counter = 0;

    while (counter < 12) {
        month--;
        if (month === 0) { month = 12; year-- }
        counter++;
        result.push({ title: `${months[month]} ${year}`, url: `?archive=${month}+${year}` });
    }
    return result;
}
export { months }
function dayOfWeek(day) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = 'error';
    for (let i = 0; i < daysOfWeek.length; i++) {
        if (daysOfWeek[i] === day) {
            result = i + 1;
            break;
        }
    }
    console.log(result);
}
dayOfWeek('Friday')
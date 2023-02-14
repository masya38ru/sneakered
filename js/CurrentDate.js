setInterval(clock, 10);
function clock()
{
    let data = new Date();
    let month;
    if (data.getMonth() == 0) {month = 'января'}
    else if (data.getMonth() == 1) {month = 'февраля'}
    else if (data.getMonth() == 2) {month = 'марта'}
    else if (data.getMonth() == 3) {month = 'апреля'}
    else if (data.getMonth() == 4) {month = 'мая'}
    else if (data.getMonth() == 5) {month = 'июня'}
    else if (data.getMonth() == 6) {month = 'июля'}
    else if (data.getMonth() == 7) {month = 'августа'}
    else if (data.getMonth() == 8) {month = 'сентября'}
    else if (data.getMonth() == 9) {month = 'октября'}
    else if (data.getMonth() == 10) {month = 'ноября'}
    else if (data.getMonth() == 11) {month = 'декабря'}

    let date = "Сегодня: " + data.getDate() + " " + month + " " + data.getFullYear() + " года";
    let time  = "Сейчас: " + data.getHours() + " часов " +  data.getMinutes() + " минут";
    document.getElementById('today').innerHTML = date;
    document.getElementById('now').innerHTML = time;
}

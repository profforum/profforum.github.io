document.write('<span id="ny_date">До нового года</span>')
function ojidanieNG()
{
    var today = new Date();

       var BigDay = new Date("January 1, 2024"); // указываем нужный год
       var timeLeft = (BigDay.getTime() - today.getTime());

        var e_daysLeft = timeLeft / 86400000;
       var daysLeft = Math.floor(e_daysLeft);

    var e_hrsLeft = (e_daysLeft - daysLeft)*24;
    var hrsLeft = Math.floor(e_hrsLeft);

    var e_minsLeft = (e_hrsLeft - hrsLeft)*60;
    var minsLeft = Math.floor(e_minsLeft);

    var seksLeft = Math.floor((e_minsLeft - minsLeft)*60);

 if (BigDay.getTime() > today.getTime() )
        document.getElementById("ny_date").innerHTML = 'До <font color=red><b>Нового года</b></font>: <b>'+daysLeft+'</b> дней, <b>'+hrsLeft+'</b> часов, <b>'+minsLeft+'</b> минут, <b>'+seksLeft+'</b> секунд'
    else
        document.getElementById("ny_date").innerHTML = '<b>Поздравляем с <font color=red>Новым 2024 годом</font>!!!</b>'
}
setInterval("ojidanieNG()", 50)
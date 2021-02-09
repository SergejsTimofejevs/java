window.addEventListener('DOMContentLoaded', function() {
    let deadline = '2021-2-10';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minuts = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    return {
        'total': t,
        'hours': hours,
        'minuts': minuts,
        'seconds': seconds
    };
}

function addZero(val){
    if (+val < 10) {
        val = '0' + val;
    }
    return val;
}

function setClock(id, endtime) {
    let timer =  document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);
    updateClock();


    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minuts);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
          }
    }
}

setClock('timer', deadline);

});
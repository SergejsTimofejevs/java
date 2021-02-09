let deadline = '2021-2-20';

function getTimeRemaining(endtime) {
    let total = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minuts = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    return {
        'total': total,
        'hours': hours,
        'minuts': minuts,
        'seconds': seconds
    };
}

function setClock(id, endtime) {
    let timer =  document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minute'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);



    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minuts;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);


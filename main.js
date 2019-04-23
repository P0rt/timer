const timer = document.getElementById('timer');
let minutes = 0;
let seconds = 0;

// запускаем таймер
function timerStart() {
    console.log('пять минут, Турецкий!');
    countSeconds = setInterval(countTime, 1000);
}

// функция увеличения таймера на 1 секунду за раз.
function countTime() {
    seconds += 1;

    if (seconds < 10) {
        timer.innerHTML = minutes + ":0" + seconds;
    } else if ((seconds >= 10) && (seconds<=59)) {
        timer.innerHTML = minutes + ":" + seconds;
    } else if (seconds = 60){
        minutes += 1;
        seconds = 0;
        timer.innerHTML = minutes + ":0" + seconds;
    }
}

// стоп таймер
function timerStop() {
    clearInterval(countSeconds);
}

// сброс таймера
function timerReset() {
    seconds = 0;
    minutes = 0;
    timer.innerHTML = '0:00';
}

timer.addEventListener('click', timerStart);

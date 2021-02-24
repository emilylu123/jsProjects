window.onload = function () {
    let timer = 10;
    setInterval(() => {
        timer--;
        document.getElementById('countdown').innerText = timer;
        if (timer == 0) {
            location.href = 'http://yingyao.codes';
        }
    }, 1000);
}

document.getElementById('returnHome').onclick = () => {
    location.href = 'http://yingyao.codes';
}

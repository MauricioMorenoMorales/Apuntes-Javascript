const d = document,
    cl = console.log,
    a = alert

let clockTempo;
d.addEventListener('click', e => {
    cl(e.target)
    //!Toggle Menu clase 81
    if(e.target.matches('.panel-btn') || e.target.matches('.panel-btn *')){
        d.querySelector('.panel').classList.toggle('is-active')
        d.querySelector('.panel-btn').classList.toggle('is-active')
    }
    if(e.target.matches('.menu a')){
        d.querySelector('.panel').classList.remove('is-active')
        d.querySelector('.panel-btn').classList.remove('is-active')
    }
    //! Reloj clase 83
    let alarmTempo
    const $alarm = document.createElement('audio')
    $alarm.src = "./assets/alarma.mp3"
    if(e.target.matches('#activar-reloj')){
        clockTempo = setInterval(() => {
            let reloj = new Date().toLocaleTimeString()
            d.querySelector('#reloj').innerHTML = `<h3>${reloj}</h3>`
        }, 1000);
        e.target.disabled = true
    }
    if(e.target.matches('#desactivar-reloj')){
        clearInterval(clockTempo)
        d.querySelector('#reloj').innerHTML = null
        d.querySelector('#activar-reloj').disabled = false
    }
    if(e.target.matches('#activar-alarma')){
        alarmTempo = setTimeout(() => {
            $alarm.play()
        }, 1000);
        e.target.disabled = true
    }
    if(e.target.matches('#desactivar-alarma')){
        clearTimeout(alarmTempo);
        $alarm.pause();
        $alarm.currentTime = 0;
        d.getElementById('activar-alarma').disabled = false
    }
})

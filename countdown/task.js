function tumer_func() {
    const timer = document.getElementById("timer");
    if (Number(timer.textContent) > 50) {
        timer.textContent -= 1
    } else {
        alert("Вы победили в конкурсе!")
    }
}

setInterval(tumer_func, 1000)




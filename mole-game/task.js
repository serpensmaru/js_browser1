function getHole(index) { return document.getElementById(`hole${index}`)}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i)
    hole.onclick = () => {
        let dead = document.getElementById("dead"),
            lost = document.getElementById("lost"),
            cls = hole.className
        if (cls == "hole hole_has-mole") {
            if (Number(dead.textContent) < 9) {
            dead.textContent = Number(dead.textContent) + 1
            } else {
                alert("Вы выйграли")
                dead.textContent = 0
                lost.textContent = 0
            }
        } else {
            if (Number(lost.textContent) < 4) {
            lost.textContent = Number(lost.textContent) + 1
            } else {
                alert("Вы проиграли")
                lost.textContent = 0
                dead.textContent = 0
            }
        }
    }
}
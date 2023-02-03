const count = document.getElementById("clicker__counter")
const img = document.getElementById("cookie")

img.onclick = () => {
    count.textContent = Number(count.textContent) + 1
    if (img.width == 200) {
        img.width += 50
        img.height += 50
    } else {
        img.width -= 50
        img.height -= 50
    }
}
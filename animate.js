const box = document.getElementById("box")

//box.style.borderRadius = "50%"
let count = 0

const timer = setInterval(function () {
    count++
    box.style.borderRadius = `${count}%`
    console.log(count);

    // タイマーを止める処理
    if (count > 50) {
        clearInterval(timer)
    }
}, 100)

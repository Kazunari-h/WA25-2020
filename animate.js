const box = document.getElementById("box")

//box.style.borderRadius = "50%"

// 0-50
let count_1 = 0
let increment = true

const timer = setInterval(function () {
    if (increment) {
        count_1++
    } else {
        count_1--
    }
    box.style.borderRadius = `${count_1}%`
    console.log(count_1);

    if (count_1 < 1 || count_1 > 49) {
        increment = !increment
    }

    // タイマーを止める処理
    // if (count > 50) {
    //     clearInterval(timer)
    // }
}, 20)


document.getElementById("box").style.marginTop = "red"

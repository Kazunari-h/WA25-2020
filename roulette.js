// 抽選する数字のリスト
let numList = [];

// 抽選の最大値
const max = 99

// 1-99の配列を作る
for (let i = 1; i <= max; i++) {
    numList.push(i);
}

// buttonが押されたら
document.getElementById("button")
        .addEventListener("click", function(event) {
            // buttonが押された際の処理
            console.log(event);
            event.target.disabled = true;

            if (numList.length < 1) {
                alert("新しい抽選はできません。")
                return
            }

            // 数字のエリアをドラムロールさせる
            const timer = setInterval(function() {
                const random = Math.floor(Math.random() * numList.length)
                document.getElementById("num").innerText = numList[random];
            }, 50)

            // 3秒後にドラムロールを止めて、抽選した番号を表示する
            setTimeout(function() {
                clearInterval(timer);
                const random = Math.floor(Math.random() * numList.length)
                const num = document.getElementById("num");
                num.innerText = numList[random];
                // 抽選した数を消す
                numList.splice(random, 1)
                event.target.disabled = false;
            }, 3000)

            /*
            const roulette = function(max) {
                const random = Math.floor(Math.random() * max)
                document.getElementById("num").innerText = random;
            }

            // 数字のエリアをドラムロールさせる
            const timer = setInterval(function() {
                roulette(100)
            }, 50)

            // 3秒後にドラムロールを止めて、抽選した番号を表示する
            setTimeout(function() {
                clearInterval(timer);
                roulette(100)
                event.target.disabled = false;
            }, 3000)
             */
            
        })
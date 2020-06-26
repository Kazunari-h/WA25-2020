
// buttonが押されたら
document.getElementById("button")
        .addEventListener("click", function(event) {
            // buttonが押された際の処理
            console.log(event);
            event.target.disabled = true;

            // 数字のエリアをドラムロールさせる
            const timer = setInterval(function() {
                const random = Math.floor(Math.random() * 100)
                document.getElementById("num").innerText = random;
            }, 50)

            // 3秒後にドラムロールを止めて、抽選した番号を表示する
            setTimeout(function() {
                clearInterval(timer);
                const random = Math.floor(Math.random() * 100)
                document.getElementById("num").innerText = random;
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
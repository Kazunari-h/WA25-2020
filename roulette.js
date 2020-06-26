
// buttonが押されたら
document.getElementById("button")
        .addEventListener("click", function(event) {
            // buttonが押された際の処理
            console.log("押されたよ");

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
            }, 3000)
            
        })
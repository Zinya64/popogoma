const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// 主人公の座標
let x = 150;
let y = 150;
const speed = 2;

// キー入力管理
const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// 毎フレーム実行
function update() {
    // 移動処理
    if (keys["ArrowUp"]) y -= speed;
    if (keys["ArrowDown"]) y += speed;
    if (keys["ArrowLeft"]) x -= speed;
    if (keys["ArrowRight"]) x += speed;

    // 画面をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 主人公（四角）を描画
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 20, 20);

    requestAnimationFrame(update);
}

update();
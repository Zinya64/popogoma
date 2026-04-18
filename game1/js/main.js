const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// タイルサイズ（1マスの大きさ）
const TILE_SIZE = 32;

// マップデータ（数字で地面を表す）
const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// タイルの色（本来は画像を使うが、まずは色でOK）
const tileColors = {
    0: "lightgreen", // 草
    1: "sienna"      // 土
};

// マップを描画する関数
function drawMap() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            const tile = map[y][x];
            ctx.fillStyle = tileColors[tile];
            ctx.fillRect(
                x * TILE_SIZE,
                y * TILE_SIZE,
                TILE_SIZE,
                TILE_SIZE
            );
        }
    }
}


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
    drawMap()
    // 主人公（四角）を描画
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 20, 20);

    requestAnimationFrame(update);

}

update();


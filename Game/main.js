document.getElementById("txt").innerText = "これゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


//fillRect(x座標, y座標, 横幅, 立幅)

let x = 225;
let y = 490;


let y1 = 0;

window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft"){
        x -= 10;
    } else if(e.key === "ArrowRight"){
        x += 10;
    }else if(e.key === "ArrowUp"){
        y -= 10;
    }else if(e.key === "ArrowDown"){
        y += 10;
    }
});
function gameLoop() {
    if(y1 > 640){
    ctx.fillStyle = "#000000ff";
    ctx.fillRect(0,0,480,640);
    ctx.fillStyle = "#7f76ffff";
    ctx.fillRect(x, y, 30,30);
    ctx.fillStyle = "#f55151ff";
    ctx.fillRect(100, y1, 10,10);
    y1 += 10;

    requestAnimationFrame(gameLoop);

}

gameLoop();
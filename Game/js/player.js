const playerImage = new Image();
playerImage.src = "https://illustkun.com/wp-content/uploads/illustkun-06842-20220814-b.png";

export const player = {
    x: 0,
    y: 0,
    width: 80,
    height: 80  ,
    color: "#ff00ddff",
    life: 300000000000000,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drowPlayer(ctx) {
    ctx.fillStyle = player.color;
    ctx.drawImage(playerImage,    player.x, player.y, player.width, player.height);
}
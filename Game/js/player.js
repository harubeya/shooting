const playerImage = new Image();
playerImage.src = "https://lh3.googleusercontent.com/w-YM0xTncVBJt_oDIK3y7m6TLXMWCwAhRnuceMRjlk4sScKxHz2wKyQ7fq-ePuZETvNajuBhcOW9cd-TUNulhIC-40Mik43rSZGAJ_6mzwBA";

export const player = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
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
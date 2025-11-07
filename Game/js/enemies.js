export const enemies = [];
const SIZE = 200;
const enemyImage = new Image();
enemyImage.src = "https://cimg.kgl-systems.io/camion/files/22681/thumbnail_MyAn.jpg?x=1280";

function pushEnemies(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = -h;
    const vy = 5

    enemies.push({x, y, width: w , height: h, vy});
}

export function spawnEnemy(canvas) {
    if (enemies.length < 1){
        pushEnemies(canvas);
    }
}

export function updateEnemies(canvas) {
    for(let i = enemies.length -1; i >=0; i--){
        const e = enemies[i];
        e.y += e.vy;
        if(e.y > canvas.height){
            enemies.splice(i, 1);
        }
    }
}

export function drowEnemies(ctx) {

    ctx.fillStyle = "crimson";
    for (const e of enemies){
        ctx.drawImage(enemyImage,e.x, e.y, e.width, e.height);
}
}
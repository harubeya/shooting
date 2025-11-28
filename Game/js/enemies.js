export const enemies = [];
const SIZE = 200;
const enemyImage = new Image();
export const spawnEnemyrate = 1;
enemyImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Carboxylic-acid-group-3D.png/250px-Carboxylic-acid-group-3D.png";

function pushEnemies(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = -h;
    const vy = 5

    enemies.push({x, y, width: w , height: h, vy});
}

export function spawnEnemy(canvas) {
    if (enemies.length < spawnEnemyrate) {
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
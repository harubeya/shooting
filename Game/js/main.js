import { player , initPlayer ,drowPlayer} from "./player.js";
import { spawnEnemy , enemies, updateEnemies,drowEnemies, spawnEnemyrate} from "./enemies.js";
import { handleCollisions } from "./collision.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);

export const bullets = [];
const BULLET_SPEED = -10;

function tryShoot() {
    bullets.push({
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 0,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 3,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 5,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 7,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 10,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 13,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 1.5,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 2,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: -3,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: -5,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: -10,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: -7,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: -13,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: -1.5,
        vy: BULLET_SPEED,
    },{
        x: player.x  + 45 ,
        y: player.y - 45,
        width: 10,
        height: 10,
        vx: 2,
        vy: BULLET_SPEED,
    })
}

function tryShoot_2() {
    bullets.push({
        x: player.x -300 ,
        y: player.y - 110,
        width: 630,
        height: 100,
        vx: 0,
        vy: BULLET_SPEED,
    })
}

//fillRect(x座標, y座標, 横幅, 立幅)

function updateScore(){
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.textContent = `Score: ${player.score}`;
    const lifeBoard = document.getElementById("lifeBoard");
    lifeBoard.innerText = `Life: ${player.life}`;
}

window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft"){
        if(player.x > 10){
            player.x -= 10;
        }
    } else if(e.key === "ArrowRight"){
        if(player.x < canvas.width - player.width - 10){
            player.x += 10;
        }
    }else if(e.key === "ArrowDown"){
        if(player.y < canvas.height - player.height - 10){
            player.y += 10;
        }
    }else if(e.key === "ArrowUp"){
        if(player.y > 10){
            player.y -= 10;
        }
    } else if(e.code === "Space"){
        tryShoot();

    } else if(e.key === "z"){
        tryShoot_2();
    } else if(e.key === "a"){
        spawnEnemyrate += 1;
    }     
});

function update() {
    for(let i = bullets.length - 1; i >= 0; i--){
        const bullet = bullets[i];
        bullet.y += bullet.vy; 
        bullet.x += bullet.vx;
        if(bullet.y < 0){
            bullets.splice(i, 1); 
        }
        
    }
    spawnEnemy(canvas);
    updateEnemies(canvas);
    handleCollisions();
    updateScore();

}

function draw() {

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    drowPlayer(ctx);

    ctx.fillStyle = "white";
    for(let i = bullets.length - 1; i >= 0; i--){
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

    drowEnemies(ctx);
 
}


function gameLoop() {

    update();
    draw();  
    requestAnimationFrame(gameLoop);

}

gameLoop();


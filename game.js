const lobbyScreen = document.getElementById("lobby");
const gameScreen = document.getElementById("game");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const resultBackBtn = document.getElementById("resultBackBtn");
const resultModal = document.getElementById("result");
const arena = document.querySelector(".arena");
const hero = document.getElementById("hero");
const enemy = document.getElementById("enemy");
const bullet = document.getElementById("bullet");
const playerBullet = document.getElementById("playerBullet");
const bossHpText = document.getElementById("bossHpText");

let playerLane = 1;
let bulletLane = 1;
let playerBulletLane = 1;
let bossHp = 100;
let touchStartX = 0;
let bulletTimer = null;
let warningTimer = null;
let bulletEndTimer = null;
let playerAttackTimer = null;
let playerAttackDelayTimer = null;
let playerBulletEndTimer = null;
let hitAnimation = null;
let playerHitAnimation = null;
let isGameOver = false;

const bossMaxHp = 100;
const bossDefense = 0;
const playerBulletAttack = 10;
const playerBulletPierce = 0;

const enemyImages = [
  "outputs/小豬(準備攻擊左).png?v=2",
  "outputs/小豬(準備攻擊中).png?v=3",
  "outputs/小豬(準備攻擊右).png?v=2",
];

function showScreen(screen) {
  lobbyScreen.classList.toggle("screen-active", screen === "lobby");
  gameScreen.classList.toggle("screen-active", screen === "game");
}

function updateHeroPosition() {
  hero.style.setProperty("--lane", playerLane);
}

function updateBossHpText() {
  bossHpText.textContent = `BOSS HP ${bossHp}/${bossMaxHp}`;
}

function resetBullet() {
  bullet.classList.remove("is-active");
  bullet.style.setProperty("--bullet-y", "8px");
  bullet.style.setProperty("--bullet-lane", bulletLane);
}

function resetPlayerBullet() {
  playerBullet.classList.remove("is-active");
  playerBullet.style.setProperty("--player-bullet-y", `${arena.clientHeight - 120}px`);
  playerBullet.style.setProperty("--player-bullet-lane", playerBulletLane);
}

function movePlayer(direction) {
  if (isGameOver) {
    return;
  }

  playerLane = Math.max(0, Math.min(2, playerLane + direction));
  updateHeroPosition();
}

function resetGameOver() {
  isGameOver = false;
  hero.classList.remove("is-dead");
  resultModal.classList.remove("is-active");
}

function resetBoss() {
  bossHp = bossMaxHp;
  updateBossHpText();
}

function gameOver() {
  isGameOver = true;
  stopEnemyActions();
  hero.classList.add("is-dead");
  resultModal.classList.add("is-active");
}

function checkBulletHit() {
  const bulletRect = bullet.getBoundingClientRect();
  const heroRect = hero.getBoundingClientRect();
  const isHit = !(
    bulletRect.right < heroRect.left ||
    bulletRect.left > heroRect.right ||
    bulletRect.bottom < heroRect.top ||
    bulletRect.top > heroRect.bottom
  );

  if (isHit) {
    gameOver();
  }
}

function watchBulletHit() {
  if (isGameOver || !bullet.classList.contains("is-active")) {
    hitAnimation = null;
    return;
  }

  checkBulletHit();

  if (!isGameOver) {
    hitAnimation = requestAnimationFrame(watchBulletHit);
  }
}

function damageBoss() {
  const damage = Math.abs(playerBulletAttack - Math.abs(bossDefense - playerBulletPierce));

  bossHp = Math.max(0, bossHp - damage);
  updateBossHpText();
  resetPlayerBullet();
}

function checkPlayerBulletHit() {
  const playerBulletRect = playerBullet.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();
  const isHit = !(
    playerBulletRect.right < enemyRect.left ||
    playerBulletRect.left > enemyRect.right ||
    playerBulletRect.bottom < enemyRect.top ||
    playerBulletRect.top > enemyRect.bottom
  );

  if (isHit) {
    damageBoss();
  }
}

function watchPlayerBulletHit() {
  if (isGameOver || !playerBullet.classList.contains("is-active")) {
    playerHitAnimation = null;
    return;
  }

  checkPlayerBulletHit();

  if (playerBullet.classList.contains("is-active")) {
    playerHitAnimation = requestAnimationFrame(watchPlayerBulletHit);
  }
}

function shootBullet() {
  if (isGameOver) {
    return;
  }

  bulletLane = Math.floor(Math.random() * 3);
  enemy.src = enemyImages[bulletLane];
  resetBullet();

  warningTimer = setTimeout(() => {
    const bulletEndY = arena.clientHeight - bullet.offsetHeight;

    bullet.classList.add("is-active");
    bullet.style.setProperty("--bullet-y", `${bulletEndY}px`);
    enemy.src = "outputs/小豬.png";
    hitAnimation = requestAnimationFrame(watchBulletHit);
    bulletEndTimer = setTimeout(resetBullet, 620);
  }, 500);
}

function shootPlayerBullet() {
  if (isGameOver) {
    return;
  }

  playerBulletLane = playerLane;
  resetPlayerBullet();

  requestAnimationFrame(() => {
    playerBullet.classList.add("is-active");
    playerBullet.style.setProperty("--player-bullet-y", "0px");
    playerHitAnimation = requestAnimationFrame(watchPlayerBulletHit);
    playerBulletEndTimer = setTimeout(resetPlayerBullet, 480);
  });
}

function startEnemyActions() {
  stopEnemyActions();
  resetBullet();
  enemy.src = "outputs/小豬.png";
  bulletTimer = setInterval(shootBullet, 1600);
  playerAttackDelayTimer = setTimeout(() => {
    playerAttackTimer = setInterval(shootPlayerBullet, 1000);
  }, 2000);
}

function stopEnemyActions() {
  clearInterval(bulletTimer);
  clearTimeout(warningTimer);
  clearTimeout(bulletEndTimer);
  clearInterval(playerAttackTimer);
  clearTimeout(playerAttackDelayTimer);
  clearTimeout(playerBulletEndTimer);
  cancelAnimationFrame(hitAnimation);
  cancelAnimationFrame(playerHitAnimation);
  bulletTimer = null;
  warningTimer = null;
  bulletEndTimer = null;
  playerAttackTimer = null;
  playerAttackDelayTimer = null;
  playerBulletEndTimer = null;
  hitAnimation = null;
  playerHitAnimation = null;
  enemy.src = "outputs/小豬.png";
}

startBtn.addEventListener("click", () => {
  showScreen("game");
  resetGameOver();
  resetBoss();
  playerLane = 1;
  updateHeroPosition();
  startEnemyActions();
});

backBtn.addEventListener("click", () => {
  stopEnemyActions();
  resetBullet();
  resetPlayerBullet();
  resetGameOver();
  showScreen("lobby");
});

resultBackBtn.addEventListener("click", () => {
  resetBullet();
  resetPlayerBullet();
  resetGameOver();
  showScreen("lobby");
});

window.addEventListener("keydown", (event) => {
  if (!gameScreen.classList.contains("screen-active")) {
    return;
  }

  if (event.key === "ArrowLeft") {
    movePlayer(-1);
  }

  if (event.key === "ArrowRight") {
    movePlayer(1);
  }
});

arena.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

arena.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;

  if (Math.abs(distance) < 35) {
    return;
  }

  movePlayer(distance > 0 ? 1 : -1);
}, { passive: true });

updateHeroPosition();
resetBullet();
resetPlayerBullet();
updateBossHpText();

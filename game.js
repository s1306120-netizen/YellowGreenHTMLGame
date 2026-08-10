const lobbyScreen = document.getElementById("lobby");
const gameScreen = document.getElementById("game");
const startBtn = document.getElementById("startBtn");
const difficultyInfo = document.getElementById("difficultyInfo");
const difficultyModal = document.getElementById("difficultyModal");
const closeDifficultyBtn = document.getElementById("closeDifficultyBtn");
const difficultySelect = document.getElementById("difficultySelect");
const bossCountInput = document.getElementById("bossCountInput");
const multiplierInput = document.getElementById("multiplierInput");
const difficultyText = document.getElementById("difficultyText");
const bossCountText = document.getElementById("bossCountText");
const multiplierText = document.getElementById("multiplierText");
const rewardText = document.getElementById("rewardText");
const moneyText = document.getElementById("moneyText");
const backBtn = document.getElementById("backBtn");
const resultBackBtn = document.getElementById("resultBackBtn");
const resultModal = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultMoneyText = document.getElementById("resultMoneyText");
const koEffect = document.getElementById("koEffect");
const koK = document.getElementById("koK");
const koO = document.getElementById("koO");
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
let bossMaxHp = 100;
let currentBossDefense = 0;
let currentBossName = "小豬";
let currentBossNumber = 1;
let totalBossCount = 1;
let battleMultiplier = 1;
let money = 0;
let battleReward = 100;
let pendingMoney = 0;
let touchStartX = 0;
let bulletTimer = null;
let warningTimer = null;
let bulletEndTimer = null;
let playerAttackTimer = null;
let playerAttackDelayTimer = null;
let playerBulletEndTimer = null;
let koTimerK = null;
let koTimerEnd = null;
let hitAnimation = null;
let playerHitAnimation = null;
let isGameOver = false;
let isKoPlaying = false;
let canPlayerDamage = false;
let isMoving = false;

const playerBulletAttack = 10;
const playerBulletPierce = 0;
const rewardByDifficulty = {
  "簡單": 100,
  "普通": 500,
  "困難": 1000,
};

const bossData = [
  { name: "小豬", difficulty: "簡單", hp: 100, defense: 0 },
];

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
  bossHpText.innerHTML = `
    <div>BOSS數量${currentBossNumber}/${totalBossCount}</div>
    <div>${currentBossName}</div>
    <div>HP:${bossHp}/${bossMaxHp}</div>
  `;
}

function updateDifficultyInfo() {
  const multiplier = Math.max(1, Math.round(Number(multiplierInput.value) * 2) / 2);
  const bossCount = Math.max(1, Number(bossCountInput.value));
  const reward = rewardByDifficulty[difficultySelect.value] * bossCount * multiplier;

  multiplierInput.value = multiplier.toFixed(1);
  bossCountInput.value = bossCount;
  difficultyText.textContent = `難度：${difficultySelect.value}`;
  bossCountText.textContent = `BOSS：${bossCount} 隻`;
  multiplierText.textContent = `倍率：${multiplier.toFixed(1)}x`;
  rewardText.textContent = `會獲得的東西：金錢${reward}`;
}

function updateMoneyText() {
  moneyText.textContent = money;
}

function animateMoneyText(fromMoney, toMoney) {
  const duration = 700;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const currentMoney = Math.round(fromMoney + (toMoney - fromMoney) * progress);

    moneyText.textContent = currentMoney;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function getBattleReward() {
  const bossCount = Math.max(1, Number(bossCountInput.value));
  const multiplier = Math.max(1, Math.round(Number(multiplierInput.value) * 2) / 2);

  return rewardByDifficulty[difficultySelect.value] * bossCount * multiplier;
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

  const nextLane = Math.max(0, Math.min(2, playerLane + direction));

  if (nextLane === playerLane) {
    return;
  }

  isMoving = true;
  hero.classList.add("is-moving");
  playerLane = nextLane;
  updateHeroPosition();
}

function resetGameOver() {
  isGameOver = false;
  isKoPlaying = false;
  canPlayerDamage = false;
  isMoving = false;
  hero.classList.remove("is-dead");
  hero.classList.remove("is-moving");
  koEffect.classList.remove("is-active");
  koK.classList.remove("is-active");
  koO.classList.remove("is-active");
  resultModal.classList.remove("is-active");
}

function resetBoss() {
  const availableBosses = bossData.filter((boss) => boss.difficulty === difficultySelect.value);
  const firstBoss = availableBosses[0];

  if (!firstBoss) {
    return false;
  }

  totalBossCount = Math.max(1, Number(bossCountInput.value));
  battleMultiplier = Math.max(1, Math.round(Number(multiplierInput.value) * 2) / 2);
  battleReward = getBattleReward();
  currentBossName = firstBoss.name;
  currentBossDefense = firstBoss.defense;
  bossMaxHp = Math.round(firstBoss.hp * battleMultiplier);
  currentBossNumber = 1;
  bossHp = bossMaxHp;
  enemy.classList.remove("is-defeated");
  enemy.src = `outputs/${currentBossName}.png`;
  updateBossHpText();
  return true;
}

function showResult(title, earnedMoney) {
  isGameOver = true;
  stopEnemyActions();
  resultTitle.textContent = title;
  resultMoneyText.textContent = `獲得金錢：${earnedMoney}`;
  resultModal.classList.add("is-active");
}

function gameOver() {
  hero.classList.add("is-dead");
  showResult("失敗", 0);
}

function winBattle() {
  pendingMoney = battleReward;
  showResult("勝利", battleReward);
}

function collectPendingMoney() {
  if (pendingMoney <= 0) {
    return;
  }

  const oldMoney = money;
  money += pendingMoney;
  pendingMoney = 0;
  animateMoneyText(oldMoney, money);
}

function finishBossDefeat() {
  koEffect.classList.remove("is-active");
  koK.classList.remove("is-active");
  koO.classList.remove("is-active");
  isKoPlaying = false;

  if (currentBossNumber >= totalBossCount) {
    winBattle();
  } else {
    goToNextBoss();
    startEnemyActions();
  }
}

function playKoEffect() {
  isKoPlaying = true;
  stopEnemyActions();
  resetBullet();
  resetPlayerBullet();
  enemy.classList.add("is-defeated");
  koEffect.classList.add("is-active");
  koK.classList.add("is-active");
  koO.classList.remove("is-active");

  koTimerK = setTimeout(() => {
    koO.classList.add("is-active");
  }, 280);

  koTimerEnd = setTimeout(finishBossDefeat, 900);
}

function goToNextBoss() {
  currentBossNumber += 1;
  bossHp = bossMaxHp;
  enemy.classList.remove("is-defeated");
  enemy.src = `outputs/${currentBossName}.png`;
  updateBossHpText();
}

function checkBulletHit() {
  if (isMoving) {
    return;
  }

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
  if (!canPlayerDamage || isKoPlaying) {
    return;
  }

  const damage = Math.abs(playerBulletAttack - Math.abs(currentBossDefense - playerBulletPierce));

  bossHp = Math.max(0, bossHp - damage);
  updateBossHpText();
  resetPlayerBullet();

  if (bossHp <= 0) {
    playKoEffect();
  }
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
    enemy.src = `outputs/${currentBossName}.png`;
    hitAnimation = requestAnimationFrame(watchBulletHit);
    bulletEndTimer = setTimeout(resetBullet, 620);
  }, 500);
}

function shootPlayerBullet() {
  if (isGameOver || !canPlayerDamage) {
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
  enemy.src = `outputs/${currentBossName}.png`;
  bulletTimer = setInterval(shootBullet, 1600);
  playerAttackDelayTimer = setTimeout(() => {
    canPlayerDamage = true;
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
  clearTimeout(koTimerK);
  clearTimeout(koTimerEnd);
  cancelAnimationFrame(hitAnimation);
  cancelAnimationFrame(playerHitAnimation);
  bulletTimer = null;
  warningTimer = null;
  bulletEndTimer = null;
  playerAttackTimer = null;
  playerAttackDelayTimer = null;
  playerBulletEndTimer = null;
  koTimerK = null;
  koTimerEnd = null;
  hitAnimation = null;
  playerHitAnimation = null;
  canPlayerDamage = false;
  enemy.src = `outputs/${currentBossName}.png`;
}

startBtn.addEventListener("click", () => {
  resetGameOver();
  if (!resetBoss()) {
    alert("這個難度目前沒有BOSS資料");
    return;
  }

  showScreen("game");
  playerLane = 1;
  updateHeroPosition();
  startEnemyActions();
});

difficultyInfo.addEventListener("click", () => {
  difficultyModal.classList.add("is-active");
});

closeDifficultyBtn.addEventListener("click", () => {
  updateDifficultyInfo();
  difficultyModal.classList.remove("is-active");
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
  collectPendingMoney();
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

hero.addEventListener("transitionend", (event) => {
  if (event.propertyName !== "left") {
    return;
  }

  isMoving = false;
  hero.classList.remove("is-moving");
});

updateHeroPosition();
resetBullet();
resetPlayerBullet();
updateBossHpText();
updateDifficultyInfo();
updateMoneyText();

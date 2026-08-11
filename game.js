const lobbyScreen = document.getElementById("lobby");
const gameScreen = document.getElementById("game");
const bagOpeningScreen = document.getElementById("bagOpening");
const startBtn = document.getElementById("startBtn");
const difficultyInfo = document.getElementById("difficultyInfo");
const bagButton = document.getElementById("bagButton");
const difficultyModal = document.getElementById("difficultyModal");
const heroInfoModal = document.getElementById("heroInfoModal");
const inventoryModal = document.getElementById("inventoryModal");
const closeDifficultyBtn = document.getElementById("closeDifficultyBtn");
const closeHeroInfoBtn = document.getElementById("closeHeroInfoBtn");
const closeInventoryBtn = document.getElementById("closeInventoryBtn");
const heroInfoBtn = document.getElementById("heroInfoBtn");
const heroStatsList = document.getElementById("heroStatsList");
const inventoryList = document.getElementById("inventoryList");
const equippedWeapon = document.getElementById("equippedWeapon");
const equippedArmor = document.getElementById("equippedArmor");
const equippedShoes = document.getElementById("equippedShoes");
const equippedAccessory = document.getElementById("equippedAccessory");
const itemModal = document.getElementById("itemModal");
const itemModalImage = document.getElementById("itemModalImage");
const itemModalName = document.getElementById("itemModalName");
const itemModalInfo = document.getElementById("itemModalInfo");
const itemModalActionBtn = document.getElementById("itemModalActionBtn");
const closeItemModalBtn = document.getElementById("closeItemModalBtn");
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
const resultBagText = document.getElementById("resultBagText");
const resultBagList = document.getElementById("resultBagList");
const koEffect = document.getElementById("koEffect");
const koK = document.getElementById("koK");
const koO = document.getElementById("koO");
const arena = document.querySelector(".arena");
const hero = document.getElementById("hero");
const enemy = document.getElementById("enemy");
const bullet = document.getElementById("bullet");
const playerBullet = document.getElementById("playerBullet");
const bossHpText = document.getElementById("bossHpText");
const damageText = document.getElementById("damageText");
const bagDropText = document.getElementById("bagDropText");
const openBagBtn = document.getElementById("openBagBtn");
const openBagImage = document.getElementById("openBagImage");
const openBagReward = document.getElementById("openBagReward");
const openBagProgress = document.getElementById("openBagProgress");

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
let battleBags = [];
let inventory = [];
let equippedItems = {
  "武器": null,
  "護甲": null,
  "靴子": null,
  "飾品": null,
};
let selectedItem = null;
let selectedItemMode = "equip";
let openingBagIndex = 0;
let openingBagClicks = 0;
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
let isOpeningBagReward = false;
let canPlayerDamage = false;
let isMoving = false;
let lastMoveTime = -Infinity;

const rewardByDifficulty = {
  "簡單": 100,
  "普通": 500,
  "困難": 1000,
};

const bossData = [
  { name: "小豬", difficulty: "簡單", hp: 100, defense: 0 },
];

const bagRarities = [
  { name: "普通", image: "outputs/普通袋子.png", scale: 1 },
  { name: "稀有", image: "outputs/稀有袋子.png", scale: 1.25 },
  { name: "史詩", image: "outputs/史詩袋子.png", scale: 1.55 },
  { name: "傳奇", image: "outputs/傳奇袋子.png", scale: 1.95 },
];

const equipmentData = [
  { name: "破舊木劍", type: "武器", rarity: "普通", effect: "攻擊力+5", image: "outputs/破舊木劍圖(武器).png" },
  { name: "標準木劍", type: "武器", rarity: "普通", effect: "攻擊力+10", image: "outputs/標準木劍圖(武器).png" },
  { name: "皮革背心", type: "護甲", rarity: "普通", effect: "1%免死", image: "outputs/皮革背心圖(護甲).png" },
  { name: "皮革護甲", type: "護甲", rarity: "普通", effect: "3%免死", image: "outputs/皮革護甲圖(護甲).png" },
  { name: "皮革鞋子", type: "靴子", rarity: "普通", effect: "移動冷卻-0.1秒", image: "outputs/皮革鞋子圖(靴子).png" },
  { name: "皮革靴子", type: "靴子", rarity: "普通", effect: "移動冷卻-0.2秒", image: "outputs/皮革靴子圖(靴子).png" },
  { name: "小攻擊寶石", type: "飾品", rarity: "普通", effect: "攻擊力+5", image: "outputs/小攻擊寶石圖(吊飾).png" },
  { name: "小破防寶石", type: "飾品", rarity: "普通", effect: "破防+5", image: "outputs/小破防寶石圖(吊飾).png" },
  { name: "小移動寶石", type: "飾品", rarity: "普通", effect: "移動冷卻-0.1秒", image: "outputs/小移動寶石圖(吊飾).png" },
  { name: "小爆率寶石", type: "飾品", rarity: "普通", effect: "爆擊率+5%", image: "outputs/小爆率寶石圖(吊飾).png" },
  { name: "小爆傷寶石", type: "飾品", rarity: "普通", effect: "爆擊傷害+10%", image: "outputs/小爆傷寶石圖(吊飾).png" },
];

const playerStats = {
  pierce: 0,
  attack: 1000,
  moveCooldown: 1000,
  critRate: 5,
  critDamage: 200,
  deathSaveRate: 0,
  specialEffect: "無",
};

const basePlayerStats = { ...playerStats };

const enemyImages = [
  "outputs/小豬(準備攻擊左).png?v=2",
  "outputs/小豬(準備攻擊中).png?v=3",
  "outputs/小豬(準備攻擊右).png?v=2",
];

function showScreen(screen) {
  lobbyScreen.classList.toggle("screen-active", screen === "lobby");
  gameScreen.classList.toggle("screen-active", screen === "game");
  bagOpeningScreen.classList.toggle("screen-active", screen === "bagOpening");
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

function updateHeroStatsList() {
  heroStatsList.innerHTML = `
    <div>破防：${playerStats.pierce}</div>
    <div>攻擊力：${playerStats.attack}</div>
    <div>移動冷卻：${(playerStats.moveCooldown / 1000).toFixed(1)}秒</div>
    <div>爆擊率：${playerStats.critRate}%</div>
    <div>爆擊傷害：${playerStats.critDamage}%</div>
    <div>免死率：${playerStats.deathSaveRate}%</div>
    <div>特殊效果：${playerStats.specialEffect}</div>
  `;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomEquipment(rarity) {
  const rarityItems = equipmentData.filter((item) => item.rarity === rarity);
  return getRandomItem(rarityItems.length > 0 ? rarityItems : equipmentData);
}

function addEquipmentToInventory(item) {
  inventory.push({ ...item });
}

function applyEquipmentEffect(item) {
  const amount = Number(item.effect.match(/\d+(\.\d+)?/)?.[0] || 0);

  if (item.effect.includes("攻擊力")) {
    playerStats.attack += amount;
  }

  if (item.effect.includes("破防")) {
    playerStats.pierce += amount;
  }

  if (item.effect.includes("移動冷卻")) {
    playerStats.moveCooldown -= amount * 1000;
  }

  if (item.effect.includes("爆擊率")) {
    playerStats.critRate += amount;
  }

  if (item.effect.includes("爆擊傷害")) {
    playerStats.critDamage += amount;
  }

  if (item.effect.includes("免死")) {
    playerStats.deathSaveRate += amount;
  }

  playerStats.moveCooldown = Math.max(100, playerStats.moveCooldown);
}

function recalculatePlayerStats() {
  Object.assign(playerStats, basePlayerStats);

  Object.values(equippedItems).forEach((item) => {
    if (item) {
      applyEquipmentEffect(item);
    }
  });
}

function updateEquippedImages() {
  const slots = {
    "武器": { element: equippedWeapon, empty: "outputs/空武器圖.png", alt: "空武器" },
    "護甲": { element: equippedArmor, empty: "outputs/空護甲圖.png", alt: "空護甲" },
    "靴子": { element: equippedShoes, empty: "outputs/空靴子圖.png", alt: "空鞋子" },
    "飾品": { element: equippedAccessory, empty: "outputs/空飾品圖.png", alt: "空飾品" },
  };

  Object.entries(slots).forEach(([type, slot]) => {
    const item = equippedItems[type];

    slot.element.src = item ? item.image : slot.empty;
    slot.element.alt = item ? item.name : slot.alt;
  });
}

function equipItem(item) {
  equippedItems[item.type] = item;
  recalculatePlayerStats();
  updateEquippedImages();
  updateHeroStatsList();
}

function unequipItem(type) {
  equippedItems[type] = null;
  recalculatePlayerStats();
  updateEquippedImages();
  updateHeroStatsList();
}

function showItemModal(item, mode) {
  selectedItem = item;
  selectedItemMode = mode;
  itemModalImage.src = item.image;
  itemModalImage.alt = item.name;
  itemModalName.textContent = item.name;
  itemModalInfo.innerHTML = `
    <div>種類：${item.type}</div>
    <div>稀有度：${item.rarity}</div>
    <div>效果：${item.effect}</div>
  `;
  itemModalActionBtn.textContent = mode === "unequip" ? "卸下" : "穿上";
  itemModal.classList.add("is-active");
}

function sortInventoryItems(items) {
  const rarityOrder = { "傳奇": 4, "史詩": 3, "稀有": 2, "普通": 1 };
  const typeOrder = { "武器": 1, "護甲": 2, "靴子": 3, "飾品": 4 };

  return [...items].sort((a, b) => {
    const rarityDiff = (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0);

    if (rarityDiff !== 0) {
      return rarityDiff;
    }

    const typeDiff = (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);

    if (typeDiff !== 0) {
      return typeDiff;
    }

    return a.name.localeCompare(b.name, "zh-Hant");
  });
}

function openBagRewardByRarity(rarityIndex) {
  const rarityName = bagRarities[rarityIndex].name;
  const roll = Math.random() * 100;

  if (rarityName === "普通") {
    if (roll < 30) {
      return { type: "money", amount: 1000, text: "獲得金錢 1000" };
    }

    return {
      type: "equipment",
      item: getRandomEquipment(roll < 90 ? "普通" : "稀有"),
    };
  }

  if (rarityName === "稀有") {
    if (roll < 30) {
      return { type: "money", amount: 2000, text: "獲得金錢 2000" };
    }

    return {
      type: "equipment",
      item: getRandomEquipment(roll < 65 ? "普通" : "稀有"),
    };
  }

  return {
    type: "equipment",
    item: getRandomEquipment("稀有"),
  };
}

function collectBagReward(bag) {
  const reward = openBagRewardByRarity(bag.rarityIndex);

  if (reward.type === "money") {
    pendingMoney += reward.amount;
    return {
      text: reward.text,
      image: "outputs/錢.png",
      alt: "錢",
      scale: 1.2,
    };
  }

  addEquipmentToInventory(reward.item);
  return {
    text: `獲得裝備：${reward.item.name}`,
    image: reward.item.image,
    alt: reward.item.name,
    scale: 1.35,
  };
}

function updateInventoryList() {
  inventoryList.innerHTML = "";

  if (inventory.length === 0) {
    inventoryList.textContent = "目前沒有裝備";
    return;
  }

  sortInventoryItems(inventory).forEach((item) => {
    const row = document.createElement("button");
    const image = document.createElement("img");

    row.className = "inventory-item";
    row.type = "button";
    row.title = `${item.name}｜${item.type}｜${item.rarity}｜${item.effect}`;
    row.addEventListener("click", () => {
      showItemModal(item, "equip");
    });
    image.src = item.image;
    image.alt = item.name;
    row.appendChild(image);
    inventoryList.appendChild(row);
  });
}

function updateMoneyText() {
  moneyText.textContent = money;
}

function calculatePlayerDamage() {
  const defenseReduction = Math.max(0, currentBossDefense - playerStats.pierce);
  const normalDamage = Math.max(0, playerStats.attack - defenseReduction);
  const isCritical = Math.random() * 100 < playerStats.critRate;

  if (isCritical) {
    return {
      amount: Math.round(normalDamage * (playerStats.critDamage / 100)),
      isCritical: true,
    };
  }

  return {
    amount: normalDamage,
    isCritical: false,
  };
}

function showDamageText(damageResult) {
  damageText.textContent = damageResult.isCritical ? `爆擊 ${damageResult.amount}` : damageResult.amount;
  damageText.classList.toggle("is-critical", damageResult.isCritical);
  damageText.classList.remove("is-active");

  void damageText.offsetWidth;
  damageText.classList.add("is-active");
}

function showBagDropText() {
  bagDropText.classList.remove("is-active");

  void bagDropText.offsetWidth;
  bagDropText.classList.add("is-active");
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

  const now = performance.now();

  if (now - lastMoveTime < playerStats.moveCooldown) {
    return;
  }

  const nextLane = Math.max(0, Math.min(2, playerLane + direction));

  if (nextLane === playerLane) {
    return;
  }

  lastMoveTime = now;
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
  lastMoveTime = -Infinity;
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
  battleBags = [];
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
  updateResultBags();
  resultModal.classList.add("is-active");
}

function gameOver() {
  hero.classList.add("is-dead");
  battleBags = [];
  showResult("失敗", 0);
}

function tryDeathSave() {
  return Math.random() * 100 < playerStats.deathSaveRate;
}

function rollBossBagDrop() {
  if (difficultySelect.value !== "簡單") {
    return false;
  }

  const dropChance = Math.min(100, 10 * battleMultiplier);

  if (Math.random() * 100 < dropChance) {
    battleBags.push({ rarityIndex: 0, upgraded: false });
    return true;
  }

  return false;
}

function upgradeBag(index) {
  const bag = battleBags[index];

  if (!bag || bag.upgraded) {
    return;
  }

  if (Math.random() < 0.5) {
    bag.rarityIndex = 1;

    if (Math.random() < 0.3) {
      bag.rarityIndex = 2;

      if (Math.random() < 0.2) {
        bag.rarityIndex = 3;
      }
    }
  }

  bag.upgraded = true;
  updateResultBags();
}

function updateResultBags() {
  resultBagText.textContent = `獲得袋子：${battleBags.length}`;
  resultBagList.innerHTML = "";

  battleBags.forEach((bag, index) => {
    const rarity = bagRarities[0];
    const button = document.createElement("button");
    const image = document.createElement("img");

    button.className = "bag-upgrade-button";
    button.type = "button";
    button.disabled = true;
    button.setAttribute("aria-label", `普通袋子`);
    image.src = rarity.image;
    image.alt = `普通袋子`;
    button.appendChild(image);
    resultBagList.appendChild(button);
  });
}

function updateOpenBagScreen() {
  const bag = battleBags[openingBagIndex];
  const rarity = bagRarities[bag.rarityIndex];

  openBagImage.src = rarity.image;
  openBagImage.alt = `${rarity.name}袋子`;
  openBagImage.style.setProperty("--bag-scale", rarity.scale);
  openBagReward.textContent = "";
  openBagProgress.textContent = `袋子 ${openingBagIndex + 1}/${battleBags.length}　點擊 ${openingBagClicks}/4`;
}

function upgradeBagByClick(bag, clickCount) {
  if (clickCount === 1 && bag.rarityIndex === 0 && Math.random() < 0.5) {
    bag.rarityIndex = 1;
  }

  if (clickCount === 2 && bag.rarityIndex === 1 && Math.random() < 0.3) {
    bag.rarityIndex = 2;
  }

  if (clickCount === 3 && bag.rarityIndex === 2 && Math.random() < 0.2) {
    bag.rarityIndex = 3;
  }
}

function startBagOpening() {
  openingBagIndex = 0;
  openingBagClicks = 0;
  isOpeningBagReward = false;
  updateOpenBagScreen();
  showScreen("bagOpening");
}

function finishBagOpening() {
  showScreen("lobby");
  collectPendingMoney();
}

function clickOpenBag() {
  if (isOpeningBagReward) {
    openingBagIndex += 1;
    openingBagClicks = 0;
    isOpeningBagReward = false;

    if (openingBagIndex >= battleBags.length) {
      finishBagOpening();
      return;
    }

    updateOpenBagScreen();
    return;
  }

  if (battleBags.length === 0) {
    finishBagOpening();
    return;
  }

  const bag = battleBags[openingBagIndex];
  openingBagClicks += 1;
  upgradeBagByClick(bag, openingBagClicks);
  openBagBtn.classList.remove("is-clicked");

  void openBagBtn.offsetWidth;
  openBagBtn.classList.add("is-clicked");

  if (openingBagClicks >= 4) {
    bag.upgraded = true;
    const reward = collectBagReward(bag);

    openBagImage.src = reward.image;
    openBagImage.alt = reward.alt;
    openBagImage.style.setProperty("--bag-scale", reward.scale);
    openBagReward.textContent = reward.text;
    openBagProgress.textContent = "點一下繼續";
    isOpeningBagReward = true;

    return;
  }

  updateOpenBagScreen();
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
    if (tryDeathSave()) {
      resetBullet();
      return;
    }

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

  const damageResult = calculatePlayerDamage();
  const damage = damageResult.amount;

  bossHp = Math.max(0, bossHp - damage);
  showDamageText(damageResult);
  updateBossHpText();
  resetPlayerBullet();

  if (bossHp <= 0) {
    if (rollBossBagDrop()) {
      showBagDropText();
    }

    playKoEffect();
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
    playerBulletEndTimer = setTimeout(() => {
      damageBoss();
      resetPlayerBullet();
    }, 480);
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

heroInfoBtn.addEventListener("click", () => {
  updateHeroStatsList();
  heroInfoModal.classList.add("is-active");
});

closeHeroInfoBtn.addEventListener("click", () => {
  heroInfoModal.classList.remove("is-active");
});

bagButton.addEventListener("click", () => {
  updateInventoryList();
  inventoryModal.classList.add("is-active");
});

closeInventoryBtn.addEventListener("click", () => {
  inventoryModal.classList.remove("is-active");
});

itemModalActionBtn.addEventListener("click", () => {
  if (!selectedItem) {
    return;
  }

  if (selectedItemMode === "unequip") {
    unequipItem(selectedItem.type);
  } else {
    equipItem(selectedItem);
  }

  itemModal.classList.remove("is-active");
  inventoryModal.classList.remove("is-active");
});

closeItemModalBtn.addEventListener("click", () => {
  itemModal.classList.remove("is-active");
});

[
  ["武器", equippedWeapon],
  ["護甲", equippedArmor],
  ["靴子", equippedShoes],
  ["飾品", equippedAccessory],
].forEach(([type, element]) => {
  element.addEventListener("click", () => {
    const item = equippedItems[type];

    if (item) {
      showItemModal(item, "unequip");
    }
  });
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

  if (battleBags.length > 0) {
    startBagOpening();
    return;
  }

  showScreen("lobby");
  collectPendingMoney();
});

bagOpeningScreen.addEventListener("click", clickOpenBag);

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

const lobbyScreen = document.getElementById("lobby");
const gameScreen = document.getElementById("game");
const bagOpeningScreen = document.getElementById("bagOpening");
const blacksmithScreen = document.getElementById("blacksmith");
const startBtn = document.getElementById("startBtn");
const difficultyInfo = document.getElementById("difficultyInfo");
const bagButton = document.getElementById("bagButton");
const blacksmithButton = document.getElementById("blacksmithButton");
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
const equippedWeaponLevel = document.getElementById("equippedWeaponLevel");
const equippedArmor = document.getElementById("equippedArmor");
const equippedArmorLevel = document.getElementById("equippedArmorLevel");
const equippedShoes = document.getElementById("equippedShoes");
const equippedShoesLevel = document.getElementById("equippedShoesLevel");
const equippedAccessory = document.getElementById("equippedAccessory");
const equippedAccessoryLevel = document.getElementById("equippedAccessoryLevel");
const itemModal = document.getElementById("itemModal");
const itemModalImage = document.getElementById("itemModalImage");
const itemModalName = document.getElementById("itemModalName");
const itemModalInfo = document.getElementById("itemModalInfo");
const itemModalActionBtn = document.getElementById("itemModalActionBtn");
const closeItemModalBtn = document.getElementById("closeItemModalBtn");
const saveEditorModal = document.getElementById("saveEditorModal");
const saveMoneyInput = document.getElementById("saveMoneyInput");
const saveJsonInput = document.getElementById("saveJsonInput");
const applySaveEditorBtn = document.getElementById("applySaveEditorBtn");
const closeSaveEditorBtn = document.getElementById("closeSaveEditorBtn");
const difficultySelect = document.getElementById("difficultySelect");
const bossCountInput = document.getElementById("bossCountInput");
const multiplierInput = document.getElementById("multiplierInput");
const difficultyText = document.getElementById("difficultyText");
const bossCountText = document.getElementById("bossCountText");
const multiplierText = document.getElementById("multiplierText");
const rewardText = document.getElementById("rewardText");
const moneyText = document.getElementById("moneyText");
const bgVolumeInput = document.getElementById("bgVolumeInput");
const sfxVolumeInput = document.getElementById("sfxVolumeInput");
const backBtn = document.getElementById("backBtn");
const resultBackBtn = document.getElementById("resultBackBtn");
const resultModal = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultMoneyText = document.getElementById("resultMoneyText");
const deathDropText = document.getElementById("deathDropText");
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
const blacksmithInsideImage = document.getElementById("blacksmithInsideImage");
const upgradeBlacksmithInsideImage = document.getElementById("upgradeBlacksmithInsideImage");
const blacksmithModeSelect = document.getElementById("blacksmithModeSelect");
const blacksmithComposePanel = document.getElementById("blacksmithComposePanel");
const blacksmithUpgradePanel = document.getElementById("blacksmithUpgradePanel");
const openUpgradeModeBtn = document.getElementById("openUpgradeModeBtn");
const openComposeModeBtn = document.getElementById("openComposeModeBtn");
const blacksmithResult = document.getElementById("blacksmithResult");
const blacksmithBackBtn = document.getElementById("blacksmithBackBtn");
const blacksmithResultSlot = document.getElementById("blacksmithResultSlot");
const blacksmithResultImage = document.getElementById("blacksmithResultImage");
const synthesizeBtn = document.getElementById("synthesizeBtn");
const forgePickerModal = document.getElementById("forgePickerModal");
const forgePickerList = document.getElementById("forgePickerList");
const closeForgePickerBtn = document.getElementById("closeForgePickerBtn");
const forgeSlotButtons = [...document.querySelectorAll(".forge-input-slots .forge-slot")];
const upgradeInputSlot = document.getElementById("upgradeInputSlot");
const upgradeInputImage = document.getElementById("upgradeInputImage");
const upgradeResultSlot = document.getElementById("upgradeResultSlot");
const upgradeResultImage = document.getElementById("upgradeResultImage");
const upgradeDetailText = document.getElementById("upgradeDetailText");
const upgradeBtn = document.getElementById("upgradeBtn");
const upgradeResultText = document.getElementById("upgradeResultText");
const upgradeMoneyText = document.getElementById("upgradeMoneyText");
const upgradeBackBtn = document.getElementById("upgradeBackBtn");

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
let forgeSlots = [null, null, null];
let forgePickingSlot = 0;
let forgeResultItem = null;
let forgePickerMode = "compose";
let upgradeSlot = null;
let upgradedPendingItem = null;
let isForging = false;
let openingBagIndex = 0;
let openingBagClicks = 0;
let touchStartX = 0;
let isKey6Down = false;
let isKey7Down = false;
let bulletTimer = null;
let enemyAttackDelayTimer = null;
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
let battleArmorRate = 0;

const rewardByDifficulty = {
  "簡單": 100,
  "普通": 500,
  "困難": 1000,
};

const saveKey = "huangye-ludou-save-v1";
const forgeCost = 500;
const rarityNames = ["普通", "稀有", "史詩", "傳奇"];
const typeOrder = { "武器": 1, "護甲": 2, "靴子": 3, "飾品": 4 };
const upgradeCosts = [
  { min: 1, max: 5, costs: { "普通": 100, "稀有": 300, "史詩": 500, "傳奇": 1000 }, chance: 50 },
  { min: 6, max: 10, costs: { "普通": 200, "稀有": 500, "史詩": 1000, "傳奇": 2000 }, chance: 40 },
  { min: 11, max: 15, costs: { "普通": 300, "稀有": 800, "史詩": 1500, "傳奇": 3000 }, chance: 30 },
  { min: 16, max: 20, costs: { "普通": 500, "稀有": 1000, "史詩": 2500, "傳奇": 5000 }, chance: 20 },
];

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
  { name: "短石劍", type: "武器", rarity: "稀有", effect: "攻擊力+15", image: "outputs/短石劍圖(武器).png" },
  { name: "鋒利石劍", type: "武器", rarity: "稀有", effect: "攻擊力+20", image: "outputs/鋒利石劍圖(武器).png" },
  { name: "鑽石匕首", type: "武器", rarity: "史詩", effect: "攻擊力+30", image: "outputs/鑽石匕首圖(武器).png" },
  { name: "鋒利長鑽劍", type: "武器", rarity: "史詩", effect: "攻擊力+40", image: "outputs/鋒利長鑽劍圖(武器).png" },
  { name: "熔岩烈劍", type: "武器", rarity: "傳奇", effect: "攻擊力+80", image: "outputs/熔岩烈劍圖(武器).png" },
  { name: "皮革背心", type: "護甲", rarity: "普通", effect: "8%護甲 0%閃避", image: "outputs/皮革背心圖(護甲).png" },
  { name: "皮革護甲", type: "護甲", rarity: "普通", effect: "12%護甲 0%閃避", image: "outputs/皮革護甲圖(護甲).png" },
  { name: "鋼鐵背心", type: "護甲", rarity: "稀有", effect: "20%護甲 1%閃避", image: "outputs/鋼鐵背心圖(護甲).png" },
  { name: "鐵製鎧甲", type: "護甲", rarity: "稀有", effect: "25%護甲 1%閃避", image: "outputs/鐵製鎧甲圖(護甲).png" },
  { name: "鑽石背心", type: "護甲", rarity: "史詩", effect: "40%護甲 3%閃避", image: "outputs/鑽石背心圖(護甲).png" },
  { name: "鑽石鎧甲", type: "護甲", rarity: "史詩", effect: "50%護甲 3%閃避", image: "outputs/鑽石鎧甲圖(護甲).png" },
  { name: "熔岩套裝", type: "護甲", rarity: "傳奇", effect: "80%護甲 5%閃避", image: "outputs/熔岩套裝圖(護甲).png" },
  { name: "皮革鞋子", type: "靴子", rarity: "普通", effect: "3%護甲 移動冷卻-0.1秒", image: "outputs/皮革鞋子圖(靴子).png" },
  { name: "皮革靴子", type: "靴子", rarity: "普通", effect: "5%護甲 移動冷卻-0.1秒", image: "outputs/皮革靴子圖(靴子).png" },
  { name: "鋼鐵雨鞋", type: "靴子", rarity: "稀有", effect: "10%護甲 移動冷卻-0.2秒", image: "outputs/鋼鐵雨鞋圖(靴子).png" },
  { name: "鐵製靴子", type: "靴子", rarity: "稀有", effect: "12%護甲 移動冷卻-0.2秒", image: "outputs/鐵製靴子圖(靴子).png" },
  { name: "鑽石拖鞋", type: "靴子", rarity: "史詩", effect: "18%護甲 移動冷卻-0.3秒", image: "outputs/鑽石拖鞋圖(靴子).png" },
  { name: "鑽石靴子", type: "靴子", rarity: "史詩", effect: "20%護甲 移動冷卻-0.3秒", image: "outputs/鑽石靴子圖(靴子).png" },
  { name: "熔岩戰靴", type: "靴子", rarity: "傳奇", effect: "30%護甲 移動冷卻-0.5秒", image: "outputs/熔岩戰靴圖(靴子).png" },
  { name: "小攻擊寶石", type: "飾品", rarity: "普通", effect: "攻擊力+5", image: "outputs/小攻擊寶石圖(吊飾).png" },
  { name: "小破防寶石", type: "飾品", rarity: "普通", effect: "破防+5", image: "outputs/小破防寶石圖(吊飾).png" },
  { name: "小閃避寶石", type: "飾品", rarity: "普通", effect: "1%閃避", image: "outputs/小閃避寶石圖(吊飾).png" },
  { name: "小爆率寶石", type: "飾品", rarity: "普通", effect: "爆擊率+5%", image: "outputs/小爆率寶石圖(吊飾).png" },
  { name: "小爆傷寶石", type: "飾品", rarity: "普通", effect: "爆擊傷害+10%", image: "outputs/小爆傷寶石圖(吊飾).png" },
  { name: "中攻擊寶石", type: "飾品", rarity: "稀有", effect: "攻擊力+10", image: "outputs/中攻擊寶石圖(吊飾).png" },
  { name: "中破防寶石", type: "飾品", rarity: "稀有", effect: "破防+10", image: "outputs/中破防寶石圖(吊飾).png" },
  { name: "中閃避寶石", type: "飾品", rarity: "稀有", effect: "2%閃避", image: "outputs/中閃避寶石圖(吊飾).png" },
  { name: "中爆率寶石", type: "飾品", rarity: "稀有", effect: "爆擊率+10%", image: "outputs/中爆率寶石圖(吊飾).png" },
  { name: "中爆傷寶石", type: "飾品", rarity: "稀有", effect: "爆擊傷害+30%", image: "outputs/中爆傷寶石圖(吊飾).png" },
  { name: "大攻擊寶石", type: "飾品", rarity: "史詩", effect: "攻擊力+20", image: "outputs/大攻擊寶石圖(吊飾).png" },
  { name: "大破防寶石", type: "飾品", rarity: "史詩", effect: "破防+20", image: "outputs/大破防寶石圖(吊飾).png" },
  { name: "大閃避寶石", type: "飾品", rarity: "史詩", effect: "3%閃避", image: "outputs/大閃避寶石圖(吊飾).png" },
  { name: "大爆率寶石", type: "飾品", rarity: "史詩", effect: "爆擊率+20%", image: "outputs/大爆率寶石圖(吊飾).png" },
  { name: "大爆傷寶石", type: "飾品", rarity: "史詩", effect: "爆擊傷害+60%", image: "outputs/大爆傷寶石圖(吊飾).png" },
  { name: "至尊攻擊寶石", type: "飾品", rarity: "傳奇", effect: "攻擊力+50", image: "outputs/至尊攻擊寶石圖(吊飾).png" },
  { name: "至尊破防寶石", type: "飾品", rarity: "傳奇", effect: "破防+50", image: "outputs/至尊破防寶石圖(吊飾).png" },
  { name: "至尊閃避寶石", type: "飾品", rarity: "傳奇", effect: "5%閃避", image: "outputs/至尊閃避寶石圖(吊飾).png" },
  { name: "至尊爆率寶石", type: "飾品", rarity: "傳奇", effect: "爆擊率+40%", image: "outputs/至尊爆率寶石圖(吊飾).png" },
  { name: "至尊爆傷寶石", type: "飾品", rarity: "傳奇", effect: "爆擊傷害+120%", image: "outputs/至尊爆傷寶石圖(吊飾).png" },
];

const playerStats = {
  pierce: 0,
  attack: 10,
  moveCooldown: 1000,
  critRate: 5,
  critDamage: 200,
  armorRate: 0,
  dodgeRate: 0,
  specialEffect: "無",
};

const basePlayerStats = { ...playerStats };

const lobbyMusic = new Audio("outputs/大廳音樂.mp3");
const battleMusic = new Audio("outputs/戰鬥音樂.mp3");
const hammerSound = new Audio("outputs/敲擊聲.mp3");
const failSound = new Audio("outputs/失敗聲.mp3");
const successSound = new Audio("outputs/成功聲.mp3");
let bgMusicVolume = 0.65;
let sfxVolume = 0.85;
lobbyMusic.loop = true;
battleMusic.loop = true;

function applyVolumeSettings() {
  lobbyMusic.volume = bgMusicVolume;
  battleMusic.volume = bgMusicVolume;
  hammerSound.volume = sfxVolume;
  failSound.volume = sfxVolume;
  successSound.volume = Math.min(1, sfxVolume * 2);
}

applyVolumeSettings();

function playMusic(music) {
  music.play().catch(() => {});
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function switchMusic(screen) {
  if (screen === "game") {
    lobbyMusic.pause();
    battleMusic.currentTime = 0;
    battleMusic.volume = bgMusicVolume;
    playMusic(battleMusic);
    return;
  }

  battleMusic.pause();
  if (screen === "bagOpening") {
    lobbyMusic.pause();
    return;
  }

  lobbyMusic.volume = screen === "blacksmith" ? bgMusicVolume / 4 : bgMusicVolume;
  if (screen === "lobby" || screen === "blacksmith") {
    playMusic(lobbyMusic);
  }
}

document.addEventListener("pointerdown", () => {
  if (lobbyScreen.classList.contains("screen-active")) {
    playMusic(lobbyMusic);
  }
}, { once: true });

const enemyImages = [
  "outputs/小豬(準備攻擊左).png?v=2",
  "outputs/小豬(準備攻擊中).png?v=3",
  "outputs/小豬(準備攻擊右).png?v=2",
];

function showScreen(screen) {
  document.body.classList.toggle("is-battle", screen === "game");
  lobbyScreen.classList.toggle("screen-active", screen === "lobby");
  gameScreen.classList.toggle("screen-active", screen === "game");
  bagOpeningScreen.classList.toggle("screen-active", screen === "bagOpening");
  blacksmithScreen.classList.toggle("screen-active", screen === "blacksmith");
  switchMusic(screen);
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
  const bagDropChance = Math.min(100, 20 * multiplier);

  multiplierInput.value = multiplier.toFixed(1);
  bossCountInput.value = bossCount;
  difficultyText.textContent = `難度：${difficultySelect.value}`;
  bossCountText.textContent = `BOSS：${bossCount} 隻`;
  multiplierText.textContent = `倍率：${multiplier.toFixed(1)}x`;
  rewardText.textContent = `戰利品：金錢${reward}、${bagDropChance}%獲得袋子*${bossCount}`;
}

function updateHeroStatsList() {
  heroStatsList.innerHTML = `
    <div>破防：${playerStats.pierce}</div>
    <div>攻擊力：${playerStats.attack}</div>
    <div>移動冷卻：${(playerStats.moveCooldown / 1000).toFixed(1)}秒</div>
    <div>爆擊率：${playerStats.critRate}%</div>
    <div>爆擊傷害：${playerStats.critDamage}%</div>
    <div>護甲：${formatEffectAmount(playerStats.armorRate)}%</div>
    <div>閃避率：${formatEffectAmount(playerStats.dodgeRate)}%</div>
    <div>特殊效果：${playerStats.specialEffect}</div>
  `;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getLevelColorClass(level) {
  const itemLevel = Math.max(1, Number(level) || 1);

  if (itemLevel >= 20) {
    return "level-color-rainbow";
  }

  if (itemLevel >= 15) {
    return "level-color-yellow";
  }

  if (itemLevel >= 10) {
    return "level-color-purple";
  }

  if (itemLevel >= 5) {
    return "level-color-blue";
  }

  return "level-color-black";
}

function setLevelLabel(label, item) {
  label.classList.remove(
    "level-color-black",
    "level-color-blue",
    "level-color-purple",
    "level-color-yellow",
    "level-color-rainbow"
  );

  if (!item) {
    label.textContent = "";
    return;
  }

  label.textContent = `Lv${item.level || 1}`;
  label.classList.add(getLevelColorClass(item.level));
}

function setEquipmentSlot(button, image, item, emptyImage, emptyAlt) {
  let label = button.querySelector(".item-level-label");

  if (!label) {
    label = document.createElement("span");
    label.className = "item-level-label";
    button.appendChild(label);
  }

  image.src = item ? item.image : emptyImage;
  image.alt = item ? item.name : emptyAlt;
  setLevelLabel(label, item);
}

function getRandomEquipment(rarity) {
  const types = ["武器", "護甲", "靴子", "飾品"];
  const shuffledTypes = [...types].sort(() => Math.random() - 0.5);

  for (const type of shuffledTypes) {
    const rarityItems = equipmentData.filter((item) => item.rarity === rarity && item.type === type);

    if (rarityItems.length > 0) {
      return { ...getRandomItem(rarityItems), level: 1 };
    }
  }

  const fallbackItems = equipmentData.filter((item) => item.rarity === rarity);
  return { ...getRandomItem(fallbackItems.length > 0 ? fallbackItems : equipmentData), level: 1 };
}

function findEquipmentByName(name) {
  return equipmentData.find((item) => item.name === name) || null;
}

function normalizeEquipment(savedItem) {
  if (typeof savedItem === "string") {
    const item = findEquipmentByName(savedItem);

    if (item) {
      return { ...item, level: 1 };
    }

    const rarity = rarityNames.find((name) => savedItem.startsWith(name));
    const baseName = rarity ? savedItem.slice(rarity.length) : "";
    const baseItem = findEquipmentByName(baseName);

    return baseItem ? { ...baseItem, name: savedItem, rarity, level: 1 } : null;
  }

  if (!savedItem || !savedItem.name) {
    return null;
  }

  return {
    name: savedItem.name,
    type: savedItem.type,
    rarity: savedItem.rarity,
    effect: savedItem.effect,
    image: savedItem.image,
    level: Math.max(1, Number(savedItem.level) || 1),
  };
}

function saveGame() {
  const saveData = {
    money,
    bgMusicVolume,
    sfxVolume,
    inventory,
    equippedItems: Object.fromEntries(
      Object.entries(equippedItems).map(([type, item]) => [type, item])
    ),
  };

  localStorage.setItem(saveKey, JSON.stringify(saveData));
}

function getCurrentSaveData() {
  const rawSave = localStorage.getItem(saveKey);

  if (!rawSave) {
    saveGame();
    return JSON.parse(localStorage.getItem(saveKey));
  }

  return JSON.parse(rawSave);
}

function loadGame() {
  const rawSave = localStorage.getItem(saveKey);

  if (!rawSave) {
    return;
  }

  try {
    const saveData = JSON.parse(rawSave);

    money = Number(saveData.money) || 0;
    bgMusicVolume = Math.min(1, Math.max(0, Number(saveData.bgMusicVolume ?? bgMusicVolume)));
    sfxVolume = Math.min(1, Math.max(0, Number(saveData.sfxVolume ?? sfxVolume)));
    bgVolumeInput.value = Math.round(bgMusicVolume * 100);
    sfxVolumeInput.value = Math.round(sfxVolume * 100);
    applyVolumeSettings();
    inventory = (saveData.inventory || [])
      .map(normalizeEquipment)
      .filter(Boolean);

    Object.keys(equippedItems).forEach((type) => {
      equippedItems[type] = normalizeEquipment(saveData.equippedItems?.[type]);
    });

    recalculatePlayerStats();
    updateEquippedImages();
  } catch (error) {
    console.warn("讀取存檔失敗", error);
  }
}

function openSaveEditor() {
  saveGame();
  const saveData = getCurrentSaveData();

  saveMoneyInput.value = saveData.money || 0;
  saveJsonInput.value = JSON.stringify(saveData, null, 2);
  saveEditorModal.classList.add("is-active");
}

function applySaveEditor() {
  try {
    const saveData = JSON.parse(saveJsonInput.value);

    saveData.money = Math.max(0, Number(saveMoneyInput.value) || 0);
    localStorage.setItem(saveKey, JSON.stringify(saveData));
    loadGame();
    updateMoneyText();
    updateInventoryList();
    updateHeroStatsList();
    saveEditorModal.classList.remove("is-active");
  } catch (error) {
    alert("JSON格式錯了");
  }
}

function addEquipmentToInventory(item) {
  inventory.push({ ...item, level: Math.max(1, Number(item.level) || 1) });
  saveGame();
}

function getEffectAmount(item) {
  return Number(item.effect.match(/\d+(\.\d+)?/)?.[0] || 0);
}

function getEffectNumberBefore(item, keyword) {
  const match = item.effect.match(new RegExp(`(\\d+(?:\\.\\d+)?)%${keyword}`));

  return Number(match?.[1] || 0);
}

function getMoveCooldownAmount(item) {
  const match = item.effect.match(/移動冷卻-(\d+(?:\.\d+)?)秒/);

  return Number(match?.[1] || 0);
}

function getNextFlatUpgradeAmount(currentAmount) {
  return Math.max(1, Math.floor((currentAmount - 10) / 5) + 1);
}

function getScaledEffectAmount(item) {
  return getEffectAmount(item);
}

function getNextEffectUpgradeAmount(item) {
  if (item.effect.includes("移動冷卻")) {
    return 0.05;
  }

  if (item.type === "武器") {
    return { "普通": 1, "稀有": 3, "史詩": 5, "傳奇": 10 }[item.rarity] || 1;
  }

  if (item.type === "護甲") {
    return { "普通": 1, "稀有": 3, "史詩": 5, "傳奇": 10 }[item.rarity] || 1;
  }

  if (item.type === "靴子") {
    return { "普通": 1, "稀有": 2, "史詩": 3, "傳奇": 5 }[item.rarity] || 1;
  }

  if (item.name.includes("至尊攻擊") || item.name.includes("至尊破防")) {
    return 8;
  }

  if (item.name.includes("至尊閃避")) {
    return 1;
  }

  if (item.name.includes("至尊爆率")) {
    return 3;
  }

  if (item.name.includes("至尊爆傷")) {
    return 10;
  }

  if (item.name.includes("大攻擊") || item.name.includes("大破防")) {
    return 4;
  }

  if (item.name.includes("大閃避")) {
    return 0.75;
  }

  if (item.name.includes("大爆率")) {
    return 2;
  }

  if (item.name.includes("大爆傷")) {
    return 6;
  }

  if (item.name.includes("中攻擊") || item.name.includes("中破防")) {
    return 2;
  }

  if (item.name.includes("中閃避")) {
    return 0.5;
  }

  if (item.name.includes("中爆率")) {
    return 1.5;
  }

  if (item.name.includes("中爆傷")) {
    return 3;
  }

  return 1;
}

function formatEffectAmount(amount) {
  return Number.isInteger(amount) ? amount : Number(amount.toFixed(2));
}

function getScaledEffectText(item) {
  const amount = formatEffectAmount(getScaledEffectAmount(item));

  return item.effect.replace(/\d+(\.\d+)?/, amount);
}

function getUpgradedEffectText(item) {
  const nextLevel = (item.level || 1) + 1;
  let effect = item.effect;

  function addBefore(keyword, amount) {
    effect = effect.replace(new RegExp(`(\\d+(?:\\.\\d+)?)%${keyword}`), (_, value) => {
      return `${formatEffectAmount(Number(value) + amount)}%${keyword}`;
    });
  }

  function addAfter(keyword, amount) {
    effect = effect.replace(new RegExp(`${keyword}\\+(\\d+(?:\\.\\d+)?)(%)?`), (_, value, percent = "") => {
      return `${keyword}+${formatEffectAmount(Number(value) + amount)}${percent}`;
    });
  }

  if (item.type === "武器") {
    addAfter("攻擊力", getNextEffectUpgradeAmount(item));

    if (nextLevel % 5 === 0) {
      if (effect.includes("破防")) {
        addAfter("破防", 5);
      } else {
        effect += " 破防+5";
      }
    }

    return effect;
  }

  if (item.type === "護甲") {
    addBefore("護甲", getNextEffectUpgradeAmount(item));

    if (nextLevel % 5 === 0) {
      addBefore("閃避", 5);
    }

    return effect;
  }

  if (item.type === "靴子") {
    addBefore("護甲", getNextEffectUpgradeAmount(item));

    if (nextLevel % 5 === 0) {
      effect = effect.replace(/移動冷卻-(\d+(?:\.\d+)?)秒/, (_, value) => {
        return `移動冷卻-${formatEffectAmount(Number(value) + 0.25)}秒`;
      });
    }

    return effect;
  }

  if (item.effect.includes("閃避")) {
    addBefore("閃避", getNextEffectUpgradeAmount(item));
    return effect;
  }

  if (item.effect.includes("攻擊力")) {
    addAfter("攻擊力", getNextEffectUpgradeAmount(item));
  } else if (item.effect.includes("破防")) {
    addAfter("破防", getNextEffectUpgradeAmount(item));
  } else if (item.effect.includes("爆擊率")) {
    addAfter("爆擊率", getNextEffectUpgradeAmount(item));
  } else if (item.effect.includes("爆擊傷害")) {
    addAfter("爆擊傷害", getNextEffectUpgradeAmount(item));
  }

  return effect;
}

function applyEquipmentEffect(item) {
  const amount = getScaledEffectAmount(item);

  if (item.effect.includes("護甲")) {
    playerStats.armorRate += getEffectNumberBefore(item, "護甲");
  }

  if (item.effect.includes("閃避")) {
    playerStats.dodgeRate += getEffectNumberBefore(item, "閃避");
  }

  if (item.effect.includes("攻擊力")) {
    playerStats.attack += amount;
  }

  if (item.effect.includes("破防")) {
    playerStats.pierce += amount;
  }

  if (item.effect.includes("移動冷卻")) {
    playerStats.moveCooldown -= getMoveCooldownAmount(item) * 1000;
  }

  if (item.effect.includes("爆擊率")) {
    playerStats.critRate += amount;
  }

  if (item.effect.includes("爆擊傷害")) {
    playerStats.critDamage += amount;
  }

  playerStats.moveCooldown = Math.max(0, playerStats.moveCooldown);
}

function applyUpgradeBonus(item, upgradeLevel) {
  const rarity = item.rarity;
  const bonusByType = {
    "武器": { stat: "attack", values: { "普通": 1, "稀有": 3, "史詩": 5, "傳奇": 10 } },
    "護甲": { stat: "armorRate", values: { "普通": 1, "稀有": 3, "史詩": 5, "傳奇": 10 } },
    "靴子": { stat: "moveCooldown", values: { "普通": -50, "稀有": -50, "史詩": -50, "傳奇": -50 } },
  };

  if (bonusByType[item.type]) {
    const bonus = bonusByType[item.type];
    playerStats[bonus.stat] += (bonus.values[rarity] || 0) * upgradeLevel;
    return;
  }

  if (item.effect.includes("攻擊力")) {
    playerStats.attack += upgradeLevel;
  } else if (item.effect.includes("破防")) {
    playerStats.pierce += upgradeLevel;
  } else if (item.effect.includes("移動冷卻")) {
    playerStats.moveCooldown -= 50 * upgradeLevel;
  } else if (item.effect.includes("爆擊率") || item.effect.includes("爆率")) {
    playerStats.critRate += upgradeLevel;
  } else if (item.effect.includes("爆擊傷害") || item.effect.includes("爆傷")) {
    playerStats.critDamage += upgradeLevel;
  }
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
    "武器": { element: equippedWeapon, level: equippedWeaponLevel, empty: "outputs/空武器圖.png", alt: "空武器" },
    "護甲": { element: equippedArmor, level: equippedArmorLevel, empty: "outputs/空護甲圖.png", alt: "空護甲" },
    "靴子": { element: equippedShoes, level: equippedShoesLevel, empty: "outputs/空靴子圖.png", alt: "空鞋子" },
    "飾品": { element: equippedAccessory, level: equippedAccessoryLevel, empty: "outputs/空飾品圖.png", alt: "空飾品" },
  };

  Object.entries(slots).forEach(([type, slot]) => {
    const item = equippedItems[type];

    slot.element.src = item ? item.image : slot.empty;
    slot.element.alt = item ? item.name : slot.alt;
    setLevelLabel(slot.level, item);
  });
}

function equipItem(item) {
  equippedItems[item.type] = item;
  recalculatePlayerStats();
  updateEquippedImages();
  updateHeroStatsList();
  saveGame();
}

function unequipItem(type) {
  equippedItems[type] = null;
  recalculatePlayerStats();
  updateEquippedImages();
  updateHeroStatsList();
  saveGame();
}

function isSameEquipmentItem(a, b) {
  return a && b
    && a.name === b.name
    && a.type === b.type
    && a.rarity === b.rarity
    && a.effect === b.effect
    && a.image === b.image
    && (a.level || 1) === (b.level || 1);
}

function removeDroppedEquippedItemsFromInventory(droppedItems) {
  droppedItems.forEach((droppedItem) => {
    const itemIndex = inventory.findIndex((item) => isSameEquipmentItem(item, droppedItem));

    if (itemIndex >= 0) {
      inventory.splice(itemIndex, 1);
    }
  });
}

function syncEquippedItemUpgrade(oldItem, upgradedItem) {
  const equippedItem = equippedItems[upgradedItem.type];

  if (isSameEquipmentItem(equippedItem, oldItem)) {
    equippedItems[upgradedItem.type] = upgradedItem;
  }
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
    <div>等級：${item.level || 1}</div>
    <div>效果：${getScaledEffectText(item)}</div>
  `;
  itemModalActionBtn.textContent = mode === "unequip" ? "卸下" : "穿上";
  itemModal.classList.add("is-active");
}

function getUpgradeRule(level) {
  return upgradeCosts.find((rule) => level >= rule.min && level <= rule.max) || upgradeCosts[upgradeCosts.length - 1];
}

function getUpgradeCost(item) {
  const level = Math.max(1, Number(item.level) || 1);
  return getUpgradeRule(level).costs[item.rarity] || 0;
}

function getUpgradeChance(item) {
  const level = Math.max(1, Number(item.level) || 1);
  return getUpgradeRule(level).chance;
}

function getUpgradeBonusInfo(item) {
  if (item.type === "武器") {
    return { stat: "攻擊力", value: getNextEffectUpgradeAmount(item) };
  }

  if (item.type === "護甲") {
    return { stat: "護甲", value: getNextEffectUpgradeAmount(item), unit: "%" };
  }

  if (item.type === "靴子") {
    return { stat: "護甲", value: getNextEffectUpgradeAmount(item), unit: "%" };
  }

  if (item.effect.includes("攻擊力")) {
    return { stat: "攻擊力", value: getNextEffectUpgradeAmount(item) };
  }

  if (item.effect.includes("破防")) {
    return { stat: "破防", value: getNextEffectUpgradeAmount(item) };
  }

  if (item.effect.includes("護甲")) {
    return { stat: "護甲", value: getNextEffectUpgradeAmount(item), unit: "%" };
  }

  if (item.effect.includes("閃避")) {
    return { stat: "閃避率", value: getNextEffectUpgradeAmount(item), unit: "%" };
  }

  if (item.effect.includes("爆擊率")) {
    return { stat: "爆擊率", value: getNextEffectUpgradeAmount(item), unit: "%" };
  }

  if (item.effect.includes("爆擊傷害")) {
    return { stat: "爆擊傷害", value: getNextEffectUpgradeAmount(item), unit: "%" };
  }

  return { stat: "特殊效果", value: 0 };
}

function getUpgradeEffectLines(item) {
  const lines = [];

  function pushLine(text, value, unit = "") {
    const sign = value >= 0 ? "+" : "";
    lines.push(`${text}<span class="upgrade-plus">${sign}${formatEffectAmount(value)}${unit}</span>`);
  }

  if (item.type === "武器") {
    const attackMatch = item.effect.match(/攻擊力\+(\d+(?:\.\d+)?)/);

    if (attackMatch) {
      pushLine(`攻擊力+${attackMatch[1]}`, getNextEffectUpgradeAmount(item));
    }

    if (((item.level || 1) + 1) % 5 === 0) {
      const pierceMatch = item.effect.match(/破防\+(\d+(?:\.\d+)?)/);
      pushLine(pierceMatch ? `破防+${pierceMatch[1]}` : "破防+0", 5);
    }

    return lines;
  }

  if (item.type === "護甲") {
    const armor = getEffectNumberBefore(item, "護甲");
    const dodge = getEffectNumberBefore(item, "閃避");

    pushLine(`${armor}%護甲`, getNextEffectUpgradeAmount(item), "%");

    if (((item.level || 1) + 1) % 5 === 0) {
      pushLine(`${dodge}%閃避`, 5, "%");
    }

    return lines;
  }

  if (item.type === "靴子") {
    const armor = getEffectNumberBefore(item, "護甲");
    const cooldown = getMoveCooldownAmount(item);

    pushLine(`${armor}%護甲`, getNextEffectUpgradeAmount(item), "%");

    if (cooldown > 0) {
      const cooldownBonus = ((item.level || 1) + 1) % 5 === 0 ? 0.25 : 0;
      pushLine(`移動冷卻-${cooldown}秒`, cooldownBonus, "秒");
    }

    return lines;
  }

  if (item.effect.includes("閃避")) {
    pushLine(`${getEffectNumberBefore(item, "閃避")}%閃避`, getNextEffectUpgradeAmount(item), "%");
  } else if (item.effect.includes("攻擊力")) {
    pushLine(getScaledEffectText(item), getNextEffectUpgradeAmount(item));
  } else if (item.effect.includes("破防")) {
    pushLine(getScaledEffectText(item), getNextEffectUpgradeAmount(item));
  } else if (item.effect.includes("爆擊率")) {
    pushLine(getScaledEffectText(item), getNextEffectUpgradeAmount(item), "%");
  } else if (item.effect.includes("爆擊傷害")) {
    pushLine(getScaledEffectText(item), getNextEffectUpgradeAmount(item), "%");
  } else {
    lines.push(getScaledEffectText(item));
  }

  return lines;
}

function updateUpgradeDetailText(item) {
  if (!upgradeDetailText) {
    return;
  }

  if (!item) {
    upgradeDetailText.textContent = "選擇裝備後顯示升級詳細狀態";
    return;
  }

  const bonus = getUpgradeBonusInfo(item);
  const effectLines = getUpgradeEffectLines(item).join("<br>");

  upgradeDetailText.innerHTML = `
    <div>${bonus.stat}</div>
    <div>種類：${item.type}</div>
    <div>稀有度：${item.rarity}</div>
    <div>等級：${item.level || 1} <span class="upgrade-plus">+1</span></div>
    <div>效果：<br>${effectLines}</div>
  `;
}

function updateUpgradeUi() {
  if (upgradedPendingItem) {
    upgradeBtn.innerHTML = "確定";
    updateUpgradeDetailText(upgradedPendingItem);
    return;
  }

  if (!upgradeSlot) {
    upgradeBtn.innerHTML = "升級<br>花費:<br>成功機率:";
    updateUpgradeDetailText(null);
    return;
  }

  updateUpgradeDetailText(upgradeSlot.item);
  upgradeBtn.innerHTML = `升級<br>花費:${getUpgradeCost(upgradeSlot.item)}<br>成功機率:${getUpgradeChance(upgradeSlot.item)}%`;
}

function sortInventoryItems(items) {
  const rarityOrder = { "傳奇": 4, "史詩": 3, "稀有": 2, "普通": 1 };

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

function createHigherRarityItem(baseItem) {
  const rarityIndex = rarityNames.indexOf(baseItem.rarity);
  const nextRarity = rarityNames[Math.min(rarityIndex + 1, rarityNames.length - 1)];
  const candidates = equipmentData.filter((item) => item.type === baseItem.type && item.rarity === nextRarity);

  if (candidates.length > 0) {
    return { ...getRandomItem(candidates) };
  }

  return {
    ...baseItem,
    name: `${nextRarity}${baseItem.name}`,
    rarity: nextRarity,
  };
}

function createSameRarityItem(type, rarity) {
  const candidates = equipmentData.filter((item) => item.type === type && item.rarity === rarity);

  if (candidates.length > 0) {
    return { ...getRandomItem(candidates) };
  }

  return null;
}

function renderForgeSlots() {
  forgeSlotButtons.forEach((button, index) => {
    const image = button.querySelector("img");
    const entry = forgeSlots[index];

    setEquipmentSlot(button, image, entry?.item, "outputs/空裝備格子圖.png", `材料${index + 1}`);
  });

  synthesizeBtn.innerHTML = forgeSlots.every(Boolean) ? "合成<br>50%成功" : "合成";
}

function showForgeResultText(text, type) {
  blacksmithResult.textContent = text;
  blacksmithResult.classList.remove("is-success", "is-fail");

  void blacksmithResult.offsetWidth;

  if (type) {
    blacksmithResult.classList.add(type === "success" ? "is-success" : "is-fail");
  }
}

function getForgePickerItems(slotIndex) {
  if (forgePickerMode === "upgrade") {
    return inventory.map((item, index) => ({ item, index }));
  }

  const usedIndexes = forgeSlots
    .filter(Boolean)
    .map((entry) => entry.index);

  return inventory
    .map((item, index) => ({ item, index }))
    .filter((entry) => !usedIndexes.includes(entry.index))
    .filter((entry) => {
      const firstItem = forgeSlots[0]?.item;

      if (slotIndex === 0 || !firstItem) {
        return slotIndex === 0;
      }

      return entry.item.type === firstItem.type && entry.item.rarity === firstItem.rarity;
    });
}

function renderForgePicker(slotIndex) {
  const entries = getForgePickerItems(slotIndex);

  forgePickerList.innerHTML = "";

  if (entries.length === 0) {
    forgePickerList.textContent = "沒有可以放的裝備";
    return;
  }

  sortInventoryItems(entries.map((entry) => entry.item)).forEach((item) => {
    const entry = entries.find((candidate) => candidate.item === item);
    const button = document.createElement("button");
    const image = document.createElement("img");

    button.className = "inventory-item";
    button.type = "button";
    button.title = `${item.name}｜Lv${item.level || 1}｜${item.type}｜${item.rarity}｜${item.effect}`;
    image.src = item.image;
    image.alt = item.name;
    button.appendChild(image);
    const levelLabel = document.createElement("span");

    levelLabel.className = "item-level-label";
    setLevelLabel(levelLabel, item);
    button.appendChild(levelLabel);
    button.addEventListener("click", () => {
      if (forgePickerMode === "upgrade") {
        upgradeSlot = entry;
        upgradedPendingItem = null;
        setEquipmentSlot(upgradeInputSlot, upgradeInputImage, item, "outputs/空裝備格子圖.png", "升級材料");
        setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
        showUpgradeResultText("", "");
        updateUpgradeUi();
        forgePickerModal.classList.remove("is-active");
        return;
      }

      forgeSlots[slotIndex] = entry;

      if (slotIndex === 0) {
        forgeSlots = forgeSlots.map((slot, index) => {
          if (index === 0 || !slot) {
            return slot;
          }

          return slot.item.type === item.type && slot.item.rarity === item.rarity ? slot : null;
        });
      }

      showForgeResultText("", "");
      renderForgeSlots();
      forgePickerModal.classList.remove("is-active");
    });
    forgePickerList.appendChild(button);
  });
}

function openForgePicker(slotIndex) {
  forgePickerMode = "compose";
  forgePickingSlot = slotIndex;
  renderForgePicker(slotIndex);
  forgePickerModal.classList.add("is-active");
}

function openUpgradePicker() {
  forgePickerMode = "upgrade";
  renderForgePicker(0);
  forgePickerModal.classList.add("is-active");
}

function showBlacksmithMode(mode) {
  blacksmithModeSelect.style.display = mode === "select" ? "grid" : "none";
  blacksmithComposePanel.classList.toggle("is-active", mode === "compose");
  blacksmithUpgradePanel.classList.toggle("is-active", mode === "upgrade");
}

function resetUpgradeSlot() {
  upgradeSlot = null;
  upgradedPendingItem = null;
  setEquipmentSlot(upgradeInputSlot, upgradeInputImage, null, "outputs/空裝備格子圖.png", "升級材料");
  setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
  showUpgradeResultText("", "");
  updateUpgradeUi();
}

function collectUpgradeResult() {
  if (!upgradedPendingItem) {
    return;
  }

  upgradedPendingItem = null;
  setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
  showUpgradeResultText("已放回包包", "success");
  updateUpgradeUi();
  saveGame();
}

function showUpgradeResultText(text, type) {
  upgradeResultText.textContent = text;
  upgradeResultText.classList.remove("is-success", "is-fail");

  void upgradeResultText.offsetWidth;

  if (type) {
    upgradeResultText.classList.add(type === "success" ? "is-success" : "is-fail");
  }
}

function upgradeSelectedItem() {
  if (upgradedPendingItem) {
    upgradeSlot = {
      item: upgradedPendingItem,
      index: inventory.indexOf(upgradedPendingItem),
    };
    upgradedPendingItem = null;
    setEquipmentSlot(upgradeInputSlot, upgradeInputImage, upgradeSlot.item, "outputs/空裝備格子圖.png", "升級材料");
    setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
    showUpgradeResultText("", "");
    updateUpgradeUi();
    return;
  }

  if (isForging) {
    return;
  }

  if (!upgradeSlot) {
    showUpgradeResultText("請先放入裝備", "fail");
    return;
  }

  const item = upgradeSlot.item;
  const itemBeforeUpgrade = { ...item };

  if ((item.level || 1) >= 20) {
    showUpgradeResultText("已經滿等", "fail");
    return;
  }

  const cost = getUpgradeCost(item);

  if (money < cost) {
    showUpgradeResultText("金錢不足", "fail");
    return;
  }

  money -= cost;
  updateMoneyText();
  saveGame();
  isForging = true;
  upgradeBtn.disabled = true;
  showUpgradeResultText("", "");
  upgradeBlacksmithInsideImage.classList.remove("is-forging");

  void upgradeBlacksmithInsideImage.offsetWidth;
  upgradeBlacksmithInsideImage.classList.add("is-forging");
  playSound(hammerSound);

  setTimeout(() => {
    upgradeBlacksmithInsideImage.classList.remove("is-forging");

    if (Math.random() * 100 < getUpgradeChance(item)) {
      item.effect = getUpgradedEffectText(item);
      item.level = (item.level || 1) + 1;
      syncEquippedItemUpgrade(itemBeforeUpgrade, item);
      upgradedPendingItem = item;
      upgradeSlot = null;
      setEquipmentSlot(upgradeInputSlot, upgradeInputImage, null, "outputs/空裝備格子圖.png", "升級材料");
      setEquipmentSlot(upgradeResultSlot, upgradeResultImage, item, "outputs/空裝備格子圖.png", "升級結果");
      showUpgradeResultText(`成功：${item.name} Lv${item.level}`, "success");
      playSound(successSound);
    } else {
      setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
      showUpgradeResultText(`失敗：${item.name} 保持 Lv${item.level || 1}`, "fail");
      playSound(failSound);
    }

    recalculatePlayerStats();
    updateEquippedImages();
    updateHeroStatsList();
    updateUpgradeUi();
    saveGame();
    isForging = false;
    upgradeBtn.disabled = false;
  }, 520);
}

function collectForgeResult() {
  if (!forgeResultItem) {
    return;
  }

  addEquipmentToInventory(forgeResultItem);
  showForgeResultText(`已收下：${forgeResultItem.name}`, "success");
  forgeResultItem = null;
  setEquipmentSlot(blacksmithResultSlot, blacksmithResultImage, null, "outputs/空裝備格子圖.png", "合成結果");
}

function synthesizeForgeSlots() {
  if (isForging) {
    return;
  }

  if (forgeResultItem) {
    showForgeResultText("先點上面的結果格收下", "fail");
    return;
  }

  if (forgeSlots.some((slot) => !slot)) {
    showForgeResultText("需要放滿三個裝備", "fail");
    return;
  }

  const [firstSlot] = forgeSlots;
  const isSameGroup = forgeSlots.every((slot) =>
    slot.item.type === firstSlot.item.type && slot.item.rarity === firstSlot.item.rarity
  );

  if (!isSameGroup) {
    showForgeResultText("三個裝備要同部位同稀有度", "fail");
    return;
  }

  if (money < forgeCost) {
    showForgeResultText("金錢不足", "fail");
    return;
  }

  const usedIndexes = forgeSlots.map((entry) => entry.index);
  const baseItem = firstSlot.item;
  const isUpgrade = Math.random() < 0.5 && baseItem.rarity !== "傳奇";
  const resultItem = isUpgrade
    ? createHigherRarityItem(baseItem)
    : createSameRarityItem(baseItem.type, baseItem.rarity) || { ...baseItem };
  resultItem.level = 1;

  isForging = true;
  money -= forgeCost;
  updateMoneyText();
  saveGame();
  synthesizeBtn.disabled = true;
  showForgeResultText("", "");
  blacksmithInsideImage.classList.remove("is-forging");

  void blacksmithInsideImage.offsetWidth;
  blacksmithInsideImage.classList.add("is-forging");
  playSound(hammerSound);

  setTimeout(() => {
    blacksmithInsideImage.classList.remove("is-forging");
    inventory = inventory.filter((item, index) => !usedIndexes.includes(index));
    forgeSlots.forEach((slot) => {
      Object.keys(equippedItems).forEach((type) => {
        if (equippedItems[type] === slot.item) {
          equippedItems[type] = null;
        }
      });
    });
    forgeSlots = [null, null, null];
    forgeResultItem = resultItem;
    setEquipmentSlot(blacksmithResultSlot, blacksmithResultImage, resultItem, "outputs/空裝備格子圖.png", "合成結果");
    showForgeResultText(
      `${isUpgrade ? "成功" : "失敗"}：${resultItem.name}`,
      isUpgrade ? "success" : "fail"
    );
    playSound(isUpgrade ? successSound : failSound);
    recalculatePlayerStats();
    updateEquippedImages();
    renderForgeSlots();
    isForging = false;
    synthesizeBtn.disabled = false;
  }, 520);
}

function renderBlacksmith() {
  renderForgeSlots();
}

function openBagRewardByRarity(rarityIndex) {
  const rarityName = bagRarities[rarityIndex].name;
  const roll = Math.random() * 100;

  if (rarityName === "普通") {
    if (roll < 25) {
      return { type: "money", amount: 1000, text: "獲得金錢 1000" };
    }

    return {
      type: "equipment",
      item: getRandomEquipment(roll < 85 ? "普通" : "稀有"),
    };
  }

  if (rarityName === "稀有") {
    if (roll < 25) {
      return { type: "money", amount: 2000, text: "獲得金錢 2000" };
    }

    return {
      type: "equipment",
      item: getRandomEquipment(roll < 65 ? "普通" : "稀有"),
    };
  }

  if (rarityName === "史詩") {
    if (roll < 20) {
      return { type: "money", amount: 5000, text: "獲得金錢 5000" };
    }

    if (roll < 30) {
      return { type: "equipment", item: getRandomEquipment("普通") };
    }

    if (roll < 80) {
      return { type: "equipment", item: getRandomEquipment("稀有") };
    }

    return { type: "equipment", item: getRandomEquipment("史詩") };
  }

  if (rarityName === "傳奇") {
    if (roll < 10) {
      return { type: "money", amount: 10000, text: "獲得金錢 10000" };
    }

    if (roll < 30) {
      return { type: "equipment", item: getRandomEquipment("稀有") };
    }

    if (roll < 80) {
      return { type: "equipment", item: getRandomEquipment("史詩") };
    }

    return { type: "equipment", item: getRandomEquipment("傳奇") };
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
    row.title = `${item.name}｜Lv${item.level || 1}｜${item.type}｜${item.rarity}｜${item.effect}`;
    row.addEventListener("click", () => {
      showItemModal(item, "equip");
    });
    image.src = item.image;
    image.alt = item.name;
    row.appendChild(image);
    const levelLabel = document.createElement("span");

    levelLabel.className = "item-level-label";
    setLevelLabel(levelLabel, item);
    row.appendChild(levelLabel);
    inventoryList.appendChild(row);
  });
}

function updateMoneyText() {
  moneyText.textContent = money;

  if (upgradeMoneyText) {
    upgradeMoneyText.textContent = `目前金錢：${money}`;
  }
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
  if (title === "失敗") {
    playSound(failSound);
  }
  resultTitle.textContent = title;
  resultMoneyText.textContent = `獲得金錢：${earnedMoney}`;
  deathDropText.textContent = title === "失敗" ? "身上裝備已掉落" : "";
  updateResultBags();
  resultModal.classList.add("is-active");
}

function gameOver() {
  hero.classList.add("is-dead");
  battleBags = [];
  const droppedItems = Object.values(equippedItems).filter(Boolean);

  removeDroppedEquippedItemsFromInventory(droppedItems);
  Object.keys(equippedItems).forEach((type) => {
    equippedItems[type] = null;
  });
  recalculatePlayerStats();
  updateEquippedImages();
  updateHeroStatsList();
  saveGame();
  showResult("失敗", 0);
}

function tryDeathSave() {
  if (Math.random() * 100 < playerStats.dodgeRate) {
    return true;
  }

  if (battleArmorRate >= 100) {
    battleArmorRate -= 100;
    return true;
  }

  if (battleArmorRate > 0 && Math.random() * 100 < battleArmorRate) {
    battleArmorRate = 0;
    return true;
  }

  return false;
}

function rollBossBagDrop() {
  if (difficultySelect.value !== "簡單") {
    return false;
  }

  const dropChance = Math.min(100, 20 * battleMultiplier);

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
  playSound(hammerSound);
  upgradeBagByClick(bag, openingBagClicks);
  openBagBtn.classList.remove("is-clicked");

  void openBagBtn.offsetWidth;
  openBagBtn.classList.add("is-clicked");

  if (openingBagClicks >= 4) {
    bag.upgraded = true;
    const reward = collectBagReward(bag);
    setTimeout(() => playSound(successSound), 420);

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
  saveGame();
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
  playSound(successSound);
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
  enemyAttackDelayTimer = setTimeout(() => {
    shootBullet();
    bulletTimer = setInterval(shootBullet, 1600);
  }, 1000);
  playerAttackDelayTimer = setTimeout(() => {
    canPlayerDamage = true;
    playerAttackTimer = setInterval(shootPlayerBullet, 1000);
  }, 2000);
}

function stopEnemyActions() {
  clearTimeout(enemyAttackDelayTimer);
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
  battleArmorRate = playerStats.armorRate;
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

blacksmithButton.addEventListener("click", () => {
  showForgeResultText("", "");
  showBlacksmithMode("select");
  showScreen("blacksmith");
});

openComposeModeBtn.addEventListener("click", () => {
  renderBlacksmith();
  showBlacksmithMode("compose");
});

openUpgradeModeBtn.addEventListener("click", () => {
  resetUpgradeSlot();
  showBlacksmithMode("upgrade");
});

blacksmithBackBtn.addEventListener("click", () => {
  collectForgeResult();
  showScreen("lobby");
});

upgradeBackBtn.addEventListener("click", () => {
  collectUpgradeResult();
  showScreen("lobby");
});

blacksmithResultSlot.addEventListener("click", collectForgeResult);

synthesizeBtn.addEventListener("click", synthesizeForgeSlots);

upgradeInputSlot.addEventListener("click", openUpgradePicker);
upgradeResultSlot.addEventListener("click", collectUpgradeResult);

upgradeBtn.addEventListener("click", upgradeSelectedItem);

closeForgePickerBtn.addEventListener("click", () => {
  forgePickerModal.classList.remove("is-active");
});

forgeSlotButtons.forEach((button, index) => {
  button.addEventListener("click", () => openForgePicker(index));
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

applySaveEditorBtn.addEventListener("click", applySaveEditor);

closeSaveEditorBtn.addEventListener("click", () => {
  saveEditorModal.classList.remove("is-active");
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
  if (event.key === "6") {
    isKey6Down = true;
  }

  if (event.key === "7") {
    isKey7Down = true;
  }

  if (isKey6Down && isKey7Down) {
    openSaveEditor();
  }

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

window.addEventListener("keyup", (event) => {
  if (event.key === "6") {
    isKey6Down = false;
  }

  if (event.key === "7") {
    isKey7Down = false;
  }
});

function setBackgroundVolume(value) {
  bgMusicVolume = Math.min(1, Math.max(0, value));
  bgVolumeInput.value = Math.round(bgMusicVolume * 100);
  applyVolumeSettings();

  if (blacksmithScreen.classList.contains("screen-active")) {
    lobbyMusic.volume = bgMusicVolume / 4;
  }

  saveGame();
}

function setSfxVolume(value) {
  sfxVolume = Math.min(1, Math.max(0, value));
  sfxVolumeInput.value = Math.round(sfxVolume * 100);
  applyVolumeSettings();
  saveGame();
}

function bindMobileVolumeSlider(input, setter) {
  function setFromPointer(event) {
    const rect = input.getBoundingClientRect();
    const x = event.clientX ?? event.touches?.[0]?.clientX;

    if (x == null) {
      return;
    }

    setter((x - rect.left) / rect.width);
  }

  input.addEventListener("input", () => setter(Number(input.value) / 100));
  input.addEventListener("pointerdown", (event) => {
    input.setPointerCapture?.(event.pointerId);
    setFromPointer(event);
  });
  input.addEventListener("pointermove", (event) => {
    if (event.buttons > 0) {
      setFromPointer(event);
    }
  });
}

bindMobileVolumeSlider(bgVolumeInput, setBackgroundVolume);
bindMobileVolumeSlider(sfxVolumeInput, setSfxVolume);

bgVolumeInput.addEventListener("touchmove", (event) => {
  event.preventDefault();
}, { passive: false });

sfxVolumeInput.addEventListener("touchmove", (event) => {
  event.preventDefault();
}, { passive: false });

document.addEventListener("touchmove", (event) => {
  if (document.body.classList.contains("is-battle")) {
    event.preventDefault();
  }
}, { passive: false });

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

loadGame();
bgVolumeInput.value = Math.round(bgMusicVolume * 100);
sfxVolumeInput.value = Math.round(sfxVolume * 100);
updateHeroPosition();
resetBullet();
resetPlayerBullet();
updateBossHpText();
updateDifficultyInfo();
updateMoneyText();

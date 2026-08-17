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
const replayTutorialBtn = document.getElementById("replayTutorialBtn");
const difficultySelect = document.getElementById("difficultySelect");
const bossCountInput = document.getElementById("bossCountInput");
const multiplierInput = document.getElementById("multiplierInput");
const difficultyText = document.getElementById("difficultyText");
const bossCountText = document.getElementById("bossCountText");
const multiplierText = document.getElementById("multiplierText");
const rewardText = document.getElementById("rewardText");
const recommendationText = document.getElementById("recommendationText");
const moneyText = document.getElementById("moneyText");
const volumeToggleBtn = document.getElementById("volumeToggleBtn");
const deleteAccountBtn = document.getElementById("deleteAccountBtn");
const deleteAccountModal = document.getElementById("deleteAccountModal");
const cancelDeleteAccountBtn = document.getElementById("cancelDeleteAccountBtn");
const confirmDeleteAccountBtn = document.getElementById("confirmDeleteAccountBtn");
const volumeControls = document.getElementById("volumeControls");
const bgVolumeInput = document.getElementById("bgVolumeInput");
const sfxVolumeInput = document.getElementById("sfxVolumeInput");
const bgSoundToggleBtn = document.getElementById("bgSoundToggleBtn");
const sfxSoundToggleBtn = document.getElementById("sfxSoundToggleBtn");
const tutorialOverlay = document.getElementById("tutorialOverlay");
const tutorialText = document.getElementById("tutorialText");
const tutorialNextBtn = document.getElementById("tutorialNextBtn");
const tutorialArrow = document.getElementById("tutorialArrow");
const backBtn = document.getElementById("backBtn");
const battleArmorText = document.getElementById("battleArmorText");
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
const bossIntro = document.getElementById("bossIntro");
const lanes = [...document.querySelectorAll(".lane")];
const hero = document.getElementById("hero");
const enemy = document.getElementById("enemy");
const bullet = document.getElementById("bullet");
const bubbleWeapon = document.getElementById("bubbleWeapon");
const playerBullet = document.getElementById("playerBullet");
const gageAttack = document.getElementById("gageAttack");
const bossHpText = document.getElementById("bossHpText");
const damageText = document.getElementById("damageText");
const bubbleDebugText = document.getElementById("bubbleDebugText");
const bagDropText = document.getElementById("bagDropText");
const openBagBtn = document.getElementById("openBagBtn");
const openBagImage = document.getElementById("openBagImage");
const openBagReward = document.getElementById("openBagReward");
const openBagRarity = document.getElementById("openBagRarity");
const openBagProgress = document.getElementById("openBagProgress");
const blacksmithInsideImage = document.getElementById("blacksmithInsideImage");
const upgradeBlacksmithInsideImage = document.getElementById("upgradeBlacksmithInsideImage");
const blacksmithModeSelect = document.getElementById("blacksmithModeSelect");
const blacksmithComposePanel = document.getElementById("blacksmithComposePanel");
const blacksmithUpgradePanel = document.getElementById("blacksmithUpgradePanel");
const blacksmithSmeltPanel = document.getElementById("blacksmithSmeltPanel");
const openUpgradeModeBtn = document.getElementById("openUpgradeModeBtn");
const openComposeModeBtn = document.getElementById("openComposeModeBtn");
const openSmeltModeBtn = document.getElementById("openSmeltModeBtn");
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
const smeltInputSlot = document.getElementById("smeltInputSlot");
const smeltInputImage = document.getElementById("smeltInputImage");
const smeltInsideImage = document.getElementById("smeltInsideImage");
const smeltResultSlot = document.getElementById("smeltResultSlot");
const smeltResultImage = document.getElementById("smeltResultImage");
const smeltBtn = document.getElementById("smeltBtn");
const smeltResultText = document.getElementById("smeltResultText");
const smeltBackBtn = document.getElementById("smeltBackBtn");

openBagImage.addEventListener("error", () => {
  openBagImage.src = "outputs/空裝備格子圖.png";
});

enemy.addEventListener("error", () => {
  enemy.src = "outputs/小豬.png";
});

let playerLane = 1;
let playerRow = 0;
let bulletLane = 1;
let playerBulletLane = 1;
let bossHp = 100;
let bossMaxHp = 100;
let currentBossDefense = 0;
let currentBossName = "小豬";
let currentBossNumber = 1;
let totalBossCount = 1;
let battleMultiplier = 1;
let rewardStageRolled = false;
let isRewardStage = false;
let hasBubbleWeaponAttacked = false;
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
let forgeFailBonus = 0;
let forgePickerMode = "compose";
let upgradeSlot = null;
let upgradedPendingItem = null;
let smeltSlot = null;
let smeltedPendingItem = null;
let isForging = false;
let openingBagIndex = 0;
let openingBagClicks = 0;
let touchStartX = 0;
let touchStartY = 0;
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
let bossIntroTimer = null;
let hitAnimation = null;
let playerHitAnimation = null;
let bubbleWeaponContactTimer = null;
let bubbleSpinStartTime = 0;
let gageTimers = [];
let gageHazardCells = [];
let gageHazardActive = false;
let normalGageHazards = [];
let isGameOver = false;
let isKoPlaying = false;
let isOpeningBagReward = false;
let canPlayerDamage = false;
let isMoving = false;
let bubbleWeaponWasTouching = false;
let bubbleWeaponDodged = false;
let normalBubbleAttackTimer = null;
let normalBubbleDashStartTimer = null;
let normalBubbleDashActive = false;
let normalBubbleDashLanes = [];
let lastMoveTime = -Infinity;
let battleArmorRate = 0;
let retreatBossByDifficulty = {};

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
  { name: "泡泡", difficulty: "簡單", hp: 100, defense: 5 },
  { name: "普通泡泡", displayName: "泡泡", difficulty: "普通", hp: 250, defense: 20 },
  { name: "格格", difficulty: "簡單", hp: 150, defense: 0 },
  { name: "普通格格", displayName: "格格", difficulty: "普通", hp: 400, defense: 10 },
  { name: "普通小豬", displayName: "小豬", difficulty: "普通", hp: 350, defense: 15 },
];
const tutorialBossSequence = ["小豬", "泡泡", "格格"];
const rewardBossData = { name: "寶箱", hp: 150, defense: 0 };

function getBossImageName() {
  if (currentBossName === "普通泡泡") return "泡泡";
  if (currentBossName === "普通格格") return "格格";
  return currentBossName;
}

function isBubbleBoss() {
  return currentBossName === "泡泡" || currentBossName === "普通泡泡";
}

function isGageBoss() {
  return currentBossName === "格格" || currentBossName === "普通格格";
}

const bagRarities = [
  { name: "普通", image: "outputs/普通袋子.png", scale: 1 },
  { name: "稀有", image: "outputs/稀有袋子.png", scale: 1.25 },
  { name: "史詩", image: "outputs/史詩袋子.png", scale: 1.55 },
  { name: "傳奇", image: "outputs/傳奇袋子.png", scale: 1.95 },
];

const chestRarities = [
  { name: "普通", image: "outputs/普通箱子.png", scale: 1 },
  { name: "稀有", image: "outputs/稀有箱子.png", scale: 1.25 },
  { name: "史詩", image: "outputs/史詩箱子.png", scale: 1.55 },
  { name: "傳奇", image: "outputs/傳奇箱子.png", scale: 1.95 },
];

const equipmentData = [
  { name: "破舊木劍", type: "武器", rarity: "普通", effect: "攻擊力+5 破防+0", image: "outputs/破舊木劍圖(武器).png" },
  { name: "標準木劍", type: "武器", rarity: "普通", effect: "攻擊力+10 破防+1", image: "outputs/標準木劍圖(武器).png" },
  { name: "短石劍", type: "武器", rarity: "稀有", effect: "攻擊力+15 破防+3", image: "outputs/短石劍圖(武器).png" },
  { name: "鋒利石劍", type: "武器", rarity: "稀有", effect: "攻擊力+20 破防+5", image: "outputs/鋒利石劍圖(武器).png" },
  { name: "鑽石匕首", type: "武器", rarity: "史詩", effect: "攻擊力+30 破防+10", image: "outputs/鑽石匕首圖(武器).png" },
  { name: "鋒利長鑽劍", type: "武器", rarity: "史詩", effect: "攻擊力+40 破防+15", image: "outputs/鋒利長鑽劍圖(武器).png" },
  { name: "熔岩烈劍", type: "武器", rarity: "傳奇", effect: "攻擊力+80 破防+20", image: "outputs/熔岩烈劍圖(武器).png" },
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
const aimSound = new Audio("outputs/瞄準聲.mp3");
const pigAttackSound = new Audio("outputs/小豬攻擊聲.mp3");
const bubbleAttackSound = new Audio("outputs/泡泡攻擊聲.mp3");
const bubbleDashSound = new Audio("outputs/泡泡衝刺聲.mp3");
const gageAttackSound1 = new Audio("outputs/格格攻擊聲1.mp3");
const gageAttackSound2 = new Audio("outputs/格格攻擊聲2.mp3");
const gageAttackSound3 = new Audio("outputs/格格攻擊聲3.mp3");
let bgMusicVolume = 0.65;
let sfxVolume = 0.85;
let isBackgroundSoundEnabled = true;
let isSfxSoundEnabled = true;
let tutorialStep = "intro";
let tutorialDialogueIndex = 0;
let tutorialTarget = null;
let tutorialDialogueMode = null;
let tutorialAwaitingMove = false;
let tutorialAwaitingDodge = false;
let tutorialPigBulletPaused = false;
let tutorialPauseTimer = null;
let tutorialMoveLocked = false;
let tutorialPigShotCount = 0;
let tutorialUpgradeAttempts = 0;
let currentScreenName = "lobby";
let audioContext = null;
let musicGain = null;
let sfxGain = null;
let successGain = null;
let isAudioRouted = false;
const useWebAudioVolume = false;
let areAudioElementsUnlocked = false;
let bubbleSoundTimer = null;
let lastBubbleHitCheckAt = 0;
const soundLastPlayedAt = new WeakMap();
const soundSequenceTokens = new WeakMap();
lobbyMusic.loop = true;
battleMusic.loop = true;
[lobbyMusic, battleMusic, hammerSound, failSound, successSound, aimSound, pigAttackSound, bubbleAttackSound, bubbleDashSound, gageAttackSound1, gageAttackSound2, gageAttackSound3].forEach((audio) => {
  audio.preload = "auto";
  audio.load();
});

function applyVolumeSettings() {
  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const currentBgVolume = currentScreenName === "blacksmith"
    ? bgMusicVolume / (isMobile ? 64 : 32)
    : bgMusicVolume / (isMobile ? 16 : 8);
  const currentSfxVolume = Math.min(1, sfxVolume * 2);

  if (musicGain && sfxGain && successGain) {
    musicGain.gain.value = currentBgVolume;
    sfxGain.gain.value = currentSfxVolume;
    successGain.gain.value = currentSfxVolume;
  }

  lobbyMusic.volume = currentBgVolume;
  battleMusic.volume = currentBgVolume;
  hammerSound.volume = currentSfxVolume;
  failSound.volume = currentSfxVolume;
  successSound.volume = currentSfxVolume;
  [aimSound, pigAttackSound, bubbleAttackSound, bubbleDashSound, gageAttackSound1, gageAttackSound2, gageAttackSound3].forEach((sound) => {
    sound.volume = currentSfxVolume;
  });
}

applyVolumeSettings();

function setupWebAudioVolume() {
  if (!useWebAudioVolume) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass || isAudioRouted) {
    return;
  }

  try {
    audioContext = new AudioContextClass();
    musicGain = audioContext.createGain();
    sfxGain = audioContext.createGain();
    successGain = audioContext.createGain();
    musicGain.connect(audioContext.destination);
    sfxGain.connect(audioContext.destination);
    successGain.connect(audioContext.destination);

    audioContext.createMediaElementSource(lobbyMusic).connect(musicGain);
    audioContext.createMediaElementSource(battleMusic).connect(musicGain);
    [hammerSound, failSound, aimSound, pigAttackSound, bubbleAttackSound, bubbleDashSound, gageAttackSound1, gageAttackSound2, gageAttackSound3].forEach((sound) => {
      audioContext.createMediaElementSource(sound).connect(sfxGain);
    });
    audioContext.createMediaElementSource(successSound).connect(successGain);

    isAudioRouted = true;
    applyVolumeSettings();
  } catch (error) {
    isAudioRouted = false;
  }
}

function resumeWebAudio() {
  if (!useWebAudioVolume) {
    return;
  }

  setupWebAudioVolume();

  if (audioContext?.state === "suspended") {
    audioContext.resume().catch(() => {});
  }
}

function playMusic(music) {
  if (!isBackgroundSoundEnabled) {
    return;
  }

  resumeWebAudio();
  applyVolumeSettings();
  music.play()
    .then(() => {
      const shouldKeepPlaying = music === lobbyMusic
        ? currentScreenName === "lobby" || currentScreenName === "blacksmith"
        : currentScreenName === "game";

      if (!shouldKeepPlaying) {
        music.pause();
      }
    })
    .catch(() => {});
}

function playSound(sound) {
  if (!isSfxSoundEnabled) {
    return;
  }

  const now = performance.now();
  const lastPlayedAt = soundLastPlayedAt.get(sound) || -Infinity;

  if (now - lastPlayedAt < 180) {
    return;
  }

  soundLastPlayedAt.set(sound, now);
  soundSequenceTokens.set(sound, (soundSequenceTokens.get(sound) || 0) + 1);
  resumeWebAudio();
  applyVolumeSettings();
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playSoundThen(firstSound, secondSound) {
  if (!isSfxSoundEnabled) {
    return;
  }

  const now = performance.now();
  const lastPlayedAt = soundLastPlayedAt.get(firstSound) || -Infinity;

  if (now - lastPlayedAt < 180) {
    return;
  }

  soundLastPlayedAt.set(firstSound, now);
  const sequenceToken = (soundSequenceTokens.get(firstSound) || 0) + 1;
  soundSequenceTokens.set(firstSound, sequenceToken);
  resumeWebAudio();
  applyVolumeSettings();
  firstSound.pause();
  firstSound.currentTime = 0;
  firstSound.addEventListener("ended", () => {
    if (soundSequenceTokens.get(firstSound) === sequenceToken) {
      playSound(secondSound);
    }
  }, { once: true });
  firstSound.play().catch(() => {
    if (soundSequenceTokens.get(firstSound) === sequenceToken) {
      playSound(secondSound);
    }
  });
}

function playBubbleCycleSounds() {
  playSoundThen(aimSound, bubbleAttackSound);
}

function scheduleBubbleCycleSounds() {
  playBubbleCycleSounds();
  bubbleSoundTimer = setTimeout(scheduleBubbleCycleSounds, 3800);
}

function unlockAudioElements() {
  if (areAudioElementsUnlocked) {
    return;
  }

  areAudioElementsUnlocked = true;
  [hammerSound, failSound, successSound, aimSound, pigAttackSound, bubbleAttackSound, bubbleDashSound, gageAttackSound1, gageAttackSound2, gageAttackSound3].forEach((sound) => {
    const wasMuted = sound.muted;

    sound.muted = true;
    sound.play()
      .then(() => {
        sound.pause();
        sound.currentTime = 0;
        sound.muted = wasMuted;
      })
      .catch(() => {
        sound.muted = wasMuted;
      });
  });
}

function switchMusic(screen) {
  currentScreenName = screen;
  applyVolumeSettings();

  if (screen === "game") {
    lobbyMusic.pause();
    battleMusic.currentTime = 0;
    playMusic(battleMusic);
    return;
  }

  battleMusic.pause();
  if (screen === "bagOpening") {
    lobbyMusic.pause();
    return;
  }

  if (screen === "lobby" || screen === "blacksmith") {
    playMusic(lobbyMusic);
  }
}

document.addEventListener("pointerdown", () => {
  resumeWebAudio();
  unlockAudioElements();

  if (lobbyScreen.classList.contains("screen-active")) {
    playMusic(lobbyMusic);
  }
}, { once: true });

document.addEventListener("touchstart", () => {
  resumeWebAudio();
  unlockAudioElements();
}, { once: true, passive: true });

const enemyImages = [
  "outputs/小豬(準備攻擊左).png?v=2",
  "outputs/小豬(準備攻擊中).png?v=3",
  "outputs/小豬(準備攻擊右).png?v=2",
];

[
  "outputs/K.png",
  "outputs/O.png",
  "outputs/錢.png",
  "outputs/空裝備格子圖.png",
  ...enemyImages,
  ...bagRarities.map((bag) => bag.image),
  ...chestRarities.map((chest) => chest.image),
  ...equipmentData.map((item) => item.image),
].forEach(preloadImage);

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
  hero.style.setProperty("--row-top", `${(2 - playerRow) * (100 / 3) + (100 / 6)}%`);
}

function updateBossHpText() {
  const hpPercent = bossMaxHp > 0 ? (bossHp / bossMaxHp) * 100 : 0;
  bossHpText.innerHTML = `
    <div class="boss-hp-bar">
      <div class="boss-hp-fill" style="width: ${hpPercent}%"></div>
      <span>HP:${bossHp}/${bossMaxHp}</span>
    </div>
  `;
}

function updateBattleArmor() {
  battleArmorText.textContent = `+${formatEffectAmount(battleArmorRate)}%護甲`;
}

function updateDifficultyInfo() {
  const multiplier = Math.max(1, Math.round(Number(multiplierInput.value) * 2) / 2);
  const bossCount = Math.max(1, Number(bossCountInput.value));
  const reward = rewardByDifficulty[difficultySelect.value] * bossCount * multiplier;
  const bagDropChance = Math.min(100, 20 * multiplier);
  const lootName = difficultySelect.value === "普通" ? "箱子" : "袋子";
  const rewardStageChance = getRewardStageChance(bossCount);

  multiplierInput.value = multiplier.toFixed(1);
  bossCountInput.value = bossCount;
  difficultyText.textContent = `難度：${difficultySelect.value}`;
  bossCountText.textContent = `BOSS：${bossCount} 隻`;
  multiplierText.textContent = `倍率：${multiplier.toFixed(1)}x`;
  rewardText.textContent = `戰利品：金錢${reward}、${bagDropChance}%獲得${lootName}*${bossCount}、${rewardStageChance}%出現獎勵關卡`;

  if (difficultySelect.value === "普通") {
    const cooldownClass = playerStats.moveCooldown <= 500 ? "recommendation-good" : "recommendation-bad";
    const pierceClass = playerStats.pierce >= 10 ? "recommendation-good" : "recommendation-bad";

    recommendationText.innerHTML = `建議<br><span class="${cooldownClass}">移動冷卻：0.5秒</span><span class="${pierceClass}">破防：10</span>`;
    recommendationText.classList.add("is-visible");
  } else {
    recommendationText.textContent = "";
    recommendationText.classList.remove("is-visible");
  }
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
    ${tutorialStep === "hero" ? "<hr><div>破防降低敵人防禦；攻擊力決定傷害；移動冷卻決定多久能再移動。</div><div>爆擊率與爆擊傷害提升爆擊；護甲與閃避率幫你抵擋攻擊；特殊效果提供額外能力。</div>" : ""}
  `;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function preloadImage(path) {
  const image = new Image();
  image.src = path;
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
    upgradeFailBonus: Math.max(0, Number(savedItem.upgradeFailBonus) || 0),
  };
}

function saveGame() {
  const saveData = {
    money,
    bgMusicVolume,
    sfxVolume,
    isBackgroundSoundEnabled,
    isSfxSoundEnabled,
    tutorialStep,
    retreatBossByDifficulty,
    forgeFailBonus,
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
    isBackgroundSoundEnabled = saveData.isBackgroundSoundEnabled ?? true;
    isSfxSoundEnabled = saveData.isSfxSoundEnabled ?? true;
    tutorialStep = saveData.tutorialStep ?? "intro";
    retreatBossByDifficulty = saveData.retreatBossByDifficulty && typeof saveData.retreatBossByDifficulty === "object"
      ? saveData.retreatBossByDifficulty
      : {};
    forgeFailBonus = Math.max(0, Number(saveData.forgeFailBonus) || 0);
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

  updateDifficultyInfo();
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
  const previousItem = equippedItems[item.type];

  if (previousItem && previousItem !== item) {
    previousItem.upgradeFailBonus = 0;
  }
  equippedItems[item.type] = item;
  recalculatePlayerStats();
  updateEquippedImages();
  updateHeroStatsList();
  saveGame();
}

function unequipItem(type) {
  if (equippedItems[type]) {
    equippedItems[type].upgradeFailBonus = 0;
  }
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
  return Math.min(100, getUpgradeRule(level).chance + (item.upgradeFailBonus || 0));
}

function getForgeChance() {
  return Math.min(100, 50 + forgeFailBonus);
}

function getSmeltRefund(item) {
  const currentLevel = Math.max(1, Number(item.level) || 1);
  let refund = 0;

  for (let level = 1; level < currentLevel; level += 1) {
    refund += getUpgradeRule(level).costs[item.rarity] || 0;
  }

  return refund;
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

    const pierceMatch = item.effect.match(/破防\+(\d+(?:\.\d+)?)/);
    const pierceBonus = ((item.level || 1) + 1) % 5 === 0 ? 5 : 0;
    pushLine(pierceMatch ? `破防+${pierceMatch[1]}` : "破防+0", pierceBonus);

    return lines;
  }

  if (item.type === "護甲") {
    const armor = getEffectNumberBefore(item, "護甲");
    const dodge = getEffectNumberBefore(item, "閃避");

    pushLine(`${armor}%護甲`, getNextEffectUpgradeAmount(item), "%");

    const dodgeBonus = ((item.level || 1) + 1) % 5 === 0 ? 5 : 0;
    pushLine(`${dodge}%閃避`, dodgeBonus, "%");

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

  synthesizeBtn.innerHTML = forgeSlots.every(Boolean) ? `合成<br>${getForgeChance()}%成功` : "合成";
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
  if (forgePickerMode === "upgrade" || forgePickerMode === "smelt") {
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
        return slotIndex === 0 && entry.item.rarity !== "傳奇";
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
        if (tutorialStep === "upgrade") {
          tutorialOverlay.classList.add("is-open");
          tutorialText.textContent = "武器放好了，現在按升級！";
          setTutorialTarget(upgradeBtn);
        }
        return;
      }

      if (forgePickerMode === "smelt") {
        smeltSlot = entry;
        smeltedPendingItem = null;
        setEquipmentSlot(smeltInputSlot, smeltInputImage, item, "outputs/空裝備格子圖.png", "熔煉材料");
        setEquipmentSlot(smeltResultSlot, smeltResultImage, null, "outputs/空裝備格子圖.png", "熔煉結果");
        showSmeltResultText("", "");
        updateSmeltUi();
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

      if (tutorialStep === "compose") {
        const nextSlot = forgeSlots.findIndex((slot) => !slot);
        tutorialOverlay.classList.add("is-open");
        if (nextSlot >= 0) {
          tutorialText.textContent = `很好，現在點第 ${nextSlot + 1} 格放下一把武器。`;
          setTutorialTarget(forgeSlotButtons[nextSlot]);
        } else {
          tutorialText.textContent = "三把武器都放好了，現在按合成！";
          setTutorialTarget(synthesizeBtn);
          tutorialOverlay.classList.add("is-pass-through");
          tutorialOverlay.classList.add("is-top");
        }
      }
    });
    forgePickerList.appendChild(button);
  });
}

function openForgePicker(slotIndex) {
  if (tutorialStep === "compose") {
    tutorialOverlay.classList.remove("is-open");
    tutorialOverlay.classList.remove("is-pass-through");
    tutorialOverlay.classList.remove("is-pass-through");
    tutorialOverlay.classList.remove("is-top");
    clearTutorialTarget();
  }
  forgePickerMode = "compose";
  forgePickingSlot = slotIndex;
  renderForgePicker(slotIndex);
  forgePickerModal.classList.add("is-active");
}

function openUpgradePicker() {
  if (tutorialStep === "upgrade") {
    tutorialOverlay.classList.remove("is-open");
    clearTutorialTarget();
  }
  forgePickerMode = "upgrade";
  renderForgePicker(0);
  forgePickerModal.classList.add("is-active");
}

function openSmeltPicker() {
  forgePickerMode = "smelt";
  renderForgePicker(0);
  forgePickerModal.classList.add("is-active");
}

function showBlacksmithMode(mode) {
  blacksmithModeSelect.style.display = mode === "select" ? "grid" : "none";
  blacksmithComposePanel.classList.toggle("is-active", mode === "compose");
  blacksmithUpgradePanel.classList.toggle("is-active", mode === "upgrade");
  blacksmithSmeltPanel.classList.toggle("is-active", mode === "smelt");
}

function resetUpgradeSlot() {
  upgradeSlot = null;
  upgradedPendingItem = null;
  setEquipmentSlot(upgradeInputSlot, upgradeInputImage, null, "outputs/空裝備格子圖.png", "升級材料");
  setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
  showUpgradeResultText("", "");
  updateUpgradeUi();
}

function showSmeltResultText(text, type) {
  smeltResultText.textContent = text;
  smeltResultText.classList.remove("is-success", "is-fail");

  void smeltResultText.offsetWidth;

  if (type) {
    smeltResultText.classList.add(type === "success" ? "is-success" : "is-fail");
  }
}

function updateSmeltUi() {
  if (smeltedPendingItem) {
    smeltBtn.textContent = "確定";
    return;
  }

  smeltBtn.innerHTML = smeltSlot ? `熔煉<br>可拿到 ${getSmeltRefund(smeltSlot.item)} 塊` : "熔煉";
}

function resetSmeltSlot() {
  smeltSlot = null;
  smeltedPendingItem = null;
  setEquipmentSlot(smeltInputSlot, smeltInputImage, null, "outputs/空裝備格子圖.png", "熔煉材料");
  setEquipmentSlot(smeltResultSlot, smeltResultImage, null, "outputs/空裝備格子圖.png", "熔煉結果");
  showSmeltResultText("", "");
  updateSmeltUi();
}

function collectSmeltResult() {
  if (!smeltedPendingItem) {
    return;
  }

  smeltedPendingItem = null;
  setEquipmentSlot(smeltResultSlot, smeltResultImage, null, "outputs/空裝備格子圖.png", "熔煉結果");
  showSmeltResultText("已放回包包", "success");
  updateSmeltUi();
  saveGame();
}

function smeltSelectedItem() {
  if (smeltedPendingItem) {
    collectSmeltResult();
    return;
  }

  if (isForging) {
    return;
  }

  if (!smeltSlot) {
    showSmeltResultText("請先放入裝備", "fail");
    return;
  }

  const item = smeltSlot.item;
  const itemBeforeSmelt = { ...item };
  const refund = getSmeltRefund(item);
  const baseItem = equipmentData.find((entry) => entry.name === item.name && entry.type === item.type);

  isForging = true;
  smeltBtn.disabled = true;
  showSmeltResultText("", "");
  smeltInsideImage.classList.remove("is-smelting");
  void smeltInsideImage.offsetWidth;
  smeltInsideImage.classList.add("is-smelting");

  setTimeout(() => {
    smeltInsideImage.classList.remove("is-smelting");
    item.level = 1;
    if (baseItem) {
      item.effect = baseItem.effect;
    }
    money += refund;
    syncEquippedItemUpgrade(itemBeforeSmelt, item);
    recalculatePlayerStats();
    updateMoneyText();
    updateEquippedImages();
    updateHeroStatsList();
    smeltedPendingItem = item;
    smeltSlot = null;
    setEquipmentSlot(smeltInputSlot, smeltInputImage, null, "outputs/空裝備格子圖.png", "熔煉材料");
    setEquipmentSlot(smeltResultSlot, smeltResultImage, item, "outputs/空裝備格子圖.png", "熔煉結果");
    showSmeltResultText(`熔煉完成，獲得 ${refund} 塊`, "success");
    updateSmeltUi();
    saveGame();
    isForging = false;
    smeltBtn.disabled = false;
  }, 520);
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
  if (tutorialStep === "upgrade") {
    tutorialStep = "equip";
    saveGame();
    showScreen("lobby");
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "先點包包，穿上剛剛合成的石劍。";
    setTutorialTarget(bagButton);
  }
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

    const didUpgrade = tutorialStep === "upgrade"
      ? ++tutorialUpgradeAttempts >= 2
      : Math.random() * 100 < getUpgradeChance(item);

    if (didUpgrade) {
      item.effect = getUpgradedEffectText(item);
      item.level = (item.level || 1) + 1;
      item.upgradeFailBonus = 0;
      syncEquippedItemUpgrade(itemBeforeUpgrade, item);
      upgradedPendingItem = item;
      upgradeSlot = null;
      setEquipmentSlot(upgradeInputSlot, upgradeInputImage, null, "outputs/空裝備格子圖.png", "升級材料");
      setEquipmentSlot(upgradeResultSlot, upgradeResultImage, item, "outputs/空裝備格子圖.png", "升級結果");
      showUpgradeResultText(`成功：${item.name} Lv${item.level}`, "success");
      playSound(successSound);
      if (tutorialStep === "upgrade") {
        tutorialOverlay.classList.add("is-open");
        tutorialText.textContent = "升級成功！點結果格收下武器。";
        setTutorialTarget(upgradeResultSlot);
      }
    } else {
      item.upgradeFailBonus = (item.upgradeFailBonus || 0) + 5;
      setEquipmentSlot(upgradeResultSlot, upgradeResultImage, null, "outputs/空裝備格子圖.png", "升級結果");
      showUpgradeResultText(`失敗：${item.name} 保持 Lv${item.level || 1}`, "fail");
      playSound(failSound);
      if (tutorialStep === "upgrade") {
        tutorialOverlay.classList.add("is-open");
        tutorialText.textContent = "太可惜了，失敗了。再試一次！";
        setTutorialTarget(upgradeBtn);
      }
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
  if (tutorialStep === "compose") {
    tutorialStep = "upgrade";
    saveGame();
    tutorialOverlay.classList.remove("is-pass-through");
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "合成成功！先回大廳，再進一次鐵匠鋪來升級。";
    setTutorialTarget(blacksmithBackBtn);
  }
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

  if (firstSlot.item.rarity === "傳奇") {
    showForgeResultText("傳奇裝備不能合成", "fail");
    return;
  }

  if (money < forgeCost) {
    showForgeResultText("金錢不足", "fail");
    return;
  }

  const usedIndexes = forgeSlots.map((entry) => entry.index);
  const baseItem = firstSlot.item;
  const isUpgrade = tutorialStep === "compose" || Math.random() * 100 < getForgeChance();
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
      forgeFailBonus = isUpgrade ? 0 : forgeFailBonus + 10;
      forgeResultItem = resultItem;
      setEquipmentSlot(blacksmithResultSlot, blacksmithResultImage, resultItem, "outputs/空裝備格子圖.png", "合成結果");
      if (tutorialStep === "compose") {
        tutorialOverlay.classList.remove("is-pass-through");
        tutorialOverlay.classList.remove("is-top");
        tutorialOverlay.classList.add("is-open");
        tutorialText.textContent = "合成成功！先點上面的結果格收下武器。";
        setTutorialTarget(blacksmithResultSlot);
      }
      showForgeResultText(
      `${isUpgrade ? "成功" : "失敗"}：${resultItem.name}`,
      isUpgrade ? "success" : "fail"
    );
    playSound(isUpgrade ? successSound : failSound);
    recalculatePlayerStats();
    updateEquippedImages();
    renderForgeSlots();
    saveGame();
    isForging = false;
    synthesizeBtn.disabled = false;
  }, 520);
}

function renderBlacksmith() {
  renderForgeSlots();
}

function getLootRarities(loot) {
  return loot?.kind === "chest" ? chestRarities : bagRarities;
}

function getLootName(loot) {
  return loot?.kind === "chest" ? "箱子" : "袋子";
}

function openBagRewardByRarity(rarityIndex, kind = "bag") {
  const rarityName = getLootRarities({ kind })[rarityIndex].name;
  const roll = Math.random() * 100;

  if (kind === "chest") {
    if (rarityName === "普通") {
      if (roll < 25) return { type: "money", amount: 2000, text: "獲得金錢 2000" };
      return { type: "equipment", item: getRandomEquipment(roll < 65 ? "普通" : "稀有") };
    }

    if (rarityName === "稀有") {
      if (roll < 20) return { type: "money", amount: 4000, text: "獲得金錢 4000" };
      if (roll < 30) return { type: "equipment", item: getRandomEquipment("普通") };
      if (roll < 80) return { type: "equipment", item: getRandomEquipment("稀有") };
      return { type: "equipment", item: getRandomEquipment("史詩") };
    }

    if (rarityName === "史詩") {
      if (roll < 20) return { type: "money", amount: 10000, text: "獲得金錢 10000" };
      if (roll < 40) return { type: "equipment", item: getRandomEquipment("稀有") };
      if (roll < 80) return { type: "equipment", item: getRandomEquipment("史詩") };
      return { type: "equipment", item: getRandomEquipment("傳奇") };
    }

    if (rarityName === "傳奇") {
      if (roll < 10) return { type: "money", amount: 20000, text: "獲得金錢 20000" };
      return { type: "equipment", item: getRandomEquipment(roll < 60 ? "史詩" : "傳奇") };
    }
  }

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
  if (tutorialStep === "bags" && bag.tutorialRewardName) {
    const item = findEquipmentByName(bag.tutorialRewardName);
    addEquipmentToInventory(item);
    return {
      text: `獲得裝備：${item.name}`,
      image: item.image,
      alt: item.name,
      scale: 1.35,
    };
  }

  const reward = openBagRewardByRarity(bag.rarityIndex, bag.kind);

  if (reward.type === "money") {
    pendingMoney += reward.amount;
    return {
      text: reward.text,
      image: "outputs/錢.png",
      alt: "錢",
      scale: 1.2,
    };
  }

  if (!reward.item || !reward.item.image) {
    pendingMoney += 1000;
    return {
      text: "獲得金錢 1000",
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
  damageText.classList.remove("is-success");
  damageText.classList.remove("is-active");

  void damageText.offsetWidth;
  damageText.classList.add("is-active");
}

function showBattleSuccessText(text) {
  damageText.textContent = text;
  damageText.classList.remove("is-critical");
  damageText.classList.add("is-success");
  damageText.classList.remove("is-active");

  void damageText.offsetWidth;
  damageText.classList.add("is-active");
}

function showBagDropText() {
  const latestLoot = battleBags[battleBags.length - 1];
  bagDropText.textContent = `獲得${getLootName(latestLoot)}`;
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

function getRewardStageChance(bossCount) {
  return Math.min(100, Math.max(0, (bossCount - 1) * 20));
}

function resetBullet() {
  bullet.classList.remove("is-active", "is-normal-pig-left", "is-normal-pig-right", "is-normal-pig-middle");
  bullet.style.transition = "none";
  bullet.style.removeProperty("top");
  bullet.style.removeProperty("--normal-pig-curve");
  bullet.style.removeProperty("--normal-pig-curve-negative");
  bullet.style.setProperty("--bullet-y", "7px");
  bullet.style.setProperty("--bullet-lane", bulletLane);
  bullet.style.left = `${(bulletLane + 0.5) * (100 / 3)}%`;
  void bullet.offsetWidth;
  bullet.style.removeProperty("transition");
}

function pauseTutorialDodge(message) {
  tutorialDialogueMode = "dodge";
  tutorialOverlay.classList.add("is-open");
  tutorialNextBtn.hidden = false;
  tutorialNextBtn.textContent = "躲避";
  tutorialText.innerHTML = `<span class="tutorial-danger">注意！</span> ${message}`;
  clearTutorialTarget();
}

function resetBubbleWeapon(clearDebug = true) {
  clearTimeout(bubbleWeaponContactTimer);
  bubbleWeaponContactTimer = null;
  bubbleWeapon.style.visibility = "hidden";
  bubbleWeapon.style.animationPlayState = "paused";
  clearTimeout(normalBubbleAttackTimer);
  normalBubbleAttackTimer = null;
  clearTimeout(normalBubbleDashStartTimer);
  normalBubbleDashStartTimer = null;
  bubbleWeapon.classList.remove("is-warning", "is-attacking-left", "is-attacking-right", "is-spinning");
  bubbleWeapon.src = "outputs/泡泡武器圖.png";
  bubbleWeapon.style.removeProperty("left");
  bubbleWeapon.style.removeProperty("top");
  bubbleWeapon.style.removeProperty("width");
  bubbleWeapon.style.removeProperty("height");
  bubbleWeapon.style.removeProperty("transform");
  bubbleWeapon.style.removeProperty("transition");
  normalBubbleDashActive = false;
  normalBubbleDashLanes = [];
  enemy.classList.remove("is-normal-bubble-dash");
  enemy.style.removeProperty("--normal-bubble-dash-left");
  enemy.style.removeProperty("top");
  enemy.style.removeProperty("left");
  enemy.style.removeProperty("width");
  enemy.style.removeProperty("height");
  enemy.style.removeProperty("transform");
  enemy.style.removeProperty("transition");
  bubbleWeaponWasTouching = false;
  bubbleWeaponDodged = false;
  if (clearDebug) {
    bubbleDebugText.textContent = "";
  }
}

function clearGageAttack() {
  gageTimers.forEach(clearTimeout);
  gageTimers = [];
  normalGageHazards.forEach((hazard) => hazard.visual?.remove());
  gageHazardCells = [];
  gageHazardActive = false;
  normalGageHazards = [];
  gageAttack.style.transition = "none";
  gageAttack.className = "gage-attack";
  gageAttack.src = "outputs/格格攻擊圖1.png";
  void gageAttack.offsetWidth;
  gageAttack.style.removeProperty("transition");
  lanes.forEach((lane) => lane.classList.remove("gage-warning", "gage-yellow", "gage-red"));
}

function scheduleGageAction(callback, delay) {
  const timer = setTimeout(() => {
    gageTimers = gageTimers.filter((entry) => entry !== timer);
    callback();
  }, delay);
  gageTimers.push(timer);
}

function getGageHazardCells(targetCell) {
  const row = Math.floor(targetCell / 3);
  const column = targetCell % 3;
  const choices = [
    [row * 3, row * 3 + 1, row * 3 + 2],
    [column, column + 3, column + 6],
  ];

  if ([0, 4, 8].includes(targetCell)) {
    choices.push([0, 4, 8]);
  }

  if ([2, 4, 6].includes(targetCell)) {
    choices.push([2, 4, 6]);
  }

  return choices[Math.floor(Math.random() * choices.length)];
}

function showGageCells(className) {
  lanes.forEach((lane, index) => {
    lane.classList.remove("gage-warning", "gage-yellow", "gage-red");
    if (gageHazardCells.includes(index)) {
      lane.classList.add(className);
    }
  });
}

function checkGageHazard() {
  if (tutorialStep === "combat" && currentBossName === "格格") {
    return;
  }

  const playerCell = (2 - playerRow) * 3 + playerLane;

  if (currentBossName === "普通格格") {
    const isOnRedCell = normalGageHazards.some((hazard) =>
      hazard.stage === "red" && hazard.cells.includes(playerCell)
    );

    if (isOnRedCell && !isMoving && !tryDeathSave()) {
      gameOver();
    }
    return;
  }

  if (!gageHazardActive || isMoving || !gageHazardCells.includes(playerCell)) {
    return;
  }

  if (!tryDeathSave()) {
    gameOver();
  }
}

function updateNormalGageCells() {
  const priority = { warning: 1, yellow: 2, red: 3 };

  lanes.forEach((lane, index) => {
    const stage = normalGageHazards.reduce((highest, hazard) => {
      if (!hazard.cells.includes(index) || (priority[hazard.stage] || 0) <= (priority[highest] || 0)) {
        return highest;
      }
      return hazard.stage;
    }, "");

    lane.classList.remove("gage-warning", "gage-yellow", "gage-red");
    if (stage) {
      lane.classList.add(`gage-${stage}`);
    }
  });
}

function shootNormalGageAttack() {
  if (isGameOver || currentBossName !== "普通格格") {
    return;
  }

  const playerCell = (2 - playerRow) * 3 + playerLane;
  const targetCell = Math.random() < 0.3 ? playerCell : Math.floor(Math.random() * 9);
  const targetRow = Math.floor(targetCell / 3);
  const targetColumn = targetCell % 3;
  const visual = document.createElement("img");
  visual.className = "gage-attack is-active";
  visual.src = "outputs/格格攻擊圖1.png";
  visual.alt = "格格攻擊";
  const hazard = { cells: getGageHazardCells(targetCell), stage: "", visual };

  normalGageHazards.push(hazard);
  arena.appendChild(visual);
  visual.style.setProperty("--gage-target-x", `${(targetColumn + 0.5) * (100 / 3)}%`);
  visual.style.setProperty("--gage-target-y", `${(targetRow + 0.5) * (100 / 3)}%`);
  void visual.offsetWidth;
  const targetX = (targetColumn + 0.5) * (arena.clientWidth / 3);
  const targetY = (targetRow + 0.5) * (arena.clientHeight / 3);
  visual.style.setProperty("--gage-target-x", "50%");
  visual.style.setProperty("--gage-target-y", "-95px");
  visual.style.setProperty("--gage-shift-x", `${targetX - arena.clientWidth / 2}px`);
  visual.style.setProperty("--gage-shift-y", `${targetY + 95}px`);
  playSound(aimSound);

  scheduleGageAction(() => {
    visual.classList.add("is-flying");
    playSound(gageAttackSound1);
  }, 500);

  scheduleGageAction(() => {
    hazard.stage = "warning";
    hazard.visual.remove();
    updateNormalGageCells();
  }, 1000);
  scheduleGageAction(() => {
    hazard.stage = "yellow";
    updateNormalGageCells();
    playSound(gageAttackSound2);
  }, 1500);
  scheduleGageAction(() => {
    hazard.stage = "red";
    updateNormalGageCells();
    playSound(gageAttackSound3);
    checkGageHazard();
  }, 2000);
  scheduleGageAction(() => {
    normalGageHazards = normalGageHazards.filter((entry) => entry !== hazard);
    hazard.visual.remove();
    updateNormalGageCells();
  }, 2500);
  scheduleGageAction(shootNormalGageAttack, 1000);
}

function shootGageAttack() {
  if (currentBossName === "普通格格") {
    shootNormalGageAttack();
    return;
  }

  clearGageAttack();
  enemy.src = "outputs/格格.png";
  gageAttack.classList.add("is-active");
  playSound(aimSound);
  const isNormalGage = currentBossName === "普通格格";
  const timings = isNormalGage
    ? { target: 200, warning: 800, yellow: 1000, red: 1700, reset: 2700 }
    : { target: 500, warning: 1000, yellow: 1500, red: 2000, reset: 2500 };

  scheduleGageAction(() => {
    const playerCell = (2 - playerRow) * 3 + playerLane;
    const targetCell = Math.random() < 0.3 ? playerCell : Math.floor(Math.random() * 9);
    const targetRow = Math.floor(targetCell / 3);
    const targetColumn = targetCell % 3;
    gageHazardCells = getGageHazardCells(targetCell);
    gageAttack.style.setProperty("--gage-target-x", `${(targetColumn + 0.5) * (100 / 3)}%`);
    gageAttack.style.setProperty("--gage-target-y", `${(targetRow + 0.5) * (100 / 3)}%`);
    gageAttack.classList.add("is-flying");
    playSound(gageAttackSound1);
  }, timings.target);

  scheduleGageAction(() => showGageCells("gage-warning"), timings.warning);
  scheduleGageAction(() => {
    gageAttack.src = "outputs/格格攻擊圖2.png";
    showGageCells("gage-yellow");
    playSound(gageAttackSound2);
  }, timings.yellow);
  scheduleGageAction(() => {
    gageAttack.src = "outputs/格格攻擊圖3.png";
    showGageCells("gage-red");
    playSound(gageAttackSound3);
    gageHazardActive = true;
    checkGageHazard();
  }, timings.red);
  scheduleGageAction(() => {
    clearGageAttack();
    shootGageAttack();
  }, timings.reset);
}

function resetPlayerBullet() {
  playerBullet.classList.remove("is-active");
  playerBullet.style.setProperty("--player-bullet-y", `${arena.clientHeight - 120}px`);
  playerBullet.style.setProperty("--player-bullet-lane", playerBulletLane);
}

function movePlayer(horizontal, vertical = 0) {
  if (isGameOver || tutorialMoveLocked) {
    return;
  }

  const now = performance.now();

  if (now - lastMoveTime < playerStats.moveCooldown) {
    return;
  }

  const nextLane = Math.max(0, Math.min(2, playerLane + horizontal));
  const nextRow = Math.max(0, Math.min(2, playerRow + vertical));

  if (nextLane === playerLane && nextRow === playerRow) {
    return;
  }

  lastMoveTime = now;
  isMoving = true;
  hero.classList.add("is-moving");
  playerLane = nextLane;
  playerRow = nextRow;
  updateHeroPosition();
  checkGageHazard();

  if (tutorialAwaitingMove) {
    tutorialAwaitingMove = false;
    clearTutorialTarget();
    tutorialOverlay.classList.remove("is-open");
    startEnemyActions();
  }

  if (tutorialAwaitingDodge) {
    tutorialAwaitingDodge = false;
    tutorialPigBulletPaused = false;
    clearTutorialTarget();
    tutorialOverlay.classList.remove("is-open");
    if (tutorialStep === "combat" && currentBossName === "格格") {
      return;
    }
    if (tutorialStep === "combat" && currentBossName === "小豬") {
      bullet.style.removeProperty("top");
      bullet.style.removeProperty("transition");
      requestAnimationFrame(() => bullet.style.setProperty("--bullet-y", `${arena.clientHeight - bullet.offsetHeight}px`));
      bulletEndTimer = setTimeout(() => {
        resetBullet();
        startEnemyActions();
      }, 1240);
    } else {
      resetBullet();
      startEnemyActions();
    }
  }
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
  const savedBossName = retreatBossByDifficulty[difficultySelect.value];
  const tutorialBoss = bossData.find((boss) => boss.name === tutorialBossSequence[0]);
  const firstBoss = tutorialStep === "combat"
    ? tutorialBoss
    : availableBosses.find((boss) => boss.name === savedBossName)
      || availableBosses[Math.floor(Math.random() * availableBosses.length)];

  if (!firstBoss) {
    return false;
  }

  totalBossCount = tutorialStep === "combat" ? 3 : Math.max(1, Number(bossCountInput.value));
  battleMultiplier = Math.max(1, Math.round(Number(multiplierInput.value) * 2) / 2);
  battleReward = getBattleReward();
  rewardStageRolled = false;
  isRewardStage = false;
  currentBossName = firstBoss.name;
  currentBossDefense = firstBoss.defense;
  delete retreatBossByDifficulty[difficultySelect.value];
  saveGame();
  hasBubbleWeaponAttacked = false;
  tutorialPigShotCount = 0;
  bossMaxHp = Math.round(firstBoss.hp * battleMultiplier);
  currentBossNumber = 1;
  bossHp = bossMaxHp;
  battleBags = [];
  enemy.classList.remove("is-defeated");
  enemy.src = `outputs/${getBossImageName()}.png`;
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
  if (tutorialStep === "combat") {
    stopEnemyActions();
    tutorialOverlay.classList.add("is-open");
    tutorialNextBtn.hidden = currentBossName !== "泡泡";
    tutorialText.innerHTML = "<span class=\"tutorial-danger\">沒關係，再試一次！</span>";
    clearTutorialTarget();
    if (currentBossName === "泡泡") {
      tutorialDialogueMode = "retry";
      tutorialNextBtn.textContent = "繼續";
      return;
    }
    setTimeout(() => {
      tutorialOverlay.classList.remove("is-open");
      bossHp = bossMaxHp;
      updateBossHpText();
      resetBullet();
      resetBubbleWeapon();
      clearGageAttack();
      startBossIntro();
    }, 1200);
    return;
  }

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
    showBattleSuccessText("閃避成功");
    return true;
  }

  if (battleArmorRate >= 100) {
    battleArmorRate -= 100;
    updateBattleArmor();
    showBattleSuccessText("防護成功");
    return true;
  }

  if (battleArmorRate > 0 && Math.random() * 100 < battleArmorRate) {
    battleArmorRate = 0;
    updateBattleArmor();
    showBattleSuccessText("防護成功");
    return true;
  }

  return false;
}

function rollBossBagDrop() {
  const kind = difficultySelect.value === "簡單"
    ? "bag"
    : difficultySelect.value === "普通"
      ? "chest"
      : null;

  if (!kind) {
    return false;
  }

  const dropChance = Math.min(100, 20 * battleMultiplier);

  if (Math.random() * 100 < dropChance) {
    battleBags.push({ kind, rarityIndex: 0, upgraded: false });
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
  const firstLoot = battleBags[0];
  const lootName = getLootName(firstLoot);

  resultBagText.textContent = `獲得${lootName}：${battleBags.length}`;
  resultBagList.innerHTML = "";

  battleBags.forEach((bag, index) => {
    const rarity = getLootRarities(bag)[0];
    const itemName = getLootName(bag);
    const button = document.createElement("button");
    const image = document.createElement("img");

    button.className = "bag-upgrade-button";
    button.type = "button";
    button.disabled = true;
    button.setAttribute("aria-label", `普通${itemName}`);
    image.src = rarity.image;
    image.alt = `普通${itemName}`;
    button.appendChild(image);
    resultBagList.appendChild(button);
  });
}

function updateOpenBagScreen() {
  const bag = battleBags[openingBagIndex];
  const rarity = getLootRarities(bag)[bag.rarityIndex];
  const itemName = getLootName(bag);

  openBagImage.src = rarity.image;
  openBagImage.alt = `${rarity.name}${itemName}`;
  openBagImage.style.setProperty("--bag-scale", rarity.scale);
  openBagReward.textContent = "";
  openBagRarity.textContent = rarity.name;
  openBagRarity.className = `open-bag-rarity rarity-${bag.rarityIndex}`;
  openBagProgress.textContent = `${itemName} ${openingBagIndex + 1}/${battleBags.length}　點擊 ${openingBagClicks}/4`;
}

function upgradeBagByClick(bag, clickCount) {
  if (tutorialStep === "bags") {
    return;
  }
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
  if (tutorialStep === "bags") {
    tutorialDialogueMode = "bags";
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "這是袋子。每個袋子點四下會打開，裡面能獲得裝備或金錢。";
  }
}

function finishBagOpening() {
  if (tutorialStep === "bags") {
    tutorialStep = "compose";
    money = Math.max(money, forgeCost);
    saveGame();
  }
  showScreen("lobby");
  collectPendingMoney();
  if (tutorialStep === "compose") {
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "你拿到了三把普通武器。點鐵匠鋪，來試著合成吧！";
    setTutorialTarget(blacksmithButton);
  }
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

  if (isRewardStage) {
    isRewardStage = false;
    if (currentBossNumber >= totalBossCount) {
      winBattle();
    } else {
      goToNextBoss();
      startBossIntro();
    }
    return;
  }

  if (!rewardStageRolled && currentBossNumber >= totalBossCount) {
    rewardStageRolled = true;

    if (Math.random() * 100 < getRewardStageChance(totalBossCount)) {
      isRewardStage = true;
      currentBossName = rewardBossData.name;
      currentBossDefense = rewardBossData.defense;
      bossMaxHp = Math.round(rewardBossData.hp * battleMultiplier);
      bossHp = bossMaxHp;
      enemy.classList.remove("is-defeated");
      enemy.src = "outputs/寶箱.png";
      updateBossHpText();
      startBossIntro();
      return;
    }
  }

  if (currentBossNumber >= totalBossCount) {
    if (tutorialStep === "combat") {
      tutorialStep = "bags";
      battleBags = [
        { rarityIndex: 0, upgraded: false, tutorialRewardName: "破舊木劍" },
        { rarityIndex: 0, upgraded: false, tutorialRewardName: "破舊木劍" },
        { rarityIndex: 1, upgraded: false, tutorialRewardName: "標準木劍" },
      ];
      saveGame();
    }
    winBattle();
  } else {
    goToNextBoss();
    startBossIntro();
  }
}

function startBossIntro() {
  clearTimeout(bossIntroTimer);
  stopEnemyActions();
  enemy.classList.add("is-intro-hidden");
  bossIntro.textContent = `${currentBossNumber}/${totalBossCount}`;
  bossIntro.className = "boss-intro is-active";

  bossIntroTimer = setTimeout(() => {
    const boss = bossData.find((entry) => entry.name === currentBossName);
    bossIntro.textContent = boss?.displayName || currentBossName;
    bossIntro.classList.add("is-name");

    bossIntroTimer = setTimeout(() => {
      bossIntro.textContent = "開躲!";
      bossIntro.className = "boss-intro";
      void bossIntro.offsetWidth;
      bossIntro.className = "boss-intro is-danger";

      bossIntroTimer = setTimeout(() => {
        bossIntro.className = "boss-intro";
        enemy.classList.remove("is-intro-hidden");
        bossIntroTimer = null;
        if (tutorialStep === "combat") {
          showBattleTutorialMessage();
        } else {
          startEnemyActions();
        }
      }, 650);
    }, 800);
  }, 900);
}

function playKoEffect() {
  isKoPlaying = true;
  clearTimeout(koTimerK);
  clearTimeout(koTimerEnd);
  clearTimeout(bubbleWeaponContactTimer);
  if (currentBossDefense === 5) {
    bubbleWeapon.style.animationPlayState = "paused";
  }
  stopEnemyActions();
  resetBullet();
  resetBubbleWeapon();
  resetPlayerBullet();
  playSound(successSound);
  koEffect.classList.remove("is-active");
  koK.classList.remove("is-active");
  koO.classList.remove("is-active");

  void koEffect.offsetWidth;
  enemy.classList.add("is-defeated");
  koEffect.classList.add("is-active");
  koK.classList.add("is-active");
  koO.classList.remove("is-active");

  koTimerK = setTimeout(() => {
    koO.classList.add("is-active");
  }, 280);

  koTimerEnd = setTimeout(finishBossDefeat, 1000);
}

function goToNextBoss() {
  const availableBosses = bossData.filter((boss) => boss.difficulty === difficultySelect.value);
  const nextBoss = tutorialStep === "combat"
    ? bossData.find((boss) => boss.name === tutorialBossSequence[currentBossNumber])
    : availableBosses[Math.floor(Math.random() * availableBosses.length)];

  currentBossNumber += 1;
  currentBossName = nextBoss.name;
  currentBossDefense = nextBoss.defense;
  hasBubbleWeaponAttacked = false;
  bossMaxHp = Math.round(nextBoss.hp * battleMultiplier);
  bossHp = bossMaxHp;
  enemy.classList.remove("is-defeated");
  enemy.src = `outputs/${getBossImageName()}.png`;
  updateBossHpText();
}

function checkBulletHit() {
  if (tutorialPigBulletPaused) {
    return;
  }

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

function checkBubbleWeaponHit() {
  const weaponRect = bubbleWeapon.getBoundingClientRect();
  const heroRect = hero.getBoundingClientRect();
  const matrix = getComputedStyle(bubbleWeapon).transform;
  const values = matrix.match(/^matrix\(([^)]+)\)$/)?.[1].split(",").map(Number);
  const angle = values ? Math.atan2(values[1], values[0]) : 0;
  const axisX = { x: Math.cos(angle), y: Math.sin(angle) };
  const axisY = { x: -axisX.y, y: axisX.x };
  const weaponCenterX = weaponRect.left + weaponRect.width / 2;
  const weaponCenterY = weaponRect.top + weaponRect.height / 2;
  const heroCenterX = heroRect.left + heroRect.width / 2;
  const heroCenterY = heroRect.top + heroRect.height / 2;
  const dx = heroCenterX - weaponCenterX;
  const dy = heroCenterY - weaponCenterY;
  const weaponHalfWidth = bubbleWeapon.offsetWidth / 2;
  const weaponHalfHeight = bubbleWeapon.offsetHeight / 2;
  const heroHalfWidth = heroRect.width / 2;
  const heroHalfHeight = heroRect.height / 2;
  const overlapsWeaponAxes =
    Math.abs(dx * axisX.x + dy * axisX.y) <= weaponHalfWidth + heroHalfWidth * Math.abs(axisX.x) + heroHalfHeight * Math.abs(axisX.y) &&
    Math.abs(dx * axisY.x + dy * axisY.y) <= weaponHalfHeight + heroHalfWidth * Math.abs(axisY.x) + heroHalfHeight * Math.abs(axisY.y);
  const overlapsHeroAxes =
    Math.abs(dx) <= heroHalfWidth + weaponHalfWidth * Math.abs(axisX.x) + weaponHalfHeight * Math.abs(axisY.x) &&
    Math.abs(dy) <= heroHalfHeight + weaponHalfWidth * Math.abs(axisX.y) + weaponHalfHeight * Math.abs(axisY.y);
  const isHit = overlapsWeaponAxes && overlapsHeroAxes;

  if (isHit) {
    if (!bubbleWeaponWasTouching) {
      bubbleWeaponWasTouching = true;
      bubbleWeaponDodged = false;
    }

    if (isMoving) {
      bubbleWeaponDodged = true;
    }

    return;
  }

  if (!bubbleWeaponWasTouching) {
    return;
  }

  bubbleWeaponWasTouching = false;
  if (bubbleWeaponDodged) {
    bubbleWeaponDodged = false;
    return;
  }

  if (!tryDeathSave()) {
    gameOver();
  }
}

function checkNormalBubbleDashHit() {
  const attackerRect = enemy.getBoundingClientRect();
  const heroRect = hero.getBoundingClientRect();
  const overlapsAttacker = !(
    attackerRect.right < heroRect.left ||
    attackerRect.left > heroRect.right ||
    attackerRect.bottom < heroRect.top ||
    attackerRect.top > heroRect.bottom
  );
  const isHit = normalBubbleDashLanes.includes(playerLane) && overlapsAttacker;

  if (isHit) {
    if (!bubbleWeaponWasTouching) {
      bubbleWeaponWasTouching = true;
      bubbleWeaponDodged = false;
    }

    if (isMoving) {
      bubbleWeaponDodged = true;
    }
    return;
  }

  if (!bubbleWeaponWasTouching) {
    return;
  }

  bubbleWeaponWasTouching = false;
  if (bubbleWeaponDodged) {
    bubbleWeaponDodged = false;
    return;
  }

  if (!tryDeathSave()) {
    gameOver();
  }
}

function watchBubbleWeaponHit() {
  if (isGameOver || !isBubbleBoss()) {
    hitAnimation = null;
    return;
  }

  const now = performance.now();
  if (now - lastBubbleHitCheckAt >= 33) {
    lastBubbleHitCheckAt = now;
    if (normalBubbleDashActive) {
      checkNormalBubbleDashHit();
    } else {
      checkBubbleWeaponHit();
    }
  }

  if (!isGameOver) {
    hitAnimation = requestAnimationFrame(watchBubbleWeaponHit);
  }
}

function damageBoss() {
  if (!canPlayerDamage || isKoPlaying) {
    return;
  }

  const damageResult = tutorialStep === "combat"
    ? { amount: Math.ceil(bossMaxHp / 3), isCritical: false }
    : calculatePlayerDamage();
  const damage = damageResult.amount;

  bossHp = Math.max(0, bossHp - damage);
  showDamageText(damageResult);
  updateBossHpText();
  resetPlayerBullet();

  if (bossHp <= 0) {
    if (currentBossName === "寶箱") {
      battleBags.push({
        kind: difficultySelect.value === "普通" ? "chest" : "bag",
        rarityIndex: 0,
        upgraded: false,
      });
      showBagDropText();
    } else if (tutorialStep === "combat" || rollBossBagDrop()) {
      showBagDropText();
    }

    playKoEffect();
  }
}

function shootBullet() {
  if (isGameOver) {
    return;
  }

  if (currentBossName === "泡泡") {
    shootBubbleWeapon();
    return;
  }

  bulletLane = tutorialStep === "combat" && currentBossName === "小豬"
    ? playerLane
    : Math.floor(Math.random() * 3);
  enemy.src = enemyImages[bulletLane];
  resetBullet();
  playSound(aimSound);

  warningTimer = setTimeout(() => {
    if (tutorialStep === "combat" && currentBossName === "小豬") {
      tutorialPigShotCount += 1;
      if (tutorialPigShotCount === 1) {
        tutorialMoveLocked = true;
        canPlayerDamage = false;
        clearInterval(bulletTimer);
        clearInterval(playerAttackTimer);
        clearTimeout(playerAttackDelayTimer);
        bulletTimer = null;
        bullet.classList.add("is-active");
        bullet.style.setProperty("--bullet-y", `${arena.clientHeight / 2 - bullet.offsetHeight / 2}px`);
        playSound(pigAttackSound);
        tutorialPauseTimer = setTimeout(() => {
          bullet.style.transition = "none";
          bullet.style.top = `${bullet.offsetTop}px`;
          tutorialMoveLocked = false;
          tutorialAwaitingDodge = true;
          tutorialOverlay.classList.add("is-open");
          tutorialOverlay.classList.add("is-pass-through");
          tutorialNextBtn.hidden = true;
          tutorialText.innerHTML = "<span class=\"tutorial-danger\">注意！</span> 子彈飛到中間排了，現在滑動到其他格子躲開！";
        }, 310);
        return;
      }

    }

    const bulletEndY = arena.clientHeight - bullet.offsetHeight;

    bullet.classList.add("is-active");
    if (currentBossName === "普通小豬") {
      const curveDistance = arena.clientWidth * 0.55;
      bullet.style.setProperty("--normal-pig-curve", `${curveDistance}px`);
      bullet.style.setProperty("--normal-pig-curve-negative", `-${curveDistance}px`);
      if (bulletLane === 0) {
        bullet.classList.add("is-normal-pig-left");
      } else if (bulletLane === 2) {
        bullet.classList.add("is-normal-pig-right");
      } else {
        bullet.classList.add("is-normal-pig-middle");
      }
    }
    playSound(pigAttackSound);
    if (currentBossName === "小豬") {
      bullet.style.transition = "top 620ms linear, opacity 120ms ease";
    }
    bullet.style.setProperty("--bullet-y", `${bulletEndY}px`);
    enemy.src = `outputs/${getBossImageName()}.png`;
    hitAnimation = requestAnimationFrame(watchBulletHit);
    const bulletDuration = currentBossName === "普通小豬"
      ? bulletLane === 1 ? 620 : 1100
      : currentBossName === "小豬" ? 620 : 1240;
    bulletEndTimer = setTimeout(resetBullet, bulletDuration);
  }, 500);
}

function shootBubbleWeapon() {
  const weaponLeft = "50%";

  enemy.src = "outputs/\u6ce1\u6ce1.png";
  bubbleWeapon.style.animation = "none";
  void bubbleWeapon.offsetWidth;
  bubbleWeapon.style.removeProperty("animation");
  bubbleWeapon.style.visibility = "visible";
  bubbleWeapon.style.animationPlayState = "running";
  bubbleWeapon.style.setProperty("--bubble-weapon-left", weaponLeft);
  bubbleDebugText.textContent = "";
  bubbleSpinStartTime = performance.now();
  lastBubbleHitCheckAt = 0;
  clearTimeout(bubbleSoundTimer);
  scheduleBubbleCycleSounds();
  hitAnimation = requestAnimationFrame(watchBubbleWeaponHit);
}

function shootNormalBubbleAttack() {
  if (isGameOver || currentBossName !== "普通泡泡") {
    return;
  }

  const attackType = Math.floor(Math.random() * 4);
  const isWeaponAttack = attackType < 2;
  const isLeftToRight = attackType === 0;
  const isLeftDash = attackType === 3;

  resetBubbleWeapon(false);
  enemy.src = "outputs/泡泡.png";

  if (isWeaponAttack) {
    bubbleWeapon.style.visibility = "visible";
    bubbleWeapon.style.animation = "none";
    void bubbleWeapon.offsetWidth;
    bubbleWeapon.style.animation = isLeftToRight
      ? "bubble-spin 3800ms linear forwards"
      : "bubble-spin-reverse 3800ms linear forwards";
  } else {
    normalBubbleDashActive = true;
    normalBubbleDashLanes = isLeftDash ? [0, 1] : [1, 2];
    enemy.src = "outputs/泡泡攻擊圖.png";
    enemy.classList.add("is-normal-bubble-dash");
    const dashOffsetX = isLeftDash ? "-20%" : "20%";
    enemy.style.transform = `translate(${dashOffsetX}, -60px)`;
    normalBubbleDashStartTimer = setTimeout(() => {
      void enemy.offsetWidth;
      const dashDistance = arena.getBoundingClientRect().bottom
        - enemy.getBoundingClientRect().top
        - enemy.offsetHeight / 2;
      enemy.style.transform = `translate(${dashOffsetX}, ${dashDistance}px)`;
    }, 500);
  }

  if (isWeaponAttack) {
    playSoundThen(aimSound, bubbleAttackSound);
  } else {
    playSound(bubbleDashSound);
  }
  bubbleWeaponWasTouching = false;
  bubbleWeaponDodged = false;
  hitAnimation = requestAnimationFrame(watchBubbleWeaponHit);
  normalBubbleAttackTimer = setTimeout(() => {
    resetBubbleWeapon(false);
    enemy.src = "outputs/泡泡.png";
    if (!isGameOver && currentBossName === "普通泡泡") {
      normalBubbleAttackTimer = setTimeout(shootNormalBubbleAttack, 850);
    }
  }, isWeaponAttack ? 3900 : 1320);
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
  enemy.classList.toggle("is-gage", isGageBoss());
  enemy.src = `outputs/${getBossImageName()}.png`;
  if (currentBossName === "寶箱") {
    // The reward chest never attacks.
  } else if (isGageBoss()) {
    enemyAttackDelayTimer = setTimeout(shootGageAttack, 1000);
  } else if (currentBossName === "普通泡泡") {
    enemyAttackDelayTimer = setTimeout(shootNormalBubbleAttack, 1000);
  } else if (currentBossDefense === 5) {
    enemyAttackDelayTimer = setTimeout(shootBubbleWeapon, 1000);
  } else {
    enemyAttackDelayTimer = setTimeout(() => {
      shootBullet();
      bulletTimer = setInterval(shootBullet, 1600);
    }, 1000);
  }
  playerAttackDelayTimer = setTimeout(() => {
    canPlayerDamage = true;
    playerAttackTimer = setInterval(shootPlayerBullet, 1000);
  }, 2000);
}

function stopEnemyActions() {
  clearTimeout(bossIntroTimer);
  bossIntroTimer = null;
  bossIntro.className = "boss-intro";
  enemy.classList.remove("is-intro-hidden");
  clearTimeout(enemyAttackDelayTimer);
  clearInterval(bulletTimer);
  clearTimeout(bubbleSoundTimer);
  clearTimeout(warningTimer);
  clearTimeout(bulletEndTimer);
  clearInterval(playerAttackTimer);
  clearTimeout(playerAttackDelayTimer);
  clearTimeout(playerBulletEndTimer);
  clearTimeout(koTimerK);
  clearTimeout(koTimerEnd);
  cancelAnimationFrame(hitAnimation);
  cancelAnimationFrame(playerHitAnimation);
  clearGageAttack();
  bulletTimer = null;
  bubbleSoundTimer = null;
  warningTimer = null;
  bulletEndTimer = null;
  playerAttackTimer = null;
  playerAttackDelayTimer = null;
  playerBulletEndTimer = null;
  koTimerK = null;
  koTimerEnd = null;
  resetBubbleWeapon(false);
  hitAnimation = null;
  playerHitAnimation = null;
  canPlayerDamage = false;
  enemy.src = `outputs/${getBossImageName()}.png`;
}

startBtn.addEventListener("click", () => {
  if (tutorialStep === "difficulty" && Number(bossCountInput.value) === 3) {
    finishTutorialForNow();
  }

  resetGameOver();
  if (!resetBoss()) {
    alert("這個難度目前沒有BOSS資料");
    return;
  }

  showScreen("game");
  playerLane = 1;
  playerRow = 0;
  battleArmorRate = playerStats.armorRate;
  updateBattleArmor();
  updateHeroPosition();
  startBossIntro();
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
  if (tutorialStep === "hero") {
    clearTutorialTarget();
    tutorialOverlay.classList.remove("is-open");
  }
});

closeHeroInfoBtn.addEventListener("click", () => {
  heroInfoModal.classList.remove("is-active");
  if (tutorialStep === "hero") {
    tutorialStep = "completed";
    saveGame();
    tutorialDialogueMode = "final";
    tutorialOverlay.classList.add("is-open");
    tutorialText.innerHTML = "開始你的閃避之旅！<br><span class=\"tutorial-danger\">小心喔，只要死亡身上的所有裝備都會掉落。</span>";
  }
});

bagButton.addEventListener("click", () => {
  updateInventoryList();
  inventoryModal.classList.add("is-active");
  if (tutorialStep === "equip") {
    tutorialOverlay.classList.remove("is-open");
    clearTutorialTarget();
  }
});

blacksmithButton.addEventListener("click", () => {
  showForgeResultText("", "");
  showBlacksmithMode("select");
  showScreen("blacksmith");
  if (tutorialStep === "compose") {
    forgeSlots = [null, null, null];
    renderBlacksmith();
    showBlacksmithMode("compose");
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "請手動把三把普通武器放進三個格子。先點第一格。";
    setTutorialTarget(forgeSlotButtons[0]);
  }
  if (tutorialStep === "upgrade") {
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "現在點升級，讓剛合成的武器變得更強。";
    setTutorialTarget(openUpgradeModeBtn);
  }
});

openComposeModeBtn.addEventListener("click", () => {
  renderBlacksmith();
  showBlacksmithMode("compose");
  if (tutorialStep === "compose") {
    clearTutorialTarget();
    tutorialOverlay.classList.remove("is-open");
  }
});

openUpgradeModeBtn.addEventListener("click", () => {
  resetUpgradeSlot();
  showBlacksmithMode("upgrade");
  if (tutorialStep === "upgrade") {
    tutorialUpgradeAttempts = 0;
    tutorialOverlay.classList.add("is-open");
    tutorialText.innerHTML = "先放入剛合成的武器，升級可以讓武器變得更強。<br><span class=\"tutorial-danger\">但要小心，升級可能會失敗！</span>";
    setTutorialTarget(upgradeInputSlot);
  }
});

openSmeltModeBtn.addEventListener("click", () => {
  resetSmeltSlot();
  showBlacksmithMode("smelt");
});

blacksmithBackBtn.addEventListener("click", () => {
  collectForgeResult();
  showScreen("lobby");
  if (tutorialStep === "upgrade") {
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "現在點鐵匠鋪，進入升級教學。";
    setTutorialTarget(blacksmithButton);
  }
});

upgradeBackBtn.addEventListener("click", () => {
  collectUpgradeResult();
  showScreen("lobby");
});

blacksmithResultSlot.addEventListener("click", collectForgeResult);

synthesizeBtn.addEventListener("click", synthesizeForgeSlots);

upgradeInputSlot.addEventListener("click", openUpgradePicker);
upgradeResultSlot.addEventListener("click", collectUpgradeResult);
smeltInputSlot.addEventListener("click", openSmeltPicker);
smeltResultSlot.addEventListener("click", collectSmeltResult);

upgradeBtn.addEventListener("click", upgradeSelectedItem);
smeltBtn.addEventListener("click", smeltSelectedItem);

closeForgePickerBtn.addEventListener("click", () => {
  forgePickerModal.classList.remove("is-active");
});

forgeSlotButtons.forEach((button, index) => {
  button.addEventListener("click", () => openForgePicker(index));
});

smeltBackBtn.addEventListener("click", () => {
  collectSmeltResult();
  showScreen("lobby");
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
  if (tutorialStep === "equip") {
    tutorialStep = "hero";
    saveGame();
    tutorialOverlay.classList.add("is-open");
    tutorialText.textContent = "現在點愛的家查看角色數值。";
    setTutorialTarget(heroInfoBtn);
  }
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
  retreatBossByDifficulty[difficultySelect.value] = currentBossName;
  saveGame();
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

  if (event.target instanceof HTMLInputElement) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePlayer(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    movePlayer(1);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    movePlayer(0, 1);
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    movePlayer(0, -1);
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
  resumeWebAudio();
  bgMusicVolume = Math.min(1, Math.max(0, value));
  bgVolumeInput.value = Math.round(bgMusicVolume * 100);
  applyVolumeSettings();

  if (blacksmithScreen.classList.contains("screen-active")) {
    lobbyMusic.volume = bgMusicVolume / (window.matchMedia("(pointer: coarse)").matches ? 64 : 32);
  }

  if (gameScreen.classList.contains("screen-active")) {
    battleMusic.volume = bgMusicVolume / (window.matchMedia("(pointer: coarse)").matches ? 16 : 8);
  }

  saveGame();
}

function setSfxVolume(value) {
  resumeWebAudio();
  sfxVolume = Math.min(1, Math.max(0, value));
  sfxVolumeInput.value = Math.round(sfxVolume * 100);
  applyVolumeSettings();
  saveGame();
}

function updateMobileSoundToggleLabels() {
  bgSoundToggleBtn.textContent = isBackgroundSoundEnabled ? "開" : "關";
  sfxSoundToggleBtn.textContent = isSfxSoundEnabled ? "開" : "關";
}

function setBackgroundSoundEnabled(enabled) {
  isBackgroundSoundEnabled = enabled;

  if (!enabled) {
    lobbyMusic.pause();
    battleMusic.pause();
  } else if (currentScreenName === "game") {
    playMusic(battleMusic);
  } else if (currentScreenName === "lobby" || currentScreenName === "blacksmith") {
    playMusic(lobbyMusic);
  }

  updateMobileSoundToggleLabels();
  saveGame();
}

function setSfxSoundEnabled(enabled) {
  isSfxSoundEnabled = enabled;

  if (!enabled) {
    [hammerSound, failSound, successSound, aimSound, pigAttackSound, bubbleAttackSound, bubbleDashSound, gageAttackSound1, gageAttackSound2, gageAttackSound3].forEach((sound) => sound.pause());
  }

  updateMobileSoundToggleLabels();
  saveGame();
}

const tutorialIntroLines = [
  "嗨，我是星星。歡迎來到愛的家の小遊戲！",
  "這裡的 BOSS 會不斷發動攻擊，你要在九宮格中移動躲避，並靠自動攻擊擊敗牠們。",
  "擊敗 BOSS 能拿到袋子、裝備和金錢。接下來我會帶你完成第一場挑戰！",
];

function clearTutorialTarget() {
  tutorialTarget?.classList.remove("tutorial-target");
  tutorialTarget = null;
  tutorialArrow.classList.remove("is-visible");
}

function setTutorialTarget(target) {
  clearTutorialTarget();
  tutorialTarget = target;
  target.classList.add("tutorial-target");
  const rect = target.getBoundingClientRect();
  tutorialArrow.style.left = `${rect.left + rect.width / 2 - 16}px`;
  tutorialArrow.style.top = `${Math.max(6, rect.top - 42)}px`;
  tutorialArrow.classList.add("is-visible");
}

function setTutorialMessage(message, buttonText = "繼續") {
  tutorialText.textContent = message;
  tutorialNextBtn.textContent = buttonText;
}

function showTutorialIntro() {
  if (money < 2500) {
    money = 2500;
    saveGame();
    updateMoneyText();
  }
  clearTutorialTarget();
  tutorialOverlay.classList.remove("is-top");
  tutorialNextBtn.hidden = false;
  tutorialDialogueIndex = 0;
  setTutorialMessage(tutorialIntroLines[tutorialDialogueIndex]);
  tutorialOverlay.classList.add("is-open");
}

function showDifficultyTutorial() {
  tutorialOverlay.classList.add("is-open");
  tutorialNextBtn.hidden = true;
  setTutorialMessage("先點這個設定框，把這次挑戰調整成 3 隻 BOSS。", "我知道了");
  setTutorialTarget(difficultyInfo);
}

function showBattleTutorialMessage() {
  const bossTips = {
    "小豬": "小豬會先瞄準一列，再射出子彈。用滑動或方向鍵移到別格躲開！",
    "泡泡": "狼牙棒快碰到你時，利用移動期間的無敵時間即可躲掉攻擊。",
    "格格": "格格會丟出炸彈，紅色格子出現前要離開那裡。",
  };

  tutorialDialogueMode = "battle";
  tutorialOverlay.classList.remove("is-pass-through");
  tutorialOverlay.classList.add("is-open");
  tutorialNextBtn.hidden = currentBossName !== "泡泡";
  if (currentBossName === "小豬") {
    tutorialText.innerHTML = `${bossTips[currentBossName]}<br><span class="tutorial-danger">移動有冷卻時間，先看清楚敵人的動向再移動！</span>`;
  } else {
    setTutorialMessage(bossTips[currentBossName]);
  }

  if (currentBossName === "泡泡") {
    tutorialNextBtn.textContent = "繼續";
    return;
  }

  clearTimeout(tutorialPauseTimer);
  tutorialPauseTimer = setTimeout(() => {
    tutorialDialogueMode = null;
    tutorialOverlay.classList.remove("is-open");
    startEnemyActions();
  }, 2200);
}

function finishTutorialForNow() {
  clearTutorialTarget();
  difficultyModal.classList.remove("tutorial-modal");
  tutorialOverlay.classList.remove("is-open");
  tutorialStep = "combat";
  saveGame();
}

tutorialNextBtn.addEventListener("click", () => {
  if (tutorialDialogueMode === "final") {
    tutorialDialogueMode = null;
    tutorialOverlay.classList.remove("is-open");
    return;
  }

  if (tutorialDialogueMode === "bags") {
    tutorialDialogueMode = null;
    tutorialOverlay.classList.remove("is-open");
    return;
  }

  if (tutorialDialogueMode === "battle") {
    tutorialDialogueMode = null;
    if (currentBossName === "泡泡") {
      tutorialOverlay.classList.remove("is-open");
      startEnemyActions();
      return;
    }
    tutorialAwaitingMove = true;
    tutorialOverlay.classList.remove("is-open");
    clearTutorialTarget();
    return;
  }

  if (tutorialDialogueMode === "retry") {
    tutorialDialogueMode = null;
    tutorialOverlay.classList.remove("is-open");
    bossHp = bossMaxHp;
    updateBossHpText();
    resetBullet();
    resetBubbleWeapon();
    clearGageAttack();
    startBossIntro();
    return;
  }

  if (tutorialDialogueMode === "dodge") {
    tutorialDialogueMode = null;
    tutorialAwaitingDodge = true;
    tutorialOverlay.classList.remove("is-open");
    clearTutorialTarget();
    return;
  }

  tutorialDialogueIndex += 1;

  if (tutorialDialogueIndex < tutorialIntroLines.length) {
    setTutorialMessage(
      tutorialIntroLines[tutorialDialogueIndex],
      tutorialDialogueIndex === tutorialIntroLines.length - 1 ? "開始設定" : "繼續"
    );
    return;
  }

  tutorialStep = "difficulty";
  saveGame();
  showDifficultyTutorial();
});

tutorialOverlay.addEventListener("click", (event) => {
  if (event.target !== tutorialOverlay) {
    return;
  }

  if (tutorialStep === "intro" || tutorialDialogueMode) {
    tutorialNextBtn.click();
  }
});

document.querySelector(".tutorial-dialogue").addEventListener("click", () => {
  if (tutorialDialogueMode === "bags") {
    tutorialDialogueMode = null;
    tutorialOverlay.classList.remove("is-open");
  }
});

tutorialOverlay.addEventListener("dblclick", (event) => event.preventDefault());

difficultyInfo.addEventListener("click", () => {
  if (tutorialStep !== "difficulty") {
    return;
  }

  difficultyModal.classList.add("tutorial-modal");
  tutorialNextBtn.hidden = true;
  setTutorialMessage("把 BOSS 數量改成 3。");
  setTutorialTarget(bossCountInput);
});

bossCountInput.addEventListener("input", () => {
  if (tutorialStep !== "difficulty" || Number(bossCountInput.value) !== 3) {
    return;
  }

  setTutorialMessage("很好！現在按完成。", "設定中");
  tutorialNextBtn.hidden = true;
  setTutorialTarget(closeDifficultyBtn);
});

closeDifficultyBtn.addEventListener("click", () => {
  if (tutorialStep !== "difficulty" || Number(bossCountInput.value) !== 3) {
    return;
  }

  setTutorialMessage("現在按開始，進入第一場挑戰！");
  tutorialNextBtn.hidden = true;
  difficultyModal.classList.remove("tutorial-modal");
  setTutorialTarget(startBtn);
});

startBtn.addEventListener("click", () => {
  if (tutorialStep === "difficulty" && Number(bossCountInput.value) === 3) {
    finishTutorialForNow();
  }
});

replayTutorialBtn.addEventListener("click", () => {
  saveEditorModal.classList.remove("is-active");
  tutorialStep = "intro";
  saveGame();
  showTutorialIntro();
});

function bindMobileVolumeSlider(input, setter) {
  function setFromPointer(event) {
    const rect = input.getBoundingClientRect();
    const x = event.clientX ?? event.touches?.[0]?.clientX ?? event.changedTouches?.[0]?.clientX;

    if (x == null) {
      return;
    }

    setter((x - rect.left) / rect.width);
  }

  input.addEventListener("input", () => setter(Number(input.value) / 100));
  input.addEventListener("change", () => setter(Number(input.value) / 100));
  input.addEventListener("pointerdown", (event) => {
    input.setPointerCapture?.(event.pointerId);
    setFromPointer(event);
  });
  input.addEventListener("pointermove", (event) => {
    if (event.buttons > 0) {
      setFromPointer(event);
    }
  });
  input.addEventListener("touchstart", (event) => {
    event.preventDefault();
    setFromPointer(event);
  }, { passive: false });
  input.addEventListener("touchmove", (event) => {
    event.preventDefault();
    setFromPointer(event);
  }, { passive: false });
}

bindMobileVolumeSlider(bgVolumeInput, setBackgroundVolume);
bindMobileVolumeSlider(sfxVolumeInput, setSfxVolume);

bgVolumeInput.addEventListener("touchmove", (event) => {
  event.preventDefault();
}, { passive: false });

sfxVolumeInput.addEventListener("touchmove", (event) => {
  event.preventDefault();
}, { passive: false });

volumeToggleBtn.addEventListener("click", () => {
  volumeControls.classList.toggle("is-open");
});

deleteAccountBtn.addEventListener("click", () => {
  deleteAccountModal.classList.add("is-open");
});

cancelDeleteAccountBtn.addEventListener("click", () => {
  deleteAccountModal.classList.remove("is-open");
});

confirmDeleteAccountBtn.addEventListener("click", () => {
  localStorage.removeItem(saveKey);
  location.reload();
});

bgSoundToggleBtn.addEventListener("click", () => {
  setBackgroundSoundEnabled(!isBackgroundSoundEnabled);
});

sfxSoundToggleBtn.addEventListener("click", () => {
  setSfxSoundEnabled(!isSfxSoundEnabled);
});

document.addEventListener("touchmove", (event) => {
  if (document.body.classList.contains("is-battle")) {
    event.preventDefault();
  }
}, { passive: false });

arena.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

arena.addEventListener("touchend", (event) => {
  const distanceX = event.changedTouches[0].clientX - touchStartX;
  const distanceY = event.changedTouches[0].clientY - touchStartY;

  if (Math.max(Math.abs(distanceX), Math.abs(distanceY)) < 35) {
    return;
  }

  if (Math.abs(distanceX) > Math.abs(distanceY)) {
    movePlayer(distanceX > 0 ? 1 : -1);
  } else {
    movePlayer(0, distanceY < 0 ? 1 : -1);
  }
}, { passive: true });

hero.addEventListener("transitionend", (event) => {
  if (event.propertyName !== "left" && event.propertyName !== "top") {
    return;
  }

  isMoving = false;
  hero.classList.remove("is-moving");
});

loadGame();
bgVolumeInput.value = Math.round(bgMusicVolume * 100);
sfxVolumeInput.value = Math.round(sfxVolume * 100);
updateMobileSoundToggleLabels();
updateHeroPosition();
resetBullet();
resetPlayerBullet();
updateBossHpText();
updateDifficultyInfo();
updateMoneyText();
if (tutorialStep === "intro") {
  showTutorialIntro();
} else if (tutorialStep === "difficulty") {
  showDifficultyTutorial();
} else if (tutorialStep === "combat") {
  tutorialOverlay.classList.add("is-open");
  tutorialText.textContent = "繼續新手教學，按開始回到戰鬥。";
  setTutorialTarget(startBtn);
}

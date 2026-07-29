// ========================= WORDS =========================
const ALL_WORDS = [
  "כלב","חתול","שולחן","כיסא","מחשב","טלוויזיה","חלון","דלת","מקרר","תנור","צלחת","כוס","מזלג","סכין","כף","מגבת",
  "ספר","עט","דף","עיפרון","מחברת","ילקוט","מורה","תלמיד","לוח","גיר","כיתה","בית ספר","אוניברסיטה","מבחן","הפסקה","טיול",
  "שמש","ירח","כוכב","ענן","גשם","שלג","רוח","ברק","רעם","קשת","שמיים","אדמה","ים","אוקיינוס","נהר","אגם",
  "עץ","פרח","דשא","עלה","שורש","ענף","יער","גינה","פארק","פרפר","דבורה","נמלה","חיפושית","פיל","אריה","נמר",
  "קוף","זברה","ג'ירפה","דוב","ארנב","עכבר","חולדה","נחש","צפרדע","צב","לוויתן","דולפין","כריש","דג","ציפור","נשר",
  "ארוחת בוקר","לחם","גבינה","חלב","ביצה","עגבנייה","מלפפון","פרי","ירק","תפוח","בננה","תפוז","ענבים","אבטיח","שוקולד","גלידה",
  "פיצה","המבורגר","צ'יפס","פסטה","אורז","מרק","סלט","בשר","עוף","דגים","קפה","תה","מיץ","מים","יין","בירה",
  "חולצה","מכנסיים","שמלה","חצאית","נעליים","גרביים","כובע","מעיל","כפפות","צעיף","חגורה","משקפיים","שעון","תיק","ארנק","מפתח",
  "בית","דירה","חדר","מטבח","סלון","חדר שינה","אמבטיה","שירותים","מרפסת","גינה","גג","קיר","רצפה","תקרה","מדרגות","מעלית",
  "מכונית","אוטובוס","רכבת","מטוס","ספינה","אופניים","אופנוע","משאית","טרקטור","מונית","אמבולנס","כבאית","משטרה","נהג","טייס","נוסע",
  "טלפון","רדיו","מצלמה","סוללה","מטען","פנס","שעון מעורר","אוזניות","רמקול","שלט","מנורה","חשמל","כבל","אינטרנט","אתר","אפליקציה",
  "אבא","אמא","אח","אחות","סבא","סבתא","דוד","דודה","בן","בת","נכד","תינוק","חבר","שכן","אורח","משפחה",
  "יד","רגל","ראש","עין","אוזן","אף","פה","שן","לשון","שיער","לב","בטן","גב","אצבע","ציפורן","כתף",
  "עבודה","משרד","בוס","כסף","משכורת","בנק","כרטיס אשראי","קניון","חנות","שוק","מחיר","הנחה","קבלה","תור","קופה","מוכר",
  "בוקר","צהריים","ערב","לילה","יום","שבוע","חודש","שנה","עבר","הווה","עתיד","שעה","דקה","שנייה","תאריך","לוח שנה",
  "קיץ","חורף","סתיו","אביב","חם","קר","שמש","עננים","רוח","חופש","חג","יום הולדת","מתנה","מסיבה","עוגה","נרות",
  "כדורגל","כדורסל","טניס","שחייה","ריצה","קפיצה","ריקוד","מוזיקה","שיר","זמר","גיטרה","פסנתר","תופים","כינור","ציור","אומנות",
  "סרט","קולנוע","שחקן","במה","הצגה","תיאטרון","קהל","מחיאות כפיים","צחוק","דמעות","פחד","אהבה","כעס","שמחה","עצב","הפתעה",
  "אדום","כחול","ירוק","צהוב","כתום","סגול","ורוד","חום","שחור","לבן","אפור","זהב","כסף","צבע","מברשת","ציור",
  "ישראל","ירושלים","תל אביב","חיפה","צבא","חייל","דגל","המנון","שלום","מלחמה","גבול","חומה","מפה","עולם","מדינה","עיר",
  "כפר","קיבוץ","מושב","מדבר","הר","עמק","מערה","נחל","מעיין","חוף","חול","צדף","גל","מציל","גלשן","סירה",
  "רופא","אחות","בית חולים","תרופה","חולה","בריאות","כאב","חיסון","מרשם","שיניים","משקפיים","בדיקה","לחץ דם","חום","שינה","חלום",
  "אמת","שקר","סוד","שאלה","תשובה","טעות","הצלחה","כישלון","ניצחון","הפסד","משחק","כלל","תחרות","פרס","מדליה","גביע",
  "משטרה","גנב","כלא","שופט","עורך דין","חוק","משפט","פשע","עדות","אשמה","חף מפשע","חקירה","פנס","אזיקים","ניידת","שוטר",
  "אש","מים","אוויר","אדמה","ברזל","זהב","עץ","זכוכית","פלסטיק","נייר","בד","אבן","חול","גומי","דבק","מספריים",
  "מהיר","איטי","חזק","חלש","גדול","קטן","ארוך","קצר","רחב","צר","גבוה","נמוך","כבד","קל","חדש","ישן",
  "חכם","טיפש","יפה","מכוער","עשיר","עני","מצחיק","משעמם","אמיץ","פחדן","נחמד","רע","טוב","מוזר","רגיל","מיוחד",
  "כדור","בובה","קוביות","פאזל","קלפים","שחמט","דומינו","נדנדה","מגלשה","גן שעשועים","גלגל ענק","רכבת הרים","קרקס","ליצן","קסם","קוסם",
  "חלל","חללית","אסטרונאוט","כוכב לכת","מאדים","שביל החלב","טלסקופ","חוצן","רובוט","מדע","ניסוי","מעבדה","המצאה","תגלית","אנרגיה","חשמל",
  "כתיבה","קריאה","דיבור","שמיעה","ראייה","ריח","טעם","מגע","זיכרון","מחשבה","דמיון","חלום","למידה","הבנה","ידיעה","שכחה",
  "בישול","אפייה","טיגון","חיתוך","ערבוב","טעימה","תבלין","מלח","פלפל","סוכר","שמן","חומץ","קמח","ביצים","שוקולד","וניל",
  "ניקיון","מטאטא","מגב","דלי","סמרטוט","סבון","שמפו","מברשת שיניים","משחת שיניים","כביסה","מכונת כביסה","מייבש","גיהוץ","ארון","מדף","סדר",
  "גשר","כביש","מדרכה","רמזור","תמרור","צומת","כיכר","תחנה","נמל","שדה תעופה","מסלול","גלגל","הגה","בלם","מנוע","דלק",
  "פטיש","מסמר","מברג","בורג","צבת","מסור","סולם","צבע","שיפוץ","בנייה","פועל","אדריכל","מהנדס","תוכנית","אתר בנייה","מנוף",
  "כנסת","ממשלה","ראש ממשלה","בחירות","פוליטיקה","חוק","דמוקרטיה","הפגנה","נאום","עיתון","חדשות","כתב","ראיון","פרסומת","הודעה","דואר",
  "חתונה","חתן","כלה","טבעת","חופה","ריקודים","הזמנה","מתנה","חגיגה","בר מצווה","ברית","לוויה","בית קברות","זיכרון","אבל","נחמה",
  "אמונה","אלוהים","תפילה","בית כנסת","כנסייה","מסגד","דת","מסורת","מנהג","ברכה","קדושה","חול","שבת","חג המולד","פסח","רמדאן",
  "פסיכולוג","טיפול","רגש","ביטחון עצמי","לחץ","חרדה","חופש","בחירה","רצון","כוח","חולשה","אופי","אישיות","התנהגות","הרגל","שינוי",
  "גלידה","מסטיק","סוכרייה","וופל","עוגייה","דונאט","פנקייק","סירופ","דבש","ריבה","חמאה","קצפת","פודינג","מרשמלו","פופקורן","נאצ'וס",
  "תרמיל","אוהל","שק שינה","מדורה","מנגל","פחמים","גפרור","מצית","מצפן","מפה","מסלול","פסגה","תצפית","ירידה","עלייה","מנוחה",
  "משקפת","חכה","פיתיון","רשת","דייג","צלילה","שנורקל","סנפירים","גלגל הצלה","מפרש","עוגן","סיפון","רציף","מגדלור","שחף","נמל",
  "צילום","עדשה","פלאש","תמונה","אלבום","מסגרת","פוסטר","ציור שמן","פסל","מוזיאון","תערוכה","גלריה","אמן","יצירה","השראה","כישרון",
  "מחשב נייד","מקלדת","עכבר","מסך","מדפסת","סורק","תוכנה","קובץ","תיקייה","וירוס","אבטחה","סיסמה","דואר אלקטרוני","הודעה","צ'אט","רשת",
  "חורף","מעיל גשם","מטריה","מגפיים","שלולית","ברד","קרח","החלקה","סקי","הר מושלג","מזחלת","מרק חם","שמיכה","חימום","אח","תה",
  "קיץ","ארטיק","מאוורר","מזגן","בריכה","ים","קרם הגנה","משקפי שמש","כובע מצחיה","כפכפים","חול","חופשה","מטוס","מלון","מזוודה","דרכון",
  "חיות מחמד","וטרינר","קולר","רצועה","אוכל לכלבים","כלוב","אקווריום","נוצות","פרווה","זנב","נביחה","מיאוו","רכיבה","סוס","אוכף","חווה",
  "מסעדה","תפריט","מלצר","הזמנה","מנה ראשונה","מנה עיקרית","קינוח","חשבון","טיפ","שולחן לשניים","מטבח","שף","בישול","גורמה","טעים","שובע",
  "מוזיקה קלאסית","פופ","רוק","ג'אז","ראפ","היפ הופ","אופרה","קונצרט","הופעה","פסטיבל","תקליט","דיסק","רדיו","פלייליסט","מילים","לחן",
  "גוף האדם","שלד","עצם","שריר","דם","נשימה","ריאות","מוח","עצבים","עיכול","כבד","כליות","עור","פנים","מצח","לחיים",
  "אולימפיאדה","מרתון","אימון","חדר כושר","משקולות","יוגה","פילאטיס","כדור עף","כדור יד","גולף","פוטבול","בייסבול","סקייטבורד","גלגיליות","קסדה","מגינים",
  "קוסמטיקה","איפור","אודם","מסקרה","בושם","לק","קרם","מראה","מספרה","תספורת","צבע לשיער","פן","גילוח","סכין גילוח","סבון פנים","מגבונים",
  "ספרייה","ספרן","השאלה","עלילה","דמות","סופר","משורר","שיר","חריזה","פסקה","פרק","כריכה","סימניה","אנציקלופדיה","מילון","תרגום",
  "חלל חיצוני","גלקסיה","כבידה","מסלול","לוויין","טיל","שיגור","נחיתה","ירח","מאדים","צדק","שבתאי","אסטרואיד","מטאור","ליקוי חמה","טלסקופ",
  "איכות הסביבה","מיחזור","זיהום","פלסטיק","זכוכית","נייר","פח","אשפה","טבע","שימור","אנרגיה ירוקה","פאנל סולארי","התחממות","קרחון","יער גשם","חיות בר",
  "משפטים","פסק דין","עדות","שבועה","תביעה","הגנה","מושבעים","אולם בית משפט","פטיש","צדק","זכויות","חובות","חוזה","חתימה","נוטריון","צוואה",
  "כלכלה","בורסה","מניה","השקעה","רווח","הפסד","אינפלציה","ריבית","הלוואה","משכנתא","נדל\"ן","בניין","שכר דירה","בעל בית","דייר","תיווך",
  "טכנולוגיה","בינה מלאכותית","רובוטיקה","סייבר","שבב","מעבד","זיכרון","ענן","אלגוריתם","קוד","מתכנת","הייטק","סטארטאפ","המצאה","פטנט","פיתוח",
  "פסיכולוגיה","תת מודע","אינסטינקט","התניה","זיכרון לטווח קצר","אינטליגנציה","רגש","אמפתיה","הקשבה","ייעוץ","קבוצה","חברה","תרבות","מסורת","ערכים","נורמה",
  "ארכיאולוגיה","חפירה","מאובן","דינוזאור","עתיקות","פירמידה","מומיות","מקדש","חורבות","היסטוריה","תרבות","שבט","מנהיג","מלך","מלכה","כתר",
  "גיאוגרפיה","יבשת","מדינה","בירה","אי","חצי אי","מצר","הר געש","רעידת אדמה","שיטפון","בצורת","אקלים","קו המשווה","קוטב","מצפן","מפה פיזית",
  "מתמטיקה","מספר","חיבור","חיסור","כפל","חילוק","משוואה","גיאומטריה","משולש","עיגול","ריבוע","זווית","אחוז","שבר","גרף","סטטיסטיקה",
  "פיזיקה","כימיה","ביולוגיה","מולקולה","אטום","יסוד","חמצן","פחמן","מימן","תא","דנ\"א","גנטיקה","אבולוציה","ניסוי","מבחנה","מיקרוסקופ",
  "ספרות","שירה","מחזה","דרמה","קומדיה","טרגדיה","מתח","מדע בדיוני","פנטזיה","גיבור","נבל","עלילה","נקודת מפנה","סוף טוב","משל","מוסר השכל",
  "פילוסופיה","מחשבה","קיום","מציאות","אמת","מוסר","אתיקה","לוגיקה","טיעון","הוכחה","ספק","אמונה","ידע","חוכמה","משמעות","חיים"
];

// ========================= COLOR + EMOJI POOLS =========================
// 16 colors — א=ירוק, ב=אדום, ג=תכלת, ד=כתום, ה=סגול, ו=ורוד, + 10 more
const COLOR_POOL = [
  '#22c55e', // ירוק
  '#ef4444', // אדום
  '#38bdf8', // תכלת
  '#f97316', // כתום
  '#a855f7', // סגול
  '#ec4899', // ורוד
  '#facc15', // צהוב
  '#14b8a6', // טורקיז
  '#84cc16', // ליים
  '#60a5fa', // כחול
  '#f43f5e', // ורוד-אדום
  '#8b5cf6', // סגול-כחול
  '#06b6d4', // ציאן
  '#fb923c', // כתום בהיר
  '#e879f9', // פוקסיה
  '#34d399', // מנטה
];

// 30 emojis
const EMOJI_POOL = [
  '🦁','🐯','🦊','🐺','🦅','🐉','🦋','🐬','🦄','🌟',
  '⚡','🔥','💎','🎯','🏆','🎲','🚀','🌈','🦝','🐸',
  '🦖','🐙','🎭','🎪','⚔️','🛡️','🌊','🏄','🎸','🦸',
];

const TEAM_DEFAULT_NAMES = ['קבוצה א׳','קבוצה ב׳','קבוצה ג׳','קבוצה ד׳','קבוצה ה׳','קבוצה ו׳'];

// ========================= SETUP STATE =========================
// Persists across team count changes; grows as needed
let teamSetup = {
  names:  [...TEAM_DEFAULT_NAMES],
  colors: ['#22c55e','#ef4444','#38bdf8','#f97316','#a855f7','#ec4899'],
  emojis: [], // filled on init
};

// ========================= GAME STATE =========================
let gameState = {
  teams: [], teamColors: [], teamEmojis: [], scores: [],
  currentTeamIndex: 0,
  roundScore: 0, roundCorrect: 0, roundSkip: 0, roundWrong: 0,
  roundTime: 60, targetScore: 30,
  timer: null, timeLeft: 60,
  words: [], currentWordIndex: 0,
  roundWordCount: 0,
};

// ========================= PICKER STATE =========================
let pickerState = { type: null, teamIndex: null };

// ========================= INIT =========================
window.addEventListener('DOMContentLoaded', () => {
  // Initialize display system — show only screen-home
  SCREEN_IDS.forEach(sid => {
    const el = document.getElementById(sid);
    if (el) el.style.display = sid === 'screen-home' ? 'flex' : 'none';
  });
  // Random emoji for each of the 6 default teams
  teamSetup.emojis = Array.from({ length: 6 }, () =>
    EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)]
  );
  updateTeamInputs();
});

// ========================= HEADER =========================
function setHeader(visible, slotHtml) {
  const hdr  = document.getElementById('page-header');
  const slot = document.getElementById('header-slot');
  hdr.style.display = visible ? 'flex' : 'none';
  slot.innerHTML = slotHtml || '<div style="width:72px"></div>';
}
function helpBtn() {
  return `<button type="button" class="header-btn" onclick="openInfo('rules')"><iconify-icon icon="mdi:help-circle-outline"></iconify-icon> כללים</button>`;
}

function goHome() {
  if (!confirm('לחזור לדף הבית? המשחק הנוכחי יאופס.')) return;
  clearInterval(gameState.timer);
  setHeader(false, '');
  showScreen('screen-home');
}

function goToSettings() {
  updateTeamInputs(); // ensure team inputs are rendered
  setHeader(true, helpBtn());
  showScreen('screen-settings');
}

// ========================= TEAM INPUTS =========================
function escapeHtml(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function saveCurrentNames() {
  const rows = document.querySelectorAll('#team-inputs .team-input-row');
  rows.forEach((_, i) => {
    const inp = document.getElementById(`team-name-${i}`);
    if (inp) teamSetup.names[i] = inp.value;
  });
}

function onNumTeamsChange() {
  saveCurrentNames();
  updateTeamInputs();
}

function updateTeamInputs() {
  const n = parseInt(document.getElementById('num-teams').value);

  // Extend teamSetup arrays if needed
  for (let i = teamSetup.colors.length; i < n; i++) {
    const taken = teamSetup.colors.slice(0, i);
    const avail = COLOR_POOL.filter(c => !taken.includes(c));
    teamSetup.colors.push(avail.length ? avail[0] : COLOR_POOL[i % COLOR_POOL.length]);
    teamSetup.emojis.push(EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)]);
    teamSetup.names.push(TEAM_DEFAULT_NAMES[i] || `קבוצה ${i + 1}`);
  }

  const container = document.getElementById('team-inputs');
  container.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.className = 'team-input-row';
    row.id = `team-row-${i}`;
    row.innerHTML = `
      <button class="team-emoji-btn" onclick="openPicker('emoji',${i})">${teamSetup.emojis[i]}</button>
      <div class="team-color-dot" id="color-dot-${i}"
           style="background:${teamSetup.colors[i]}"
           onclick="openPicker('color',${i})"></div>
      <input type="text" placeholder="${TEAM_DEFAULT_NAMES[i] || `קבוצה ${i+1}`}"
             id="team-name-${i}" maxlength="18" value="${escapeHtml(teamSetup.names[i] || TEAM_DEFAULT_NAMES[i])}">
    `;
    container.appendChild(row);
  }
}

// ========================= PICKER =========================
function openPicker(type, teamIndex) {
  pickerState = { type, teamIndex };
  const title   = document.getElementById('picker-title');
  const content = document.getElementById('picker-content');
  const n       = parseInt(document.getElementById('num-teams').value);

  if (type === 'color') {
    title.textContent = 'בחר צבע לקבוצה';
    const takenByOthers = teamSetup.colors.slice(0, n).filter((_, i) => i !== teamIndex);
    content.innerHTML = '<div class="color-grid">' +
      COLOR_POOL.map(c => {
        const taken    = takenByOthers.includes(c);
        const selected = teamSetup.colors[teamIndex] === c;
        return `<div class="color-swatch ${taken ? 'taken' : ''} ${selected ? 'selected' : ''}"
          style="background:${c}"
          onclick="${taken ? 'void 0' : `selectColor('${c}',${teamIndex})`}"></div>`;
      }).join('') + '</div>';
  } else {
    title.textContent = 'בחר אימוג׳י לקבוצה';
    content.innerHTML = '<div class="emoji-grid">' +
      EMOJI_POOL.map(e =>
        `<div class="emoji-option ${teamSetup.emojis[teamIndex] === e ? 'selected' : ''}"
          onclick="selectEmoji('${e}',${teamIndex})">${e}</div>`
      ).join('') + '</div>';
  }

  document.getElementById('picker-backdrop').classList.add('open');
  document.getElementById('picker-sheet').classList.add('open');
}

function selectColor(color, teamIndex) {
  teamSetup.colors[teamIndex] = color;
  // Update dot in-place (no full re-render, preserves typed names)
  const dot = document.getElementById(`color-dot-${teamIndex}`);
  if (dot) dot.style.background = color;
  closePicker();
  // Re-open with updated state so other swatches reflect change
}

function selectEmoji(emoji, teamIndex) {
  teamSetup.emojis[teamIndex] = emoji;
  const btn = document.querySelector(`#team-row-${teamIndex} .team-emoji-btn`);
  if (btn) btn.textContent = emoji;
  closePicker();
}

function closePicker() {
  document.getElementById('picker-backdrop').classList.remove('open');
  document.getElementById('picker-sheet').classList.remove('open');
}

// ========================= START GAME =========================
function startGame() {
  try {
    saveCurrentNames();
    const n = parseInt(document.getElementById('num-teams').value);
    gameState.teams      = [];
    gameState.teamColors = [];
    gameState.teamEmojis = [];
    gameState.scores     = [];
    for (let i = 0; i < n; i++) {
      gameState.teams.push(teamSetup.names[i] || TEAM_DEFAULT_NAMES[i]);
      gameState.teamColors.push(teamSetup.colors[i]);
      gameState.teamEmojis.push(teamSetup.emojis[i]);
      gameState.scores.push(0);
    }
    gameState.roundTime   = Math.max(20, Math.min(180, parseInt(document.getElementById('round-time').value) || 60));
    gameState.targetScore = Math.max(10, Math.min(200, parseInt(document.getElementById('target-score').value) || 30));
    gameState.currentTeamIndex = 0;
    gameState.words = shuffle([...ALL_WORDS]);
    gameState.currentWordIndex = 0;
    showTransfer();
  } catch(err) {
    alert('שגיאה: ' + err.message);
    console.error(err);
  }
}

// ========================= SCREENS =========================
const SCREEN_IDS = ['screen-home','screen-settings','screen-transfer','screen-game','screen-endturn','screen-winner'];

function showScreen(id) {
  SCREEN_IDS.forEach(sid => {
    const el = document.getElementById(sid);
    if (el) el.style.display = (sid === id) ? 'flex' : 'none';
  });
  try { window.scrollTo(0, 0); } catch(e) {}
}

// ========================= TRANSFER =========================
function showTransfer() {
  const idx = gameState.currentTeamIndex;
  const el  = document.getElementById('transfer-team-name');
  el.textContent = `${gameState.teamEmojis[idx]} ${gameState.teams[idx]}`;
  el.style.color = gameState.teamColors[idx];
  renderScoresPreview('scores-preview');
  setHeader(true, helpBtn());
  showScreen('screen-transfer');
}

function renderScoresPreview(containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  gameState.teams.forEach((name, i) => {
    const row = document.createElement('div');
    row.className = 'score-row' + (i === gameState.currentTeamIndex ? ' active-team' : '');
    row.innerHTML = `
      <div class="score-name" style="color:${gameState.teamColors[i]}">
        <span>${gameState.teamEmojis[i]}</span><span>${escapeHtml(name)}</span>
      </div>
      <div class="score-val">${gameState.scores[i]}</div>
    `;
    el.appendChild(row);
  });
}

// ========================= START TURN =========================
function startTurn() {
  gameState.roundScore = gameState.roundCorrect = gameState.roundSkip = gameState.roundWrong = gameState.roundWordCount = 0;
  gameState.timeLeft = gameState.roundTime;

  const idx    = gameState.currentTeamIndex;
  const nameEl = document.getElementById('game-team-name');
  nameEl.textContent = `${gameState.teamEmojis[idx]} ${gameState.teams[idx]}`;
  nameEl.style.color = gameState.teamColors[idx];

  updateRoundScoreDisplay();
  // Skip the word that was on-screen when the previous turn ended
  if (gameState.currentWordIndex > 0) gameState.currentWordIndex++;
  showNextWord();
  updateTimer();
  startTimer();
  setHeader(true, `<button type="button" class="header-btn" onclick="abortTurn()"><iconify-icon icon="mdi:arrow-right-circle-outline"></iconify-icon> חזור</button>`);
  showScreen('screen-game');
}

function abortTurn() {
  if (!confirm('לחזור? הניקוד של התור הנוכחי לא יישמר.')) return;
  clearInterval(gameState.timer);
  showTransfer();
}

// ========================= TIMER =========================
function startTimer() {
  clearInterval(gameState.timer);
  gameState.timer = setInterval(() => {
    gameState.timeLeft--;
    updateTimer();
    if (gameState.timeLeft <= 0) { clearInterval(gameState.timer); endTurn(); }
  }, 1000);
}

function updateTimer() {
  const el  = document.getElementById('timer-display');
  const arc = document.getElementById('timer-arc');
  const pct = gameState.timeLeft / gameState.roundTime;
  el.textContent = gameState.timeLeft;
  arc.style.strokeDashoffset = 188.5 * (1 - pct);
  arc.style.stroke = pct > .5 ? '#22c55e' : pct > .25 ? '#facc15' : '#ef4444';
  if (gameState.timeLeft <= 5) vibrate(50);
}

// ========================= WORDS =========================
function showNextWord() {
  if (gameState.currentWordIndex >= gameState.words.length) {
    gameState.words = shuffle([...ALL_WORDS]);
    gameState.currentWordIndex = 0;
  }
  const word = gameState.words[gameState.currentWordIndex];
  const el = document.getElementById('word-display');
  el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
  el.textContent = word;
  const countEl = document.getElementById('word-count');
  countEl.innerHTML = `<span style="color:#f97316;font-weight:900">מילה ${gameState.roundWordCount + 1}</span>`;
}
function nextWord() { gameState.currentWordIndex++; gameState.roundWordCount++; showNextWord(); }

// ========================= ACTIONS =========================
function handleCorrect() { gameState.roundScore++; gameState.roundCorrect++; updateRoundScoreDisplay(); nextWord(); vibrate([40,20,40]); }
function handleSkip()    { gameState.roundSkip++;                             nextWord(); vibrate(30); }
function handleWrong()   { gameState.roundScore--; gameState.roundWrong++;   updateRoundScoreDisplay(); nextWord(); vibrate([80,30,80]); }

function updateRoundScoreDisplay() {
  const el = document.getElementById('round-score-display');
  const s  = gameState.roundScore;
  el.innerHTML = s >= 0
    ? `<span class="score-pos">+${s}</span>`
    : `<span class="score-neg">${s}</span>`;
}

// ========================= END TURN =========================
function endTurn() {
  clearInterval(gameState.timer);
  vibrate([100,50,100,50,200]);

  const idx        = gameState.currentTeamIndex;
  const actualGain = gameState.roundScore;
  gameState.scores[idx] = Math.max(0, gameState.scores[idx] + actualGain);

  const teamEl = document.getElementById('endturn-team-name');
  teamEl.textContent = `${gameState.teamEmojis[idx]} ${gameState.teams[idx]}`;
  teamEl.style.color = gameState.teamColors[idx];

  // FIX: solid color instead of gradient-clip (was invisible in browsers)
  const roundEl = document.getElementById('endturn-round-score');
  roundEl.textContent = (actualGain >= 0 ? '+' : '') + actualGain;
  roundEl.style.color = actualGain >= 0 ? '#facc15' : '#ef4444';

  document.getElementById('endturn-emoji').textContent =
    actualGain > 5 ? '🔥' : actualGain > 0 ? '🎉' : actualGain === 0 ? '😐' : '😬';

  document.getElementById('endturn-breakdown').innerHTML = `
    <div class="breakdown-item">
      <span class="breakdown-label"><iconify-icon icon="mdi:check-circle-outline" style="color:#22c55e"></iconify-icon> נכון</span>
      <span class="breakdown-val" style="color:#22c55e">+${gameState.roundCorrect}</span>
    </div>
    <div class="breakdown-item">
      <span class="breakdown-label"><iconify-icon icon="mdi:skip-next-circle-outline" style="color:#38bdf8"></iconify-icon> דלג</span>
      <span class="breakdown-val" style="color:#38bdf8">0 (${gameState.roundSkip})</span>
    </div>
    <div class="breakdown-item">
      <span class="breakdown-label"><iconify-icon icon="mdi:close-circle-outline" style="color:#ef4444"></iconify-icon> טעות</span>
      <span class="breakdown-val" style="color:#ef4444">-${gameState.roundWrong}</span>
    </div>
    <div class="breakdown-item" style="border-color:#facc15">
      <span class="breakdown-label"><iconify-icon icon="mdi:chart-bar" style="color:#facc15"></iconify-icon> סה״כ</span>
      <span class="breakdown-val" style="color:#facc15">${gameState.scores[idx]}</span>
    </div>
  `;

  renderScoresPreview('endturn-scores');
  const leading = Math.max(...gameState.scores);
  document.getElementById('winner-progress-fill').style.width =
    Math.min(100, (leading / gameState.targetScore) * 100) + '%';

  setHeader(true, helpBtn());
  showScreen('screen-endturn');
}

// ========================= NEXT TEAM =========================
function nextTeam() {
  if (checkWinner()) return;
  gameState.currentTeamIndex = (gameState.currentTeamIndex + 1) % gameState.teams.length;
  showTransfer();
}

function checkWinner() {
  const winner = gameState.scores.findIndex(s => s >= gameState.targetScore);
  if (winner === -1) return false;
  showWinner(winner);
  return true;
}

// ========================= WINNER =========================
function showWinner(idx) {
  const nameEl = document.getElementById('winner-name');
  nameEl.textContent = `${gameState.teamEmojis[idx]} ${gameState.teams[idx]}`;
  nameEl.style.color = gameState.teamColors[idx];
  document.getElementById('winner-score-label').textContent = `${gameState.scores[idx]} נקודות`;

  const sorted = gameState.teams
    .map((name, i) => ({ name, score: gameState.scores[i], color: gameState.teamColors[i], emoji: gameState.teamEmojis[i] }))
    .sort((a, b) => b.score - a.score);

  const medals = ['🥇','🥈','🥉'];
  document.getElementById('winner-podium').innerHTML = sorted.map((t, rank) => `
    <div class="podium-row ${rank === 0 ? 'first-place' : ''}">
      <span class="podium-rank">${medals[rank] || (rank + 1)}</span>
      <span class="podium-name" style="color:${t.color}"><span>${t.emoji}</span><span>${escapeHtml(t.name)}</span></span>
      <span class="podium-score">${t.score}</span>
    </div>
  `).join('');

  setHeader(true, helpBtn());
  launchConfetti();
  vibrate([200,100,200,100,400]);
  showScreen('screen-winner');
}

// ========================= NEW GAME =========================
function newGame() {
  clearInterval(gameState.timer);
  setHeader(false, '');
  showScreen('screen-home');
}

// ========================= CONFETTI =========================
function launchConfetti() {
  const area = document.getElementById('confetti-area');
  area.innerHTML = '';
  const colors = ['#facc15','#22c55e','#38bdf8','#f97316','#a855f7','#ec4899','#fff'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `left:${Math.random()*100}%;background:${colors[~~(Math.random()*colors.length)]};width:${6+Math.random()*10}px;height:${6+Math.random()*10}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${2+Math.random()*3}s;animation-delay:${Math.random()*1.5}s;`;
    area.appendChild(p);
  }
}

// ========================= UTILS =========================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function vibrate(p) { try { navigator.vibrate && navigator.vibrate(p); } catch(e) {} }

// ========================= INFO SHEET =========================
const INFO_CONTENT = {
  rules: `
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:cellphone-arrow-down-variant"></iconify-icon> Pass &amp; Play</h3>
      <p>המשחק מיועד לקבוצות שמסבירות ומנחשות תוך כדי העברת טלפון אחד בין כולם — אין צורך בכמה מכשירים.</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:target"></iconify-icon> מטרת המשחק</h3>
      <p>הקבוצה הראשונה שמגיעה ליעד הנקודות שנקבע — מנצחת!</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:play-circle-outline"></iconify-icon> מהלך תור</h3>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:numeric-1-circle-outline"></iconify-icon></span><span class="ri-text">המכשיר מועבר לקבוצה שמשחקת. <strong>לא מציצים למסך!</strong></span></div>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:numeric-2-circle-outline"></iconify-icon></span><span class="ri-text">שחקן אחד מסביר — שאר הקבוצה מנחשים.</span></div>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:numeric-3-circle-outline"></iconify-icon></span><span class="ri-text">המסביר <strong>לא רשאי</strong> לומר את המילה, צלילים דומים, או תרגום ישיר.</span></div>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:timer-outline"></iconify-icon></span><span class="ri-text">יש לנחש כמה שיותר מילים עד שהטיימר מסתיים.</span></div>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:counter"></iconify-icon> ניקוד</h3>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:check-circle-outline" style="color:#22c55e"></iconify-icon></span><span class="ri-text"><strong>נכון</strong> — +1 נקודה</span></div>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:skip-next-circle-outline" style="color:#38bdf8"></iconify-icon></span><span class="ri-text"><strong>דלג</strong> — 0 נקודות (עוברים למילה הבאה)</span></div>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:close-circle-outline" style="color:#ef4444"></iconify-icon></span><span class="ri-text"><strong>טעות</strong> — מינוס 1 נקודה</span></div>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:trophy-outline"></iconify-icon> ניצחון</h3>
      <p>הקבוצה הראשונה שצוברת את יעד הנקודות שנקבע בהגדרות מנצחת!</p>
    </div>`,
  about: `
    <a class="about-link" href="https://loteman.github.io/Loteman-Games/" target="_blank" rel="noopener">
      <div>
        <div class="about-link-label"><iconify-icon icon="mdi:gamepad-variant-outline"></iconify-icon> Loteman Games</div>
        <div class="about-link-sub">למשחקים נוספים — לחץ לביקור באתר</div>
      </div>
      <iconify-icon icon="mdi:open-in-new" class="about-link-arrow"></iconify-icon>
    </a>
    <div class="about-tm">נחש ת׳מילה © ${new Date().getFullYear()}<br>כל הזכויות שמורות ל-Loteman Games</div>`
};

let currentInfoTab = 'rules';

function openInfo(type) {
  type = type || 'rules';
  const isOpen = document.getElementById('info-sheet').classList.contains('open');
  currentInfoTab = type;
  // Update tab highlight
  document.getElementById('tab-rules').classList.toggle('active', type === 'rules');
  document.getElementById('tab-about').classList.toggle('active', type === 'about');
  // Update content
  document.getElementById('info-content').innerHTML = INFO_CONTENT[type];
  // Only animate if sheet wasn't already open
  if (!isOpen) {
    document.getElementById('info-backdrop').classList.add('open');
    document.getElementById('info-sheet').classList.add('open');
  }
}

function switchInfoTab(type) {
  // Sheet already open — switch content without re-animating
  openInfo(type);
}

function closeInfo() {
  document.getElementById('info-backdrop').classList.remove('open');
  document.getElementById('info-sheet').classList.remove('open');
}

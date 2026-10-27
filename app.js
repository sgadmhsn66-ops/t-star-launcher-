(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const defaultApps = [
    {id:"youtube",name:"YouTube",subtitle:"فيديو وترفيه",icon:"▶",bg:"#352022",color:"#ff7777",glow:"#ff4c4c",url:"",favorite:true},
    {id:"browser",name:"المتصفح",subtitle:"تصفح الإنترنت",icon:"◎",bg:"#1c2d3e",color:"#8ec8ff",glow:"#438fff",url:"",favorite:true},
    {id:"media",name:"مشغل الوسائط",subtitle:"فيديو وصوت",icon:"▷",bg:"#26362e",color:"#a4f2d0",glow:"#55d8a7",url:"",favorite:true},
    {id:"music",name:"الموسيقى",subtitle:"استمع لمفضلاتك",icon:"♫",bg:"#332944",color:"#d1a7ff",glow:"#a36bff",url:"",favorite:false},
    {id:"games",name:"الألعاب",subtitle:"وقت اللعب",icon:"⌘",bg:"#3a3020",color:"#ffd58b",glow:"#ffbc57",url:"",favorite:false},
    {id:"files",name:"مدير الملفات",subtitle:"ملفاتك بسهولة",icon:"▤",bg:"#253442",color:"#9cdcff",glow:"#54c5ff",url:"",favorite:false}
  ];
  const translations = {
    ar:{home:"الرئيسية",apps:"التطبيقات",favorites:"المفضلة",settings:"الإعدادات",ready:"جاهز للعمل",welcome:"مساحتك، على مزاجك","heroLine1":"كل شيء تحبه.","heroLine2":"بمكان واحد.","heroText":"واجهة هادئة وسريعة، مصممة لتناسب شاشة التلفزيون والريموت.",yourspace:"واجهة تلفزيونك",browseApps:"استعراض التطبيقات",customize:"تخصيص الواجهة",quickaccess:"وصول سريع",favoriteApps:"تطبيقاتك المفضلة",viewAll:"عرض الكل ←",tipTitle:"نصيحة سريعة",tipText:"استخدم الأسهم للتنقل، وOK للاختيار، وزر الرجوع للعودة.",library:"مكتبتك",allApps:"كل التطبيقات",appsHint:"هذه بطاقات تجريبية. أضف أسماء تطبيقاتك وروابطها من الإعدادات.",yourchoices:"اختياراتك",nothingFavorite:"ماكو مفضلات بعد",favoriteHint:"من صفحة التطبيقات اضغط نجمة حتى تضيف التطبيق للمفضلة.",makeItYours:"خلّها على ذوقك",appearance:"المظهر",language:"اللغة",manageApps:"إدارة التطبيقات",remote:"الريموت والتنقل",appearanceHint:"خصّص ألوان الواجهة وحجم البطاقات.",accentColor:"لون التمييز",accentHint:"لون الأزرار والعناصر المحددة",cardSize:"حجم البطاقات",cardHint:"اختار حجم مناسب لشاشتك",animations:"الحركات",animationsHint:"تقليل الحركة قد يساعد الأجهزة الأضعف",showClock:"إظهار الساعة",clockHint:"عرض الوقت في أعلى الواجهة",languageHint:"غيّر لغة الواجهة واتجاه الكتابة.",interfaceLanguage:"لغة الواجهة",languageNote:"يتم حفظ اختيارك على هذا الجهاز",manageHint:"أضف بطاقة لتطبيق أو عدّل التطبيقات التجريبية.",newAppName:"اسم التطبيق",newAppNameHint:"مثلاً: YouTube",newAppUrl:"رابط اختياري",newAppUrlHint:"يفتح عند الاختيار في المتصفح",addApp:"＋ إضافة تطبيق",nativeNote:"ملاحظة: تشغيل تطبيقات Android مباشرة يحتاج نسخة Android أصلية وصلاحيات النظام؛ صفحة الويب وحدها ما تقدر تفتح كل التطبيقات.",remoteHint:"الواجهة تدعم لوحة المفاتيح وأزرار التلفزيون الشائعة.",move:"تنقل",select:"اختيار",back:"رجوع",settingsShortcut:"الإعدادات",reset:"إعادة ضبط الإعدادات",footer:"مصمّم للتلفزيون • خفيف وبسيط",homeTitle:"مساء الخير 👋",appsTitle:"التطبيقات",favoritesTitle:"المفضلة",settingsTitle:"الإعدادات",added:"تمت إضافة التطبيق",removed:"تم حذف التطبيق",saved:"تم حفظ الإعدادات",resetDone:"تمت إعادة ضبط الإعدادات",needName:"اكتب اسم التطبيق أولاً",badUrl:"الرابط غير صحيح؛ راح نضيف التطبيق بدون رابط",openDemo:"هذه بطاقة واجهة تجريبية وليست تطبيقاً مثبتاً",deleted:"حُذف التطبيق",addedFav:"أُضيف للمفضلة",removedFav:"انشال من المفضلة"},
    en:{home:"Home",apps:"Apps",favorites:"Favorites",settings:"Settings",ready:"Ready to use",welcome:"Your space, your way",heroLine1:"Everything you love.",heroLine2:"In one place.",heroText:"A calm, fast interface designed for your TV screen and remote.",yourspace:"YOUR TV INTERFACE",browseApps:"Browse apps",customize:"Customize launcher",quickaccess:"QUICK ACCESS",favoriteApps:"Your favorite apps",viewAll:"View all →",tipTitle:"Quick tip",tipText:"Use arrows to move, OK to select, and Back to return.",library:"YOUR LIBRARY",allApps:"All apps",appsHint:"These are demo cards. Add app names and links in Settings.",yourchoices:"YOUR PICKS",nothingFavorite:"No favorites yet",favoriteHint:"Open Apps and press the star to add an app to Favorites.",makeItYours:"MAKE IT YOURS",appearance:"Appearance",language:"Language",manageApps:"Manage apps",remote:"Remote & navigation",appearanceHint:"Customize accent colors and card sizes.",accentColor:"Accent color",accentHint:"Buttons and focused elements",cardSize:"Card size",cardHint:"Choose a size for your screen",animations:"Animations",animationsHint:"Reduced motion may help slower devices",showClock:"Show clock",clockHint:"Display the time in the header",languageHint:"Change the interface language and direction.",interfaceLanguage:"Interface language",languageNote:"Your choice is saved on this device",manageHint:"Add a custom app card or edit demo cards.",newAppName:"App name",newAppNameHint:"For example: YouTube",newAppUrl:"Optional URL",newAppUrlHint:"Opens in the browser when selected",addApp:"＋ Add app",nativeNote:"Note: Launching Android apps directly requires a native Android build and system permissions; a web page cannot launch every app.",remoteHint:"Supports keyboard and common TV remote keys.",move:"Navigate",select:"Select",back:"Back",settingsShortcut:"Settings",reset:"Reset settings",footer:"Made for TV • Light and simple",homeTitle:"Good evening 👋",appsTitle:"Apps",favoritesTitle:"Favorites",settingsTitle:"Settings",added:"App added",removed:"App removed",saved:"Settings saved",resetDone:"Settings reset",needName:"Enter an app name first",badUrl:"Invalid URL; adding without a link",openDemo:"This is a demo UI card, not an installed app",deleted:"App removed",addedFav:"Added to Favorites",removedFav:"Removed from Favorites"}
  };
  let state = loadState();
  let currentPage = "home";
  let selectedIndex = 0;
  function loadState(){try{return {...{apps:defaultApps,accent:"mint",size:"comfortable",motion:true,showClock:true,language:"ar"},...JSON.parse(localStorage.getItem("cleanTvState")||"{}")}}catch{return {apps:defaultApps,accent:"mint",size:"comfortable",motion:true,showClock:true,language:"ar"}}}
  function save(){localStorage.setItem("cleanTvState",JSON.stringify(state))}
  function t(key){return (translations[state.language]||translations.ar)[key]||key}
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  function applySettings(){
    document.documentElement.lang=state.language;document.documentElement.dir=state.language==="ar"?"rtl":"ltr";
    document.body.classList.toggle("no-motion",!state.motion);
    document.body.classList.toggle("compact",state.size==="compact");
    document.body.classList.toggle("large",state.size==="large");
    document.documentElement.style.setProperty("--accent",({mint:"#a4f2d0",blue:"#8bbcff",violet:"#c5a0ff",amber:"#ffd58b"})[state.accent]||"#a4f2d0");
    $("#accent-select").value=state.accent;$("#size-select").value=state.size;$("#motion-toggle").checked=state.motion;$("#clock-toggle").checked=state.showClock;$("#language-select").value=state.language;
    $$(".nav-item").forEach(b=>{const span=$("span:last-child",b);const key=b.dataset.page; if(span)span.textContent=t(key)});
    $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(t(key)!==key)el.textContent=t(key)});
    updateTitle();$("#clock").style.display=state.showClock?"block":"none";$("#date").style.display=state.showClock?"block":"none";
    renderApps();updateClock();
  }
  function updateTitle(){const titles={home:t("homeTitle"),apps:t("appsTitle"),favorites:t("favoritesTitle"),settings:t("settingsTitle")};$("#page-title").textContent=titles[currentPage]||t("homeTitle")}
  function renderApps(){
    const card=app=>`<article class="app-card focusable" tabindex="0" role="button" data-app="${escapeHtml(app.id)}" style="--card-bg:${app.bg||"#1b2630"};--icon-bg:${app.bg||"#253a37"};--icon-color:${app.color||"var(--accent)"};--app-glow:${app.glow||"#a4f2d0"}"><button class="fav-star ${app.favorite?"on":""}" data-fav="${escapeHtml(app.id)}" aria-label="favorite">${app.favorite?"★":"☆"}</button><span class="app-icon">${escapeHtml(app.icon||"▦")}</span><span class="app-name">${escapeHtml(app.name)}</span><span class="app-sub">${escapeHtml(app.subtitle||"تطبيق")}</span></article>`;
    $("#home-app-grid").innerHTML=state.apps.filter(a=>a.favorite).slice(0,6).map(card).join("");
    $("#all-app-grid").innerHTML=state.apps.map(card).join("");
    const favs=state.apps.filter(a=>a.favorite);$("#favorites-grid").innerHTML=favs.map(card).join("");$("#favorites-empty").classList.toggle("hidden",favs.length>0);$("#app-count").textContent=state.apps.length;
  }
  function showPage(page){if(!["home","apps","favorites","settings"].includes(page))return;currentPage=page;$$(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));updateTitle();selectedIndex=0;focusFirst()}
  function focusables(){const page=$("#page-"+currentPage);return $$("button:not(:disabled),select,input,[tabindex='0']",page).filter(el=>el.offsetParent!==null&&!el.classList.contains("hidden"))}
  function focusFirst(){const items=focusables();if(items.length){items[0].focus({preventScroll:true});}}
  function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2100)}
  function updateClock(){const now=new Date();$("#clock").textContent=now.toLocaleTimeString(state.language==="ar"?"ar-IQ":"en-GB",{hour:"2-digit",minute:"2-digit"});$("#date").textContent=now.toLocaleDateString(state.language==="ar"?"ar-IQ":"en-GB",{weekday:"short",day:"numeric",month:"short"})}
  function toggleFavorite(id){const app=state.apps.find(a=>a.id===id);if(!app)return;app.favorite=!app.favorite;save();renderApps();toast(t(app.favorite?"addedFav":"removedFav"))}
  function openApp(id){const app=state.apps.find(a=>a.id===id);if(!app)return;if(app.url){window.open(app.url,"_blank","noopener,noreferrer")}else toast(t("openDemo"))}
  document.addEventListener("click",e=>{
    const nav=e.target.closest("[data-page]");if(nav){showPage(nav.dataset.page);return}
    const go=e.target.closest("[data-go]");if(go){showPage(go.dataset.go);return}
    const fav=e.target.closest("[data-fav]");if(fav){e.stopPropagation();toggleFavorite(fav.dataset.fav);return}
    const app=e.target.closest("[data-app]");if(app){openApp(app.dataset.app);return}
    const tab=e.target.closest("[data-setting]");if(tab){$$(".setting-tab").forEach(x=>x.classList.toggle("active",x===tab));$$("[data-panel]").forEach(x=>x.classList.toggle("hidden",x.dataset.panel!==tab.dataset.setting));return}
  });
  $("#accent-select").addEventListener("change",e=>{state.accent=e.target.value;save();applySettings();toast(t("saved"))});
  $("#size-select").addEventListener("change",e=>{state.size=e.target.value;save();applySettings();toast(t("saved"))});
  $("#motion-toggle").addEventListener("change",e=>{state.motion=e.target.checked;save();applySettings()});
  $("#clock-toggle").addEventListener("change",e=>{state.showClock=e.target.checked;save();applySettings()});
  $("#language-select").addEventListener("change",e=>{state.language=e.target.value;save();applySettings();toast(t("saved"))});
  $("#add-app-btn").addEventListener("click",()=>{
    const name=$("#new-app-name").value.trim();let url=$("#new-app-url").value.trim();if(!name){toast(t("needName"));$("#new-app-name").focus();return}
    if(url&&!/^https?:\/\//i.test(url)){url="";toast(t("badUrl"))}
    const id="custom-"+Date.now();state.apps.push({id,name,subtitle:state.language==="ar"?"تطبيق مضاف":"Custom app",icon:name.slice(0,1).toUpperCase(),bg:"#24332f",color:"#a4f2d0",glow:"#55d8a7",url,favorite:false});
    save();renderApps();$("#new-app-name").value="";$("#new-app-url").value="";toast(t("added"));});
  $("#reset-btn").addEventListener("click",()=>{state={apps:defaultApps.map(a=>({...a})),accent:"mint",size:"comfortable",motion:true,showClock:true,language:"ar"};save();applySettings();toast(t("resetDone"))});
  document.addEventListener("keydown",e=>{
    if(e.key==="s"||e.key==="S"){if(!["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName)){showPage("settings");e.preventDefault();return}}
    if(e.key==="Escape"||e.key==="Backspace"||e.key==="BrowserBack"){if(currentPage!=="home"){showPage("home");e.preventDefault()}return}
    if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.key)){
      const items=focusables();if(!items.length)return;let i=items.indexOf(document.activeElement);if(i<0)i=0;
      const cols=window.innerWidth<760?2:(window.innerWidth<1100?4:6);
      if(e.key==="ArrowRight")i+=(state.language==="ar"?-1:1);
      if(e.key==="ArrowLeft")i+=(state.language==="ar"?1:-1);
      if(e.key==="ArrowDown")i+=cols;
      if(e.key==="ArrowUp")i-=cols;
      i=Math.max(0,Math.min(items.length-1,i));items[i].focus();items[i].scrollIntoView({block:"nearest",inline:"nearest"});e.preventDefault();
    }
  });
  // TV remotes often emit these key codes through a browser shell.
  window.addEventListener("popstate",()=>{if(currentPage!=="home")showPage("home")});
  state.apps=(Array.isArray(state.apps)&&state.apps.length?state.apps:defaultApps).map(a=>({...a}));
  applySettings();showPage("home");setInterval(updateClock,15000);
})();
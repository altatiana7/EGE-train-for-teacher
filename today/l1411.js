/* Урок 14 ноября (суббота, неделя 4 · урок 6): Future + Passive и устная часть.
   Все материалы — из её тренажёров: «Speaking · Вариант 1» (задания 1–3), «Arina Mistakes Kahoot» (ошибки Арины: будущее и времена),
   «Грамматика и лексика ЕГЭ» (19–24: Iceland/Louvre, Altai/Mayflower; 25–29: Tasmania, Boston Public Library), «Письма 37» (James · Future plans).
   Упражнения — по одному вопросу (KQ.kahoot), 19–24 и 25–29 — сплошным текстом (KQ.fipi), карточки — как Quizlet.
   Ничего не сохраняется: каждый блок открывается с начала. */
(function(){
'use strict';
const base=new URL('../',document.currentScript.src),url=p=>new URL(p,base).href;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* row = [тема, вопрос, верный, [неверные], правило]; верный ответ ставим на разные места */
const KM=rows=>rows.map((r,i)=>{const o=r[3].slice();o.splice(i%(o.length+1),0,r[2]);return {q:r[1],hint:'',opts:o,a:r[2],why:r[4]}});

const st=document.createElement('style');st.textContent=`
.l14{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337}
.l14Rule{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.l14Rule section{background:#fff;border:1px solid #dbe3ee;border-top:4px solid #0039A6;border-radius:12px;padding:10px 16px}
.l14Rule section:nth-child(2){border-top-color:#5b8f65}.l14Rule section:nth-child(3){border-top-color:#D52B1E}
.l14Rule h4{margin:0 0 8px;font-size:20px;color:#0039A6}
.l14Rule p,.l14Rule li{font-size:17px;line-height:1.45;margin:4px 0}
.l14Rule ol,.l14Rule ul{margin:0;padding-left:20px}
.l14Rule table{border-collapse:collapse;width:100%;font-size:17px}
.l14Rule td{border-bottom:1px solid #e5ebf3;padding:5px 6px;vertical-align:top}
.l14Rule td:first-child{font-weight:700;color:#0039A6;white-space:nowrap}
.l14Rule i{color:#334155}.l14Rule .bad{color:#D52B1E;text-decoration:line-through}.l14Rule .ok{color:#15803d;font-weight:700}
.l14Pred{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.l14Pred figure{margin:0;background:#fff;border:1px solid #dbe3ee;border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
.l14Pred img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#eef2f8}
.l14Pred .ph{aspect-ratio:4/3;display:grid;place-items:center;background:#eef2f8;color:#9fb0c7;font:800 44px/1 "Segoe UI",Arial,sans-serif}
.l14Pred figcaption{padding:8px 10px;font-size:17px;font-weight:700;color:#0039A6;min-height:42px;text-align:center}
.l14Pred figcaption span{visibility:hidden}.l14Pred.show figcaption span{visibility:visible}
.l14Q{font-size:22px;text-align:center;margin:0 0 12px;font-weight:700}
.l14Row{display:flex;gap:10px;justify-content:center;margin-top:14px}
.l14Row button,.l14Nav button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:8px 18px;font:800 16px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.l14Row button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.l14Cards{max-width:560px;margin:0 auto;font-family:"PT Serif",Georgia,"Times New Roman",serif}
.l14Face{border:1px solid #dbe3ee;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(20,35,55,.08);min-height:230px;padding:22px 26px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer}
.l14Face.back{background:#f2f7ff;border-color:#b7c9e8}
.l14Face .w{font-size:38px;font-weight:700;color:#0039A6}
.l14Face .t{font-size:24px;font-weight:700;margin-bottom:8px}
.l14Face .ex{font-size:19px;line-height:1.45;color:#334155}
.l14Nav{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:12px;font:800 18px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.l14Nav button:disabled{opacity:.4;cursor:default}
.l14Wrap{display:flex;gap:18px;flex-wrap:wrap}
.l14Wrap .col{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:12px 18px;min-width:280px;flex:1}
.l14Wrap h3{margin:0 0 8px;font-size:20px;color:#0039A6}
.l14Wrap .it{display:flex;align-items:center;gap:10px;font-size:19px;padding:5px 0;cursor:pointer}
.l14Wrap .bx{width:26px;height:26px;border:2px solid #b7c9e8;border-radius:7px;display:inline-grid;place-items:center;background:#fff;font-size:18px;color:#15803d}
.l14Wrap .it.on .bx{background:#d9f2e2;border-color:#86efac}
.l14Wrap .hw{font-size:19px;padding:5px 0}
@media(max-width:1000px){.l14Rule{grid-template-columns:1fr}.l14Pred{grid-template-columns:repeat(2,minmax(0,1fr))}}
.l14sp{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337;max-width:980px;margin:0 auto}
.l14Tabs{display:flex;gap:8px;margin-bottom:12px}
.l14Tabs button,.l14sp .l14Row button,.l14sp .l14Nav button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:8px 16px;font:800 16px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.l14Tabs button.on,.l14sp .l14Row button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.l14Grid{display:grid;grid-template-columns:150px minmax(0,1fr);gap:18px;align-items:start}
.l14Ring{width:140px;height:140px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p,100)*1%),#e5ebf3 0)}
.l14Ring>div{width:108px;height:108px;border-radius:50%;background:#fff;display:grid;place-items:center;align-content:center;text-align:center}
.l14Ring b{font:800 34px/1 "Segoe UI",Arial,sans-serif}.l14Ring small{font-size:12px;color:#64748b}
.l14Ring.low{background:conic-gradient(#D52B1E calc(var(--p,100)*1%),#e5ebf3 0)}
.l14Txt{background:#fff;border:1px solid #dbe3ee;border-radius:12px;padding:12px 18px;font-size:19px;line-height:1.5}
.l14Txt p{margin:0 0 10px}.l14Hd{margin:0 0 8px;font-weight:700;color:#0039A6}
.l14Ad{background:#f2f7ff;border:1px solid #b7c9e8;border-radius:12px;padding:10px 16px;font-size:19px;margin-bottom:10px}
.l14Ad ol{margin:6px 0 0;padding-left:22px}.l14Ad li{padding:2px 0;cursor:pointer}.l14Ad li.on{font-weight:700;color:#0039A6}
.l14Nums{display:flex;gap:6px;margin:10px 0}.l14Nums button{width:36px;height:36px;border-radius:50%;padding:0!important}
.l14Nums button.on{background:#0039A6;color:#fff}
.l14Let{max-width:900px;margin:0 auto;font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337;font-size:19px;line-height:1.45}
.l14Let h4{margin:12px 0 4px;color:#0039A6;font-size:20px}.l14Let ol{margin:0;padding-left:22px}.l14LetT{background:#fff;border:1px solid #dbe3ee;border-radius:12px;padding:10px 16px;margin:0}
.l14Let .rv{display:block;margin:4px 0 8px;cursor:pointer}.l14Let .rv span{display:inline-block;border:1px dashed #b7c9e8;border-radius:8px;padding:2px 12px;color:#0039A6;font:800 14px/1.6 "Segoe UI",Arial,sans-serif}
.l14Let .rv em{display:none;font-style:normal;background:#f2f7ff;border-left:4px solid #0039A6;border-radius:6px;padding:6px 12px}.l14Let .rv.on em{display:block;white-space:pre-line}.l14Let .rv.on span{display:none}
@media(max-width:800px){.l14Grid{grid-template-columns:1fr}}
`;
document.head.appendChild(st);

const G19=[
{h:"The land of ice and fire / The Louvre",q:"People often call Iceland ‘the land of ice and fire’. That is so because this country has ___ volcanoes than most other countries in the world.",b:"MANY",a:"more",why:"Volcanoes — сравниваем: more … than → more."},
{q:"Some of ___ volcanoes are still active while others can wake up any time.",b:"THIS",a:"these",why:"Some of … volcanoes — они, много → these."},
{q:"Much of Iceland ___ in lava as eruptions happen about every four years.",b:"COVER",a:"is covered",why:"Исландию покрывает лава (с ней делают), это факт → is + V3."},
{q:"The Louvre is a famous museum in Paris. It is the ___ art museum in the world.",b:"LARGE",a:"largest",why:"The … art museum — превосходная степень: largest."},
{q:"If you wanted to spend 30 seconds looking at each piece of art there, it ___ you 100 days to see the entire museum.",b:"TAKE",a:"would take",why:"If + прошедшее (wanted) → would take."},
{q:"Originally the Louvre was a fortress and then it became a royal palace. After the French Revolution the building ___ into a museum which is a must-see for any tourist who goes to Paris.",b:"TURN",a:"was turned",why:"Здание превратили в музей (с ним сделали) → was + V3."},
{h:"Altai / Mayflower",q:"Altai is a truly unique place in Russia. There one can find everything from picturesque mountain ranges to valleys. It also has ___ than 400 caves of various shapes. Some of these caves have labyrinths which can be quite dangerous for an inexperienced tourist.",b:"MANY",a:"more",why:"More than 400 caves — больше чем → more."},
{q:"Still, Altai caves are worth ___ as they allow people to understand how beautiful the underground world can be.",b:"VISIT",a:"visiting",why:"Worth + -ing → visiting."},
{q:"Millions of tourists ___ to Altai so far, and a lot of them want to come back to Altai again.",b:"BE",a:"have been",why:"So far (до сих пор) → have been."},
{q:"People all over the world love mayflowers because when they appear, it means that spring is coming. According to English legends, if you once plant mayflowers near your house, they ___ you from evil spirits forever.",b:"PROTECT",a:"will protect",why:"После if — настоящее (plant), а дальше о будущем → will protect."},
{q:"Sorry to say, not all people remember that mayflowers ___ to be endangered, so you may look at them, but you shouldn’t pick them.",b:"CONSIDER",a:"are considered",why:"Цветы считаются (с ними делают) → are + V3."},
{q:"We must take care of them so that our ___ can see these beautiful flowers.",b:"CHILDREN",a:"children",why:"Our … — много детей → children."}
];

const W25=[
{h:"Visiting Tasmania",q:"Are you planning a trip to Tasmania? Without a doubt, any ___ will find some things to do there.",b:"TOUR",a:"tourist",why:"Any … — человек, который приезжает → tourist (-ist)."},
{q:"To begin with, driving up the east coast of Tasmania is one of the most ___ things you can do there.",b:"MEMORY",a:"memorable",why:"One of the most … things — прилагательное → memorable."},
{q:"Tasmania’s east coast is ___ spectacular and along the way you’ll be able to stop for walks along cliff tops and swim in gorgeous beaches.",b:"REAL",a:"really",why:"… spectacular — перед прилагательным наречие → really."},
{q:"One more opportunity is to camp out at ___ parks and do other cool activities.",b:"NATION",a:"national",why:"… parks — какие парки? → national."},
{q:"One of the biggest ___ along the east coast of Tasmania is Freycinet Park, renowned for the stunning Wineglass Bay and many routes for day walks, bird watching and mountaineering. Besides climbing and hiking, there you can also eat a fresh oyster lunch at the “Freycinet Marine Farm”. It will certainly be an unforgettable experience for you, so don’t miss a chance to visit Tasmania.",b:"ATTRACT",a:"attractions",why:"One of the biggest … — много, существительное → attractions."},
{h:"Boston Public Library",q:"Dating from 1852, Boston Public Library contributes much to Boston’s reputation as the “Athens of America”. The old building is notable for its magnificent facade and interior art. ___ can pick up a free brochure.",b:"VISIT",a:"Visitors",why:"… can pick up — люди, много → Visitors."},
{q:"The brochure will be ___ to visitors.",b:"HELP",a:"helpful",why:"Will be … — прилагательное → helpful."},
{q:"___, free guided tours depart from the entrance hall at various times.",b:"ALTERNATIVE",a:"Alternatively",why:"Вводное слово в начале предложения → Alternatively."},
{q:"This ___ building, inspired by Italian Renaissance, can boast of enormous bronze doorways, iron gates and lanterns. From there a marble staircase leads the guests inside.",b:"ORIGIN",a:"original",why:"This … building — прилагательное → original."},
{q:"Besides this ___ artistry, the library holds untold treasures in its special collections, including John Adams’ personal library. If you visit this place once, it will be impossible for you to forget it.",b:"AMAZE",a:"amazing",why:"This … artistry — прилагательное → amazing."}
];

const MIS_F=KM([
["Future · be going to","We ___ our cousins next weekend.","are going to visit",["are visit", "going to visit", "will visiting"],"Going to берём целиком: am / is / are + going to + глагол."],
["Future · be going to","This year I ___ in Brazil for New Year.","am going to be",["have been", "will being", "am being"],"Это план на этот Новый год → am going to be."],
["when / if + Present","I’ll let you know about my impressions when I ___ back.","get",["will get", "got", "am getting"],"После when про будущее — без will: when I get back."],
["when / if + Present","When you ___ in Moscow, you’ll check into the hotel and have some rest.","arrive",["will arive", "will arrive", "arrives"],"После when — без will. И arrive пишется с двумя R."],
["when / if + Present","If she ___ it, it will be easier for her to control her behaviour.","finds",["will find", "find", "found"],"После if — без will. She → finds (с -s)."],
["when / if + Present","If it’s hot — I’ll relax, and if it ___ cold — I’ll wake up.","is",["will be", "be", "was"],"После if — без will: if it is cold."],
["Future · be going to","My intention is to learn Spanish next year. → I ___ Spanish next year.","am going to learn",["am going to", "going to learn", "will going to learn"],"Не забывай сам глагол: am going to learn."],
["Расписание","The departure time of the bus is 8.15. → The bus ___ 8.15.","leaves at",["leaves", "is leaving", "will leave at"],"Расписание → Present Simple. Перед временем нужен предлог at."],
["Future · will","I refuse to speak to him again. → I ___ to him again.","won’t speak",["won’n speak", "won’t to speak", "don’t speak"],"Won’t = will not. После него глагол без to."],
["will · решаю сейчас","The phone is ringing. — OK, I ___ it.","’ll answer",["’m answering", "answer", "’m going to answer"],"Решила прямо сейчас → will."],
["Договорённость","I can’t come on Saturday — I ___ my grandmother to the airport. It’s all arranged.","’m taking",["’ll take", "take", "’m going take"],"Всё договорено → Present Continuous: I’m taking."],
["Future · be going to","I’ve decided: I ___ medicine at university.","’m going to study",["’ll study", "study", "’m going study"],"Уже решила заранее → going to."],
["when / if + Present","If it ___ tomorrow, we’ll move the picnic indoors.","rains",["will rain", "rain", "is raining"],"После if — без will: if it rains."],
["Future · be going to","Be careful! You ___ that glass.","are going to drop",["will drop", "drop", "are dropping"],"Видно, что сейчас случится → going to."]
]);

const MIS_M=KM([
["Present Perfect","I ___ him for five years.","have known",["am knowing", "know", "have been knowing"],"Know не бывает с -ing. «Уже пять лет и до сих пор» → have known."],
["Present Perfect Continuous","The amount of plastic junk in the oceans ___ at an alarming rate for the last ten years.","has been increasing",["has increased", "is increasing", "increased"],"For the last ten years + процесс идёт до сих пор → has been + -ing."],
["Past Simple","I ___ to Oslo when I was twenty-one, and I’ve been working there for quite a while now.","moved",["have moved", "had moved", "was moving"],"When I was 21 — точное время в прошлом → Past Simple."],
["Present Continuous","When you ___ a film and texting a friend at the same time, you’re not doing any of these properly.","are watching",["are vatching", "watch", "will watch"],"Рядом texting — процесс → are watching. Пишем watch через W."],
["Past Perfect","I couldn’t pay for lunch because I ___ my wallet at home.","had left",["left", "have left", "was leaving"],"Оставила раньше, чем не смогла заплатить → had left."],
["Past Perfect Continuous","We ___ for forty minutes when the bus finally came.","had been waiting",["were waiting", "have been waiting", "waited"],"Ждали 40 минут ДО того, как пришёл автобус → had been waiting."],
["Past Perfect","When I got to the station, I realised that I ___ my ticket.","had forgotten",["forgot", "have forgotten", "had forgot"],"Забыла раньше, чем поняла → had forgotten."],
["Past Perfect Continuous","The ground was white in the morning: it ___ all night.","had been snowing",["was snowing", "has been snowing", "snowed"],"Шёл всю ночь до утра → had been snowing."],
["Past Continuous","At this time last Sunday we ___ in the sea.","were swimming",["had swum", "are swimming", "have swum"],"At this time last Sunday — в тот момент шёл процесс → were swimming."],
["Пассив · Present","The Palace of Westminster is the meeting place of the UK Parliament, where important laws and rules ___.","are made",["made", "make", "are making"],"Законы не делают сами — их делают → are made."],
["Stative verbs","You ___ pale. Are you all right?","look",["are looking", "have looked", "looks"],"Look = выглядишь — это состояние, без -ing."],
["Stative verbs","Most critics ___ her the best writer of her generation.","consider",["have considered", "are considering", "considers"],"Consider = считать (мнение) → Present Simple."]
]);

const SP={t1:"Acid rain is a serious environmental problem these days. Basically, we have acid rain when water in the atmosphere mixes with dangerous gases and then falls onto the ground. It can fall as rain, snow, dust or even fog. When it comes into contact with animals, plants and even buildings or cars, it does a lot of harm to them. It also damages the soil. If it gets into a river or a lake, water creatures there suffer, too.\n\nIt is obvious that acid rain is caused by air pollution. Factories and plants send smoke into the air. People burn fossil fuels to produce energy. They also drive their cars or use public transport instead of using their bikes or walking. Sometimes acid rain happens because of volcanic activity or other natural causes, but in most cases, it is man-made. We should consider our environmental footprint seriously and start doing everything we can to stop acid rain.",t2:[["minimum age", "What is the minimum age for the course?"], ["duration of the course", "How long does the course last?"], ["equipment rental", "Can I rent the equipment?"], ["student discounts", "Do you offer discounts for students?"]],t3:["Who cooks best in your family?", "What dish would you like to learn to cook? Why?", "How can people learn the basics of cooking?", "Why do you think teenagers should learn how to cook?", "What are some of the advantages of homemade food?"],intro:"Hello everybody! It’s Teenagers Round the World Channel. Our guest today is a teenager from Russia and we are going to discuss teenagers’ attitude to cooking. We’d like to know our guest’s point of view on this issue. Please answer five questions. So, let’s get started."};

const LET={"name": "James", "prompt": "You have received a letter from your English-speaking pen-friend James who writes:\n… My parents want me to follow in their footsteps and become a doctor. But my\ndream is to study maths. What would you advise me to do? What are your plans after\nyou leave school? Do your parents support you in your decision?\nMy parents bought me a puppy for my birthday! ...\nWrite a letter to James.In your letter\n- answer his questions\n- ask 3 questions about the puppy\nWrite 100––140 words.\nRemember the rules of letter writing.", "fq": ["What would you advise me to do?", "What are your plans after you leave school?", "Do your parents support you in your decision?"], "ans": ["I would advise you to talk honestly with your parents and explain why maths is important to you.", "After I leave school, I plan to enter university and study foreign languages or education.", "My parents support my decision because they want me to choose something I really like."], "about": "the puppy", "ask": ["What is your puppy’s name?", "What breed is it?", "Who usually takes care of it?"], "answer": "Dear James,\n\nThanks for your message. It was great to hear from you.\n\nNow I’d like to answer your questions. I would advise you to talk honestly with your parents and explain why maths is important to you. After I leave school, I plan to enter university and study foreign languages or education. My parents support my decision because they want me to choose something I really like.\n\nBy the way, I’d like to ask you some questions about the puppy. What is your puppy’s name? What breed is it? Who usually takes care of it?\n\nWrite back soon.\nBest wishes,\nSasha"};

/* ---------- правило: просто, без терминов ---------- */
const RULE='<div class="l14 l14Rule">'+
'<section><h4>1 · Что будет</h4><table>'+
'<tr><td>решила сейчас, пообещала</td><td><b>will + V1</b><br><i>OK, I’ll answer it.</i></td></tr>'+
'<tr><td>план, видно, что случится</td><td><b>am / is / are going to + V1</b><br><i>Be careful! You are going to drop that glass.</i></td></tr>'+
'<tr><td>договорено, расписание</td><td><b>I’m taking</b> (Present Continuous) · <b>The bus leaves at 8.15</b> (Present Simple)</td></tr></table></section>'+
'<section><h4>2 · После if / when</h4><ol>'+
'<li>После <b>if / when</b> о будущем — <b>настоящее</b>, без will.<br><i>When I get back, I’ll let you know.</i></li>'+
'<li>С чем-то сделают → <b>will be + V3</b>.<br><i>It will be completed by 2027.</i></li>'+
'<li>Рассказ в прошлом (<b>knew, promised</b>) или <b>if + прошедшее</b> → <b>would</b>.<br><i>If you wanted to see everything, it would take 100 days.</i></li></ol></section>'+
'<section><h4>3 · Обрати внимание</h4><ul>'+
'<li>Не пиши <span class="bad">will going to</span> и <span class="bad">won’t to speak</span>: <span class="ok">am going to learn</span>, <span class="ok">won’t speak</span>.</li>'+
'<li><b>so far · for years · since</b> → <b>have been</b>, не is.</li>'+
'<li>С ним делают → <b>was / were + V3</b>, сам делает → Active.<br><i>The building was turned into a museum.</i></li>'+
'<li><b>worth · enjoy</b> + глагол с <b>-ing</b>: <i>worth visiting</i>.</li></ul></section></div>';

/* ---------- prediction по фото (фото кладутся в today/img/; если файла нет — остаётся номер, подпись-прогноз) ---------- */
const PRED=[['l1411-iceland.jpg','The land of ice and fire'],['l1411-louvre.jpg','The Louvre'],['l1411-altai.jpg','Altai'],['l1411-mayflower.jpg','Mayflower']];
const PRED_HTML='<div class="l14"><p class="l14Q">What do you think the four texts are about?</p><div class="l14Pred">'+
 PRED.map((p,k)=>'<figure><img src="'+url('today/img/'+p[0])+'" alt="" onerror="this.outerHTML=\'<div class=ph>'+(k+1)+'</div>\'"><figcaption><span>'+p[1]+'</span></figcaption></figure>').join('')+
 '</div><div class="l14Row"><button type="button" class="prim" data-l14="pred">Titles</button></div></div>';

/* ---------- Speaking · Вариант 1 (Task 1 · 2 · 3) ---------- */
const SPS={tab:'t3',i2:0,f2:false,i3:0,f3:false,intro:false,total:90,left:90,label:'',phase:''};
let spTimer=null,spCtx=null,spVoice=null;
const spSyn=window.speechSynthesis||null;
function spRank(x){const n=x.name;let r=0;if(/natural|neural|premium|enhanced/i.test(n))r+=100;if(/sonia|libby|ryan|maisie|thomas|abbi|bella|elliot|hollie|oliver/i.test(n))r+=60;if(/google uk english female/i.test(n))r+=50;else if(/google uk/i.test(n))r+=45;if(/serena|kate|daniel|stephanie|arthur|martha/i.test(n))r+=40;if(/online/i.test(n))r+=20;return r}
function spPick(){if(!spSyn)return;let v=spSyn.getVoices().filter(x=>/en[-_]GB/i.test(x.lang));if(!v.length)v=spSyn.getVoices().filter(x=>/^en/i.test(x.lang));v.sort((a,b)=>spRank(b)-spRank(a));spVoice=v[0]||null}
if(spSyn){spPick();spSyn.onvoiceschanged=spPick}
function spSpeak(text,done){if(!spSyn)return;spSyn.cancel();const u=new SpeechSynthesisUtterance(text);if(spVoice)u.voice=spVoice;u.lang=spVoice?spVoice.lang:'en-GB';u.rate=.9;if(done)u.onend=done;spSyn.speak(u)}
function spBeep(){try{spCtx=spCtx||new (window.AudioContext||window.webkitAudioContext)();const o=spCtx.createOscillator(),g=spCtx.createGain();o.frequency.value=660;g.gain.value=.08;o.connect(g);g.connect(spCtx.destination);o.start();o.stop(spCtx.currentTime+.35)}catch(e){}}
function spStop(){clearInterval(spTimer);spTimer=null}
function spStopAll(){spStop();try{spSyn&&spSyn.cancel()}catch(e){}}
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function spPaint(){const r=document.querySelector('.l14sp .l14Ring');if(!r)return;r.style.setProperty('--p',SPS.total?SPS.left/SPS.total*100:0);r.classList.toggle('low',SPS.total>0&&SPS.left<=5);r.querySelector('b').textContent=mmss(SPS.left);r.querySelector('small').textContent=SPS.label;const ph=document.querySelector('.l14sp .l14Phase');if(ph)ph.textContent=SPS.phase}
function spSet(sec,label){spStop();SPS.total=sec;SPS.left=sec;SPS.label=label||'';spPaint()}
function spStart(sec,label,cb){spSet(sec,label);spTimer=setInterval(()=>{if(!document.querySelector('.l14sp')){spStop();return}SPS.left--;spPaint();if(SPS.left<=0){spStop();spBeep();cb&&cb()}},1000)}
function spNav(){return '<div class="l14Nav"><button type="button" data-l14sp="prev">← Назад</button><button type="button" data-l14sp="flip">Перевернуть карточку</button><button type="button" data-l14sp="next">Вперёд →</button></div>'}
function spNums(n,cur){let h='<div class="l14Nums">';for(let k=0;k<n;k++)h+='<button type="button" data-l14sp="num" data-v="'+k+'"'+(k===cur?' class="on"':'')+'>'+(k+1)+'</button>';return h+'</div>'}
function spHTML(){
 const tabs='<div class="l14Tabs">'+[['t1','Task 1 · Reading'],['t2','Task 2 · Questions'],['t3','Task 3 · Interview']].map(t=>'<button type="button" data-l14sp="tab" data-v="'+t[0]+'"'+(SPS.tab===t[0]?' class="on"':'')+'>'+t[1]+'</button>').join('')+'</div>';
 const ring='<div class="l14Ring"><div><b>0:00</b><small></small></div></div>';
 let b='';
 if(SPS.tab==='t1'){
  b='<div class="l14Grid"><div>'+ring+'<p class="l14Phase" style="font:800 15px/1.3 \'Segoe UI\',Arial,sans-serif;color:#0039A6;margin:8px 0"></p><div class="l14Row" style="flex-direction:column;align-items:stretch;margin-top:6px"><button type="button" class="prim" data-l14sp="t1prep">Preparation</button><button type="button" data-l14sp="t1read">Reading</button><button type="button" data-l14sp="stop">Stop</button></div></div>'+
   '<div class="l14Txt">'+SP.t1.split('\n\n').map(p=>'<p>'+esc(p)+'</p>').join('')+'</div></div>';
 }else if(SPS.tab==='t2'){
  b='<div class="l14Grid"><div>'+ring+'<div class="l14Row" style="flex-direction:column;align-items:stretch;margin-top:10px"><button type="button" class="prim" data-l14sp="t2start">Start 20 s</button><button type="button" data-l14sp="stop">Stop</button></div></div><div>'+
   '<div class="l14Ad"><b>Diving courses – explore the depths of the ocean with us!</b><ol>'+SP.t2.map((p,k)=>'<li data-l14sp="num" data-v="'+k+'"'+(k===SPS.i2?' class="on"':'')+'>'+esc(p[0])+'</li>').join('')+'</ol></div>'+
   (SPS.f2?'<div class="l14Face back"><div class="t">'+esc(SP.t2[SPS.i2][1])+'</div></div>':'<div class="l14Face"><div class="w" style="font-size:30px">'+esc(SP.t2[SPS.i2][0])+'</div></div>')+spNav()+spNums(4,SPS.i2)+'</div></div>';
 }else{
  b='<div class="l14Grid"><div>'+ring+'<div class="l14Row" style="flex-direction:column;align-items:stretch;margin-top:10px"><button type="button" class="prim" data-l14sp="t3play">Play</button><button type="button" data-l14sp="t3replay">Replay</button><button type="button" data-l14sp="stop">Stop</button></div></div><div>'+
   '<div class="l14Row" style="justify-content:flex-start;margin:0 0 8px"><button type="button" data-l14sp="intro">Play intro</button><button type="button" data-l14sp="introTxt">'+(SPS.intro?'Скрыть текст':'Показать текст вступления')+'</button></div>'+
   (SPS.intro?'<div class="l14Txt" style="margin-bottom:10px">'+esc(SP.intro)+'</div>':'')+
   (SPS.f3?'<div class="l14Face back"><div class="t">'+esc(SP.t3[SPS.i3])+'</div></div>':'<div class="l14Face"><div class="w" style="font-size:30px">Question '+(SPS.i3+1)+' of 5</div><div class="ex">Listen, then answer in 2–3 sentences</div></div>')+spNav()+spNums(5,SPS.i3)+'</div></div>';
 }
 return tabs+b;
}
function spRender(root){root=root||document.querySelector('.l14sp');if(!root)return;root.innerHTML=spHTML();spPaint()}
function spInit(){const r=document.querySelector('#l3Panel .l14sp');if(!r)return;spStopAll();SPS.tab='t3';SPS.i2=0;SPS.i3=0;SPS.f2=false;SPS.f3=false;SPS.intro=false;SPS.phase='';spRender(r);spSet(40,'to answer')}
function spAct(t){
 const a=t.dataset.l14sp,v=t.dataset.v;
 if(a==='tab'){spStopAll();SPS.tab=v;SPS.phase='';spRender();spSet(v==='t1'?90:v==='t2'?20:40,v==='t1'?'':v==='t2'?'per question':'to answer');return}
 if(a==='stop'){spStopAll();SPS.phase='';spPaint();return}
 if(a==='t1prep'){SPS.phase='Preparation';spStart(90,'read silently',()=>{SPS.phase='Now read aloud';spPaint()});return}
 if(a==='t1read'){SPS.phase='Reading aloud';spStart(90,'read aloud',()=>{SPS.phase='Time is up';spPaint()});return}
 if(a==='t2start'){spStart(20,'per question');return}
 if(a==='t3play'){spSpeak(SP.t3[SPS.i3],()=>spStart(40,'to answer'));return}
 if(a==='t3replay'){spSet(40,'to answer');spSpeak(SP.t3[SPS.i3],()=>spStart(40,'to answer'));return}
 if(a==='intro'){spSpeak(SP.intro);return}
 if(a==='introTxt'){SPS.intro=!SPS.intro;spRender();return}
 const n=SPS.tab==='t2'?4:5,key=SPS.tab==='t2'?'i2':'i3',fl=SPS.tab==='t2'?'f2':'f3';
 if(a==='flip'){SPS[fl]=!SPS[fl];spRender();return}
 if(a==='prev'||a==='next'||a==='num'){spStopAll();SPS[key]=a==='num'?+v:(SPS[key]+(a==='next'?1:-1)+n)%n;SPS[fl]=false;spRender();spSet(SPS.tab==='t2'?20:40,SPS.tab==='t2'?'per question':'to answer')}
}

/* ---------- письмо 37 (тренажёр писем): ответы и вопросы открываются по нажатию ---------- */
const LET_HTML='<div class="l14Let"><p class="l14LetT">'+esc(LET.prompt.replace('100––140','100–140')).replace(/\n/g,'<br>')+'</p>'+
 '<h4>1 · Answer his questions</h4><ol>'+LET.fq.map((q,i)=>'<li>'+esc(q)+'<span class="rv" data-l14="rev"><span>Show answer</span><em>'+esc(LET.ans[i])+'</em></span></li>').join('')+'</ol>'+
 '<h4>2 · Ask 3 questions about '+esc(LET.about)+'</h4><ol>'+LET.ask.map(q=>'<li><span class="rv" data-l14="rev"><span>Show question</span><em>'+esc(q)+'</em></span></li>').join('')+'</ol>'+
 '<h4>3 · Sample letter</h4><span class="rv" data-l14="rev"><span>Show sample letter</span><em>'+esc(LET.answer)+'</em></span></div>';

/* ---------- карточки (Quizlet) ---------- */
const CARDS=[
['am / is / are going to + V1','план, видно, что случится','Be careful! You are going to drop that glass.'],
['will + V1','решила сейчас, пообещала','The phone is ringing. — OK, I’ll answer it.'],
['I’m taking','уже договорено → Present Continuous','I can’t come on Saturday — I’m taking my grandmother to the airport.'],
['The bus leaves at 8.15','расписание → Present Simple + at','The departure time of the bus is 8.15.'],
['if / when + настоящее','после if и when — без will','If it rains tomorrow, we’ll move the picnic indoors.'],
['won’t + V1','отказываюсь · без to','I won’t speak to him again.'],
['would','после «знал, обещал» · if + прошедшее','If you wanted to see everything, it would take you 100 days.'],
['so far · for years','→ have / has been','Millions of tourists have been to Altai so far.'],
['is / are + V3','с чем-то делают всегда','Much of Iceland is covered in lava.'],
['was / were + V3','с чем-то сделали в прошлом','The building was turned into a museum.'],
['worth + -ing','стоит того, чтобы …','Altai caves are worth visiting.'],
['-ist · -or · -er','человек','tourist · visitor · composer']
];
let CD={i:0,flip:false};
function cdHTML(){const c=CARDS[CD.i],n=CARDS.length;
 const face=CD.flip?'<div class="l14Face back" data-l14c="f"><div class="t">'+c[1]+'</div><div class="ex">'+c[2]+'</div></div>':'<div class="l14Face" data-l14c="f"><div class="w">'+c[0]+'</div></div>';
 return face+'<div class="l14Nav"><button type="button" data-l14c="-1"'+(CD.i===0?' disabled':'')+'>←</button><span>'+(CD.i+1)+' / '+n+'</span><button type="button" data-l14c="1"'+(CD.i===n-1?' disabled':'')+'>→</button></div>'}
function cdInit(){const b=document.querySelector('#l3Panel .l14Cards');if(!b)return;CD={i:0,flip:false};b.innerHTML=cdHTML()}

/* ---------- итоги ---------- */
const DONE=['Speaking · Task 3 · Interview','Task 1 · Reading aloud','Task 2 · Questions','Mistakes · Future · 14','Mistakes · Tenses · 12','EGE 19–24 · 2 texts','EGE 25–29 · 2 texts','Letter 37 · James'];
const HW=['Speaking · Task 3 · new interview','Task 1 · Reading aloud · new text','EGE 19–24 · new text'];
const WRAP='<div class="l14 l14Wrap"><div class="col"><h3>Done today</h3>'+DONE.map(t=>'<div class="it" data-l14="tick"><span class="bx"></span><span>'+t+'</span></div>').join('')+'</div><div class="col"><h3>Homework</h3>'+HW.map(t=>'<div class="hw">• '+t+'</div>').join('')+'</div></div>';

/* ---------- события ---------- */
document.addEventListener('click',e=>{
 const s=e.target.closest('.l14sp [data-l14sp]');if(s){spAct(s);return}
 const c=e.target.closest('.l14Cards [data-l14c]');
 if(c){const v=c.dataset.l14c;if(v==='f')CD.flip=!CD.flip;else{CD.i=Math.max(0,Math.min(CARDS.length-1,CD.i+(+v)));CD.flip=false}
  const b=c.closest('.l14Cards');if(b)b.innerHTML=cdHTML();return}
 const r=e.target.closest('.l14Let .rv');if(r){r.classList.toggle('on');return}
 const t=e.target.closest('.l14 [data-l14]');if(!t)return;
 if(t.dataset.l14==='pred'){const g=t.closest('.l14').querySelector('.l14Pred');g.classList.toggle('show');t.textContent=g.classList.contains('show')?'Hide titles':'Titles'}
 else if(t.dataset.l14==='tick'){t.classList.toggle('on');t.querySelector('.bx').textContent=t.classList.contains('on')?'✓':''}
});
if(typeof window.showL3Panel==='function'){const b=window.showL3Panel;window.showL3Panel=function(i){spStopAll();b(i);cdInit();spInit()}}

/* ---------- шаги урока ---------- */
window.l1411Steps=function(){
 const KH=d=>window.KQ?KQ.kahoot(d,{}):'';
 const FP=(d,o)=>window.KQ?KQ.fipi(d,o):'';
 return [
  ['Warm-up · Speaking · Variant 1','0–12','<div class="l14sp"></div>'],
  ['Future & Passive · правило','12–16',RULE],
  ['Prediction · 4 texts','16–18',PRED_HTML],
  ['Mistakes · Future · 14','18–26',KH(MIS_F)],
  ['Mistakes · Tenses · 12','26–32',KH(MIS_M)],
  ['EGE 19–24 · 2 текста','32–42',FP(G19,{start:19,kind:'gr',title:'Grammar · EGE 19–24'})],
  ['EGE 25–29 · 2 текста','42–50',FP(W25,{start:25,kind:'wf',title:'Word formation · EGE 25–29'})],
  ['Letter 37 · James','50–57',LET_HTML],
  ['Done today · Homework','57–60',WRAP],
  ['Cards · Future & Passive','','<div class="l14Cards"></div>']];
};
})();

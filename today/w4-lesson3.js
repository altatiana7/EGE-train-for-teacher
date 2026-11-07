/* Неделя 4 · урок 3 (07.11.2026) для урока учителя: Mixed review.
   Материалы: предложения из сданных работ ученицы 7–26 окт. (её же задания с сайта), интервью Weekends (ФИПИ, запись из урока 2).
   Все упражнения — по одному вопросу на экране (KQ.kahoot), словообразование — сплошным текстом (KQ.fipi), карточки — как Quizlet. */
(function(){
'use strict';
const root=new URL('../',document.currentScript.src),url=p=>new URL(p,root).href;
const K=rows=>rows.map(r=>({q:r[0],hint:'',opts:r[1],a:r[2],why:r[3]||''}));

/* ---------- Past: Simple / Continuous ---------- */
const PAST=K([
['Two years ago our family ___ to a smaller town.',['moved','had moved','was moving','has moved'],'moved','Two years ago — точное время в прошлом → Past Simple.'],
['Last summer my uncle ___ to fly to Sochi for a conference.',['planned','had planned','has planned','is planning'],'planned','Last summer — закончившееся время → Past Simple.'],
['I ___ to Oslo when I was twenty-one, and I’ve been working there for quite a while now.',['moved','had moved','have moved','was moving'],'moved','when I was twenty-one — точный возраст в прошлом → Past Simple.'],
['At this time last Sunday we ___ in the sea.',['were swimming','swam','had swum','have swum'],'were swimming','At this time last Sunday — «в это время», процесс → Past Continuous.'],
['Other kids ___ lawns for their summer money, and my brother and I were making fishing gear.',['were mowing','mowed','had mowed','mow'],'were mowing','Два действия шли параллельно, вторая часть — were making → Past Continuous.'],
['Gloria Wald sat back in her chair with a small sigh. She ___ to relax listening to her favourite classical music.',['was trying','tried','had tried','has tried'],'was trying','Фон: она сидела и в этот момент пыталась расслабиться → Past Continuous.'],
['Kevin Stone ___ north on the High Road, towards the mountains.',['was driving','drove','driven','had driven'],'was driving','Описание сцены: он ехал, это процесс → Past Continuous. Не driven без have / had!'],
['While I ___, I got the opportunity to be on America’s Next Top Model.',['was recovering','recovered','had recovered','have recovered'],'was recovering','While — «пока» шёл процесс, а потом случилось событие (got) → Past Continuous.'],
['But one night he ___ around the pasture with a flashlight and noticed that lions stayed away.',['was walking','walked','had walked','walks'],'was walking','Он ходил (процесс), и в это время заметил → Past Continuous.'],
['Still, people ___ seriously interested in horoscopes only in the 17th century.',['became','were becoming','had become','have become'],'became','Одно событие в 17 веке → Past Simple.'],
['One day two young scientists ___ to see him.',['came','were coming','had come','have come'],'came','One day — разовое событие → Past Simple.'],
['Later people ___ better ways to dye fabrics, but they still use henna.',['found','were finding','had found','have found'],'found','Later — одно событие после другого → Past Simple.'],
['At that moment our neighbours ___ a snowman in the yard.',['were building','are building','built','had built'],'were building','At that moment + прошлое → процесс → Past Continuous.'],
['It ___ under a bench and looked frightened.',['was sitting','was sat','sat','had sat'],'was sitting','Сидела и выглядела испуганной — состояние в моменте → was sitting.'],
['I ___ my first phone when I was ten.',['got','had got','was getting','have got'],'got','when I was ten — точное время → Past Simple.'],
['While he ___ for it, he practised for three hours a day.',['was preparing','had been preparing','prepared','has prepared'],'was preparing','While + длительное действие в прошлом → Past Continuous.']
]);

/* ---------- Past Perfect + Past Perfect Continuous ---------- */
const PERF=K([
['Somebody ___ it there a few hours earlier.',['had left','had leave','left','has left'],'had left','A few hours earlier — раньше другого прошлого → Past Perfect. Форма: had + V3 (left).'],
['The poor animal ___ anything all day.',['had not eaten','has not eaten','was not eating','will not eat'],'had not eaten','Весь день до того момента ничего не ела → Past Perfect.'],
['When I got to the station, I realised that I ___ my ticket.',['had forgotten','forgot','had forgot','have forgotten'],'had forgotten','Сначала забыл, потом понял → Past Perfect. V3 от forget — forgotten.'],
['I couldn’t pay for lunch because I ___ my wallet at home.',['had left','left','was leaving','have left'],'had left','Сначала оставил кошелёк, потом не смог заплатить → Past Perfect.'],
['I ___ so happy for a long time.',['had not felt','did not feel','was not feeling','has not felt'],'had not felt','V3 от feel — felt (не feelt!). Раньше другого прошлого → Past Perfect.'],
['It was the first time most of us ___ such an ancient city.',['had seen','saw','have seen','were seeing'],'had seen','It was the first time → Past Perfect.'],
['We ___ for forty minutes when the bus finally came.',['had been waiting','were waiting','waited','have been waiting'],'had been waiting','Ждали сорок минут ДО того, как пришёл автобус → Past Perfect Continuous.'],
['The ground was white in the morning: it ___ all night.',['had been snowing','was snowing','snowed','has been snowing'],'had been snowing','Снег шёл всю ночь, а утром мы видим результат → Past Perfect Continuous.'],
['When she finally came inside, she was exhausted: she ___ in the garden since breakfast.',['had been working','has been working','was working','worked'],'had been working','since breakfast + рассказ в прошлом → had been working. Не has!'],
['They ___ for three hours before they found the right road.',['had been driving','had driven','were driving','drove'],'had been driving','for three hours + before → длительность до момента → Past Perfect Continuous.'],
['They began to wait at noon. The doctor came at one. → They ___ for an hour when the doctor came.',['had been waiting','were waiting','waited','have been waiting'],'had been waiting','for an hour when… → had been waiting.']
]);

/* ---------- Present: Perfect / Continuous / Stative ---------- */
const PRES=K([
['Your eyes are red. ___ onions?',['Have you been chopping','Have you chopped','Had you chopped','Did you chop'],'Have you been chopping','Глаза красные СЕЙЧАС, потому что резала лук → Present Perfect Continuous.'],
['My mum ___ Russian for a while, and got interested in the Russian culture.',['has been learning','was learning','learned','has learned'],'has been learning','for a while — процесс, который тянется до сих пор → Present Perfect Continuous.'],
['The amount of plastic junk in the oceans ___ at an alarming rate for the last ten years.',['has been increasing','has increased','was increasing','increases'],'has been increasing','for the last ten years + процесс → has been increasing.'],
['Since then, I ___ a lot about Artificial Intelligence.',['have been thinking','have thought','was thinking','think'],'have been thinking','Since then — с того момента до сих пор → Present Perfect Continuous.'],
['You look hot. — Yes, I ___ tennis for two hours.',['have been playing','have played','played','am playing'],'have been playing','for two hours и результат виден сейчас → have been playing.'],
['Over time, it ___ into a sophisticated social and cultural activity.',['has developed','developed','is developing','had developed'],'has developed','Over time — «со временем, до сегодняшнего дня» → Present Perfect.'],
['“I ___ my key and I can’t get into my house.”',['have lost','had lost','lost','was losing'],'have lost','Результат ЕСТЬ сейчас (не могу войти) → Present Perfect.'],
['I ___ him for five years.',['have known','am knowing','know','knew'],'have known','Know — глагол состояния, в Continuous не ставим: have known.'],
['I ___ what you mean.',['see','am seeing','have been seeing','saw'],'see','See = «понимаю» — глагол состояния → Present Simple.'],
['You ___ pale. Are you all right?',['look','are looking','have looked','looked'],'look','Look = «выглядишь» — состояние → Present Simple.'],
['Most critics ___ her the best writer of her generation.',['consider','have considered','are considering','considered'],'consider','Consider = «считают» — состояние/мнение → Present Simple.'],
['Our summer holidays ___ to an end.',['are coming','is coming','come','have come'],'are coming','Holidays — множественное число → are. «Подходят к концу» → Continuous.']
]);

/* ---------- Future: выбор формы ---------- */
const FUT=K([
['The phone is ringing. — OK, I ___ it.',['’ll answer','’m answering','am going to answer','answer'],'’ll answer','Решение принято ПРЯМО СЕЙЧАС → will.'],
['I’ve decided: I ___ medicine at university.',['’m going to study','’ll study','study','have studied'],'’m going to study','Решение принято ЗАРАНЕЕ (I’ve decided) → be going to.'],
['Be careful! You ___ that glass.',['are going to drop','will drop','drop','are dropping'],'are going to drop','Вижу, что вот-вот случится → be going to.'],
['I can’t come on Saturday — I ___ my grandmother to the airport. It’s all arranged.',['’m taking','’ll take','took','have taken'],'’m taking','It’s all arranged — договорённость → Present Continuous.'],
['We ___ visit our cousins next weekend.',['are going to','going to','are going','will to'],'are going to','Нужен глагол be: are going to + глагол.'],
['This year I ___ in Brazil for New Year.',['am going to be','have been','am being','was'],'am going to be','План на будущее → am going to be. Не have been!'],
['Most of my classmates ___ somewhere, but I won’t be able to join them. ',['are going to travel','are going to fly','have travelled','were travelling'],'are going to travel','В задании дано слово TRAVEL — берём его, а не своё.'],
['Drop by in the evening, and I ___ you a copy. ',['will give','will drop','gave','have given'],'will give','В задании дано слово GIVE — берём его. Drop by уже есть в тексте.'],
['But that means you ___ to get up early. ',['will have to','will have','have','are having'],'will have to','«Придётся» = have to. В будущем: will have to.'],
['I refuse to speak to him again. → I ___ to him again.',['won’t speak','will not to speak','don’t speak','won’t to speak'],'won’t speak','Won’t = will not. После will / won’t — глагол без to.'],
['My intention is to learn Spanish next year. → I ___ Spanish next year.',['am going to learn','am going to','am going learn','going to learn'],'am going to learn','be going to + глагол: am going to learn.'],
['The departure time of the bus is 8.15. → The bus ___ 8.15.',['leaves at','leaves','is leaving','will leave at'],'leaves at','Расписание → Present Simple. И не забываем предлог at.']
]);

/* ---------- Future Continuous + when / if ---------- */
const FUT2=K([
['If you have convenient ways to organize your clothes or cosmetics, they ___ in a total mess.',['will not be lying','won’t lie','are not lying','do not lie'],'will not be lying','Будущее как процесс (будут лежать) → will not be lying.'],
['Everybody ___ fun in the sun, and I’ll be reading books and solving math problems.',['will be having','will have','is having','has had'],'will be having','Рядом I’ll be reading → тоже Future Continuous: will be having.'],
['Yes, and I ___ again as Lisa, but this will be our last season.',['will be starring','will star','am going to star','have starred'],'will be starring','Весь сезон в роли — длительный процесс в будущем → will be starring.'],
['You ___ on the stylization, pace and plot of a novel at a coming conference.',['will be speaking','will speak','are speaking','speak'],'will be speaking','Программа конференции, процесс в будущем → will be speaking.'],
['So, I guess that’s what I ___ with this show now.',['will be doing','will do','have done','did'],'will be doing','Ближайшее время и дальше → will be doing.'],
['I ___ the role for about a year on this current contract.',['will be singing','will sing','have sung','sang'],'will be singing','for about a year → длительность в будущем → will be singing.'],
['The field ___, as people now live longer.',['will be growing','is growing','has grown','grew'],'will be growing','Рост будет продолжаться → will be growing.'],
['…and whether you ___ either very high or very low-lying places.',['will be visiting','are visiting','have visited','visited'],'will be visiting','Будет ли ты посещать (планы на поездку) → will be visiting.'],
['I’ll let you know about my impressions when I ___ back.',['get','will get','would get','am going to get'],'get','После when про будущее — Present Simple, без will.'],
['When you ___ in Moscow, you’ll check into the hotel and have some rest.',['arrive','will arrive','are going to arrive','arrived'],'arrive','After when → Present Simple. Will — только в главной части.'],
['If she ___ it, it will be easier for her to control her behaviour.',['finds','will find','would find','found'],'finds','After if → Present Simple.'],
['If it’s hot — I’ll relax, and if it ___ cold — I’ll wake up.',['is','will be','would be','was'],'is','After if → Present Simple.'],
['If it ___ tomorrow, we’ll move the picnic indoors.',['rains','will rain','would rain','is raining'],'rains','After if → Present Simple.']
]);

/* ---------- Passive: форма ---------- */
const PASS=K([
['No, it is Basque, the language which ___ in northwestern Spain and southwestern France.',['is spoken','are spoken','spoke','has spoken'],'is spoken','Which → language (один язык) → is. Ищем, КТО делает: язык — один.'],
['The secret of success. He ___ to be a genius by his contemporaries.',['was considered','were considered','considered','is considering'],'was considered','He → was. Современники жили в прошлом → was considered.'],
['After the French Revolution the building ___ into a museum.',['was turned','were turned','turned','has turned'],'was turned','Building — одно, After the Revolution — прошлое → was turned.'],
['Pelmeni. This dish ___ from minced meat and dough.',['is prepared','was prepared','prepares','has prepared'],'is prepared','Блюдо готовят из мяса и теста всегда → Present Simple Passive: is prepared.'],
['The print brush ___ to public in 2011.',['was demonstrated','were demonstrated','demonstrated','is demonstrated'],'was demonstrated','Brush — одна, in 2011 — прошлое → was demonstrated.'],
['Khokhloma spoons. They ___ of wood only and have beautiful red and golden ornaments.',['are made','were made','make','have made'],'are made','They — много (are). Рядом have → настоящее → are made.'],
['The Palace of Westminster is the meeting place of the UK Parliament, where important laws and rules ___. ',['are made','made','are making','have made'],'are made','Laws и rules — множ. число; их принимают (кто-то делает с ними) → are made.'],
['The city ___ around the 8th century BC and became famous because of its high-quality pottery.',['was founded','was found','is founded','has found'],'was founded','found = «нашёл», founded = «основал». «Город основали» → was founded.'],
['They are also able to produce a lot of sounds, which ___ by them to express a huge variety of feelings.',['are used','is used','use','used'],'are used','Which → sounds (много) → are used.'],
['People ___ henna for centuries.',['have used','have been used','has used','are used'],'have used','Люди использовали хну — они делают, значит Active: have used. Не have been used!']
]);

/* ---------- Найди ошибку ---------- */
const ERR=K([
['The city was found around the 8th century BC and became famous because of its high-quality pottery.',['Верно','Ошибка'],'Ошибка','Нужно was founded («основан»).'],
['They are also able to produce a lot of sounds, which is used by them to express a huge variety of feelings and emotions.',['Верно','Ошибка'],'Ошибка','Which → sounds (много), значит are used.'],
['These creatures are given human qualities as they can talk, think and act like humans.',['Верно','Ошибка'],'Верно','Креатурам дают качества → are given. Всё верно.'],
['People have been used henna for centuries.',['Верно','Ошибка'],'Ошибка','Люди использовали хну: have used (Active).'],
['They are allowed to take whatever they could carry themselves.',['Верно','Ошибка'],'Ошибка','Are allowed — настоящее, значит whatever they can carry.'],
['We going to visit our cousins next weekend.',['Верно','Ошибка'],'Ошибка','Пропущено are: We are going to visit.'],
['I am knowing him for five years.',['Верно','Ошибка'],'Ошибка','Know — состояние, не Continuous: I have known him for five years.'],
['Last night I have watched a great film.',['Верно','Ошибка'],'Ошибка','Last night — точное время: I watched.'],
['Other kids were mowing lawns for their summer money, and my brother and I were making fishing gear.',['Верно','Ошибка'],'Верно','Два параллельных процесса в прошлом → Past Continuous. Верно.'],
['And as they did every year, the women were wearing long gowns or dressy cocktail dresses, and the men were wearing black-tie.',['Верно','Ошибка'],'Верно','Описание сцены, процесс → were wearing. Верно.'],
['At this time last Sunday we had swum in the sea.',['Верно','Ошибка'],'Ошибка','At this time last Sunday → were swimming.'],
['When I got to the station, I realised that I forgot my ticket.',['Верно','Ошибка'],'Ошибка','Сначала забыл, потом понял → had forgotten.']
]);

/* ---------- Словообразование 25–29 (сплошным текстом) ---------- */
const WF=[
{q:'This was quite an ___ for a boy of this age.',b:'ACHIEVE',a:'achievement',why:'ach-ie-ve-ment: сначала ie, потом ve.'},
{q:'There are other less well-known ___ of our country in the space race.',b:'ACHIEVE',a:'achievements',why:'Other … of our country → много → achievements.'},
{q:'Fyodor Konyukhov eagerly shares the ___ of his voyages with the help of his wonderful paintings and exciting books.',b:'IMPRESS',a:'impressions',why:'Нужно существительное, не impressive.'},
{q:'However, the Hermitage is interesting not only because of the ___ paintings kept there.',b:'PRICE',a:'priceless',why:'priceless = бесценный. Суффикс -less (без), не -ful.'},
{q:'The Winter Palace used to be the official ___ for the Romanov Tsars.',b:'RESIDE',a:'residence',why:'residence = резиденция (место), resident = житель.'},
{q:'___, students of Moscow State University can use the university library too.',b:'NATURAL',a:'Naturally',why:'Наречие: natural + ly = naturally (две l).'},
{q:'In fact, it has one of the biggest book ___ in Russia.',b:'COLLECT',a:'collections',why:'one of the biggest … → множественное число.'},
{q:'He mastered biology, anatomy, surgery and physiology to ___.',b:'PERFECT',a:'perfection',why:'to + существительное: perfect → perfection.'},
{q:'Now it is an ___ museum which demonstrates the history of the exploration of the Arctic.',b:'EXCITE',a:'exciting',why:'-ing: музей вызывает интерес. -ed — тот, кто испытывает.'},
{q:'Accessories such as stylish hats or ___ woolen scarves can make an outfit interesting.',b:'COLOUR',a:'colourful',why:'Британское colour → colourful.'},
{q:'Russian ___ were the first to take a photo of the dark side of the Moon.',b:'SCIENCE',a:'scientists',why:'Нужны люди и множественное число: scientists.'},
{q:'Russian astronauts are ___ all over the world.',b:'FAME',a:'famous',why:'fame → famous (e выпадает).'}
];

/* ---------- Карточки Quizlet ---------- */
const CARDS=[
['ACHIEVE','achievement','существительное','This was quite an achievement for a boy of this age. Не achivement!'],
['IMPRESS','impression(s)','существительное','…shares the impressions of his voyages. Не impressive!'],
['PRICE','priceless','прилагательное','…the priceless paintings. -less = без, не priceful.'],
['RESIDE','residence','существительное (место)','…the official residence for the Romanov Tsars. Resident — человек.'],
['NATURAL','naturally','наречие','Naturally, students can use the library too. Не naturaly!'],
['COLLECT','collection(s)','существительное','…one of the biggest book collections in Russia.'],
['PERFECT','perfection','существительное','…to perfection. Не perfecion!'],
['EXCITE','exciting','прилагательное','…an exciting museum. Exciting вызывает, excited испытывает.'],
['COLOUR','colourful','прилагательное','…colourful woolen scarves. Британское colour.'],
['SCIENCE','scientist(s)','существительное (человек)','Russian scientists were the first… Не acientists!'],
['FAME','famous','прилагательное','Russian astronauts are famous all over the world. Не fameous!']
];

/* ---------- стили ---------- */
const st=document.createElement('style');st.textContent=`
.w43Iv{padding:4px 6px}.w43Nums{display:flex;gap:8px;align-items:center;margin-bottom:14px}.w43Nums button{width:42px;height:42px;border-radius:50%;border:1px solid #b7c9e8;background:#fff;color:#0039A6;font-weight:800;font-size:18px;cursor:pointer}.w43Nums button.on{background:#0039A6;color:#fff}.w43Nums span{margin-left:10px;font-weight:800;font-size:18px;color:#0039A6}
.w43Grid{display:grid;grid-template-columns:200px minmax(0,1fr);gap:22px;align-items:center}.w43Ring{width:180px;height:180px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p)*1%),#e5ebf3 0)}.w43Ring>div{width:142px;height:142px;border-radius:50%;background:#fff;display:grid;place-items:center;align-content:center;text-align:center}.w43Ring b{font-size:50px;line-height:1}.w43Ring small{font-size:14px;color:#64748b}.w43Ring.end{background:#D52B1E}
.w43Card{border:1px solid #dbe3ee;border-left:5px solid #0039A6;border-radius:14px;background:#fff;padding:18px 22px;min-height:180px}.w43Card.back{background:#f2f7ff;border-left-color:#D52B1E}.w43Card h4{margin:0 0 6px;font-size:14px;letter-spacing:.6px;text-transform:uppercase;color:#64748b}.w43Card p{margin:0 0 12px;font-size:27px;font-weight:700;line-height:1.35;color:#142337}
.w43Row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:16px}.w43Row button,.w43Card button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:9px 20px;font-weight:800;font-size:17px;cursor:pointer}.w43Row button.prim,.w43Card button.prim{background:#0039A6;color:#fff;border-color:#0039A6}.w43Row button:disabled{opacity:.4}
.w43Cards{max-width:560px;margin:0 auto;padding:4px}.w43Face{border:1px solid #dbe3ee;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(20,35,55,.08);min-height:230px;padding:22px 26px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer;font-family:"PT Serif",Georgia,serif;color:#142337}
.w43Face.back{background:#f2f7ff;border-color:#b7c9e8;align-items:flex-start;text-align:left}.w43Face .w{font-size:38px;font-weight:700;letter-spacing:1px;color:#0039A6}.w43Face .t{font-size:30px;font-weight:700;margin-bottom:6px}.w43Face .pos{font:800 15px/1.2 "Segoe UI",Arial,sans-serif;letter-spacing:.5px;text-transform:uppercase;color:#64748b;margin-bottom:12px}.w43Face .ex{font-size:20px;line-height:1.5}
.w43Nav{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:12px;font:800 18px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}.w43Nav button{width:48px;height:42px;border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;font-size:20px;cursor:pointer}.w43Nav button:disabled{opacity:.35}
.w43Cheat{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;font-family:"PT Serif",Georgia,serif}.w43Cheat section{border:1px solid #dbe3ee;border-top:4px solid #0039A6;border-radius:12px;background:#fff;padding:10px 14px}.w43Cheat h4{margin:0 0 6px;font:800 17px/1.2 "Segoe UI",Arial,sans-serif;color:#0039A6}.w43Cheat table{width:100%;border-collapse:collapse;font-size:17px;line-height:1.4}.w43Cheat td{padding:4px 6px;border-bottom:1px solid #edf1f6;vertical-align:top}.w43Cheat td:first-child{font-weight:700;color:#142337;white-space:nowrap}.w43Cheat p{margin:6px 0 0;font-size:16px;color:#475569}.w43Cheat .bad{color:#D52B1E;font-weight:700}
.w43Log{font-family:"PT Serif",Georgia,serif;font-size:20px;line-height:1.55;max-width:900px;margin:0 auto}.w43Log li{margin:4px 0}
@media(max-width:1000px){.w43Cheat{grid-template-columns:1fr}.w43Grid{grid-template-columns:1fr}}
`;document.head.appendChild(st);

/* ---------- интервью: вопрос звучит, текст только на обороте ---------- */
const IVQ=[["How do you usually spend your weekend?","today/audio/fipi-iv31-q1.mp3"],["What are some popular weekend activities among your friends?","today/audio/fipi-iv31-q2.mp3"],["What are your plans for the coming weekend?","today/audio/fipi-iv31-q3.mp3"],["How do you feel when the weekend is over?","today/audio/fipi-iv31-q4.mp3"],["What would you like to change about your typical weekend?","today/audio/fipi-iv31-q5.mp3"]];
let IV=null;
function ivStop(){if(IV){if(IV.a){IV.a.onended=null;IV.a.pause();IV.a=null}clearInterval(IV.t);IV.t=null}}
function ivHTML(){const q=IV.q[IV.i],n=IV.q.length;
 return '<div class="w43Nums">'+IV.q.map((_,k)=>'<button type="button" class="'+(k===IV.i?'on':'')+'" data-w43n="'+k+'">'+(k+1)+'</button>').join('')+'<span>Вопрос '+(IV.i+1)+' из '+n+'</span></div>'+
 '<div class="w43Grid"><div class="w43Ring'+(IV.left<=0?' end':'')+'" style="--p:'+IV.left/40*100+'"><div><b>'+IV.left+'</b><small>seconds</small></div></div>'+
 (IV.flip?'<div class="w43Card back"><h4>Question '+(IV.i+1)+'</h4><p>'+q[0]+'</p></div>':'<div class="w43Card"><h4>Question audio</h4><p>Listen to the question</p><button type="button" class="prim" data-w43p>Play</button> <button type="button" data-w43p>Replay</button> <button type="button" data-w43s>Stop</button></div>')+'</div>'+
 '<div class="w43Row"><button type="button" data-w43g="-1"'+(IV.i===0?' disabled':'')+'>← Назад</button><button type="button" class="prim" data-w43f>'+(IV.flip?'Скрыть вопрос':'Перевернуть карточку')+'</button><button type="button" data-w43g="1"'+(IV.i===n-1?' disabled':'')+'>Вперёд →</button></div>';}
function ivRender(){const b=document.querySelector('#l3Panel .w43Iv');if(b)b.innerHTML=ivHTML()}
function ivTick(){const r=document.querySelector('#l3Panel .w43Iv .w43Ring');if(!r){ivStop();return}r.style.setProperty('--p',IV.left/40*100);r.querySelector('b').textContent=IV.left;r.classList.toggle('end',IV.left<=0)}
function ivPlay(){ivStop();IV.left=40;ivTick();const q=IV.q[IV.i],go=()=>{IV.t=setInterval(()=>{IV.left=Math.max(0,IV.left-1);ivTick();if(IV.left<=0){clearInterval(IV.t);IV.t=null}},1000)};
 IV.a=new Audio(url(q[1]));IV.a.onended=go;IV.a.play().catch(go)}
function ivInit(){ivStop();const el=document.querySelector('#l3Panel .w43Iv');if(!el){IV=null;return}IV={q:IVQ,i:0,flip:false,left:40,t:null,a:null};el.innerHTML=ivHTML()}
document.addEventListener('click',e=>{const t=e.target.closest('.w43Iv button');if(!t||!IV)return;const d=t.dataset;
 if(d.w43p!==undefined){ivPlay();return}if(d.w43s!==undefined){ivStop();return}
 ivStop();IV.left=40;if(d.w43f!==undefined)IV.flip=!IV.flip;else if(d.w43g!==undefined){IV.i=Math.max(0,Math.min(IV.q.length-1,IV.i+(+d.w43g)));IV.flip=false}else if(d.w43n!==undefined){IV.i=+d.w43n;IV.flip=false}ivRender()});

/* ---------- карточки: одна карточка, слово → переворот ---------- */
let CD={i:0,flip:false};
function cdHTML(){const c=CARDS[CD.i],n=CARDS.length;
 const face=CD.flip?'<div class="w43Face back" data-w43c="f"><div class="t">'+c[1]+'</div><div class="pos">'+c[2]+'</div><div class="ex">'+c[3]+'</div></div>':'<div class="w43Face" data-w43c="f"><div class="w">'+c[0]+'</div></div>';
 return face+'<div class="w43Nav"><button type="button" data-w43c="-1"'+(CD.i===0?' disabled':'')+'>←</button><span>'+(CD.i+1)+' / '+n+'</span><button type="button" data-w43c="1"'+(CD.i===n-1?' disabled':'')+'>→</button></div>';}
function cdRender(){const b=document.querySelector('#l3Panel .w43Cards');if(b)b.innerHTML=cdHTML()}
document.addEventListener('click',e=>{const t=e.target.closest('.w43Cards [data-w43c]');if(!t)return;const v=t.dataset.w43c;
 if(v==='f')CD.flip=!CD.flip;else{CD.i=Math.max(0,Math.min(CARDS.length-1,CD.i+(+v)));CD.flip=false}cdRender()});
function cdInit(){const b=document.querySelector('#l3Panel .w43Cards');if(!b)return;CD={i:0,flip:false};b.innerHTML=cdHTML()}

if(typeof window.showL3Panel==='function'){const base=window.showL3Panel;window.showL3Panel=function(i){base(i);ivInit();cdInit()}}

/* ---------- шпаргалка ---------- */
const CHEAT='<div class="w43Cheat">'+
'<section><h4>Past · 4 вопроса</h4><table>'+
'<tr><td>Simple</td><td>Что случилось? Точное время: <i>ago, last, in 2011, when I was ten</i></td></tr>'+
'<tr><td>Continuous</td><td>Что шло в тот момент? <i>while, at this time last…</i></td></tr>'+
'<tr><td>Perfect</td><td>Что было РАНЬШЕ другого прошлого? <i>had + V3</i></td></tr>'+
'<tr><td>Perfect Cont.</td><td>Сколько тянулось ДО того момента? <i>had been + -ing, for / since</i></td></tr></table>'+
'<p>Форма V3: <i>forgotten, left, felt, seen</i> — не <span class="bad">forgot, feelt</span>.</p></section>'+
'<section><h4>Future · выбор формы</h4><table>'+
'<tr><td>will</td><td>решил сейчас, обещание</td></tr>'+
'<tr><td>be going to</td><td>план заранее / вижу, что вот-вот</td></tr>'+
'<tr><td>Pres. Continuous</td><td>договорились, всё готово</td></tr>'+
'<tr><td>Pres. Simple</td><td>расписание; после <i>when, if</i></td></tr>'+
'<tr><td>will be + -ing</td><td>в это время в будущем ещё идёт процесс</td></tr></table>'+
'<p>После <i>when / if</i> — никогда <span class="bad">will</span>.</p></section>'+
'<section><h4>Passive · формула</h4><table>'+
'<tr><td>Present</td><td>is / are + V3</td></tr>'+
'<tr><td>Past</td><td>was / were + V3</td></tr>'+
'<tr><td>Perfect</td><td>have / has been + V3</td></tr></table>'+
'<p>Сначала найди, о ком речь: <i>one → is / was</i>, <i>many → are / were</i>. Если подлежащее само действует — это Active, не Passive.</p></section>'+
'</div>';

const ERRLOG='<ol class="w43Log"><li><b>Моя форма → верная форма → почему?</b></li>'+
'<li>Past Simple или Continuous: есть точное время или процесс «в этот момент»?</li>'+
'<li>Было ли это раньше другого прошлого? Тогда <i>had</i>.</li>'+
'<li>После <i>when / if</i> — Present Simple.</li>'+
'<li>Состояние (<i>know, see, look, consider</i>) — без -ing.</li>'+
'<li>Суффикс: -ment, -ion, -less, -ful, -ly, -ous. Часть речи, число, правописание.</li></ol>';

window.w4l3Steps=function(){const KH=(d,o)=>KQ.kahoot(d,o||{});
 return [
 ['Warm-up · Interview · Weekends · ФИПИ','0–5','<div class="w43Iv"></div>'],
 ['Past · Simple и Continuous · 16','5–14',KH(PAST)],
 ['Past Perfect · Perfect Continuous · 11','14–21',KH(PERF)],
 ['Present · Perfect, Continuous, Stative · 12','21–29',KH(PRES)],
 ['Future · выбор формы · 12','29–36',KH(FUT)],
 ['Future Continuous + when / if · 13','36–43',KH(FUT2)],
 ['Passive · форма · 10','43–49',KH(PASS)],
 ['Найди ошибку · 12','49–55',KH(ERR)],
 ['Словообразование 25–29 · 12','55–60',KQ.fipi(WF,{start:25,kind:'wf',title:'Word formation · review'})],
 ['Cards · Word formation','','<div class="w43Cards"></div>'],
 ['Шпаргалка · Past, Future, Passive','',CHEAT],
 ['Error log','',ERRLOG]
];};
})();

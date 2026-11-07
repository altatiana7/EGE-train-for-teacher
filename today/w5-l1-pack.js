/* Неделя 5 · урок 1 (09.11.2026): комплект Татьяны —
   чтение вслух (10 текстов с паузами), чек-лист письма 37, Passive · 20, Future · 20.
   Формат: чтение — один текст на экране, кольцо-таймер 1:30 + 1:30; Passive/Future — KQ.kahoot. */
(function(){
'use strict';
const K=rows=>rows.map(r=>({q:r[0],hint:r[1],opts:r[2],a:r[3],why:r[4]||''}));

const PASSIVE=K([
['The bridge ___ in 1932.','BUILD',['was built','is built','built','has been built'],'was built','Год в прошлом → Past Simple Passive: was + V3.'],
['English ___ in many countries.','SPEAK',['speaks','is spoken','was spoken','is speaking'],'is spoken','Факт вообще → Present Simple Passive: is + V3.'],
['The letters ___ yesterday.','SEND',['was sent','sent','were sent','are sent'],'were sent','Letters — множественное → were; yesterday → прошлое.'],
['This museum ___ in 1852.','OPEN',['is opened','was opened','was opening','has been opened'],'was opened','Год в прошлом → was + V3.'],
['The room ___ every day.','CLEAN',['cleans','is cleaning','is cleaned','was cleaned'],'is cleaned','Every day → Present Simple Passive.'],
['The cake ___ by my mum.','MAKE',['was made','made','was making','has made'],'was made','By my mum — кто сделал; торт сделан → was + V3.'],
['The tickets ___ online.','BUY',['buy','are buying','is bought','are bought'],'are bought','Tickets — множественное → are + V3.'],
['The car ___ last week.','REPAIR',['is repaired','was repaired','repaired','has been repaired'],'was repaired','Last week → Past Simple; с конкретным прошлым Present Perfect нельзя.'],
['The books ___ to the library.','RETURN',['were returned','was returned','returned','are returning'],'were returned','Books — множественное → were + V3.'],
['The window ___ by the wind.','BREAK',['was broke','broke','was broken','is breaking'],'was broken','V3 от break — broken.'],
['The new school ___ next year.','BUILD',['will build','will be built','is built','was built'],'will be built','Next year → will be + V3.'],
['The results ___ tomorrow.','ANNOUNCE',['will announce','were announced','are announcing','will be announced'],'will be announced','Результаты объявят (не они сами) → will be + V3.'],
['The homework ___ already.','DO',['has been done','has done','is doing','did'],'has been done','Already → Present Perfect Passive: has been + V3.'],
['The city ___ by tourists every summer.','VISIT',['visits','is visited','was visited','is visiting'],'is visited','Every summer → Present Simple Passive.'],
['The problem ___ at the meeting.','DISCUSS',['discussed','is discussing','was discussed','were discussed'],'was discussed','Problem — единственное → was + V3.'],
['The food ___ in the fridge.','KEEP',['keeps','is kept','is keeping','are kept'],'is kept','Food — неисчисляемое, единственное → is kept.'],
['The song ___ by millions of people.','HEAR',['hears','is hearing','are heard','is heard'],'is heard','Song — единственное → is heard.'],
['The letter ___ by post.','SEND',['was sent','sent','was send','were sent'],'was sent','Letter — единственное; V3 от send — sent.'],
['The machine ___ in Germany.','PRODUCE',['produces','are produced','is produced','is producing'],'is produced','Машину производят → is + V3.'],
['The house ___ in the last century.','DESTROY',['is destroyed','was destroyed','destroyed','has been destroyed'],'was destroyed','Прошлый век → Past Simple Passive.']
]);

const FUTURE=K([
['I think it ___ tomorrow.','RAIN',['will rain','is raining','rains','rained'],'will rain','I think → мнение о будущем → will.'],
['Look at the clouds! It ___.','RAIN',['will rain','is going to rain','rains','rained'],'is going to rain','Есть признак сейчас (тучи) → be going to.'],
['I ___ you tomorrow.','CALL',['call','called','will call','have called'],'will call','Обещание, решение → will.'],
['We ___ to the cinema tonight.','GO',['go','are going','went','have gone'],'are going','Договорённость на вечер → Present Continuous.'],
['She ___ 18 next month.','BE',['will be','is','was','has been'],'will be','Факт будущего, от нас не зависит → will.'],
['They ___ a party on Saturday.','HAVE',['had','has','are having','have had'],'are having','Запланировано на субботу → Present Continuous.'],
['I promise I ___ late again.','NOT BE',['am not','won’t be','wasn’t','am not being'],'won’t be','I promise → will / won’t.'],
['The train ___ at 9.','LEAVE',['leaves','left','has left','leave'],'leaves','Расписание → Present Simple.'],
['When I ___ home, I’ll call you.','GET',['will get','get','got','am getting'],'get','После when в будущем — Present Simple, без will.'],
['If it ___, we’ll stay in.','RAIN',['will rain','rained','rains','is rain'],'rains','После if в будущем — Present Simple, без will.'],
['By this time tomorrow I ___.','LEAVE',['will leave','will have left','left','am leaving'],'will have left','By … → действие закончится к моменту → will have + V3.'],
['This time next week I ___ on the beach.','LIE',['will be lying','will lie','am lying','lie'],'will be lying','This time next week → процесс в момент будущего → will be + -ing.'],
['Don’t worry, I ___ you.','HELP',['help','will help','helped','am helping'],'will help','Предложение помощи, решение сейчас → will.'],
['I’ve decided: I ___ medicine.','STUDY',['will study','study','am going to study','studied'],'am going to study','Решение принято заранее → be going to.'],
['The phone is ringing. — I ___ it.','ANSWER',['am going to answer','will answer','answer','answered'],'will answer','Решение в момент речи → will.'],
['Look out! You ___.','FALL',['will fall','fall','fell','are going to fall'],'are going to fall','Видно, что сейчас случится → be going to.'],
['We ___ dinner at 7.','HAVE',['are having','had','has','have had'],'are having','Договорённость на сегодня → Present Continuous.'],
['The bus ___ at 8:15.','ARRIVE',['arrived','arrives','has arrived','arrive'],'arrives','Расписание → Present Simple.'],
['I ___ you tomorrow.','SEE',['see','saw','have seen','will see'],'will see','Будущее, без плана по расписанию → will.'],
['By 2030 I ___ a doctor.','BE',['am','will be','was','have been'],'will be','Будущее → will be.']
]);

const TEXTS=[
['Family','My family is very important to me. / We usually spend weekends together, / either at home or visiting relatives. // My parents work hard, / but they always find time for us. // I have a younger brother, / and we often play games or watch films together. // Family traditions help us stay close. / Every Sunday we have dinner together / and talk about our week. // I think family support is very important, / especially during difficult times. //'],
['School','School is a big part of every teenager’s life. / We spend many hours there every day, / learning new things and meeting friends. // My favourite subjects are English and history. / I enjoy learning about other countries and cultures. // After school I usually do my homework / and then relax with my family. // Sometimes we go for a walk / or watch a film together. // I think school helps us prepare for the future. //'],
['Travelling','Travelling is one of my favourite activities. / I enjoy visiting new places / and learning about different cultures. // Last summer I went to the sea with my family. / We spent two weeks there / and visited many interesting places. // I took a lot of photos / and bought souvenirs for my friends. // Travelling helps us relax / and see the world from a different angle. // I hope to travel more in the future. //'],
['Technology','Technology plays a big role in our lives. / We use smartphones, computers and the Internet every day. // They help us study, work and communicate. / But sometimes we spend too much time online. // It is important to find a balance. / I try to put my phone away / when I do my homework. // Technology is useful, / but we should not forget about real life. //'],
['Friends','Friends are very important for teenagers. / They support us / and help us feel less lonely. // I have a few close friends / whom I trust completely. // We spend time together after school, / go for walks or watch films. // I think a good friend is someone / who listens and understands. // Friendship is one of the most valuable things in life. //'],
['Hobbies','Everyone needs a hobby. / It helps us relax / and do something we enjoy. // My hobby is reading. / I like detective stories and historical novels. // Reading helps me learn new words / and understand the world better. // Some people prefer sports or music. / It does not matter what you choose, / as long as you enjoy it. //'],
['Health','Health is very important. / We should take care of our bodies / and eat healthy food. // Regular exercise helps us stay fit / and feel better. // I try to walk every day / and drink enough water. // Sleep is also important. / Teenagers need about eight hours of sleep / to feel good. // A healthy lifestyle helps us study better. //'],
['Environment','The environment is a big topic today. / Pollution, plastic waste and climate change / are serious problems. // We can all do something to help. / For example, we can recycle / and use less plastic. // Small actions matter. / If everyone tries, / we can make a difference. // I think it is our responsibility / to protect the planet. //'],
['Future plans','After school I want to continue my education. / I am not sure yet / what profession to choose. // But I know that I want to do something / I really enjoy. // I am thinking about medicine or IT. / Both are interesting fields. // I hope to find my path / and build a successful career. //'],
['Russia','Russia is a big and beautiful country. / It has many cities, / rivers and mountains. // I live in Russia / and I am proud of its history and culture. // There are many interesting places to visit, / like Moscow, St Petersburg and Sochi. // I think everyone should travel around their own country / and learn more about it. //']
];

const CHECK=[
['Dear + имя,',1],
['Реакция: Thanks for your email! / It was great to hear from you.',1],
['Ответы на все 3 вопроса друга',1],
['3 своих вопроса по теме из письма',1],
['I hope to hear from you soon.',0],
['Best wishes, + имя',0],
['100–140 слов',0],
['Неформальный стиль: сокращения можно, сленг нельзя',0],
['Без повторов слов, 2–3 связки',0],
['Орфография и пунктуация проверены',0]
];

const st=document.createElement('style');st.textContent=`
.r5Wrap{display:grid;grid-template-columns:minmax(0,1fr) 190px;gap:16px;align-items:start}
.r5Pick{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px}
.r5Pick button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:6px 11px;font:700 14px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.r5Pick button.on{background:#0039A6;color:#fff;border-color:#0039A6}
.r5Text{font-family:"PT Serif",Georgia,serif;font-size:21px;line-height:1.75;color:#142337;background:#fff;border:1px solid #dbe3ee;border-left:5px solid #0039A6;border-radius:12px;padding:14px 18px;margin:0}
.r5Text .p1,.r5Text .p2{color:#b08a3e;font-weight:700;margin:0 4px}.r5Text .p2{color:#b8636c}
.r5Text.clean .p1,.r5Text.clean .p2{display:none}
.r5Side{display:flex;flex-direction:column;align-items:center;gap:9px}
.r5Ring{width:146px;height:146px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p)*1%),#e5ebf3 0)}
.r5Ring>div{width:114px;height:114px;border-radius:50%;background:#fff;display:grid;place-items:center}
.r5Ring b{font-size:36px;color:#0039A6}.r5Ring.end{background:#D52B1E}
.r5Ph{font:800 14px/1.3 "Segoe UI",Arial,sans-serif;color:#0039A6;text-align:center;min-height:36px}
.r5Btns{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.r5Btns button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:7px 12px;font:800 14px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.r5Btns button.prim{background:#0039A6;color:#fff}
.r5Reads{display:flex;gap:6px}.r5Reads span{width:30px;height:30px;border-radius:50%;border:2px solid #b7c9e8;display:grid;place-items:center;font:800 14px Arial;color:#94a3b8}
.r5Reads span.on{background:#5b8f65;border-color:#5b8f65;color:#fff}
.c5{font-family:"PT Serif",Georgia,serif;max-width:900px;margin:0 auto}
.c5 h3{margin:0 0 8px;font-size:20px;color:#0039A6}
.c5List{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.c5List button{display:flex;align-items:center;gap:10px;text-align:left;border:2px solid #dbe3ee;background:#fff;border-radius:11px;padding:10px 12px;font:600 18px/1.3 "PT Serif",Georgia,serif;color:#142337;cursor:pointer}
.c5List button i{flex:0 0 26px;height:26px;border-radius:7px;border:2px solid #94a3b8;display:grid;place-items:center;font:900 16px Arial;font-style:normal;color:#fff}
.c5List button.key{border-color:#e6cf9f;background:#fbf4e6}
.c5List button.on{border-color:#3f9a57;background:#e3f4e7}.c5List button.on i{background:#3f9a57;border-color:#3f9a57}
.c5List button.on i:after{content:"✓"}
.c5Res{margin-top:10px;padding:9px 14px;border-radius:10px;background:#f2f6fc;font:700 17px/1.4 "Segoe UI",Arial,sans-serif;color:#0039A6;text-align:center}
.c5Res.bad{background:#f8e6e6;color:#b04848}.c5Res.ok{background:#e3f4e7;color:#2f7d45}
@media(max-width:760px){.r5Wrap{grid-template-columns:1fr}.c5List{grid-template-columns:1fr}}`;
document.head.appendChild(st);

const mark=x=>x.replace(/\s*\/\/\s*/g,' \u0002 ').replace(/\s*\/\s*/g,' \u0001 ').replace(/\u0002/g,'<span class="p2">||</span>').replace(/\u0001/g,'<span class="p1">|</span>');
const PH=[['Подготовка · про себя',90],['Чтение вслух',90]];
let ph=0,left=90,tm=null,cur=0,reads=0;
const box=()=>document.querySelector('.r5Wrap');
function draw(){const b=box();if(!b)return;const r=b.querySelector('.r5Ring'),p=PH[Math.min(ph,1)];
 r.style.setProperty('--p',Math.max(0,left)/p[1]*100);r.classList.toggle('end',ph>=PH.length);
 r.querySelector('b').textContent=Math.floor(Math.max(0,left)/60)+':'+String(Math.max(0,left)%60).padStart(2,'0');
 b.querySelector('.r5Ph').textContent=ph>=PH.length?'Время вышло':p[0];
 b.querySelectorAll('.r5Reads span').forEach((s,k)=>s.classList.toggle('on',k<reads))}
function stop(){if(tm){clearInterval(tm);tm=null}}
function go(p){stop();ph=p;left=PH[p][1];draw();tm=setInterval(()=>{if(!box()){stop();return}left--;
 if(left<=0){if(ph===1)reads=Math.min(3,reads+1);ph++;if(ph<PH.length)left=PH[ph][1];else stop()}draw()},1000)}
function show(i){stop();cur=i;ph=0;left=90;reads=0;const b=box();if(!b)return;
 b.querySelector('.r5Text').innerHTML='<b>'+TEXTS[i][0]+'.</b> '+mark(TEXTS[i][1]);
 b.querySelectorAll('.r5Pick button').forEach((x,k)=>x.classList.toggle('on',k===i));
 b.querySelector('[data-r5="start"]').textContent='Старт';draw()}

function readHTML(){stop();cur=0;ph=0;left=90;reads=0;
 return '<div class="r5Wrap"><div><div class="r5Pick">'+TEXTS.map((t,k)=>'<button type="button" data-r5t="'+k+'"'+(k?'':' class="on"')+'>'+(k+1)+' · '+t[0]+'</button>').join('')+'</div>'+
 '<p class="r5Text"><b>'+TEXTS[0][0]+'.</b> '+mark(TEXTS[0][1])+'</p></div>'+
 '<div class="r5Side"><div class="r5Ring" style="--p:100"><div><b>1:30</b></div></div><div class="r5Ph">'+PH[0][0]+'</div>'+
 '<div class="r5Btns"><button type="button" class="prim" data-r5="start">Старт</button><button type="button" data-r5="skip">Читать</button><button type="button" data-r5="stop">Стоп</button></div>'+
 '<div class="r5Reads"><span>1</span><span>2</span><span>3</span></div>'+
 '<div class="r5Btns"><button type="button" data-r5="marks">Паузы</button><button type="button" data-r5="read">+1 прочтение</button></div></div></div>'}

function checkHTML(){
 return '<div class="c5"><h3>Перед сдачей письма — по пунктам</h3><div class="c5List">'+
 CHECK.map((c,k)=>'<button type="button" data-c5="'+k+'" class="'+(c[1]?'key':'')+'"><i></i><span>'+c[0]+'</span></button>').join('')+
 '</div><div class="c5Res">Жёлтые пункты обязательны: если хоть один не выполнен — письмо переписывается.</div></div>'}
function checkRes(w){const on=[...w.querySelectorAll('[data-c5]')].map(b=>b.classList.contains('on'));const key=on.slice(0,4).every(Boolean),all=on.every(Boolean);
 const r=w.querySelector('.c5Res');r.className='c5Res'+(all?' ok':key?'':' bad');
 r.textContent=all?'Готово к сдаче: все 10 пунктов.':key?'Обязательные пункты есть. Осталось: '+on.filter(x=>!x).length+'.':'Не хватает обязательного пункта — письмо переписывается.'}

document.addEventListener('click',e=>{
 const t=e.target.closest('.r5Wrap [data-r5t]');if(t){show(+t.dataset.r5t);return}
 const a=e.target.closest('.r5Wrap [data-r5]');if(a){const k=a.dataset.r5;
  if(k==='start'){go(0);a.textContent='Заново'}else if(k==='skip'){go(1)}else if(k==='stop'){stop()}
  else if(k==='marks'){box().querySelector('.r5Text').classList.toggle('clean')}
  else if(k==='read'){reads=reads>=3?0:reads+1;draw()}return}
 const c=e.target.closest('.c5 [data-c5]');if(c){c.classList.toggle('on');checkRes(c.closest('.c5'))}
});

window.w5l1Pack=function(){return {
 read:['Чтение вслух · 10 текстов','0–7',readHTML()],
 rest:[
  ['Письмо 37 · чек-лист','3',checkHTML()],
  ['Passive · 20','15',KQ.kahoot(PASSIVE,{})],
  ['Future · 20','15',KQ.kahoot(FUTURE,{})]
 ]}};
})();

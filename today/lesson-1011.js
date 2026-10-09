/* Урок 11 октября · Времена «сейчас» + блок «Россия» (holidays and traditions).
   Шаги слева, один шаг справа, всё на одном экране. Ничего не сохраняется: каждый раз открывается с шага 1.
   Старый урок (Week 2 · Lesson 3 · Past) остаётся в today/lesson.js. */
(function(){
'use strict';
const base=new URL('../',document.currentScript.src),url=p=>new URL(p,base).href;

const style=document.createElement('style');
style.textContent=`
.al{position:fixed;inset:38px 0 0;z-index:100;background:#f4f6f9;color:#142337;display:flex;flex-direction:column;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1.4}
.al[hidden]{display:none}
.al *{box-sizing:border-box}
.al button,.al input{font:inherit}
.al button{cursor:pointer}
.al :focus-visible{outline:3px solid #76a9f5;outline-offset:1px}
.alTop{display:flex;align-items:center;gap:10px;background:#fff;border-bottom:1px solid #d9e1ec;padding:5px 12px}
.alTop h3{margin:0;font-size:19px;color:#142337;white-space:nowrap}
.alTop small{font-size:16px;color:#53657a;white-space:nowrap}
.alFill{flex:1}
.alBtn{background:#fff;color:#0039a6;border:1px solid #b7c9e8;border-radius:8px;padding:6px 14px;font-weight:700;font-size:16px;white-space:nowrap}
.alBtn.prim{background:#0039a6;color:#fff;border-color:#0039a6}
.alBtn.big{font-size:18px;padding:10px 18px}
.alBtn:disabled{opacity:.4;cursor:default}
.alWrap{flex:1;min-height:0;display:grid;grid-template-columns:214px minmax(0,1fr);gap:10px;padding:8px 10px}
.alSteps{overflow:auto;display:flex;flex-direction:column;gap:5px}
.alSteps button{display:grid;grid-template-columns:28px 1fr;gap:8px;align-items:center;text-align:left;background:#fff;border:1px solid #d5deea;border-left:4px solid #0039a6;border-radius:8px;padding:6px 8px;font-size:16px;font-weight:700;color:#142337;line-height:1.25}
.alSteps button i{font-style:normal;width:28px;height:28px;border-radius:50%;background:#e8eef7;color:#0039a6;font-size:15px;display:grid;place-items:center}
.alSteps button em{display:block;font-style:normal;font-weight:400;font-size:15px;color:#53657a}
.alSteps button.on{background:#e6f0ff;border-left-color:#d52b1e}
.alSteps button.on i{background:#0039a6;color:#fff}
.alPanel{min-width:0;min-height:0;display:flex;flex-direction:column;background:#fff;border:1px solid #d9e1ec;border-radius:12px;overflow:hidden}
.alBody{flex:1;min-height:0;overflow:auto;padding:7px 12px 5px}
.alNav{display:flex;align-items:center;gap:10px;border-top:1px solid #d9e1ec;padding:5px 12px;background:#fbfcfe}
.alNav span{font-size:16px;color:#53657a}
.alTask{font-size:17px;color:#53657a;margin:0 0 6px}
.alTask b{color:#142337}
.alTwo{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);gap:14px;height:100%;min-height:0}
.alTwo>div{min-height:0;min-width:0}
.alText{background:#f7f9fc;border:1px solid #d9e1ec;border-radius:10px;padding:6px 12px;font-size:17px;line-height:1.36;overflow:auto;max-height:100%}
.alText h4{margin:0 0 4px;font-size:18px;color:#0039a6}
.alText mark{border-radius:4px;padding:0 2px;color:inherit}
.alText mark.F{background:#cfe6ff}.alText mark.P{background:#ffd3e2}.alText mark.R{background:#cdefc9}.alText mark.D{background:#ffe7a8}
.alLegend{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;font-size:15px}
.alLegend span{border-radius:6px;padding:1px 8px;font-weight:700}
.alLegend .F{background:#cfe6ff}.alLegend .P{background:#ffd3e2}.alLegend .R{background:#cdefc9}.alLegend .D{background:#ffe7a8}
.alRow{border:1px solid #d5deea;border-left:4px solid #0039a6;border-radius:10px;padding:5px 10px;margin-bottom:6px;background:#fff}
.alRow.ok{border-left-color:#26724d;background:#f6fcf8}
.alRow.bad{border-left-color:#bf322a;background:#fffaf9}
.alQ{font-size:19px;line-height:1.3;color:#142337}
.alQ b.n{color:#0039a6}
.alCtl{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:5px}
.alChip{background:#fff;color:#142337;border:1px solid #9fb4d6;border-radius:8px;padding:4px 12px;font-weight:700;font-size:17px}
.alChip:hover:not(:disabled){background:#eef4ff}
.alChip.ok{background:#e3f5ea;border-color:#26724d;color:#1d5a3c}
.alChip.no{background:#ffe9e6;border-color:#bf322a;color:#9a251f}
.alChip:disabled{cursor:default}
.alFb{margin-top:4px;font-size:16px;line-height:1.35;color:#3d4d61;min-height:22px}
.alFb b.g{color:#1d5a3c}.alFb b.r{color:#9a251f}
.alPages{display:flex;gap:6px;align-items:center;margin:0 0 6px}
.alPages button{border:1px solid #b7c9e8;border-radius:8px;background:#fff;color:#0039a6;font-weight:700;font-size:16px;padding:4px 12px}
.alPages button.on{background:#0039a6;color:#fff;border-color:#0039a6}
.alIn{width:210px;margin:0 4px;border:1px solid #9fb4d6;border-radius:8px;padding:4px 9px;font-size:18px;color:#142337;background:#fff}
.alGap{display:inline-block;min-width:70px;border-bottom:2px solid #142337;margin:0 3px;text-align:center}
.alGap.fill{border-bottom-color:#26724d;color:#1d5a3c;font-weight:700;padding:0 4px}
.alVerb{display:inline-block;font-size:16px;font-weight:700;color:#0039a6;background:#e8eef7;border-radius:6px;padding:1px 7px;margin-right:4px;vertical-align:2px}
.alTag{display:inline-block;border-radius:8px;padding:3px 10px;font-weight:700;font-size:16px;color:#142337;background:#fff1b8;margin-right:6px}
.alPic{display:block;width:100%;height:100%;padding:0;border:0;background:none;cursor:zoom-in}
.alPic img{display:block;width:100%;height:100%;object-fit:contain;object-position:left top}
.alZoom{position:fixed;inset:0;z-index:200;background:#0b1626;display:flex;align-items:center;justify-content:center;cursor:zoom-out}
.alZoom img{max-width:100%;max-height:100%;object-fit:contain}
.alZoom .alBtn{position:absolute;top:8px;right:10px}
.alCard{border:1px solid #d5deea;border-top:4px solid #0039a6;border-radius:10px;padding:8px 12px;background:#fbfcfe;margin-bottom:8px}
.alCard h5{margin:0 0 4px;font-size:18px;color:#142337}
.alCard p{margin:0 0 4px;font-size:17px}
.alCard .en{font-weight:700;color:#0039a6;font-size:18px}
.alCards{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.alPlayer{border:1px solid #d5deea;border-radius:10px;padding:6px 10px;background:#fbfcfe;margin-bottom:6px}
.alPlayer .st{font-size:16px;color:#53657a;margin-left:4px}
.alList{margin:0;padding-left:22px}
.alList li{font-size:17px;margin-bottom:3px}
.alScore{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 8px}
.alScore div{border:1px solid #d5deea;border-radius:10px;padding:6px 10px;background:#fbfcfe}
.alScore b{display:block;font-size:22px;color:#0039a6}
.alScore span{font-size:15px;color:#53657a}
@media(max-width:900px){.alWrap{grid-template-columns:1fr;overflow:auto}.alSteps{flex-direction:row;flex-wrap:wrap;overflow:visible}.alSteps button em{display:none}.alTwo,.alCards{grid-template-columns:1fr;height:auto}.alPanel{min-height:75vh}.alScore{grid-template-columns:1fr 1fr}.alIn{width:170px}}
`;
document.head.append(style);

/* ---------- материал урока ---------- */
const STEPS=[
 ['Разминка · картинка','5 минут'],
 ['Времена · тренажёр','15 минут'],
 ['Чтение · Maslenitsa','12 минут'],
 ['Та же Масленица — другая картинка','8 минут'],
 ['Аудирование · Dasha','15 минут'],
 ['Итог и домашка','5 минут']
];
/* Текст берётся из блока «Россия» (fipi/data4.js, тема ru-holidays); ниже запасная копия. */
const READ_COPY="Maslenitsa is one of the oldest and merriest holidays in Russia. It is celebrated at the end of winter and lasts a whole week. In ancient times people believed that the celebration helped to drive away the cold and to welcome the spring sun. The main dish of the week is blini, thin round pancakes which look like the sun. Families bake them every day and serve them with butter, sour cream, honey or jam. Each day of the week has its own name and customs. People visit their relatives, ride on sledges, sing folk songs and take part in outdoor games. In many towns there are fairs where visitors can buy handmade souvenirs and taste hot tea from a samovar. On the last day, which is called Forgiveness Sunday, people ask each other for forgiveness. In the evening a large straw figure of winter is burnt on a bonfire.";
function readText(){const t=(window.FIPI_TOPICS||[]).find(x=>x.id==='ru-holidays');return (t&&t.read)||READ_COPY}
const TFN={T:'True',F:'False',N:'Not stated'};
const READ_Q=[
 ['Maslenitsa is celebrated at the beginning of winter.','F','В тексте: «at the end of winter».'],
 ['The holiday lasts seven days.','T','В тексте: «lasts a whole week».'],
 ['Entrance to the Maslenitsa fairs is free.','N','Про плату за вход в тексте ничего нет.'],
 ['People eat blini only with honey.','F','В тексте: «butter, sour cream, honey or jam».'],
 ['Maslenitsa is the favourite holiday of Russian teenagers.','N','Про подростков в тексте ничего нет.'],
 ['On the last day people ask each other for forgiveness.','T','В тексте: «ask each other for forgiveness».']
];
const PICS={F:'Обычно, всегда',P:'В эту минуту',R:'Уже готово',D:'Сказано, сколько уже'};
const FORM={F:'V / V-s',P:'am / is / are + V-ing',R:'have / has + V3',D:'have / has been + V-ing'};
/* В тексте: Families bake blini every day. Те же блины — другие картинки. */
const TURN=[
 {s:'Look! Grandma ___ blini in the kitchen.',b:'bake',f:'is baking',alt:["'s baking"],p:'P',why:'Look! — это видно прямо в эту минуту.'},
 {s:'We can eat now. Grandma ___ twenty blini.',b:'bake',f:'has baked',alt:["'s baked"],p:'R',why:'Двадцать блинов готовы, можно есть. Что сделала?'},
 {s:'Grandma ___ blini since morning, and she is still cooking.',b:'bake',f:'has been baking',alt:["'s been baking"],p:'D',why:'since morning — назван срок, и она всё ещё печёт.'},
 {s:'Every year our family ___ relatives during Maslenitsa.',b:'visit',f:'visits',p:'F',why:'Every year — так бывает всегда, традиция.'}
];
/* Аудирование: авторский текст по теме «Россия», озвучка браузера. Пары [текст, картинка] — глаголы для разбора после прослушивания. */
const LISTEN=[
 'Hi! My name is Dasha, and I live in Suzdal, an old Russian town.',
 'Every year our town {celebrates|F} Maslenitsa with a big fair in the main square.',
 'Right now I {am standing|P} in the kitchen with my grandmother.',
 'We {are baking|P} blini for the fair.',
 'We {have been cooking|D} since seven o\'clock this morning, and I am a little tired.',
 'We {have already made|R} sixty blini, and my brother {has eaten|R} five of them!',
 'My father is not helping us today.',
 'He {is building|P} a snow fortress for the children in the yard.',
 'Tourists usually {come|F} to Suzdal for this holiday.',
 'This year the weather is cold but sunny, so we {are waiting|P} for a lot of guests.'
];
const LISTEN_Q=[
 ['Dasha lives in a big modern city.','F','Она говорит: «an old Russian town».'],
 ['Dasha and her grandmother are baking blini at the moment.','T','«Right now… we are baking blini».'],
 ['They started cooking at seven in the morning.','T','«…since seven o\'clock this morning».'],
 ['They have made a hundred blini.','F','«We have already made sixty blini».'],
 ['Dasha\'s mother is working at the fair today.','N','Про маму в записи ничего нет.'],
 ['The family is going to sell the blini.','N','Блины для ярмарки, но про продажу не сказано.']
];
const WARM=[
 ['Обычно, всегда','What do you usually do in the evening?','I usually …'],
 ['В эту минуту','What are you doing right now?','Right now I am …'],
 ['Уже готово','What have you done today?','Today I have …'],
 ['Сказано, сколько уже','How long have you been learning English?','I have been learning English for …']
];

/* ---------- состояние (только в памяти) ---------- */
let S=null,root=null;
const esc=v=>String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function fresh(){return{step:0,rp:0,lp:0,tf:{},x:{},zoom:false,script:false,legend:false,plays:0,playing:false,check:'',focus:null}}
function norm(v){return String(v||'').toLowerCase().replace(/[’`]/g,"'").replace(/[.!?]+$/,'').replace(/\s+/g,' ').trim()}
function stopSpeech(){try{if(window.speechSynthesis)speechSynthesis.cancel()}catch(e){}if(S)S.playing=false}
function tfScore(k,list){return list.filter((q,i)=>S.tf[k+i]===q[1]).length}
function tfDone(k,list){return list.filter((q,i)=>S.tf[k+i]).length}

function tfRows(k,list,page){
 return list.slice(page*3,page*3+3).map((q,j)=>{
  const i=page*3+j,pick=S.tf[k+i],ok=pick===q[1];
  const chips=['T','F','N'].map(c=>'<button type="button" class="alChip" data-a="tf" data-k="'+k+i+'" data-v="'+c+'">'+TFN[c]+'</button>').join('');
  const fb=pick?(ok?'<b class="g">Верно: '+TFN[q[1]]+'.</b> ':'<b class="r">Нет, это '+TFN[q[1]]+'.</b> ')+esc(q[2]):'';
  return '<div class="alRow '+(pick?(ok?'ok':'bad'):'')+'"><div class="alQ"><b class="n">'+(i+1)+'.</b> '+esc(q[0])+'</div>'+(pick?'<div class="alFb">'+fb+'</div>':'<div class="alCtl">'+chips+'</div>')+'</div>';
 }).join('');
}
function pages(k,cur,list){
 return '<div class="alPages">'+[0,1].map(p=>'<button type="button" class="'+(cur===p?'on':'')+'" data-a="page" data-k="'+k+'" data-v="'+p+'">'+(p*3+1)+'–'+(p*3+3)+'</button>').join('')+'<span class="alTask" style="margin:0 0 0 6px">Верно: <b>'+tfScore(k,list)+'</b> из '+list.length+'</span></div>';
}
function listenHTML(marked){
 return LISTEN.map(l=>marked?esc(l).replace(/\{([^|}]+)\|([FPRD])\}/g,(m,t,p)=>'<mark class="'+(S.legend?p:'')+'" style="'+(S.legend?'':'background:#fff1b8')+'">'+t+'</mark>'):esc(l).replace(/\{([^|}]+)\|[FPRD]\}/g,'$1')).join(' ');
}
function listenPlain(){return LISTEN.map(l=>l.replace(/\{([^|}]+)\|[FPRD]\}/g,'$1'))}

function body(){
 const s=S.step;
 if(s===0){
  return '<div class="alTwo"><div><button type="button" class="alPic" data-a="zoom" title="Открыть крупно"><img src="'+url('tense/four-pictures.jpg?v=1')+'" alt="Watch an episode — четыре картинки"></button></div>'+
   '<div style="overflow:auto"><p class="alTask"><b>Картинка</b> (клик — на весь экран): Арина называет четыре вопроса. <b>Потом про себя:</b></p>'+
   WARM.map((w,i)=>'<div class="alRow"><div class="alQ"><span class="alTag">'+(i+1)+' · '+w[0]+'</span>'+esc(w[1])+'</div><div class="alFb">Начало ответа: <b>'+esc(w[2])+'</b></div></div>').join('')+'</div></div>';
 }
 if(s===1){
  return '<p class="alTask"><b>Тренажёр открывается поверх урока.</b> Кнопка «Закрыть» в нём возвращает сюда.</p><div class="alCards">'+
   '<div class="alCard"><h5>1. Круг 2 · Какая картинка?</h5><p>Два-три экрана. «Когда» уже подписано, Арина выбирает картинку и объясняет выбор словом из предложения.</p><button type="button" class="alBtn prim big" data-a="trainer" data-v="2">Открыть круг 2</button></div>'+
   '<div class="alCard"><h5>2. Проверка · 12 предложений</h5><p>Пишет форму сама, как на экзамене. Предложения каждый раз другие. Счёт запишите ниже — это точка отсчёта.</p><button type="button" class="alBtn prim big" data-a="trainer" data-v="4">Открыть Проверку</button></div></div>'+
   '<div class="alRow"><div class="alQ">Счёт в Проверке: <input class="alIn" style="width:90px" type="text" inputmode="numeric" data-in="check" value="'+esc(S.check)+'" placeholder="0–12"> из 12 с первого раза</div><div class="alFb">Цель на ближайшие занятия — 10 из 12 два урока подряд. До этого картинки «вчера» и «завтра» не показываем.</div></div>';
 }
 if(s===2){
  return '<div class="alTwo"><div class="alText"><h4>Maslenitsa</h4>'+esc(readText())+'</div><div style="overflow:auto">'+
   '<p class="alTask"><b>True, False или Not stated?</b> Докажи фразой из текста.</p>'+pages('r',S.rp,READ_Q)+tfRows('r',READ_Q,S.rp)+'</div></div>';
 }
 if(s===3){
  return '<p class="alTask">В тексте: <b>Families bake blini every day</b> — это «обычно». Те же блины, но картинка другая. Напиши форму и нажми Enter.</p>'+
   TURN.map((it,i)=>{
    const a=S.x[i]||{};
    const gap=a.done?'<span class="alGap fill">'+esc(it.f)+'</span>':'<input class="alIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-in="x'+i+'" value="'+esc(a.val||'')+'"><span class="alVerb">'+it.b.toUpperCase()+'</span>';
    let fb='';
    if(a.done)fb=(a.ok&&!a.slip?'<b class="g">Верно.</b> ':a.ok?'<b class="g">Верно со второй попытки.</b> ':'<b class="r">Смотри, как надо.</b> ')+'<span class="alTag">'+PICS[it.p]+'</span>'+esc(it.why);
    else if(a.msg)fb=a.msg;
    return '<div class="alRow '+(a.done?(a.ok&&!a.slip?'ok':'bad'):'')+'"><div class="alQ"><b class="n">'+(i+1)+'.</b> '+esc(it.s).replace('___',gap)+(a.done?'':' <button type="button" class="alBtn prim" data-a="xcheck" data-v="'+i+'">OK</button>')+'</div><div class="alFb">'+fb+'</div></div>';
   }).join('');
 }
 if(s===4){
  const can=!!(window.speechSynthesis&&window.SpeechSynthesisUtterance);
  const left='<div class="alPlayer"><div class="alCtl" style="margin:0"><button type="button" class="alBtn prim" data-a="play"'+(can?'':' disabled')+'>Play</button><button type="button" class="alBtn" data-a="stop"'+(can?'':' disabled')+'>Stop</button>'+
   '<button type="button" class="alBtn" data-a="script">'+(S.script?'Скрыть текст':'Показать текст')+'</button>'+(S.script?'<button type="button" class="alBtn" data-a="legend">'+(S.legend?'Скрыть картинки':'Картинки')+'</button>':'')+
   '<span class="st" data-st>'+(can?(S.playing?'Идёт запись…':'Прослушано раз: '+S.plays+' из 2'):'Нет озвучки: прочитайте текст вслух сами.')+'</span></div></div>'+
   (S.script?'<div class="alText" style="max-height:none;font-size:16px;line-height:1.34">'+listenHTML(true)+(S.legend?'<div class="alLegend">'+['F','P','R','D'].map(p=>'<span class="'+p+'">'+PICS[p]+'</span>').join('')+'</div>':'')+'</div>'
    :'<p class="alTask">Запись звучит два раза. Текст открывается только после ответов: тогда найдите выделенные глаголы и назовите картинку для каждого.</p>');
  return '<div class="alTwo"><div style="overflow:auto">'+left+'</div><div style="overflow:auto">'+
   '<p class="alTask"><b>True, False или Not stated?</b> Сначала прочитать, потом слушать.</p>'+pages('l',S.lp,LISTEN_Q)+tfRows('l',LISTEN_Q,S.lp)+'</div></div>';
 }
 const xs=TURN.filter((it,i)=>S.x[i]&&S.x[i].ok&&!S.x[i].slip).length;
 return '<div class="alScore"><div><b>'+(S.check!==''?esc(S.check):'—')+' / 12</b><span>Проверка в тренажёре</span></div><div><b>'+tfScore('r',READ_Q)+' / 6</b><span>Чтение</span></div><div><b>'+xs+' / 4</b><span>Другая картинка</span></div><div><b>'+tfScore('l',LISTEN_Q)+' / 6</b><span>Аудирование</span></div></div>'+
  '<div class="alCards"><div class="alCard"><h5>Спросить Арину в конце</h5><ul class="alList"><li>Какие четыре вопроса мы задаём?</li><li>Чем «смотрю серию» отличается от «смотрю серию уже час»?</li><li>Какие слова подсказали ответ в тексте про Дашу?</li></ul></div>'+
  '<div class="alCard"><h5>Домашнее задание</h5><ul class="alList"><li>Тренажёр «Времена»: Проверка ещё раз, записать счёт.</li><li>Текст Maslenitsa: прочитать вслух за 1,5 минуты.</li><li>Написать четыре предложения про свою семью — по одному на каждую картинку.</li></ul></div></div>'+
  '<div class="alCtl"><button type="button" class="alBtn" data-a="restart">Начать урок заново</button></div>';
}

function render(){
 const steps=STEPS.map((x,i)=>'<button type="button" class="'+(i===S.step?'on':'')+'" data-a="go" data-v="'+i+'"><i>'+(i+1)+'</i><span>'+x[0]+'<em>'+x[1]+'</em></span></button>').join('');
 const last=S.step===STEPS.length-1;
 root.innerHTML='<div class="alTop"><h3>Урок 11 октября · Времена «сейчас» + Россия</h3><small>60 минут</small><span class="alFill"></span><button type="button" class="alBtn" data-a="close">Закрыть</button></div>'+
  '<div class="alWrap"><div class="alSteps">'+steps+'</div><div class="alPanel"><div class="alBody">'+body()+'</div>'+
  '<div class="alNav"><button type="button" class="alBtn" data-a="prev"'+(S.step===0?' disabled':'')+'>← Назад</button><span>Шаг '+(S.step+1)+' из '+STEPS.length+' · '+STEPS[S.step][1]+'</span><span class="alFill"></span>'+
  (last?'':'<button type="button" class="alBtn prim" data-a="next">Дальше →</button>')+'</div></div></div>'+
  (S.zoom?'<div class="alZoom" data-a="unzoom"><img src="'+url('tense/four-pictures.jpg?v=1')+'" alt=""><button type="button" class="alBtn" data-a="unzoom">Закрыть</button></div>':'');
 if(S.focus){const el=root.querySelector('[data-in="'+S.focus+'"]');if(el){el.focus();const n=el.value.length;try{el.setSelectionRange(n,n)}catch(e){}}S.focus=null}
}

/* ---------- действия ---------- */
function speak(){
 if(!(window.speechSynthesis&&window.SpeechSynthesisUtterance))return;
 speechSynthesis.cancel();
 const vs=speechSynthesis.getVoices(),v=vs.find(x=>x.lang==='en-GB'&&/female|sonia|libby|kate|serena|hazel/i.test(x.name))||vs.find(x=>x.lang==='en-GB')||vs.find(x=>/^en/.test(x.lang))||null;
 const lines=listenPlain();S.playing=true;S.plays++;
 const st=()=>{const e=root.querySelector('[data-st]');if(e)e.textContent=S.playing?'Идёт запись…':'Прослушано раз: '+S.plays+' из 2'};
 st();
 /* по одному предложению: длинную реплику браузер может оборвать */
 lines.forEach((t,i)=>{const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=.9;if(v)u.voice=v;
  if(i===lines.length-1){u.onend=()=>{S.playing=false;st()};u.onerror=()=>{S.playing=false;st()}}
  speechSynthesis.speak(u)});
}
function xcheck(i){
 const it=TURN[i],a=S.x[i]||(S.x[i]={});if(a.done)return;
 const v=norm(a.val);
 if(!v){a.msg='Напиши форму глагола <b>'+it.b.toUpperCase()+'</b>.';S.focus='x'+i;return render()}
 a.tries=(a.tries||0)+1;
 if(v===it.f||(it.alt||[]).includes(v)){a.done=true;a.ok=true;const n=TURN.findIndex((t,j)=>j!==i&&!(S.x[j]&&S.x[j].done));S.focus=n>=0?'x'+n:null;return render()}
 a.slip=true;
 if(a.tries>=2){a.done=true;a.ok=false;return render()}
 a.msg='<b class="r">Пока нет.</b> Обычно? В эту минуту? Уже готово? Сказано, сколько уже? Ещё одна попытка.';
 S.focus='x'+i;render();
}
function act(t){
 const a=t.dataset.a,v=t.dataset.v,k=t.dataset.k;
 if(a==='close'){stopSpeech();root.hidden=true;return}
 if(a==='go'||a==='prev'||a==='next'){stopSpeech();S.step=a==='go'?+v:Math.max(0,Math.min(STEPS.length-1,S.step+(a==='next'?1:-1)));return render()}
 if(a==='restart'){stopSpeech();S=fresh();return render()}
 if(a==='zoom'){S.zoom=true;return render()}
 if(a==='unzoom'){S.zoom=false;return render()}
 if(a==='trainer'){if(typeof window.openTenseLogicTrainer==='function')window.openTenseLogicTrainer(+v);return}
 if(a==='tf'){if(!S.tf[k])S.tf[k]=v;return render()}
 if(a==='page'){if(k==='r')S.rp=+v;else S.lp=+v;return render()}
 if(a==='xcheck')return xcheck(+v);
 if(a==='play')return speak();
 if(a==='stop'){stopSpeech();const e=root.querySelector('[data-st]');if(e)e.textContent='Прослушано раз: '+S.plays+' из 2';return}
 if(a==='script'){S.script=!S.script;return render()}
 if(a==='legend'){S.legend=!S.legend;return render()}
}
function open(){
 if(!root){
  root=document.createElement('div');root.className='al';document.body.appendChild(root);
  root.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(t&&!t.disabled)act(t)});
  root.addEventListener('input',e=>{const id=e.target.dataset&&e.target.dataset.in;if(!id)return;if(id==='check')S.check=e.target.value.replace(/[^0-9]/g,'').slice(0,2);else{const i=+id.slice(1);(S.x[i]||(S.x[i]={})).val=e.target.value}});
  root.addEventListener('keydown',e=>{const id=e.target.dataset&&e.target.dataset.in;if(e.key==='Enter'&&id&&id!=='check'){e.preventDefault();xcheck(+id.slice(1))}});
  document.addEventListener('keydown',e=>{if(e.key!=='Escape'||!root||root.hidden)return;const tx=document.querySelector('.tx');if(tx&&!tx.hidden)return;if(S.zoom){S.zoom=false;render()}});
 }
 S=fresh();root.hidden=false;render();
 const side=document.getElementById('side');if(side&&innerWidth<801)side.classList.remove('open');
}
window.openArinaToday=open;
})();

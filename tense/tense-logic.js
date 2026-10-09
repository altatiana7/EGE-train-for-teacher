/* Arina · Времена шаг за шагом: Когда? -> Какая картинка? -> Форма.
   Шпаргалка по-русски + 3 круга на одних и тех же предложениях + проверка на новых.
   Ничего не сохраняется: каждый раз открывается с начала. */
(function(){
'use strict';

const style=document.createElement('style');
style.textContent=`
.tx{position:fixed;inset:38px 0 0;z-index:100;background:#f4f6f9;color:#142337;display:flex;flex-direction:column;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.35}
.tx[hidden]{display:none}
.tx *{box-sizing:border-box}
.tx button,.tx input{font:inherit}
.tx button{cursor:pointer}
.tx :focus-visible{outline:3px solid #76a9f5;outline-offset:1px}
.txTop{display:flex;align-items:center;gap:6px;background:#fff;border-bottom:1px solid #d9e1ec;padding:5px 12px;flex-wrap:wrap}
.txTop h3{margin:0 8px 0 0;font-size:18px;color:#142337;white-space:nowrap}
.txTab{background:#fff;color:#0039a6;border:1px solid #b7c9e8;border-radius:8px;padding:5px 11px;font-weight:700;font-size:16px;white-space:nowrap}
.txTab.on{background:#0039a6;color:#fff;border-color:#0039a6}
.txFill{flex:1}
.txBtn{background:#fff;color:#0039a6;border:1px solid #b7c9e8;border-radius:8px;padding:6px 14px;font-weight:700;font-size:16px;white-space:nowrap}
.txBtn.prim{background:#0039a6;color:#fff;border-color:#0039a6}
.txBtn:disabled{opacity:.4;cursor:default}
.txWrap{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 292px;gap:10px;padding:8px 10px}
.txMain{min-width:0;min-height:0;display:flex;flex-direction:column;background:#fff;border:1px solid #d9e1ec;border-radius:12px;overflow:hidden}
.txBody{flex:1;min-height:0;overflow:auto;padding:6px 12px 4px}
.txNav{display:flex;align-items:center;gap:10px;border-top:1px solid #d9e1ec;padding:5px 12px;background:#fbfcfe}
.txNav span{font-size:16px;color:#53657a}
.txNav b{color:#142337}
.txTask{font-size:16px;color:#53657a;margin:0 0 5px}
.txTask b{color:#142337}
.txRow{border:1px solid #d5deea;border-left:4px solid #0039a6;border-radius:10px;padding:6px 10px;margin-bottom:6px;background:#fff}
.txRow.ok{border-left-color:#26724d;background:#f6fcf8}
.txRow.bad{border-left-color:#bf322a;background:#fffaf9}
.txSent{font-size:22px;line-height:1.35;color:#142337}
.txGap{display:inline-block;min-width:70px;border-bottom:2px solid #142337;margin:0 3px;text-align:center}
.txGap.fill{border-bottom-color:#26724d;color:#1d5a3c;font-weight:700;padding:0 4px}
.txVerb{display:inline-block;font-size:16px;font-weight:700;color:#0039a6;background:#e8eef7;border-radius:6px;padding:1px 7px;margin-right:4px;vertical-align:2px}
.txSent mark{background:#fff1b8;color:inherit;border-radius:4px;padding:0 2px}
.txSent mark.v{background:#d9ecff}
.txCtl{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:5px}
.txSep{width:1px;height:26px;background:#d5deea;margin:0 3px}
.txChip{background:#fff;color:#142337;border:1px solid #9fb4d6;border-radius:8px;padding:4px 11px;font-weight:700;font-size:17px}
.txChip:hover:not(:disabled){background:#eef4ff}
.txChip.ok{background:#e3f5ea;border-color:#26724d;color:#1d5a3c}
.txChip.no{background:#ffe9e6;border-color:#bf322a;color:#9a251f}
.txChip:disabled{cursor:default;color:#3d4d61}
.txChip.ok:disabled{color:#1d5a3c}
.txChip.no:disabled{color:#9a251f}
.txTag{display:inline-block;color:#142337;background:#fff1b8;border-radius:8px;padding:4px 10px;font-weight:700;font-size:17px}
.txTag.v{background:#d9ecff}
.txIn{width:230px;border:1px solid #9fb4d6;border-radius:8px;padding:4px 9px;font-size:18px;color:#142337;background:#fff}
.txIn:disabled{background:#f1f4f8;color:#3d4d61}
.txFormula{display:inline-block;background:#142337;color:#fff;border-radius:7px;padding:3px 9px;font-weight:700;font-size:16px}
.txFb{margin-top:4px;font-size:16px;line-height:1.35;color:#3d4d61;min-height:22px}
.txFb b.g{color:#1d5a3c}
.txFb b.r{color:#9a251f}
.txSide{min-height:0;overflow:auto;background:#fff;border:1px solid #d9e1ec;border-radius:12px;padding:6px 10px;line-height:1.25}
.txSide h4{margin:0 0 3px;font-size:16px;color:#142337}
.txGrid{display:grid;grid-template-columns:1fr 1fr;gap:3px 4px;margin-bottom:5px}
.txGrid .h{font-weight:700;font-size:16px;text-align:center;background:#142337;color:#fff;border-radius:6px;padding:2px}
.txGrid .lab{grid-column:1/3;font-size:15px;color:#53657a}
.txGrid .lab b{color:#142337;font-size:16px}
.txCell{border:1px solid #d5deea;border-radius:6px;padding:2px 5px;font-size:15px;font-weight:700;text-align:center;color:#0039a6;background:#f7f9fc}
.txCell.hot{background:#fff1b8;border-color:#c79a00;color:#142337}
.txClues{font-size:15px;line-height:1.3;color:#3d4d61;margin:0}
.txClues b{color:#142337}
.txHelpNav{display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap}
.txLead{font-size:19px;margin:0 0 8px}
.txCards{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.txCards.three{grid-template-columns:1fr 1fr 1fr}
.txCard{border:1px solid #d5deea;border-top:4px solid #0039a6;border-radius:10px;padding:7px 10px;background:#fbfcfe}
.txCard h5{margin:0 0 3px;font-size:18px;color:#142337}
.txCard h5 small{font-size:16px;color:#53657a;font-weight:400}
.txCard p{margin:0 0 3px;font-size:16px}
.txCard .en{font-size:18px;font-weight:700;color:#0039a6}
.txCard .frm{margin-top:4px}
.txCard .no{color:#9a251f;text-decoration:line-through;font-weight:400}
.txSteps{display:grid;gap:7px;margin:0 0 10px}
.txSteps div{border:1px solid #d5deea;border-left:4px solid #0039a6;border-radius:10px;padding:7px 10px;font-size:17px}
.txSteps b{font-size:18px}
.txRes h4{margin:0 0 6px;font-size:22px}
.txRes .acts{display:flex;gap:8px;margin:0 0 10px;flex-wrap:wrap}
.txMissGrid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.txMiss{border:1px solid #e6c9c5;border-left:4px solid #bf322a;border-radius:10px;padding:6px 10px;font-size:17px}
.txMiss b{color:#1d5a3c}
.txMiss span{display:block;font-size:16px;color:#53657a}
@media(max-width:900px){.txMissGrid{grid-template-columns:1fr}.txWrap{grid-template-columns:1fr}.txSide{display:none}.txCards,.txCards.three{grid-template-columns:1fr}.txIn{width:170px}}
`;
document.head.appendChild(style);

/* ---------- данные ---------- */
const WHEN={N:'Сейчас',T:'Тогда'};
/* Четыре картинки. Подпись зависит от того, сейчас это или тогда. */
const VW={N:{F:'Обычно',P:'В эту минуту',R:'Уже готово',D:'Уже сколько-то'},T:{F:'Просто было',P:'В ту минуту',R:'Уже было готово',D:'Уже сколько-то'}};
const SIDE={F:'Обычно · просто было',P:'В эту минуту · в ту минуту',R:'Уже готово',D:'Сказано, сколько уже: for, since'};
const FORMULA={NF:'V / V-s',NP:'am / is / are + V-ing',NR:'have / has + V3',ND:'have / has been + V-ing',TF:'V2 (-ed)',TP:'was / were + V-ing',TR:'had + V3',TD:'had been + V-ing'};
const TENSE={NF:'Present Simple',NP:'Present Continuous',NR:'Present Perfect',ND:'Present Perfect Continuous',TF:'Past Simple',TP:'Past Continuous',TR:'Past Perfect',TD:'Past Perfect Continuous'};

/* Шесть троек: одна ситуация, три разных взгляда. s — предложение, cw — слова-опоры «когда», cv — слова-опоры «что вижу». */
const SETS=[
 [{s:'When Mum came home, I ___ my homework. I was still busy.',b:'do',w:'T',v:'P',f:'was doing',cw:['When Mum came home'],cv:['I was still busy'],ww:'Мама пришла (came) — это момент в прошлом.',wv:'В тот момент я ещё была занята: действие шло.'},
  {s:'When Mum came home, I ___ my homework, so I was free.',b:'finish',w:'T',v:'R',f:'had finished',cw:['When Mum came home'],cv:['so I was free'],ww:'Мама пришла (came) — это момент в прошлом.',wv:'К её приходу уроки уже готовы, я свободна.'},
  {s:'Mum came home at six, and I ___ my homework after dinner.',b:'do',w:'T',v:'F',f:'did',cw:['came home at six'],cv:['after dinner'],ww:'came home at six — названо время в прошлом.',wv:'Просто события по порядку: пришла, потом сделала.'}],
 [{s:'I ___ this film three times.',b:'see',w:'N',v:'R',f:'have seen',alt:["'ve seen","i've seen"],cw:[],cv:['three times'],ww:'Не сказано, когда именно. Значит, считаем до сегодняшнего дня: сейчас.',wv:'Три раза к этому моменту — мой опыт, итог.'},
  {s:'I ___ this film last Sunday.',b:'see',w:'T',v:'F',f:'saw',cw:['last Sunday'],cv:['last Sunday'],ww:'last Sunday — названо законченное прошлое.',wv:'Сказано, когда это было, и больше ничего.'},
  {s:'I ___ this film right now, call me later.',b:'watch',w:'N',v:'P',f:'am watching',alt:["'m watching"],cw:['right now'],cv:['right now'],ww:'right now — прямо сейчас.',wv:'Действие идёт в эту минуту: я посреди фильма.'}],
 [{s:'I ___ English for two hours, and I am still studying.',b:'study',w:'N',v:'D',f:'have been studying',alt:["'ve been studying"],cw:['I am still studying'],cv:['for two hours'],ww:'I am still studying — действие дотянулось до сейчас.',wv:'Уже два часа и ещё не закончила: важно, сколько длится.'},
  {s:'I ___ English every day.',b:'study',w:'N',v:'F',f:'study',cw:['every day'],cv:['every day'],ww:'every day — так устроена моя жизнь сейчас.',wv:'Так бывает обычно, регулярно.'},
  {s:"At five o'clock yesterday I ___ English.",b:'study',w:'T',v:'P',f:'was studying',cw:['yesterday'],cv:["At five o'clock"],ww:'yesterday — прошлое.',wv:'Названа точная минута, и в неё действие шло.'}],
 [{s:'They ___ for an hour when the doctor finally came.',b:'wait',w:'T',v:'D',f:'had been waiting',cw:['when the doctor finally came'],cv:['for an hour'],ww:'Врач пришёл (came) — момент в прошлом.',wv:'К его приходу ждали уже час: важно, сколько длилось.'},
  {s:'Look! They ___ for the doctor now.',b:'wait',w:'N',v:'P',f:'are waiting',alt:["'re waiting"],cw:['now'],cv:['Look!'],ww:'now — сейчас.',wv:'Look! — посмотри, это происходит у нас на глазах.'},
  {s:"They ___ for the doctor since nine o'clock, and he is still not here.",b:'wait',w:'N',v:'D',f:'have been waiting',alt:["'ve been waiting"],cw:['he is still not here'],cv:["since nine o'clock"],ww:'he is still not here — ждут до сих пор, до сейчас.',wv:'С девяти и до сих пор: важно, сколько длится.'}],
 [{s:'By the time we reached the airport, the plane ___.',b:'leave',w:'T',v:'R',f:'had left',cw:['we reached the airport'],cv:['By the time'],ww:'reached — мы добрались, это прошлое.',wv:'By the time — к тому моменту самолёта уже не было.'},
  {s:'The plane ___ at 7.15 yesterday morning.',b:'leave',w:'T',v:'F',f:'left',cw:['yesterday morning'],cv:['at 7.15'],ww:'yesterday morning — прошлое.',wv:'Сказано, когда это случилось, и всё.'},
  {s:'We are too late. The plane ___.',b:'leave',w:'N',v:'R',f:'has left',cw:['We are too late'],cv:['We are too late'],ww:'We are — говорим о том, что имеем сейчас.',wv:'Когда улетел — неважно. Важно, что его уже нет.'}],
 [{s:'She ___ three chapters so far.',b:'write',w:'N',v:'R',f:'has written',cw:['so far'],cv:['three chapters'],ww:'so far — «к настоящему моменту», то есть до сейчас.',wv:'Три главы готовы: считаем сделанное.'},
  {s:'She usually ___ in the morning.',b:'write',w:'N',v:'F',f:'writes',cw:['usually'],cv:['usually'],ww:'usually — так у неё заведено сейчас.',wv:'Обычно, регулярно.'},
  {s:'She ___ her book for two years before she found a publisher.',b:'write',w:'T',v:'D',f:'had been writing',cw:['before she found a publisher'],cv:['for two years'],ww:'found — нашла издателя, это прошлое.',wv:'До того момента писала уже два года: важно, сколько длилось.'}]
];
/* Проверка: новые предложения, только ввод формы — как на экзамене. */
const TEST=[
 {s:'It was the first time most of us ___ such an ancient city.',b:'see',w:'T',v:'R',f:'had seen',cw:['It was the first time'],cv:[],wv:'Точка отсчёта — was. Опыт накопился к тому моменту.'},
 {s:'At this time last Sunday we ___ in the sea.',b:'swim',w:'T',v:'P',f:'were swimming',cw:['last Sunday'],cv:['At this time'],wv:'Назван точный момент в прошлом, и в него действие шло.'},
 {s:'I ___ my first phone when I was ten.',b:'get',w:'T',v:'F',f:'got',cw:['when I was ten'],cv:[],wv:'when I was ten — сказано, когда. Просто событие.'},
 {s:'You look hot. — Yes, I ___ tennis for two hours.',b:'play',w:'N',v:'D',f:'have been playing',alt:["'ve been playing"],cw:['You look hot'],cv:['for two hours'],wv:'Вид разгорячённый сейчас; важно, что играла уже два часа.'},
 {s:'Over time, the activity ___ into an important cultural tradition.',b:'develop',w:'N',v:'R',f:'has developed',cw:[],cv:['Over time'],wv:'Не сказано, когда. Важно, чем это стало к сегодняшнему дню.'},
 {s:'My brother ___ to the gym twice a week.',b:'go',w:'N',v:'F',f:'goes',cw:[],cv:['twice a week'],wv:'twice a week — регулярно, так заведено.'},
 {s:'Be quiet, please. The baby ___.',b:'sleep',w:'N',v:'P',f:'is sleeping',alt:["'s sleeping"],cw:['Be quiet, please'],cv:[],wv:'Просят не шуметь сейчас: действие идёт в эту минуту.'},
 {s:'They ___ for three hours before they found the right road.',b:'drive',w:'T',v:'D',f:'had been driving',cw:['before they found'],cv:['for three hours'],wv:'found — прошлое; до этого момента ехали уже три часа.'},
 {s:"Kate ___ her keys, so she can't open the door now.",b:'lose',w:'N',v:'R',f:'has lost',cw:["so she can't open the door now"],cv:[],wv:'Когда потеряла — неважно. Важен итог сейчас: дверь не открыть.'},
 {s:'While I ___ home, it started to rain.',b:'walk',w:'T',v:'P',f:'was walking',cw:['started'],cv:['While'],wv:'started — прошлое; дождь начался посреди действия.'},
 {s:'The teacher was angry because nobody ___ the homework.',b:'do',w:'T',v:'R',f:'had done',cw:['was angry'],cv:[],wv:'was angry — прошлое; домашку не сделали ещё раньше. Итог к тому моменту.'},
 {s:'The museum ___ at ten every day.',b:'open',w:'N',v:'F',f:'opens',cw:[],cv:['every day'],wv:'every day — расписание, так бывает всегда.'}
];
SETS.forEach((set,i)=>set.forEach((it,j)=>it.id='s'+i+'_'+j));
TEST.forEach((it,i)=>it.id='t'+i);

const ROUNDS={
 1:{tab:'1 · Когда?',task:'<b>Круг 1.</b> Только один вопрос: о каком времени речь — <b>сейчас</b> или <b>тогда</b>? Форму глагола пока не трогаем.'},
 2:{tab:'2 · Какая картинка?',task:'<b>Круг 2.</b> Те же предложения, «когда» уже известно. Какая это картинка: <b>обычно, в эту минуту, уже готово</b> или <b>уже сколько-то</b>?'},
 3:{tab:'3 · Собери форму',task:'<b>Круг 3.</b> Весь путь: когда? → какая картинка? → по формуле пишу форму глагола.'},
 4:{tab:'4 · Проверка',task:'<b>Проверка.</b> Новые предложения, как на экзамене: сразу пишу форму. Вопросы задаю себе в уме.'}
};

/* ---------- состояние (только в памяти) ---------- */
let S=null,root=null;
const esc=v=>String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function chunk(a,n){const r=[];for(let i=0;i<a.length;i+=n)r.push(a.slice(i,i+n));return r}
function buildScreens(r){return r===4?chunk(shuffle(TEST),3):SETS.map(set=>shuffle(set))}
function fresh(){return{tab:'help',help:0,scr:{1:0,2:0,3:0,4:0},ans:{1:{},2:{},3:{},4:{}},screens:{1:buildScreens(1),2:buildScreens(2),3:buildScreens(3),4:buildScreens(4)},res:{},last:null,focus:null}}
function A(r,it){return S.ans[r][it.id]||(S.ans[r][it.id]={})}
function norm(v){return String(v||'').toLowerCase().replace(/[’`]/g,"'").replace(/[.!?]+$/,'').replace(/\s+/g,' ').trim()}
function rightForm(it,v){v=norm(v);return v===it.f||(it.alt||[]).includes(v)}
function isDone(r,it){const a=S.ans[r][it.id];if(!a)return false;return r<3?!!a.pick:!!a.done}
function isClean(r,it){const a=S.ans[r][it.id];if(!a)return false;if(r===1)return a.pick===it.w;if(r===2)return a.pick===it.v;return !!a.ok&&!a.slip}
function allItems(r){return S.screens[r].reduce((x,y)=>x.concat(y),[])}

/* ---------- отрисовка ---------- */
function sentenceHTML(it,opt){
 let h=esc(it.s);
 const marks=[];
 if(opt.cw)it.cw.forEach(c=>marks.push([c,'']));
 if(opt.cv)it.cv.forEach(c=>{if(!(opt.cw&&it.cw.includes(c)))marks.push([c,'v'])});
 marks.sort((a,b)=>b[0].length-a[0].length).forEach(m=>{const e=esc(m[0]);h=h.split(e).join('<mark'+(m[1]?' class="v"':'')+'>'+e+'</mark>')});
 const gap=opt.fill?'<span class="txGap fill">'+esc(it.f)+'</span>':'<span class="txGap">&nbsp;</span><span class="txVerb">'+esc(it.b.toUpperCase())+'</span>';
 return '<div class="txSent">'+h.replace('___',gap)+'</div>';
}
function chip(label,act,id,val,cls,dis){return '<button type="button" class="txChip '+(cls||'')+'" data-act="'+act+'" data-id="'+id+'" data-val="'+val+'"'+(dis?' disabled':'')+'>'+label+'</button>'}
function route(it){return WHEN[it.w]+' + '+VW[it.w][it.v].toLowerCase()+' = <span class="txFormula">'+FORMULA[it.w+it.v]+'</span> · '+TENSE[it.w+it.v]}

function row1(it){
 const a=S.ans[1][it.id]||{},done=!!a.pick,ok=a.pick===it.w;
 const chips=['N','T'].map(k=>chip(WHEN[k],'when1',it.id,k,done?(k===it.w?'ok':k===a.pick?'no':''):'',done)).join('');
 const fb=done?(ok?'<b class="g">Верно.</b> ':'<b class="r">Нет, это «'+WHEN[it.w].toLowerCase()+'».</b> ')+esc(it.ww):'';
 return '<div class="txRow '+(done?(ok?'ok':'bad'):'')+'">'+sentenceHTML(it,{cw:done})+'<div class="txCtl">'+chips+'</div><div class="txFb">'+fb+'</div></div>';
}
function row2(it){
 const a=S.ans[2][it.id]||{},done=!!a.pick,ok=a.pick===it.v;
 const chips=['F','P','R','D'].map(k=>chip(VW[it.w][k],'view2',it.id,k,done?(k===it.v?'ok':k===a.pick?'no':''):'',done)).join('');
 const fb=done?(ok?'<b class="g">Верно.</b> ':'<b class="r">Нет, это «'+VW[it.w][it.v].toLowerCase()+'».</b> ')+esc(it.wv):'';
 return '<div class="txRow '+(done?(ok?'ok':'bad'):'')+'">'+sentenceHTML(it,{cw:true,cv:done})+'<div class="txCtl"><span class="txTag">'+WHEN[it.w]+'</span><span class="txSep"></span>'+chips+'</div><div class="txFb">'+fb+'</div></div>';
}
function inputHTML(r,it,a,enabled){
 return '<input class="txIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="форма глагола" data-in="'+it.id+'" value="'+esc(a.val||'')+'"'+(enabled?'':' disabled')+'>'+
  '<button type="button" class="txBtn prim" data-act="check" data-id="'+it.id+'"'+(enabled?'':' disabled')+'>Проверить</button>';
}
function row3(it){
 const a=S.ans[3][it.id]||{};
 const wrongW=a.wrongW||[],wrongV=a.wrongV||[];
 let ctl;
 if(!a.when)ctl=['N','T'].map(k=>chip(WHEN[k],'when3',it.id,k,wrongW.includes(k)?'no':'',wrongW.includes(k))).join('');
 else if(!a.what)ctl='<span class="txTag">'+WHEN[it.w]+'</span><span class="txSep"></span>'+['F','P','R','D'].map(k=>chip(VW[it.w][k],'view3',it.id,k,wrongV.includes(k)?'no':'',wrongV.includes(k))).join('');
 else ctl='<span class="txTag">'+WHEN[it.w]+'</span><span class="txTag v">'+VW[it.w][it.v]+'</span>'+(a.done?'':'<span class="txSep"></span>'+inputHTML(3,it,a,true));
 let fb='';
 if(a.done)fb=(a.ok?'<b class="g">Верно.</b> ':'<b class="r">Смотри, как надо.</b> ')+route(it);
 else if(a.msg)fb=a.msg;
 else if(!a.when)fb='Сначала: о каком времени речь?';
 else if(!a.what)fb='Теперь: какая это картинка?';
 else fb='Собери форму: <span class="txFormula">'+FORMULA[it.w+it.v]+'</span>';
 return '<div class="txRow '+(a.done?(a.ok&&!a.slip?'ok':'bad'):'')+'">'+sentenceHTML(it,{cw:!!a.when,cv:!!a.what,fill:!!a.done})+
  '<div class="txCtl">'+ctl+'</div><div class="txFb">'+fb+'</div></div>';
}
function row4(it){
 const a=S.ans[4][it.id]||{};
 let fb='';
 if(a.done)fb=(a.ok?'<b class="g">Верно'+(a.slip?', со второй попытки':'')+'.</b> ':'<b class="r">Правильно: '+esc(it.f)+'.</b> ')+route(it)+'<br>'+esc(it.wv);
 else if(a.msg)fb=a.msg;
 return '<div class="txRow '+(a.done?(a.ok&&!a.slip?'ok':'bad'):'')+'">'+sentenceHTML(it,{cw:!!a.done,cv:!!a.done,fill:!!a.done})+
  (a.done?'':'<div class="txCtl">'+inputHTML(4,it,a,true)+'</div>')+'<div class="txFb">'+fb+'</div></div>';
}
const ROW={1:row1,2:row2,3:row3,4:row4};

function sideHTML(){
 const hot=S.last||'';
 const cell=k=>'<div class="txCell'+(hot===k?' hot':'')+'">'+FORMULA[k]+'</div>';
 return '<h4>Когда + какая картинка = форма</h4><div class="txGrid"><div class="h">Сейчас</div><div class="h">Тогда</div>'+
  ['F','P','R','D'].map(v=>'<div class="lab"><b>'+SIDE[v]+'</b></div>'+cell('N'+v)+cell('T'+v)).join('')+'</div>'+
  '<h4>Слова-опоры</h4><p class="txClues"><b>Сейчас:</b> now, every day, usually, so far, already, still<br><b>Тогда:</b> yesterday, last …, … ago, when I was …, by the time</p>';
}

function helpHTML(){
 const nav='<div class="txHelpNav">'+['Сейчас','Вчера','Три ловушки','Как решать'].map((t,i)=>'<button type="button" class="txTab'+(S.help===i?' on':'')+'" data-act="help" data-val="'+i+'">'+t+'</button>').join('')+'</div>';
 const cards=list=>'<div class="txCards">'+list.map(c=>'<div class="txCard"><h5>'+c[0]+'</h5><p>'+c[1]+'</p><p class="en">'+c[2]+'</p><p class="frm"><span class="txFormula">'+c[3]+'</span></p></div>').join('')+'</div>';
 let b='';
 if(S.help===0){
  b='<p class="txLead">В английском это четыре разные картинки. Главный вопрос: серия <b>ещё идёт</b> на экране или <b>уже титры</b>?</p>'+cards([
   ['Это обычно, всегда?','«Я смотрю сериалы каждый вечер.» Это привычка.','I watch series every evening.','V / V-s'],
   ['Это прямо в эту минуту?','«Не звони, я смотрю серию!» Серия идёт на экране. Что делаю?','I am watching the episode.','am / is / are + V-ing'],
   ['Это уже готово?','«Я посмотрела серию. Рассказать, чем кончилось?» Уже титры. Что сделала?','I have watched the episode.','have / has + V3'],
   ['Сказано, сколько уже?','«Я смотрю серию уже час!» Смотрю так же, но назван срок: <b>for</b>, <b>since</b>.','I have been watching the episode for an hour.','have / has been + V-ing']]);
 }else if(S.help===1){
  b='<p class="txLead">Те же четыре картинки, только вчера. Вопросы те же, меняется первое слово: <b>am → was, have → had</b>.</p>'+cards([
   ['Просто было?','«Вчера я посмотрела две серии.»','I watched two episodes yesterday.','V2 (-ed)'],
   ['В ту самую минуту?','«Вчера в десять я смотрела серию.» В десять она шла на экране.','At ten I was watching the episode.','was / were + V-ing'],
   ['К тому моменту уже готово?','«Когда мама пришла, я уже досмотрела серию.» Уже были титры.','When Mum came, I had watched the episode.','had + V3'],
   ['Сказано, сколько уже к тому моменту?','«Когда мама пришла, я смотрела серию уже час.» Назван срок: <b>for</b>.','When Mum came, I had been watching it for an hour.','had been + V-ing']]);
 }else if(S.help===2){
  b='<p class="txLead">Здесь русский язык подсказывает неправильно. Перед ответом задай себе вопрос.</p><div class="txCards three">'+
   '<div class="txCard"><h5>«Я видела этот фильм»</h5><p>Вопрос: <b>сказано ли, когда?</b></p><p>Сказано:</p><p class="en">I saw it yesterday.</p><p>Не сказано:</p><p class="en">I have seen it.</p></div>'+
   '<div class="txCard"><h5>«Я живу здесь пять лет»</h5><p>По-русски «живу». Но есть <b>«уже сколько-то»</b> — началось раньше и всё ещё идёт.</p><p class="en">I have lived here for five years.</p><p class="en no">I live here for five years.</p></div>'+
   '<div class="txCard"><h5>«Когда мама пришла, я смотрела серию»</h5><p>К её приходу <b>уже досмотрела</b>:</p><p class="en">I had watched the episode.</p><p>Пришла, а я <b>в ту минуту</b> ещё смотрела:</p><p class="en">I was watching the episode.</p></div></div>';
 }else{
  b='<div class="txSteps"><div><b>1. Когда?</b> Сейчас или тогда. Ищу в предложении слова-опоры: yesterday, when I was ten, now, so far.</div>'+
   '<div><b>2. Какая картинка?</b> Задаю четыре вопроса: это обычно? в эту минуту? уже готово? уже сколько-то времени?</div>'+
   '<div><b>3. Собираю форму</b> по таблице справа. Название времени вспоминать не нужно — оно получится само.</div></div>'+
   '<button type="button" class="txBtn prim" data-act="tab" data-val="1">Начать круг 1 →</button>';
 }
 return nav+b;
}

function resultHTML(r){
 const items=allItems(r),clean=items.filter(it=>isClean(r,it)),miss=items.filter(it=>!isClean(r,it));
 let h='<div class="txRes"><h4>'+(r===4?'Проверка':'Круг '+r)+': '+clean.length+' из '+items.length+' с первого раза</h4><div class="acts">'+
  '<button type="button" class="txBtn" data-act="again" data-val="'+r+'">Пройти ещё раз</button>'+
  (r<4?'<button type="button" class="txBtn prim" data-act="tab" data-val="'+(r+1)+'">'+(r===3?'К проверке на новых предложениях →':'Круг '+(r+1)+' →')+'</button>':'<button type="button" class="txBtn prim" data-act="restart">Начать всё сначала</button>')+'</div>';
 if(!miss.length)h+='<p class="txLead">Ошибок нет.</p>';
 else h+='<p class="txTask"><b>Разбор ошибок</b></p><div class="txMissGrid">'+miss.map(it=>{
   const a=S.ans[r][it.id]||{};
   const answered=isDone(r,it);
   return '<div class="txMiss">'+esc(it.s.replace('___','___ ('+it.b+')'))+'<span>'+(answered?'':'Не отвечено. ')+'Правильно: <b>'+
    (r===1?WHEN[it.w]:r===2?VW[it.w][it.v]:esc(it.f))+'</b> · '+(r===1?esc(it.ww):esc(it.wv))+(r>2?' '+WHEN[it.w]+' + '+VW[it.w][it.v].toLowerCase()+' = '+FORMULA[it.w+it.v]+'.':'')+'</span></div>';
  }).join('')+'</div>';
 return h+'</div>';
}

function render(){
 const tabs='<button type="button" class="txTab'+(S.tab==='help'?' on':'')+'" data-act="tab" data-val="help">Шпаргалка</button>'+
  [1,2,3,4].map(r=>'<button type="button" class="txTab'+(S.tab===r?' on':'')+'" data-act="tab" data-val="'+r+'">'+ROUNDS[r].tab+'</button>').join('');
 let body='',nav='';
 if(S.tab==='help')body=helpHTML();
 else{
  const r=S.tab;
  if(S.res[r])body=resultHTML(r);
  else{
   const scr=S.screens[r],i=S.scr[r],items=allItems(r),done=items.filter(it=>isDone(r,it)).length,clean=items.filter(it=>isClean(r,it)).length;
   body='<p class="txTask">'+ROUNDS[r].task+'</p>'+scr[i].map(ROW[r]).join('');
   nav='<div class="txNav"><button type="button" class="txBtn" data-act="prev"'+(i===0?' disabled':'')+'>← Назад</button><span>Экран <b>'+(i+1)+'</b> из '+scr.length+'</span>'+
    '<span class="txFill"></span><span>Верно с первого раза: <b>'+clean+'</b> · отвечено '+done+' из '+items.length+'</span>'+
    '<button type="button" class="txBtn prim" data-act="next">'+(i===scr.length-1?'Итог круга →':'Дальше →')+'</button></div>';
  }
 }
 root.innerHTML='<div class="txTop"><h3>Времена · шаг за шагом</h3>'+tabs+'<span class="txFill"></span><button type="button" class="txBtn" data-act="close">Закрыть</button></div>'+
  '<div class="txWrap"><div class="txMain"><div class="txBody">'+body+'</div>'+nav+'</div><aside class="txSide">'+sideHTML()+'</aside></div>';
 if(S.focus){const el=root.querySelector('[data-in="'+S.focus+'"]');if(el&&!el.disabled){el.focus();const n=el.value.length;try{el.setSelectionRange(n,n)}catch(e){}}S.focus=null}
}

/* ---------- действия ---------- */
function find(r,id){return allItems(r).find(x=>x.id===id)}
function nextInput(r,id){
 const list=S.screens[r][S.scr[r]];
 const rest=list.filter(x=>x.id!==id&&!isDone(r,x));
 return r===4&&rest.length?rest[0].id:null;
}
function check(id){
 const r=S.tab,it=find(r,id);if(!it)return;
 const a=A(r,it);if(a.done)return;
 const v=norm(a.val);
 if(!v){a.msg='Напиши форму глагола <b>'+esc(it.b.toUpperCase())+'</b>.';S.focus=id;return render()}
 a.tries=(a.tries||0)+1;
 if(rightForm(it,v)){a.done=true;a.ok=true;S.last=it.w+it.v;S.focus=nextInput(r,id);return render()}
 a.slip=true;
 if(a.tries>=2){a.done=true;a.ok=false;S.last=it.w+it.v;S.focus=nextInput(r,id);return render()}
 a.msg=r===3
  ?'<b class="r">Пока нет.</b> Собери точно по формуле <span class="txFormula">'+FORMULA[it.w+it.v]+'</span> от глагола '+esc(it.b.toUpperCase())+'. Ещё одна попытка.'
  :'<b class="r">Пока нет.</b> Спроси себя: сейчас или тогда? Обычно, в эту минуту, уже готово или уже сколько-то? Ещё одна попытка.';
 S.focus=id;render();
}
function act(t){
 const k=t.dataset.act,id=t.dataset.id,val=t.dataset.val;
 if(k==='close'){root.hidden=true;return}
 if(k==='tab'){S.tab=val==='help'?'help':+val;return render()}
 if(k==='help'){S.help=+val;return render()}
 if(k==='restart'){S=fresh();return render()}
 if(k==='again'){const r=+val;S.ans[r]={};S.scr[r]=0;S.res[r]=false;S.screens[r]=buildScreens(r);S.tab=r;return render()}
 const r=S.tab;
 if(k==='prev'){if(S.scr[r]>0)S.scr[r]--;return render()}
 if(k==='next'){if(S.scr[r]<S.screens[r].length-1)S.scr[r]++;else S.res[r]=true;return render()}
 const it=find(r,id);if(!it)return;
 const a=A(r,it);
 if(k==='when1'||k==='view2'){if(a.pick)return;a.pick=val;S.last=k==='view2'?it.w+it.v:null;return render()}
 if(k==='when3'){
  if(a.when)return;
  if(val===it.w){a.when=true;a.msg=''}
  else{a.slip=true;(a.wrongW=a.wrongW||[]).push(val);a.msg='<b class="r">Нет.</b> '+esc(it.ww)}
  return render();
 }
 if(k==='view3'){
  if(!a.when||a.what)return;
  if(val===it.v){a.what=true;a.msg='';S.last=it.w+it.v;S.focus=id}
  else{a.slip=true;(a.wrongV=a.wrongV||[]).push(val);a.msg='<b class="r">Нет, не «'+VW[it.w][val].toLowerCase()+'».</b> Задай себе четыре вопроса из таблицы справа: какой подходит?'}
  return render();
 }
 if(k==='check')return check(id);
}

function open(){
 if(!root){
  root=document.createElement('div');root.className='tx';document.body.appendChild(root);
  root.addEventListener('click',e=>{const t=e.target.closest('[data-act]');if(t&&!t.disabled)act(t)});
  root.addEventListener('input',e=>{const el=e.target;if(el.dataset&&el.dataset.in&&S.tab!=='help'){const it=find(S.tab,el.dataset.in);if(it)A(S.tab,it).val=el.value}});
  root.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.dataset&&e.target.dataset.in){e.preventDefault();check(e.target.dataset.in)}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&root&&!root.hidden)root.hidden=true});
 }
 S=fresh();root.hidden=false;render();
 const side=document.getElementById('side');if(side&&innerWidth<801)side.classList.remove('open');
}
window.openTenseLogicTrainer=open;
})();

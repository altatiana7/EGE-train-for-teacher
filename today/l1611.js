/* Урок 16 ноября (понедельник, неделя 4 · урок 7) — по новой тактике от 14.11:
   устная 2 и 3 в разминке · разбор эссе 38 (Homework) · 19–24 и 25–29 только заданиями ФИПИ с объяснением по пропускам ·
   пассив was / were и «лишнее had» — на предложениях ФИПИ · её слова 25–29 с ошибками в написании — карточками.
   Источники: «ЕГЭ Expert» (Крылова), тема Weather and environment: Speaking Part 2 Task 2 («Save the planet»),
   Part 3 интервью (запись 05.mp3, нарезана по вопросам в today/audio/exp-env1-*.mp3), ответы — из ключей пособия;
   ФИПИ 19–24: Yakutia / The print brush, Gzhel artists / A clever solution; 25–29: The Galapagos Islands, Arenal Volcano;
   разминка по пассиву — предложения ФИПИ из уже пройденных текстов. Ничего не сохраняется: блок открывается с начала. */
(function(){
'use strict';
const base=new URL('../',document.currentScript.src),url=p=>new URL(p,base).href;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const st=document.createElement('style');st.textContent=`
.l16{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337}
.l16Q{font-size:22px;text-align:center;margin:0 0 12px;font-weight:700}
.l16Row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:12px}
.l16 button.b{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:8px 16px;font:800 16px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.l16 button.b.prim,.l16 button.b.on{background:#0039A6;color:#fff;border-color:#0039A6}
.l16Grid{display:grid;grid-template-columns:150px minmax(0,1fr);gap:18px;align-items:start;max-width:980px;margin:0 auto}
.l16Side{display:flex;flex-direction:column;gap:8px;align-items:stretch}
.l16Ring{width:140px;height:140px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p,100)*1%),#e5ebf3 0)}
.l16Ring.low{background:conic-gradient(#D52B1E calc(var(--p,100)*1%),#e5ebf3 0)}
.l16Ring>div{width:108px;height:108px;border-radius:50%;background:#fff;display:grid;place-items:center;align-content:center;text-align:center}
.l16Ring b{font:800 34px/1 "Segoe UI",Arial,sans-serif}.l16Ring small{font-size:12px;color:#64748b}
.l16Tabs{display:flex;gap:8px;margin:0 auto 12px;max-width:980px}
.l16Ad{background:#f2f7ff;border:1px solid #b7c9e8;border-radius:12px;padding:10px 16px;font-size:19px;margin-bottom:10px}
.l16Ad ol{margin:6px 0 0;padding-left:22px}.l16Ad li{padding:2px 0;cursor:pointer}.l16Ad li.on{font-weight:700;color:#0039A6}
.l16Face{border:1px solid #dbe3ee;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(20,35,55,.08);min-height:200px;padding:20px 26px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer}
.l16Face.back{background:#f2f7ff;border-color:#b7c9e8}
.l16Face .w{font-size:30px;font-weight:700;color:#0039A6}
.l16Face .t{font-size:23px;font-weight:700;margin-bottom:6px}
.l16Face .ex{font-size:18px;line-height:1.45;color:#334155}
.l16Nav{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:10px;font:800 16px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.l16Nums{display:flex;gap:6px;justify-content:center;margin-top:8px}.l16Nums button.b{width:36px;height:36px;border-radius:50%;padding:0}
.l16Sam{margin-top:8px;background:#fff;border-left:4px solid #5b8f65;border-radius:8px;padding:8px 14px;font-size:17px;line-height:1.45;text-align:left}
.l16Rule{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.l16Rule section{background:#fff;border:1px solid #dbe3ee;border-top:4px solid #0039A6;border-radius:12px;padding:10px 16px}
.l16Rule section:nth-child(2){border-top-color:#5b8f65}.l16Rule section:nth-child(3){border-top-color:#D52B1E}
.l16Rule h4{margin:0 0 8px;font-size:20px;color:#0039A6}
.l16Rule p,.l16Rule li{font-size:17px;line-height:1.45;margin:4px 0}.l16Rule ul,.l16Rule ol{margin:0;padding-left:20px}
.l16Rule table{border-collapse:collapse;width:100%;font-size:17px}.l16Rule td{border-bottom:1px solid #e5ebf3;padding:5px 6px;vertical-align:top}
.l16Rule td:first-child{font-weight:700;color:#0039A6;white-space:nowrap}
.l16Rule i{color:#334155}.l16Rule .bad{color:#D52B1E;text-decoration:line-through}.l16Rule .ok{color:#15803d;font-weight:700}
.l16SoW{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:980px;margin:0 auto 12px}
.l16SoW button{border:1px solid #b7c9e8;background:#fff;color:#142337;border-radius:10px;padding:8px 14px;font:700 19px/1.2 "PT Serif",Georgia,serif;cursor:pointer}
.l16SoW button.on{background:#0039A6;color:#fff;border-color:#0039A6}
.l16SoC{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;max-width:980px;margin:0 auto}
.l16SoC>div{background:#f7f9fc;border:2px dashed #b7c9e8;border-radius:12px;padding:8px 10px;min-height:150px;cursor:pointer;text-align:center}
.l16SoC>div.bad{border-color:#D52B1E;background:#fef2f2}
.l16SoC b{display:block;font-size:20px;color:#0039A6}.l16SoC small{display:block;font:13px/1.3 "Segoe UI",Arial,sans-serif;color:#64748b;margin-bottom:6px}
.l16SoC .in span{display:block;margin:4px 0;padding:4px 8px;border-radius:8px;background:#effaf3;border:1px solid #86efac;font-size:18px}
.l16So .res{text-align:center;font-size:18px;font-weight:700;color:#0039A6;margin-top:10px}
.l16RdT{display:flex;gap:6px;align-items:center;max-width:1100px;margin:0 auto 10px}
.l16RdT .b{width:44px;padding:8px 0!important}.l16RdT .b.done{background:#effaf3;border-color:#86efac;color:#15803d}.l16RdT .b.done.on{background:#15803d;color:#fff}
.l16RdT .sc{margin-left:auto;font:800 16px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.l16RdG{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:16px;max-width:1100px;margin:0 auto}
.l16RdX{background:#fff;border:1px solid #dbe3ee;border-radius:12px;padding:12px 18px;font-size:19px;line-height:1.5}
.l16RdX b{color:#0039A6;font-size:22px;margin-right:4px}
.l16RdH{display:flex;flex-direction:column;gap:6px}
.l16RdH button{display:flex;gap:10px;align-items:center;text-align:left;border:1px solid #cdd9ea;background:#fff;border-radius:10px;padding:7px 12px;font:18px/1.3 "PT Serif",Georgia,serif!important;color:#142337;cursor:pointer}
.l16RdH button span{flex:none;width:26px;height:26px;border-radius:50%;background:#e8eef7;color:#0039A6;font:800 14px/26px "Segoe UI",Arial,sans-serif;text-align:center}
.l16RdH button.used{background:#effaf3;border-color:#86efac;color:#15803d;cursor:default}
.l16RdH button.bad{border-color:#D52B1E;background:#fef2f2}
@media(max-width:900px){.l16RdG{grid-template-columns:1fr}}
.l16Pred{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;max-width:900px;margin:0 auto}
.l16Pred figure{margin:0;background:#fff;border:1px solid #dbe3ee;border-radius:12px;overflow:hidden}
.l16Pred img,.l16Pred .ph{width:100%;aspect-ratio:16/10;object-fit:cover;display:grid;place-items:center;background:#eef2f8;color:#9fb0c7;font:800 40px/1 "Segoe UI",Arial,sans-serif}
.l16Pred figcaption{padding:6px 10px;font-size:17px;font-weight:700;color:#0039A6;min-height:36px;text-align:center}
.l16Pred figcaption span{visibility:hidden}.l16Pred.show figcaption span{visibility:visible}
.l16Ord{max-width:900px;margin:0 auto}
.l16Ord .l16Top{display:flex;align-items:center;gap:16px;margin-bottom:10px}
.l16Ord .l16Top .l16Ring{width:92px;height:92px}.l16Ord .l16Top .l16Ring>div{width:70px;height:70px}.l16Ord .l16Top .l16Ring b{font-size:24px}
.l16Ord .l16Top p{margin:0;font-size:20px;font-weight:700}
.l16Ord .pp{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.l16Ord .pp button{display:flex;gap:10px;align-items:center;text-align:left;border:1px solid #cdd9ea;background:#fff;border-radius:12px;padding:10px 14px;font:17px/1.35 "PT Serif",Georgia,serif;color:#142337;cursor:pointer;min-height:58px}
.l16Ord .pp button .n{flex:none;width:30px;height:30px;border-radius:50%;background:#e8eef7;color:#0039A6;font:800 15px/30px "Segoe UI",Arial,sans-serif;text-align:center}
.l16Ord .pp button.ok{border-color:#86efac;background:#effaf3}.l16Ord .pp button.ok .n{background:#15803d;color:#fff}
.l16Ord .pp button.bad{border-color:#fca5a5;background:#fef2f2}
.l16Ord .res{margin-top:10px;font-size:18px;text-align:center;font-weight:700;color:#0039A6}
.l16Chk[hidden]{display:none!important}
.l16Chk{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 18px;margin-top:10px;background:#fff;border:1px solid #dbe3ee;border-radius:12px;padding:10px 16px}
.l16Chk .it{display:flex;align-items:center;gap:10px;font-size:17px;padding:3px 0;cursor:pointer}
.l16 .bx{width:24px;height:24px;flex:none;border:2px solid #b7c9e8;border-radius:7px;display:inline-grid;place-items:center;background:#fff;font-size:16px;color:#15803d}
.l16 .it.on .bx{background:#d9f2e2;border-color:#86efac}
.l16Cards{max-width:560px;margin:0 auto}
.l16Wrap{display:flex;gap:18px;flex-wrap:wrap}
.l16Wrap .col{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:12px 18px;min-width:280px;flex:1}
.l16Wrap h3{margin:0 0 8px;font-size:20px;color:#0039A6}.l16Wrap .it{font-size:18px;padding:4px 0}.l16Wrap .hw{font-size:18px;padding:4px 0}
@media(max-width:1000px){.l16Rule,.l16Ord .pp,.l16Chk{grid-template-columns:1fr}.l16Pred{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:800px){.l16Grid{grid-template-columns:1fr}}
`;
document.head.appendChild(st);

/* ---------- 1 · Speaking: Task 2 и Task 3 (ЕГЭ Expert · Weather and environment) ---------- */
const T2={ad:'Become a member of “Save the planet” now!',
 ctx:'You are considering entering a local environmental organisation and you’d like to get more information about this. In 1.5 minutes you are to ask four direct questions to find out about the following:',
 p:[['location','What’s the location of your environmental organisation? / Where is your environmental organisation located?'],
    ['local or international campaigns','Do you run local or international campaigns? / Do you only conduct local campaigns or do you have international ones as well?'],
    ['salary','What salary can I earn if I join your environmental organisation? / What salary do you pay in your environmental organisation?'],
    ['opening hours','What are the opening hours of your environmental organisation? / When does your environmental organisation open and close?']]};
const T3=[
 ['Are you environmentally friendly?','I think I’m rather environmentally friendly. I recycle and I always throw batteries away in special points. I also take part in school environmental activities in spring such as collecting litter in the woods.'],
 ['What are the biggest problems facing our environment?','I guess the biggest problem is global warming. People need to take actions to prevent our planet from getting warmer. If they don’t do that, it will have devastating consequences.'],
 ['Would you give money to or actively campaign for environmental causes?','I wouldn’t give money to environmental campaigns. I don’t believe that they spend it in an appropriate way. I believe people should do things themselves if they want to help. For example, they could collect litter or do recycling.'],
 ['Why are environmental issues important?','I think environmental issues are important because they influence our future generations. If we don’t take actions now, our future children may be ill or won’t enjoy the planet they live on.'],
 ['Do people in your country protect the environment?','People have started to take more actions to protect the environment than they used to. There are now picking-up points for batteries and plastic lids. Local authorities also organise events where everyone can take part.']];
const AU=k=>url('today/audio/exp-env1-'+k+'.mp3');
const SP={tab:'t3',i2:0,f2:false,i3:0,f3:false,sam:false,total:40,left:40,label:''};
let spT=null,spA=null;
function spStop(){clearInterval(spT);spT=null}
function spMute(){if(spA){try{spA.pause()}catch(e){}spA=null}}
function spAll(){spStop();spMute()}
function spBeep(){try{const c=new (window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.frequency.value=660;g.gain.value=.08;o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.35)}catch(e){}}
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function spPaint(){const r=document.querySelector('.l16sp .l16Ring');if(!r)return;r.style.setProperty('--p',SP.total?SP.left/SP.total*100:0);r.classList.toggle('low',SP.left<=5);r.querySelector('b').textContent=mmss(SP.left);r.querySelector('small').textContent=SP.label}
function spSet(s,l){spStop();SP.total=s;SP.left=s;SP.label=l||'';spPaint()}
function spRun(s,l){spSet(s,l);spT=setInterval(()=>{if(!document.querySelector('.l16sp')){spAll();return}SP.left--;spPaint();if(SP.left<=0){spStop();spBeep()}},1000)}
function spPlay(k,then){spAll();spA=new Audio(AU(k));spA.onended=()=>{spA=null;then&&then()};spA.play().catch(()=>{})}
const ring='<div class="l16Ring"><div><b>0:00</b><small></small></div></div>';
const nav='<div class="l16Nav"><button type="button" class="b" data-l16s="prev">← Назад</button><button type="button" class="b" data-l16s="flip">Перевернуть карточку</button><button type="button" class="b" data-l16s="next">Вперёд →</button></div>';
const nums=(n,c)=>'<div class="l16Nums">'+Array.from({length:n},(_,k)=>'<button type="button" class="b'+(k===c?' on':'')+'" data-l16s="num" data-v="'+k+'">'+(k+1)+'</button>').join('')+'</div>';
function spHTML(){
 const tabs='<div class="l16Tabs">'+[['t2','Task 2 · Questions'],['t3','Task 3 · Interview']].map(t=>'<button type="button" class="b'+(SP.tab===t[0]?' on':'')+'" data-l16s="tab" data-v="'+t[0]+'">'+t[1]+'</button>').join('')+'</div>';
 if(SP.tab==='t2'){
  const c=T2.p[SP.i2];
  return tabs+'<div class="l16Grid"><div class="l16Side">'+ring+'<button type="button" class="b prim" data-l16s="t2go">Start 20 s</button><button type="button" class="b" data-l16s="stop">Stop</button></div><div>'+
   '<div class="l16Ad"><b>'+esc(T2.ad)+'</b><div style="font-size:16px;margin-top:4px">'+esc(T2.ctx)+'</div><ol>'+T2.p.map((p,k)=>'<li data-l16s="num" data-v="'+k+'"'+(k===SP.i2?' class="on"':'')+'>'+esc(p[0])+'</li>').join('')+'</ol></div>'+
   (SP.f2?'<div class="l16Face back" data-l16s="flip"><div class="ex">'+esc(c[1])+'</div></div>':'<div class="l16Face" data-l16s="flip"><div class="w">'+esc(c[0])+'</div><div class="ex">Ask a direct question</div></div>')+nav+nums(4,SP.i2)+'</div></div>';
 }
 const q=T3[SP.i3];
 return tabs+'<div class="l16Grid"><div class="l16Side">'+ring+'<button type="button" class="b prim" data-l16s="play">Play</button><button type="button" class="b" data-l16s="replay">Replay</button><button type="button" class="b" data-l16s="stop">Stop</button><button type="button" class="b" data-l16s="intro" style="margin-top:6px">Intro</button></div><div>'+
  (SP.f3?'<div class="l16Face back" data-l16s="flip"><div class="t">'+esc(q[0])+'</div><button type="button" class="b" data-l16s="sam">'+(SP.sam?'Hide sample answer':'Sample answer')+'</button>'+(SP.sam?'<div class="l16Sam">'+esc(q[1])+'</div>':'')+'</div>'
   :'<div class="l16Face" data-l16s="flip"><div class="w">Question '+(SP.i3+1)+' of 5</div><div class="ex">Environmental problems · 2–3 sentences · 40 seconds</div></div>')+nav+nums(5,SP.i3)+'</div></div>';
}
function spRender(){const r=document.querySelector('.l16sp');if(!r)return;r.innerHTML=spHTML();spPaint()}
function spInit(){const r=document.querySelector('#l3Panel .l16sp');if(!r)return;spAll();Object.assign(SP,{tab:'t3',i2:0,f2:false,i3:0,f3:false,sam:false});spRender();spSet(40,'to answer')}
function spAct(t){
 const a=t.dataset.l16s,v=t.dataset.v;
 if(a==='tab'){spAll();SP.tab=v;spRender();v==='t2'?spSet(20,'per question'):spSet(40,'to answer');return}
 if(a==='stop'){spAll();return}
 if(a==='t2go'){spRun(20,'per question');return}
 if(a==='play'||a==='replay'){spSet(40,'to answer');spPlay('q'+(SP.i3+1),()=>spRun(40,'to answer'));return}
 if(a==='intro'){spSet(40,'to answer');spPlay('intro');return}
 if(a==='sam'){SP.sam=!SP.sam;spRender();return}
 const t2=SP.tab==='t2',n=t2?4:5,k=t2?'i2':'i3',f=t2?'f2':'f3';
 if(a==='flip'){SP[f]=!SP[f];SP.sam=false;spRender();return}
 if(a==='prev'||a==='next'||a==='num'){spAll();SP[k]=a==='num'?+v:(SP[k]+(a==='next'?1:-1)+n)%n;SP[f]=false;SP.sam=false;spRender();t2?spSet(20,'per question'):spSet(40,'to answer')}
}

/* ---------- 2 · Homework review: эссе 38 — порядок абзацев за 15 секунд + чек-лист ---------- */
const PARTS=[
 'I am currently doing a project on … I have found a pie chart with the results of a survey conducted among …',
 'As can be seen from the pie chart, … It is evident that the respondents choose the option «…» … (%).',
 'Based on the pie chart, … (%) is …% more popular than … (%). It is not surprising because …',
 'Unfortunately, some problems can arise with … One of them is that … The best solution is to …',
 'In conclusion, I believe that … because …'];
const SHUF=[3,0,4,2,1];
const CHECK=['Вступление: тема проекта — словами из задания','2–3 факта с цифрами из диаграммы','1–2 сравнения и комментарий','Проблема и её решение (4-й пункт плана)','Заключение: I believe that … because …','5 абзацев','200–250 слов','Без сокращений: do not, а не don’t','Связки: As can be seen, whereas, Unfortunately, In conclusion','Орфография и пунктуация'];
const OR={next:0,miss:0,left:15,t:null,over:false};
function orHTML(){
 return '<div class="l16 l16Ord"><div class="l16Top">'+ring.replace('l16Ring','l16Ring orR')+'<p>Essay 38 · Put the five paragraphs in order</p></div><div class="pp">'+
  SHUF.map(k=>'<button type="button" data-l16o="'+k+'"><span class="n"></span><span>'+esc(PARTS[k])+'</span></button>').join('')+'</div>'+
  '<div class="res"></div><div class="l16Row"><button type="button" class="b prim" data-l16o="go">Start 15 s</button><button type="button" class="b" data-l16o="chk">Checklist</button></div>'+
  '<div class="l16Chk" hidden>'+CHECK.map(c=>'<div class="it" data-l16o="tick"><span class="bx"></span><span>'+esc(c)+'</span></div>').join('')+'</div></div>';
}
function orPaint(){const r=document.querySelector('.l16Ord .orR');if(!r)return;r.style.setProperty('--p',OR.left/15*100);r.classList.toggle('low',OR.left<=5);r.querySelector('b').textContent=mmss(OR.left);r.querySelector('small').textContent='seconds'}
function orEnd(msg){clearInterval(OR.t);OR.t=null;OR.over=true;const box=document.querySelector('.l16Ord');if(!box)return;
 box.querySelectorAll('.pp button').forEach(b=>{const k=+b.dataset.l16o;b.classList.remove('bad');b.classList.add('ok');b.querySelector('.n').textContent=k+1});
 box.querySelector('.res').textContent=msg}
function orStart(){const box=document.querySelector('.l16Ord');if(!box)return;clearInterval(OR.t);Object.assign(OR,{next:0,miss:0,left:15,over:false});
 box.querySelectorAll('.pp button').forEach(b=>{b.className='';b.querySelector('.n').textContent=''});box.querySelector('.res').textContent='';orPaint();
 OR.t=setInterval(()=>{if(!document.querySelector('.l16Ord')){clearInterval(OR.t);return}OR.left--;orPaint();if(OR.left<=0){spBeep();orEnd('Time is up · '+OR.next+' / 5 in order')}},1000)}
function orAct(t){const a=t.dataset.l16o,box=t.closest('.l16Ord');
 if(a==='go'){orStart();return}
 if(a==='chk'){const c=box.querySelector('.l16Chk');c.hidden=!c.hidden;return}
 if(a==='tick'){t.classList.toggle('on');t.querySelector('.bx').textContent=t.classList.contains('on')?'✓':'';return}
 if(OR.over)return;if(!OR.t)orStart();
 const k=+a;if(t.classList.contains('ok'))return;
 if(k===OR.next){t.classList.remove('bad');t.classList.add('ok');t.querySelector('.n').textContent=k+1;OR.next++;if(OR.next===5)orEnd('5 / 5 · '+(15-OR.left)+' s'+(OR.miss?' · mistakes: '+OR.miss:''))}
 else{OR.miss++;t.classList.add('bad');setTimeout(()=>t.classList.remove('bad'),500)}
}

/* ---------- 3 · правило: пассив и прошедшее — просто ---------- */
const RULE='<div class="l16 l16Rule">'+
'<section><h4>1 · Сам делает или с ним делают?</h4><table>'+
'<tr><td>сам делает</td><td><b>V2</b> · <i>He <b>won</b> the Nobel Prize in 1953.</i></td></tr>'+
'<tr><td>с ним сделали</td><td><b>was / were + V3</b> · <i>The Rosetta stone <b>was found</b> in 1799.</i></td></tr>'+
'<tr><td>by + кто</td><td>сразу пассив · <i>It <b>was founded</b> in 1903 by immigrants.</i></td></tr></table></section>'+
'<section><h4>2 · was или were?</h4><ul>'+
'<li>один предмет → <b>was</b>: <i>the building was turned</i></li>'+
'<li>много → <b>were</b>: <i>the pyramids were built, they were allowed</i></li>'+
'<li>смотри на слово до пропуска: <b>They, QR codes, Africans</b> → were</li></ul></section>'+
'<section><h4>3 · Обрати внимание</h4><ul>'+
'<li><b>in 1799 · in 2014 · a long time ago · last year</b> → просто прошедшее, <span class="bad">had found</span> → <span class="ok">was found</span>.</li>'+
'<li><b>had</b> — только если одно прошлое было раньше другого.</li>'+
'<li>В ответе ЕГЭ пиши обе части: <span class="ok">was demonstrated</span>, не <span class="bad">demonstrated</span>.</li>'+
'<li>found – founded – founded = основать · find – found – found = найти.</li></ul></section></div>';

/* ---------- 4 · Word families: кто? что? какой? как? (слова из пройденных текстов ФИПИ 25–29) ---------- */
const SORT_COLS=[['p','Кто?','-er · -or · -ist'],['n','Что?','-tion · -ment · -ence'],['a','Какой?','-al · -ive · -less · -able'],['d','Как?','-ly']];
const SORT_W=[['traveller','p'],['achievement','n'],['traditional','a'],['extremely','d'],['visitors','p'],['collection','n'],['effective','a'],['certainly','d'],['scientists','p'],['residence','n'],['priceless','a'],['recently','d'],['population','n'],['memorable','a'],['alternatively','d'],['inventor','p']];
const SO={sel:null,done:0,miss:0};
function soHTML(){return '<div class="l16 l16So"><p class="l16Q">Who? What? What kind? How? Sort the words.</p><div class="l16SoW">'+
 SORT_W.map((w,k)=>'<button type="button" data-l16w="'+k+'">'+w[0]+'</button>').join('')+'</div><div class="l16SoC">'+
 SORT_COLS.map(c=>'<div data-l16k="'+c[0]+'"><b>'+c[1]+'</b><small>'+c[2]+'</small><div class="in"></div></div>').join('')+'</div><div class="res"></div></div>'}
function soInit(){const b=document.querySelector('#l3Panel .l16SoHost');if(!b)return;Object.assign(SO,{sel:null,done:0,miss:0});b.innerHTML=soHTML()}
function soAct(t){const box=t.closest('.l16So');
 if(t.dataset.l16w!=null){box.querySelectorAll('.l16SoW button').forEach(x=>x.classList.remove('on'));SO.sel=+t.dataset.l16w;t.classList.add('on');return}
 const col=t.closest('[data-l16k]');if(!col||SO.sel==null)return;const w=SORT_W[SO.sel],btn=box.querySelector('[data-l16w="'+SO.sel+'"]');
 if(w[1]===col.dataset.l16k){const s=document.createElement('span');s.textContent=w[0];col.querySelector('.in').appendChild(s);btn.remove();SO.sel=null;SO.done++;
  if(SO.done===SORT_W.length)box.querySelector('.res').textContent='16 / 16 · mistakes: '+SO.miss}
 else{SO.miss++;col.classList.add('bad');setTimeout(()=>col.classList.remove('bad'),450)}}

/* ---------- 5 · ФИПИ 19–24 и 25–29 (сплошным текстом, ответ — нажатием на пропуск) ---------- */
const G19=[
{h:'Yakutia',q:'Yakutia is right in the middle of Russia’s far eastern region. Probably Yakutia is one of the ___ parts of Russia.',b:'COLD',a:'coldest',why:'One of the … parts — превосходная степень: the coldest.'},
{q:'Still, it’s a beautiful place. Tourists love ___ Yakutia because it is a perfect place for photography tours and spending quality time outdoors.',b:'VISIT',a:'visiting',why:'Love + глагол с -ing → visiting.'},
{q:'You only have to remember that winter ___ a good time to visit the area as winters here are very cold there.',b:'NOT BE',a:'is not',why:'Факт, так всегда → is not.'},
{h:'The print brush',q:'As its name suggests, the print brush is a printer that acts like a paint brush. The print brush ___ to public in 2011.',b:'DEMONSTRATE',a:'was demonstrated',why:'Принтер показали (с ним сделали), in 2011 → was + V3.'},
{q:'It immediately ___ the attention of designers.',b:'CATCH',a:'caught',why:'Сам привлёк внимание, прошлое → caught. Не had caught: раньше ничего не было.'},
{q:'If you want to use it, you just swipe it over any flat surface and in less than 10 seconds it prints over it. It is very small and has a digital camera ___.',b:'INSTALL',a:'installed',why:'Камера, которую встроили → V3: installed.'},
{h:'Gzhel artists',q:'There are few Russian Gzhel artists who still work according to the old Gzhel Maiolica technology. Now they ___ significant recognition in this craft.',b:'ACHIEVE',a:'have achieved',why:'Now — результат к этому моменту → have achieved.'},
{q:'___ artists have their own section in the State Historical Museum because their items are not a craft anymore, they are already an art form.',b:'THIS',a:'These',why:'Artists — много → These.'},
{q:'The old Gzhel technology is complicated, and such artists work alone on their pieces throughout the entire cycle ___ from a lump of clay and up to the final result.',b:'START',a:'starting',why:'Цикл, начинающийся с … → starting.'},
{h:'A clever solution',q:'In 1140 the town of Weinsberg in Germany was attacked by King Conrad III and his army. The town was very small and had no chance to survive. King Conrad III said that only ___ could leave the town.',b:'WOMAN',a:'women',why:'Только женщины — много → women.'},
{q:'They ___ to take whatever they could carry themselves.',b:'ALLOW',a:'were allowed',why:'Им разрешили (с ними сделали); they → were + V3.'},
{q:'The King promised nobody ___ them, so the ladies of Weinsberg left the town carrying their husbands on their backs, and the King had to let them go away.',b:'STOP',a:'would stop',why:'Promised — рассказ в прошлом, обещание о будущем → would stop.'}
];
const W25=[
{h:'The Galapagos Islands',q:'The world-renowned Galapagos archipelago is located in the Pacific Ocean, approximately 1,000 km off the coast of Ecuador. The remote islands are one of the world’s most ___ wildlife viewing destinations.',b:'AMAZE',a:'amazing',why:'Most … destinations — прилагательное → amazing.'},
{q:'Thus, they feature on the bucket lists of many ___.',b:'ADVENTURE',a:'adventurers',why:'Many … — люди, много → adventurers.'},
{q:'The waters around the islands are home to a vast ___ of marine life, which makes scuba diving in the area one of the highlights of any visit.',b:'COLLECT',a:'collection',why:'A vast … of — существительное → collection. Пишем: c-o-l-l-e-c-t-i-o-n.'},
{q:'You can either explore the islands on a boat or go on day trips to the more remote ___ islands where no one lives.',b:'INHABITED',a:'uninhabited',why:'Where no one lives — отрицание → un-: uninhabited.'},
{q:'As the islands are home to such an exceptional diversity of wildlife, much of which is found nowhere else on Earth, tourism is very ___ controlled to protect the fragile environment.',b:'CAREFUL',a:'carefully',why:'Перед controlled — как? → наречие carefully (две L).'},
{h:'Arenal Volcano',q:'Costa Rica is a country that has a lot of volcanoes. Even so, Arenal Volcano is one of the greatest natural wonders of this country. It is one of the most ___ volcanoes in the world.',b:'IMPRESS',a:'impressive',why:'Most … volcanoes — прилагательное → impressive.'},
{q:'It is a stratovolcano whose height is 5,437 feet. After a long dormant period, Arenal erupted ___ in 1968, covering a vast area of over 15 km in lava, rocks and ash.',b:'VIOLENT',a:'violently',why:'Erupted как? → наречие violently.'},
{q:'Several minor ___ followed.',b:'ERUPT',a:'eruptions',why:'Several … — существительное, много → eruptions.'},
{q:'Since that time Arenal Volcano has been a popular tourist attraction. The volcano is located in a beautiful national park which is a perfect place for both amateur and professional ___.',b:'HIKE',a:'hikers',why:'Amateur and professional … — люди → hikers.'},
{q:'Among numerous outdoor ___, visitors to the Arenal Volcano National Park can enjoy adventure tours to the rainforest there or just relax in a natural geothermal hot spring.',b:'ACTIVE',a:'activities',why:'Numerous … — существительное, много → activities.'}
];

/* ---------- 6 · Passive и «лишнее had» — предложения ФИПИ из пройденных текстов ---------- */
const KM=rows=>rows.map((r,i)=>{const o=r[2].slice();o.splice(i%(o.length+1),0,r[1]);return {q:r[0],hint:'',opts:o,a:r[1],why:r[3]}});
const MIS=KM([
['Initially, tea ___ mainly for medicinal purposes. <b>USE</b>','was used',['used','had used','were used'],'Чай использовали (с ним делали); tea — один → was used.'],
['All the pyramids of Egypt ___ between 2575 BC and 1650 BC. <b>BUILD</b>','were built',['was built','had built','built'],'Пирамиды построили; pyramids — много → were built.'],
['Moreover, ancient Romans ___ fond of purposeless discussions. <b>NOT BE</b>','were not',['was not','had not been','did not be'],'Romans — много → were not.'],
['He ___ to be a genius by his contemporaries. <b>CONSIDER</b>','was considered',['considered','had considered','is considered'],'Его считали (by his contemporaries) → was + V3.'],
['After the French Revolution the building ___ into a museum. <b>TURN</b>','was turned',['turned','had turned','were turned'],'Здание превратили в музей → was turned.'],
['A long time ago people ___ to make artificial snow. <b>LEARN</b>','learnt',['had learnt','were learnt','have learnt'],'A long time ago → просто прошедшее, без had. Люди научились сами → не пассив.'],
['He even ___ the Nobel Prize in Literature in 1953. <b>WIN</b>','won',['had won','was won','has won'],'In 1953 → Past Simple: won. Had не нужен.'],
['The first Africans arrived in the British colony of Virginia and ___ by English colonists. <b>BUY</b>','were bought',['bought','was bought','had bought'],'By English colonists → пассив; Africans — много → were.'],
['___ at Jamestown in 1607, the Virginia Colony was home to about 700 people by 1619. <b>FOUND</b>','Founded',['Found','Finding','Had founded'],'Основанная в 1607 → founded (found – founded = основать).'],
['The Rosetta stone is one of them. It ___ in 1799. <b>FIND</b>','was found',['had found','found','was founded'],'Камень нашли в 1799 → was found (find – found – found).'],
['It ___ in 1903 by immigrants from Europe. <b>FOUND</b>','was founded',['was found','had founded','founded'],'Город основали иммигранты (by) → was founded.'],
['They ___ in 2014 to allow for more creativity in the QR code look. <b>DEVELOP</b>','were developed',['was developed','had developed','developed'],'QR codes — их разработали, много → were developed.']
]);

/* ---------- 7a · Reading · задание 10 (ФИПИ · Great apes): по одному тексту, заголовок — нажатием ---------- */
const R10={"h": ["Almost extinct", "Figuratively speaking", "Belonging to one group", "Living above", "Highly social", "Similar to people", "No meat, please!", "Glimpses of history"], "t": ["Great apes are members of the family Hominidae, which includes humans, chimps, gorillas, and orangutans. There is one species of humans (Homo sapiens), two species of chimpanzees (common chimpanzee and pygmy chimpanzee, also known as the bonobo), two species of gorillas (western gorilla and eastern gorilla), and three species of orangutans (Bornean orangutan, Sumatran orangutan, and Tapanuli orangutan). However, throughout the last few million years, there have been dozens of other great apes, some of which were arguably as intelligent as modern humans.", "Great apes are large, tailless primates, distinguished from lesser apes (gibbons) by a larger size and generally less monkey-like anatomical features. Still, within this group there is considerable variation. These apes evolved from African lesser apes about 18 million years ago. Orangutans originated from the rest of the apes about 14 million years ago, and gorillas separated from them about 7 million years ago. Until recently, it was thought that chimps and humans separated between 3 and 5 million years ago, but more fossil finds suggest it happened earlier, between 6 and 7 million years ago.", "Great apes are all extremely intelligent. Each one is probably smarter than every other member of the animal kingdom. All the great apes can use tools. Their hands allow them to use rocks or sticks for various purposes, including as weapons. Gorillas have been observed testing water depth with sticks. Chimpanzees are known to drive insects out of their nests using sticks. The orangutan is intelligent enough to build leak-proof roofs over their nightly nests. Isn’t that amazing? They are just like us!", "Great apes play a very important role in their ecosystems. Their presence also supports biodiversity by influencing the distribution and behaviour of other species within their habitat. Unfortunately, most great ape species are considered endangered or even critically endangered due to habitat loss, poaching, and disease. According to the World Wildlife Fund, gorillas and orangutans are particularly at risk, with habitat destruction from logging, mining, and agriculture being the primary threats to their survival.", "The orangutan, the largest creature in the world living in the trees, has probably never lived anywhere else but in the trees. Wildly mobile shoulder, knee and hip joints create a climbing machine that spends approximately 90% of its life high above ground. They eat, sleep, breed and give birth sometimes hundreds of feet above the ground. The thick forests of Borneo and Sumatra provide the perfect environment for this ape. Orangutans look graceless on the ground, but even the largest male orangutans move elegantly in the trees.", "Gorillas eat different food, but their diet is mainly vegetarian. In the jungle, more than 85% of a gorilla’s diet is made up of leaves, shoots, stems and vines – and the rest is made up of roots, flowers and fruits. Insects, ants and termites make up less than 1% of a gorilla’s diet in the wild. The specific food of gorillas varies, depending on the presence (or absence) of certain plants in their immediate surrounding. Thus, gorillas are also almost exclusively vegetarian and devote their days to gathering fruit, leaves, roots and flowers.", "Great apes are no exception when it comes to social interaction. They have complex social relationships that include communication through vocalizations, and body language such as grooming and hugging. Their societies are hierarchical, meaning there are dominant members who have priority access to food and other resources, while subordinate members must work harder to attain them. A new study has revealed that great apes tease one another, including hair pulling, poking, staring in faces, and other playful behaviours."], "a": [3, 8, 6, 1, 4, 7, 5]};
const RD={i:0,got:{},miss:0};
function rdHTML(){const L='ABCDEFG',t=R10.t[RD.i],ok=RD.got[RD.i];
 return '<div class="l16 l16Rd"><div class="l16RdT">'+L.split('').map((c,k)=>'<button type="button" class="b'+(k===RD.i?' on':'')+(RD.got[k]!=null?' done':'')+'" data-l16r="tab" data-v="'+k+'">'+c+'</button>').join('')+'<span class="sc">'+Object.keys(RD.got).length+' / 7 · mistakes: '+RD.miss+'</span></div>'+
 '<div class="l16RdG"><div class="l16RdX"><b>'+L[RD.i]+'</b> '+esc(t)+'</div><div class="l16RdH">'+R10.h.map((h,k)=>{const used=Object.values(RD.got).indexOf(k+1)>-1;return '<button type="button" data-l16r="h" data-v="'+(k+1)+'"'+(used?' class="used"':'')+'><span>'+(k+1)+'</span>'+esc(h)+(used?' · '+L[+Object.keys(RD.got).find(x=>RD.got[x]===k+1)]:'')+'</button>'}).join('')+'</div></div></div>'}
function rdInit(){const b=document.querySelector('#l3Panel .l16RdHost');if(!b)return;RD.i=0;RD.got={};RD.miss=0;b.innerHTML=rdHTML()}
function rdAct(t){const a=t.dataset.l16r,v=+t.dataset.v,box=t.closest('.l16RdHost');
 if(a==='tab'){RD.i=v;box.innerHTML=rdHTML();return}
 if(RD.got[RD.i]!=null||t.classList.contains('used'))return;
 if(R10.a[RD.i]===v){RD.got[RD.i]=v;const nx=[0,1,2,3,4,5,6].find(k=>RD.got[k]==null);if(nx!=null)RD.i=nx;box.innerHTML=rdHTML()}
 else{RD.miss++;t.classList.add('bad');setTimeout(()=>t.classList.remove('bad'),450);const sc=box.querySelector('.sc');if(sc)sc.textContent=Object.keys(RD.got).length+' / 7 · mistakes: '+RD.miss}}

/* ---------- 7 · карточки: её слова 25–29, где ошибалась в написании ---------- */
const CARDS=[
['achievement','достижение · ACHIEVE','This was quite an achievement for a boy of this age.'],
['scientists','учёные · SCIENCE','The aquarium invites scientists into the galleries.'],
['famous','известный · FAME','Fyodor Konyukhov is famous all over the world.'],
['naturally','естественно, природно · NATURE','The island is naturally beautiful.'],
['perfection','совершенство · PERFECT','Gzhel artists work on every piece to perfection.'],
['collection','коллекция, собрание · COLLECT','The Hermitage can boast a huge collection of works of art.'],
['carefully','осторожно, тщательно · CAREFUL','Tourism is very carefully controlled.'],
['uninhabited','необитаемый · INHABITED','They go on day trips to the remote uninhabited islands.'],
['adventurers','искатели приключений · ADVENTURE','The islands are on the bucket lists of many adventurers.'],
['eruptions','извержения · ERUPT','Several minor eruptions followed.'],
['activities','занятия · ACTIVE','Visitors can enjoy numerous outdoor activities.'],
['violently','сильно, бурно · VIOLENT','Arenal erupted violently in 1968.']];
let CD={i:0,f:false};
function cdHTML(){const c=CARDS[CD.i],n=CARDS.length;
 return (CD.f?'<div class="l16Face back" data-l16c="f"><div class="t">'+esc(c[1])+'</div><div class="ex">'+esc(c[2])+'</div></div>':'<div class="l16Face" data-l16c="f"><div class="w" style="font-size:38px">'+esc(c[0])+'</div></div>')+
  '<div class="l16Nav"><button type="button" class="b" data-l16c="-1"'+(CD.i===0?' disabled':'')+'>←</button><span>'+(CD.i+1)+' / '+n+'</span><button type="button" class="b" data-l16c="1">'+(CD.i===n-1?'Start again':'→')+'</button></div>'}
function cdInit(){const b=document.querySelector('#l3Panel .l16Cards');if(!b)return;CD={i:0,f:false};b.innerHTML=cdHTML()}

/* ---------- 8 · итоги ---------- */
const DONE=['Speaking · Task 2 · Save the planet','Speaking · Task 3 · Environment','Essay 38 · review','EGE 19–24 · 2 texts','Passive · was / were · 12','EGE 25–29 · 2 texts','Spelling cards · 25–29','Reading · Task 10'];
const HW=['Word families · 16','Reading · Task 10 · Great apes','Spelling cards · 25–29','Mistakes · Future · 14','Cards · Future & Passive'];
const WRAP='<div class="l16 l16Wrap"><div class="col"><h3>Done today</h3>'+DONE.map(t=>'<div class="it" data-l16="tick" style="display:flex;gap:10px;align-items:center;cursor:pointer"><span class="bx"></span><span>'+t+'</span></div>').join('')+'</div><div class="col"><h3>Homework</h3>'+HW.map(t=>'<div class="hw">• '+t+'</div>').join('')+'</div></div>';

/* ---------- события ---------- */
document.addEventListener('click',e=>{
 const s=e.target.closest('.l16sp [data-l16s]');if(s){spAct(s);return}
 const o=e.target.closest('.l16Ord [data-l16o]');if(o){orAct(o);return}
 const r=e.target.closest('.l16Rd [data-l16r]');if(r){rdAct(r);return}
 const w=e.target.closest('.l16So [data-l16w],.l16So [data-l16k]');if(w){soAct(e.target.closest('[data-l16w]')||w);return}
 const c=e.target.closest('.l16Cards [data-l16c]');
 if(c){const v=c.dataset.l16c;if(v==='f')CD.f=!CD.f;else{const n=CD.i+(+v);CD.i=n>=CARDS.length?0:Math.max(0,n);CD.f=false}
  const b=c.closest('.l16Cards');if(b)b.innerHTML=cdHTML();return}
 const t=e.target.closest('.l16 [data-l16]');if(!t)return;
 if(t.dataset.l16==='tick'){t.classList.toggle('on');t.querySelector('.bx').textContent=t.classList.contains('on')?'✓':''}
});
function orInit(){const b=document.querySelector('#l3Panel .l16OrdHost');if(!b)return;clearInterval(OR.t);OR.t=null;OR.over=false;OR.left=15;b.innerHTML=orHTML();orPaint()}
if(typeof window.showL3Panel==='function'){const b=window.showL3Panel;window.showL3Panel=function(i){spAll();clearInterval(OR.t);OR.t=null;b(i);cdInit();spInit();orInit();soInit();rdInit()}}

/* ---------- шаги урока ---------- */
window.l1611Steps=function(){
 const KH=d=>window.KQ?KQ.kahoot(d,{}):'';
 const FP=(d,o)=>window.KQ?KQ.fipi(d,o):'';
 return [
  ['Warm-up · Speaking · Task 2 и 3','0–10','<div class="l16 l16sp"></div>'],
  ['Homework · Essay 38 · review','10–15','<div class="l16OrdHost"></div>'],
  ['Passive · was / were · правило','15–18',RULE],
  ['Word families · кто? что? какой? как?','18–20','<div class="l16SoHost"></div>'],
  ['EGE 19–24 · текст 1 · Yakutia','20–26',FP(G19.slice(0,6),{start:19,kind:'gr',title:'Grammar · EGE 19–24'})],
  ['EGE 19–24 · текст 2 · Gzhel','26–32',FP(G19.slice(6),{start:19,kind:'gr',title:'Grammar · EGE 19–24'})],
  ['Passive · was / were · 12','32–40',KH(MIS)],
  ['EGE 25–29 · текст 1 · Galapagos','40–46',FP(W25.slice(0,5),{start:25,kind:'wf',title:'Word formation · EGE 25–29'})],
  ['EGE 25–29 · текст 2 · Arenal','46–52',FP(W25.slice(5),{start:25,kind:'wf',title:'Word formation · EGE 25–29'})],
  ['Reading · задание 10 · Great apes','','<div class="l16RdHost"></div>'],
  ['Spelling cards · 25–29','52–56','<div class="l16Cards"></div>'],
  ['Done today · Homework','56–60',WRAP]];
};
})();

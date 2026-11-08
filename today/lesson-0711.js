/* Урок 7 ноября · Устная часть Family (задания 1–3) + интервью Modern inventions + чтение · задание 11 + письмо 37 (вопросы другу).
   Тексты, рекламы и вопросы интервью Family — с сайта Арины (family/words.js). Интервью Modern inventions, задание 11 и чтение вслух — готовые блоки этого сайта.
   Письмо 37: материал из разбора трёх писем. Ничего не сохраняется: каждый блок открывается с начала. */
(function(){
'use strict';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const nl=s=>esc(s).replace(/\n/g,'<br>');
const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');

/* ---------- материал ---------- */
const ADS=[
 {title:'Family Memories Photo Studio',sub:'Professional photo sessions for the whole family',c:'#2c7f78',intro:'You are considering having a family photo session and now you’d like to get more information.',
  points:['location of the studio','price of a session','discounts for large families','number of photos you get'],
  key:['Where is the studio located?\nWhere can I find the studio?','How much does a session cost?\nWhat is the price of a photo session?','Are there any discounts for large families?\nDo you offer discounts for large families?','How many photos do we get?\nHow many photos are included in the price?']},
 {title:'Family Weekend Camp',sub:'Two days of fun for parents and children',c:'#4a4f8f',intro:'You are considering going to the camp with your family and now you’d like to get more information.',
  points:['dates of the next camp','activities for parents and children','accommodation','price for a family of four'],
  key:['When is the next camp?\nWhat are the dates of the next camp?','What activities are there for parents and children?\nWhat can parents and children do together?','Where do families stay?\nWhat kind of accommodation do you offer?','How much does the camp cost for a family of four?\nWhat is the price for a family of four?']}];

const IV=[
 {theme:'Family life',q:['How many people are there in your family, and who are you closest to?','What household chores do you usually do at home?','How do the members of your family usually spend their free time together?','What family traditions would you like to keep when you have your own family?','What advice would you give to teenagers who often argue with their parents?']},
 {theme:'Friendship',q:['What qualities do you value most in a friend?','How did you meet your best friend?','Do you prefer to spend time with one close friend or with a group of friends? Why?','What do you usually do when you fall out with a friend?','Do you think it is possible to stay friends with someone who lives in another country? Why or why not?']}];

/* письмо 37: выбрать лучший вопрос (по одному, две колонки) */
const BEST=[
 {q:'Your friend has just bought a new camera.',opts:['Which camera would you like to buy?','What brand is your new camera?','Do you like cameras?'],a:'What brand is your new camera?',why:'Камера уже куплена: спрашиваем о ней, а не о выборе, который был бы в будущем.'},
 {q:'Your friend is organising a charity fair.',opts:['Do you like helping people?','Are you excited?','What will you sell at the fair?'],a:'What will you sell at the fair?',why:'Конкретный вопрос о событии. Вопросы про эмоции и вкусы не дают новой информации.'},
 {q:'Your friend is taking part in a robotics competition.',opts:['How many teams are competing?','Do you like science?','Are robots interesting?'],a:'How many teams are competing?',why:'Нужна информация именно о соревновании, а не общий вопрос о науке или роботах.'},
 {q:'Your friend has returned from a trip to Italy.',opts:['Where would you like to travel?','Which cities did you visit?','Do you like travelling?'],a:'Which cities did you visit?',why:'Друг уже вернулся: спрашиваем о прошедшей поездке, а не о планах.'}];

/* карточки: лицо / оборот */
const FIX=[
 {f:'your family and you',b:'you and your family\nпорядок слов'},
 {f:'trevel',b:'travel\nорфография'},
 {f:'It was last fall and I can’t forget that.',b:'I went there last autumn, and I’ll never forget that trip.'},
 {f:'What colour of camera would you prefer?',b:'What colour is your new camera?\nкамера уже куплена'},
 {f:'What quality in a camera is the most important for you?',b:'Which camera feature is the most important to you?\nfeature, а не quality'},
 {f:'For studying Russian teenagers use apps to organise their homework just like you.',b:'Russian teenagers often use apps to organise their homework.'},
 {f:'Sport and art clubs are really popular among Russian teenagers.',b:'Sports clubs and art clubs are really popular among Russian teenagers.'},
 {f:'After classes I usually do my homework and spend my time with friends.',b:'After classes I usually do my homework and spend time with my friends.'},
 {f:'Are you excited about it?\nDo you think you’ll like it?',b:'Один и тот же вопрос дважды.\nСпроси разное: место, занятие, цель.'}];
const THREE=[
 {f:'Your friend is organising a charity fair.',b:'Where will it take place?\nWhat will you be selling there?\nWhat charity are you raising money for?'},
 {f:'Your friend is taking part in a robotics competition.',b:'How many teams are taking part?\nWhat kind of robots will they present?\nWhen will the winners be announced?'},
 {f:'Your friend has just bought a new camera.',b:'What brand is it?\nWhere did you buy it?\nHave you taken any photos with it yet?'}];

/* ---------- стили ---------- */
const st=document.createElement('style');st.textContent=`
.l7{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337;max-width:1000px;margin:0 auto}
.l7Pills{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 10px}
.l7Pills button,.l7Row button,.l7Nav button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:7px 14px;font:800 15px/1.2 inherit;cursor:pointer}
.l7Pills button.on,.l7Row button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.l7Pills button:disabled,.l7Row button:disabled,.l7Nav button:disabled{opacity:.4;cursor:default}
.l7Pills.nums button{width:38px;height:38px;border-radius:50%;padding:0}
.l7Grid{display:grid;grid-template-columns:minmax(0,1fr) 200px;gap:18px;align-items:start}
.l7Ad{border-radius:12px;color:#fff;padding:12px 16px;margin:0 0 8px}.l7Ad b{display:block;font-size:20px}.l7Ad span{font-size:15px;opacity:.92}
.l7Task{margin:0 0 6px;font-size:15px;line-height:1.4;color:#334155}
.l7Box{background:#fff;border:1px solid #dbe3ee;border-left:5px solid #0039A6;border-radius:12px;padding:10px 16px}
.l7Box.back{background:#f2f7ff;border-left-color:#D52B1E}
.l7Box ol{margin:0;padding-left:24px;font-size:19px;line-height:1.5}
.l7Box li{padding:2px 0}.l7Box li.now{background:#fff7d6;border-radius:6px}.l7Box li.past{color:#94a3b8}
.l7Box li i{display:block;font-size:13px;color:#64748b}
.l7Side{display:flex;flex-direction:column;align-items:center;gap:8px}
.l7Ring{width:140px;height:140px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p)*1%),#e5ebf3 0)}
.l7Ring>div{width:108px;height:108px;border-radius:50%;background:#fff;display:grid;place-items:center}
.l7Ring b{font-size:34px;line-height:1;color:#0039A6}.l7Ring.end{background:#D52B1E}
.l7Ph{font-size:14px;font-weight:800;color:#0039A6;text-align:center;min-height:20px}
.l7Row{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
.l7Card{perspective:900px;width:min(620px,100%);height:250px;margin:0 auto;cursor:pointer}
.l7Card>.in{position:relative;width:100%;height:100%;transition:transform .45s;transform-style:preserve-3d}
.l7Card.flip>.in{transform:rotateY(180deg)}
.l7Face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1px solid #dbe3ee;border-left:5px solid #0039A6;border-radius:14px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px 22px;text-align:center;font-size:25px;line-height:1.35;font-weight:700}
.l7Face.b{transform:rotateY(180deg);background:#f2f7ff;border-left-color:#D52B1E;font-size:23px}
.l7Face .q{font-size:13px;letter-spacing:.6px;text-transform:uppercase;color:#64748b;font-weight:800}
.l7Nav{display:flex;gap:12px;align-items:center;justify-content:center;margin-top:12px;font-weight:800;color:#0039A6}
.l7Wrap .col{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:12px 18px;min-width:280px;flex:1}
.l7Wrap{display:flex;gap:18px;flex-wrap:wrap}
.l7Wrap h3{margin:0 0 8px;font-size:20px;color:#0039A6}
.l7Wrap .it{display:flex;align-items:center;gap:10px;font-size:19px;padding:5px 0;cursor:pointer}
.l7Wrap .bx{width:26px;height:26px;border:2px solid #b7c9e8;border-radius:7px;display:inline-grid;place-items:center;background:#fff;font-size:18px;color:#15803d}
.l7Wrap .it.on .bx{background:#d9f2e2;border-color:#86efac}
.l7Wrap .hw{font-size:19px;padding:5px 0}
@media(max-width:900px){.l7Grid{grid-template-columns:1fr}}`;
document.head.appendChild(st);

/* ---------- таймер и кольцо ---------- */
const ST={};let tm=null;
const stopT=()=>{if(tm){clearInterval(tm);tm=null}};
const ring=(left,tot,end)=>'<div class="l7Ring'+(end?' end':'')+'" style="--p:'+Math.round(Math.max(0,left)/tot*100)+'"><div><b>'+(end?'0:00':fmt(left))+'</b></div></div>';
function paint(root,left,tot){const r=root.querySelector('.l7Ring');if(!r)return;r.style.setProperty('--p',Math.round(Math.max(0,left)/tot*100));r.querySelector('b').textContent=fmt(left)}

/* ---------- Task 2: реклама, четыре вопроса ---------- */
const AD_PH=[['Preparation',90],['Question 1',20],['Question 2',20],['Question 3',20],['Question 4',20]];
function adInit(root){stopT();ST.ad={v:0,ph:-1,left:90,flip:false};adRender(root)}
function adRender(root){
 const s=ST.ad,a=ADS[s.v],end=s.ph>=AD_PH.length,tot=s.ph<0?90:AD_PH[Math.min(s.ph,AD_PH.length-1)][1];
 const pts='<div class="l7Box"><ol>'+a.points.map((p,i)=>'<li class="'+(s.ph===i+1?'now':(s.ph>i+1?'past':''))+'">'+esc(p)+'</li>').join('')+'</ol></div>';
 const smp='<div class="l7Box back"><ol>'+a.key.map((k,i)=>'<li><i>'+esc(a.points[i])+'</i>'+nl(k)+'</li>').join('')+'</ol></div>';
 root.innerHTML='<div class="l7Pills">'+ADS.map((x,k)=>'<button type="button" class="'+(k===s.v?'on':'')+'" data-a="v" data-k="'+k+'">Advert '+(k+1)+'</button>').join('')+'</div>'+
  '<div class="l7Grid"><div><div class="l7Ad" style="background:'+a.c+'"><b>'+esc(a.title)+'</b><span>'+esc(a.sub)+'</span></div>'+
  '<p class="l7Task">'+esc(a.intro)+' In 1.5 minutes you are to ask four direct questions to find out about the following:</p>'+(s.flip?smp:pts)+'</div>'+
  '<div class="l7Side">'+ring(s.left,tot,end)+'<div class="l7Ph">'+(end?'Time is up':(s.ph<0?'20 seconds for each question':AD_PH[s.ph][0]))+'</div>'+
  '<div class="l7Pills nums" style="justify-content:center"><button type="button" class="'+(s.ph===0?'on':'')+'" data-a="go" data-k="0">P</button>'+[1,2,3,4].map(n=>'<button type="button" class="'+(s.ph===n?'on':'')+'" data-a="go" data-k="'+n+'">'+n+'</button>').join('')+'</div>'+
  '<div class="l7Row"><button type="button" class="prim" data-a="go" data-k="0">Start</button><button type="button" data-a="stop">Stop</button></div>'+
  '<div class="l7Row"><button type="button" data-a="flip">Flip card</button></div></div></div>'}
function adGo(root,p){stopT();const s=ST.ad;s.ph=p;s.left=AD_PH[p][1];adRender(root);
 tm=setInterval(()=>{if(!root.isConnected){stopT();return}s.left--;
  if(s.left<=0){if(s.ph<AD_PH.length-1){s.ph++;s.left=AD_PH[s.ph][1];adRender(root)}else{stopT();s.ph=AD_PH.length;s.left=0;adRender(root)}}
  else paint(root,s.left,AD_PH[s.ph][1])},1000)}

/* ---------- Task 3: интервью, одна карточка ---------- */
function ivInit(root){stopT();ST.iv={v:0,q:0,flip:false,left:40};ivRender(root)}
function ivRender(root){
 const s=ST.iv,v=IV[s.v];
 root.innerHTML='<div class="l7Pills">'+IV.map((x,k)=>'<button type="button" class="'+(k===s.v?'on':'')+'" data-a="v" data-k="'+k+'">Interview '+(k+1)+' · '+esc(x.theme)+'</button>').join('')+'</div>'+
  '<div class="l7Pills nums" style="justify-content:center">'+v.q.map((_,k)=>'<button type="button" class="'+(k===s.q?'on':'')+'" data-a="n" data-k="'+k+'">'+(k+1)+'</button>').join('')+'</div>'+
  '<div class="l7Card'+(s.flip?' flip':'')+'" data-a="flipq"><div class="in">'+
   '<div class="l7Face f"><span class="q">Question '+(s.q+1)+'</span>'+ring(s.left,40,s.left<=0)+'</div>'+
   '<div class="l7Face b"><span class="q">Question '+(s.q+1)+'</span>'+esc(v.q[s.q])+'</div></div></div>'+
  '<div class="l7Row" style="margin-top:12px"><button type="button" class="prim" data-a="play">Play</button><button type="button" data-a="play">Replay</button><button type="button" data-a="stop">Stop</button></div>'+
  '<div class="l7Nav"><button type="button" data-a="prev"'+(s.q===0?' disabled':'')+'>← Back</button><button type="button" data-a="flip">Flip card</button><button type="button" data-a="next"'+(s.q===v.q.length-1?' disabled':'')+'>Next →</button></div>'}
function ivPlay(root){stopT();const s=ST.iv;s.left=40;s.flip=false;ivRender(root);
 tm=setInterval(()=>{if(!root.isConnected){stopT();return}s.left--;if(s.left<=0){stopT();s.left=0;ivRender(root)}else paint(root,s.left,40)},1000)}

/* ---------- Письмо 37: три вкладки ---------- */
const TABS=[['Choose',null],['Fix',FIX],['3 questions',THREE]];
function lettInit(root){stopT();ST.lt={tab:0,i:0};lettRender(root)}
function lettRender(root){
 const s=ST.lt,deck=TABS[s.tab][1];
 let body;
 if(!deck)body=window.KQ?KQ.kahoot(BEST.map(x=>({q:x.q,opts:x.opts,a:x.a,why:x.why})),{}):'';
 else{const c=deck[s.i];body='<div class="l7Card" data-a="flipc"><div class="in"><div class="l7Face f">'+nl(c.f)+'</div><div class="l7Face b">'+nl(c.b)+'</div></div></div>'+
  '<div class="l7Nav"><button type="button" data-a="prev"'+(s.i===0?' disabled':'')+'>←</button><span>'+(s.i+1)+' / '+deck.length+'</span><button type="button" data-a="next"'+(s.i===deck.length-1?' disabled':'')+'>→</button></div>'}
 root.innerHTML='<div class="l7Pills">'+TABS.map((t,k)=>'<button type="button" class="'+(k===s.tab?'on':'')+'" data-a="tab" data-k="'+k+'">'+t[0]+'</button>').join('')+'</div>'+body;
 if(!deck&&window.KQ&&KQ.mountAll)KQ.mountAll(root)}

/* ---------- итоги ---------- */
const DONE=['Interview · Modern inventions','Task 1 · Reading aloud','Task 2 · Advert 1','Task 3 · Interview 1','Reading · Task 11','Letter 37 · Questions'];
const HW=['Task 2 · Advert 2','Task 3 · Interview 2'];
function wrapInit(root){stopT();root.innerHTML='<div class="l7Wrap"><div class="col"><h3>Done today</h3>'+DONE.map(t=>'<div class="it" data-a="tick"><span class="bx"></span><span>'+t+'</span></div>').join('')+'</div><div class="col"><h3>Homework</h3>'+HW.map(t=>'<div class="hw">'+t+'</div>').join('')+'</div></div>'}

/* ---------- события ---------- */
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-a]');if(!t)return;const root=t.closest('.l7[data-l7root]');if(!root)return;
 const a=t.dataset.a,k=+t.dataset.k,n=root.dataset.l7root;
 if(n==='ad'){const s=ST.ad;
  if(a==='v'){stopT();ST.ad={v:k,ph:-1,left:90,flip:false};adRender(root)}
  else if(a==='go')adGo(root,k);
  else if(a==='stop'){stopT();s.ph=-1;s.left=90;adRender(root)}
  else if(a==='flip'){s.flip=!s.flip;adRender(root)}}
 else if(n==='iv'){const s=ST.iv;
  if(a==='v'){stopT();ST.iv={v:k,q:0,flip:false,left:40};ivRender(root)}
  else if(a==='n'){stopT();s.q=k;s.flip=false;s.left=40;ivRender(root)}
  else if(a==='play')ivPlay(root);
  else if(a==='stop'){stopT();s.left=40;ivRender(root)}
  else if(a==='prev'||a==='next'){stopT();s.q+=a==='next'?1:-1;s.flip=false;s.left=40;ivRender(root)}
  else if(a==='flip'){s.flip=!s.flip;ivRender(root)}
  else if(a==='flipq'){if(e.target.closest('button'))return;t.classList.toggle('flip');s.flip=t.classList.contains('flip')}}
 else if(n==='letters'){const s=ST.lt;
  if(a==='tab'){s.tab=k;s.i=0;lettRender(root)}
  else if(a==='prev'||a==='next'){s.i+=a==='next'?1:-1;lettRender(root)}
  else if(a==='flipc')t.classList.toggle('flip')}
 else if(n==='wrap'&&a==='tick'){t.classList.toggle('on');t.querySelector('.bx').textContent=t.classList.contains('on')?'✓':''}
});

function initPanel(){const p=document.getElementById('l3Panel');if(!p)return;
 p.querySelectorAll('.l7[data-l7root]').forEach(r=>{const f={ad:adInit,iv:ivInit,letters:lettInit,wrap:wrapInit}[r.dataset.l7root];if(f)f(r)})}
if(typeof window.showL3Panel==='function'){const b=window.showL3Panel;window.showL3Panel=function(i){stopT();b(i);initPanel()}}
if(typeof window.showL3Hub==='function'){const h=window.showL3Hub;window.showL3Hub=function(){stopT();h()}}

/* ---------- шаги урока ---------- */
window.l0711Steps=function(){
 const slot=n=>'<div class="l7" data-l7root="'+n+'"></div>';
 return [
  ['Interview · Modern inventions · ФИПИ','0–7','<div class="w41Iv" data-set="iv35"></div>'],
  ['Family · Task 1 · Reading aloud','7–22',window.raHTML?window.raHTML(0):''],
  ['Family · Task 2 · Questions about an advert','22–29',slot('ad')],
  ['Family · Task 3 · Interview','29–35',slot('iv')],
  ['Чтение · задание 11','35–47',window.w42R11HTML?window.w42R11HTML():''],
  ['Letter 37 · Asking questions','47–57',slot('letters')],
  ['Done today · Homework','57–60',slot('wrap')]];
};
})();

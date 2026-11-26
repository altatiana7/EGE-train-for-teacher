/* Программа ЕГЭ · Арина · движок интерактивных уроков (Teacher).
   Урок = экран с плитками-блоками; блок открывается по нажатию, назад — кнопкой «Урок».
   Ничего не сохраняется: урок всегда открывается с начала. */
(function(){
'use strict';
const $=(s,r)=>(r||document).querySelector(s),$$=(s,r)=>[...(r||document).querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const ICON={
 home:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 7.5 8 2l6 5.5M3.5 6.5V14h9V6.5"/></svg>',
 back:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3 5 8l5 5"/></svg>',
 restart:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2.5 8a5.5 5.5 0 1 0 1.7-4M2.5 2.5v3h3"/></svg>',
 expand:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 2h5v5M7 14H2V9M14 2 9 7M2 14l5-5"/></svg>'
};
const KIND={warm:'Warm-up',listen:'Listening',vocab:'Vocabulary',gram:'Grammar',read:'Reading',write:'Writing',speak:'Speaking'};
let L,cur=-1,timers=[];
function clearT(){try{speechSynthesis.cancel()}catch(e){}timers.forEach(t=>{clearInterval(t);clearTimeout(t)});timers=[];$$('audio').forEach(a=>a.pause());if(window.__au)window.__au.pause()}
function every(fn,ms){const t=setInterval(fn,ms);timers.push(t);return t}
function after(fn,ms){const t=setTimeout(fn,ms);timers.push(t);return t}
function fmt(s){s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}

/* ---------- page ---------- */
window.renderLesson=function(lesson){
 L=lesson;document.title=L.title+' · Arina EGE - Teacher';
 document.body.innerHTML=`<header class="pTop"><span class="pTag">Teacher</span><div class="pTitle">${esc(L.title)} <span>· ${esc(L.sub||'')}</span></div><div class="mini" id="mini"></div><span class="sp"></span>
 <button class="pBtn" id="lessonHome" style="display:none">${ICON.back} Урок</button><a class="pBtn" href="${esc(L.backHref||'index.html')}">${ICON.home} Программа</a></header>
 <main class="pMain" id="main"></main><div class="shade" id="shade"></div>`;
 $('#lessonHome').onclick=home;$('#shade').onclick=unbig;
 $('#mini').innerHTML=L.acts.map((a,i)=>`<button class="k-${a.kind}" title="${esc(a.title)}" data-i="${i}">${i+1}</button>`).join('');
 $$('#mini button').forEach(b=>b.onclick=()=>open(+b.dataset.i));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.body.classList.contains('bigOn'))unbig();else if(cur>-1)home()}});
 home();scrollTo(0,0);
};
function home(){
 clearT();unbig();cur=-1;$('#lessonHome').style.display='none';$('#mini').style.display='none';
 $('#main').innerHTML=`<div class="lHead"><h1>${esc(L.head||L.title)}</h1><p>${esc(L.goal||'')}</p></div>
 <div class="tiles">${L.acts.map((a,i)=>`<button class="tile k-${a.kind}${a.optional?' opt':''}" data-i="${i}"><span class="mech">${esc(KIND[a.kind]||'')}${a.mech&&a.mech!==KIND[a.kind]?' · '+esc(a.mech):''}</span><b>${esc(a.title)}</b><small>${esc(a.note||'')}</small>${a.ege?`<span class="n">${esc(a.ege)}</span>`:''}</button>`).join('')}</div>
 ${L.footer?`<p class="lNote">${L.footer}</p>`:''}`;
 $$('.tile').forEach(t=>t.onclick=()=>open(+t.dataset.i));
}
function open(i){
 clearT();unbig();cur=i;const a=L.acts[i];
 $('#lessonHome').style.display='';$('#mini').style.display='';
 $$('#mini button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i));
 $('#main').innerHTML=`<section class="act k-${a.kind}" id="act"><div class="aHead"><span class="mech">${esc(a.mech||KIND[a.kind])}</span>${a.ege?`<span class="ege">${esc(a.ege)}</span>`:''}<h2>${esc(a.title)}</h2><span class="sp"></span><span class="cnt" id="cnt"></span>
 <button class="iconBtn" id="restart" title="Сначала">${ICON.restart}</button><button class="iconBtn" id="big" title="Развернуть / свернуть">${ICON.expand}</button></div>
 ${a.pred?`<div class="pred"><i>Prediction</i><span>${esc(a.pred)}</span></div>`:''}<div id="body"></div>
 ${a.keys?`<div style="margin-top:10px"><button class="keysBtn" id="keysBtn">Ключи</button><div class="keys" id="keys">${a.keys}</div></div>`:''}</section>`;
 $('#restart').onclick=()=>open(i);$('#big').onclick=toggleBig;
 if(a.keys)$('#keysBtn').onclick=()=>$('#keys').classList.toggle('on');
 const f=TYPES[a.type];if(f)f(a,$('#body'));else $('#body').textContent='Тип задания не найден: '+a.type;
 scrollTo(0,0);
}
function toggleBig(){const act=$('#act');const on=act.classList.toggle('big');document.body.classList.toggle('bigOn',on)}
function unbig(){const act=$('#act');if(act)act.classList.remove('big');document.body.classList.remove('bigOn')}
const setCnt=t=>{const c=$('#cnt');if(c)c.innerHTML=t};

/* ---------- types ---------- */
const TYPES={};

/* Quizlet cards: items [front, back, example] */
TYPES.cards=function(a,el){
 let i=0;const it=a.shuffle===false?a.items:shuf(a.items);
 const sp=L.acts.map((x,k)=>({x,k})).filter(o=>/Устное/.test(o.x.ege||'')&&o.k!==cur);
 el.innerHTML=`<div class="qz"><div><div class="qzCard" id="qc"><div class="qzIn"><div class="qzF" id="qf"></div><div class="qzB" id="qb"></div></div></div>
 <div class="row qzRow"><button class="pBtn" id="qp">←</button><span class="cnt" id="qn"></span><button class="pBtn" id="qflip">Перевернуть</button><button class="pBtn" id="qsay">Listen</button><button class="pBtn" id="qx">→</button></div></div>
 <div class="qzSide">${sp.length?`<div class="spBox"><i>Speaking</i>${sp.map(o=>`<button class="spBtn k-${o.x.kind}" data-k="${o.k}"><b>${esc(o.x.ege)}</b>${esc(o.x.title)}</button>`).join('')}</div>`:''}</div></div></div>`;
 const show=()=>{const x=it[i];$('#qc').classList.remove('flip');$('#qf').textContent=x[0];$('#qb').innerHTML=esc(x[1])+(x[2]?`<small>${esc(x[2])}</small>`:'');$('#qn').textContent=(i+1)+' / '+it.length;setCnt('')};
 $('#qc').onclick=()=>$('#qc').classList.toggle('flip');$('#qflip').onclick=()=>$('#qc').classList.toggle('flip');
 $('#qp').onclick=()=>{i=(i-1+it.length)%it.length;show()};$('#qx').onclick=()=>{i=(i+1)%it.length;show()};
 $('#qsay').onclick=()=>say(it[i][0]);
 $$('.spBtn[data-k]',el).forEach(b=>b.onclick=()=>open(+b.dataset.k));
 show();
};
function say(t){try{const S=window.speechSynthesis;if(!S)return;S.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=.9;
 const v=S.getVoices().filter(v=>/en-GB/i.test(v.lang));u.voice=v.find(v=>/Natural|Online|Google UK/i.test(v.name))||v[0]||null;S.speak(u)}catch(e){}}
/* Interview: one card at a time, question only sounds; text on the back; 40 s ring */
TYPES.interview=function(a,el){
 let v=0,q=0,left=40,run=null;const V=a.variants;
 el.innerHTML=`<div class="iv"><div><div class="ring" id="ring"><div><span><b id="sec">40</b><small>секунд</small></span></div></div></div>
 <div><div class="ivCard" id="ivc"><div class="qzIn"><div class="ivF"><span>Question</span><b id="qnum">1</b><span id="vname"></span></div><div class="ivB" id="qtext"></div></div></div>
 <div class="ctl"><select id="vsel">${V.map((x,k)=>`<option value="${k}">${esc(x.name)}</option>`).join('')}</select><select id="qsel"></select>
 <button id="intro">Intro</button><button class="main" id="play">Play</button><button id="replay">Replay</button><button id="stop">Stop</button></div>
 <div class="ctl"><button id="prev">← Назад</button><button id="flip">Перевернуть карточку</button><button id="next">Вперёд →</button></div></div></div>`;
 const au=new Audio();
 const ring=p=>{$('#ring').style.setProperty('--p',p)};
 const stopT=()=>{if(run){clearInterval(run);run=null}};
 const startT=()=>{stopT();left=40;$('#sec').textContent=40;ring(100);const t0=Date.now();run=every(()=>{left=40-(Date.now()-t0)/1000;$('#sec').textContent=Math.max(0,Math.ceil(left));ring(Math.max(0,left/40*100));if(left<=0)stopT()},100)};
 const fillSel=()=>{$('#qsel').innerHTML=V[v].qs.map((x,k)=>`<option value="${k}">Вопрос ${k+1}</option>`).join('')};
 const show=()=>{stopT();au.pause();$('#ivc').classList.remove('flip');$('#qnum').textContent=q+1;$('#vname').textContent=V[v].name;$('#qtext').textContent=V[v].qs[q].text;$('#qsel').value=q;$('#sec').textContent=40;ring(100);setCnt((q+1)+' / '+V[v].qs.length)};
 const play=src=>{au.pause();au.src=src;au.currentTime=0;au.play().catch(()=>{})};
 au.onended=()=>{if(au.dataset.q==='1')startT()};
 $('#play').onclick=()=>{au.dataset.q='1';stopT();play(V[v].qs[q].audio)};
 $('#replay').onclick=()=>{au.dataset.q='1';stopT();play(V[v].qs[q].audio)};
 $('#intro').onclick=()=>{au.dataset.q='0';stopT();play(V[v].intro)};
 $('#stop').onclick=()=>{au.pause();stopT()};
 $('#flip').onclick=()=>$('#ivc').classList.toggle('flip');
 $('#prev').onclick=()=>{if(q>0){q--;show()}};$('#next').onclick=()=>{if(q<V[v].qs.length-1){q++;show()}};
 $('#vsel').onchange=e=>{v=+e.target.value;q=0;fillSel();show()};$('#qsel').onchange=e=>{q=+e.target.value;show()};
 window.__au=au;fillSel();show();
};

/* Kahoot: one question at a time, options in 2 columns. items {q (with ___), a, d[], x?, root?} */
TYPES.kahoot=function(a,el){
 const items=(a.shuffle===false?a.items:shuf(a.items)).map(x=>Object.assign({},x,{o:shuf([x.a].concat(x.d))}));
 let i=0,score=0;const ans=[];
 el.innerHTML=`<div id="kq"><div class="qbox"><div class="qtext" id="qt"></div>${a.root?'<div class="root" id="qr"></div>':''}</div>${a.timer?'<div class="timer"><i id="tb"></i></div>':''}
 <div class="opts" id="ops"></div><div class="expl" id="ex"></div><div class="qnav"><button id="pv">←</button><button class="main" id="nx">Next question →</button></div></div><div id="kd"></div>`;
 const fill=(x,w,bad)=>{$('#qt').innerHTML=esc(x.q).replace('___',`<span class="gap${bad?' bad':''}">${w?esc(w):'&nbsp;'}</span>`)};
 function show(){
  clearT();const x=items[i],st=ans[i];setCnt(`<span class="sc">★ ${score}</span> · ${i+1} / ${items.length}`);
  if(a.root)$('#qr').textContent=x.root;fill(x,st?x.a:'');
  $('#ops').innerHTML=x.o.map((o,k)=>`<button class="opt" data-k="${k}"><span class="l">${'ABCD'[k]}</span>${esc(o)}</button>`).join('');
  $('#ex').classList.toggle('on',!!(st&&x.x));$('#ex').textContent=x.x||'';
  $('#pv').disabled=i===0;$('#nx').textContent=i===items.length-1?'See result':'Next question →';
  $$('#ops .opt').forEach(b=>{const o=x.o[+b.dataset.k];if(st){b.disabled=true;if(o===x.a)b.classList.add('ok');else if(o===st)b.classList.add('no')}else b.onclick=()=>answer(o)});
  if(a.timer&&!st){const T=a.timer*1000,t0=Date.now();every(()=>{const p=1-(Date.now()-t0)/T;$('#tb').style.width=Math.max(0,p*100)+'%';if(p<=0)answer('—')},60)}else if(a.timer)$('#tb').style.width='0%';
 }
 function answer(o){if(ans[i])return;clearT();ans[i]=o;if(o===items[i].a)score++;show()}
 function result(){
  clearT();$('#kq').style.display='none';const wrong=items.map((x,k)=>({x,o:ans[k]})).filter(r=>r.o!==r.x.a);
  $('#kd').innerHTML=`<div class="done"><h3>Result</h3><b class="big">${score} / ${items.length}</b>${wrong.length?`<ul>${wrong.map(r=>`<li>${esc(r.x.q).replace('___',r.o&&r.o!=='—'?`<s>${esc(r.o)}</s> `:'')} <em>${esc(r.x.a)}</em></li>`).join('')}</ul>`:'<p>Без ошибок.</p>'}
  <div class="qnav"><button class="main" id="again">Play again</button></div></div>`;$('#again').onclick=()=>open(cur);
 }
 $('#pv').onclick=()=>{if(i>0){i--;show()}};$('#nx').onclick=()=>{if(i<items.length-1){i++;show()}else result()};
 show();
};

/* FIPI continuous text: texts [{title, items:[[sentence with ___, ROOT, answer]]}] ; gap opens on click */
TYPES.fipi=function(a,el){
 let t=0;const T=a.texts.map(x=>x.src?fromBank(x.src,x.title,x.first):x);
 el.innerHTML=`<div class="fTabs" id="ft"></div><div id="fb"></div><div class="qnav"><button id="fall">Открыть все ответы</button></div>`;
 $('#ft').innerHTML=T.map((x,k)=>`<button data-k="${k}">${esc(x.title)}</button>`).join('');
 $$('#ft button').forEach(b=>b.onclick=()=>{t=+b.dataset.k;show()});
 function show(){
  $$('#ft button').forEach(b=>b.classList.toggle('on',+b.dataset.k===t));const x=T[t];let n=x.first||a.first||19;
  const rows=x.items.map(r=>{
   const [before,...rest]=r[0].split('___'),control=EgeWritten.el('button','fnum',r[2]);
   control.type='button';control.classList.add('program-gap');control.setAttribute('aria-expanded','false');
   control.onclick=()=>{const on=control.classList.toggle('on');control.setAttribute('aria-expanded',String(on));};
   return {number:r[1]?n++:'',before,after:rest.join('___'),base:r[1],control:rest.length?control:null};
  });
  $('#fb').replaceChildren(EgeWritten.render((x.first||a.first||19)>=25?'25–29':'19–24',{title:x.title,rows}));
  setCnt(T.length>1?(t+1)+' / '+T.length:'');
 }
 $('#fall').onclick=()=>$('#fb .program-gap').forEach(g=>{g.classList.add('on');g.setAttribute('aria-expanded','true')});
 show();
};
function fromBank(sec,title,first){
 const B=window.FIPI_EXAM&&window.FIPI_EXAM[sec];const x=B&&B.find(y=>y.title===title);
 if(!x)return {title:title+' (не найден)',items:[]};
 return {title:x.title.split(' / ')[0]+(x.title.includes(' / ')?' / '+x.title.split(' / ')[1]:''),first:first,items:x.q.map(r=>[r[0],r[1],fixCase(r[2])])};
}
function fixCase(s){return String(s).replace(/^(arespoken|isspoken|wasbuilt|werebuilt)$/i,m=>m)}

/* Gap match: text with [A]..; parts []; key {A:n} */
TYPES.gapmatch=function(a,el){
 let sel=null,done=0;const N=Object.keys(a.key).length;
 const paragraphs=a.text.map(p=>{
  const paragraph=EgeWritten.el('p','');
  paragraph.append(EgeWritten.htmlNode(esc(p).replace(/\[([A-G1-9])\]/g,(m,g)=>'<button type="button" class="gbtn slot" data-g="'+g+'">'+g+'</button>')));
  return paragraph;
 });
 const parts=a.parts.map((part,k)=>{
  const b=EgeWritten.el('button','part');b.type='button';b.dataset.n=k+1;
  b.append(EgeWritten.el('b','pn',a.partLabels?a.partLabels[k]:k+1),part);
  return b;
 });
 const root=EgeWritten.render('11',{title:a.textTitle,paragraphs,partControls:parts});el.replaceChildren(root);
 const passage=root.querySelector('.read'),choiceList=root.querySelector('.parts');
 passage.id='gt';choiceList.id='gp';
 const cnt=()=>setCnt(done+' / '+N);cnt();
 $$('#gt .slot').forEach(s=>s.onclick=()=>{if(s.classList.contains('fill'))return;$$('#gt .slot').forEach(x=>x.classList.remove('sel','on'));s.classList.add('sel','on');sel=s});
 $$('#gp .part').forEach(b=>b.onclick=()=>{
  if(!sel){const first=$$('#gt .slot').find(s=>!s.classList.contains('fill'));if(first){first.classList.add('sel','on');sel=first}else return}
  const g=sel.dataset.g,n=+b.dataset.n;
  if(a.key[g]===n){sel.classList.remove('sel','on');sel.classList.add('fill','ok');sel.textContent=a.parts[n-1];b.classList.add('used');sel=null;done++;cnt()}
  else{b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake')}
 });
};

/* Listening: audio + kahoot questions with explanation */
TYPES.listen=function(a,host){
 const questions=a.items, answers=questions.map(()=>null), feedback=[], controls=[];
 const audio=EgeWritten.el('audio','');
 audio.controls=true;audio.preload='metadata';audio.src=a.audio;
 audio.setAttribute('aria-label',a.audioLabel||'Audio');
 const rows=questions.map((q,i)=>{
  const options=shuf([q.a,...q.d]),values=options.map((_,j)=>String(j+1));
  const control=EgeWritten.el('select','fp-answer-state'),line=EgeWritten.el('div','note');
  control.append(new Option('…',''),...options.map((text,j)=>new Option(text,values[j])));
  feedback.push(line);controls.push(control);
  control.onchange=()=>{
   if(control.disabled||!control.value)return;
   const choice=options[Number(control.value)-1],ok=choice===q.a;answers[i]=choice;
   line.textContent=(ok?'Верно. ':'Неверно. '+q.a+'. ')+(q.x||'');
   control.classList.add(ok?'fp-right':'fp-wrong');control.disabled=true;
   setCnt(answers.filter(x=>x!==null).length+' / '+questions.length);
  };
  return {label:q.q,options,values,control,feedback:line};
 });
 const root=EgeWritten.render('3–9',{audio,answers:rows});
 const summary=EgeWritten.el('div','navrow'),result=EgeWritten.el('span','note');
 const finish=EgeWritten.el('button','btn main','See result');
 finish.type='button';finish.onclick=()=>{
  const score=questions.filter((q,i)=>q.a===answers[i]).length;
  result.textContent=score+' / '+questions.length;
  feedback.forEach((note,i)=>{if(answers[i]===null)note.textContent=questions[i].a;});
  controls.forEach(control=>{control.disabled=true;control.classList.add('fp-locked');});
  finish.disabled=true;
 };
 summary.append(finish,result);root.querySelector('.exam-main').append(summary);
 host.replaceChildren(root);setCnt('0 / '+questions.length);
};

/* Error hunter: text with {wrong|right} tokens */
TYPES.errorhunt=function(a,el){
 let found=0;const parts=[];let N=0;
 const html=a.text.split(/(\{[^}]*\})/).map(seg=>{
  const m=seg.match(/^\{([^|]*)\|([^}]*)\}$/);
  if(m){N++;return `<span class="w err" data-fix="${esc(m[2])}">${esc(m[1])||'∧'}</span>`}
  return seg.split(/(\s+)/).map(w=>/\S/.test(w)?`<span class="w">${esc(w)}</span>`:w.replace(/\n/g,'<br>')).join('');
 }).join('');
 el.innerHTML=`<div class="eh" id="eh">${html}</div><div class="qnav"><button id="showAll">Показать все ошибки</button></div>`;
 const cnt=()=>setCnt(`<span class="sc">${found}</span> / ${N} ошибок`);cnt();
 const reveal=w=>{if(w.classList.contains('hit')||w.classList.contains('miss'))return;w.classList.add(w.textContent==='∧'?'hit':'miss');w.insertAdjacentHTML('afterend',`<span class="fix">${esc(w.dataset.fix)}</span>`)};
 $$('#eh .w').forEach(w=>w.onclick=()=>{if(w.classList.contains('err')){if(!w.classList.contains('miss')&&!w.classList.contains('hit')){found++;reveal(w);cnt()}}else{w.classList.remove('no');void w.offsetWidth;w.classList.add('no')}});
 $('#showAll').onclick=()=>$$('#eh .err').forEach(reveal);
};

/* Sort: one item at a time into columns */
TYPES.sort=function(a,el){
 const it=shuf(a.items);let i=0,score=0;
 el.innerHTML=`<div class="qbox"><div class="qtext" id="st" style="text-align:center"></div></div><div class="opts">${a.cols.map((c,k)=>`<button class="opt" data-k="${k}" style="justify-content:center;font-weight:700">${esc(c)}</button>`).join('')}</div>
 <div class="so">${a.cols.map((c,k)=>`<div class="col"><h4>${esc(c)}</h4><div id="sc${k}"></div></div>`).join('')}</div>`;
 const show=()=>{setCnt(`<span class="sc">★ ${score}</span> · ${Math.min(i+1,it.length)} / ${it.length}`);$('#st').textContent=i<it.length?it[i][0]:'Готово';};
 $$('.opts .opt',el).forEach(b=>b.onclick=()=>{if(i>=it.length)return;const k=+b.dataset.k,x=it[i];
  if(k===x[1]){score++;$('#sc'+k).insertAdjacentHTML('beforeend',`<span>${esc(x[0])}</span>`);i++;show()}
  else{b.classList.add('no');after(()=>b.classList.remove('no'),500);$('#sc'+x[1]).insertAdjacentHTML('beforeend',`<span style="outline:2px solid var(--no)">${esc(x[0])}</span>`);i++;show()}});
 show();
};

/* Speaking 4: photos + plan + phrases + timers */
TYPES.speak4=function(a,el){
 el.innerHTML=`<div class="sp4"><div><img src="${esc(a.img)}" alt="Photo 1 and Photo 2"><div class="tmr"><span class="clock" id="clk">2:30</span><button class="main" id="prep">Подготовка 2:30</button><button id="go">Ответ 3:00</button><button id="st">Стоп</button></div></div>
 <div><p style="font-size:16.5px;margin-bottom:8px">${esc(a.task)}</p><ul class="plan">${a.plan.map((p,k)=>`<li><b>${k+1}.</b> ${esc(p)}</li>`).join('')}</ul>${a.phrases?`<div class="chips">${a.phrases.map(p=>`<span>${esc(p)}</span>`).join('')}</div>`:''}</div></div>`;
 clock($('#clk'),{prep:150,go:180});
};
function clock(c,set){let run=null;const start=s=>{if(run)clearInterval(run);const t0=Date.now();c.textContent=fmt(s);run=every(()=>{const l=s-(Date.now()-t0)/1000;c.textContent=fmt(l);if(l<=0){clearInterval(run);c.style.color='var(--red)'}},200);c.style.color=''};
 $('#prep').onclick=()=>start(set.prep);$('#go').onclick=()=>start(set.go);$('#st').onclick=()=>{if(run)clearInterval(run)}}

/* Speaking 2: ad + 4 points, 20 s each, model question opens on click */
TYPES.speak2=function(a,el){
 el.innerHTML=`<div class="s2"><div>${a.img?`<img src="${esc(a.img)}" alt="advertisement">`:`<div class="qbox"><div class="qtext" style="text-align:center;font-weight:700">${esc(a.ad)}</div></div>`}<p style="font-size:15.5px;margin-top:6px">${esc(a.task)}</p></div>
 <div><div class="pts">${a.points.map((p,k)=>`<button class="pt" data-k="${k}"><b>${k+1}) ${esc(p)}</b><em>${esc(a.model[k]||'')}</em><div class="bar"><i></i></div></button>`).join('')}</div></div></div>`;
 $$('.pt',el).forEach(b=>b.onclick=()=>{
  if(b.classList.contains('on')){b.classList.add('show');return}
  $$('.pt',el).forEach(x=>x.classList.remove('on'));clearT();b.classList.add('on');const bar=$('i',b),t0=Date.now();
  every(()=>{const p=(Date.now()-t0)/20000;bar.style.width=Math.min(100,p*100)+'%'},100);
 });
};

/* Headings (reading 10): heads [], texts [{label,text}], key {A:n} */
TYPES.headings=function(a,el){
 let t=0,score=0;const got={};
 el.innerHTML=`<div class="hdTabs" id="ht">${a.texts.map((x,k)=>`<button data-k="${k}">${esc(x.label)}</button>`).join('')}</div>
 <div class="hd"><div class="hdText" id="hx"></div><div class="hdList" id="hl">${a.heads.map((h,k)=>`<button class="part" data-n="${k+1}"><span class="pn">${k+1}</span>${esc(h)}</button>`).join('')}</div></div>`;
 const show=()=>{const x=a.texts[t];$$('#ht button').forEach(b=>{const k=+b.dataset.k;b.classList.toggle('on',k===t);b.classList.toggle('ok',!!got[a.texts[k].label])});
  $('#hx').innerHTML=`<span class="lab">${esc(x.label)}</span><div>${esc(x.text)}</div>${got[x.label]?`<div class="got">${got[x.label]}. ${esc(a.heads[got[x.label]-1])}</div>`:''}`;setCnt(`<span class="sc">${Object.keys(got).length}</span> / ${a.texts.length}`)};
 $$('#ht button').forEach(b=>b.onclick=()=>{t=+b.dataset.k;show()});
 $$('#hl .part').forEach(b=>b.onclick=()=>{const x=a.texts[t],n=+b.dataset.n;if(got[x.label])return;
  if(a.key[x.label]===n){got[x.label]=n;b.classList.add('used');show();const nx=a.texts.findIndex(y=>!got[y.label]);if(nx>-1)after(()=>{t=nx;show()},700)}
  else{b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake')}});
 show();
};

/* Image (EXPERT page) with optional timers & audio */
TYPES.image=function(a,el){
 el.innerHTML=`<div class="imgAct"><img src="${esc(a.img)}" alt="${esc(a.title)}"><div class="side">${a.audio?`<div class="player" style="flex-direction:column;align-items:stretch"><span>${esc(a.audioLabel||'Audio')}</span><audio controls preload="metadata" src="${esc(a.audio)}"></audio></div>`:''}
 ${a.timers?`<div class="box"><div class="tmr" style="margin:0;flex-wrap:wrap"><span class="clock" id="clk">${fmt(a.timers[0])}</span><button class="main" id="prep">${esc(a.tl?a.tl[0]:'Подготовка')}</button><button id="go">${esc(a.tl?a.tl[1]:'Ответ')}</button><button id="st">Стоп</button></div></div>`:''}
 ${a.side?`<div class="box">${a.side}</div>`:''}</div></div>`;
 if(a.timers)clock($('#clk'),{prep:a.timers[0],go:a.timers[1]});
};

/* Sequence: put items in order */
TYPES.sequence=function(a,el){
 let next=0;const pool=shuf(a.items.map((x,i)=>i));
 el.innerHTML=`<div class="ord"><div class="slots">${a.items.map((x,i)=>`<div class="oslot" data-i="${i}"><span class="num">${i+1} · ${esc(x[0])}</span><span class="t"></span></div>`).join('')}</div>
 <div class="pool">${pool.map(i=>`<button class="chip" data-i="${i}">${esc(a.items[i][1])}</button>`).join('')}</div></div>`;
 const cnt=()=>setCnt(next+' / '+a.items.length);cnt();
 $$('.chip',el).forEach(c=>c.onclick=()=>{if(+c.dataset.i===next){const s=$(`.oslot[data-i="${next}"]`,el);s.classList.add('fill');$('.t',s).textContent=c.textContent;c.classList.add('used');next++;cnt()}else{c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake')}});
};

/* Match pairs: left -> right */
TYPES.match=function(a,el){
 let sel=null,done=0;const R=shuf(a.pairs.map((p,i)=>i));
 el.innerHTML=`<div class="mt"><div class="colm">${a.pairs.map((p,i)=>`<button class="mi l" data-i="${i}">${esc(p[0])}</button>`).join('')}</div><div class="colm">${R.map(i=>`<button class="mi r" data-i="${i}">${esc(a.pairs[i][1])}</button>`).join('')}</div></div>`;
 const cnt=()=>setCnt(done+' / '+a.pairs.length);cnt();
 $$('.mi.l',el).forEach(b=>b.onclick=()=>{if(b.classList.contains('pair'))return;$$('.mi.l',el).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=b});
 $$('.mi.r',el).forEach(b=>b.onclick=()=>{if(!sel||b.classList.contains('pair'))return;if(b.dataset.i===sel.dataset.i){b.classList.add('pair');sel.classList.remove('sel');sel.classList.add('pair');sel=null;done++;cnt()}else{b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake')}});
};

/* Link to another trainer on the site */
TYPES.link=function(a,el){
 el.innerHTML=`<div class="linkAct"><p>${a.text||''}</p>${a.links.map(l=>`<a href="${esc(l[1])}" ${l[2]?'target="_blank" rel="noopener"':''}>${esc(l[0])}</a>`).join('')}</div>`;
};
})();

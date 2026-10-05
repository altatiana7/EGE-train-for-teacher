/* ЕГЭ · задания в формате ФИПИ по 13 темам: устная часть 1–4, письмо 37, проект 38 */
(function(){
'use strict';
const base=new URL('./',document.currentScript.src);
const T=()=>window.FIPI_TOPICS||[];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const el=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
const btn=(label,fn,cls)=>{const b=el('button','fp-btn'+(cls?' '+cls:''));b.type='button';b.textContent=label;b.onclick=fn;return b;};
const mmss=s=>{s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');};
let curAudio=null,overlay=null,run=null,catalog=null,micOn=false,stream=null,recorder=null,chunks=[],writeTimer=null;

/* ---------- страницы пособия (только номера страниц) ---------- */
fetch(new URL('../expert/catalog.json',base)).then(r=>r.ok?r.json():null).then(d=>{catalog=d;}).catch(()=>{});
function bookRef(ti,keys){
  if(!catalog||!catalog.topics||!catalog.topics[ti])return '';
  const out=[];
  keys.forEach(([k,title,speakingDoc])=>{
    const list=catalog.topics[ti][k]||[];if(!list.length)return;
    const pages=[...new Set(list.map(p=>{const m=/книга (\d+)/.exec(p.label||'');return speakingDoc?p.page:(m?m[1]:p.page+2);}))];
    out.push(esc(title)+': с. '+pages.join(', ')+(speakingDoc?' (файл «Устная часть. Задания»)':''));
  });
  return out.length?'<h4>В вашем пособии Expert</h4><ul><li>'+out.join('</li><li>')+'</li></ul>':'';
}

/* ---------- звук ---------- */
let actx=null;
function beep(freq,ms){try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=freq||880;g.gain.value=.12;o.connect(g);g.connect(actx.destination);o.start();o.stop(actx.currentTime+(ms||220)/1000);}catch(e){}}
function voice(){const v=window.speechSynthesis?speechSynthesis.getVoices():[];return v.find(x=>/en-GB/i.test(x.lang)&&/female|google|libby|sonia|kate|serena/i.test(x.name))||v.find(x=>/en-GB/i.test(x.lang))||v.find(x=>/^en/i.test(x.lang))||null;}
if(window.speechSynthesis)speechSynthesis.getVoices();
function speak(text,done){
  let finished=false;const end=()=>{if(finished)return;finished=true;clearTimeout(guard);done&&done();};
  const guard=setTimeout(end,text.length*95+4000);
  if(!window.speechSynthesis){setTimeout(end,1500);return ()=>{finished=true;clearTimeout(guard);};}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);const v=voice();if(v)u.voice=v;u.lang=v?v.lang:'en-GB';u.rate=.92;u.onend=end;u.onerror=end;
  speechSynthesis.speak(u);
  return ()=>{finished=true;clearTimeout(guard);speechSynthesis.cancel();};
}

/* ---------- запись ответа ---------- */
async function toggleMic(b){
  if(micOn){micOn=false;if(stream){stream.getTracks().forEach(t=>t.stop());stream=null;}b.setAttribute('aria-pressed','false');b.textContent='Запись ответа: выкл';return;}
  try{stream=await navigator.mediaDevices.getUserMedia({audio:true});micOn=true;b.setAttribute('aria-pressed','true');b.textContent='Запись ответа: вкл';}
  catch(e){alert('Микрофон недоступен. Разрешите доступ к микрофону в браузере.');}
}
function recStart(){if(!micOn||!stream||!window.MediaRecorder)return;if(recorder&&recorder.state==='paused'){recorder.resume();return;}if(recorder&&recorder.state==='recording')return;chunks=[];recorder=new MediaRecorder(stream);recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};recorder.start();}
function recPause(){if(recorder&&recorder.state==='recording')recorder.pause();}
function recStop(target,name){
  if(!recorder||recorder.state==='inactive'){recorder=null;return;}
  const r=recorder;recorder=null;
  r.onstop=()=>{if(!chunks.length||!target.isConnected)return;const blob=new Blob(chunks,{type:r.mimeType||'audio/webm'}),u=URL.createObjectURL(blob);
    const box=el('div','fp-rec','<b>Запись ответа</b> · прослушайте и оцените по критериям ');const a=el('a',null,'Скачать');a.href=u;a.download=name+'.webm';box.append(a);const au=el('audio');au.controls=true;au.src=u;box.append(au);target.append(box);};
  r.stop();
}

/* ---------- оболочка ---------- */
function stopRun(){if(curAudio){curAudio.pause();curAudio=null;}if(run){clearInterval(run.tick);run.cancelSpeak&&run.cancelSpeak();run=null;}if(window.speechSynthesis)speechSynthesis.cancel();if(recorder&&recorder.state!=='inactive'){recorder.onstop=null;recorder.stop();}recorder=null;clearInterval(writeTimer);writeTimer=null;}
function shell(title,back,backLabel){
  stopRun();
  if(!overlay){overlay=el('section','fp-overlay');overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','Задания в формате ФИПИ');document.body.appendChild(overlay);}
  overlay.hidden=false;overlay.innerHTML='';
  const nav=el('div','fp-nav');nav.append(btn('← '+(backLabel||'Все темы'),back||close,'fp-main'));const h=el('h2');h.textContent=title;nav.append(h,btn('Закрыть',close));
  const body=el('div','fp-body');overlay.append(nav,body);document.body.style.overflow='hidden';return {nav,body};
}
function close(){stopRun();if(overlay){overlay.hidden=true;overlay.innerHTML='';}document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay&&!overlay.hidden&&!/TEXTAREA/.test(document.activeElement.tagName))close();});

window.openFipi=function(){
  close();document.body.classList.remove('fullWeek');
  const lp=document.getElementById('lessonPage');if(lp)lp.style.display='none';
  document.querySelectorAll('.content').forEach(e=>e.classList.remove('on'));
  const host=document.getElementById('trainerView');host.classList.add('on');
  document.querySelectorAll('.wbtn,.teacherNav').forEach(e=>e.classList.remove('active'));
  const side=document.getElementById('side');if(side)side.classList.remove('open');
  host.innerHTML='';const box=el('div','fp-shell','<h1>ЕГЭ · задания в формате ФИПИ</h1><p>13 тем кодификатора и блок «Россия» · устная часть 1–4 с таймерами · письмо 37 · проект 38 · ключи открываются отдельной кнопкой</p>');
  const grids={};
  T().forEach((t,i)=>{const gname=t.group||'Темы кодификатора';if(!grids[gname]){box.append(el('div','fp-sec',esc(gname)));grids[gname]=el('div','fp-grid');box.append(grids[gname]);}
    const b=el('button','fp-topic','<b>'+String(i+1).padStart(2,'0')+' · '+esc(t.name)+'</b><small>Speaking 1–4 · 2 варианта<br>Writing 37 · 38.1 · 38.2'+(t.gr?'<br>Grammar 19–24 · Word formation 25–29':'')+'</small>');b.type='button';b.onclick=()=>openTopic(i);grids[gname].append(b);});
  if(window.FIPI_INTERVIEWS){box.append(el('div','fp-sec','Задание 3 · интервью из Открытого банка ФИПИ · аудио с паузами 40 секунд'));const g=el('div','fp-grid fp-ivgrid');
    window.FIPI_INTERVIEWS.forEach((v,k)=>{const b=el('button','fp-topic','<b>'+v.n+' · '+esc(v.theme)+'</b><small>'+(v.audio?'аудио · 4:20':'без аудио · озвучка браузера')+'</small>');b.type='button';b.onclick=()=>openBankIv(k,null);g.append(b);});box.append(g);}
  if(window.FIPI_BANK){const d=el('details','fp-bank','<summary>Задания о России в Открытом банке ФИПИ · по кодам</summary><p>Официальные задания открываются на сайте ФИПИ: <a href="https://ege.fipi.ru/bank/" target="_blank" rel="noopener">ege.fipi.ru/bank</a> → Английский язык → поиск по номеру задания.</p>'+window.FIPI_BANK.map(g=>'<h4>'+esc(g[0])+'</h4><ul><li>'+g[1].map(esc).join('</li><li>')+'</li></ul>').join(''));box.append(d);}
  box.append(el('p','fp-note','Тексты заданий составлены специально для этого сайта по модели демоверсии ФИПИ. Номера страниц пособия Expert по каждой теме указаны в ключах.'));
  host.append(box);window.scrollTo(0,0);
};

function openTopic(i){
  const t=T()[i],{nav,body}=shell(t.name,null),n=T().length;
  nav.insertBefore(btn('← Тема',()=>openTopic((i+n-1)%n)),nav.lastChild);nav.insertBefore(btn('Тема →',()=>openTopic((i+1)%n)),nav.lastChild);
  const w=el('div','fp-wrap');body.append(w);
  const group=(title)=>{w.append(el('div','fp-sec',title));const g=el('div','fp-actions');w.append(g);return g;};
  const add=(g,title,sub,fn,cls)=>{const b=el('button',cls||'',esc(title)+'<small>'+esc(sub)+'</small>');b.type='button';b.onclick=fn;g.append(b);};
  let g=group('Устная часть · по одному заданию');
  add(g,'Задание 1 · Reading aloud','подготовка 1:30 · ответ 1:30',()=>openSpeak(i,1,0));
  [0,1].forEach(v=>add(g,'Задание 2 · вариант '+(v+1),t.ads[v].title,()=>openSpeak(i,2,v)));
  [0,1].forEach(v=>add(g,'Задание 3 · вариант '+(v+1),'Интервью: '+t.iv[v].theme+' · вопросы только звучат',()=>openSpeak(i,3,v)));
  [0,1].forEach(v=>add(g,'Задание 4 · вариант '+(v+1),'Проект «'+t.ph[v].project+'»',()=>openSpeak(i,4,v)));
  const bank=(window.FIPI_INTERVIEWS||[]).map((v,k)=>[v,k]).filter(x=>x[0].topic===t.id);
  if(bank.length){g=group('Задание 3 · интервью из банка ФИПИ · аудио');bank.forEach(x=>add(g,'Вариант '+x[0].n+' · '+x[0].theme,x[0].audio?'запись диктора с паузами по 40 секунд':'без аудио · озвучка браузера',()=>openBankIv(x[1],i)));}
  g=group('Устная часть целиком · как на экзамене');
  [0,1].forEach(v=>add(g,'Вариант '+(v+1)+' · задания 1–4 подряд','около 17 минут · переход к следующему заданию кнопкой',()=>openSpeak(i,1,v,true),'fp-chain'));
  g=group('Письменная часть');
  add(g,'Задание 37 · Email','100–140 слов · письмо от '+t.mail.from,()=>openWrite(i,37,0));
  add(g,'Задание 38.1 · таблица','200–250 слов · '+t.pr[0].col,()=>openWrite(i,38,0));
  add(g,'Задание 38.2 · диаграмма','200–250 слов · '+t.pr[1].col,()=>openWrite(i,38,1));
  if(t.gr||t.wf){g=group('Грамматика и лексика');
    if(t.gr)add(g,'Задания 19–24 · Grammar',t.gr.title,()=>openGap(i,'gr'));
    if(t.wf)add(g,'Задания 25–29 · Word formation',t.wf.title,()=>openGap(i,'wf'));}
}

/* ---------- картинки: файл fipi/img/<имя>.jpg, иначе место под фото ---------- */
function picture(name,label,desc){
  const box=el('div');const img=new Image();img.alt=desc;
  const ph=el('div','fp-ph','<small>'+esc(label)+' · фото будет добавлено</small>'+esc(desc));
  box.append(ph);img.onload=()=>{box.innerHTML='';box.append(img);};img.src=new URL('img/'+name+'.jpg',base).href;return box;
}

/* ---------- устная часть ---------- */
const INST={
 1:'Task 1. Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.',
 3:'Task 3. You are going to give an interview. You have to answer five questions. Give full answers to the questions (2–3 sentences). Remember that you have 40 seconds to answer each question.'
};
function openSpeak(ti,task,v,chain,ivOver){
  const t=T()[ti],{body}=shell(t.name+' · Задание '+task+(chain?' · вариант '+(v+1)+' целиком':''),()=>openTopic(ti),'К теме');
  const kim=el('div','fp-kim'),head=el('div','fp-kimhead'),bar=el('div','fp-bar','<i></i>'),kb=el('div','fp-kimbody');
  const phase=el('span','fp-phase','Нажмите «Начать»'),clock=el('span','fp-clock','0:00');
  head.append(el('b',null,'Задание '+task),phase,clock);kim.append(head,bar,kb);
  let phases=[],points=null,big=null,keyHtml='';
  if(task===1){
    kb.append(el('p','fp-inst',esc(INST[1])),el('div','fp-text',esc(t.read)));
    phases=[{label:'Подготовка',kind:'prep',sec:90},{label:'Ответ',kind:'answer',sec:90}];
    keyHtml='<h4>Оценивание · 1 балл</h4><p>Речь воспринимается легко, нет необоснованных пауз, фразовое ударение и интонация без нарушений нормы; не более пяти фонетических ошибок, из них не более двух искажают смысл.</p><p>В тексте '+t.read.split(/\s+/).length+' слов.</p>'+bookRef(ti,[['reading','Текст для чтения',true]]);
  }
  if(task===2){
    const a=t.ads[v];
    kb.append(el('p','fp-inst','Task 2. Study the advertisement.'),el('div','fp-adtitle',esc(a.title)));
    const ap=el('div','fp-adpic');ap.append(picture(t.id+'-ad'+(v+1),'Картинка объявления',a.pic));kb.append(ap);
    kb.append(el('p','fp-inst',esc(a.intro)+' In 1.5 minutes you are to ask four direct questions to find out about the following:'));
    points=el('ol','fp-points');a.points.forEach(p=>points.append(el('li',null,esc(p))));kb.append(points);
    kb.append(el('p','fp-inst','You have 20 seconds to ask each question.'));
    phases=[{label:'Подготовка',kind:'prep',sec:90}].concat(a.points.map((p,k)=>({label:'Вопрос '+(k+1),kind:'answer',sec:20,point:k})));
    keyHtml='<h4>Возможные вопросы</h4><ol><li>'+a.key.map(esc).join('</li><li>')+'</li></ol><h4>Оценивание · 4 балла</h4><p>По 1 баллу за вопрос: вопрос прямой, отвечает пункту задания, грамматически верен, фонетика и лексика не мешают пониманию.</p>'+bookRef(ti,[['questions','Задание 2',true],['speakingKeys','Модели ответов']]);
  }
  if(task===3){
    const iv=ivOver||t.iv[v];
    kb.append(el('p','fp-inst',esc(INST[3])));big=el('div','fp-big','Interview<small>Вопросы не показываются на экране – их нужно слушать.</small>');kb.append(big);
    const say=(text,label,k)=>({label:label,kind:'listen',text:text,q:k});
    phases=[say("Hello everybody! It's Teenagers Round the World Channel. Our guest today is a teenager from Russia and we are going to discuss "+iv.theme+". We'd like to know our guest's point of view on this issue. Please answer five questions. So, let's get started.",'Вступление')];
    iv.q.forEach((q,k)=>{phases.push(say(q,'Вопрос '+(k+1),k),{label:'Ответ '+(k+1),kind:'answer',sec:40,q:k});});
    phases.push(say('Thank you very much for your interview.','Завершение'));
    keyHtml='<h4>Вопросы интервьюера</h4><ol><li>'+iv.q.map(esc).join('</li><li>')+'</li></ol><h4>Оценивание · 5 баллов</h4><p>По 1 баллу за ответ: полный и точный ответ из 2–3 фраз, без ошибок, мешающих пониманию. Односложный ответ или ответ не на тот вопрос – 0.</p>'+bookRef(ti,[['scripts','Скрипты интервью'],['speakingKeys','Модели ответов']]);
    if(!window.speechSynthesis)kb.append(el('p',null,'В этом браузере нет озвучивания текста – откройте ключ и прочитайте вопросы ученице вслух.'));
  }
  if(task===4){
    const p=t.ph[v];
    kb.append(el('p','fp-inst','Task 4. Imagine that you and your friend are doing a school project “'+esc(p.project)+'”. You have found some photos to illustrate it but for technical reasons you cannot send them now. Leave a voice message to your friend explaining your choice of the photos and sharing some ideas about the project. In 2.5 minutes be ready to:'));
    kb.append(el('ul','fp-points','<li>explain the choice of the illustrations for the project by briefly describing them and noting the differences;</li><li>mention the advantages (1–2) of '+esc(p.kind)+';</li><li>mention the disadvantages (1–2) of '+esc(p.kind)+';</li><li>express your opinion on the subject of the project – '+esc(p.pref)+'.</li>'));
    kb.append(el('p','fp-inst','You will speak for not more than 3 minutes (12–15 sentences). You have to talk continuously.'));
    const pics=el('div','fp-pics');[['a','Photo 1',p.p1],['b','Photo 2',p.p2]].forEach(x=>{const d=el('div','fp-pic',x[1]);d.append(picture(t.id+'-ph'+(v+1)+x[0],x[1],x[2]));pics.append(d);});kb.append(pics);
    phases=[{label:'Подготовка',kind:'prep',sec:150},{label:'Ответ',kind:'answer',sec:180}];
    keyHtml='<h4>Идеи для ответа</h4><p><b>Advantages:</b> '+esc(p.adv)+'</p><p><b>Disadvantages:</b> '+esc(p.dis)+'</p><h4>Оценивание · 10 баллов</h4><ul><li>Решение коммуникативной задачи – 4: раскрыты все четыре пункта плана, 12–15 фраз.</li><li>Организация – 3: обращение к другу, вступление и заключение, средства связи.</li><li>Языковое оформление – 3.</li></ul>'+bookRef(ti,[['photos','Задание 4',true],['speakingKeys','Модели ответов']]);
  }
  body.append(kim);
  const ctrl=el('div','fp-ctrl'),recBox=el('div'),key=el('div','fp-key',keyHtml);key.hidden=true;
  const startB=btn('Начать',()=>start(),'fp-main'),pauseB=btn('Пауза',()=>pause()),skipB=btn('Следующий этап →',()=>next());
  const micB=btn('Запись ответа: '+(micOn?'вкл':'выкл'),()=>toggleMic(micB));micB.setAttribute('aria-pressed',micOn?'true':'false');
  const keyB=btn('Ключ · для учителя',()=>{key.hidden=!key.hidden;},'fp-red fp-sp');
  ctrl.append(startB,pauseB,skipB,micB,keyB);
  if(chain&&task<4)ctrl.insertBefore(btn('Задание '+(task+1)+' →',()=>openSpeak(ti,task+1,v,true)),keyB);
  body.append(ctrl,recBox,key);
  pauseB.disabled=skipB.disabled=true;

  function paint(){
    const p=phases[run.i];
    phase.textContent=p.label+(p.kind==='prep'?' · подготовка':p.kind==='answer'?' · говорите':' · слушайте');
    clock.className='fp-clock'+(p.kind==='answer'?' fp-answer':p.kind==='listen'?' fp-listen':'');bar.className='fp-bar'+(p.kind==='answer'?' fp-answer':'');
    if(p.kind==='listen'){clock.textContent='♪';bar.firstChild.style.width='100%';}
    else{clock.textContent=mmss(run.left);bar.firstChild.style.width=(100*(1-run.left/p.sec))+'%';}
  }
  function enter(){
    const p=phases[run.i];
    if(points&&points.tagName==='OL')[...points.children].forEach((li,k)=>{li.className=p.point===k?'fp-now':(p.point>k?'fp-done':'');});
    if(big)big.innerHTML=p.q!=null?(p.kind==='listen'?'Question '+(p.q+1)+' of 5<small>Слушайте вопрос</small>':'Question '+(p.q+1)+' of 5<small>Отвечайте: 2–3 фразы</small>'):(run.i===0?'Interview<small>Слушайте вступление</small>':'Interview<small>Интервью окончено</small>');
    if(p.kind==='answer'){beep(880,250);recStart();}else recPause();
    if(p.kind==='listen'){run.cancelSpeak=speak(p.text,()=>{if(run&&phases[run.i]===p&&!run.paused)next();});}
    else{run.left=p.sec;run.end=Date.now()+p.sec*1000;}
    paint();
  }
  function start(){
    stopRun();recBox.innerHTML='';
    run={i:0,left:0,end:0,paused:false,cancelSpeak:null,tick:null};
    run.tick=setInterval(()=>{if(!run||run.paused)return;const p=phases[run.i];if(p.kind==='listen')return;run.left=(run.end-Date.now())/1000;if(run.left<=0)next();else paint();},200);
    startB.textContent='Сначала';pauseB.disabled=skipB.disabled=false;pauseB.textContent='Пауза';enter();
  }
  function next(){
    if(!run)return;run.cancelSpeak&&run.cancelSpeak();run.cancelSpeak=null;
    if(run.i>=phases.length-1){finish();return;}
    run.i++;run.paused=false;pauseB.textContent='Пауза';enter();
  }
  function pause(){
    if(!run)return;const p=phases[run.i];
    if(!run.paused){run.paused=true;pauseB.textContent='Продолжить';if(p.kind==='listen'){run.cancelSpeak&&run.cancelSpeak();}else{run.left=(run.end-Date.now())/1000;recPause();}}
    else{run.paused=false;pauseB.textContent='Пауза';if(p.kind==='listen')enter();else{run.end=Date.now()+run.left*1000;if(p.kind==='answer')recStart();}}
  }
  function finish(){
    clearInterval(run.tick);run=null;beep(520,500);
    phase.textContent='Время вышло · задание завершено';clock.className='fp-clock';clock.textContent='0:00';bar.firstChild.style.width='100%';
    if(points&&points.tagName==='OL')[...points.children].forEach(li=>li.className='');
    pauseB.disabled=skipB.disabled=true;recStop(recBox,t.id+'-task'+task+'-v'+(v+1));
  }
}

function openBankIv(k,backTi){
  const v=window.FIPI_INTERVIEWS[k],back=backTi==null?close:()=>openTopic(backTi);
  if(!v.audio){let ti=T().findIndex(t=>t.id===v.topic);if(ti<0)ti=0;openSpeak(ti,3,0,false,{theme:v.theme.toLowerCase(),q:v.q});return;}
  const {body}=shell('Задание 3 · вариант '+v.n+' · '+v.theme,back,backTi==null?'К списку':'К теме');
  const kim=el('div','fp-kim'),head=el('div','fp-kimhead'),bar=el('div','fp-bar','<i></i>'),kb=el('div','fp-kimbody');
  const phase=el('span','fp-phase','Нажмите «Начать»'),clock=el('span','fp-clock','0:00');
  head.append(el('b',null,'Задание 3'),phase,clock);kim.append(head,bar,kb);
  const big=el('div','fp-big','Interview<small>Вопросы не показываются на экране – их нужно слушать. После каждого вопроса в записи пауза 40 секунд для ответа.</small>');
  kb.append(el('p','fp-inst',esc(INST[3])),big);body.append(kim);
  const au=new Audio(new URL('audio/iv'+String(v.n).padStart(2,'0')+'.mp3',base).href);au.preload='metadata';
  const ctrl=el('div','fp-ctrl'),recBox=el('div'),key=el('div','fp-key','<h4>Вопросы интервьюера</h4><ol><li>'+v.q.map(esc).join('</li><li>')+'</li></ol><h4>Оценивание · 5 баллов</h4><p>По 1 баллу за ответ: полный и точный ответ из 2–3 фраз, без ошибок, мешающих пониманию. Односложный ответ или ответ не на тот вопрос – 0.</p><p>Источник: Открытый банк заданий ЕГЭ, ФИПИ.</p>');key.hidden=true;
  const startB=btn('Начать',()=>{stopRun();recBox.innerHTML='';curAudio=au;au.currentTime=0;au.play().then(()=>{recStart();startB.textContent='Сначала';pauseB.disabled=false;pauseB.textContent='Пауза';}).catch(()=>{phase.textContent='Запись не загрузилась · повторите';});},'fp-main');
  const pauseB=btn('Пауза',()=>{if(au.paused){au.play();recStart();pauseB.textContent='Пауза';}else{au.pause();recPause();pauseB.textContent='Продолжить';}});pauseB.disabled=true;
  const micB=btn('Запись ответа: '+(micOn?'вкл':'выкл'),()=>toggleMic(micB));micB.setAttribute('aria-pressed',micOn?'true':'false');
  ctrl.append(startB,pauseB,micB,btn('Ключ · для учителя',()=>{key.hidden=!key.hidden;},'fp-red fp-sp'));body.append(ctrl,recBox,key);
  au.ontimeupdate=()=>{if(!au.duration)return;clock.textContent=mmss(au.duration-au.currentTime);clock.className='fp-clock fp-listen';bar.firstChild.style.width=(100*au.currentTime/au.duration)+'%';phase.textContent='Идёт интервью · слушайте и отвечайте';};
  au.onended=()=>{phase.textContent='Интервью окончено';clock.className='fp-clock';clock.textContent='0:00';pauseB.disabled=true;beep(520,500);recStop(recBox,'interview-v'+v.n);curAudio=null;};
  au.onerror=()=>{phase.textContent='Запись не загрузилась · обновите страницу';};
}

/* ---------- письменная часть ---------- */
const FILL=['#0039a6','#d52b1e','#f2b705','#2e9d5b','#b9c2d0'];
function pie(rows){
  let a=-Math.PI/2,s='';const R=110,C=125;
  rows.forEach((r,k)=>{const b=a+r[1]/100*2*Math.PI,x1=C+R*Math.cos(a),y1=C+R*Math.sin(a),x2=C+R*Math.cos(b),y2=C+R*Math.sin(b),m=(a+b)/2;
    s+='<path d="M'+C+' '+C+'L'+x1.toFixed(1)+' '+y1.toFixed(1)+'A'+R+' '+R+' 0 '+(b-a>Math.PI?1:0)+' 1 '+x2.toFixed(1)+' '+y2.toFixed(1)+'Z" fill="'+FILL[k]+'" stroke="#fff" stroke-width="2"/>';
    s+='<text x="'+(C+R*.66*Math.cos(m)).toFixed(1)+'" y="'+(C+R*.66*Math.sin(m)+5).toFixed(1)+'" text-anchor="middle" font-size="14" font-weight="700" fill="'+(k===2||k===4?'#111':'#fff')+'">'+r[1]+'%</text>';a=b;});
  return '<div class="fp-chart"><svg viewBox="0 0 250 250" role="img" aria-label="Pie chart">'+s+'</svg><div class="fp-legend">'+rows.map((r,k)=>'<div><i style="background:'+FILL[k]+'"></i>'+esc(r[0])+' – '+r[1]+'%</div>').join('')+'</div></div>';
}
function openWrite(ti,task,v){
  const t=T()[ti],is37=task===37,title=is37?'Задание 37':'Задание 38.'+(v+1),{body}=shell(t.name+' · '+title,()=>openTopic(ti),'К теме');
  const lim=is37?{min:100,max:140,lo:90,hi:154,time:20}:{min:200,max:250,lo:180,hi:275,time:40};
  const grid=el('div','fp-write'),kim=el('div','fp-kim'),kb=el('div','fp-kimbody');kim.append(el('div','fp-kimhead','<b>'+title+'</b>'),kb);
  let keyHtml='';
  if(is37){
    const m=t.mail;
    kb.append(el('p','fp-inst','You have received an email message from your English-speaking pen-friend '+esc(m.from)+':'));
    kb.append(el('div','fp-mail','<div><b>From:</b> '+esc(m.from)+'@mail.uk</div><div><b>To:</b> Russian_friend@ege.ru</div><div><b>Subject:</b> '+esc(m.subject)+'</div><p>'+esc(m.body)+'</p>'));
    kb.append(el('p','fp-inst','Write an email to '+esc(m.from)+'.<br>In your message:<br>– answer '+(m.g||(/^(Emily|Alice|Jessica|Sarah|Laura|Helen)$/.test(m.from)?'her':'his'))+' questions;<br>– ask <b>3 questions</b> about '+esc(m.ask)+'.<br>Write <b>100–140 words</b>.<br>Remember the rules of email writing.'));
    keyHtml='<h4>Образец ответа · '+countWords(m.sample)+' слов</h4><pre>'+esc(m.sample)+'</pre><h4>Оценивание · 6 баллов</h4><ul><li>Решение коммуникативной задачи – 2: ответы на три вопроса, три вопроса по теме, благодарность, надежда на контакт, обращение, завершающая фраза, подпись.</li><li>Организация текста – 2: логика, абзацы, средства связи.</li><li>Языковое оформление – 2.</li></ul><p>Объём: меньше 90 слов – 0 баллов за задание; больше 154 – проверяются первые 140 слов.</p>'+bookRef(ti,[['email','Письмо'],['writingKeys','Ключи и образцы']]);
  }else{
    const p=t.pr[v],chart=v===1,word=chart?'pie chart':'table',top=p.rows.slice().sort((a,b)=>b[1]-a[1]);
    kb.append(el('p','fp-inst','Imagine that you are doing a project on <b>'+esc(p.subject)+'</b>. You have found some data on the subject – the results of the opinion polls (see the '+word+' below).'));
    kb.append(el('p','fp-inst','Comment on the data in the '+word+' and give your opinion on the subject of the project.'));
    kb.append(el('div',null,chart?pie(p.rows):'<table class="fp-tab"><tr><th>'+esc(p.col)+'</th><th>Number of respondents (%)</th></tr>'+p.rows.map(r=>'<tr><td>'+esc(r[0])+'</td><td>'+r[1]+'</td></tr>').join('')+'</table>'));
    kb.append(el('p','fp-inst','Write <b>200–250 words</b>.<br>Use the following plan:<br>– make an opening statement on the subject of the project;<br>– select and report 2–3 facts;<br>– make 1–2 comparisons where relevant and give your comments;<br>– outline a problem that can arise with '+esc(p.problem)+' and suggest a way of solving it;<br>– conclude by giving and explaining your opinion on '+esc(p.opinion)+'.'));
    const L=top.length-1;
    keyHtml='<h4>Опорные данные</h4><ul><li>Самый высокий показатель: '+esc(top[0][0])+' – '+top[0][1]+'%.</li><li>Второе место: '+esc(top[1][0])+' – '+top[1][1]+'%.</li><li>Самый низкий показатель: '+esc(top[L][0])+' – '+top[L][1]+'%.</li><li>Сравнения: '+esc(top[0][0])+' выше, чем '+esc(top[1][0])+', на '+(top[0][1]-top[1][1])+' п. п.; '+esc(top[0][0])+' примерно в '+(top[0][1]/top[L][1]).toFixed(0)+' раз(а) выше, чем '+esc(top[L][0])+'.</li></ul><h4>Проблема и решение</h4><p>'+esc(p.hint)+'</p><h4>Каркас ответа</h4><pre>Nowadays … . That is why I am doing a project on '+esc(p.subject)+'. As part of my project, I have found some data and I would like to comment on it.\n\nAccording to the '+word+', … is the most popular option ('+top[0][1]+'%). … comes second with '+top[1][1]+'%. The least popular option is … (only '+top[L][1]+'%).\n\nIt is clear that … is more popular than … – the difference is … %. I think this is because … .\n\nHowever, a problem can arise with '+esc(p.problem)+'. … . To solve it, … .\n\nIn conclusion, I believe that … because … .</pre><h4>Оценивание · 14 баллов</h4><ul><li>Решение коммуникативной задачи – 3 (все пять пунктов плана, нейтральный стиль).</li><li>Организация текста – 3 (5 абзацев, средства связи).</li><li>Лексика – 3 · Грамматика – 3 · Орфография и пунктуация – 2.</li></ul><p>Объём: меньше 180 слов – 0 баллов за задание; больше 275 – проверяются первые 250 слов.</p>'+bookRef(ti,[['project','Проект 38'],['writingKeys','Ключи и образцы']]);
  }
  const paper=el('div','fp-paper'),ta=el('textarea'),cnt=el('div','fp-count'),store='fipi:'+t.id+':'+task+':'+v;
  ta.placeholder='Пишите ответ здесь…';ta.spellcheck=false;try{ta.value=localStorage.getItem(store)||'';}catch(e){}
  const num=el('b'),msg=el('span'),clock=el('span','fp-clock',lim.time+':00');
  const upd=()=>{const n=countWords(ta.value);num.textContent=n;const ok=n>=lim.min&&n<=lim.max,soft=n>=lim.lo&&n<=lim.hi;num.className=ok?'fp-ok':(soft?'':'fp-bad');msg.textContent='слов · нужно '+lim.min+'–'+lim.max+(n&&!ok&&soft?' · в допустимых пределах':n>lim.hi?' · лишнее не проверяется':n&&n<lim.lo?' · слишком мало':'');try{localStorage.setItem(store,ta.value);}catch(e){}};
  ta.oninput=upd;cnt.append(num,msg);
  const tools=el('div','fp-count');let end=0;
  tools.append(clock,btn('Таймер '+lim.time+' мин',()=>{clearInterval(writeTimer);end=Date.now()+lim.time*60000;writeTimer=setInterval(()=>{const s=(end-Date.now())/1000;clock.textContent=mmss(s);clock.className='fp-clock'+(s<120?' fp-answer':'');if(s<=0){clearInterval(writeTimer);beep(520,500);}},500);}),
    btn('Копировать ответ',()=>{navigator.clipboard&&navigator.clipboard.writeText(ta.value);}),btn('Очистить',()=>{if(confirm('Удалить текст ответа?')){ta.value='';upd();}}));
  paper.append(ta,cnt,tools);upd();grid.append(kim,paper);body.append(grid);
  const key=el('div','fp-key',keyHtml);key.hidden=true;const ctrl=el('div','fp-ctrl');ctrl.style.maxWidth='1400px';key.style.maxWidth='1400px';
  ctrl.append(btn('Ключ · для учителя',()=>{key.hidden=!key.hidden;},'fp-red fp-sp'));body.append(ctrl,key);
}
/* ---------- грамматика 19–24 и словообразование 25–29 ---------- */
const GAPINST={
 gr:'Прочитайте приведённый ниже текст. Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, обозначенных номерами 19–24, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами. Каждый пропуск соответствует отдельному заданию из группы 19–24.',
 wf:'Прочитайте приведённый ниже текст. Образуйте от слов, напечатанных заглавными буквами в конце строк, обозначенных номерами 25–29, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста. Заполните пропуски полученными словами. Каждый пропуск соответствует отдельному заданию из группы 25–29.'};
const norm=x=>String(x).toLowerCase().replace(/[^a-z']/g,'');
function openGap(ti,kind){
  const t=T()[ti],d=t[kind],first=kind==='gr'?19:25,title='Задания '+first+'–'+(first+d.items.length-1),{body}=shell(t.name+' · '+title,()=>openTopic(ti),'К теме');
  const kim=el('div','fp-kim'),kb=el('div','fp-kimbody');kim.append(el('div','fp-kimhead','<b>'+title+'</b><span class="fp-phase">'+(kind==='gr'?'Грамматика':'Словообразование')+'</span>'),kb);
  kb.append(el('p','fp-inst',GAPINST[kind]),el('div','fp-adtitle',esc(d.title)));
  const tab=el('table','fp-gap'),inputs=[];
  d.items.forEach((it,k)=>{const tr=el('tr'),td=el('td');const inp=el('input');inp.type='text';inp.autocomplete='off';inp.spellcheck=false;inp.setAttribute('aria-label','Ответ '+(first+k));inputs.push(inp);
    td.append(document.createTextNode(it[0]+(it[0]?' ':'')),inp,document.createTextNode(it[1]));tr.append(el('td','fp-gapn',String(first+k)),td,el('td','fp-gapw',esc(it[2])));tab.append(tr);});
  kb.append(tab);body.append(kim);
  const res=el('span','fp-phase'),key=el('div','fp-key','<h4>Ответы</h4><ol start="'+first+'"><li>'+d.items.map(it=>esc(it[3].join(' / '))).join('</li><li>')+'</li></ol><p>В бланк ответов ЕГЭ ответ из нескольких слов записывается без пробелов. По 1 баллу за каждый верный ответ; орфографическая ошибка – 0.</p>');key.hidden=true;
  const ctrl=el('div','fp-ctrl');
  ctrl.append(btn('Проверить',()=>{let n=0;inputs.forEach((inp,k)=>{const ok=d.items[k][3].some(a=>norm(a)===norm(inp.value));inp.className=inp.value.trim()?(ok?'fp-right':'fp-wrong'):'';if(ok)n++;});res.textContent='Верно: '+n+' из '+inputs.length;},'fp-main'),
    btn('Очистить',()=>{inputs.forEach(i=>{i.value='';i.className='';});res.textContent='';}),res,btn('Ключ · для учителя',()=>{key.hidden=!key.hidden;},'fp-red fp-sp'));
  body.append(ctrl,key);
}
/* подсчёт слов по правилам ЕГЭ: считаются все слова, включая артикли и предлоги; сокращения (I'm) и числа – одно слово */
function countWords(s){const m=String(s).trim().match(/[A-Za-zА-Яа-яЁё0-9]+(?:['’\-][A-Za-zА-Яа-яЁё0-9]+)*/g);return m?m.length:0;}
window.FIPI_countWords=countWords;
})();

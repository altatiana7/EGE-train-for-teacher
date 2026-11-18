/* Главный экран учителя: «На уроке · дата» и «Домашка Арины» по датам уроков.
   Уроки Арины: понедельник, среда, суббота. Дата всегда настоящая (берётся с компьютера).
   · «На уроке» показывает урок на сегодня (если сегодня день занятий) или на ближайший день занятий.
     Материал привязывается к дате: у кнопки урока в боковом меню стоит data-lessondate="ГГГГ-ММ-ДД".
   · «Домашка Арины» читает общий список домашек с сайта Арины (hw-list.js) и сверяет его с тем, что Арина реально прислала. */
(function(){
'use strict';
var DAYS=[1,3,6];
function d0(x){var d=x instanceof Date?new Date(x.getTime()):(function(s){var p=String(s).split('-');return new Date(+p[0],+p[1]-1,+p[2])})(x);d.setHours(0,0,0,0);return d}
function iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function isLesson(x){return DAYS.indexOf(d0(x).getDay())>-1}
function onOrBefore(x){var d=d0(x);while(!isLesson(d))d.setDate(d.getDate()-1);return d}
function nextAfter(x){var d=d0(x);do{d.setDate(d.getDate()+1)}while(!isLesson(d));return d}
function ru(x,o){return d0(x).toLocaleDateString('ru-RU',o||{day:'numeric',month:'long'})}
function ruDay(x){return ru(x,{weekday:'long',day:'numeric',month:'long'})}
function ruShort(x){return ru(x)+' · '+ru(x,{weekday:'short'})}
function esc(v){return String(v==null?'':v).replace(/[&<>"]/g,function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]})}

/* ---------- Главный экран (18.11.2026): три колонки ----------
   1) «Урок» — последний урок (сегодня, если сегодня день занятий): что сделали на уроке и выдан ли Homework после него.
   2) «Следующий урок» — дата, материал готов / не готов, что дальше по Program.
   3) «Arina Homework» — по одной строке на каждую выдачу, раскрывается по клику; под ней Study Progress. */
function lessonButtons(){var side=document.getElementById('side');return side?[].slice.call(side.querySelectorAll('button')).filter(function(b){return /openLesson\(/.test(b.getAttribute('onclick')||'')}):[]}
function sub(b){var s=b.querySelector('small');return (s?s.textContent:b.textContent).replace(/^Неделя\s*\d+\s*·\s*/,'')}
function strip(h){return String(h||'').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').trim()}
function wi(b){var m=/openLesson\((\d+)\s*,\s*(\d+)\)/.exec(b.getAttribute('onclick')||'');return m?[+m[1],+m[2]]:null}
function progLessons(){var r=[];try{(window.PROGRAM&&PROGRAM.blocks||[]).forEach(function(bl){(bl.lessons||[]).forEach(function(l){if(l.date)r.push({b:bl,l:l})})})}catch(e){}return r.sort(function(a,b){return a.l.date<b.l.date?-1:1})}
function progBtn(o,cls,full){var href=o.l.id?'program/lesson.html?id='+o.l.id+'&v=20261118b':'program/index.html?v=20261118b#'+o.b.id;
 return '<button type="button" class="efChip '+(cls||'')+'" onclick="location.href=\''+href+'\'"><b>'+(full?'Program · '+esc(o.b.title)+' · открыть':esc(ruShort(o.l.date))+' · '+esc(o.b.title))+'</b>'+esc(o.l.label)+(full&&o.l.plan?' — '+esc(o.l.plan):'')+'</button>'}
/* шаги урока и отметки «сделали на уроке» */
function lessonSteps(b){var p=wi(b);if(!p)return [];
 try{var x=weeks[p[0]].l[p[1]],T=lessonTabs(x,p[1],p[0]),M=typeof arinaClassGet==='function'?arinaClassGet():{};
  return T.steps.map(function(s){var t=strip(s[0]);return {t:t,d:M[arinaClassId(p[0],p[1],s[0])]||''}}).filter(function(s){return s.t})}catch(e){return []}}
function sd(x){var d=d0(x);return String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')+' · '+ru(x,{weekday:'short'})}
function hwFor(lk){return batches().filter(function(b){return b.lesson===lk})}

window.efOnLessonHTML=function(){
 var now=new Date(),today=iso(now),last=onOrBefore(now),lk=iso(last),isToday=lk===today,next=nextAfter(last),nk=iso(next);
 var btns=lessonButtons(),P=progLessons();
 /* --- колонка 1: урок --- */
 var lb=btns.filter(function(b){return b.dataset.lessondate===lk})[0];
 var lp=P.filter(function(o){return o.l.date===lk});
 var c1='';
 if(lb){var S=lessonSteps(lb),dn=S.filter(function(s){return s.d}).length;
  var q=wi(lb);c1+='<button type="button" class="efChip now olGo" onclick="'+esc(lb.getAttribute('onclick'))+'"><b>Открыть урок</b>'+(q?'Неделя '+(q[0]+1)+' · Урок '+(q[1]+1):esc(sub(lb)))+'</button>';
  if(S.length)c1+='<div class="olHead">На уроке · сделано '+dn+' из '+S.length+'</div><ul class="olSteps">'+S.map(function(s){return '<li class="'+(s.d?'ok':'')+'"><i>'+(s.d?'✓':'')+'</i><span>'+esc(s.t)+'</span></li>'}).join('')+'</ul>';
 }
 c1+=lp.map(function(o){return progBtn(o,'now olGo',1)}).join('');
 if(!lb&&!lp.length)c1+='<div class="olNone soft">Урок за эту дату в меню не найден.</div>';
 /* Homework после урока */
 var H=hwFor(lk),late=!isToday||now.getHours()>=21;
 if(H.length){var n=0;H.forEach(function(b){n+=b.tasks.filter(function(t){return t.kind!=='open'}).length});
  c1+='<div class="olHw ok"><b>Homework после урока: выдан</b>'+n+' заданий · сдать к '+esc(ruShort(H[0].due))+'</div>'}
 else c1+='<div class="olHw '+(late?'bad':'soft')+'"><b>Homework после урока: '+(late?'НЕ ВЫДАН':'ещё не выдан')+'</b>Арина увидит ДЗ, когда оно появится в списке на её сайте.</div>';
 var past=btns.filter(function(b){var d=b.dataset.lessondate;return d!==lk&&!(d&&d>lk)});
 var chip=function(b){var d=b.dataset.lessondate,head=d?ruShort(d):b.childNodes[0].textContent.trim();
  return '<button type="button" class="efChip" onclick="'+esc(b.getAttribute('onclick'))+'"><b>'+esc(head)+'</b>'+esc(sub(b))+'</button>'};
 if(past.length)c1+='<details class="olMore"><summary>Прошлые уроки · '+past.length+'</summary><div class="efChips">'+past.map(chip).join('')+'</div></details>';
 var card1='<div class="efCard olCard"><h3><i style="--c:var(--ef-blue)"></i>'+(isToday?'Сегодня':'Урок')+' · '+esc(ruShort(lk))+'</h3><div class="efChips">'+c1+'</div></div>';
 /* --- колонка 2: следующий урок --- */
 var nb=btns.filter(function(b){return b.dataset.lessondate===nk})[0],np=P.filter(function(o){return o.l.date===nk});
 var c2='';
 if(nb)c2+='<button type="button" class="efChip now olGo" onclick="'+esc(nb.getAttribute('onclick'))+'"><b>Материал готов · открыть</b>'+esc(sub(nb))+'</button>';
 c2+=np.map(function(o){return progBtn(o,'now olGo',1)}).join('');
 if(!nb&&!np.length)c2+='<div class="olNone">Материал ещё не подготовлен</div>';
 var after=P.filter(function(o){return o.l.date>nk}).slice(0,3);
 if(after.length){var first=P[0];
  c2+='<div class="olHead">Дальше по Program'+(first&&first.l.date>today?' · старт '+esc(ru(first.l.date)):'')+'</div>'+after.map(function(o){return progBtn(o,'')}).join('')}
 var card2='<div class="efCard olCard"><h3><i style="--c:var(--ef-green)"></i>Следующий · '+esc(sd(nk))+'</h3><div class="efChips">'+c2+'</div></div>';
 return card1+card2;
};

/* ---------- Домашка Арины ---------- */
function batches(){
 return (window.ARINA_HW_LIST||[]).map(function(b){var les=onOrBefore(b.given),due=nextAfter(les);
  return {given:b.given,lesson:iso(les),due:iso(due),tasks:b.tasks.map(function(t){return {id:t[0],title:t[1],kind:t[2]||'auto'}})}})
  .sort(function(a,b){return a.given<b.given?1:-1});
}
function live(){try{return typeof arinaLiveDone==='function'?arinaLiveDone():{}}catch(e){return {}}}
function recs(){try{return typeof arinaRecProgress==='function'?arinaRecProgress():{}}catch(e){return {}}}
function status(t,L,R){
 if(L[t.id])return {done:true,text:'✓ сдано · '+L[t.id]};
 var r=R[t.id];if(r){var n=Object.keys(r.q).length;return {done:false,part:true,text:'записано '+n+(r.date?' · '+r.date:'')}}
 return {done:false,text:t.kind==='open'?'тренировка':'ждём'};
}
window.efHwCardHTML=function(){
 if(!window.ARINA_HW_LIST)return '<div class="efCard efHwCard"><h3><i style="--c:var(--ef-red)"></i>Arina Homework</h3><p>Список ДЗ загружается…</p></div>';
 var B=batches(),L=live(),R=recs(),today=iso(new Date()),hasCode=false;try{hasCode=!!localStorage.getItem('arina-teacher-code')}catch(e){}
 var row=function(b){
  var must=b.tasks.filter(function(t){return t.kind!=='open'}),dn=must.filter(function(t){return L[t.id]}).length,all=dn===must.length,over=b.due<today&&!all;
  var rows=b.tasks.map(function(t){var s=status(t,L,R);return '<li class="'+(s.done?'ok':'wait')+'"><span>'+esc(t.title)+'</span><em>'+esc(s.text)+'</em></li>'}).join('');
  var tag=all?'<em class="hwTag ok">✓ '+dn+' из '+must.length+'</em>':'<em class="hwTag '+(over?'bad':'wait')+'">'+dn+' из '+must.length+(over?' · срок прошёл':'')+'</em>';
  return '<details class="hwB'+(all?' all':over?' over':'')+'"><summary><span>К уроку '+esc(sd(b.due))+'<small>задано '+esc(ru(b.lesson))+'</small></span>'+tag+'</summary><ul class="efHw">'+rows+'</ul></details>';
 };
 var cur=B.slice(0,2),old=B.slice(2,12);
 return '<div class="efCard efHwCard"><h3><i style="--c:var(--ef-red)"></i>Arina Homework<button type="button" class="efGoTop" onclick="openArinaHomeworkResults()">Результаты →</button></h3>'+
  (hasCode?'':'<div class="hwNote">Чтобы видеть, что сдано: откройте «Результаты» и один раз введите код доступа.</div>')+
  '<div class="hwBs">'+cur.map(row).join('')+
  (old.length?'<details class="olMore hwMore"><summary>Ранее · '+old.length+'</summary><div class="hwBs">'+old.map(row).join('')+'</div></details>':'')+'</div></div>';
};

var st=document.createElement('style');
st.textContent='.olNone{border-left:4px solid #d9443b;background:#fdeceb;border-radius:9px;padding:9px 11px;font-size:14px;font-weight:600;color:#8c2019}.olNone.soft{border-left-color:#c9cde0;background:#f4f5fa;color:#5b6075}'+
 '.efChip.olGo{font-size:15px;padding:10px 12px;cursor:pointer}.efChip.olGo b{font-size:14px;color:#1d4fb8}'+
 '.olHead{font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:#7a8098;margin-top:4px}'+
 '.olSteps{list-style:none;margin:0;padding:0;display:grid;gap:3px}.olSteps li{display:flex;gap:8px;align-items:baseline;font-size:14px;color:#5b6075}.olSteps li i{flex:none;width:18px;height:18px;border-radius:50%;border:1.5px solid #c9cde0;font-style:normal;font-size:12px;font-weight:700;display:grid;place-items:center}.olSteps li.ok{color:#1e2238}.olSteps li.ok i{background:#2e9e5b;border-color:#2e9e5b;color:#fff}'+
 '.olHw{border-radius:9px;padding:8px 11px;font-size:13.5px;line-height:1.35;border-left:4px solid}.olHw b{display:block;font-size:14.5px}.olHw.ok{border-color:#2e9e5b;background:#e9f6ee;color:#1d5e36}.olHw.bad{border-color:#d9443b;background:#fdeceb;color:#8c2019}.olHw.soft{border-color:#e9a83a;background:#fdf3dc;color:#7a4d06}'+
 '.olMore summary{cursor:pointer;font-size:13px;font-weight:600;color:#4a5170;padding:4px 2px}.olMore .efChips,.olMore>.hwBs{margin-top:6px}'+
 '.hwNote{font-size:13px;color:#7a4d06;background:#fdf3dc;border-radius:9px;padding:7px 10px}.hwBs{display:grid;gap:6px}'+
 '.hwB{border:1px solid #e3e6f0;border-left:4px solid #e9a83a;border-radius:9px;padding:0 10px;background:#fff}.hwB.all{border-left-color:#2e9e5b}.hwB.over{border-left-color:#d9443b}'+
 '.hwB summary{cursor:pointer;padding:7px 0;font-size:14px;font-weight:700;color:#1e2238;display:flex;justify-content:space-between;align-items:center;gap:8px;list-style:none}.hwB summary::-webkit-details-marker{display:none}.hwB summary small{display:block;font-size:12px;font-weight:500;color:#7a8098}'+
 '.hwTag{font-style:normal;font-size:12.5px;font-weight:700;border-radius:12px;padding:2px 9px;white-space:nowrap}.hwTag.ok{background:#e3f4e9;color:#2f8a4b}.hwTag.wait{background:#fdf3dc;color:#7a4d06}.hwTag.bad{background:#fdeceb;color:#c4473b}'+
 '.hwB .efHw{max-height:none;overflow:visible;padding-bottom:6px}.hwB .efHw li{padding:4px 0;font-size:13.5px;line-height:1.3;gap:10px}';
document.head.appendChild(st);
/* строка в шапке: где мы по Program */
window.efProgLine=function(){try{var t=iso(new Date()),B=(window.PROGRAM&&PROGRAM.blocks)||[];
 var cur=B.filter(function(b){return b.start<=t&&t<=b.end})[0];if(cur)return 'Program · <b>'+esc(cur.title)+'</b> · '+esc(cur.dates);
 var nx=B.filter(function(b){return b.start>t}).sort(function(a,b){return a.start<b.start?-1:1})[0];if(nx)return 'Program стартует <b>'+esc(ru(nx.start))+'</b> · '+esc(nx.title);}catch(e){}return ''};

try{if(document.body.classList.contains('efHomeOn')&&typeof efHome==='function')efHome()}catch(e){}
/* общий список домашек лежит на сайте Арины (тот же адрес altatiana7.github.io) — подгружаем свежий при каждом открытии */
(function(){var s=document.createElement('script');s.src='https://altatiana7.github.io/Arina-Teacher--Hub/hw-list.js?t='+Date.now();
 s.onload=function(){try{if(document.body.classList.contains('efHomeOn')&&typeof efHome==='function')efHome()}catch(e){}};document.head.appendChild(s)})();
/* в полночь и при возвращении на вкладку дата и «На уроке» обновляются сами */
var shown=iso(new Date());
function tick(){var k=iso(new Date());if(k!==shown){shown=k;try{if(document.body.classList.contains('efHomeOn'))efHome()}catch(e){}}}
setInterval(tick,60000);document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')tick()});
})();

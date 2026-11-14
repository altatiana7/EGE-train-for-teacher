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

/* ---------- На уроке ---------- */
function lessonButtons(){var side=document.getElementById('side');return side?[].slice.call(side.querySelectorAll('button')).filter(function(b){return /openLesson\(/.test(b.getAttribute('onclick')||'')}):[]}
function sub(b){var s=b.querySelector('small');return (s?s.textContent:b.textContent).replace(/^Неделя\s*\d+\s*·\s*/,'')}
window.efOnLessonHTML=function(){
 var now=new Date(),today=iso(now),target=isLesson(now)?d0(now):nextAfter(now),tk=iso(target),isToday=tk===today;
 var btns=lessonButtons(),cur=btns.filter(function(b){return b.dataset.lessondate===tk});
 var past=btns.filter(function(b){return b.dataset.lessondate!==tk});
 var chip=function(b){var d=b.dataset.lessondate,head=d?ruShort(d):b.childNodes[0].textContent.trim();
  return '<button type="button" class="efChip" onclick="'+esc(b.getAttribute('onclick'))+'"><b>'+esc(head)+'</b>'+esc(sub(b))+'</button>'};
 var body;
 if(cur.length)body=cur.map(function(b){return '<button type="button" class="efChip now olGo" onclick="'+esc(b.getAttribute('onclick'))+'"><b>Материал готов · открыть</b>'+esc(sub(b))+'</button>'}).join('');
 else body='<div class="olNone">Материал к этому уроку ещё не подготовлен.</div>';
 var first=past.slice(0,2),rest=past.slice(2);
 return '<div class="efCard"><h3><i style="--c:var(--ef-blue)"></i>На уроке · '+ru(target)+'</h3>'+
  '<p><b>'+(isToday?'Сегодня, ':'Следующий урок — ')+ruDay(target)+'</b></p><div class="efChips">'+body+'</div>'+
  (past.length?'<div class="olPast">Прошлые уроки</div><div class="efChips">'+first.map(chip).join('')+'</div>'+(rest.length?'<details class="olMore"><summary>Ещё уроки · '+rest.length+'</summary><div class="efChips">'+rest.map(chip).join('')+'</div></details>':''):'')+'</div>';
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
 if(!window.ARINA_HW_LIST)return '';
 var B=batches(),L=live(),R=recs(),now=new Date(),today=iso(now),hasCode=false;try{hasCode=!!localStorage.getItem('arina-teacher-code')}catch(e){}
 /* выдана ли домашка после последнего прошедшего урока */
 var last=onOrBefore(now),lk=iso(last),given=B.some(function(b){return b.lesson===lk});
 var warn=given?'':'<div class="hwWarn'+(lk===today&&now.getHours()<21?' soft':'')+'">После урока '+ruShort(last)+' домашка Арине '+(lk===today&&now.getHours()<21?'ещё не выдана':'НЕ ВЫДАНА')+'</div>';
 var block=function(b,k){
  var must=b.tasks.filter(function(t){return t.kind!=='open'}),st=b.tasks.map(function(t){return [t,status(t,L,R)]});
  var dn=must.filter(function(t){return L[t.id]}).length,over=b.due<today&&dn<must.length;
  var rows=st.map(function(x){return '<li class="'+(x[1].done?'ok':'wait')+'"><span>'+esc(x[0].title)+'</span><em>'+esc(x[1].text)+'</em></li>'}).join('');
  var head='К уроку '+ruShort(b.due)+' — сдано '+dn+' из '+must.length+(over?' · срок прошёл':'');
  return '<details class="hwB'+(dn===must.length?' all':over?' over':'')+'"'+(k===0?' open':'')+'><summary>'+head+'<small>задано '+ru(b.lesson)+'</small></summary><ul class="efHw">'+rows+'</ul></details>';
 };
 return '<div class="efCard"><h3><i style="--c:var(--ef-red)"></i>Домашка Арины</h3>'+warn+
  (hasCode?'':'<div class="hwNote">Чтобы видеть, что сдано: откройте «Результаты Арины» и введите код доступа один раз.</div>')+
  '<div class="hwBs">'+B.slice(0,4).map(block).join('')+'</div>'+
  '<button type="button" class="efGo" onclick="openArinaHomeworkResults()">Результаты Арины →</button></div>';
};

var st=document.createElement('style');
st.textContent='.olNone{border-left:4px solid #d9443b;background:#fdeceb;border-radius:9px;padding:9px 11px;font-size:14px;font-weight:600;color:#8c2019}.efChip.olGo{font-size:15px;padding:11px 12px;cursor:pointer}.efChip.olGo b{font-size:14px;color:#1d4fb8}.olPast{font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:#7a8098;margin-top:4px}.olMore summary{cursor:pointer;font-size:13px;font-weight:600;color:#4a5170;padding:4px 2px}.olMore .efChips{margin-top:6px}'+
 '.hwWarn{border-left:4px solid #d9443b;background:#fdeceb;border-radius:9px;padding:8px 11px;font-size:14px;font-weight:700;color:#8c2019}.hwWarn.soft{border-left-color:#e9a83a;background:#fdf3dc;color:#7a4d06}.hwNote{font-size:13px;color:#7a4d06;background:#fdf3dc;border-radius:9px;padding:7px 10px}'+
 '.hwBs{display:grid;gap:6px;max-height:330px;overflow:auto}.hwB{border:1px solid #e3e6f0;border-left:4px solid #e9a83a;border-radius:9px;padding:0 10px;background:#fff}.hwB.all{border-left-color:#2e9e5b}.hwB.over{border-left-color:#d9443b}.hwB summary{cursor:pointer;padding:8px 0;font-size:14px;font-weight:700;color:#1e2238}.hwB summary small{display:block;font-size:12px;font-weight:500;color:#7a8098}.hwB .efHw{max-height:none;padding-bottom:6px}.hwB .efHw li.ok em{color:#1e6b4a}.hwB .efHw li.wait em{color:#b45309}';
document.head.appendChild(st);

try{if(document.body.classList.contains('efHomeOn')&&typeof efHome==='function')efHome()}catch(e){}
/* общий список домашек лежит на сайте Арины (тот же адрес altatiana7.github.io) — подгружаем свежий при каждом открытии */
(function(){var s=document.createElement('script');s.src='https://altatiana7.github.io/Arina-Teacher--Hub/hw-list.js?t='+Date.now();
 s.onload=function(){try{if(document.body.classList.contains('efHomeOn')&&typeof efHome==='function')efHome()}catch(e){}};document.head.appendChild(s)})();
/* в полночь и при возвращении на вкладку дата и «На уроке» обновляются сами */
var shown=iso(new Date());
function tick(){var k=iso(new Date());if(k!==shown){shown=k;try{if(document.body.classList.contains('efHomeOn'))efHome()}catch(e){}}}
setInterval(tick,60000);document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')tick()});
})();

/* Чтение вслух · задание 1 устной части. Текст Family dinners — с сайта Арины (тема Family), чтобы на уроке всё было на учительском сайте. */
(function(){
'use strict';
const T={t:'Family dinners',x:'Scientists have long been interested in how family habits shape our lives. One of the most surprising findings concerns the simple family dinner. Researchers in several countries have discovered that teenagers who regularly eat with their parents tend to do better at school and feel less stressed. They are also less likely to develop unhealthy eating habits. The reason seems to be communication rather than the food itself. During a shared meal, family members talk about their day, discuss problems and make plans together. Children learn new words, listen to different opinions and practise expressing their own ideas. Interestingly, the benefits remain even when the meal is short or simple. However, modern life makes such dinners more and more difficult. Parents often work late, and teenagers have clubs, sports and homework. Experts therefore suggest that families should try to eat together at least three times a week and keep their phones away from the table.',note:'researchers, regularly, communication, interestingly, therefore; -ed: interested, discovered; numbers: three times a week'};
const PH=[['Подготовка · читаем про себя',90],['Ответ · читаем вслух',90]];
const st=document.createElement('style');st.textContent=`
.raWrap{display:grid;grid-template-columns:minmax(0,1fr) 200px;gap:18px;align-items:start}
.raTask{margin:0 0 8px;font-size:15px;line-height:1.4;color:#334155}
.raText{font-family:"PT Serif",Georgia,serif;font-size:19px;line-height:1.6;color:#142337;background:#fff;border:1px solid #dbe3ee;border-left:5px solid #0039A6;border-radius:12px;padding:14px 18px;margin:0}
.raSide{display:flex;flex-direction:column;align-items:center;gap:10px}
.raRing{width:150px;height:150px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p)*1%),#e5ebf3 0)}
.raRing>div{width:118px;height:118px;border-radius:50%;background:#fff;display:grid;place-items:center;align-content:center;text-align:center}
.raRing b{font-size:38px;line-height:1;color:#0039A6}.raRing.end{background:#D52B1E}
.raPh{font-size:14px;font-weight:800;color:#0039A6;text-align:center;min-height:36px}
.raBtns{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.raBtns button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:7px 14px;font-weight:800;font-size:14px;cursor:pointer}
.raBtns button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.raTeach{display:none;margin-top:6px;font-size:14px;line-height:1.45;background:#f5f7fb;border:1px dashed #b7c9e8;border-radius:10px;padding:8px 10px;color:#334155}
.raTeach.on{display:block}
@media(max-width:900px){.raWrap{grid-template-columns:1fr}}`;document.head.appendChild(st);
let tm=null,ph=0,left=PH[0][1];
const box=()=>document.querySelector('#l3Panel .raWrap');
function draw(){const b=box();if(!b)return;const r=b.querySelector('.raRing'),tot=PH[Math.min(ph,1)][1];
  r.style.setProperty('--p',ph>1?0:Math.round(left/tot*100));r.classList.toggle('end',ph>1);
  r.querySelector('b').textContent=ph>1?'0:00':Math.floor(left/60)+':'+String(left%60).padStart(2,'0');
  b.querySelector('.raPh').textContent=ph>1?'Время вышло':PH[ph][0];}
function stop(){if(tm){clearInterval(tm);tm=null}}
function go(p){stop();ph=p;left=PH[p][1];draw();tm=setInterval(()=>{if(!box()){stop();return}left--;if(left<=0){ph++;if(ph<PH.length)left=PH[ph][1];else{stop()}}draw()},1000)}
function start(){go(0)}
window.raHTML=function(){stop();ph=0;left=PH[0][1];
  return '<div class="raWrap"><div><p class="raTask">Task 1. Imagine that you are preparing a project with your friend. You have found some interesting material for the presentation and you want to read this text to your friend. You have 1.5 minutes to read the text silently, then be ready to read it out aloud. You will not have more than 1.5 minutes to read it.</p><p class="raText">'+T.x+'</p></div>'+
  '<div class="raSide"><div class="raRing" style="--p:100"><div><b>1:30</b></div></div><div class="raPh">'+PH[0][0]+'</div>'+
  '<div class="raBtns"><button type="button" class="prim" data-ra="start">Старт</button><button type="button" data-ra="skip">Дальше</button><button type="button" data-ra="stop">Стоп</button></div>'+
  '<div class="raBtns"><button type="button" data-ra="teach">Для учителя</button></div><div class="raTeach">Слова, на которые обратить внимание: '+T.note+'. Паузы на запятых и точках, понижение тона в конце утверждения, окончания -ed и -s, числа полностью.</div></div></div>';};
document.addEventListener('click',e=>{const t=e.target.closest('.raWrap [data-ra]');if(!t)return;const a=t.dataset.ra;
  if(a==='start'){start();t.textContent='Заново'}
  else if(a==='skip'){if(ph<PH.length-1)go(ph+1)}
  else if(a==='stop'){stop()}
  else if(a==='teach'){t.closest('.raSide').querySelector('.raTeach').classList.toggle('on')}});
})();

/* 16.11.2026 · Неделя 4: кнопка EXAM открывает только лексику 30–36.
   Тексты — открытый банк ФИПИ (exam26Voc), кроме уже выданных Арине в Homework (Sunday, A new house).
   Страница открывается сразу на вкладке Vocabulary 30–36, без вкладок 19–24 и 25–29. */
(function(){
'use strict';
const W=3,GIVEN=['Sunday','A new house'];
/* 18.11.2026: тексты 1–2 (Henry, Jack) сделаны на уроке 18.11; 3–4 (Penny, Thanksgiving) выданы Арине в Homework (сайт Арины: hw-20261118b.js) */
const SENT={'Penny':'18 ноя','Thanksgiving':'18 ноя'},DONE=['Henry','Jack'];
function seedDone(){try{if(typeof exam26Done!=='object')return;let ch=0;vocList().forEach(x=>{if(DONE.includes(x.s.t)){const k=exam26Key('voc',x.s);if(!exam26Done[k]){exam26Done[k]={d:'18.11.2026',s:''};ch=1}}});if(ch)exam26SaveDone()}catch(e){}}
function vocList(){
 const out=[],seen={};
 Object.keys(exam26Voc).map(Number).sort((a,b)=>a-b).forEach(k=>(exam26Voc[k]||[]).forEach(s=>{
  if(!s||GIVEN.includes(s.t)||seen[s.t])return;seen[s.t]=1;out.push({s:s,w:W});
 }));
 return out;
}
function patch(){
 if(typeof exam26List!=='function'||exam26List.__vocW4)return;
 const baseList=exam26List;
 exam26List=function(mode,w){if(w===W&&mode==='voc')return vocList();return baseList.apply(this,arguments)};
 exam26List.__vocW4=true;

 const baseOpen=renderExam2026;
 renderExam2026=function(week,lessonIndex){
  const wk=Number.isInteger(week)?week:currentWeek;
  if(wk!==W)return baseOpen.apply(this,arguments);
  exam26FromLesson=Number.isInteger(lessonIndex);exam26Week=W;exam26Lesson=exam26FromLesson?lessonIndex:0;
  exam26Mode='voc';exam26Index=0;renderExam26View();
 };

 const baseCard=exam26Card;
 exam26Card=function(w,i){
  if(w!==W)return baseCard.apply(this,arguments);
  const inLesson=Number.isInteger(i),d=vocList(),done=d.filter(x=>exam26Done[exam26Key('voc',x.s)]).length;
  return '<div class="examCard" style="margin:'+(inLesson?'10px 14px 20px':'10px 0 0')+';border:2px solid #D52B1E;background:#fff"><div style="display:flex;align-items:center;justify-content:space-between;gap:12px"><div><b style="color:#D52B1E;font-size:14px">EXAM · ЛЕКСИКА 30–36</b> <b style="color:#24624f;font-size:12px">было '+done+' из '+d.length+'</b><div class="tiny">Открытый банк ФИПИ · '+d.length+' текстов · без выданных в Homework</div></div><button class="action studentRequiredTest" type="button" style="background:#D52B1E!important;color:#fff!important;border:0!important;font-weight:900;font-size:14px;padding:11px 18px;border-radius:9px" onclick="'+(inLesson?'closeLesson();renderExam2026('+w+','+i+')':'renderExam2026('+w+')')+'">ОТКРЫТЬ ЛЕКСИКУ 30–36</button></div></div>';
 };

 const baseView=renderExam26View;
 renderExam26View=function(){
  if(exam26Week===W)exam26Mode='voc';
  const r=baseView.apply(this,arguments);
  if(exam26Week===W){
   const v=document.getElementById('examView');
   v.classList.add('vocW4');
   const tabs=v.querySelector('.exam26Tabs');if(tabs)tabs.remove();
   const hero=v.querySelector('.hero');if(hero)hero.remove();
   const h=v.querySelector('.exam26Set h3');if(h)h.insertAdjacentHTML('afterbegin','<span style="color:#D52B1E;font-size:13px;font-weight:900;letter-spacing:.04em;margin-right:10px">ЛЕКСИКА 30–36 · ФИПИ · '+(exam26Index+1)+'/'+vocList().length+'</span>');
   /* 18.11.2026: что ушло Арине в Homework — отметка «✓ В ДЗ · 18 ноя» на номере и на тексте */
   const list=vocList(),chips=v.querySelectorAll('button[onclick^="exam26Index="]');
   list.forEach((x,j)=>{const d=SENT[x.s.t];if(d&&chips[j]&&!chips[j].classList.contains('exHwChip')){chips[j].classList.add('exHwChip');chips[j].title+=' · ✓ в ДЗ Арине · '+d}});
   const cur=list[exam26Index]||list[0],cd=cur&&SENT[cur.s.t];
   if(cd){const h3=v.querySelector('.exam26Set h3');if(h3&&!h3.querySelector('.exHwMark'))h3.insertAdjacentHTML('beforeend','<span class="exHwMark" title="Отправлено Арине в Homework">✓ В ДЗ · '+cd+'</span>')}
  }else{const v=document.getElementById('examView');if(v)v.classList.remove('vocW4')}
  return r;
 };
}
const st=document.createElement('style');st.textContent=`
#examView.vocW4>.lessonBack{margin-bottom:6px!important;padding:6px 12px!important}
#examView.vocW4 .hero{padding:6px 14px!important;margin-bottom:6px!important;min-height:0!important}
#examView.vocW4 .hero h1{font-size:18px!important;margin:0!important}
#examView.vocW4>.tiny{display:none}
#examView.vocW4 button[onclick^="exam26Index="]{min-width:28px!important;padding:2px 5px!important;font-size:12px!important}
#examView.vocW4 .exam26Set{padding:8px 14px}
#examView.vocW4 .exam26Set>.tiny{display:none}
#examView.vocW4 .exam26Set h3{font-size:19px;margin:0 0 4px}
#examView.vocW4 .exam26Nav{margin-top:4px}`;
document.head.appendChild(st);
patch();window.addEventListener('load',()=>{patch();seedDone()});
})();

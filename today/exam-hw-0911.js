/* 09.11.2026 · EXAM недели 4: что ушло Арине в домашку (отметка «✓ В ДЗ · 9 ноя» на наборе и на номере набора)
   + крупные тексты во всех наборах EXAM (19–24, 25–29, 30–36), классический шрифт.
   Домашка на сайте Арины: hw-20261109.js (test_id w4l5-hw-*). */
(function(){
'use strict';
const HW={grammar:['A school science club'],wf:['The printing press','Using a digital library','The city of the future'],voc:['A new house','Sunday']};
const DATE='9 ноя';
const inHw=set=>!!(set&&(HW[exam26Mode]||[]).includes(set.t));

/* устная часть Family · Task 3: записи голоса из домашки считаются, как у других интервью */
try{ARINA_SPEAK.push(['w4l5-hw-fam-iv1',3,'Family · Task 3 · Interview 1'],['w4l5-hw-fam-iv2',3,'Family · Task 3 · Interview 2'])}catch(e){}

const st=document.createElement('style');st.textContent=`
#examView .exam26Set h3{font-size:24px;margin:4px 0 10px}
#examView .exam26Text{font-family:"PT Serif",Georgia,"Times New Roman",serif;font-size:20px;line-height:1.9;color:#111}
#examView .exam26Text p{line-height:2!important;margin:0 0 12px!important}
#examView .exam26Text select{font-size:18px!important;max-width:230px!important}
#examView .exam26Text b[style*="font-size:11px"]{font-size:15px!important}
#examView .exam26Base{font-size:14px}
#examView .exam26Gap input{font-size:18px}
#examView .exam26Set>.tiny{font-size:13px}
.exHwMark{display:inline-block;margin-left:8px;padding:2px 9px;border-radius:999px;background:#fff4e5;border:1px solid #f0b35b;color:#a35a00;font:800 12px/1.5 Arial,sans-serif;vertical-align:middle}
.exHwChip{position:relative}.exHwChip:after{content:"ДЗ";position:absolute;top:-8px;right:-8px;padding:0 4px;border-radius:6px;background:#f0b35b;color:#fff;font:900 9px/14px Arial,sans-serif}`;
document.head.appendChild(st);

function mark(){
 const v=document.getElementById('examView');if(!v||typeof exam26List!=='function')return;
 const data=exam26List(exam26Mode,exam26Week),item=data[exam26Index]||data[0];
 const chips=v.querySelectorAll('button[onclick^="exam26Index="]');
 data.forEach((x,j)=>{if(inHw(x.s)&&chips[j]){chips[j].classList.add('exHwChip');chips[j].title+=' · ✓ в ДЗ Арине · '+DATE}});
 if(item&&inHw(item.s)){const h=v.querySelector('.exam26Set h3');if(h&&!h.querySelector('.exHwMark'))h.insertAdjacentHTML('beforeend','<span class="exHwMark" title="Отправлено Арине в домашку">✓ В ДЗ · '+DATE+'</span>')}
}
function wrap(){
 if(typeof renderExam26View!=='function'||renderExam26View.__hw0911)return;
 const base=renderExam26View;
 renderExam26View=function(){const r=base.apply(this,arguments);try{mark()}catch(e){}return r};
 renderExam26View.__hw0911=true;
}
wrap();window.addEventListener('load',wrap);
})();

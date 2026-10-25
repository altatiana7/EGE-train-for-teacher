/* KQ — общий модуль заданий (25.10.2026)
   1) KQ.kahoot(host, items) — упражнения из отдельных предложений: один вопрос на экране,
      крупные цветные кнопки ответов в два столбика, перелистывание как в Kahoot / Wordwall.
      item: {q:'текст с ___', opts:['..','..'], a:'верный вариант' | индекс, why:'пояснение', hint:'СЛОВО'}
   2) KQ.fipi(host, items, {start,title}) — задания 19–24 и 25–29 сплошным текстом как на сайте ФИПИ:
      номер слева, текст с пропуском, слово-подсказка справа на полях; нажатие на пропуск открывает ответ.
      item: {q:'текст с ___', b:'СЛОВО', a:'ответ', why:'пояснение', h:'подзаголовок текста (необязательно)'}
   Разметка-заготовка: KQ.slot('kahoot'|'fipi', items, opts) → '<div class="kq" data-kq="id"></div>';
   KQ.mountAll(root) оживляет все заготовки внутри root (вызывается и автоматически при появлении в DOM). */
(function(){
if(window.KQ)return;
const css=`
.kq{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337}
.kqTop{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:0 0 12px;padding:8px 14px;background:#f2f6fc;border-radius:10px;font:800 17px/1.3 "Segoe UI",Arial,sans-serif;color:#0039A6}
.kqTop .ok{color:#15803d}.kqTop .bad{color:#D52B1E}.kqTop .sp{margin-left:auto}
.kqTop button,.kqNav button,.kqEnd button,.kqF button.kqBtn{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:7px 16px;font:800 15px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.kqTop button:hover,.kqNav button:hover:not(:disabled){background:#eaf1fb}
.kqStage{max-width:1100px;margin:0 auto}
.kqQ{min-height:96px;display:flex;align-items:center;justify-content:center;text-align:center;padding:10px 18px 16px;font-size:30px;line-height:1.35}
.kqQ .gap{display:inline-block;min-width:110px;border-bottom:3px solid #0039A6;margin:0 6px;color:#15803d;font-weight:700}
.kqQ .hint{display:inline-block;margin-left:12px;font:900 15px/1 "Segoe UI",Arial,sans-serif;letter-spacing:.6px;color:#64748b;vertical-align:middle}
.kqOpts{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.kqOpts button{position:relative;display:flex;align-items:center;justify-content:center;min-height:96px;padding:16px 22px 16px 64px!important;border:2px solid;border-radius:12px;color:#142337;font:600 27px/1.25 "PT Serif",Georgia,serif;cursor:pointer;transition:transform .12s,opacity .2s,background .2s;text-align:center}
.kqOpts button i{position:absolute;left:16px;top:50%;transform:translateY(-50%);width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:8px;color:#fff;font:800 18px/1 "Segoe UI",Arial,sans-serif;font-style:normal}
.kqOpts button:hover:not(:disabled){transform:translateY(-2px)}
.kqOpts button:nth-child(6n+1){background:#fbeeee;border-color:#e6b9bd}.kqOpts button:nth-child(6n+1) i{background:#b8636c}
.kqOpts button:nth-child(6n+2){background:#edf3fb;border-color:#b5cbe8}.kqOpts button:nth-child(6n+2) i{background:#4f79ad}
.kqOpts button:nth-child(6n+3){background:#fbf4e6;border-color:#e6cf9f}.kqOpts button:nth-child(6n+3) i{background:#b08a3e}
.kqOpts button:nth-child(6n+4){background:#edf6ef;border-color:#b6d8bd}.kqOpts button:nth-child(6n+4) i{background:#5b8f65}
.kqOpts button:nth-child(6n+5){background:#f3effa;border-color:#cdc0e6}.kqOpts button:nth-child(6n+5) i{background:#7a68a8}
.kqOpts button:nth-child(6n+6){background:#eaf5f5;border-color:#acd3d3}.kqOpts button:nth-child(6n+6) i{background:#4e8f8f}
.kqOpts button:disabled{cursor:default}
.kqOpts.done button{opacity:.4}
.kqOpts.done button.kqR{opacity:1;background:#e3f4e7;border-color:#3f9a57;outline:3px solid #3f9a57;outline-offset:2px}
.kqOpts.done button.kqW{opacity:1;background:#f8e6e6;border-color:#c46a6a}
.kqOpts.done button.kqR:after{content:"✓";position:absolute;right:18px;top:50%;transform:translateY(-50%);font:900 30px/1 Arial;color:#2f7d45}
.kqOpts.done button.kqW:after{content:"✗";position:absolute;right:18px;top:50%;transform:translateY(-50%);font:900 28px/1 Arial;color:#b04848}
.kqWhy{min-height:30px;margin:14px 4px 0;text-align:center;font-size:19px;color:#334155}
.kqWhy b{color:#15803d}.kqWhy.bad b{color:#D52B1E}
.kqNav{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:10px;font:800 18px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.kqNav button{width:46px;height:42px;padding:0;font-size:20px}.kqNav button:disabled{opacity:.35;cursor:default}
.kqDots{display:flex;justify-content:center;flex-wrap:wrap;gap:5px;margin-top:10px}
.kqDots span{width:12px;height:12px;border-radius:50%;background:#d6dfec;cursor:pointer}
.kqDots span.on{box-shadow:0 0 0 2px #0039A6}.kqDots span.ok{background:#22c55e}.kqDots span.bad{background:#ef4444}
.kqEnd{text-align:center;padding:14px 10px}.kqEnd h3{margin:0 0 6px;font-size:30px;color:#0039A6}
.kqEnd .big{font:900 46px/1.1 "Segoe UI",Arial,sans-serif;color:#0039A6;margin:6px 0 12px}
.kqEnd ul{list-style:none;margin:10px auto 14px;padding:0;max-width:900px;text-align:left;font-size:19px}
.kqEnd li{padding:7px 12px;border-bottom:1px solid #e5ebf3}.kqEnd li b{color:#15803d}
.kqEnd .row{display:flex;gap:10px;justify-content:center}
.kqEnd button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.kq.kq .kqOpts button{font-family:"PT Serif",Georgia,serif!important;font-size:27px!important;font-weight:600!important;color:#142337!important}
.kq.kq .kqNav button{font-size:20px!important;padding:0!important}.kq.kq .kqTop button,.kq.kq .kqEnd button,.kq.kq .kqF button.kqBtn{font-size:15px!important;padding:7px 16px!important}
@media(max-width:800px){.kq.kq .kqOpts button{font-size:21px!important}.kqOpts{grid-template-columns:1fr}.kqQ{font-size:23px}.kqOpts button{font-size:21px;min-height:72px}}
/* ФИПИ: сплошной текст */
.kqF{font-family:"PT Serif",Georgia,"Times New Roman",serif}
.kqF .kqFTask{margin:0 0 10px;font-size:17px;font-style:italic;color:#334155}
.kqF h4{margin:12px 0 6px;font-size:21px;text-align:center;color:#142337}
.kqF table{width:100%;border-collapse:collapse;font-size:20px;line-height:1.55}
.kqF td{padding:5px 8px;vertical-align:top;border-bottom:1px solid #edf1f6}
.kqF td.n{width:40px;font:800 18px/1.9 "Segoe UI",Arial,sans-serif;color:#0039A6;text-align:right}
.kqF td.w{width:170px;font:800 17px/1.9 "Segoe UI",Arial,sans-serif;letter-spacing:.5px;color:#142337;text-align:left;padding-left:16px}
.kqF .g{display:inline-block;min-width:130px;margin:0 4px;padding:0 10px;border:2px dashed #8aa6cf;border-radius:7px;background:#f5f8fd;color:#8aa6cf;text-align:center;font-weight:700;cursor:pointer;transition:background .2s}
.kqF .g:hover{background:#e8f0fb}
.kqF .g.open{border-style:solid;border-color:#16a34a;background:#effbf2;color:#15803d;animation:kqFlip .35s}
.kqF .why{display:none;margin-top:3px;font-size:16px;color:#475569}.kqF tr.open .why{display:block}
.kqF .ctl{display:flex;gap:10px;align-items:center;margin-top:10px;font:800 16px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
@keyframes kqFlip{0%{transform:rotateX(90deg)}100%{transform:none}}
@media(max-width:800px){.kqF td.w{width:auto;padding-left:6px}.kqF table{font-size:17px}}
`;
const st=document.createElement('style');st.textContent=css;(document.head||document.documentElement).appendChild(st);

const REG={};let N=0;
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function ansIndex(it){if(typeof it.a==='number')return it.a;const k=it.opts.indexOf(it.a);return k<0?it.opts.findIndex(o=>String(o).trim().toLowerCase()===String(it.a).trim().toLowerCase()):k}

/* ---------- Kahoot ---------- */
function kahootState(items,o){return {type:'kahoot',items:items,o:o||{},pos:0,pick:items.map(()=>-1),end:false,timer:0}}
function kRender(el,S){
 clearTimeout(S.timer);
 const n=S.items.length,ok=S.pick.filter((p,i)=>p>=0&&p===ansIndex(S.items[i])).length,bad=S.pick.filter((p,i)=>p>=0&&p!==ansIndex(S.items[i])).length;
 const top='<div class="kqTop"><span>Верно: <span class="ok">'+ok+'</span> · Ошибок: <span class="bad">'+bad+'</span> · из '+n+'</span><span class="sp"></span><button type="button" data-kq-act="restart">Заново</button></div>';
 if(S.end){
  const wrong=S.items.map((it,i)=>[it,i]).filter(([it,i])=>S.pick[i]!==ansIndex(it));
  el.innerHTML=top+'<div class="kqStage kqEnd"><h3>Готово!</h3><div class="big">'+ok+' / '+n+'</div>'+
   (wrong.length?'<ul>'+wrong.map(([it,i])=>'<li>'+(i+(S.o.start||1))+'. '+String(it.q).replace('___','<b>'+esc(it.opts[ansIndex(it)])+'</b>')+'</li>').join('')+'</ul>':'<p style="font-size:20px">Без ошибок!</p>')+
   '<div class="row">'+(wrong.length?'<button type="button" class="prim" data-kq-act="wrong">Повторить ошибки</button>':'')+'<button type="button" data-kq-act="restart">Заново</button></div></div>';
  return}
 const i=S.pos,it=S.items[i],p=S.pick[i],ai=ansIndex(it),done=p>=0;
 const q=String(it.q).replace('___','<span class="gap">'+(done?esc(it.opts[ai]):'&nbsp;')+'</span>');
 el.innerHTML=top+'<div class="kqStage"><div class="kqQ"><div>'+q+(it.hint?'<span class="hint">'+esc(it.hint)+'</span>':'')+'</div></div>'+
  '<div class="kqOpts'+(done?' done':'')+'">'+it.opts.map((x,j)=>'<button type="button" data-kq-pick="'+j+'"'+(done?' disabled':'')+' class="'+(done&&j===ai?'kqR':done&&j===p?'kqW':'')+'"><i>'+'ABCDEF'[j]+'</i>'+esc(x)+'</button>').join('')+'</div>'+
  '<div class="kqWhy'+(done&&p!==ai?' bad':'')+'">'+(done?(p===ai?'<b>Верно!</b> ':'<b>Не совсем.</b> ')+(it.why||''):'')+'</div>'+
  '<div class="kqNav"><button type="button" data-kq-act="prev"'+(i===0?' disabled':'')+' aria-label="Назад">◀</button><span>'+(i+1)+' из '+n+'</span><button type="button" data-kq-act="next" aria-label="Вперёд">▶</button></div>'+
  '<div class="kqDots">'+S.items.map((x,k)=>'<span data-kq-go="'+k+'" class="'+(k===i?'on ':'')+(S.pick[k]<0?'':S.pick[k]===ansIndex(x)?'ok':'bad')+'"></span>').join('')+'</div></div>';
}
function kNext(el,S){if(S.pos<S.items.length-1){S.pos++;kRender(el,S)}else{S.end=true;kRender(el,S)}}

/* ---------- ФИПИ-текст ---------- */
function fipiState(items,o){return {type:'fipi',items:items,o:o||{},open:items.map(()=>false)}}
function fRender(el,S){
 const start=S.o.start||19,n=S.items.length,cnt=S.open.filter(Boolean).length;
 let rows='',h='';
 S.items.forEach((it,i)=>{
  if(it.h&&it.h!==h){h=it.h;rows+='<tr><td colspan="3"><h4>'+esc(it.h)+'</h4></td></tr>'}
  const g='<span class="g'+(S.open[i]?' open':'')+'" data-kq-gap="'+i+'" title="Нажмите, чтобы открыть ответ">'+(S.open[i]?esc(it.a):'&nbsp;'+(start+i)+'&nbsp;')+'</span>';
  rows+='<tr class="'+(S.open[i]?'open':'')+'"><td class="n">'+(start+i)+'</td><td>'+String(it.q).replace('___',g)+(it.why?'<div class="why">'+it.why+'</div>':'')+'</td><td class="w">'+esc(it.b)+'</td></tr>'});
 el.innerHTML='<div class="kqF">'+(S.o.title?'<h4>'+esc(S.o.title)+'</h4>':'')+
  '<p class="kqFTask">'+(S.o.task||((S.o.kind?S.o.kind==='wf':start>=25)?'Образуйте от слов, напечатанных заглавными буквами в конце строк, однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста.':'Преобразуйте, если необходимо, слова, напечатанные заглавными буквами в конце строк, так, чтобы они грамматически соответствовали содержанию текста.'))+' <span style="font-style:normal;color:#0039A6">Нажмите на пропуск — откроется ответ.</span></p>'+
  '<table>'+rows+'</table><div class="ctl"><span>Открыто: '+cnt+' из '+n+'</span><button type="button" class="kqBtn" data-kq-act="all">'+(cnt===n?'Скрыть все':'Открыть все')+'</button></div></div>';
}

/* ---------- общее ---------- */
function slot(type,items,o){const id='kq'+(++N);REG[id]={type:type,items:items,o:o||{}};return '<div class="kq" data-kq="'+id+'"></div>'}
function mount(el){const id=el.dataset.kq,R=REG[id];if(!R)return;el._kq=R.type==='fipi'?fipiState(R.items,R.o):kahootState(R.items,R.o);(R.type==='fipi'?fRender:kRender)(el,el._kq)}
function mountAll(root){(root||document).querySelectorAll('.kq[data-kq]').forEach(el=>{if(!el._kq||!el.firstChild)mount(el)})}
document.addEventListener('click',e=>{
 const el=e.target.closest('.kq');if(!el||!el._kq)return;const S=el._kq;
 if(S.type==='fipi'){
  const g=e.target.closest('[data-kq-gap]');if(g){const i=+g.dataset.kqGap;S.open[i]=!S.open[i];fRender(el,S);return}
  if(e.target.closest('[data-kq-act="all"]')){const all=S.open.every(Boolean);S.open=S.open.map(()=>!all);fRender(el,S)}return}
 const b=e.target.closest('[data-kq-pick],[data-kq-act],[data-kq-go]');if(!b)return;
 if(b.dataset.kqPick!==undefined){const i=S.pos;if(S.pick[i]>=0)return;S.pick[i]=+b.dataset.kqPick;kRender(el,S);
  if(S.pick[i]===ansIndex(S.items[i]))S.timer=setTimeout(()=>{if(S.pos===i&&!S.end)kNext(el,S)},1300);return}
 if(b.dataset.kqGo!==undefined){S.pos=+b.dataset.kqGo;S.end=false;kRender(el,S);return}
 const a=b.dataset.kqAct;
 if(a==='restart'){el._kq=kahootState(REG[el.dataset.kq].items,REG[el.dataset.kq].o);kRender(el,el._kq)}
 else if(a==='wrong'){const w=S.items.filter((it,i)=>S.pick[i]!==ansIndex(it));el._kq=kahootState(w,Object.assign({},S.o,{start:1}));kRender(el,el._kq)}
 else if(a==='prev'&&S.pos>0){S.pos--;kRender(el,S)}
 else if(a==='next')kNext(el,S);
});
document.addEventListener('keydown',e=>{
 if(/^(INPUT|TEXTAREA|SELECT)$/.test((e.target||{}).tagName||''))return;
 const els=[...document.querySelectorAll('.kq')].filter(x=>x._kq&&x._kq.type==='kahoot'&&x.offsetParent);if(els.length!==1)return;
 const el=els[0],S=el._kq;if(S.end)return;
 const k=e.key.toLowerCase(),map={a:0,b:1,c:2,d:3,'1':0,'2':1,'3':2,'4':3};
 if(k in map&&map[k]<S.items[S.pos].opts.length){const btn=el.querySelector('[data-kq-pick="'+map[k]+'"]');if(btn&&!btn.disabled)btn.click()}
 else if(e.key==='ArrowRight')kNext(el,S);else if(e.key==='ArrowLeft'&&S.pos>0){S.pos--;kRender(el,S)}
});
new MutationObserver(()=>mountAll()).observe(document.documentElement,{childList:true,subtree:true});
window.KQ={slot:slot,mountAll:mountAll,kahoot:(items,o)=>slot('kahoot',items,o),fipi:(items,o)=>slot('fipi',items,o),esc:esc};
})();

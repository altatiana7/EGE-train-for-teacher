/* Week 2 · Lesson 3 · Past tenses — урок на одном экране: шаги слева, один шаг справа */
(function(){
'use strict';
const root=new URL('../',document.currentScript.src),url=p=>new URL(p,root).href;

const style=document.createElement('style');
style.textContent=`
.ap{position:fixed;inset:38px 0 0;z-index:100;background:#f4f6f9;color:#142337;display:flex;flex-direction:column;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1.55}
.ap[hidden]{display:none}
.ap *{box-sizing:border-box}
.ap button,.ap select,.ap input{font:inherit}
.ap button{cursor:pointer}
.ap :focus-visible{outline:3px solid #76a9f5;outline-offset:2px}
.apTop{display:flex;align-items:center;gap:12px;background:#fff;border-bottom:1px solid #d9e1ec;padding:10px 18px}
.apTop b{flex:1;font-size:18px}
.apBtn{background:#fff;color:#0039a6;border:1px solid #b7c9e8;border-radius:9px;padding:9px 16px;font-weight:700;font-size:16px}
.apBtn.prim{background:#0039a6;color:#fff;border-color:#0039a6}
.apBtn:disabled{opacity:.4;cursor:default}
.apWrap{flex:1;min-height:0;display:grid;grid-template-columns:270px minmax(0,1fr);gap:14px;padding:14px}
.apSteps{overflow:auto;display:flex;flex-direction:column;gap:6px}
.apSteps .grp{font-size:13px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#64748b;margin:6px 2px 0}
.apSteps button{display:grid;grid-template-columns:26px 1fr auto;gap:8px;align-items:center;text-align:left;background:#fff;border:1px solid #d5deea;border-left:4px solid #0039a6;border-radius:9px;padding:10px;font-size:16px;font-weight:700;color:#142337}
.apSteps button i{font-style:normal;width:26px;height:26px;border-radius:50%;background:#e8eef7;color:#0039a6;font-size:14px;display:grid;place-items:center}
.apSteps button em{font-style:normal;font-weight:400;font-size:14px;color:#64748b}
.apSteps button.on{background:#e6f0ff;border-left-color:#d52b1e}
.apSteps button.on i{background:#0039a6;color:#fff}
.apPanel{min-width:0;display:flex;flex-direction:column;background:#fff;border:1px solid #d9e1ec;border-radius:12px;overflow:hidden}
.apBar{display:flex;justify-content:space-between;align-items:center;gap:12px;border-bottom:1px solid #d9e1ec;padding:12px 22px}
.apBar small{display:block;font-size:14px;color:#64748b}
.apBar h3{margin:2px 0 0;font-size:22px;color:#142337}
.apBar div:last-child{display:flex;gap:8px;flex:none}
.apBody{flex:1;overflow:auto;padding:20px 22px 28px}
.apBody>div{max-width:940px}
.apBody p{margin:0 0 12px}
.apNote{color:#53657a;font-size:16px}
.apChips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px}
.apChips button{min-width:40px;padding:6px 10px;border:1px solid #b7c9e8;border-radius:8px;background:#fff;color:#0039a6;font-weight:700;font-size:16px}
.apChips button.on{background:#0039a6;color:#fff;border-color:#0039a6}
.apChips button.done{background:#edf9f1;border-color:#26724d;color:#1d5a3c}
.apChips button.miss{background:#fff0ee;border-color:#bf322a;color:#9a251f}
.apChips button.on.done,.apChips button.on.miss{outline:3px solid #0039a6;outline-offset:1px}
.apText{background:#f7f9fc;border:1px solid #d9e1ec;border-radius:12px;padding:18px 20px;margin:0 0 14px}
.apOpts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 14px}
.apOpts button{padding:14px 16px;text-align:left;background:#fff;border:1px solid #b7c9e8;border-radius:10px;font-weight:700;color:#142337}
.ap .ok{background:#edf9f1!important;border-color:#26724d!important}
.ap .bad{background:#fff0ee!important;border-color:#bf322a!important}
.apFb{min-height:28px;margin:0 0 12px;font-weight:700}
.apKeys{background:#edf3ff;border-radius:10px;padding:14px 16px;margin-top:12px}
.apKeys[hidden]{display:none}
.apRow{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:12px 0 0}
.apGap input,.apLine input{width:210px;padding:6px 9px;border:1px solid #9eb4d1;border-radius:7px;color:#142337;background:#fff;font-weight:700}
.apGap{line-height:2.3}
.apGap small,.apLine small{font-size:14px;font-weight:700;color:#d52b1e}
.apGap b.n{color:#0039a6}
.apLine{display:grid;grid-template-columns:30px 1fr;gap:8px;padding:9px 0;border-bottom:1px solid #e6ebf2}
.apLine>b{color:#0039a6}
.apLine .why{display:block;font-size:16px;color:#53657a}
.apTable{width:100%;border-collapse:collapse;margin:0 0 16px}
.apTable th,.apTable td{border:1px solid #d9e1ec;padding:10px 12px;text-align:left;vertical-align:top}
.apTable th{background:#f0f4fa;font-size:16px}
.apTable td:first-child{font-weight:700;color:#0039a6;white-space:nowrap}
.apTable code{font-family:inherit;font-weight:700;color:#d52b1e}
.apTwo{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.apBox{border:1px solid #d9e1ec;border-radius:10px;padding:12px 16px}
.apBox h4{margin:0 0 6px;font-size:18px;color:#0039a6}
.apBox ul,.apBox ol{margin:0;padding-left:22px}
.ap li,.ap td,.ap th,.ap label,.ap a{font-size:18px;line-height:1.55}
.apRead{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:16px;align-items:start}
.apRead .apText{margin:0}
.apHeads{display:flex;flex-direction:column;gap:6px}
.apHeads label{display:flex;gap:10px;align-items:flex-start;border:1px solid #d5deea;border-radius:9px;padding:9px 12px;cursor:pointer}
.apHeads label.sel{border-color:#0039a6;background:#e6f0ff}
.apHeads input{margin-top:6px}
.apCards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:0 0 16px}
.apCard{min-height:190px;border:1px solid #b7c9e8;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px;background:#fff}
.apCard.back{background:#f0f5ff;border-color:#0039a6}
.apCard .num{font-size:14px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#64748b}
.apCard .big{font-size:22px;font-weight:700;color:#0039a6}
.apCard .q{font-weight:700}
.apCard .tip{font-size:16px;color:#53657a}
.apCard .sp{flex:1}
.apCard .clock{font-size:22px;font-weight:700;font-variant-numeric:tabular-nums}
.apCard .clock.run{color:#d52b1e}
.apCard .acts{display:flex;gap:8px;flex-wrap:wrap}
.apCard .acts button{padding:7px 12px;font-size:16px}
.ap audio{width:100%;margin:6px 0 0}
@media(max-width:900px){.ap{font-size:17px}.apWrap{grid-template-columns:1fr;overflow:auto}.apSteps{flex-direction:row;flex-wrap:wrap;overflow:visible}.apSteps .grp{display:none}.apSteps button{grid-template-columns:26px auto}.apSteps button em{display:none}.apPanel{min-height:70vh}.apOpts,.apTwo,.apRead{grid-template-columns:1fr}.apCards{grid-template-columns:1fr 1fr}.apBar{flex-wrap:wrap}}
@media(max-width:560px){.apCards{grid-template-columns:1fr}.apGap input,.apLine input{width:160px}}
`;
document.head.append(style);

/* ---------- материал урока ---------- */
const choose=[
['At 7 p.m. yesterday, Leo ___ dinner. He was still in the kitchen when I called.',['cooked','was cooking','had cooked','had been cooking'],[1],'Процесс в конкретный момент (at 7 p.m.) → was cooking.'],
['By the time I got home, my brother ___ all the sandwiches. There were none left.',['ate','was eating','had eaten','had been eating'],[2],'Результат до другого прошлого события → had eaten.'],
['When the teacher came in, the students ___ loudly. They stopped at once.',['talked','were talking','had talked','had been talking'],[1],'Она вошла во время процесса → were talking.'],
['When the teacher came in, the students ___ up and greeted her.',['stood','were standing','had stood','had been standing'],[0],'Одно событие за другим, цепочка → stood. Сравни с предыдущим предложением.'],
['By six yesterday, she ___ ten kilometres.',['ran','was running','had run','had been running'],[2],'Законченное количество к прошлому сроку → had run.'],
['She ___ for an hour when she finally stopped to rest.',['ran','was running','had run','had been running'],[3,2],'Длительность до прошлого момента → had been running. Had run for an hour тоже допустимо.'],
['I ___ the answer immediately, so I put my hand up.',['knew','was knowing','had known','had been knowing'],[0],'Know — глагол состояния, Continuous невозможен → knew.'],
['I ___ my keys yesterday, but I found them under the sofa later.',['lost','was losing','had lost','had been losing'],[0],'Цепочка завершённых событий, есть yesterday → lost.'],
['While we ___ across the square, it started to rain.',['walked','were walking','had walked','had been walking'],[1],'Фоновый процесс + короткое событие → were walking.'],
['Kate was tired because she ___ all day.',['worked','was working','had worked','had been working'],[3,2],'Причина видна в прошлом, важна длительность → had been working. Had worked тоже допустимо.'],
['I recognised the street at once: I ___ there before.',['was','was being','had been','had been being'],[2],'Опыт до прошлого момента → had been.'],
['By six o’clock yesterday, the students ___ the whole test.',['finished','were finishing','had finished','had been finishing'],[2],'Результат к прошлому сроку (by six) → had finished.']];
const brackets=[
['When I got to the station, the train ___ .','ALREADY LEAVE',['had already left'],'Поезд ушёл раньше, чем я пришёл.'],
['We ___ home when it started to snow.','WALK',['were walking'],'Процесс, во время которого пошёл снег.'],
['She ___ the message until the next morning.','NOT SEE',['did not see',"didn't see"],'Факт в прошлом; после did not — начальная форма.'],
['They ___ for forty minutes before the doctor finally came.','WAIT',['had been waiting','had waited'],'Длительность до прихода врача.'],
['While Dad ___ , the phone rang twice.','COOK',['was cooking'],'Фоновый процесс после while.'],
['I ___ to a theatre before that evening.','NEVER BE',['had never been'],'Опыт до прошлого момента.'],
['Last summer we ___ two weeks in Kazan.','SPEND',['spent'],'Законченный период в прошлом.'],
['By the time the guests arrived, Mum ___ the table.','LAY',['had laid'],'Результат к приходу гостей.'],
['His eyes were red because he ___ all night.','READ',['had been reading'],'Длительный процесс, результат которого был виден.'],
['Tom ___ his arm last winter, so he could not play hockey.','BREAK',['broke'],'Событие в прошлом, есть last winter.']];
const sets=[
{title:'Set A · A difficult morning',lines:[
['Yesterday, Emma ___ home at eight o’clock.','LEAVE',['left'],'Завершённое событие вчера.'],
['She ___ towards the bus stop when she realised that her travel card was missing.','WALK',['was walking'],'Процесс, во время которого она заметила проблему.'],
['By that moment, she ___ that her travel card was still at home, so she had to go back.','REALISE',['had realised','had realized'],'Осознание произошло до следующего действия.'],
['She ___ at the stop for twenty minutes when a bus finally arrived.','WAIT',['had been waiting','had waited'],'Длительность до прибытия автобуса.'],
['On the bus, she ___ a classmate.','MEET',['met'],'Следующее событие рассказа.'],
['He ___ her that their first lesson had been cancelled.','TELL',['told'],'Завершённое событие.']]},
{title:'Set B · The school video',lines:[
['At five o’clock yesterday, Ben and his friends ___ their school video on a laptop.','WATCH',['were watching'],'Процесс в конкретный момент.'],
['Suddenly, the lights ___ out.','GO',['went'],'Внезапное событие.'],
['Before his friends arrived, Ben ___ the laptop battery completely, so the video kept playing.','CHARGE',['had charged'],'Зарядил раньше другого прошлого события.'],
['Luckily, they ___ any electricity to finish watching it.','NOT NEED',['did not need',"didn't need"],'did not + начальная форма.'],
['Ben ___ the film for two hours without a break when his friends arrived that afternoon.','EDIT',['had been editing'],'Длительный процесс до другого прошлого события.'],
['After the final scene, everyone ___ the ending funny.','FIND',['found'],'Find в значении «считать»: оценка в прошлом.']]}];
const exit={title:'A lost notebook',lines:[
['Yesterday, Anna ___ to school early.','COME',['came'],'Завершённое событие.'],
['At 8:15, she ___ for her notebook in the classroom.','LOOK',['was looking'],'Процесс в 8:15.'],
['By that time, the cleaner ___ it to the school office.','TAKE',['had taken'],'Отнесли до того момента.'],
['Anna ___ for ten minutes when a teacher offered to help.','SEARCH',['had been searching'],'Длительный процесс до другого прошлого события.'],
['She ___ where her notebook was.','NOT KNOW',['did not know',"didn't know"],'did not + know; не was knowing.'],
['In the end, the secretary ___ it to her.','GIVE',['gave'],'Завершённое событие.']]};
const errors=[
['Yesterday she has gone to the library.',['went'],'Yesterday she went to the library.','Yesterday → законченный прошлый период.'],
['At 8 p.m. I did my homework when the lights went out.',['was doing'],'At 8 p.m. I was doing my homework when the lights went out.','Процесс + прерывающее событие.'],
['By the time we arrived, the film already started.',['had already started'],'By the time we arrived, the film had already started.','Фильм начался раньше.'],
['She had been wrote for two hours before she took a break.',['had been writing'],'She had been writing for two hours before she took a break.','had + been + V-ing.'],
['He didn’t knew the answer.',['know',"didn't know",'did not know'],'He didn’t know the answer.','После didn’t — начальная форма.'],
['I was knowing her at school.',['knew'],'I knew her at school.','Know — глагол состояния.']];
const headings=['A practical place to study','A useful mistake','A new role in a group','An unexpected source of help','A deadline that changed a habit','A different way to remember','A journey to another country'];
const texts=[
['Before her last school year, Mia had revised mainly on the night before a test. She often received reasonable marks, but a week later she could remember very little. In September, she changed her routine. She began using short question cards on several different days. Instead of reading her notes again and again, she tried to recall the information without looking. The new method took less time and helped her remember more.',5,'recall the information without looking'],
['Leo was preparing a history presentation when his younger sister came into his room. He asked her to leave, but she wanted to know what he was doing. As he explained the topic, he noticed that he could not answer one of her simple questions. He checked his sources and corrected the presentation. Later, he realised that explaining the subject to someone much younger had helped him understand it better.',3,'explaining the subject to someone much younger had helped him'],
['When Sara began secondary school, she usually did her homework in bed. Messages kept arriving on her phone, and she found it difficult to concentrate. One afternoon, she tried the local library. There was enough space for her books, and the quiet room made a difference. She left her phone in her bag and completed her work before dinner. After that, she returned to the same table twice a week.',0,'the quiet room made a difference'],
['In his first group project, Amir had stayed quiet while the other students made the decisions. Their presentation was confusing because nobody had checked how the different parts fitted together. For the next project, he suggested a short meeting before they started. He wrote down everyone’s responsibilities and checked their progress. He did not do all the work himself, but he helped the group work together more effectively.',2,'he helped the group work together'],
['Ellie thought she understood the grammar, but her practice test showed a different picture. She had chosen several answers just because she recognised a time expression. Her teacher asked her to draw the events on a timeline. Ellie discovered that some actions had happened before the main story began. She rewrote the sentences and explained each choice aloud. The disappointing result showed her exactly what she needed to practise.',1,'The disappointing result showed her exactly what she needed'],
['Daniel used to leave every assignment until the last evening. One week, he had to hand in three projects on the same day. He stayed up late and still failed to finish one of them. Afterwards, he put the next deadlines on a calendar and divided each project into smaller steps. By the end of the following month, he had completed every assignment on time and no longer worked through the night.',4,'he put the next deadlines on a calendar']];
/* устные вопросы: на лицевой стороне только номер и кнопки, сам вопрос — на обороте */
const cards=[
['Interview · Education','What subjects are you best at, and why?','Прямой ответ + причина + пример.','I am best at English and history. I find them interesting, so I remember things easily. Last term I got top marks in both.'],
['Interview · Education','How much time do you usually spend on your homework?','Сколько + от чего зависит + деталь.','I usually spend about two hours on it. It depends on the day, because some subjects take longer. Maths is the one that takes me the most time.'],
['Interview · Education','How do you prepare for tests and exams?','Способ + почему он работает.','I start revising a few days before a test. I make short notes and test myself without looking. It helps me remember much more than just reading.'],
['Interview · Education','What did you enjoy most about school last year?','Past Simple: что, почему, пример.','I enjoyed our literature lessons most. We discussed books instead of just retelling them. I also liked the school trip we went on in May.'],
['Interview · Education','What would you like to change about your school?','I would like to… + причина.','I would like to have a later start in the morning. Students would be less tired in the first lessons. I would also add more practical classes.'],
['Past follow-up','What did you do after school yesterday?','Past Simple, цепочка событий.','I went home and had lunch. Then I did my English homework and went for a walk with a friend.'],
['Past follow-up','What were you doing at eight last night?','Past Continuous: процесс в момент.','At eight I was revising grammar for today’s lesson. My brother was watching a film in the next room.'],
['Past follow-up','Had you finished your homework before you went to bed?','Past Perfect: раньше другого события.','Yes, I had finished everything by ten. I had even packed my bag before I went to bed.'],
['Past follow-up','How long had you been studying before you took your last break?','Past Perfect Continuous: длительность.','I had been studying for about an hour. I had been doing exercises, so I really needed a rest.']];

const steps=[
['Правило: 4 Past','0–5'],['Выбор формы','5–13'],['Раскрой скобки','13–21'],['ЕГЭ 19–24','21–33'],['Найди ошибку','33–38'],['Reading','38–46'],['Интервью: карточки','46–54'],['Exit test','54–60'],['Домашняя работа','']];

/* ---------- каркас ---------- */
let box,step=0,item=0,clock=null;const values={},flipped={},marks={};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s).toLowerCase().replace(/[’‘`]/g,"'").replace(/n't/g,' not').replace(/\s+/g,' ').trim();
const right=(val,accepted)=>accepted.some(a=>norm(a)===norm(val));
function stopAll(){clearInterval(clock);clock=null;if(window.speechSynthesis)speechSynthesis.cancel();if(box)box.querySelectorAll('audio').forEach(a=>a.pause());}
function keep(){if(box)box.querySelectorAll('[data-v]').forEach(e=>{values[e.dataset.v]=e.value;});}
function go(s,i){keep();stopAll();step=Math.max(0,Math.min(steps.length-1,s));item=i||0;render();}
function close(){keep();stopAll();box.hidden=true;document.body.style.overflow='';}
window.openArinaPastToday=function(){
 if(!box){box=document.createElement('section');box.className='ap';box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label','Week 2 Lesson 3 · Past tenses');document.body.append(box);}
 step=0;item=0;box.hidden=false;document.body.style.overflow='hidden';render();
};
function keysBtn(html){return '<div class="apRow"><button class="apBtn" data-keys>Показать ответы</button></div><div class="apKeys" hidden>'+html+'</div>';}
function chips(n,key,label){let h='<div class="apChips">';for(let i=0;i<n;i++){const m=marks[key+i];h+='<button data-item="'+i+'" class="'+(i===item?'on ':'')+(m===1?'done':m===0?'miss':'')+'">'+(label?label(i):i+1)+'</button>';}return h+'</div>';}

function render(){
 const lessonCount=steps.length-1;
 box.innerHTML='<div class="apTop"><b>Week 2 · Lesson 3 · Past tenses · 60 минут</b><button class="apBtn" data-close>Закрыть</button></div>'+
 '<div class="apWrap"><nav class="apSteps"><div class="grp">На уроке</div>'+steps.map((s,i)=>(i===lessonCount?'<div class="grp">После урока</div>':'')+'<button data-step="'+i+'" class="'+(i===step?'on':'')+'"><i>'+(i<lessonCount?i+1:'·')+'</i><span>'+s[0]+'</span>'+(s[1]?'<em>'+s[1]+'</em>':'')+'</button>').join('')+'</nav>'+
 '<section class="apPanel"><div class="apBar"><div><small>'+(step<lessonCount?'Шаг '+(step+1)+' из '+lessonCount+' · '+steps[step][1]+' мин':'После урока')+'</small><h3>'+steps[step][0]+'</h3></div><div><button class="apBtn" data-step="'+(step-1)+'"'+(step===0?' disabled':'')+'>← Назад</button><button class="apBtn prim" data-step="'+(step+1)+'"'+(step===steps.length-1?' disabled':'')+'>Дальше →</button></div></div><div class="apBody"><div>'+body()+'</div></div></section></div>';
 box.querySelector('[data-close]').onclick=close;
 box.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>go(+b.dataset.step));
 box.querySelectorAll('[data-item]').forEach(b=>b.onclick=()=>go(step,+b.dataset.item));
 box.querySelectorAll('[data-keys]').forEach(b=>b.onclick=()=>{const k=b.closest('.apRow').nextElementSibling;k.hidden=!k.hidden;b.textContent=k.hidden?'Показать ответы':'Скрыть ответы';});
 box.querySelectorAll('[data-v]').forEach(e=>{if(values[e.dataset.v]!==undefined)e.value=values[e.dataset.v];});
 wire();
}

function gapHTML(set,id){return '<div class="apText apGap">'+set.lines.map((q,j)=>esc(q[0]).replace('___','<b class="n">'+(19+j)+'</b> <input data-v="'+id+j+'" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Задание '+(19+j)+'"> <small>'+q[1]+'</small>')).join(' ')+'</div><div class="apFb" role="status"></div><div class="apRow" style="margin-top:0"><button class="apBtn prim" data-check="'+id+'">Проверить</button></div>'+keysBtn(set.lines.map((q,j)=>'<b>'+(19+j)+'. '+esc(q[2][0])+'</b> — '+q[3]).join('<br>'));}
function linesHTML(list,id,withBase){return list.map((q,j)=>'<div class="apLine"><b>'+(j+1)+'.</b><div>'+(withBase?esc(q[0]).replace('___','<input data-v="'+id+j+'" autocomplete="off" autocapitalize="off" spellcheck="false"> <small>'+q[1]+'</small>'):esc(q[0])+'<br><input data-v="'+id+j+'" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="исправленная форма">')+'<span class="why" data-why="'+j+'"></span></div></div>').join('')+'<div class="apFb" role="status" style="margin-top:12px"></div><div class="apRow" style="margin-top:0"><button class="apBtn prim" data-check="'+id+'">Проверить</button></div>';}

function body(){
 if(step===0)return '<table class="apTable"><tr><th>Время</th><th>Форма</th><th>Когда</th><th>Пример</th></tr>'+
  '<tr><td>Past Simple</td><td><code>V2</code> / <code>did not + V1</code></td><td>Факт или цепочка событий. yesterday, last week, in 2020, ago</td><td>She <b>came</b> home, <b>had</b> dinner and <b>went</b> to bed.</td></tr>'+
  '<tr><td>Past Continuous</td><td><code>was / were + V-ing</code></td><td>Процесс в конкретный момент или фон для события. at 5 p.m., while, when</td><td>I <b>was reading</b> when he called.</td></tr>'+
  '<tr><td>Past Perfect</td><td><code>had + V3</code></td><td>Раньше другого прошлого события, важен результат. by the time, already, before</td><td>The train <b>had left</b> when we arrived.</td></tr>'+
  '<tr><td>Past Perfect Continuous</td><td><code>had been + V-ing</code></td><td>Длилось какое-то время до прошлого момента. for two hours, since</td><td>She <b>had been waiting</b> for an hour when the bus came.</td></tr></table>'+
  '<div class="apTwo"><div class="apBox"><h4>Три вопроса к каждому пропуску</h4><ol><li>Это факт или шаг в цепочке? → Past Simple.</li><li>Действие шло в тот момент или было фоном? → Past Continuous.</li><li>Оно было раньше другого прошлого события? Результат → Past Perfect, длительность → Past Perfect Continuous.</li></ol></div>'+
  '<div class="apBox"><h4>Ловушки</h4><ul><li>know, like, want, believe, understand — без Continuous: <b>knew</b>, не was knowing.</li><li>После did not — только начальная форма: <b>did not see</b>.</li><li>when + два Past Simple — события по очереди; when + Past Continuous — одно прервало другое.</li><li>Маркер — подсказка, а не правило: сначала смысл.</li></ul></div></div>';
 if(step===1){const q=choose[item];return '<p class="apNote">Выбери форму и объясни: что было сначала, что шло в процессе.</p>'+chips(choose.length,'c')+'<div class="apText">'+esc(q[0])+'</div><div class="apOpts">'+q[1].map((o,j)=>'<button data-opt="'+j+'">'+esc(o)+'</button>').join('')+'</div><div class="apFb" role="status"></div><div class="apRow" style="margin-top:0"><button class="apBtn" data-item="'+Math.max(0,item-1)+'"'+(item===0?' disabled':'')+'>← Предыдущее</button><button class="apBtn" data-item="'+Math.min(choose.length-1,item+1)+'"'+(item===choose.length-1?' disabled':'')+'>Следующее →</button></div>';}
 if(step===2)return '<p class="apNote">Поставь глагол в нужную форму Past. Сначала всё заполни, потом один раз нажми «Проверить».</p>'+linesHTML(brackets,'b',true)+keysBtn(brackets.map((q,j)=>'<b>'+(j+1)+'. '+esc(q[2][0])+'</b> — '+q[3]).join('<br>'));
 if(step===3)return '<p class="apNote">Формат экзамена: сначала прочитай весь текст, потом заполняй. 6 минут на сет.</p>'+chips(2,'s',i=>i?'Set B':'Set A')+'<h4 style="margin:0 0 10px;font-size:18px;color:#0039a6">'+sets[item].title+'</h4>'+gapHTML(sets[item],'s'+item+'-');
 if(step===4)return '<p class="apNote">В каждом предложении одна ошибка во времени. Впиши правильную форму глагола.</p>'+linesHTML(errors,'e',false)+keysBtn(errors.map((q,j)=>'<b>'+(j+1)+'. '+esc(q[2])+'</b> — '+q[3]).join('<br>'));
 if(step===5){const q=texts[item],id='r'+item;return '<p class="apNote">Подбери заголовок к тексту. Каждый заголовок используется один раз, один лишний.</p>'+chips(texts.length,'r',i=>String.fromCharCode(65+i))+'<div class="apRead"><div class="apText">'+esc(q[0])+'</div><div><div class="apHeads">'+headings.map((x,j)=>'<label class="'+(values[id]===String(j)?'sel':'')+'"><input type="radio" name="'+id+'" value="'+j+'"'+(values[id]===String(j)?' checked':'')+'><span>'+(j+1)+'. '+x+'</span></label>').join('')+'</div><div class="apFb" role="status" style="margin-top:12px"></div><div class="apRow" style="margin-top:0"><button class="apBtn prim" data-check="read">Проверить</button></div></div></div>'+keysBtn('A–6 · B–4 · C–1 · D–3 · E–2 · F–5. Лишний: 7.');}
 if(step===6)return '<p class="apNote">Ученица вопрос не видит: нажмите «Слушать вопрос», затем идёт 40 секунд на ответ. Текст вопроса и образец — на обороте карточки.</p><div class="apCards">'+cards.map((c,i)=>flipped[i]?
   '<div class="apCard back"><div class="num">'+c[0]+' · '+(i+1)+'</div><div class="q">'+esc(c[1])+'</div><div class="tip">'+c[2]+'</div><div class="tip"><b>Образец:</b> '+esc(c[3])+'</div><div class="sp"></div><div class="acts"><button class="apBtn" data-flip="'+i+'">Лицевая сторона</button></div></div>':
   '<div class="apCard"><div class="num">'+c[0]+'</div><div class="big">Question '+(i+1)+'</div><div class="clock" data-clock="'+i+'">00:40</div><div class="sp"></div><div class="acts"><button class="apBtn prim" data-say="'+i+'">Слушать вопрос</button><button class="apBtn" data-flip="'+i+'">Оборот</button></div></div>').join('')+'</div>'+
  '<div class="apBox"><h4>Запись из пособия Expert · Education interview</h4><p class="apNote" style="margin:0">Пять вопросов подряд с паузами для ответа — как на экзамене.</p><audio controls preload="metadata" src="'+url('expert/audio/13.mp3')+'"></audio><div class="apRow"><a href="'+url('expert/pdf/expert-07.pdf')+'#page=3" target="_blank" rel="noopener">Скрипт из пособия</a><a href="'+url('expert/pdf/expert-07.pdf')+'#page=4" target="_blank" rel="noopener">Модели ответов</a></div></div>';
 if(step===7)return '<p class="apNote">Контроль урока: без подсказок и без ключей. 5–6 из 6 — тема закрыта, 3–4 — повторить шаги 2–3, меньше — вернуться к правилу.</p><h4 style="margin:0 0 10px;font-size:18px;color:#0039a6">'+exit.title+'</h4>'+gapHTML(exit,'x');
 return '<div class="apBox"><ol><li>Повтори Set A и Set B без ключей. Для каждой ошибки: my answer → correct answer → reason.</li><li>Напиши 6–8 предложений о вчерашнем дне: используй все четыре Past tenses и подчеркни формы.</li><li>Запиши устный ответ: What did you do last weekend? — 2–3 полных предложения.</li><li>Повтори V2 / V3: go, come, take, give, see, write, leave, forget, find, tell, know, begin.</li></ol></div>'+keysBtn('go – went – gone · come – came – come · take – took – taken · give – gave – given · see – saw – seen · write – wrote – written · leave – left – left · forget – forgot – forgotten · find – found – found · tell – told – told · know – knew – known · begin – began – begun');
}

function wire(){
 const fb=box.querySelector('.apFb');
 box.querySelectorAll('[data-opt]').forEach(b=>b.onclick=()=>{const q=choose[item],j=+b.dataset.opt,ok=q[2].includes(j);box.querySelectorAll('[data-opt]').forEach(x=>x.classList.remove('ok','bad'));b.classList.add(ok?'ok':'bad');if(marks['c'+item]===undefined)marks['c'+item]=ok?1:0;fb.textContent=(ok?'Верно. ':'Не то. ')+q[3];const ch=box.querySelector('.apChips [data-item="'+item+'"]');if(ch)ch.classList.add(marks['c'+item]?'done':'miss');});
 box.querySelectorAll('[data-check]').forEach(b=>b.onclick=()=>{
  keep();const id=b.dataset.check;
  if(id==='read'){const q=texts[item],sel=box.querySelector('.apHeads input:checked');if(!sel){fb.textContent='Выбери заголовок.';return}const ok=+sel.value===q[1];marks['r'+item]=ok?1:0;fb.textContent=ok?'Верно. Докажи фразой из текста: «'+q[2]+'».':'Не подходит. Найди главную мысль всего текста, а не отдельное слово.';const ch=box.querySelector('.apChips [data-item="'+item+'"]');if(ch){ch.classList.remove('done','miss');ch.classList.add(ok?'done':'miss');}return}
  const list=id==='b'?brackets:id==='e'?errors:id==='x'?exit.lines:sets[item].lines,acc=id==='e'?1:2;let score=0;
  box.querySelectorAll('.apBody input[data-v]').forEach((e,j)=>{const ok=right(e.value,list[j][acc]);e.classList.toggle('ok',ok);e.classList.toggle('bad',!ok);score+=ok?1:0;const w=box.querySelector('[data-why="'+j+'"]');if(w)w.textContent=ok?'':list[j][3];});
  if(id.charAt(0)==='s')marks['s'+item]=score===list.length?1:0;
  fb.textContent=score+' / '+list.length+(score===list.length?' — отлично.':' — объясни выбор формы в красных пропусках.');
 });
 box.querySelectorAll('.apHeads input').forEach(r=>r.onchange=()=>{values[r.name]=r.value;box.querySelectorAll('.apHeads label').forEach(l=>l.classList.toggle('sel',l.querySelector('input').checked));});
 box.querySelectorAll('[data-flip]').forEach(b=>b.onclick=()=>{const i=+b.dataset.flip;flipped[i]=!flipped[i];go(step);});
 box.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>{
  const i=+b.dataset.say,el=box.querySelector('[data-clock="'+i+'"]');stopAll();box.querySelectorAll('.clock').forEach(c=>{c.textContent='00:40';c.classList.remove('run');});
  const start=()=>{let n=40;el.classList.add('run');clock=setInterval(()=>{n--;el.textContent='00:'+String(n).padStart(2,'0');if(n<=0){clearInterval(clock);clock=null;el.classList.remove('run');el.textContent='Время';}},1000);};
  if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){start();return}
  const u=new SpeechSynthesisUtterance(cards[i][1]);u.lang='en-GB';u.rate=.88;const vs=speechSynthesis.getVoices();u.voice=vs.find(v=>v.lang==='en-GB')||vs.find(v=>/^en/.test(v.lang))||null;
  let started=false;const once=()=>{if(!started){started=true;start();}};u.onend=once;u.onerror=once;speechSynthesis.speak(u);setTimeout(once,9000);
 });
}
})();

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
.apTop{display:flex;align-items:center;gap:10px;background:#fff;border-bottom:1px solid #d9e1ec;padding:5px 12px;flex-wrap:wrap}
.apTop .apLesson{font-size:15px;color:#64748b;white-space:nowrap}
.apTop h3{margin:0;font-size:20px;color:#142337}
.apTop small{font-size:15px;color:#64748b;white-space:nowrap}
.apTop .apFill{flex:1}
.apBtn{background:#fff;color:#0039a6;border:1px solid #b7c9e8;border-radius:8px;padding:6px 14px;font-weight:700;font-size:16px}
.apBtn.prim{background:#0039a6;color:#fff;border-color:#0039a6}
.apBtn:disabled{opacity:.4;cursor:default}
.apWrap{flex:1;min-height:0;display:grid;grid-template-columns:232px minmax(0,1fr);gap:10px;padding:8px}
.apSteps{overflow:auto;display:flex;flex-direction:column;gap:4px}
.apSteps .grp{font-size:13px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#64748b;margin:2px 2px 0}
.apSteps button{display:grid;grid-template-columns:26px 1fr auto;gap:8px;align-items:center;text-align:left;background:#fff;border:1px solid #d5deea;border-left:4px solid #0039a6;border-radius:8px;padding:5px 8px;font-size:16px;font-weight:700;color:#142337}
.apSteps button i{font-style:normal;width:26px;height:26px;border-radius:50%;background:#e8eef7;color:#0039a6;font-size:14px;display:grid;place-items:center}
.apSteps button em{font-style:normal;font-weight:400;font-size:14px;color:#64748b}
.apSteps button.on{background:#e6f0ff;border-left-color:#d52b1e}
.apSteps button.on i{background:#0039a6;color:#fff}
.apPanel{min-width:0;display:flex;flex-direction:column;background:#fff;border:1px solid #d9e1ec;border-radius:12px;overflow:hidden}
.apBody{flex:1;overflow:auto;padding:10px 18px 14px}
.apBody>div{max-width:1180px}
.apBody p{margin:0 0 8px}
.apNote{color:#53657a;font-size:16px}
.apChips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}
.apChips button{min-width:40px;padding:6px 10px;border:1px solid #b7c9e8;border-radius:8px;background:#fff;color:#0039a6;font-weight:700;font-size:16px}
.apChips button.on{background:#0039a6;color:#fff;border-color:#0039a6}
.apChips button.done{background:#edf9f1;border-color:#26724d;color:#1d5a3c}
.apChips button.miss{background:#fff0ee;border-color:#bf322a;color:#9a251f}
.apChips button.on.done,.apChips button.on.miss{outline:3px solid #0039a6;outline-offset:1px}
.apText{background:#f7f9fc;border:1px solid #d9e1ec;border-radius:10px;padding:10px 16px;margin:0 0 10px}
.apOpts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 8px}
.apOpts button{padding:9px 14px;text-align:left;background:#fff;border:1px solid #b7c9e8;border-radius:10px;font-weight:700;color:#142337}
.ap .ok{background:#edf9f1!important;border-color:#26724d!important}
.ap .bad{background:#fff0ee!important;border-color:#bf322a!important}
.apFb{min-height:26px;margin:0 0 6px;font-weight:700}
.apKeys{background:#edf3ff;border-radius:10px;padding:14px 16px;margin-top:12px}
.apKeys[hidden]{display:none}
.apRow{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:8px 0 0}
.apGap input,.apLine input{width:190px;padding:2px 8px;border:1px solid #9eb4d1;border-radius:7px;color:#142337;background:#fff;font-weight:700}
.apGap{line-height:2}
.apGap small,.apLine small{font-size:14px;font-weight:700;color:#d52b1e}
.apGap b.n{color:#0039a6}
.apLine{display:grid;grid-template-columns:26px 1fr;gap:6px;padding:4px 0;border-bottom:1px solid #e6ebf2;break-inside:avoid}
.apCols{columns:2;column-gap:30px}
.apLine>b{color:#0039a6}
.apLine .why{display:block;font-size:16px;color:#53657a}
.apTable{width:100%;border-collapse:collapse;margin:0 0 10px}
.apTable th,.apTable td{border:1px solid #d9e1ec;padding:5px 10px;text-align:left;vertical-align:top}
.apTable th{background:#f0f4fa;font-size:16px}
.apTable td:first-child{font-weight:700;color:#0039a6;white-space:nowrap}
.apTable code{font-family:inherit;font-weight:700;color:#d52b1e}
.apTwo{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.apBox{border:1px solid #d9e1ec;border-radius:10px;padding:8px 14px}
.apBox h4{margin:0 0 6px;font-size:18px;color:#0039a6}
.apBox ul,.apBox ol{margin:0;padding-left:22px}
.ap li,.ap td,.ap th,.ap label,.ap a{font-size:18px;line-height:1.55}
.apRead{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:16px;align-items:start}
.apRead .apText{margin:0}
.apHeads{display:flex;flex-direction:column;gap:4px}
.apHeads label{display:flex;gap:10px;align-items:flex-start;border:1px solid #d5deea;border-radius:8px;padding:4px 10px;cursor:pointer}
.apHeads label.sel{border-color:#0039a6;background:#e6f0ff}
.apHeads input{margin-top:6px}
.ap audio{width:100%;margin:6px 0 0}
.ivTop{display:flex;align-items:center;gap:6px;flex-wrap:nowrap;margin:0 0 10px}
.ivTop .apBtn{white-space:nowrap;padding:6px 10px}
.ivTop select{max-width:205px;padding:6px 8px;border:1px solid #b7c9e8;border-radius:8px;background:#fff;font-weight:700;color:#142337}
.ivNums{display:flex;gap:6px}.ivNums button{width:40px;height:36px;border:1px solid #b7c9e8;border-radius:8px;background:#fff;color:#0039a6;font-weight:700}.ivNums button.on{background:#0039a6;color:#fff;border-color:#0039a6}
.ivPill{display:none}
.ivGrid{display:grid;grid-template-columns:240px minmax(0,1fr);gap:12px;align-items:stretch}
.ivTimer,.ivCard{border:1px solid #d5deea;border-radius:14px;background:#fff;padding:14px 18px}
.ivTimer{display:flex;flex-direction:column;align-items:center;gap:12px}
.ivRing{width:150px;height:150px;border-radius:50%;display:grid;place-items:center;align-content:center;position:relative;background:conic-gradient(#3b6cf6 360deg,#e3e9f5 0)}
.ivRing::before{content:"";position:absolute;inset:12px;border-radius:50%;background:#fff}
.ivRing b,.ivRing span{position:relative}.ivRing b{font-size:46px;line-height:1;color:#142337}.ivRing span{font-size:15px;color:#53657a}
.ivRing.end b{color:#d52b1e}
.ivBtns{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-start}
.ivCard{display:flex;flex-direction:column;gap:8px;min-height:250px}
.ivCard.back{background:#f0f5ff;border-color:#0039a6}
.ivEy{font-size:14px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#64748b}
.ivBig{font-size:30px;font-weight:800;line-height:1.15;color:#142337}
.ivQ{font-size:26px;font-weight:800;line-height:1.25;color:#0039a6}
.ivTip{font-size:18px}
.ivVoice{font-size:14px;color:#64748b;min-height:18px}
.ivHint{margin-top:auto;border:1px dashed #c5d2e4;border-radius:10px;padding:8px 12px;font-size:16px;color:#53657a}
.ivRec{margin-top:10px;font-size:16px}.ivRec summary{cursor:pointer;font-weight:700;color:#0039a6}
@media(max-width:900px){.ap{font-size:17px}.apWrap{grid-template-columns:1fr;overflow:auto}.apSteps{flex-direction:row;flex-wrap:wrap;overflow:visible}.apSteps .grp{display:none}.apSteps button{grid-template-columns:26px auto}.apSteps button em{display:none}.apPanel{min-height:70vh}.apOpts,.apTwo,.apRead,.ivGrid{grid-template-columns:1fr}.ivTop{flex-wrap:wrap}.apCols{columns:1}}
@media(max-width:560px){.apGap input,.apLine input{width:160px}}
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
['Past follow-up','How long had you been studying before you took your last break?','Past Perfect Continuous: длительность.','I had been studying for about an hour. I had been doing exercises, so I really needed a rest.'],
['Past follow-up','What was the best thing that happened to you last week?','Past Simple: что произошло + почему это было хорошо.','The best thing was a trip to the cinema with my friends. We saw a new comedy and laughed a lot. After the film we went for a walk and talked until late.']];
const variants=[['Вариант 1','Education',[0,1,2,3,4]],['Вариант 2','Past follow-up',[5,6,7,8,9]]];

const steps=[
['Правило: 4 Past','0–5'],['Выбор формы','5–13'],['Раскрой скобки','13–21'],['ЕГЭ 19–24','21–33'],['Найди ошибку','33–38'],['Reading','38–46'],['Интервью','46–54'],['Exit test','54–60'],['Домашняя работа','']];

/* ---------- каркас ---------- */
let box,step=0,item=0,clock=null,ivVar=0,ivQ=0,ivFlip=false,ivLeft=40,ivVoice='';const values={},marks={};
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
 box.innerHTML='<div class="apTop"><span class="apLesson">W2 · L3 · Past tenses</span><h3>'+steps[step][0]+'</h3><small>'+(step<lessonCount?'шаг '+(step+1)+' из '+lessonCount+' · '+steps[step][1]+' мин':'после урока')+'</small><span class="apFill"></span><button class="apBtn" data-step="'+(step-1)+'"'+(step===0?' disabled':'')+'>← Назад</button><button class="apBtn prim" data-step="'+(step+1)+'"'+(step===steps.length-1?' disabled':'')+'>Дальше →</button><button class="apBtn" data-close>Закрыть</button></div>'+
 '<div class="apWrap"><nav class="apSteps"><div class="grp">На уроке</div>'+steps.map((s,i)=>(i===lessonCount?'<div class="grp">После урока</div>':'')+'<button data-step="'+i+'" class="'+(i===step?'on':'')+'"><i>'+(i<lessonCount?i+1:'·')+'</i><span>'+s[0]+'</span>'+(s[1]?'<em>'+s[1]+'</em>':'')+'</button>').join('')+'</nav>'+
 '<section class="apPanel"><div class="apBody"><div>'+body()+'</div></div></section></div>';
 box.querySelector('[data-close]').onclick=close;
 box.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>go(+b.dataset.step));
 box.querySelectorAll('[data-item]').forEach(b=>b.onclick=()=>go(step,+b.dataset.item));
 box.querySelectorAll('[data-keys]').forEach(b=>b.onclick=()=>{const k=b.closest('.apRow').nextElementSibling;k.hidden=!k.hidden;b.textContent=k.hidden?'Показать ответы':'Скрыть ответы';});
 box.querySelectorAll('[data-v]').forEach(e=>{if(values[e.dataset.v]!==undefined)e.value=values[e.dataset.v];});
 wire();
}

function gapHTML(set,id){return '<div class="apText apGap">'+set.lines.map((q,j)=>esc(q[0]).replace('___','<b class="n">'+(19+j)+'</b> <input data-v="'+id+j+'" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Задание '+(19+j)+'"> <small>'+q[1]+'</small>')).join(' ')+'</div><div class="apFb" role="status"></div><div class="apRow" style="margin-top:0"><button class="apBtn prim" data-check="'+id+'">Проверить</button></div>'+keysBtn(set.lines.map((q,j)=>'<b>'+(19+j)+'. '+esc(q[2][0])+'</b> — '+q[3]).join('<br>'));}
function linesHTML(list,id,withBase){return '<div class="'+(list.length>6?'apCols':'')+'">'+list.map((q,j)=>'<div class="apLine"><b>'+(j+1)+'.</b><div>'+(withBase?esc(q[0]).replace('___','<input data-v="'+id+j+'" autocomplete="off" autocapitalize="off" spellcheck="false"> <small>'+q[1]+'</small>'):esc(q[0])+'<br><input data-v="'+id+j+'" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="исправленная форма">')+'<span class="why" data-why="'+j+'"></span></div></div>').join('')+'</div><div class="apFb" role="status" style="margin-top:8px"></div><div class="apRow" style="margin-top:0"><button class="apBtn prim" data-check="'+id+'">Проверить</button></div>';}

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
 if(step===6){const v=variants[ivVar],c=cards[v[2][ivQ]];return '<div class="ivTop"><select data-ivvar aria-label="Вариант">'+variants.map((x,k)=>'<option value="'+k+'"'+(k===ivVar?' selected':'')+'>'+x[0]+' — '+x[1]+'</option>').join('')+'</select><div class="ivNums">'+v[2].map((x,k)=>'<button data-ivq="'+k+'" class="'+(k===ivQ?'on':'')+'">'+(k+1)+'</button>').join('')+'</div><span class="ivPill">Вопрос '+(ivQ+1)+' из '+v[2].length+'</span><span class="apFill"></span><button class="apBtn" data-ivq="'+(ivQ-1)+'"'+(ivQ===0?' disabled':'')+'>← Назад</button><button class="apBtn prim" data-ivflip>'+(ivFlip?'Скрыть вопрос':'Перевернуть карточку')+'</button><button class="apBtn" data-ivq="'+(ivQ+1)+'"'+(ivQ===v[2].length-1?' disabled':'')+'>Вперёд →</button></div>'+
  '<div class="ivGrid"><div class="ivTimer"><div class="ivRing" data-ring><b data-left>'+ivLeft+'</b><span>seconds</span></div><div class="ivBtns"><button class="apBtn prim" data-ivstart>Start 40 s</button><button class="apBtn" data-ivreset>Reset</button></div></div>'+
  (ivFlip?'<div class="ivCard back"><div class="ivEy">Question '+(ivQ+1)+' · '+v[1]+'</div><div class="ivQ">'+esc(c[1])+'</div><div class="ivTip"><b>Как ответить:</b> '+c[2]+'</div><div class="ivTip"><b>Образец:</b> '+esc(c[3])+'</div></div>':
   '<div class="ivCard"><div class="ivEy">Question audio</div><div class="ivBig">Listen to the question</div><p class="apNote">Вопрос не показывается на экране. Слушайте и отвечайте вслух в формате ЕГЭ: 2–3 предложения.</p><div class="ivBtns"><button class="apBtn prim" data-ivplay>Play question</button><button class="apBtn" data-ivplay>Replay</button><button class="apBtn" data-ivstop>Stop voice</button></div><div class="ivVoice" data-voice>'+esc(ivVoice)+'</div><div class="ivHint">Сначала прозвучит вопрос, потом начнётся отсчёт 40 секунд. После ответа переверните карточку и сравните с образцом.</div></div>')+'</div>'+
  '<details class="ivRec"><summary>Запись из пособия Expert · Education interview (5 вопросов подряд с паузами)</summary><audio controls preload="metadata" src="'+url('expert/audio/13.mp3')+'"></audio><div class="apRow"><a href="'+url('expert/pdf/expert-07.pdf')+'#page=3" target="_blank" rel="noopener">Скрипт из пособия</a><a href="'+url('expert/pdf/expert-07.pdf')+'#page=4" target="_blank" rel="noopener">Модели ответов</a></div></details>';}
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
 const ring=box.querySelector('[data-ring]'),left=box.querySelector('[data-left]');
 if(ring){
  const paint=()=>{left.textContent=ivLeft;ring.style.background='conic-gradient(#3b6cf6 '+(ivLeft/40*360)+'deg,#e3e9f5 0)';ring.classList.toggle('end',ivLeft===0);};paint();
  const run=()=>{clearInterval(clock);ivLeft=40;paint();clock=setInterval(()=>{ivLeft--;paint();if(ivLeft<=0){clearInterval(clock);clock=null;}},1000);};
  const reset=()=>{clearInterval(clock);clock=null;ivLeft=40;paint();};
  const say=()=>{
   if(window.speechSynthesis)speechSynthesis.cancel();reset();
   const text=cards[variants[ivVar][2][ivQ]][1];
   if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){run();return}
   const u=new SpeechSynthesisUtterance(text),vs=speechSynthesis.getVoices(),v=vs.find(x=>x.lang==='en-GB'&&/male|daniel|george|oliver/i.test(x.name))||vs.find(x=>x.lang==='en-GB')||vs.find(x=>/^en/.test(x.lang))||null;
   u.lang='en-GB';u.rate=.88;if(v){u.voice=v;ivVoice='Voice: '+v.name+' ('+v.lang+')';const vl=box.querySelector('[data-voice]');if(vl)vl.textContent=ivVoice;}
   let started=false;const once=()=>{if(!started){started=true;if(box.querySelector('[data-ring]')===ring)run();}};u.onend=once;u.onerror=once;speechSynthesis.speak(u);setTimeout(once,text.length*110+3000);
  };
  box.querySelectorAll('[data-ivplay]').forEach(b=>b.onclick=say);
  const st=box.querySelector('[data-ivstop]');if(st)st.onclick=()=>{if(window.speechSynthesis)speechSynthesis.cancel();};
  box.querySelector('[data-ivstart]').onclick=run;box.querySelector('[data-ivreset]').onclick=reset;
  box.querySelector('[data-ivflip]').onclick=()=>{ivFlip=!ivFlip;const keepLeft=ivLeft,running=!!clock;render();if(running){ivLeft=keepLeft;const r2=box.querySelector('[data-ring]'),l2=box.querySelector('[data-left]');const p2=()=>{l2.textContent=ivLeft;r2.style.background='conic-gradient(#3b6cf6 '+(ivLeft/40*360)+'deg,#e3e9f5 0)';};p2();clearInterval(clock);clock=setInterval(()=>{ivLeft--;p2();if(ivLeft<=0){clearInterval(clock);clock=null;}},1000);}};
  box.querySelectorAll('[data-ivq]').forEach(b=>b.onclick=()=>{ivQ=+b.dataset.ivq;ivFlip=false;ivLeft=40;go(step);});
  box.querySelector('[data-ivvar]').onchange=e=>{ivVar=+e.target.value;ivQ=0;ivFlip=false;ivLeft=40;go(step);};
 }
}
})();

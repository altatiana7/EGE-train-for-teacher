/* Урок 14 ноября (суббота, неделя 4 · урок 6): Future + Passive — смешанное повторение.
   Будущее (will / will be + V3 / would после «знал, обещал») и Passive — то, что Арине тяжело (19.10 снято с домашки, тренируем на уроке).
   Все предложения и тексты — открытый банк ФИПИ (fipi/exam-data.js), тексты, которых ещё не было на уроках и в домашке (g19 №32, №33; w25 №22, №1).
   Warm-up — устная часть: интервью и чтение вслух. Упражнения — по одному вопросу (KQ.kahoot), 19–24 и 25–29 — сплошным текстом (KQ.fipi), карточки — как Quizlet.
   Ничего не сохраняется: каждый блок открывается с начала. */
(function(){
'use strict';
const base=new URL('../',document.currentScript.src),url=p=>new URL(p,base).href;
const K=rows=>rows.map(r=>({q:r[0],hint:r[1]||'',opts:r[2],a:r[3],why:r[4]||''}));

/* ---------- Future & Passive · по одному предложению (ФИПИ) ---------- */
const FP14=K([
['He ___ to be a genius by his contemporaries.','CONSIDER',['considered','was considered','is considering','has considered'],'was considered','Его считали гением (с ним делают) и это в прошлом → was + V3.'],
['They are also able to produce a lot of sounds, which ___ by them to express a huge variety of feelings.','USE',['use','are used','were used','are using'],'are used','Звуки — множественное, их используют → are + V3.'],
['The print brush ___ to public in 2011.','DEMONSTRATE',['demonstrated','is demonstrated','was demonstrated','has demonstrated'],'was demonstrated','Кисть показали публике (2011 — прошлое) → was + V3.'],
['On April 1, 1957 British people ___ a fake film about growing spaghetti in Switzerland.','SHOW',['showed','were shown','are shown','have shown'],'were shown','Людям показали фильм → were + V3. Конкретная дата — прошлое.'],
['They ___ to take whatever they could carry themselves.','ALLOW',['allowed','were allowed','are allowed','had allowed'],'were allowed','Им разрешили → were + V3.'],
['These creatures ___ human qualities as they can talk, think and act like humans.','GIVE',['give','are given','gave','have given'],'are given','Существам дают качества (авторы дают) → are + V3.'],
['Maria ___ in Greece.','EDUCATE',['educated','was educated','has educated','is educated'],'was educated','Её воспитали и выучили в Греции → was + V3.'],
['Basque is the language which ___ in northwestern Spain and southwestern France.','SPEAK',['speaks','is spoken','was spoken','is speaking'],'is spoken','Язык, на котором говорят (сейчас, всегда) → is + V3.'],
['According to English legends, if you once plant mayflowers near your house, they ___ you from evil spirits forever.','PROTECT',['protect','will protect','would protect','are protecting'],'will protect','После if — настоящее (plant), а в главной части о будущем → will + V1.'],
['Edison knew that if he didn’t work hard, he ___ any further success.','NOT ACHIEVE',['will not achieve','would not achieve','does not achieve','has not achieved'],'would not achieve','Knew — прошлое, поэтому «потом» тоже из прошлого → would.'],
['Still, the scientists insisted they ___ famous in the near future.','BE',['will be','would be','are','have been'],'would be','Insisted — прошлое → would be.'],
['He pointed out that any science fiction book ___ a success if the author followed these two principles.','BE',['will be','would be','is','was'],'would be','Pointed out — прошлое; «if + прошедшее» → would be.'],
['The King promised nobody ___ them.','STOP',['will stop','would stop','stops','stopped'],'would stop','Promised — прошлое → would + V1.'],
['People often made fun of him. They used to tell him that he ___ a real painter.','NOT BECOME',['will not become','would not become','does not become','has not become'],'would not become','Used to tell — прошлое → would not become.']
]);

/* ---------- Error Hunter ---------- */
const OK='Верно',BAD='Ошибка';
const EH14=K([
['Much of Iceland is covered in lava as eruptions happen about every four years.','',[OK,BAD],OK,'Исландию покрывает лава (с ней делают) → is covered. Верно.'],
['Millions of tourists have been to Altai so far, and a lot of them want to come back.','',[OK,BAD],OK,'So far → have been. Верно.'],
['Thousands of tourists tried this exciting route so far.','',[OK,BAD],BAD,'So far (до сих пор) → have tried.'],
['Not all people remember that mayflowers consider to be endangered.','',[OK,BAD],BAD,'Цветы считают (с ними делают) → are considered.'],
['There were found some tools that were approximately 800,000 years old.','',[OK,BAD],OK,'Инструменты нашли → were found. Tools — много → were. Верно.'],
['If you wanted to spend 30 seconds looking at each piece of art, it will take you 100 days to see the entire museum.','',[OK,BAD],BAD,'If + прошедшее (wanted) → would take.'],
['No one knows exactly when Smolensk was found.','',[OK,BAD],BAD,'Город основали → was founded. Found — «нашли».'],
['Smolensk is called the shield of Russia because in the past it defended the western borders of our country.','',[OK,BAD],OK,'Город сам защищал (Active) → defended. Верно.'],
['His ship was called The Neva.','',[OK,BAD],OK,'Корабль назвали → was called. Верно.'],
['His ship called The Neva.','',[OK,BAD],BAD,'Корабль назвали → was called.'],
['The country’s capital is Oslo, and it’s official language is Norwegian.','',[OK,BAD],BAD,'Чей язык? Страны → its. It’s = it is.'],
['It is not related to any other language in the world.','',[OK,BAD],OK,'Язык ни к какому не относится (его не связывают) → is not related. Верно.']
]);

/* ---------- ЕГЭ 19–24 · ФИПИ (сплошным текстом) ---------- */
const G19=[
{h:'Pelmeni / Burj Khalifa',q:'Pelmeni is a popular Russian dish. There are many different kinds of pelmeni, so everyone will find something to their liking. This dish ___ from minced meat and dough.',b:'PREPARE',a:'is prepared',why:'Блюдо готовят (с ним делают), факт → is + V3.'},
{q:'You can boil, bake or fry pelmeni. It is interesting to mention that many regions of Russia claim that it was there where the tradition to cook pelmeni once ___ from.',b:'COME',a:'came',why:'Once — когда-то; традиция пришла (Active) → came.'},
{q:'Izhevsk, for instance, even has a monument to pelmeni. Tourists enjoy ___ photos of it.',b:'TAKE',a:'taking',why:'enjoy + -ing.'},
{q:'Burj Khalifa is a very famous building which is situated in Dubai. Its height is 829,8 metres. It ___ the tallest building in the world ever since 2009.',b:'BE',a:'has been',why:'Ever since 2009 → has been.'},
{q:'The number of floors in Burj Khalifa is so huge as there are a total of 2909 stairs from the ground floor to the 160th floor. However, in the future the building ___ its title to Dubai Creek Tower which is expected to be taller.',b:'LOSE',a:'will lose',why:'In the future → will lose.'},
{q:'Burj Khalifa is a beautiful construction with some observation decks, hotels, offices and residences ___ there.',b:'LOCATE',a:'located',why:'Квартиры, расположенные там → located (V3).'},
{h:'The M12 highway / Monowi',q:'The M12 is a brand-new motorway in Russia. Its first section 21 km long was opened for traffic in September 2022, and it will be completed by 2027 only. It will connect Moscow to Kazan, ___ through five administrative territories.',b:'PASS',a:'passing',why:'Дорога, проходящая через … → passing (-ing).'},
{q:'Although roadworkers ___ the M12 yet, there are still a lot of interesting sights you can see along this new road.',b:'NOT COMPLETE',a:'have not completed',why:'Yet → have not completed.'},
{q:'Driving the M12 is perhaps the ___ way to visit many small Russian towns like Noginsk, Pokrov and so on.',b:'GOOD',a:'best',why:'The … way → превосходная степень: best.'},
{q:'The town of Monowi, Nebraska, the USA, is a very special place. It ___ in 1903 by immigrants from Europe.',b:'FOUND',a:'was founded',why:'Город основали (1903) → was founded.'},
{q:'In the 1930s it was an ordinary American town. However, if you came there now, you ___ very surprised to see that the population of this town is only one person.',b:'BE',a:'would be',why:'If + прошедшее (came) → would be.'},
{q:'The town’s only resident’s name is Elsie Elner. She is an old lady but she still works ___ her own pub to serve passing travellers and tourists.',b:'RUN',a:'running',why:'Works running the pub — действие в то же время → -ing.'}
];

/* ---------- ЕГЭ 25–29 · ФИПИ (сплошным текстом) ---------- */
const W25=[
{h:'The Blue Mountains National Park',q:'When people come to Australia, they typically wish to enjoy the outstanding nature of the continent. If you are a ___ to Australia with this very goal on your mind, try The Blue Mountains National Park.',b:'VISIT',a:'visitor',why:'A … — человек, приезжающий → -or.'},
{q:'It is located in New South Wales, approximately 80 km west of Sydney. Its proximity to the biggest city in Australia has made this ___ park a popular day trip for both tourists and locals alike.',b:'AMAZE',a:'amazing',why:'Парк вызывает восхищение → amazing (-ing).'},
{q:'The park is ___ best known for the Three Sisters, a rock formation that towers 900 m above the Jamison Valley.',b:'PROBABLE',a:'probably',why:'Перед прилагательным/причастием → наречие: probably.'},
{q:'The Blue Mountains National Park features miles of trails for hikers and mountain bikers, and it is also a popular ___ playground for adventurers who enjoy adrenaline sports.',b:'NATURE',a:'natural',why:'Какая площадка? Естественная → natural.'},
{q:'Among such sports the top one is rock ___.',b:'CLIMB',a:'climbing',why:'Rock climbing — скалолазание → -ing.'},
{h:'Russia in space',q:'Everyone knows that Russians were the first in space in many ways. We were the first nation to send an artificial satellite, an animal, and a human into orbit. However, there are other less well-known ___ of our country in the space race.',b:'ACHIEVE',a:'achievements',why:'Other … of our country — много достижений → achievements.'},
{q:'For example, Russian ___ were the first to take a photo of the dark side of the Moon.',b:'SCIENCE',a:'scientists',why:'Были первыми — люди, много → scientists.'},
{q:'In October 1959 they launched a spacecraft with a camera. The probe took 40 photos of the far side of the Moon and transmitted them to the Earth. Russians were also the first to land on another planet. After some ___ attempts in 1971 Venera-7 finally landed on the surface of Venus.',b:'SUCCESS',a:'unsuccessful',why:'Сначала не получилось (finally) → unsuccessful.'},
{q:'The same year our country landed on Mars and took the first photo of it. The mission didn’t send any ___ information back to Earth but it was still a breakthrough.',b:'VALUE',a:'valuable',why:'Ценная информация → valuable.'},
{q:'Russian astronauts still continue to explore the outer space and are ___ all over the world.',b:'FAME',a:'famous',why:'Are … — какие? Известные → famous.'}
];

/* ---------- Карточки (Quizlet) ---------- */
const CARDS=[
['will + V1','решил, пообещал, прогноз','In the future the building will lose its title.'],
['will be + V3','с чем-то сделают в будущем','The M12 will be completed by 2027.'],
['if + настоящее → will','после if настоящее, в главной части will','If you plant mayflowers, they will protect you.'],
['would','после «знал, обещал, настаивал» · «если бы»','The King promised nobody would stop them.'],
['has / have been','до сих пор · since · for · so far','It has been the tallest building since 2009.'],
['was / were + V3','с чем-то сделали в прошлом','The town was founded in 1903 by immigrants.'],
['is / are + V3','факт, то, что делают всегда','This dish is prepared from minced meat and dough.'],
['enjoy + -ing','после enjoy, start — глагол с -ing','Tourists enjoy taking photos of it.'],
['the best · the first','the + превосходная · порядковое','the best way · the first nation'],
['-or / -ist / -er','человек','visitor · scientist · composer'],
['-ment','что? (существительное)','achievements · entertainment'],
['un- / -able','не- · который можно','unsuccessful attempts · valuable information']
];

/* ---------- стили ---------- */
const st=document.createElement('style');st.textContent=`
.l14{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337}
.l14Rule{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.l14Rule section{background:#fff;border:1px solid #dbe3ee;border-top:4px solid #0039A6;border-radius:12px;padding:10px 16px}
.l14Rule section:nth-child(2){border-top-color:#5b8f65}.l14Rule section:nth-child(3){border-top-color:#D52B1E}
.l14Rule h4{margin:0 0 8px;font-size:20px;color:#0039A6}
.l14Rule p,.l14Rule li{font-size:17px;line-height:1.45;margin:4px 0}
.l14Rule ol,.l14Rule ul{margin:0;padding-left:20px}
.l14Rule table{border-collapse:collapse;width:100%;font-size:17px}
.l14Rule td{border-bottom:1px solid #e5ebf3;padding:5px 6px;vertical-align:top}
.l14Rule td:first-child{font-weight:700;color:#0039A6;white-space:nowrap}
.l14Rule i{color:#334155}.l14Rule .bad{color:#D52B1E;text-decoration:line-through}.l14Rule .ok{color:#15803d;font-weight:700}
.l14Pred{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.l14Pred figure{margin:0;background:#fff;border:1px solid #dbe3ee;border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
.l14Pred img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#eef2f8}
.l14Pred .ph{aspect-ratio:4/3;display:grid;place-items:center;background:#eef2f8;color:#9fb0c7;font:800 44px/1 "Segoe UI",Arial,sans-serif}
.l14Pred figcaption{padding:8px 10px;font-size:17px;font-weight:700;color:#0039A6;min-height:42px;text-align:center}
.l14Pred figcaption span{visibility:hidden}.l14Pred.show figcaption span{visibility:visible}
.l14Q{font-size:22px;text-align:center;margin:0 0 12px;font-weight:700}
.l14Row{display:flex;gap:10px;justify-content:center;margin-top:14px}
.l14Row button,.l14Nav button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:8px 18px;font:800 16px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.l14Row button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.l14Cards{max-width:560px;margin:0 auto;font-family:"PT Serif",Georgia,"Times New Roman",serif}
.l14Face{border:1px solid #dbe3ee;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(20,35,55,.08);min-height:230px;padding:22px 26px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer}
.l14Face.back{background:#f2f7ff;border-color:#b7c9e8}
.l14Face .w{font-size:38px;font-weight:700;color:#0039A6}
.l14Face .t{font-size:24px;font-weight:700;margin-bottom:8px}
.l14Face .ex{font-size:19px;line-height:1.45;color:#334155}
.l14Nav{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:12px;font:800 18px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.l14Nav button:disabled{opacity:.4;cursor:default}
.l14Wrap{display:flex;gap:18px;flex-wrap:wrap}
.l14Wrap .col{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:12px 18px;min-width:280px;flex:1}
.l14Wrap h3{margin:0 0 8px;font-size:20px;color:#0039A6}
.l14Wrap .it{display:flex;align-items:center;gap:10px;font-size:19px;padding:5px 0;cursor:pointer}
.l14Wrap .bx{width:26px;height:26px;border:2px solid #b7c9e8;border-radius:7px;display:inline-grid;place-items:center;background:#fff;font-size:18px;color:#15803d}
.l14Wrap .it.on .bx{background:#d9f2e2;border-color:#86efac}
.l14Wrap .hw{font-size:19px;padding:5px 0}
@media(max-width:1000px){.l14Rule{grid-template-columns:1fr}.l14Pred{grid-template-columns:repeat(2,minmax(0,1fr))}}`;
document.head.appendChild(st);

/* ---------- правило: просто, без терминов ---------- */
const RULE='<div class="l14 l14Rule">'+
'<section><h4>1 · Что будет</h4><table>'+
'<tr><td>решил, пообещал, прогноз</td><td><b>will + V1</b><br><i>It will connect Moscow to Kazan.</i></td></tr>'+
'<tr><td>с чем-то сделают</td><td><b>will be + V3</b><br><i>It will be completed by 2027.</i></td></tr>'+
'<tr><td>после if / when</td><td>в if — <b>настоящее</b>, в главной части <b>will</b><br><i>If you plant them, they will protect you.</i></td></tr></table></section>'+
'<section><h4>2 · Будущее из прошлого</h4><ol>'+
'<li>Рассказ в прошлом (<b>knew, promised, insisted, pointed out</b>) → «потом» тоже <b>would</b>.<br><i>The King promised nobody would stop them.</i></li>'+
'<li><b>If + прошедшее</b> (came, wanted) → <b>would</b>.<br><i>If you came there now, you would be surprised.</i></li></ol>'+
'<p><i>Нельзя:</i> <span class="bad">he knew he will not achieve</span> → <span class="ok">he would not achieve</span>.</p></section>'+
'<section><h4>3 · Обрати внимание</h4><ul>'+
'<li><b>since 2009 · for centuries · so far · yet</b> → <b>has / have been</b>, не is.</li>'+
'<li>С ним делают → <b>was / were + V3</b>, сам делает → Active.<br><i>The town was founded in 1903.</i></li>'+
'<li><b>enjoy · start</b> + глагол с <b>-ing</b>: <i>enjoy taking</i>.</li>'+
'<li><b>the</b> + превосходная: <i>the best way</i>; <b>the first</b> — порядковое.</li></ul></section></div>';

/* ---------- prediction по фото (фото кладутся в today/img/; если файла нет — остаётся номер, подпись-прогноз) ---------- */
const PRED=[['l1411-pelmeni.jpg','Pelmeni'],['l1411-burj.jpg','Burj Khalifa'],['l1411-m12.jpg','The M12 highway'],['l1411-monowi.jpg','Monowi']];
const PRED_HTML='<div class="l14"><p class="l14Q">What do you think the four texts are about?</p><div class="l14Pred">'+
 PRED.map((p,k)=>'<figure><img src="'+url('today/img/'+p[0])+'" alt="" onerror="this.outerHTML=\'<div class=ph>'+(k+1)+'</div>\'"><figcaption><span>'+p[1]+'</span></figcaption></figure>').join('')+
 '</div><div class="l14Row"><button type="button" class="prim" data-l14="pred">Titles</button></div></div>';

/* ---------- карточки ---------- */
let CD={i:0,flip:false};
function cdHTML(){const c=CARDS[CD.i],n=CARDS.length;
 const face=CD.flip?'<div class="l14Face back" data-l14c="f"><div class="t">'+c[1]+'</div><div class="ex">'+c[2]+'</div></div>':'<div class="l14Face" data-l14c="f"><div class="w">'+c[0]+'</div></div>';
 return face+'<div class="l14Nav"><button type="button" data-l14c="-1"'+(CD.i===0?' disabled':'')+'>←</button><span>'+(CD.i+1)+' / '+n+'</span><button type="button" data-l14c="1"'+(CD.i===n-1?' disabled':'')+'>→</button></div>'}
function cdInit(){const b=document.querySelector('#l3Panel .l14Cards');if(!b)return;CD={i:0,flip:false};b.innerHTML=cdHTML()}

/* ---------- итоги ---------- */
const DONE=['Task 3 · Interview','Task 1 · Reading aloud','Future & Passive · 14','Error Hunter · 12','EGE 19–24 · 2 texts','EGE 25–29 · 2 texts'];
const HW=['Task 3 · Interview · new set','Task 1 · Reading aloud · new text','EGE 19–24 · new text'];
const WRAP='<div class="l14 l14Wrap"><div class="col"><h3>Done today</h3>'+DONE.map(t=>'<div class="it" data-l14="tick"><span class="bx"></span><span>'+t+'</span></div>').join('')+'</div><div class="col"><h3>Homework</h3>'+HW.map(t=>'<div class="hw">• '+t+'</div>').join('')+'</div></div>';

/* ---------- события ---------- */
document.addEventListener('click',e=>{
 const c=e.target.closest('.l14Cards [data-l14c]');
 if(c){const v=c.dataset.l14c;if(v==='f')CD.flip=!CD.flip;else{CD.i=Math.max(0,Math.min(CARDS.length-1,CD.i+(+v)));CD.flip=false}
  const b=c.closest('.l14Cards');if(b)b.innerHTML=cdHTML();return}
 const t=e.target.closest('.l14 [data-l14]');if(!t)return;
 if(t.dataset.l14==='pred'){const g=t.closest('.l14').querySelector('.l14Pred');g.classList.toggle('show');t.textContent=g.classList.contains('show')?'Hide titles':'Titles'}
 else if(t.dataset.l14==='tick'){t.classList.toggle('on');t.querySelector('.bx').textContent=t.classList.contains('on')?'✓':''}
});
if(typeof window.showL3Panel==='function'){const b=window.showL3Panel;window.showL3Panel=function(i){b(i);cdInit()}}

/* ---------- шаги урока ---------- */
window.l1411Steps=function(){
 const KH=d=>window.KQ?KQ.kahoot(d,{}):'';
 const FP=(d,o)=>window.KQ?KQ.fipi(d,o):'';
 const READ=(window.w5l1Pack?window.w5l1Pack().read:null);
 return [
  ['Warm-up · Task 3 · Interview','0–6','<div class="l7" data-l7root="iv"></div>'],
  ['Task 1 · Reading aloud','6–12',READ?READ[2]:''],
  ['Future & Passive · правило','12–17',RULE],
  ['Prediction · 4 texts','17–19',PRED_HTML],
  ['Future & Passive · 14','19–27',KH(FP14)],
  ['Error Hunter · 12','27–33',KH(EH14)],
  ['EGE 19–24 · ФИПИ · 2 текста','33–43',FP(G19,{start:19,kind:'gr',title:'Grammar · EGE 19–24'})],
  ['EGE 25–29 · ФИПИ · 2 текста','43–53',FP(W25,{start:25,kind:'wf',title:'Word formation · EGE 25–29'})],
  ['Done today · Homework','53–60',WRAP],
  ['Cards · Future & Passive','','<div class="l14Cards"></div>']];
};
})();

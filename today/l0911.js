/* Урок 9 ноября (неделя 5 · урок 4): Passive + словообразование — повторение по Error Log.
   Повторяющиеся ошибки: пассив не строится (consider → are considered), found / founded, its / it's,
   словообразование: часть речи (impressive → impressions), значение суффикса (priceful → priceless, resident → residence), орфография.
   Все предложения и тексты — открытый банк ФИПИ (fipi/exam-data.js), тексты, которых ещё не было на уроках и в домашке.
   Warm-up — несданная домашка Family (интервью 1 и чтение вслух, блоки урока 7 ноября).
   Упражнения — по одному вопросу (KQ.kahoot), 19–24 и 25–29 — сплошным текстом (KQ.fipi), карточки — как Quizlet.
   Ничего не сохраняется: каждый блок открывается с начала. */
(function(){
'use strict';
const base=new URL('../',document.currentScript.src),url=p=>new URL(p,base).href;
const K=rows=>rows.map(r=>({q:r[0],hint:r[1]||'',opts:r[2],a:r[3],why:r[4]||''}));

/* ---------- Active or Passive? (ФИПИ, по одному предложению) ---------- */
const AP=K([
['A long time ago people ___ to make artificial snow.','LEARN',['learnt','were learnt','have been learnt','are learnt'],'learnt','People научились сами → Active. A long time ago → Past Simple.'],
['___ at Jamestown in 1607, the Virginia Colony was home to about 700 people by 1619.','FOUND',['Founded','Found','Finding','Founding'],'Founded','Колонию основали → founded. Found без -ed — это «нашёл».'],
['In 2011 people even ___ a dolphin brought up by whales.','FIND',['found','were found','founded','find'],'found','Кто делает? People — они нашли сами → Active: found.'],
['People ___ about it for a long time.','KNOW',['have known','have been known','are known','knew'],'have known','Люди сами знают → Active. For a long time → have known.'],
['The door handles ___ of copper can even clean themselves.','MAKE',['made','are made','making','make'],'made','Ручки, сделанные из меди → made (V3 после существительного).'],
['Ancient Egyptians believed the River Nile was a god, ___ as Hapi.','KNOW',['known','knowing','knew','was known'],'known','Бог, известный как Хапи → known as.'],
['It immediately ___ the attention of designers.','CATCH',['caught','was caught','is caught','catched'],'caught','Изобретение само привлекло внимание (attention — объект) → Active: caught.'],
['It is very small and has a digital camera ___.','INSTALL',['installed','installing','install','was installed'],'installed','Камера установлена → installed (V3).'],
['The trip led by Yuri Lysyansky ___ a great contribution to the study of the oceans.','MAKE',['made','was made','is made','has been made'],'made','Экспедиция сама внесла вклад → Active: made a contribution.'],
['Some months ago they ___ a surprising discovery which baffled many archeologists.','MAKE',['made','were made','have made','make'],'made','They сделали открытие сами; months ago → Past Simple Active.'],
['Burj Khalifa has observation decks, hotels, offices and residences ___ there.','LOCATE',['located','locating','are located','locate'],'located','Квартиры, расположенные там → located.'],
['So far scientists ___ some ways to do it.','FIND',['have found','have been found','have founded','found'],'have found','Учёные нашли сами; so far → Present Perfect Active.'],
['For many years Khokhloma craftsmen ___ the secrets of their craft from father to son.','PASS',['have passed','have been passed','are passed','passed'],'have passed','Мастера сами передают секреты → Active. For many years → have passed.'],
['Many British people think since then there ___ a prime minister better than him.','NOT BE',['has not been','was not','is not','have not been'],'has not been','Since then → Present Perfect; a prime minister — один → has not been.']
]);

/* ---------- Error Hunter: found / founded, its / it's, consider ---------- */
const OK='Верно',BAD='Ошибка';
const EH=K([
['Moscow State University was found in 1755 by the famous scholar Mikhail Lomonosov.','',[OK,BAD],BAD,'Университет основали → was founded.'],
['Catherine the Great founded it in 1764, but it was opened to the public in 1852 only.','',[OK,BAD],OK,'Екатерина основала (Active: founded), музей открыли (Passive: was opened). Всё верно.'],
['Ferapontov monastery was founded in 1398.','',[OK,BAD],OK,'Монастырь основали → was founded. Верно.'],
['The Met is an encyclopedic museum, found in 1870.','',[OK,BAD],BAD,'Музей, основанный в 1870 → founded.'],
['Now tourists can enjoy it’s amazing frescoes, created in 1502.','',[OK,BAD],BAD,'Чьи фрески? Монастыря → its. It’s = it is.'],
['It’s a beautiful Italian city with a lot of historical buildings.','',[OK,BAD],OK,'It’s = It is a beautiful city. Верно.'],
['This event is well-known for it’s colourful and elaborate masks.','',[OK,BAD],BAD,'Чьи маски? → its masks.'],
['He considered to be one of the greatest players of all time.','',[OK,BAD],BAD,'Его считают → He is considered.'],
['They are considered one of the most beautiful mountain ranges in Russia.','',[OK,BAD],OK,'Горы считают красивыми → are considered. Верно.'],
['Many tourists are considered Central Park to be a truly beautiful place.','',[OK,BAD],BAD,'Туристы сами считают → Many tourists consider (Active).'],
['One of such scenic routes can be find in Norway – it’s the Flam railway.','',[OK,BAD],BAD,'После can be — V3: can be found.'],
['Instant tea appeared in the 1930s, but its commercial production started only in the 1940s.','',[OK,BAD],OK,'Чьё производство? Чая → its. Верно.'],
['Yuzhno-Sakhalinsk was founded in 1882.','',[OK,BAD],OK,'Город основали → was founded. Верно.'],
['It’s considered a sacred site by the Aborigines.','',[OK,BAD],OK,'It is considered — его считают священным. Верно.']
]);

/* ---------- Словообразование: кто? что? какой? (ФИПИ) ---------- */
const WFQ=K([
['His grandfather was a famous ___ and the rector of Saint Petersburg State University.','BOTANY',['botanist','botany','botanical','botanic'],'botanist','A famous … — человек → -ist.'],
['Poetic ___ came naturally to him.','INSPIRE',['inspiration','inspiring','inspired','inspirer'],'inspiration','Poetic + ___ → существительное «вдохновение» → -ation.'],
['His great ___ in the Summit Series in 1972 earned him a massive fan base.','PERFORM',['performance','performer','performing','performed'],'performance','His great … — что? Выступление → -ance.'],
['His mother is a piano teacher and his father is a pianist and a ___.','COMPOSE',['composer','composition','composing','composed'],'composer','Pianist and a … — человек → -er.'],
['In 1990 young Denis won a prize at the New Names Charitable Foundation ___ in Irkutsk.','COMPETE',['competition','competitor','competitive','competing'],'competition','Приз на чём? На конкурсе → -ition.'],
['When he was 9 years old, his mother saw an ___ for group tennis lessons.','ADVERTISE',['advertisement','advertiser','advertising','advertise'],'advertisement','An … — одно существительное «объявление» → -ment.'],
['In December 2018 Shipulin announced his ___ from sports.','RETIRE',['retirement','retired','retiring','retiree'],'retirement','His … — существительное «уход» → -ment.'],
['He is considered to be the ___ of the lyrical landscape style.','CREATE',['creator','creation','creative','creativity'],'creator','The … of the style — человек, который создал → -or.'],
['Its ___ is the City of Vancouver.','OWN',['owner','ownership','own','owned'],'owner','Кто владеет? → owner.'],
['It can be very helpful for your personal ___.','DEVELOP',['development','developer','developing','developed'],'development','Your personal … — существительное «развитие» → -ment.'],
['You may become interested in a career of an ___.','ILLUSTRATE',['illustrator','illustration','illustrated','illustrative'],'illustrator','A career of an … — профессия, человек → -or.'],
['Libraries of the ancient Roman Empire had ___ manuscripts of the best scholars of that time.','COUNT',['countless','countful','counted','countable'],'countless','Бесчисленные — «без счёта» → -less (как priceless). Countful не бывает.'],
['The Paris Exposition of 1878 gave Yablochkov a great opportunity to make a spectacular ___ of his candle.','DEMONSTRATE',['demonstration','demonstrator','demonstrative','demonstrating'],'demonstration','A spectacular … — существительное «показ» → -ation.'],
['There animals show off their ___ and athleticism.','INTELLIGENT',['intelligence','intelligent','intelligently','intellect'],'intelligence','Their … and athleticism — существительное → -ence.']
]);

/* ---------- ЕГЭ 19–24 · ФИПИ (сплошным текстом) ---------- */
const G19=[
{h:'Oleg Protopopov / The Rosetta Stone',q:'Have you heard about Oleg Protopopov? He was born in 1932 and he was one of the ___ figure skaters of his time.',b:'GOOD',a:'best',why:'One of the … → превосходная степень.'},
{q:'He ___ two Olympic gold medals.',b:'WIN',a:'won',why:'Он сам выиграл → Active, Past Simple.'},
{q:'He was also the ___ sportsman to show a lyrical programme in figure skating. Russian people are certainly proud of this outstanding sportsman.',b:'ONE',a:'first',why:'The … → порядковое: first.'},
{q:'We learn about our past thanks to the findings of archaeologists. The Rosetta stone is one of them. It ___ in 1799.',b:'FIND',a:'was found',why:'Камень нашли → Passive. find – found – found.'},
{q:'Thanks to this finding, scientists could start ___ the language of ancient Egyptians.',b:'STUDY',a:'studying',why:'start + -ing.'},
{q:'This happened so because there were texts on the stone. ___ texts were both in Greek and the ancient Egyptian language.',b:'THIS',a:'These',why:'Texts — множественное → these.'},
{h:'Beginnings of Russian railways / White nights in Norway',q:'In the middle of the 19th century, the Russian Empire was so big that the necessity of creating a railway system to connect the central regions with the eastern territories became obvious. The ___ public railway in Russia connected Saint Petersburg with the Emperor’s residence in Tsarskoe Selo.',b:'ONE',a:'first',why:'The … → first.'},
{q:'It was 27 kilometers long and it ___ about two years to build it.',b:'TAKE',a:'took',why:'It took … to build — Active, прошлое.'},
{q:'At that time nobody knew that in the future Russia ___ one of the longest and best railway systems in the world.',b:'HAVE',a:'would have',why:'Будущее в прошлом (nobody knew) → would have.'},
{q:'Daylight in Norway varies greatly. Though winters are quite dark and gloomy, summers make up for it by the season of white nights. From May to July the sun ___ below the horizon.',b:'NOT SET',a:'does not set',why:'Факт, каждый год → Present Simple: does not set.'},
{q:'Thus, there is only twilight instead of complete darkness. This phenomenon ___ white nights.',b:'CALL',a:'is called',why:'Явление называют → Passive: is called.'},
{q:'It is interesting that in summers many Norwegians enjoy ___ a four-week holiday which gives them plenty of time to hunt, fish or simply walk.',b:'HAVE',a:'having',why:'enjoy + -ing.'}
];

/* ---------- ЕГЭ 25–29 · ФИПИ (сплошным текстом) ---------- */
const W25=[
{h:'GeoSure Global',q:'GeoSure Global is a great mobile app for travellers. It is ___ a revolutionary safety service aimed at ensuring that your trips involve fewer risks.',b:'CERTAIN',a:'certainly',why:'Наречие: certain + ly.'},
{q:'GeoSure Global provides safety ratings for ___ neighborhoods all over the world.',b:'COUNT',a:'countless',why:'Бесчисленные → -less.'},
{q:'These ratings offer a general view of how safe an area is and are broken down into lots of smaller categories. If you’re travelling to a foreign country as a ___, you may be at greater risk of crimes like pickpocketing.',b:'TOUR',a:'tourist',why:'As a … — человек → -ist.'},
{q:'The ___ app updates as you move around, letting you explore a city.',b:'AMAZE',a:'amazing',why:'Приложение вызывает удивление → -ing.'},
{q:'Thus, you will have constant up-to-date readings on the security and safety of the area around you and the neighbouring ___. It’s a great tool for any traveller to have.',b:'LOCATE',a:'locations',why:'The neighbouring … → существительное, много мест → locations.'},
{h:'Rovos Rail',q:'If you dislike travelling by train, you will probably change your mind after trying one of the scenic rides the world has to offer. One of such rides which are ___ to forget is the Rovos Rail in South Africa.',b:'POSSIBLE',a:'impossible',why:'Невозможно забыть → im-.'},
{q:'The train has several routes. You will pass through a number of African countries and admire the ___ of their landscapes.',b:'DIVERSE',a:'diversity',why:'The … of → существительное → -ity.'},
{q:'You will see wildlife national parks, historical battle fields and ___ cities.',b:'FASCINATE',a:'fascinating',why:'Города восхищают → -ing.'},
{q:'Onboard, the passengers can use various facilities like a dining car, luxury sleeping cabins and themed ___.',b:'ENTERTAIN',a:'entertainment',why:'Themed … → существительное → -ment.'},
{q:'All types of cabins have ensuite showers, sinks and restrooms. With its ___ service, Rovos Rail is truly one of the greatest train journeys in the world.',b:'EXCEPTION',a:'exceptional',why:'Its … service → прилагательное → -al.'}
];

/* ---------- Карточки (Quizlet) ---------- */
const CARDS=[
['found','основать · found – founded – founded','Moscow State University was founded in 1755.'],
['find','найти · find – found – found','The Rosetta stone was found in 1799.'],
['be considered','его считают …','He is considered to be one of the best goaltenders in the history of ice hockey.'],
['its / it’s','its = чей? · it’s = it is','Its height is 829,8 metres. · It’s a great tool for any traveller.'],
['-er / -or / -ist','человек','composer · creator · botanist · tourist'],
['-ment','что? (существительное)','retirement · development · advertisement · entertainment'],
['-tion / -sion','что? (существительное)','competition · demonstration · inspiration · location'],
['-ance / -ence','что? (существительное)','performance · intelligence · significance'],
['-less','без чего-то','countless · priceless · Не countful, не priceful!'],
['-ful','полный чего-то','colourful · successful · helpful'],
['residence / resident','место / человек','The Winter Palace was the official residence of the Tsars.'],
['impression / impressive','что? / какой?','He shares the impressions of his voyages. · an impressive result']
];

/* ---------- стили ---------- */
const st=document.createElement('style');st.textContent=`
.l9{font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337}
.l9Rule{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.l9Rule section{background:#fff;border:1px solid #dbe3ee;border-top:4px solid #0039A6;border-radius:12px;padding:10px 16px}
.l9Rule section:nth-child(2){border-top-color:#5b8f65}.l9Rule section:nth-child(3){border-top-color:#D52B1E}
.l9Rule h4{margin:0 0 8px;font-size:20px;color:#0039A6}
.l9Rule p,.l9Rule li{font-size:17px;line-height:1.45;margin:4px 0}
.l9Rule ol,.l9Rule ul{margin:0;padding-left:20px}
.l9Rule table{border-collapse:collapse;width:100%;font-size:17px}
.l9Rule td{border-bottom:1px solid #e5ebf3;padding:5px 6px;vertical-align:top}
.l9Rule td:first-child{font-weight:700;color:#0039A6;white-space:nowrap}
.l9Rule i{color:#334155}.l9Rule .bad{color:#D52B1E;text-decoration:line-through}.l9Rule .ok{color:#15803d;font-weight:700}
.l9Pred{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.l9Pred figure{margin:0;background:#fff;border:1px solid #dbe3ee;border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
.l9Pred img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#eef2f8}
.l9Pred .ph{aspect-ratio:4/3;display:grid;place-items:center;background:#eef2f8;color:#9fb0c7;font:800 44px/1 "Segoe UI",Arial,sans-serif}
.l9Pred figcaption{padding:8px 10px;font-size:17px;font-weight:700;color:#0039A6;min-height:42px;text-align:center}
.l9Pred figcaption span{visibility:hidden}.l9Pred.show figcaption span{visibility:visible}
.l9Q{font-size:22px;text-align:center;margin:0 0 12px;font-weight:700}
.l9Row{display:flex;gap:10px;justify-content:center;margin-top:14px}
.l9Row button,.l9Nav button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:8px 18px;font:800 16px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.l9Row button.prim{background:#0039A6;color:#fff;border-color:#0039A6}
.l9Cards{max-width:560px;margin:0 auto;font-family:"PT Serif",Georgia,"Times New Roman",serif}
.l9Face{border:1px solid #dbe3ee;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(20,35,55,.08);min-height:230px;padding:22px 26px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer}
.l9Face.back{background:#f2f7ff;border-color:#b7c9e8}
.l9Face .w{font-size:38px;font-weight:700;color:#0039A6}
.l9Face .t{font-size:24px;font-weight:700;margin-bottom:8px}
.l9Face .ex{font-size:19px;line-height:1.45;color:#334155}
.l9Nav{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:12px;font:800 18px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.l9Nav button:disabled{opacity:.4;cursor:default}
.l9Wrap{display:flex;gap:18px;flex-wrap:wrap}
.l9Wrap .col{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:12px 18px;min-width:280px;flex:1}
.l9Wrap h3{margin:0 0 8px;font-size:20px;color:#0039A6}
.l9Wrap .it{display:flex;align-items:center;gap:10px;font-size:19px;padding:5px 0;cursor:pointer}
.l9Wrap .bx{width:26px;height:26px;border:2px solid #b7c9e8;border-radius:7px;display:inline-grid;place-items:center;background:#fff;font-size:18px;color:#15803d}
.l9Wrap .it.on .bx{background:#d9f2e2;border-color:#86efac}
.l9Wrap .hw{font-size:19px;padding:5px 0}
@media(max-width:1000px){.l9Rule{grid-template-columns:1fr}.l9Pred{grid-template-columns:repeat(2,minmax(0,1fr))}}`;
document.head.appendChild(st);

/* ---------- правило: просто, без терминов ---------- */
const RULE='<div class="l9 l9Rule">'+
'<section><h4>1 · Кто делает?</h4><ol>'+
'<li>Найди, о ком предложение.</li>'+
'<li>Он делает сам → <b>Active</b>.<br><i>Immigrants from Europe founded Monowi.</i></li>'+
'<li>С ним делают → <b>Passive</b>: <b>be + V3</b>.<br><i>Monowi was founded in 1903.</i></li>'+
'<li>Один → <b>is / was</b>, много → <b>are / were</b>.</li></ol>'+
'<p><i>Vincent van Gogh. Now his pictures</i> <span class="bad">consider</span> → <span class="ok">are considered</span> masterpieces. Картины сами никого не считают.</p></section>'+
'<section><h4>2 · Формула</h4><table>'+
'<tr><td>сейчас, всегда</td><td>is / are + V3<br><i>His pictures are considered masterpieces.</i></td></tr>'+
'<tr><td>в прошлом</td><td>was / were + V3<br><i>Monowi was founded in 1903 by immigrants from Europe.</i></td></tr>'+
'<tr><td>до сих пор</td><td>has / have been + V3</td></tr>'+
'<tr><td>can, must …</td><td>can / must be + V3</td></tr></table></section>'+
'<section><h4>3 · Обрати внимание</h4><ul>'+
'<li><b>find – found – found</b> = найти<br><b>found – founded – founded</b> = основать<br>Город, университет, музей + год → <span class="ok">was founded</span>, не <span class="bad">was found</span>.</li>'+
'<li><b>its</b> = чей? <i>Oslo … and its official language is Norwegian.</i><br><b>it’s</b> = it is. Проверка: можно сказать it is?</li>'+
'<li>Перед пропуском <i>the / a / his … of</i> → нужно существительное: <span class="ok">impressions</span>, не <span class="bad">impressive</span>.</li>'+
'<li>Человек <b>-er/-or/-ist</b>, место <b>residence</b>, «без» <b>-less</b>: <span class="ok">priceless</span>.</li></ul></section></div>';

/* ---------- prediction по фото (фото кладутся в today/img/; если файла нет — фото скрыто, остаётся подпись-прогноз) ---------- */
const PRED=[['l0911-skaters.jpg','Oleg Protopopov'],['l0911-rosetta.jpg','The Rosetta Stone'],['l0911-railway.jpg','Beginnings of Russian railways'],['l0911-norway.jpg','White nights in Norway']];
const PRED_HTML='<div class="l9"><p class="l9Q">What do you think the four texts are about?</p><div class="l9Pred">'+
 PRED.map((p,k)=>'<figure><img src="'+url('today/img/'+p[0])+'" alt="" onerror="this.outerHTML=\'<div class=ph>'+(k+1)+'</div>\'"><figcaption><span>'+p[1]+'</span></figcaption></figure>').join('')+
 '</div><div class="l9Row"><button type="button" class="prim" data-l9="pred">Titles</button></div></div>';

/* ---------- карточки ---------- */
let CD={i:0,flip:false};
function cdHTML(){const c=CARDS[CD.i],n=CARDS.length;
 const face=CD.flip?'<div class="l9Face back" data-l9c="f"><div class="t">'+c[1]+'</div><div class="ex">'+c[2]+'</div></div>':'<div class="l9Face" data-l9c="f"><div class="w">'+c[0]+'</div></div>';
 return face+'<div class="l9Nav"><button type="button" data-l9c="-1"'+(CD.i===0?' disabled':'')+'>←</button><span>'+(CD.i+1)+' / '+n+'</span><button type="button" data-l9c="1"'+(CD.i===n-1?' disabled':'')+'>→</button></div>'}
function cdInit(){const b=document.querySelector('#l3Panel .l9Cards');if(!b)return;CD={i:0,flip:false};b.innerHTML=cdHTML()}

/* ---------- итоги ---------- */
const DONE=['Task 3 · Interview 1 · Family','Task 1 · Reading aloud · Family','Active or Passive?','Error Hunter','EGE 19–24 · 2 texts','Word formation · Who or what?','EGE 25–29 · 2 texts'];
const HW=['Task 3 · Interview 2 · Family','Task 1 · Reading aloud · text 2','Reading · Task 11 · 2 texts'];
const WRAP='<div class="l9 l9Wrap"><div class="col"><h3>Done today</h3>'+DONE.map(t=>'<div class="it" data-l9="tick"><span class="bx"></span><span>'+t+'</span></div>').join('')+'</div><div class="col"><h3>Homework</h3>'+HW.map(t=>'<div class="hw">'+t+'</div>').join('')+'</div></div>';

/* ---------- события ---------- */
document.addEventListener('click',e=>{
 const c=e.target.closest('.l9Cards [data-l9c]');
 if(c){const v=c.dataset.l9c;if(v==='f')CD.flip=!CD.flip;else{CD.i=Math.max(0,Math.min(CARDS.length-1,CD.i+(+v)));CD.flip=false}
  const b=c.closest('.l9Cards');if(b)b.innerHTML=cdHTML();return}
 const t=e.target.closest('.l9 [data-l9]');if(!t)return;
 if(t.dataset.l9==='pred'){const g=t.closest('.l9').querySelector('.l9Pred');g.classList.toggle('show');t.textContent=g.classList.contains('show')?'Hide titles':'Titles'}
 else if(t.dataset.l9==='tick'){t.classList.toggle('on');t.querySelector('.bx').textContent=t.classList.contains('on')?'✓':''}
});
if(typeof window.showL3Panel==='function'){const b=window.showL3Panel;window.showL3Panel=function(i){b(i);cdInit()}}

/* ---------- шаги урока ---------- */
window.l0911Steps=function(){
 const KH=d=>window.KQ?KQ.kahoot(d,{}):'';
 const FP=(d,o)=>window.KQ?KQ.fipi(d,o):'';
 return [
  ['Warm-up · Family · Task 3 · Interview','0–6','<div class="l7" data-l7root="iv"></div>'],
  ['Family · Task 1 · Reading aloud','6–12',window.raHTML?window.raHTML(0):''],
  ['Passive · кто делает? · правило','12–17',RULE],
  ['Active or Passive? · 14','17–25',KH(AP)],
  ['Error Hunter · found / founded · its / it’s · 14','25–31',KH(EH)],
  ['EGE 19–24 · ФИПИ · 2 текста','31–41',FP(G19,{start:19,kind:'gr',title:'Grammar · EGE 19–24'})],
  ['Word formation · Who or what? · 14','41–49',KH(WFQ)],
  ['EGE 25–29 · ФИПИ · 2 текста','49–57',FP(W25,{start:25,kind:'wf',title:'Word formation · EGE 25–29'})],
  ['Done today · Homework','57–60',WRAP],
  ['Cards · Passive & Word formation','','<div class="l9Cards"></div>']];
};
})();

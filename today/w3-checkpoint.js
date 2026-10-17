/* Неделя 3 · урок 3: чтение (задание 10, открытый банк ФИПИ) и интервью (пособие Expert) для урока учителя */
(function(){
'use strict';
const root=new URL('../',document.currentScript.src),url=p=>new URL(p,root).href;
/* Задание 10 · открытый банк ФИПИ · Travelling · тексты и заголовки без изменений */
const R10={"h": ["Always in a hurry", "The city of skyscrapers", "Winning and losing", "Unknown side of the city", "Saving the variety", "Getting around the city", "For the holiday and more", "Nickname for a building"], "t": ["New York is really the melting pot of the world. Over 30 percent of its residents have come from abroad. It is believed that the city has the greatest linguistic diversity on the planet. There are over 800 different languages divided among its people. As some of these languages are nearly extinct, the City University of New York has begun a project called the Endangered Language Alliance. Its aim is to preserve rare languages like Bukhari, Vhlaski, and Ormuri.", "New Yorkers love to think they know everything about their city: where to find the best fruit, how to avoid paying full price at museums, what route to take to avoid traffic. But New York City can reveal new treasures even to its veterans. Beyond the city where New-Yorkers work, eat, play and commute every day lies a hidden New York: mysterious, forgotten, abandoned or just overlooked. There are places about which you’re not likely to read in any guidebook.", "The Chrysler Building was in a race with the Bank of Manhattan for getting the title of the tallest skyscraper in the world. The Bank was likely to triumph, with its height of 282 meters. But the spire of the Chrysler Building was constructed in secret inside the tower. Just one week after the Bank of Manhattan was finished, it was put in place, making it 318 meters tall and beating the Bank. It wouldn’t keep this title for long: one year later the Empire State Building was erected.", "The Flatiron Building was constructed between 1901 and 1903 at the intersection of Broadway and Fifth Avenue. It was designed by Chicago’s Daniel Burnham as a steel-frame skyscraper covered with white terra-cotta. Built as the headquarters of the Fuller Construction company, the skyscraper was meant to be named Fuller Building. But locals soon started calling it “Flatiron” because of its unusual shape. The name stuck and soon became official.", "How does Rockefeller Center manage to find the perfect fur-tree each Christmas season? They do aerial searches by helicopter, of course, and bring it to the city during the night when there isn’t much traffic on the streets. After the tree is taken down for the year, it continues to be useful. For example, in 2005 Habitat for Humanity used the wood to make doorframes for houses for the poor and in 2012 the paper was used to publish a book.", "In New York life never stands still. People have to call cabs, ride subway cars, do business of all kinds, eat pizzas and sandwiches for lunch. When you multiply that by more than eight million people in less than 500 square miles, you get the idea: everyone goes everywhere as fast as it is humanly possible. Whatever you do, don't stop in the middle of the sidewalk or you’ll make everyone around you incredibly angry.", "New York is extremely easy to navigate. Manhattan is divided into numbered streets from north to south and avenues from east to west. It’s almost impossible to get lost there. Buses are useful to travel around Manhattan, and the subway is the best means of transport to the other parts of the city. At some stage you’ll definitely use a yellow taxi. Try to get one on an avenue that’s going in the same direction you are – you’ll save time and money. And don’t forget to leave a tip for the driver."], "a": [5, 4, 3, 8, 7, 1, 6]};
/* Интервью: вопросы и образцы ответов — пособие «ЕГЭ Expert. Устная часть» (Крылова), тема Travelling */
const IV=[{"name": "Вариант 1 · Travelling", "audio": "expert/audio/01.mp3", "src": "Expert, Speaking Part 3, Task 1", "q": [["Why is it good to travel to different places? Do you travel much? Why or why not?", "I believe travelling broadens people’s horizons. Personally, I don’t travel much because my parents don’t give me a lot of money to spend on travelling."], ["Where have you travelled to home or abroad? What did you do there?", "In my country I’ve travelled to Crimea. I had a nice camping trip there. I’ve also been abroad. I’ve visited France, Italy and Germany. I did a lot of sightseeing there."], ["What is your dream place to visit in 10 years’ time? Why would you like to go there?", "In 10 years’ time, I would like to visit Australia. It is so far away and the flight is so long and expensive. I’ll save enough money and go to the country to see kangaroos in nature."], ["Has anyone you know travelled to a strange or interesting place? What were they?", "A friend of mine went to America last summer. I think it’s a very interesting place to visit because it’s on a different continent."], ["Why is travelling easier today than it used to be? What are some of the disadvantages of travelling nowadays?", "I guess it’s easier because airfare has got quite affordable. There are also other means of transport that people can use and they are not very expensive. However, nowadays it has become much more difficult to get visas, which is a major disadvantage."]]}, {"name": "Вариант 2 · Travelling", "audio": "expert/audio/02.mp3", "src": "Expert, Speaking Part 3, Task 2", "q": [["When was the last time you travelled? Where did you go?", "The last time I travelled was last summer. I went to Sochi."], ["What is your favourite thing about travelling?", "My favourite thing about travelling is that I can explore new places and get to know something new. Then, I like telling my family what I’ve learnt."], ["What are the most important things to pack before you go travelling?", "I guess the most important things to pack are your toothbrush, a towel, a recharger for your phone and your swimsuits. All the rest is not that important."], ["What kinds of activities do you like to do when you’re travelling?", "I like going sightseeing and swimming in the sea. It’s nice when I do these activities with my friends."], ["What kind of accommodation do you usually stay in when you take trips?", "I usually stay in hotels. Once I stayed in BNB, which was also quite comfortable."]]}];
const css=document.createElement('style');css.textContent=`
.cpRead{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(250px,1fr);gap:12px}
.cpChips{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.cpChips button{min-width:46px;border:1px solid #b7c9e8;background:#fff;color:#0039a6;border-radius:8px;padding:5px 8px;font-weight:700;cursor:pointer}
.cpChips button.on{background:#0039a6;color:#fff}
.cpChips button.ok{background:#e7f6ec;border-color:#22a35a;color:#166534}
.cpChips button.bad{background:#fdecec;border-color:#d52b1e;color:#b91c1c}
.cpText{border:1px solid #dbe3ee;border-left:4px solid #0039a6;border-radius:12px;padding:14px 16px;font-size:17px;line-height:1.6;background:#fff;min-height:190px}
.cpHeads{display:grid;gap:5px}
.cpHeads button{text-align:left;border:1px solid #d5deea;background:#fff;border-radius:8px;padding:6px 10px;font-size:15px;cursor:pointer;color:#142337}
.cpHeads button.sel{background:#e6f0ff;border-color:#0039a6;font-weight:700}
.cpHeads button.used{color:#94a3b8}
.cpRow{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px}
.cpRow button{border:1px solid #0039a6;background:#fff;color:#0039a6;border-radius:8px;padding:6px 14px;font-weight:700;cursor:pointer}
.cpRow button.prim{background:#0039a6;color:#fff}
.cpScore{font-weight:700;color:#0039a6}
.cpKey{font-size:14px;color:#475569}
.cpIv{display:grid;gap:10px}
.cpIvTop{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.cpIvTop select{border:1px solid #b7c9e8;border-radius:8px;padding:5px 8px}
.cpNums{display:flex;gap:5px}
.cpNums button{width:34px;height:34px;border-radius:50%;border:1px solid #b7c9e8;background:#fff;color:#0039a6;font-weight:700;cursor:pointer}
.cpNums button.on{background:#0039a6;color:#fff}
.cpIvGrid{display:grid;grid-template-columns:190px minmax(0,1fr);gap:12px;align-items:start}
.cpRing{width:150px;height:150px;border-radius:50%;display:grid;place-items:center;margin:0 auto;background:conic-gradient(#0039a6 calc(var(--p)*1%),#e5ebf3 0)}
.cpRing div{width:120px;height:120px;border-radius:50%;background:#fff;display:grid;place-items:center;text-align:center}
.cpRing b{font-size:38px;line-height:1;color:#142337}.cpRing span{font-size:13px;color:#64748b}
.cpRing.end{background:#d52b1e}
.cpCard{border:1px solid #dbe3ee;border-left:4px solid #0039a6;border-radius:12px;background:#fff;padding:16px;min-height:200px}
.cpCard.back{background:#f2f7ff;border-left-color:#d52b1e}
.cpCard .cpEy{font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#64748b}
.cpCard .cpQ{font-size:20px;font-weight:700;color:#142337;margin:6px 0 10px}
.cpCard .cpTip{font-size:15px;margin-top:6px;color:#334155}
.cpRec{font-size:14px}.cpRec audio{width:100%;margin-top:6px}
@media(max-width:760px){.cpRead,.cpIvGrid{grid-template-columns:1fr}}
`;document.head.append(css);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* ---------- чтение ---------- */
let rd={i:0,pick:{},checked:false};
function rdBox(){return document.querySelector('.cpRead')}
function rdHTML(){
 const used=Object.values(rd.pick);
 return '<div class="cpReadL"><div class="cpChips">'+R10.t.map((t,k)=>{const p=rd.pick[k];let c=k===rd.i?'on':'';if(rd.checked&&p!==undefined)c+=(p===R10.a[k]?' ok':' bad');return '<button type="button" class="'+c+'" data-rdi="'+k+'">'+String.fromCharCode(65+k)+(p!==undefined?' · '+p:'')+'</button>'}).join('')+'</div>'+
 '<div class="cpText"><b>'+String.fromCharCode(65+rd.i)+'.</b> '+esc(R10.t[rd.i])+'</div></div>'+
 '<div class="cpReadR"><div class="cpHeads">'+R10.h.map((h,j)=>'<button type="button" data-rdh="'+(j+1)+'" class="'+(rd.pick[rd.i]===j+1?'sel':used.includes(j+1)?'used':'')+'">'+(j+1)+'. '+esc(h)+'</button>').join('')+'</div>'+
 '<div class="cpRow"><button type="button" class="prim" data-rdcheck>Проверить</button><button type="button" data-rdreset>Сначала</button><span class="cpScore">'+(rd.checked?R10.t.filter((_,k)=>rd.pick[k]===R10.a[k]).length+' / 7':'')+'</span></div>'+
 '<details class="cpKey"><summary>Ответы (для учителя)</summary>'+R10.a.map((a,k)=>String.fromCharCode(65+k)+' — '+a).join(' · ')+'</details></div>';
}
function rdRender(){const b=rdBox();if(b)b.innerHTML=rdHTML()}
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-rdi],[data-rdh],[data-rdcheck],[data-rdreset]');if(!t||!t.closest('.cpRead'))return;
 if(t.dataset.rdi!==undefined)rd.i=+t.dataset.rdi;
 else if(t.dataset.rdh!==undefined){const h=+t.dataset.rdh;Object.keys(rd.pick).forEach(k=>{if(rd.pick[k]===h)delete rd.pick[k]});rd.pick[rd.i]=h;rd.checked=false;if(rd.i<6)rd.i++}
 else if(t.dataset.rdcheck!==undefined)rd.checked=true;
 else {rd={i:0,pick:{},checked:false}}
 rdRender();
});
window.w3cpReadingHTML=function(){rd={i:0,pick:{},checked:false};return '<p class="tiny" style="margin:0 0 8px">Задание 10 · Открытый банк ФИПИ. Установите соответствие между текстами A–G и заголовками 1–8. Один заголовок лишний. Выберите текст, затем заголовок.</p><div class="cpRead">'+rdHTML()+'</div>'};
/* ---------- интервью: вопрос только звучит, текст на обороте ---------- */
let iv={v:0,q:0,flip:false,left:40,timer:null};
function ivStop(){clearInterval(iv.timer);iv.timer=null;if(window.speechSynthesis)speechSynthesis.cancel()}
function ivHTML(){
 const V=IV[iv.v],Q=V.q[iv.q];
 return '<div class="cpIvTop"><select data-ivv>'+IV.map((x,k)=>'<option value="'+k+'"'+(k===iv.v?' selected':'')+'>'+esc(x.name)+'</option>').join('')+'</select><div class="cpNums">'+V.q.map((_,k)=>'<button type="button" data-ivn="'+k+'" class="'+(k===iv.q?'on':'')+'">'+(k+1)+'</button>').join('')+'</div><span class="cpScore">Вопрос '+(iv.q+1)+' из '+V.q.length+'</span></div>'+
 '<div class="cpIvGrid"><div><div class="cpRing'+(iv.left<=0?' end':'')+'" style="--p:'+(iv.left/40*100)+'"><div><b>'+iv.left+'</b><span>seconds</span></div></div><div class="cpRow" style="justify-content:center"><button type="button" class="prim" data-ivt>Start 40 s</button><button type="button" data-ivr>Reset</button></div></div>'+
 (iv.flip?'<div class="cpCard back"><div class="cpEy">Question '+(iv.q+1)+'</div><div class="cpQ">'+esc(Q[0])+'</div><div class="cpTip"><b>Образец из пособия:</b> '+esc(Q[1])+'</div></div>':
 '<div class="cpCard"><div class="cpEy">Question audio</div><div class="cpQ">Listen to the question</div><div class="cpTip">Вопрос не показывается. Ответ — 2–3 полных предложения, 40 секунд.</div><div class="cpRow"><button type="button" class="prim" data-ivp>Play</button><button type="button" data-ivp>Replay</button><button type="button" data-ivs>Stop</button></div></div>')+'</div>'+
 '<div class="cpRow"><button type="button" data-ivg="-1"'+(iv.q===0?' disabled':'')+'>← Назад</button><button type="button" class="prim" data-ivf>'+(iv.flip?'Скрыть вопрос':'Перевернуть карточку')+'</button><button type="button" data-ivg="1"'+(iv.q===V.q.length-1?' disabled':'')+'>Вперёд →</button></div>'+
 '<details class="cpRec"><summary>Запись из пособия Expert: все 5 вопросов подряд с паузами ('+esc(V.src)+')</summary><audio controls preload="none" src="'+url(V.audio)+'"></audio></details>';
}
function ivRender(){const b=document.querySelector('.cpIv');if(b)b.innerHTML=ivHTML()}
function ivTick(){const b=document.querySelector('.cpIv .cpRing');if(!b){ivStop();return}b.style.setProperty('--p',iv.left/40*100);b.querySelector('b').textContent=iv.left;b.classList.toggle('end',iv.left<=0)}
function ivSay(){if(!window.speechSynthesis)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(IV[iv.v].q[iv.q][0]);u.lang='en-GB';u.rate=.9;const vs=speechSynthesis.getVoices();u.voice=vs.find(v=>/^en-GB/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null;speechSynthesis.speak(u)}
document.addEventListener('click',e=>{
 const t=e.target.closest('.cpIv button');if(!t)return;const d=t.dataset;
 if(d.ivp!==undefined){ivSay();return}
 if(d.ivs!==undefined){if(window.speechSynthesis)speechSynthesis.cancel();return}
 if(d.ivt!==undefined){clearInterval(iv.timer);iv.left=40;ivTick();iv.timer=setInterval(()=>{iv.left=Math.max(0,iv.left-1);ivTick();if(iv.left<=0){clearInterval(iv.timer);iv.timer=null}},1000);return}
 if(d.ivr!==undefined){clearInterval(iv.timer);iv.timer=null;iv.left=40;ivTick();return}
 ivStop();iv.left=40;
 if(d.ivf!==undefined)iv.flip=!iv.flip;
 else if(d.ivg!==undefined){iv.q=Math.max(0,Math.min(IV[iv.v].q.length-1,iv.q+(+d.ivg)));iv.flip=false}
 else if(d.ivn!==undefined){iv.q=+d.ivn;iv.flip=false}
 ivRender();
});
document.addEventListener('change',e=>{if(e.target.matches('.cpIv [data-ivv]')){ivStop();iv={v:+e.target.value,q:0,flip:false,left:40,timer:null};ivRender()}});
window.w3cpInterviewHTML=function(){ivStop();iv={v:0,q:0,flip:false,left:40,timer:null};return '<div class="cpIv">'+ivHTML()+'</div>'};
})();

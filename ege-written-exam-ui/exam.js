/* Presentation components adapted from EGE Teachers Hub. Storage and marking belong to callers. */
(function(global){
'use strict';
const el=(tag,cls,text)=>{
 const node=document.createElement(tag);
 if(cls)node.className=cls;
 if(text!=null)node.textContent=text;
 return node;
};
function button(text,cls,activate){
 const node=el('button',cls,text);
 node.type='button';
 node.addEventListener('click',activate);
 return node;
}
function htmlNode(markup){
 const template=el('template');
 template.innerHTML=markup;
 return template.content;
}
function plainList(items,numbered=false){
 const list=el('ol','hl');
 items.forEach((entry,i)=>{
  const li=el('li');
  if(numbered)li.append(el('b','',String(i+1)+'. '));
  li.append(entry);
  list.append(li);
 });
 return list;
}
function frame(type){
 const root=el('div','ege-written');
 root.dataset.egeWritten=type;
 const main=el('div','exam-main');
 root.append(main);
 return {root,main};
}
function panel(cls,...content){
 const p=el('div','panel '+cls);
 p.append(...content);
 return p;
}
function stage(...panels){
 const area=el('div','stage');
 area.append(...panels);
 return area;
}
function match(answers,columns=1){
 const list=el('div','match');
 if(columns===2)list.style.gridTemplateColumns='auto 1fr auto 1fr';
 answers.forEach(({label,control})=>list.append(el('b','',label),control));
 return list;
}
function readingPassage(title,paragraphs){
 return panel('grow read',...(title?[el('h3','',title)]:[]),...paragraphs.map(p=>typeof p==='string'?el('p','',p):p));
}
function choiceButtons(row,{className,makeLabel,onPaint,sync}){
 const options=row.options.map((item,j)=>{
  const b=button(makeLabel(item,j),className,()=>{
   if(!row.control.disabled)set(j);
  });
  b.disabled=row.control.disabled;
  return b;
 });
 const paint=()=>options.forEach((b,j)=>{
  const selected=String(row.control.value)===String(row.values[j]);
  b.disabled=row.control.disabled;
  b.classList.toggle(onPaint,selected);
  b.setAttribute('aria-pressed',String(selected));
  b.classList.toggle('ok',!!row.control.classList.contains('fp-right')&&selected);
  b.classList.toggle('bad',!!row.control.classList.contains('fp-wrong')&&selected);
 });
 const set=j=>{
  row.control.value=row.values[j];
  row.control.dispatchEvent(new Event('input',{bubbles:true}));
  row.control.dispatchEvent(new Event('change',{bubbles:true}));
  paint();
  if(sync)sync();
 };
 row.control.hidden=true;
 row.control.addEventListener('change',paint);
 if(row.control.classList.contains('fp-answer-state')){
  new MutationObserver(paint).observe(row.control,{attributes:true,attributeFilter:['class']});
 }
 paint();
 return {options,set,paint};
}
function listening1(model){
 const left=panel('grow',plainList(model.statements));
 left.firstChild.style.listStyle='decimal';
 left.firstChild.style.paddingLeft='26px';
 left.firstChild.style.fontSize='20px';
 return stage(left,panel('side',match(model.answers)));
}
function listening2(model){
 const content=panel('grow');
 model.answers.forEach((row,i)=>{
  const line=el('div','score');
  line.style.fontSize='19px';
  const prompt=el('span');
  prompt.append(el('b','',String.fromCharCode(65+i)),' '+row.label);
  line.append(prompt);
  const {options}=choiceButtons(row,{className:'',makeLabel:(s,j)=>(j+1)+' · '+s,onPaint:'on'});
  options.forEach(b=>{b.style.minWidth='122px';line.append(b);});
  line.append(row.control);
  content.append(line);
 });
 return stage(content);
}
function listening39(model){
 const sheet=panel('kimsheet');
 const grid=el('div','kimgrid');
 model.answers.forEach((row,i)=>{
  const item=el('section','kimitem'),q=el('div','kimq'),body=el('div','kimbody');
  q.append(el('span','kimno',String(i+3)),el('span','',row.label));
  const opts=el('div','kimopts'+(row.options.every(t=>t.length<=24)?' row':''));
  const answer=el('div','kimans'),box=el('input','kimbox');
  box.maxLength=1;box.inputMode='numeric';box.disabled=row.control.disabled;
  box.setAttribute('aria-label','Ответ '+(i+3));
  const sync=()=>{const index=row.values.findIndex(v=>String(v)===String(row.control.value));box.value=index<0?'':String(index+1);};
  const {options,set,paint}=choiceButtons(row,{className:'kimopt',makeLabel:(s,j)=>(j+1)+') '+s,onPaint:'on',sync});
  box.oninput=()=>{
   const value=Number(box.value);
   if(value>=1&&value<=row.options.length){set(value-1);return;}
   row.control.value='';
   row.control.dispatchEvent(new Event('change',{bubbles:true}));
   paint();sync();
  };
  sync();
  opts.append(...options,row.control);
  answer.append(el('span','','Ответ:'),box);
  body.append(opts,answer);item.append(q,body);if(row.feedback)item.append(row.feedback);grid.append(item);
 });
 sheet.append(grid);
 const area=stage(sheet);area.classList.add('listening39');
 return area;
}
function reading10(model){
 return stage(readingPassage(model.title,model.paragraphs),panel('side',plainList(model.headings,true),match(model.answers,2)));
}
function reading11(model){
 if(model.partControls){const parts=el('div','parts');parts.append(...model.partControls);return stage(readingPassage(model.title,model.paragraphs),panel('side col',parts));}
 return stage(readingPassage(model.title,model.paragraphs),panel('side',plainList(model.fragments,true),match(model.answers,2)));
}
function reading1218(model){
 const left=readingPassage(model.title,model.paragraphs);
 const right=panel('side qcard q12card');
 const area=stage(left,right);area.classList.add('read12');
 const nav=el('div','navrow'),chips=el('div','chips');
 let active=0;
 const markers=model.answers.map((row,i)=>button(String(12+i),'chip',()=>show(i)));
 const prev=button('← Назад','btn sm',()=>show(active-1));
 const next=button('Вперёд →','btn sm',()=>show(active+1));
 chips.append(...markers);nav.append(chips,prev,next);
 const updateMarkers=()=>markers.forEach((mark,i)=>{
  mark.classList.toggle('on',i===active);
  mark.classList.toggle('fill',model.answers[i].control.value!=='');
 });
 function show(i){
  active=i;
  const row=model.answers[active];
  const head=el('div','qhead');
  head.append(el('span','qnum',String(12+active)));
  const choices=el('div','opts c1');
  const {options}=choiceButtons(row,{className:'opt',makeLabel:(s,j)=>(j+1)+') '+s,onPaint:'sel',sync:updateMarkers});
  choices.append(...options);
  right.replaceChildren(head,el('div','qtext long',row.label),choices);
  for(const entry of model.answers)right.append(entry.control);
  updateMarkers();
  prev.disabled=i===0;next.disabled=i===markers.length-1;
 }
 show(0);return [area,nav];
}
function typedGaps(model){
 const sheet=panel('grow flow',...(model.title?[el('h3','',model.title)]:[]));
 const passage=el('div','ege-continuous-text');sheet.append(passage);
 let paragraph;
 model.rows.forEach(({number,before,after,base,heading,control},i)=>{
  if(heading)passage.append(el('h3','',heading));
  if(!paragraph||heading||i%model.paragraphSize===0){
   paragraph=el('p','ege-passage-paragraph');passage.append(paragraph);
  }else paragraph.append(' ');
  paragraph.append(before);
  if(control){
   const gap=el('span','fgap');
   if(number!=='')gap.append(el('span','fnum',String(number)));
   if(control.tagName==='INPUT'){control.classList.add('ans','fin');control.style.width=Math.max(8,Math.min(14,base.length+4))+'ch';}
   gap.append(control);
   if(base)gap.append(el('span','base sm',base));
   paragraph.append(gap);
  }
  paragraph.append(after);
 });
 return stage(sheet);
}
function vocabulary(model){
 const sheet=panel('grow flow',...(model.title?[el('h3','',model.title)]:[]));
 const cols=el('div','cols');sheet.append(cols);
 model.paragraphs.forEach(parts=>{
  const paragraph=el('p','vp');
  for(const part of parts){
   if(typeof part==='string')paragraph.append(part);
   else{if(part.tagName==='SELECT')part.classList.add('vsel');paragraph.append(part);}
  }
  cols.append(paragraph);
 });
 return stage(sheet);
}
function numberPrompt(number,content){
 const task=el('div','kimtask');
 task.append(el('span','kimno',number),content);
 return task;
}
function editorPanel(model){
 const editor=el('div','grow col wr');editor.append(model.editor,...(model.footer||[]));return editor;
}
function writing(model,number){
 const prompt=panel('side kim kimsheet kimw',numberPrompt(number,model.intro),...model.prompt);
 prompt.style.flexBasis='50%';prompt.style.width='50%';
 const editor=panel('grow col wr',model.editor,...(model.footer||[]));
 return stage(prompt,editor);
}
const templates=Object.freeze({
 '1':listening1,
 '2':listening2,
 '3–9':listening39,
 '10':reading10,
 '11':reading11,
 '12–18':reading1218,
 '19–24':model=>typedGaps({...model,paragraphSize:model.paragraphSize||3}),
 '25–29':model=>typedGaps({...model,paragraphSize:model.paragraphSize||2}),
 '30–36':vocabulary,
 '37':model=>writing(model,'37'),
 '38.1':model=>writing(model,'38.1'),
 '38.2':model=>stage(panel('side kim p38 wide',model.intro,...model.prompt),editorPanel(model))
});
function render(type,model){
 const template=templates[type];
 if(!template)throw new RangeError('Unknown written task type: '+type);
 const {root,main}=frame(type);
 if(model.instruction){
  const inst=el('div','inst');
  inst.append(el('b','',model.instruction));main.append(inst);
 }
 if(model.audio){
  const row=el('div','navrow');row.append(model.audio);main.append(row);
 }
 main.append(...[].concat(template(model)));
 return root;
}
global.EgeWritten=Object.freeze({templates,render,el,htmlNode});
})(window);

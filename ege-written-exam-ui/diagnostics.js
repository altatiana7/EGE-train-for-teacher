/* Connect the two teacher diagnostics to the shared presentation layer. */
(function(global){
'use strict';
const {el,render}=global.EgeWritten;
function options(control){
 const list=[...control.options].filter(option=>option.value!=='');
 return {control,options:list.map(option=>option.textContent),values:list.map(option=>option.value)};
}
function convertListeningReading(host,type){
 const panel=host.firstElementChild;
 if(!panel||type==='end')return;
 const map={listen1:'1',listen2:'2',listen3:'3–9',read10:'10',read11:'11',read12:'12–18'};
 const task=map[type];
 if(!task)return;
 const model={instruction:panel.querySelector('.listen-instruction,.reading-instruction')?.textContent,
  audio:panel.querySelector('.listen-audio'),
  answers:[...panel.querySelectorAll('select[data-id]')].map(control=>{
   const label=control.closest('.q').querySelector('b').textContent.replace(/^\d+\.\s*/,'');
   return {label,...options(control)};
  })
 };
 if(type==='listen1')model.statements=[...panel.querySelectorAll('.listen1-statements p')].map(p=>p.textContent.replace(/^\d+\.\s*/,''));
 if(type.startsWith('read')){
  const left=panel.querySelector('.reading-pane--passage'),right=panel.querySelector('.reading-pane--questions');
  model.paragraphs=[...left.querySelectorAll('.passage')].flatMap(p=>p.classList.contains('text')?[...p.children]:[p]);
  for(const passage of model.paragraphs)passage.classList.remove('passage');
  const labels=[...right.querySelectorAll('.reading-labels p')].map(p=>p.textContent.replace(/^\d+\.\s*/,''));
  model.headings=labels;model.fragments=labels;
  if(type==='read12')model.title=left.querySelector('h3')?.textContent;
 }
 host.replaceChild(render(task,model),panel);
}
function makeSelect(radios){
 const control=el('select','');
 const name=radios[0].dataset.n;
 control.dataset.n=name;
 control.setAttribute('aria-label','Answer '+name);
 control.append(new Option(name+' …',''));
 for(const input of radios){
  const label=input.nextElementSibling.textContent;
  const option=new Option(label,input.value,false,input.checked);
  control.append(option);
 }
 return control;
}
function convertWritingDiagnostic(host,index,other){
 if(index>4)return;
 const panel=host.firstElementChild,left=panel.querySelector('.prompt'),right=panel.querySelector('.answer');
 let task,model;
 if(index<2){
  task=index===0?'19–24':'25–29';
  const numbered=[...left.querySelectorAll('.blank')];
  const raw=left.querySelector('.passage').innerHTML;
  const parts=raw.split(/<span class="blank">[^<]*<\/span>/);
  const decode=html=>global.EgeWritten.htmlNode(html).textContent;
  model={instruction:left.firstElementChild.textContent,title:left.querySelector('h2').textContent,
   rows:numbered.map((blank,i)=>{
    const [,number,base]=blank.textContent.match(/\((\d+)\).*?\(([^)]+)\)/);
    const next=parts[i+1],end=next.indexOf('. '),split=end<0?next.length:end+1;
    const before=i===0?parts[0]:(parts[i].includes('. ')?parts[i].slice(parts[i].indexOf('. ')+2):'');
    const after=i===numbered.length-1?next:next.slice(0,split);
    return {number,base,before:decode(before),after:decode(after),control:right.querySelector('[data-n="'+number+'"]')};
   })};
 }else if(index===2){
  task='30–36';
  const chunks=left.querySelector('.passage').textContent.split(/\((\d+)\) ___/);
  const paragraphs=[chunks.map((chunk,i)=>i%2===0?chunk:makeSelect([...right.querySelectorAll('[data-n="'+chunk+'"]')]))];
  model={instruction:left.firstElementChild.textContent,title:left.querySelector('h2').textContent,paragraphs};
 }else{
  task=index===3?'37':'38.1';
  const nodes=[...left.children];
  const homework=index===4?nodes.shift():null;
  const intro=nodes.shift();
  const mail=left.querySelector('.passage'),tab=left.querySelector('.survey');
  if(mail)mail.className='kimmail';
  if(tab)tab.className='kimtab';
  left.querySelector('.plan')?.classList.add('kimplan');
  if(tab){
   const plan=left.querySelector('.plan'),row=el('div','kimrow'),copy=el('div','');
   const survey=tab.previousElementSibling,question=el('th','');question.colSpan=2;question.append(...survey.childNodes);
   tab.insertRow(0).append(question);nodes.splice(nodes.indexOf(survey),1);
   const caption=plan.previousElementSibling;
   const at=nodes.indexOf(tab);
   nodes.splice(at,3,row);
   copy.append(caption,plan);row.append(tab,copy);
  }
  if(homework)homework.className='note';
  model={instruction:index===3?'Задание 37. Электронное письмо личного характера.':'Задание 38.1. Письменное высказывание с элементами рассуждения на основе таблицы.',intro,prompt:nodes,editor:right.querySelector('textarea'),footer:[...right.querySelectorAll('.wc,.mini'),...(homework?[homework]:[])]};
 }
 const result=render(task,model);
 if(index<2&&other){
  const next=el('div','');next.innerHTML='<div class="panel">'+other+'</div>';
  convertWritingDiagnostic(next,1-index);
  const columns=el('div','gwcols'),frame=el('div','ege-written'),main=el('div','exam-main');
  for(const item of index===0?[result,next.firstElementChild]:[next.firstElementChild,result]){
   const col=el('div','gwcol');col.dataset.egeWritten=item.dataset.egeWritten;col.append(...item.querySelector('.exam-main').childNodes);columns.append(col);
  }
  main.append(columns);frame.append(main);host.replaceChildren(frame);
 }else host.replaceChildren(result);
}
global.EgeWrittenDiagnostics=Object.freeze({convertListeningReading,convertWritingDiagnostic});
})(window);

/* Блок 1 · Education and learning (30.11–12.12.2026).
   Источники: курс Крыловой «07 Education and learning» (Lesson 1–3, Homework 1–3, Vocabulary),
   «ЕГЭ EXPERT» (Крылова), тема Education and learning: устная часть 1–4, аудио интервью 13.mp3 / 14.mp3 (нарезаны по вопросам);
   ФИПИ 19–29 — задания открытого банка ФИПИ с сайта (раздел «Задания ФИПИ»), темы, которые на уроках ещё не давались.
   Ничего не сохраняется: урок всегда открывается с начала. */
window.LESSONS=window.LESSONS||{};
(function(){
const A='audio/',I='img/';
const INT=[
 {name:'Interview 1 · Education',intro:A+'edu-int1-intro.mp3',qs:[
  {audio:A+'edu-int1-q1.mp3',text:'What is your favourite subject at school? Why?'},
  {audio:A+'edu-int1-q2.mp3',text:'Do you usually remember things that you have studied?'},
  {audio:A+'edu-int1-q3.mp3',text:'What sort of techniques do you use to help you remember what you have studied?'},
  {audio:A+'edu-int1-q4.mp3',text:'How important do you think it is to go to university?'},
  {audio:A+'edu-int1-q5.mp3',text:'What is the best way to make teenagers motivated to learn?'}]},
 {name:'Interview 2 · Studying in Russia',intro:A+'edu-int2-intro.mp3',qs:[
  {audio:A+'edu-int2-q1.mp3',text:'Do you enjoy studying? What is your favourite subject at school and why?'},
  {audio:A+'edu-int2-q2.mp3',text:'When was the last time you took an exam? How was it?'},
  {audio:A+'edu-int2-q3.mp3',text:'How do you usually revise before the exam? How long does it usually take?'},
  {audio:A+'edu-int2-q4.mp3',text:'Are any of your friends interested in studying English? Why or why not?'},
  {audio:A+'edu-int2-q5.mp3',text:'Why is online education getting to be more and more popular? Do you think people will only study online one day?'}]}
];
const INT_KEYS1='<b>EXPERT · Suggested answers, Part 3 Task 1</b><ol><li>My favourite subject is maths. I like counting and dealing with formulas.</li><li>I remember all the things I have studied quite well. Whenever I need to learn something, I do it quickly. It’s not hard to remember things for me.</li><li>I usually use associations to remember things. For example, when I need to remember some facts, I think of the facts I already know and try to figure out the connection.</li><li>I believe it’s of utmost importance for people to go to university. It teaches certain skills people don’t usually learn at school. People also meet deadlines better if they have studied at university.</li><li>The best way is to give them topics that they are interested in or asking them to draw a parallel between the subject and something they like. This way it’s easier for teenagers to study and they remember things better.</li></ol>';
const INT_KEYS2='<b>EXPERT · Suggested answers, Part 3 Task 2</b><ol><li>I enjoy studying very much. I do it all the time. My favourite subject at school is English. I have to learn lots of words all the time and this is what I enjoy.</li><li>The last time I took an exam was last week. I took a Literature exam. It was not very hard. I think I’ll get a good grade but I don’t know the results yet.</li><li>I usually use my notebooks to revise. I take lots of notes when I study and it’s very convenient to revise using these notes. It usually takes a few days.</li><li>All of my friends are interested in studying English. It’s a global language and speaking it can give all of us an opportunity to get a decent job. My friends understand this and this is why they learn it.</li><li>Surely, online education is getting more and more popular. It’s very convenient. You can study wherever you want. I don’t think people will only study online though. The advantages of studying in person still outweigh some of the benefits of studying online.</li></ol>';

const VOCAB=[
 ['take an exam','сдавать экзамен','Bob has decided to take the geography exam.'],
 ['pass an exam','сдать экзамен','The exam is so hard that only five percent of applicants pass.'],
 ['fail an exam','провалить экзамен','I failed my physics exam, but I passed chemistry.'],
 ['study','учиться, изучать','Next term we will study plants and how they grow.'],
 ['teach','учить (кого-то)','She teaches English to foreign students.'],
 ['learn','учить, узнавать','They learn Russian at school.'],
 ['assignment','задание','I have a lot of reading assignments to complete before the end of term.'],
 ['task','задача, задание','Making these pastries is no easy task.'],
 ['effort','усилие','I’ve made an effort to drink less tea and coffee.'],
 ['subject','предмет','My favourite subjects at school were history and English.'],
 ['classmate','одноклассник','Students were given a list of all their classmates’ names.'],
 ['skills','навыки, умения','Ruth possessed great writing skills.'],
 ['qualifications','квалификация','Do you have any academic qualifications?'],
 ['degree','степень','He has a master’s degree in history from Yale.'],
 ['certificate','сертификат, свидетельство','You can get a medical certificate that shows which vaccinations you’ve had.'],
 ['achieve','достичь','I’ve been working all day, but I feel as if I’ve achieved nothing.'],
 ['reach','достигать, добираться','She reached the conclusion that there was no more she could do.'],
 ['recognise','узнавать, распознавать','I hadn’t seen her for 20 years, but I recognised her immediately.']
];
const PHRASAL=[
 ['think over','обдумать','I’ve been thinking over what you said.'],
 ['dawn on','осенить','Suddenly it dawned on him that they couldn’t possibly have met before.'],
 ['catch on','понять','Mary is very quick to catch on to things.'],
 ['give in','сдаться, уступить','The rebels were forced to give in.'],
 ['cross out','вычеркнуть','After much careful thought, John crossed out the old address.'],
 ['get at','понять, добраться до сути','The truth is sometimes difficult to get at.'],
 ['come round','изменить мнение','My dad will never come round to our way of thinking.'],
 ['set out','излагать','He set out the reasons for her resignation in a long letter.'],
 ['get on with','продолжать','Be quiet and get on with your work!'],
 ['keep up with','не отставать от','I can’t keep up with all the change.'],
 ['deal with','справляться, иметь дело с','She is used to dealing with all kinds of people in her job.'],
 ['drop out','бросить (учёбу)','She started an engineering degree but dropped out after only a year.'],
 ['sail through','легко пройти','Phoebe sailed through her finals and got A’s in everything.']
];
const COLLS=[
 ['pay attention to','обращать внимание на','He wasn’t paying attention to the safety instructions.'],
 ['take a break','сделать перерыв','Do you usually take a break in the afternoon?'],
 ['make a suggestion','внести предложение','Could I make a suggestion about the way your essay is structured?'],
 ['in my opinion','на мой взгляд','In my opinion, the law should be changed.'],
 ['express an opinion','высказать мнение','The students were not given the chance to express an opinion.'],
 ['make up my mind','принять решение','I haven’t made up my mind whether to go yet.'],
 ['teach someone a lesson','преподать урок','Having my car stolen really taught me a lesson.'],
 ['do homework','делать домашнее задание','The travel agent’s association suggests that travelers do their homework.'],
 ['pass the entrance exam','сдать вступительный экзамен','If she passes the entrance exam, she’ll go to university in October.'],
 ['have no idea','понятия не иметь','She has no idea where they’ve gone.'],
 ['a bright idea','отличная идея','It sounds like a really bright idea.'],
 ['draw attention to','привлекать внимание к','We have to try and get in without drawing attention to ourselves.'],
 ['accept a suggestion','принять предложение','Nor was she ready to accept suggestions that she should apply.'],
 ['have discussions on','обсуждать','The council had discussions on issues such as housing.']
];
const FAMILIES=[
 ['educate','education · educator','The man who can make hard things easy is the educator.'],
 ['attend','attendance · attention · attentive · inattentively','Attendance at these lectures is not compulsory.'],
 ['fail','failure · failing','I’m too proud to admit failure.'],
 ['improve','improvement · improved','There is still room for improvement.'],
 ['study','student · studies · studious','She was a studious child, happiest when reading.'],
 ['solve','solution · solvable','There is no solution to this problem.'],
 ['reason','reasonable · reasonably · unreasonable · unreasonably','We are reasonably sure this is the best solution.'],
 ['literate','illiterate · literacy · illiteracy','Far more resources are needed to improve adult literacy.'],
 ['understand','understandable · understandably · misunderstood · misunderstanding','There must be some misunderstanding.'],
 ['think','thought · thoughtful · thoughtless · unthinkable','It was thoughtless not to call and say you’d be late.'],
 ['scholar','scholarship · scholarly · scholastic','He won a scholarship to Harvard.'],
 ['academy','academic · academically','You have to do well academically to get into medical school.'],
 ['certify','certificate · certified','Tom was awarded a certificate of merit.'],
 ['intense','intensity · intensify · intensely','Violence intensified during the night.']
];

/* ---------- Lesson 1 · Пн 30.11 ---------- */
LESSONS['edu-1']={date:'2026-11-30',title:'Education · Lesson 1',sub:'понедельник, 30 ноября',head:'Education and learning · Lesson 1',goal:'Чтение 11 · gerund / infinitive · аудирование 3–9 · словообразование',
 acts:[
 {kind:'warm',type:'cards',mech:'Flashcards',title:'Topic vocabulary',note:'18 слов темы',items:VOCAB},
 {kind:'warm',type:'interview',mech:'Interview',ege:'Устное 3',title:'Interview · Education',note:'5 вопросов · 40 секунд',variants:[INT[0]],keys:INT_KEYS1},
 {kind:'read',type:'gapmatch',mech:'Gap match',ege:'11',title:'Singing can help when learning a foreign language',note:'Открытый банк ФИПИ',pred:'Can singing songs in English help you learn better?',
  text:['It is a source of national embarrassment – despite hours of lessons and listening to foreign language tapes, most of us [A]. However, a new study suggests there may be hope for those who have difficulty with a foreign language – they should try singing it instead.',
   'Research found that adults who sang words or short phrases from a foreign language while learning were twice as good at speaking it later. It is thought that by listening to words that are sung, and by singing them back, the technique takes advantage of the strong links between music and memory.',
   'Although not clearly understood, music is known to help students [B] recall.',
   'Dr Overy said singing could lead to new approaches to learning a foreign language. She said: “Most people [C] from songs they have heard and songs are sometimes used by language teachers with young children.”',
   'Dr Overy and her colleagues used recordings of Hungarian words to teach 60 adults. They chose Hungarian as the participants [D] language.',
   'The participants either listened to words that were spoken and then had to repeat them back, much like a standard teach-yourself tape, or the words were said rhythmically or sung. After a 15-minute learning period, they were then given several tests to see how well they had learned the words. Those [E] scored highest. They were also better at recalling the words correctly in tests of long term memory. Interestingly, they did not sing the words when they recalled them.',
   'Dr Ludke said the findings could help those [F].'],
  parts:['when studying and can help to start memory','who struggle to learn foreign languages','had no experience of learning this','have experience of remembering words','who had used the “listen and sing” approach','can barely order a simple drink while abroad','facilitate verbatim memory for foreign languages'],
  key:{A:6,B:1,C:4,D:3,E:5,F:2},keys:'A 6 · B 1 · C 4 · D 3 · E 5 · F 2. Лишняя часть — 7.'},
 {kind:'gram',type:'kahoot',mech:'Speed Game',title:'Gerund or infinitive',note:'17 предложений · 10 секунд',timer:10,pred:'What are some of the things you have to learn to prepare for life after school?',
  items:[
   {q:'___ your finances is vital.',a:'Sorting out',d:['To sort out']},
   {q:'It is important ___ a bank account.',a:'to set up',d:['setting up']},
   {q:'___ the suitability of your accommodation is essential.',a:'Checking',d:['To check']},
   {q:'Set up an email account ___ in contact with lecturers and classmates.',a:'to keep',d:['keeping']},
   {q:'Find out about local transport, although ___ to classes may save your money.',a:'walking',d:['to walk']},
   {q:'Learn ___ some simple, cheap meals.',a:'to cook',d:['cooking']},
   {q:'If your accommodation involves ___ costs with others, decide how bills will be divided.',a:'sharing',d:['to share']},
   {q:'Write a list of things you want ___ with you well in advance.',a:'to take',d:['taking']},
   {q:'Write a list of things well in advance to avoid ___ anything.',a:'forgetting',d:['to forget']},
   {q:'We’ve arranged ___ today.',a:'to meet',d:['meeting']},
   {q:'I’d like ___ a master’s after I finish my degree.',a:'to do',d:['doing']},
   {q:'Kim doesn’t mind ___ for her flatmates.',a:'cooking',d:['to cook']},
   {q:'Did you manage ___ in your assignment on time?',a:'to hand',d:['handing']},
   {q:'I usually go ___ at the weekends.',a:'walking',d:['to walk']},
   {q:'I’m too busy ___ out tonight. I have to work.',a:'to go',d:['going']},
   {q:'Don’t forget ___ off your mobile before the exam.',a:'to turn',d:['turning']},
   {q:'Max admitted ___ my pen without asking.',a:'borrowing',d:['to borrow']}]},
 {kind:'listen',type:'listen',mech:'Listening',ege:'3–9',title:'First weeks at university',note:'интервью · 7 вопросов',audio:A+'edu-l1-first-weeks.mp3',audioLabel:'Leanne Wilson · 2 раза',pred:'You will hear a radio interview with a student called Leanne Wilson, who is talking about her first weeks at university.',
  items:[
   {q:'What advice does Leanne give about getting to know people in the first weeks at university?',a:'Avoid judging people on first impressions.',d:['Join lots of different sports clubs.','Make friends with people studying the same subject as you.'],x:'Try to be open-minded: people who don’t speak to you could be just shy. Not just sports clubs — any clubs. Friends on her course is a fact, not a tip.'},
   {q:'What does she regret about her first week at university?',a:'not having more fun',d:['not doing more work','not saving her money'],x:'“I wish I’d taken more advantage of social life in that first week and enjoyed myself more.”'},
   {q:'Leanne chose not to live at home because',a:'she wanted to be independent.',d:['her parents discouraged her.','it was too far to travel every day.'],x:'“It was important to stand on my own two feet” = be independent.'},
   {q:'Leanne was able to manage financially at university by',a:'finding ways of economizing.',d:['cutting down on her social life.','getting an evening job.'],x:'Sharing books, charity shops, eating cheaply = economizing. An evening job would cut down her social life.'},
   {q:'What is Leanne’s opinion on attending lectures?',a:'They are useful as an introduction to the subject.',d:['It’s not worth going.','You should make detailed notes.'],x:'A lecture gives a basic overview in an hour and shows the main areas to read around. Notes can be found on the internet.'},
   {q:'What did Leanne find difficult about working without supervision?',a:'managing her time',d:['motivating herself','understanding the task'],x:'It’s easy to waste time unless you’re disciplined.'},
   {q:'What did she find difficult about university life?',a:'getting stressed by work',d:['being away from her family','having to cook for herself'],x:'She gets totally stressed, but only at exam times. Cooking and washing weren’t too bad.'}]},
 {kind:'vocab',type:'fipi',mech:'Word formation',ege:'25–29',title:'Remembering for exams',note:'9 пропусков',pred:'Is it hard or easy for you to prepare for EGE exams? What are the most difficult subjects?',
  texts:[{title:'Remembering for exams',first:1,items:[
   ['It’s frustrating for everybody not to be able to remember things but having a bad memory can be a particular ___ for students at exam time.','ADVANTAGE','disadvantage'],
   ['Anyway, I did a search on the internet and found ___ ideas for improving your memory.','COUNT','countless'],
   ['One idea I thought particularly ___ was that we should try and use all our senses when given information to learn.','VALUE','valuable'],
   ['So, for example, instead of reading ___, we should record the material and then listen to it.','SILENT','silently'],
   ['Apparently, the ___ of speaking and listening helps','COMBINE','combination'],
   ['reinforce the ___ text.','WRITE','written'],
   ['Another theory, which some people might find ___, is that','LIKELY','unlikely'],
   ['there is a greater ___ of our memorising something successfully','POSSIBLE','possibility'],
   ['if we do it when the house is ___ and, preferably, just before bedtime.','PEACE','peaceful']]}]}
 ],
 footer:'Homework к уроку: Homework 1 Крыловой (Thailand Education System, Reading 2, Determiners, Word formation «Culture shock», письмо 37) · чтение 12–18 «The culture shock of being an international student» (открытый банк ФИПИ, на сайте в разделе «Задания ФИПИ»).'};

/* ---------- Lesson 2 · Ср 02.12 ---------- */
LESSONS['edu-2']={date:'2026-12-02',title:'Education · Lesson 2',sub:'среда, 2 декабря',head:'Education and learning · Lesson 2',goal:'Аудирование · 19–24 ФИПИ · do / make · устное 4',
 acts:[
 {kind:'warm',type:'cards',mech:'Flashcards',title:'Phrasal verbs',note:'13 фразовых глаголов',items:PHRASAL},
 {kind:'warm',type:'speak2',mech:'Four questions',ege:'Устное 2',title:'Study with us anywhere at any time!',note:'4 прямых вопроса · 20 секунд',img:I+'edu-ad-online.jpg',
  task:'You are considering taking an online course and now you’d like to get more information. Ask four direct questions.',points:['program used','number of classes per week','assessment','choice of a teacher'],
  model:['What kind of program do you use for teaching your online course?','How many classes will I have per week?','How do you assess students’ progress?','Can I choose a teacher?']},
 {kind:'listen',type:'listen',mech:'Listening',ege:'Аудио 2',title:'Three teachers',note:'кто что сократит · 9 вопросов',audio:A+'edu-l2-three-teachers.mp3',audioLabel:'Three teachers · streamlining the curriculum',pred:'Do you feel that some of the subjects you study now at school should be cut? Why? (PE · RE · ICT · PSHE)',
  items:[
   {q:'Martine would cut ___',a:'RE and PE',d:['RE and ICT','PSHE and modern foreign languages']},
   {q:'Greg would cut ___',a:'RE and ICT',d:['RE and PE','PSHE and modern foreign languages']},
   {q:'Wendy would cut ___',a:'PSHE and modern foreign languages',d:['RE and ICT','RE and PE']},
   {q:'What is Martine’s opinion about sport?',a:'Let students who like it do it outside normal class time.',d:['It shouldn’t be taught in a state school.'],x:'Sport is best done in after-school clubs.'},
   {q:'Greg thinks sport',a:'can teach about competition and stop students misbehaving.',d:['should be taught for more than one hour a week.'],x:'PE is the only exercise they get, and it teaches them about winning and losing.'},
   {q:'Greg suggests',a:'computer studies should be part of all lessons.',d:['all students need a computer at home.'],x:'There’s no need to teach ICT as a separate subject; it should be part of every lesson.'},
   {q:'Wendy strongly disagrees with Greg about ICT because',a:'students don’t learn useful computer skills at home.',d:['buying a home computer is expensive.'],x:'At home students use computers for games and chatting.'},
   {q:'Martine says languages are important',a:'for more than just communication.',d:['to her students who are good at French.'],x:'Languages are an opportunity to find out about other cultures and societies.'},
   {q:'All three teachers agree to cut',a:'PSHE.',d:['Science.'],x:'PSHE could be integrated into other subjects — “a bit of a waste of time”.'}]},
 {kind:'gram',type:'fipi',mech:'Grammar',ege:'19–24',title:'Further Education · College life',note:'открытый банк ФИПИ · 6 пропусков',
  texts:[{title:'Further Education',first:19,items:[
   ['In Britain many young people decide to leave school at the age of 16 and go to a Further Education College. Here most of the courses ___ to some kind of practical vocational training in engineering, typing, cooking, etc.','LINK','are linked'],
   ['Some 16-year-olds leave school but cannot find work. At the same time they ___ to go to college.','NOT WANT','do not want'],
   ['For them the British government ___ the Young Opportunities Scheme. This scheme places young people with a firm or a factory for 6 months and pays them a small wage.','INTRODUCE','has introduced']]},
   {title:'College life',first:22,items:[
   ['We are a family of five. My ___ sister, Heather, is in her second year in college. This year she could not find a book she needed.','OLD','elder'],
   ['When the professor assigned reading from a hard-to-find book, 150 hands shot in the air to inform him they ___ it. He told them it had arrived at the bookstore that morning.','NOT HAVE','did not have'],
   ['When the class was over, Heather sprinted to the bookstore, grabbed a copy and rushed to the cashier. The cashier saw Heather and began ringing the bell for assistance, a look of panic on her face. “How many ___ there behind you?” she demanded.','BE','are']]}]},
 {kind:'vocab',type:'sort',mech:'Sorting',ege:'30–36',title:'Do or make?',note:'18 выражений',cols:['DO','MAKE'],
  items:[['an assignment',0],['an exam',0],['homework',0],['the housework',0],['the shopping',0],['someone a favour',0],['sport',0],['well',0],['a course',0],['an appointment',1],['breakfast',1],['a decision',1],['an excuse',1],['friends',1],['a mistake',1],['a noise',1],['a promise',1],['a suggestion',1]]},
 {kind:'speak',type:'speak4',mech:'Photo project',ege:'Устное 4',title:'Taking notes for learning',note:'EXPERT · Speaking Part 4 Task 2',img:I+'edu-photos-notes.jpg',
  task:'You and your friend are doing a school project “Taking notes for learning”. Leave a voice message explaining your choice of the photos. In 2.5 minutes be ready to:',
  plan:['explain the choice of the illustrations by briefly describing them and noting the differences','mention the advantages (1–2) of the two ways of taking notes','mention the disadvantages (1–2) of the two ways of taking notes','express your opinion: which way you preferred when you were a child and why'],
  phrases:['I’ve found two suitable pictures for our project','In the first picture I can see …','The difference between the pictures is …','There are some advantages of …','However, both of the ways also feature some disadvantages.','When I was a child, I preferred …','That’s all for now.'],
  keys:'<b>Suggested answer (Крылова, Lesson 2)</b><p>Hi Sveta, it’s Masha. I’ve found two suitable pictures for our project “Taking notes for learning”. I’d like to tell you about the pictures and what I think about taking notes. I guess we should take the illustrations because in both of them there are some girls who are taking notes. In the first picture, I can see a girl sitting on the sofa and studying, she is holding a notebook and a pen. I think she might be revising for her exam. In the second picture there’s a girl with a tablet and a stylus. She is probably reading something and might also be taking some notes. The difference between the pictures is in the things the girls are using for taking notes: a notebook and an electronic device. There are some advantages of using both of the ways of taking notes. Scientists say that you remember things better when you write them down. If you use electronic devices, it’s much faster to take notes and you can copy some sections and paste them somewhere else. However, both of the ways also feature some disadvantages. Sometimes a pen won’t write. A battery in an electronic device may go dead. In this case you won’t be able to read or take any notes. When I was a child, I preferred to use notebooks for taking notes. I liked writing in hand and I also liked drawing pictures while I was listening to the teacher. That’s all for now. Call me back in the evening to discuss the project. Bye.</p>'},
 {kind:'read',type:'gapmatch',mech:'Gap match',ege:'11',title:'Savants',note:'Daniel Tammet · 6 пропусков',optional:true,pred:'Which special abilities would you most like to have? How would you use them?',partLabels:['A','B','C','D','E','F','G'],
  text:['At the age of three, Daniel Tammet suffered an epileptic fit. Ever since then he has been obsessed with numbers and counting. Now an adult, he is a mathematical and linguistic genius who can recite pi to 22,514 decimal places and can learn to speak a language fluently in a matter of days.',
   'Daniel is a ‘savant’: somebody who has specific, extraordinary abilities, but who is incapable of most everyday tasks. For example, [1]',
   'Unlike most savants, however, Tammet is a good communicator. He can [2]. He explains that his mathematical feats do not involve ‘thinking’. Instead, he visualizes the number in his head, as if he’s watching a film.',
   'Daniel had difficulty coming to terms with his condition until he saw an American film called Rain Man, which tells the story of another savant who can perform very complex mental arithmetic with astonishing speed and accuracy. Then he got to meet Kim Peek, the real-life savant on [3]',
   'Kim was born in 1951 with an unusually formed brain. Doctors predicted that Kim would never be able to lead a normal life. As a child, he couldn’t walk until he was four years old. However, [4] He could use a dictionary when he was three years old.',
   'Savants are very rare. The blind American savant, Leslie Lemke, was able to play Tchaikovsky’s Piano Concerto No 1 without hesitation after hearing it once. The British savant Stephen Wiltshire managed to draw [5]',
   'Intriguingly, some scientists believe that we all have these kinds of amazing abilities hidden deep inside our brains, but that we lose them as we grow up. Savants are different: [6] This theory is supported by the fact that, very occasionally, people acquire these abilities in adult life as the result of brain damage.'],
  parts:['a highly accurate picture of the London skyline after a single helicopter trip over the city.','they don’t develop normally and as a result they retain their special abilities.','he always had extraordinary mental abilities.','he cannot drive a car or wire a plug, nor does he know his left from his right.','ability to do amazing calculations in their head, like Raymond Babbitt.','whom the character in the movie is based.','reflect on his own special abilities in a way that most savants cannot.'],
  key:{1:4,2:7,3:6,4:3,5:1,6:2},keys:'1 D · 2 G · 3 F · 4 C · 5 A · 6 B. Лишнее предложение — E.'}
 ],
 footer:'Homework к уроку: Homework 2 Крыловой (Gateway School of Mumbai, Reading 1, Articles, Conditionals, University in Malta, phrasal verbs, collocations).'};

/* ---------- Суббота 05.12 · 19–29 ФИПИ ---------- */
LESSONS['edu-3']={date:'2026-12-05',title:'Education · 19–29',sub:'суббота, 5 декабря',head:'Grammar and word formation · ФИПИ',goal:'Степени сравнения · числительные · местоимения · времена и пассив · словообразование по теме Education',
 acts:[
 {kind:'warm',type:'cards',mech:'Flashcards',title:'Word families',note:'14 гнёзд слов',items:FAMILIES},
 {kind:'warm',type:'interview',mech:'Interview',ege:'Устное 3',title:'Interview · повтор',note:'вариант 1 или 2',variants:INT,keys:INT_KEYS1+INT_KEYS2},
 {kind:'gram',type:'fipi',mech:'Grammar',ege:'19–24',title:'Science in ancient Rome',note:'числительные · степени · местоимения · Past',
  texts:[{title:'Science in ancient Rome',first:19,items:[
   ['The Romans assimilated earlier Greek science for their own purposes. The ___ architects and doctors in the Roman world were very often Greek, and the Roman respect for ancient Greek scholars continued right up to the end of the Empire.','ONE','first'],
   ['An important feature of Roman scientists was that they tried to find authoritative answers to any questions they had about the world. Moreover, ancient Romans ___ fond of purposeless discussions.','NOT BE','were not'],
   ['They tried to solve practical problems. Physics, for instance, had to help produce effective weapons. Biology had to help farmers so that they ___ grow good crops.','CAN','could'],
   ['Mathematics had to provide builders with the ___ answers how to construct impressive domes and arches.','GOOD','best'],
   ['Medicine was greatly developed, too. Roman doctors performed various operations and knew how to treat many illnesses. Wealthy Romans often ___ money to scientists to support their research.','GIVE','gave'],
   ['We still remember the names of Roman scientists and philosophers and study ___ ideas.','THEY','their']]}]},
 {kind:'gram',type:'fipi',mech:'Grammar',ege:'19–24',title:'Ancient Corinth · Languages in the USA',note:'пассив · Present Perfect · числительные',
  texts:[{title:'Ancient Corinth',first:19,items:[
   ['Corinth was an ancient Greek city state. ___ in southern part of Greece, this vibrant city was a prosperous trade centre that had one of the best fleets of its times.','SITUATE','Situated'],
   ['It is even considered to have fought the ___ naval battle on record.','ONE','first'],
   ['The city ___ around the 8th century BC and became famous because of its high-quality pottery.','FOUND','was founded'],
   ['Apart from it, Corinth exported stone and bronzeware. Many poets, playwrights, and architects lived in it. The Corinthian Order quickly ___ a distinctive feature of the Greek architectural style and is still used in modern buildings.','BECOME','became'],
   ['In 146 BC Corinth was destroyed by the Romans only to be rebuilt under the patronage of Julius Caesar as a Roman colony. Today the ancient city lies in ruins. Since 1896 archeologists ___ there, finding various elements of ancient buildings each year.','WORK','have worked'],
   ['Tourists enjoy ___ at what is left from once a beautiful ancient city state.','LOOK','looking']]},
   {title:'Languages in the USA',first:19,items:[
   ['The most commonly used language in the United States is English, which is the de facto national language. Nonetheless, many other languages ___ in the United States.','SPEAK','are spoken'],
   ['___ include indigenous languages, languages brought to the country by colonists, enslaved people and immigrants from Europe, Africa and Asia.','THIS','These'],
   ['Spanish, of course, is the ___ most commonly spoken language in the United States.','TWO','second']]},
   {title:'The Brownings',first:22,items:[
   ['On January 10, 1845, Robert Browning, a little-known poet and playwright, sent a letter to Elizabeth Barrett, an internationally renowned poet. Over the course of the next 20 months, they ___ each other close to 600 letters.','WRITE','wrote'],
   ['It is one of the ___ literary correspondences of all time.','GREAT','greatest'],
   ['The couple’s last letter was exchanged on September 18, 1846, the night before the two ___ for a trip to Italy and two weeks after their secret marriage.','LEAVE','left']]}]},
 {kind:'vocab',type:'fipi',mech:'Word formation',ege:'25–29',title:'Auckland University · Libraries',note:'тема Education · 15 пропусков',
  texts:[{title:'Auckland University',first:25,items:[
   ['The University of Auckland is New Zealand’s leading university. ___, it’s among the top 200 universities of the world.','ACTUAL','Actually'],
   ['The University of Auckland has a strong focus on legal and ___ programmes welcoming students from all parts of the world.','BUSY','business'],
   ['The student ___ of the University of Auckland is 40,000, about 4,000 of whom have come to study from abroad.','POPULATE','population'],
   ['The University of Auckland also offers postgraduate studies, which will certainly broaden your academic and ___ horizons.','EMPLOY','employment'],
   ['It will be ___ for your CV with specialist skills and knowledge provided.','VALUE','valuable']]},
   {title:'Public libraries',first:25,items:[
   ['As libraries have been around for thousands of years, many people take them for granted. However, we must realize that public libraries ___ play a significant role in our society.','ACTUAL','actually'],
   ['Public libraries provide access to information about ___ planning, market research and finance opportunities.','BUSY','business'],
   ['Even though job ___ are changing fast, public libraries make it possible to upskill the workforce at a low cost or even for free.','REQUIRE','requirements'],
   ['Public libraries provide resources and services for literacy and ___ to anyone.','EDUCATE','education'],
   ['They help people become a part of a community. Therefore, peoples’ need for libraries is ___ to change any time soon.','LIKELY','unlikely']]},
   {title:'Libraries and education',first:25,items:[
   ['Public libraries play an important role in supporting education and literacy. They provide ___ valuable resources to their visitors.','COUNT','countless'],
   ['Modern libraries contain a lot of ___ materials, scientific publications, newspapers and magazines which may not be available anywhere else.','EDUCATION','educational'],
   ['They are ___ important for school and university students.','REAL','really'],
   ['Libraries encourage them to become more ___ readers.','ACT','active'],
   ['Many students also use their school or university library as a reading room, though prior ___ will probably have to be asked to bring external books into the library.','PERMIT','permission']]}]}
 ],
 footer:'Каждую субботу к новой теме добавляются времена и пассив из Error Log (вкладка Error Log на сайте) — по 5–7 её предложений в начале урока.'};

/* ---------- Lesson 3 · Пн 07.12 ---------- */
LESSONS['edu-4']={date:'2026-12-07',title:'Education · Lesson 3',sub:'понедельник, 7 декабря',head:'Education and learning · Lesson 3',goal:'Чтение 10 · 30–36 · словообразование · эссе 38 · устное 2–3',
 acts:[
 {kind:'warm',type:'cards',mech:'Flashcards',title:'Phrases and collocations',note:'14 сочетаний',items:COLLS},
 {kind:'warm',type:'speak2',mech:'Four questions',ege:'Устное 2',title:'Prepare for Cambridge exams with us!',note:'4 прямых вопроса · 20 секунд',img:I+'edu-ad-cambridge.jpg',
  task:'You are considering taking an online course and now you’d like to get more information. Ask four direct questions.',points:['days of studying','tuition fees','number of students in one group','if they give a certificate'],
  model:['What days do you have lessons in your online course?','What are the tuition fees?','How many students are there in one group?','Do you provide students with a certificate at the end of the course?']},
 {kind:'read',type:'headings',mech:'Matching headings',ege:'10',title:'Distance learning',note:'открытый банк ФИПИ · 7 текстов',pred:'What’s your view on distance learning programmes? Can they be effective?',
  heads:['More advantages at the job market.','How long does it take?','Using different resources.','Available to everybody.','Cheaper than usual.','Fewer possibilities.','Types of distance learning.','Not for everybody.'],
  texts:[
   {label:'A',text:'Thanks to technology innovation, distance learning has always involved more than reading texts and writing essays or assignments. Virtual microscopes, interactive laboratories and online collaborations have taken the place of home experiment kits sent by post, while late night TV programmes have been replaced by DVDs and online interactive videos. Distance teaching universities can nowadays choose from many methods to support learning.'},
   {label:'B',text:'The delivery method of distance learning programmes varies. Although many courses are taught entirely online, some schools also give students an opportunity to meet face-to-face with tutors and classmates several times a year. In other situations, students will do all their work online and are only required to attend specific locations for exams. Others may attend weekly lectures in addition to completing work online. This combined system is known as blended learning.'},
   {label:'C',text:'Employers can be especially impressed by people who have studied for a distance learning qualification. The CEO of a large international consulting firm recently commented that he would value more favourably a graduate from a distance learning MBA who had achieved the same results as a graduate from similar on-campus programme because it takes more commitment, enthusiasm, time and energy from the student to achieve this result.'},
   {label:'D',text:'Distance learning requires self-discipline and determination and would not suit someone with no motivation to study on his or her own, who needs the structure of a traditional learning environment, or with simply no time for studying. Although it is possible to still have time for family and professional commitments while attending a distance education school, it does not mean there will be less work than at residential school.'},
   {label:'E',text:'The length of online university courses varies depending on whether you’ll be studying full- or part-time, the level of the qualification, and the subject of study. For the majority of full-time undergraduate programmes, the timeframe is similar to a traditional bachelor’s course of three or four years. For part-time courses, your studies may take additional two or three years. Most online university courses will give a specific time period within which students must complete their studies.'},
   {label:'F',text:'One of the leading providers of online education in the UK is the Open University. Fees at the Open University vary depending on whether you study part-time or full-time, but the average cost for full-time is 5,264 annually for three years. This is approximately 3,700 less per year than enrolling at a campus-based UK university as a home student, and considerably less than the amount international students would pay to study in the UK.'},
   {label:'G',text:'In the last few years another type of online education has appeared – MOOCs (massive open online courses). These are free online education programmes that anyone can sign up to, typically offered by well-known universities. They now cover a wide range of subjects. As MOOCs are free and open to all with access to the internet, they are useful for people of all ages and professional backgrounds who are keen to learn a new skill or gain information about a particular subject.'}],
  key:{A:3,B:7,C:1,D:8,E:2,F:5,G:4},keys:'A 3 · B 7 · C 1 · D 8 · E 2 · F 5 · G 4. Лишний заголовок — 6.'},
 {kind:'vocab',type:'kahoot',mech:'Kahoot',ege:'30–36',title:'University words · linking words',note:'15 вопросов',
  items:[
   {q:'After I graduate, I’d like to continue studying and do a ___.',a:'master’s',d:['degree','undergraduate']},
   {q:'Our history ___ starts at 2.30 and finishes at 4.00 this afternoon.',a:'lecture',d:['tutor','course']},
   {q:'Katie can’t come out tonight because she has to ___ an exam tomorrow.',a:'resit',d:['revise','mark']},
   {q:'My brother is studying for a ___ in physics at university.',a:'degree',d:['graduate','grade']},
   {q:'When I read the ___ that I took in my tutorial, I couldn’t understand them!',a:'notes',d:['coursework','assignments']},
   {q:'I can’t afford to pay for university so I’ve got a student ___.',a:'loan',d:['facilities','tutor']},
   {q:'I work very hard on my assignments and I’ve got good ___ so far.',a:'grades',d:['coursework','tutors']},
   {q:'I’m lucky that I’m interested in school work, ___ I’d go mad.',a:'otherwise',d:['therefore','whereas','besides']},
   {q:'It is ___ true that the darker the fruit the higher its iron content.',a:'generally',d:['otherwise','although','nevertheless']},
   {q:'She’ll be coming tonight, ___ I don’t know exactly when.',a:'although',d:['therefore','furthermore','besides']},
   {q:'Many marriages fail. ___, people continue to get married.',a:'Nonetheless',d:['Therefore','Otherwise','Generally']},
   {q:'Mr. Brown has earned the respect of farmers everywhere. ___, they know they can trust him.',a:'Furthermore',d:['Whereas','Otherwise','Although']},
   {q:'It was inspired by working with a lot of different artists ___ in the past there was no one significant.',a:'whereas',d:['therefore','besides','otherwise']},
   {q:'Several members have not replied for over three years and their names have ___ been removed from the mailing list.',a:'therefore',d:['otherwise','whereas','although']},
   {q:'During these meals we discuss not only cooking, but books and culture and much ___.',a:'besides',d:['therefore','otherwise','whereas']}]},
 {kind:'vocab',type:'kahoot',mech:'Kahoot',ege:'25–29',title:'Word formation · sentences',note:'18 предложений',root:true,
  items:[
   {q:'You learn to be ___ when you stop living with your parents.',root:'DEPEND',a:'independent',d:['dependent','independence','dependence']},
   {q:'One way of checking a student’s progress at university is by ___ assessment.',root:'CONTINUE',a:'continuous',d:['continual','continuity','continuation']},
   {q:'Students have to do ___ for each of the subjects they study at university.',root:'ASSIGN',a:'assignments',d:['assignment','assigned','assigning']},
   {q:'A ___ is a type of class at university.',root:'TUTOR',a:'tutorial',d:['tutor','tutoring','tutored']},
   {q:'When they aren’t at lectures, students can choose to do an extracurricular ___.',root:'ACTIVE',a:'activity',d:['action','actively','activities']},
   {q:'When they aren’t at lectures, students live in a hall of ___.',root:'RESIDENT',a:'residence',d:['residents','residential','residing']},
   {q:'___ is a major concern for voters.',root:'EDUCATE',a:'Education',d:['Educator','Educational','Educated']},
   {q:'I’m too proud to admit ___.',root:'FAIL',a:'failure',d:['failing','failed','fails']},
   {q:'The hotel staff are friendly and ___.',root:'ATTEND',a:'attentive',d:['attention','attendance','attendant']},
   {q:'He was watching her with an ___ that was unnerving.',root:'INTENSE',a:'intensity',d:['intensify','intensely','intensive']},
   {q:'I’ll come back when you’re in a more ___ mood.',root:'REASON',a:'reasonable',d:['reasonably','reasoning','unreasonable']},
   {q:'He won a ___ to Harvard.',root:'SCHOLAR',a:'scholarship',d:['scholar','scholarly','scholastic']},
   {q:'Rodman claims that he is ___, and that the media have always portrayed him unfairly.',root:'UNDERSTAND',a:'misunderstood',d:['understood','misunderstanding','understandable']},
   {q:'Far more resources are needed to improve adult ___.',root:'LITERATE',a:'literacy',d:['illiteracy','literate','literature']},
   {q:'She was a ___ child, happiest when reading.',root:'STUDY',a:'studious',d:['student','studies','studied']},
   {q:'It was ___ not to call and say you’d be late.',root:'THINK',a:'thoughtless',d:['thoughtful','thinking','unthinkable']},
   {q:'He was exposed to the risk of ___ high prices.',root:'REASON',a:'unreasonably',d:['reasonably','unreasonable','reasonable']},
   {q:'He had his ___, but he was basically a good man.',root:'FAIL',a:'failings',d:['failures','failed','fails']}]},
 {kind:'write',type:'kahoot',mech:'Error hunter',ege:'38',title:'Essay 38 · which sentence is right?',note:'16 пар предложений · проект Zetland',shuffle:false,pred:'Project: what skills Zetland teenagers want to learn. Driving a car 38% · Snowboarding 24% · Speaking a foreign language 16% · Dancing 12% · Cooking 10%',
  items:[
   {q:'1 · Opening',a:'Adolescence is the time when people learn to do very many things.',d:['Teenagers like learning new skills.'],x:'The first sentence is too simple and overgeneralized.'},
   {q:'2 · Opening',a:'I am currently doing a project on what skills Zetland teenagers want to learn.',d:['I’ve done a project on what skills Zetland teenagers want to learn.'],x:'You are still doing your project according to the task.'},
   {q:'3 · Opening',a:'I have found some results of the opinion polls, which are presented below.',d:['I have found a pie chart, which is presented below.'],x:'It’s an essay and there’s no pie chart below, there are only some statistics.'},
   {q:'4 · Facts',a:'According to the statistics, the most popular skill to learn among Zetland teenagers is driving a car (38%).',d:['According to the pie chart, the most popular skill to learn among Zetland teenagers is driving a car (38%).'],x:'Mention the form of the statistics correctly: in the essay there are statistics, not a pie chart.'},
   {q:'5 · Facts',a:'16% of the respondents want to learn how to speak a foreign language.',d:['Almost one-fifth of the respondents want to learn how to speak a foreign language (16%).'],x:'16% is not almost one-fifth. It’s not accurate.'},
   {q:'6 · Facts',a:'One-tenth of young Zetlanders are interested in learning how to cook.',d:['Moreover, 10% of young Zetlanders are interested in learning how to cook.'],x:'You cannot use “moreover” to add a fact here.'},
   {q:'7 · Comparison',a:'Interestingly, twice as many of the teenagers are eager to learn how to snowboard (24%) as those who want to learn to dance (12%).',d:['Interestingly, more teenagers in Zetland prefer snowboarding to dancing, 24% and 12% respectively.'],x:'The data is not what teenagers prefer doing — it’s what they want to learn.'},
   {q:'8 · Comment',a:'It seems logical as snowboarding is very popular among modern teenagers.',d:['It seems logical as many of my friends like snowboarding.'],x:'Keep it general: no personal experience in the first four paragraphs.'},
   {q:'9 · Comment',a:'Teenagers like to show off and it seems one of the ways.',d:['Teenagers are showing off and it seems one of the ways.'],x:'Wrong tense: Present Continuous is not used to state facts.'},
   {q:'10 · Comment',a:'Dancing is much simpler activity to learn.',d:['Dancing is not interesting for teenagers.'],x:'The second sentence contradicts the statistics: 12% want to learn to dance.'},
   {q:'11 · Problem',a:'When people develop new skills, they can face certain problems.',d:['It is difficult for teenagers to develop new skills, thus, there are many problems.'],x:'The fourth part of the plan is about all people in general, not only teenagers.'},
   {q:'12 · Problem',a:'One of them is giving up what they learn once they experience difficulties.',d:['One of them is that he may give up what he learns once he experiences difficulties.'],x:'You cannot refer to all people as “he”: use he or she / they.'},
   {q:'13 · Solution',a:'To tackle the problem, such people should find teachers that motivate and encourage their students.',d:['Tackling the problem, such people should find teachers that motivate and encourage their students.'],x:'A clause of purpose needs the infinitive; the -ing form sounds like simultaneous actions.'},
   {q:'14 · Solution',a:'This could help learn from mistakes and help people continue mastering their skills.',d:['Teacher should always support their students.'],x:'Explain how the solution works. Do not make another suggestion.'},
   {q:'15 · Conclusion',a:'In conclusion, I believe the most important skill to learn for me is critical thinking.',d:['To sum up, I believe the most important skill to learn for me is critical thinking.'],x:'“To sum up” is the wrong linker: you don’t summarise everything in the final paragraph.'},
   {q:'16 · Conclusion',a:'It helps measure possible outcomes and sift through a great deal of information I obtain daily.',d:['Critical thinking is the skill everyone should develop.'],x:'Explain your point of view; the other sentence is not an explanation.'}]},
 {kind:'speak',type:'interview',mech:'Interview',ege:'Устное 3',title:'Interview · Studying in Russia',note:'5 вопросов · 40 секунд',variants:[INT[1]],keys:INT_KEYS2}
 ],
 footer:'Homework к уроку: Homework 3 Крыловой (How to learn public speaking, Infinitive vs Gerund, Word formation, Finnish education, эссе 38).'};

/* ---------- Ср 09.12 · Устная часть 1–4 (EXPERT) ---------- */
LESSONS['edu-5']={date:'2026-12-09',title:'Education · Speaking 1–4',sub:'среда, 9 декабря',head:'Speaking 1–4 · ЕГЭ EXPERT · Education and learning',goal:'Полная устная часть в формате экзамена: задание → разбор → повтор',
 acts:[
 {kind:'warm',type:'cards',mech:'Flashcards',title:'Vocabulary of the block',note:'повторение',items:VOCAB.concat(COLLS)},
 {kind:'speak',type:'image',mech:'Reading aloud',ege:'Устное 1',title:'Education in Russia',note:'1,5 минуты на подготовку · 1,5 на чтение',img:I+'edu-exp-reading.jpg',timers:[90,90],tl:['Подготовка 1:30','Чтение 1:30']},
 {kind:'speak',type:'speak2',mech:'Four questions',ege:'Устное 2',title:'Study with us anywhere at any time!',note:'повтор со среды 2.12',img:I+'edu-ad-online.jpg',
  task:'You are considering taking an online course and now you’d like to get more information. Ask four direct questions.',points:['program used','number of classes per week','assessment','choice of a teacher'],
  model:['What kind of program do you use for teaching your online course?','How many classes will I have per week?','How do you assess students’ progress?','Can I choose a teacher?']},
 {kind:'speak',type:'interview',mech:'Interview',ege:'Устное 3',title:'Interview · 2 варианта',note:'аудио EXPERT · 40 секунд',variants:INT,keys:INT_KEYS1+INT_KEYS2},
 {kind:'speak',type:'speak4',mech:'Photo project',ege:'Устное 4',title:'Studying',note:'EXPERT · Speaking Part 4 Task 1',img:I+'edu-photos-studying.jpg',
  task:'You and your friend are doing a school project “Studying”. Leave a voice message explaining your choice of the photos. In 2.5 minutes be ready to:',
  plan:['explain the choice of the illustrations by briefly describing them and noting the differences','mention the advantages (1–2) of the two ways of studying','mention the disadvantages (1–2) of the two ways of studying','express your opinion: which way of studying you preferred when you were a child and why'],
  phrases:['you can do it wherever you want','you can take as much time as you want','no one can make you rush','you can hear other people’s ideas','ask about something and find out the answer straight away','there’s no one to ask','it could be boring','it’s difficult for shy people to express their ideas']},
 {kind:'speak',type:'match',mech:'Matching',ege:'Устное 4',title:'Model answer · chess and windsurfing',note:'Крылова, Lesson 3 · 8 пар',
  pairs:[['There are people doing hobbies','in both of the pictures.'],['In the first one I can see','two people playing chess.'],['The second picture illustrates','someone windsurfing.'],['There’s an obvious difference','between the pictures.'],['The first one depicts a passive activity,','while the second one is very active.'],['I believe it’s quite difficult','to excel at both of the activities.'],['If a person wants to master chess,','they need to develop their logical skills and memory.'],['As for windsurfing,','good hand-eye coordination is a must.']]}
 ]};

/* ---------- Сб 12.12 · Письмо 37 + мини-тест ---------- */
LESSONS['edu-6']={date:'2026-12-12',title:'Education · Email 37',sub:'суббота, 12 декабря',head:'Email 37 · mini-test · Education and learning',goal:'Ошибки в письме · письмо по тренажёру · итоговый тест по лексике блока',
 acts:[
 {kind:'warm',type:'cards',mech:'Flashcards',title:'Phrasal verbs · повтор',note:'интервальное повторение',items:PHRASAL},
 {kind:'write',type:'errorhunt',mech:'Error hunter',ege:'37',title:'Learning strategies · ответ Милы',note:'13 ошибок 9 типов',pred:'Mary: “How do you learn new words and phrases? How much time do you usually spend to memorise new words? Do you forget them all after taking a test?” + 3 questions about her new computer.',
  text:'Dear Mary,\nThanks a lot for your email. It’s always nice {hearing|to hear} from you.\nYou wondered how I learn new {word|words} and {phrase|phrases}. Well, I learn {a new|new} vocabulary on Wordstool.com. I usually make some sets for myself or my teacher {send|sends} me some tasks. I do them daily and {spent|spend} about 10 to 30 minutes {to|on} that. A new set of words usually {take|takes} 15 minutes to learn. Actually, I don’t forget {some|any} words because {it’s|there’s} a revision module on the website. I just arrange some tasks for myself and they pop up in due time.\nBy the way, tell me about your new computer. Is it {PC|a PC} or {laptop|a laptop}? How much memory is {it|there}? Is it fast?\nWrite back soon.\nAll the best,\nMila',
  keys:'Исправленный вариант — 128 слов. Ошибки: инфинитив (to hear), множественное число (words, phrases), артикли (new vocabulary, a PC, a laptop), согласование (sends, takes), время (spend), предлог (on that), any в отрицании, there’s, there.'},
 {kind:'write',type:'link',mech:'Trainer',ege:'37',title:'Письмо 37 по тренажёру',note:'62 письма ФИПИ',text:'Выберите письмо в тренажёре писем 37 на сайте: план, вопросы, чек-лист. Вопросы к письму озвучены естественным голосом.',links:[['Открыть тренажёр писем 37','../letters37/index.html']]},
 {kind:'vocab',type:'kahoot',mech:'Kahoot',ege:'30–36',title:'Mini-test · Education',note:'15 вопросов',
  items:[
   {q:'He wasn’t ___ the safety instructions.',a:'paying attention to',d:['keeping up with','dealing with','drawing attention']},
   {q:'Do you usually ___ in the afternoon?',a:'take a break',d:['take an exam','have an idea','make a point']},
   {q:'Could I ___ about the way your essay is structured?',a:'make a suggestion',d:['have a discussion','express an opinion','learn a lesson']},
   {q:'The students were not given the chance to ___.',a:'express an opinion',d:['make up their mind','teach a lesson','pass an exam']},
   {q:'Jane ___ her Maths exam, but she passed Chemistry.',a:'failed',d:['dropped','missed','lost']},
   {q:'I haven’t ___ whether to go yet.',a:'made up my mind',d:['changed my mind','borne in mind','crossed my mind']},
   {q:'Having my car stolen really ___ — I’ll never leave it unlocked again.',a:'taught me a lesson',d:['learnt me a lesson','gave me a break','made me a point']},
   {q:'You can’t expect to just ___ without doing any work.',a:'sail through',d:['drop out','give in','catch on']},
   {q:'Adam ___ of school when he was 16.',a:'dropped out',d:['gave in','crossed out','set out']},
   {q:'He had to hurry to ___ her.',a:'keep up with',d:['get on with','deal with','get at']},
   {q:'She’s used to ___ difficult customers.',a:'dealing with',d:['keeping up with','getting at','coming round']},
   {q:'I’ll ___ and give you an answer next week.',a:'think it over',d:['cross it out','give it in','get it on']},
   {q:'The exam is so hard that only five percent of applicants ___.',a:'pass',d:['take','teach','study']},
   {q:'I’ve made an ___ to drink less tea and coffee.',a:'effort',d:['task','assignment','subject']},
   {q:'She ___ the conclusion that there was no more she could do.',a:'reached',d:['achieved','arrived','got']}]},
 {kind:'write',type:'sequence',mech:'Sequencing',ege:'38',title:'Essay plan · повтор',note:'6 шагов плана',
  items:[['Opening','I am currently doing a project on what skills teenagers want to learn.'],['Facts','According to the statistics, the most popular skill to learn is driving a car (38%).'],['Compare','Interestingly, twice as many teenagers are eager to learn how to snowboard (24%) as those who want to learn to dance (12%).'],['Problem','When people develop new skills, they can face certain problems.'],['Solution','To tackle the problem, such people should find teachers that motivate and encourage their students.'],['Opinion','In conclusion, I believe the most important skill to learn for me is …']]},
 {kind:'read',type:'link',mech:'Cheatsheet',title:'Cheatsheet · Education',note:'справочник блока + Practice',text:'Cheatsheet блока: майндмапы сочетаний, гнёзда слов, gerund / infinitive, фразы для эссе 38 и устного 4 — с играми Practice.',links:[['Открыть cheatsheet','cheatsheet-education.html']]}
 ]};
})();

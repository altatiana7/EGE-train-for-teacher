/* Неделя 5 (07.11.2026): письмо 37 — вопросы другу.
   По итогам проверки трёх писем ученицы (Technology, After-school clubs, Travelling):
   вопросы получаются общими, повторяют друг друга или не совпадают по времени с новостью друга.
   Урок 1 — «Choose the best question» (12 ситуаций), урок 3 — «Find the weak question» (10 ситуаций).
   Формат: KQ.kahoot — один вопрос на экране, крупные кнопки ответов. */
(function(){
'use strict';
const K=rows=>rows.map(r=>({q:r[0],hint:'',opts:r[1],a:r[2],why:r[3]||''}));

const BEST=K([
['Your friend has just bought a new camera.',['What brand is your new camera?','Which camera would you like to buy?','Do you like cameras?'],'What brand is your new camera?','Камера уже куплена — спрашиваем о ней, а не о выборе и не «нравится ли вообще».'],
['Your friend is organising a charity fair.',['Do you like helping people?','What will you sell at the fair?','Are you excited?'],'What will you sell at the fair?','Конкретный вопрос о самой ярмарке. Эмоции и «любишь ли» — слишком общие.'],
['Your friend is taking part in a robotics competition.',['Do you like science?','Are robots interesting?','How many teams are competing?'],'How many teams are competing?','Вопрос о конкретном соревновании, а не о науке вообще.'],
['Your friend has just returned from a trip to Italy.',['Where would you like to travel?','Which cities did you visit?','Do you like travelling?'],'Which cities did you visit?','Поездка уже была — Past Simple и вопрос именно о ней.'],
['Your friend has joined a photography club.',['How often does the club meet?','Would you like to join a club?','Do you like photos?'],'How often does the club meet?','Друг уже в клубе — спрашиваем о клубе, а не «хочешь ли вступить».'],
['Your friend is going to a rock concert next week.',['Did you enjoy the concert?','Which band is playing?','Do you like music?'],'Which band is playing?','Концерт ещё впереди — нельзя спрашивать, понравился ли он.'],
['Your friend has started volunteering at an animal shelter.',['Do you like animals?','Will you volunteer one day?','What do you do there?'],'What do you do there?','Друг уже волонтёрит — вопрос о том, что он делает сейчас.'],
['Your friend is moving to a new flat next month.',['How many rooms are there in your new flat?','How many rooms did you have last year?','Do you like flats?'],'How many rooms are there in your new flat?','Новость — о новой квартире. Вопрос о ней, а не о прошлом.'],
['Your friend has won a school poetry competition.',['What will your poem be about?','What was your poem about?','Do you like poetry?'],'What was your poem about?','Конкурс уже прошёл, стихотворение написано — Past Simple.'],
['Your friend’s class is planning a trip to a science museum.',['When are you going there?','When did you go there?','Are you excited about it?'],'When are you going there?','Поездка запланирована — Present Continuous для планов.'],
['Your friend has adopted a puppy.',['Would you like to have a dog?','What breed is it?','Do you like pets?'],'What breed is it?','Щенок уже есть — спрашиваем о нём самом.'],
['Your friend is learning to play the guitar.',['Who taught you?','Is music difficult?','Who is teaching you?'],'Who is teaching you?','Учится сейчас — Present Continuous, а не прошлое.']
]);

const WEAK=K([
['Charity fair · Which question is weak?',['Where will it take place?','What will you sell there?','Do you think you’ll like it?'],'Do you think you’ll like it?','Вопрос об ощущениях, повторяет «Are you excited?». Нужна новая информация о ярмарке.'],
['New camera (already bought) · Which question is weak?',['What brand is it?','Which camera would you prefer?','Where did you buy it?'],'Which camera would you prefer?','Камера уже куплена — вопрос о выборе не подходит.'],
['Robotics competition · Which question is weak?',['How many teams are taking part?','Do you like robots?','When will the winners be announced?'],'Do you like robots?','Общий вопрос, не о соревновании.'],
['Trip to Spain last month · Which question is weak?',['Where are you going to travel?','Which cities did you visit?','What was the weather like?'],'Where are you going to travel?','Новость — о прошедшей поездке. Вопрос о будущих планах не по теме.'],
['School play next Friday · Which question is weak?',['Who are you going to play?','Did the audience like it?','Where will it be shown?'],'Did the audience like it?','Спектакль ещё не прошёл — прошедшее время не подходит.'],
['New part-time job · Which question is weak?',['What do you do there?','How many hours a week do you work?','Do you like jobs?'],'Do you like jobs?','Слишком общий вопрос, ничего не узнаём о работе друга.'],
['Cooking course · Which question is weak?',['Do you like food?','What dishes have you learned to cook?','How long does the course last?'],'Do you like food?','Общий вопрос, не о курсе.'],
['Football tournament next weekend · Which question is weak?',['Which teams will play?','Who won the tournament?','Where will it take place?'],'Who won the tournament?','Турнир ещё впереди — нельзя спрашивать, кто победил.'],
['Family trip to the mountains · Which question is weak?',['How long will you stay there?','Where will you stay?','Where will you sleep?'],'Where will you sleep?','Повторяет вопрос «Where will you stay?» — два вопроса об одном.'],
['Friend’s new bike · Which question is weak?',['What colour is it?','What colour would you like?','Where did you buy it?'],'What colour would you like?','Велосипед уже куплен — вопрос о желании не подходит.']
]);

const RULE='<div class="task" style="font-family:&quot;PT Serif&quot;,Georgia,serif;font-size:19px;line-height:1.55"><b>Три вопроса о новости друга</b><br>'+
'1. <b>Где / когда?</b> — Where / When…?<br>'+
'2. <b>Что именно?</b> — What / Which / How many…?<br>'+
'3. <b>Кто / зачем / как?</b> — Who / Why / How…?<br>'+
'<br><b>Проверь время:</b> уже было → Past Simple; идёт сейчас → Present; впереди → will / going to / Present Continuous.<br>'+
'<b>Не задавай:</b> «Do you like…?», «Are you excited?» и два вопроса об одном и том же.</div>';

window.w5EmailStep=function(i){
 if(i===0)return ['Письмо 37 · Choose the best question · 12','10',RULE+KQ.kahoot(BEST,{})];
 if(i===2)return ['Письмо 37 · Find the weak question · 10','10',KQ.kahoot(WEAK,{})];
 return null;
};
})();

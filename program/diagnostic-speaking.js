(function () {
  'use strict';

  const science = window.FIPI_TOPICS.find(topic => topic.id === 'science');
  const ad = window.FIPI_BANK2.find(item => item.n === 26);
  const project = window.FIPI_BANK4.find(item => item.n === 29);
  const tasks = [
    {
      html: '<h2 id="task-title">Task 1. Reading aloud</h2><p>Read the text silently. Then read it aloud.</p><p>' + science.read + '</p>',
      limits: '1:30 на подготовку · 1:30 на чтение',
      stages: [['Подготовка', 90], ['Чтение вслух', 90]]
    },
    {
      html: '<h2 id="task-title">Task 2. Direct questions</h2>' +
        '<img class="ad" src="../fipi/img/bank2-26.jpg" alt="A boy holding a tablet">' +
        '<p><strong>' + ad.title + '</strong></p><p>' + ad.intro +
        ' Ask four direct questions to find out about the following:</p><ol><li>' +
        ad.points.join('</li><li>') + '</li></ol>',
      limits: '1:30 на подготовку · по 20 секунд на вопрос',
      stages: [['Подготовка', 90], ...ad.points.map((_, i) => ['Вопрос ' + (i + 1), 20])]
    },
    {
      html: '<h2 id="task-title">Task 3. Interview</h2>' +
        '<p>You are taking part in a survey about the Internet. Listen to the interviewer and answer five questions. ' +
        'Give a full answer in two or three sentences. You have 40 seconds after each question.</p>' +
        '<audio id="interview" controls preload="metadata" aria-label="Interview about the Internet" src="../fipi/audio/iv18.mp3"></audio>',
      limits: 'В записи есть паузы для ответов.'
    },
    {
      html: '<h2 id="task-title">Task 4. Voice message</h2>' +
        '<p>You and your friend are doing a school project called <strong>“' + project.project +
        '”</strong>. You have found two photos but cannot send them at the moment. Leave your friend a voice message about your choice. In your message:</p>' +
        '<ul><li>briefly describe the photos, link them to the project and point out the difference between them;</li>' +
        '<li>mention one or two advantages of each of the two gadgets used to connect to the Internet;</li>' +
        '<li>mention one or two disadvantages of each gadget;</li>' +
        '<li>say which of the two gadgets you prefer for using the Internet and explain why.</li></ul>' +
        '<p>Speak for no more than 3 minutes (12–15 sentences).</p>' +
        '<figure><img class="photos" src="../fipi/img/bank4-29.jpg" alt="Photo 1: a woman using a laptop. Photo 2: a girl wearing headphones and using a phone.">' +
        '<figcaption class="photo-labels"><span>Photo 1</span><span>Photo 2</span></figcaption></figure>',
      limits: '2:30 на подготовку · 3:00 на ответ',
      stages: [['Подготовка', 150], ['Ответ', 180]]
    }
  ];

  const get = id => document.getElementById(id);
  const tabs = [...document.querySelectorAll('nav button')];
  const task = get('task');
  const phase = get('phase');
  const clock = get('clock');
  const start = get('start');
  const reset = get('reset');
  const next = get('next');
  let selected = 0;
  let interval;
  let deadline;
  let stage = 0;
  let remaining = 0;

  function display(seconds) {
    const value = Math.max(0, Math.ceil(seconds));
    clock.textContent = Math.floor(value / 60) + ':' + String(value % 60).padStart(2, '0');
  }

  function tick() {
    const stages = tasks[selected].stages;
    while (performance.now() >= deadline) {
      stage += 1;
      if (stage === stages.length) {
        clearInterval(interval);
        interval = undefined;
        start.disabled = true;
        phase.textContent = 'Время вышло';
        display(0);
        return;
      }
      deadline += stages[stage][1] * 1000;
    }
    phase.textContent = stages[stage][0];
    remaining = (deadline - performance.now()) / 1000;
    display(remaining);
  }

  function select(index) {
    get('interview')?.pause();
    clearInterval(interval);
    interval = undefined;
    selected = index;
    stage = 0;
    tabs.forEach((tab, i) => tab.setAttribute('aria-current', i === index ? 'step' : 'false'));
    task.innerHTML = tasks[index].html;
    get('limits').textContent = tasks[index].limits;
    start.disabled = false;
    start.textContent = 'Начать';
    next.textContent = index === 3 ? 'К разбору' : 'Далее';
    const audio = get('interview');
    if (audio) {
      const updateAudio = () => {
        if (!audio.isConnected) return;
        if (audio.error) {
          phase.textContent = 'Аудио недоступно. Откройте запись отдельно.';
          start.disabled = true;
          clock.textContent = '—';
          if (!get('audio-fallback')) {
            const link = document.createElement('a');
            link.id = 'audio-fallback';
            link.href = audio.getAttribute('src');
            link.textContent = 'Открыть аудио';
            audio.after(link);
          }
          return;
        }
        phase.textContent = audio.ended ? 'Интервью окончено' :
          audio.paused ? '5 вопросов · по 40 секунд' : 'Слушайте и отвечайте';
        start.textContent = audio.paused ? (audio.currentTime && !audio.ended ? 'Продолжить' : 'Начать') : 'Пауза';
        if (Number.isFinite(audio.duration)) display(audio.duration - audio.currentTime);
      };
      phase.textContent = '5 вопросов · по 40 секунд';
      clock.textContent = '—';
      for (const event of ['loadedmetadata', 'timeupdate', 'play', 'pause', 'ended', 'error']) {
        audio.addEventListener(event, updateAudio);
      }
      return;
    }
    remaining = tasks[index].stages[0][1];
    phase.textContent = 'Подготовка';
    display(remaining);
  }

  start.addEventListener('click', () => {
    const audio = get('interview');
    if (audio) {
      if (audio.paused) audio.play().catch(() => { phase.textContent = 'Откройте запись кнопкой на плеере.'; });
      else audio.pause();
      return;
    }
    if (interval !== undefined) {
      tick();
      if (interval === undefined) return;
      clearInterval(interval);
      interval = undefined;
      phase.textContent = 'Пауза · ' + tasks[selected].stages[stage][0];
      start.textContent = 'Продолжить';
      return;
    }
    deadline = performance.now() + remaining * 1000;
    interval = setInterval(tick, 150);
    start.textContent = 'Пауза';
    tick();
  });

  reset.addEventListener('click', () => select(selected));
  next.addEventListener('click', () => {
    if (selected < 3) {
      select(selected + 1);
      tabs[selected].focus();
    } else {
      get('teacher').open = true;
      get('teacher').querySelector('summary').focus();
    }
  });
  tabs.forEach((tab, i) => tab.addEventListener('click', () => {
    if (i !== selected) select(i);
  }));

  const marks = get('marks');
  const fields = [...marks.querySelectorAll('input')];
  const notes = get('notes');
  const key = 'teacherDiagnosticV1';
  const read = () => JSON.parse(localStorage.getItem(key) || '{}');
  function showTotal() {
    const count = fields.filter(field => field.value !== '' && field.validity.valid);
    const total = count.reduce((sum, field) => sum + Number(field.value), 0);
    get('total').textContent = count.length === 4 ? total + ' / 20. ' :
      'Заполнено ' + count.length + ' из 4. ';
  }
  try {
    const saved = read();
    fields.forEach(field => { field.value = saved.scores?.[field.name] ?? ''; });
    notes.value = saved.speaking20261128Notes ?? '';
  } catch {}
  marks.addEventListener('input', () => {
    get('saved').textContent = '';
    showTotal();
  });
  marks.addEventListener('submit', event => {
    event.preventDefault();
    showTotal();
    try {
      const saved = read();
      const scores = { ...saved.scores };
      fields.forEach(field => {
        if (field.value === '') delete scores[field.name];
        else scores[field.name] = Number(field.value);
      });
      localStorage.setItem(key, JSON.stringify({ ...saved, scores, speaking20261128Notes: notes.value }));
      get('saved').textContent = 'Сохранено в этом браузере.';
    } catch {
      get('saved').textContent = 'Браузер не разрешил сохранить результаты.';
    }
  });
  showTotal();
  select(0);
})();

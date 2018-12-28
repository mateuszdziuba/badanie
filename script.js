const lists = [
  'lotnisko',
  'wypadek',
  'areszt',
  'sniadanie',
  'lazienka'
  // 'kasyno',
  // 'koncert',
  // 'gospodarstwo',
  // 'pogrzeb',
  // 'silownia',
  // 'kino',
  // 'wojna',
  // 'gniew',
  // 'krzeslo',
  // 'miasto',
  // 'zimno',
  // 'szklanka',
  // 'lekarz',
  // 'gora',
  // 'igla',
  // 'szorstki',
  // 'rzeka',
  // 'powolny',
  // 'zapach',
  // 'dym',
  // 'miekki',
  // 'slodki',
  // 'kosz',
  // 'okno',
  // 'spac',
  // 'czarny',
  // 'chleb',
  // 'stopa',
  // 'owoc',
  // 'dziewczyna',
  // 'wysoki',
  // 'mezczyzna',
  // 'muzyka',
  // 'pajak',
  // 'zlodziej'
];

const lotnisko = {
  words: [
    'krzesła',
    'bagaż',
    'paszporty',
    'piloci',
    'samoloty',
    'restauracje',
    'pas startowy',
    'ochrona',
    'taksówki',
    'terminal',
    'bilety',
    'podróżnicy'
  ],
  answers: {
    critical: 'lotnisko',
    error: []
  }
};

const wypadek = {
  words: [
    'ambulans',
    'krew',
    'kraksa',
    'szkoda',
    'straża',
    'szkło',
    'obrażnia',
    'ratownik medyczny',
    'policja',
    'droga',
    'ofiary'
  ],
  answers: {
    critical: 'wypadek',
    error: []
  }
};

const areszt = {
  words: [
    'kaucja',
    'zarzuty',
    'sąd',
    'przestępstwo',
    'detektyw',
    'dowód',
    'kajdanki',
    'więzienie',
    'prawnik',
    'policjant',
    'podejrzany',
    'nakaz'
  ],
  answers: {
    critical: 'areszt',
    error: []
  }
};

const sniadanie = {
  words: [
    'wędlina',
    'owsianka',
    'jedzenie',
    'kawa',
    'jajka',
    'owoce',
    'sok',
    'mleko',
    'naleśniki',
    'talerz',
    'kanapka',
    'tost'
  ],
  answers: {
    critical: 'śniadanie',
    error: []
  }
};

const lazienka = {
  words: [
    'kąpiel',
    'lustro',
    'szampon',
    'prysznic',
    'umywalka',
    'mydło',
    'toaleta',
    'szczoteczka',
    'ręcznik',
    'wanna',
    'ubikacja',
    'woda'
  ],
  answers: {
    critical: 'łazienka',
    error: []
  }
};

const kasyno = {
  words: [
    'alkohol',
    'poker',
    'karty',
    'żetony',
    'ruletka',
    'diler',
    'hazardzista',
    'Las Vegas',
    'światła',
    'pieniądze',
    'blackjack',
    'jednoręki bandyta',
    'stoły'
  ],
  answers: {
    critical: 'kasyno',
    error: []
  }
};

const koncert = {
  words: [
    'zespół',
    'fani',
    'zapalniczki',
    'mikrofon',
    'muzyka',
    'dym',
    'gwiazda',
    'fajerwerki',
    'głośnik',
    'scena',
    'bilet'
  ],
  answers: {
    critical: 'koncert',
    error: []
  }
};
const gospodarstwo = {
  words: [
    'stodoła',
    'krowa',
    'płot',
    'pole',
    'siano',
    'dom',
    'błoto',
    'świnia',
    'widły',
    'kogut',
    'obora',
    'stajnia',
    'traktor'
  ],
  answers: {
    critical: 'gospodarstwo',
    error: []
  }
};

const pogrzeb = {
  words: [
    'cmentarz',
    'trumna',
    'śmierć',
    'ziemia',
    'mogiła',
    'kwiaty',
    'nagrobek',
    'karawan',
    'ksiądz',
    'grabarz',
    'żałoba'
  ],
  answers: {
    critical: 'pogrzeb',
    error: []
  }
};
const silownia = {
  words: [
    'sportowcy',
    'koszykówka',
    'rower',
    'ćwiczenie',
    'szatnia',
    'maty',
    'bieżnia',
    'pot',
    'trener',
    'ławeczka',
    'bieganie',
    'ciężary'
  ],
  answers: {
    critical: 'siłownia',
    error: []
  }
};

const kino = {
  words: [
    'aktorzy',
    'widownia',
    'kostiumy',
    'ciemność',
    'reżyser',
    'filmy',
    'projektor',
    'ekran',
    'siedzenia',
    'popcorn',
    'bilet'
  ],
  answers: {
    critical: 'kino',
    error: []
  }
};

const wojna = {
  words: [
    'wojsko',
    'artyleria',
    'bomby',
    'państwa',
    'karabiny',
    'pociski',
    'wróg',
    'pokój',
    'żołnierz',
    'czołgi',
    'okopy',
    'bronie'
  ],
  answers: {
    critical: 'wojna',
    error: []
  }
};

const gniew = {
  words: [
    'wściekły',
    'strach',
    'nienawiść',
    'szalony',
    'furia',
    'pasja',
    'złość',
    'amok',
    'wrogość',
    'podły',
    'szczęśliwy',
    'spokojny',
    'emocja'
  ],
  answers: {
    critical: 'gniew',
    error: []
  }
};
const krzeslo = {
  words: [
    'stół',
    'siedzieć',
    'nogi',
    'miejsce',
    'kanapa',
    'biurko',
    'fotel',
    'sofa',
    'drewno',
    'oparcie',
    'obracać',
    'bujany',
    'ławka'
  ],
  answers: {
    critical: 'krzesło',
    error: []
  }
};

const miasto = {
  words: [
    'miejscowość',
    'zatłoczony',
    'województwo',
    'stolica',
    'ulice',
    'metro',
    'wieś',
    'Warszawa',
    'państwo',
    'metropolia',
    'duży',
    'Kraków',
    'przedmieścia',
    'powiat'
  ],
  answers: {
    critical: 'miasto',
    error: []
  }
};

const zimno = {
  words: [
    'gorący',
    'śnieg',
    'ciepło',
    'zima',
    'lód',
    'wilgotny',
    'mróz',
    'polarny',
    'upał',
    'pogoda',
    'powietrze',
    'szron',
    'zamarzać'
  ],
  answers: {
    critical: 'zimno',
    error: []
  }
};

const szklanka = {
  words: [
    'filiżanka',
    'kubek',
    'spodek',
    'herbata',
    'podkładka',
    'kawa',
    'słomka',
    'kieliszek',
    'zupa',
    'kufel',
    'pić',
    'plastikowy',
    'łyk'
  ],
  answers: {
    critical: 'szklanka',
    error: []
  }
};

const lekarz = {
  words: [
    'pielęgniarka',
    'chory',
    'prawnik',
    'lekarstwo',
    'zdrowie',
    'szpital',
    'dentysta',
    'doktor',
    'pacjent',
    'gabinet',
    'stetoskop',
    'chirurg',
    'klinika',
    'kuracja'
  ],
  answers: {
    critical: 'lekarz',
    error: []
  }
};

const gora = {
  words: [
    'pagórek',
    'dolina',
    'wspinaczka',
    'szczyt',
    'wierzchołek',
    'równina',
    'kopiec',
    'lodowiec',
    'koza',
    'lodowiec',
    'alpinista',
    'łańcuch',
    'stromy',
    'urwisko',
    'narty'
  ],
  answers: {
    critical: 'góra',
    error: []
  }
};

const igla = {
  words: [
    'nić',
    'sosna',
    'oko',
    'szycie',
    'ostry',
    'czubek',
    'ukłucie',
    'naparstek',
    'stóg siana',
    'cierń',
    'kolec',
    'ból',
    'zastrzyk',
    'strzykawka',
    'ubranie',
    'dzierganie'
  ],
  answers: {
    critical: 'igła',
    error: []
  }
};

const szorstki = {
  words: [
    'gładki',
    'nierówny',
    'twardy',
    'papier ścierny',
    'wyszczerbiony',
    'chropowaty',
    'wyboisty',
    'surowy',
    'piach',
    'deski',
    'grunt',
    'żwir'
  ],
  answers: {
    critical: 'szorstki',
    error: []
  }
};

const rzeka = {
  words: [
    'woda',
    'strumień',
    'jezioro',
    'Wisła',
    'łódź',
    'fala',
    'pływać',
    'nurt',
    'brzeg',
    'barka',
    'zatoka',
    'potok',
    'ryba',
    'most',
    'meander'
  ],
  answers: {
    critical: 'rzeka',
    error: []
  }
};
const powolny = {
  words: [
    'szybki',
    'ospały',
    'stop',
    'ślamazarny',
    'ślimak',
    'ostrożny',
    'opóźnienie',
    'korek',
    'żółw',
    'niezdecydowany',
    'prędkość',
    'żwawy',
    'ociężały',
    'czekać'
  ],
  answers: {
    critical: 'powolny',
    error: []
  }
};
const zapach = {
  words: [
    'nos',
    'oddychać',
    'wąchać',
    'aromat',
    'słuch',
    'widzieć',
    'nozdrze',
    'woń',
    'posmak',
    'smród',
    'fetor',
    'odór',
    'perfumy',
    'sole',
    'różany'
  ],
  answers: {
    critical: 'zapach',
    error: []
  }
};

const dym = {
  words: [
    'papieros',
    'kłąb',
    'płomień',
    'zanieczyszczenie',
    'popiół',
    'fajka',
    'smog',
    'ogień',
    'tytoń',
    'smród',
    'komin',
    'płuca',
    'płomienie',
    'plama'
  ],
  answers: {
    critical: 'dym',
    error: []
  }
};

const miekki = {
  words: [
    'twardy',
    'lekki',
    'włochaty',
    'puszysty',
    'poduszka',
    'plusz',
    'wata',
    'futro',
    'dotyk',
    'piórko',
    'puchowy',
    'kociak',
    'skóra',
    'delikatny',
    'czuły'
  ],
  answers: {
    critical: 'miękki',
    error: []
  }
};

const slodki = {
  words: [
    'kwaśny',
    'cukierek',
    'cukier',
    'gorzki',
    'smaczny',
    'smak',
    'ząb',
    'miły',
    'miód',
    'napój',
    'czekolada',
    'ciasto',
    'tort',
    'pączek'
  ],
  answers: {
    critical: 'słodki',
    error: []
  }
};

const kosz = {
  words: [
    'śmieci',
    'odpad',
    'puszka',
    'śmietnik',
    'ściek',
    'worek',
    'złom',
    'szmelc',
    'zamiatać',
    'sterta',
    'wyrzucić',
    'wysypisko',
    'gruz'
  ],
  answers: {
    critical: 'kosz',
    error: []
  }
};

const okno = {
  words: [
    'drzwi',
    'szkło',
    'szyba',
    'cień',
    'listwa',
    'parapet',
    'dom',
    'otwarte',
    'zasłona',
    'rama',
    'widok',
    'powiew',
    'żaluzja',
    'firanka',
    'roleta'
  ],
  answers: {
    critical: 'okno',
    error: []
  }
};

const spac = {
  words: [
    'łóżko',
    'odpoczynek',
    'jawa',
    'zmęczony',
    'sen',
    'budzić',
    'drzemka',
    'kocyk',
    'chrapać',
    'spokój',
    'ziewać',
    'ospały'
  ],
  answers: {
    critical: 'spać',
    error: []
  }
};
const czarny = {
  words: [
    'biały',
    'ciemny',
    'kot',
    'osmalony',
    'noc',
    'pogrzeb',
    'kolor',
    'żałoba',
    'niebieski',
    'śmierć',
    'tusz',
    'dno',
    'węgiel',
    'brązowy',
    'szary'
  ],
  answers: {
    critical: 'czarny',
    error: []
  }
};

const chleb = {
  words: [
    'masło',
    'pożywienie',
    'jeść',
    'kanapka',
    'zboże',
    'wędlina',
    'mleko',
    'mąka',
    'dżem',
    'ciasto',
    'skórka',
    'kromka',
    'wino',
    'bochenek',
    'tost'
  ],
  answers: {
    critical: 'chleb',
    error: []
  }
};

const stopa = {
  words: [
    'but',
    'dłoń',
    'palec',
    'kopnięcie',
    'sandały',
    'piłka nożna',
    'spacer',
    'kostka',
    'ramię',
    'pantofel',
    'skarpeta',
    'zapach',
    'usta'
  ],
  answers: {
    critical: 'stopa',
    error: []
  }
};

const owoc = {
  words: [
    'jabłko',
    'warzywo',
    'pomarańcza',
    'kiwi',
    'cytrus',
    'dojrzały',
    'gruszka',
    'banan',
    'jagoda',
    'wiśnia',
    'koszyk',
    'sok',
    'sałatka',
    'miska',
    'koktajl'
  ],
  answers: {
    critical: 'owoc',
    error: []
  }
};

const dziewczyna = {
  words: [
    'chłopak',
    'lalki',
    'kobieta',
    'młoda',
    'sukienka',
    'ładna',
    'włosy',
    'siostrzenica',
    'taniec',
    'piękna',
    'urocza',
    'randka',
    'ciocia',
    'córka',
    'siostra'
  ],
  answers: {
    critical: 'dziewczyna',
    error: []
  }
};

const wysoki = {
  words: [
    'niski',
    'chmury',
    'góra',
    'rosły',
    'wieża',
    'skakać',
    'ponad',
    'budynek',
    'urwisko',
    'klif',
    'niebo',
    'nad',
    'samolot',
    'wznosić się',
    'wieżowiec'
  ],
  answers: {
    critical: 'wysoki',
    error: []
  }
};

const krol = {
  words: [
    'królowa',
    'Anglia',
    'korona',
    'książe',
    'Karol',
    'dyktator',
    'pałac',
    'tron',
    'szachy',
    'władza',
    'poddani',
    'monarcha',
    'koronny',
    'lider',
    'panować'
  ],
  answers: {
    critical: 'król',
    error: []
  }
};

const mezczyzna = {
  words: [
    'kobieta',
    'mąż',
    'wujek',
    'dama',
    'samiec',
    'ojciec',
    'silny',
    'przyjaciel',
    'broda',
    'osoba',
    'przystojny',
    'mięśnie',
    'garnitur',
    'stary'
  ],
  answers: {
    critical: 'mężczyzna',
    error: []
  }
};

const muzyka = {
  words: [
    'nuta',
    'dźwięk',
    'fortepian',
    'śpiewać',
    'radio',
    'zespół',
    'melodia',
    'trąbka',
    'koncert',
    'instrument',
    'symfonia',
    'jazz',
    'orkiestra',
    'sztuka',
    'rytm'
  ],
  answers: {
    critical: 'muzyka',
    error: []
  }
};

const pajak = {
  words: [
    'sieć',
    'owad',
    'robak',
    'strach',
    'latać',
    'pełzać',
    'tarantula',
    'jad',
    'ugryzienie',
    'przerażający',
    'zwierzę',
    'brzydki',
    'odnóża',
    'mały',
    'fobia'
  ],
  answers: {
    critical: 'pająk',
    error: []
  }
};

const zlodziej = {
  words: [
    'kraść',
    'rabuś',
    'oszust',
    'włamywacz',
    'pieniądze',
    'policjant',
    'zły',
    'obrabować',
    'więzienie',
    'pistolet',
    'łotr',
    'przestępstwo',
    'bank',
    'bandyta',
    'kryminalista'
  ],
  answers: {
    critical: 'złodziej',
    error: []
  }
};

// losowanie listy

const randomList = () => {
  const nr = Math.floor(Math.random() * lists.length);
  list = eval(lists[nr]);
  lists.splice(nr, 1);
  return list;
};

// wyswietlanie listy

const showList = list => {
  document.getElementById('button').style.visibility = 'hidden';
  document.getElementById('test').style.visibility = 'hidden';
  let index = 0;
  const interval = setInterval(() => {
    document.getElementById('text').innerHTML = list.words[index++];
    if (index == list.words.length) {
      clearInterval(interval);
      document.getElementById('text').innerHTML = '';
      genQuiz(list);
      const timeout = setTimeout(() => {
        checkQuiz(list);
        document.getElementById('quiz').innerHTML = '';
        if (lists.length > 0) showList(randomList());
        else {
          clearTimeout(timeout);
          showStats();
          genRaport();
        }
      }, 45000);
    }
  }, 300);
};

// mieszanie listy

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// generowanie zadania

const genQuiz = list => {
  let answers = [];
  answers = answers.concat(
    list.words,
    list.answers.critical,
    list.answers.error
  );
  answers = shuffleArray(answers);
  for (let answer in answers) {
    let label = document.createElement('label');
    let description = document.createTextNode(answers[answer]);
    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.id = answers[answer];
    label.htmlFor = answers[answer];

    label.appendChild(description);

    document.getElementById('quiz').appendChild(checkbox);
    document.getElementById('quiz').appendChild(label);
  }
};

// sprawdzanie odpowiedzi
let chart = [];
let totalCorrect = 0;
let totalCritical = 0;
let totalError = 0;

const checkQuiz = list => {
  const answers = [];
  const selected = document.querySelectorAll('input:checked');
  for (let i = 0; i < selected.length; i++) {
    answers.push(selected[i].id);
  }
  console.log(answers);
  if (answers.length == 0) {
    console.log('nic nie zaznaczono');
  }
  let correct = 0;
  let critical = 0;
  let error = 0;

  for (let i = 0; i < answers.length; i++) {
    if (list.words.indexOf(answers[i]) != -1) {
      console.log('zaznaczono wyraz z listy');
      correct++;
    } else if (list.answers.critical.indexOf(answers[i]) != -1) {
      console.log('zaznaczono przynete krytyczna');
      critical++;
    } else if (list.answers.error.indexOf(answers[i]) != -1) {
      console.log('zaznaczono bledny wyraz');
      error++;
    }
  }
  totalCorrect += correct;
  totalCritical += critical;
  totalError += error;
  let arr = [];
  arr = arr.concat(list.answers.critical, answers, correct, critical, error);
  chart.push(arr);
};

// const showStats = () => {
//   console.log(chart, totalCorrect, totalCritical, totalError);
// };

// wyswietlanie kwestionariusza

const genRaport = () => {
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  let q1 = document.createTextNode('jak okreslisz swoj nastroj?');
  let q2 = document.createTextNode('płeć');
  let q3 = document.createTextNode('wiek');
  const moods = ['pozytywny', 'negatywny', 'neutralny'];
  const genders = ['mężczyzna', 'kobieta'];

  document.getElementById('quiz').appendChild(div1);
  div1.appendChild(p1);
  p1.appendChild(q1);
  for (let mood in moods) {
    let label = document.createElement('label');
    let description = document.createTextNode(moods[mood]);
    let checkbox = document.createElement('input');

    checkbox.type = 'radio';
    checkbox.name = 'mood';
    checkbox.id = moods[mood];
    label.htmlFor = moods[mood];

    label.appendChild(description);

    div1.appendChild(checkbox);
    div1.appendChild(label);
  }
  document.getElementById('quiz').appendChild(div2);
  div2.appendChild(p2);
  p2.appendChild(q2);
  for (let gender in genders) {
    let label = document.createElement('label');
    let description = document.createTextNode(genders[gender]);
    let checkbox = document.createElement('input');

    checkbox.type = 'radio';
    checkbox.name = 'gender';
    checkbox.id = genders[gender];
    label.htmlFor = genders[gender];

    label.appendChild(description);

    div2.appendChild(checkbox);
    div2.appendChild(label);
  }
  document.getElementById('quiz').appendChild(div3);
  div3.appendChild(p3);
  p3.appendChild(q3);
  age = document.createElement('input');
  age.type = 'number';
  age.id = 'age';
  div3.appendChild(age);

  button = document.createElement('button');
  end = document.createTextNode('koniec');
  button.appendChild(end);
  document.getElementById('quiz').appendChild(button);
  button.onclick = onClick;
};

// generowanie pliku z wynikami

onClick = () => {
  let moods = document.getElementsByName('mood');
  let mood = '';
  for (let i = 0; i < moods.length; i++) {
    if (moods[i].checked) {
      mood = moods[i].id;
      break;
    }
  }
  let genders = document.getElementsByName('gender');
  let gender = '';
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      gender = genders[i].id;
      break;
    }
  }
  let age = document.getElementById('age').value;
  document.getElementById('quiz').innerHTML = 'Dziękuję za udział w badaniu!';
  function SaveAsFile(t, f, m) {
    try {
      var b = new Blob([t], { type: m });
      saveAs(b, f);
    } catch (e) {
      window.open('data:' + m + ',' + encodeURIComponent(t), '_blank', '');
    }
  }
  let result = '';
  for (element in chart) {
    result += chart[element] + '\r\n';
  }

  SaveAsFile(
    'Nastrój: ' +
      mood +
      '\r\n' +
      'Płeć: ' +
      gender +
      '\r\n' +
      'Wiek: ' +
      age +
      '\r\n' +
      '\r\n' +
      'Wynik badania: ' +
      '\r\n' +
      result +
      '\r\n' +
      'Wybrane pozytywne: ' +
      totalCorrect +
      '\r\n' +
      'Wybrane przynęty krytyczne: ' +
      totalCritical +
      '\r\n' +
      'Wybrane przynęty błędne: ' +
      totalError,
    'Raport' + mood + age + gender[1] + '.txt',
    'text/plain;charset=utf-8'
  );
};

const showTestList = list => {
  document.getElementById('test').style.visibility = 'hidden';
  document.getElementById('button').style.visibility = 'hidden';
  let index = 0;
  const interval = setInterval(() => {
    document.getElementById('text').innerHTML = list.words[index++];
    if (index == list.words.length) {
      clearInterval(interval);
      document.getElementById('text').innerHTML = '';
      genQuiz(list);
      setTimeout(() => {
        document.getElementById('quiz').innerHTML = '';
        document.getElementById('button').style.visibility = 'visible';
      }, 45000);
    }
  }, 300);
};

filesaver.js;

var saveAs =
  saveAs ||
  (function(e) {
    'use strict';
    if (
      typeof e === 'undefined' ||
      (typeof navigator !== 'undefined' &&
        /MSIE [1-9]\./.test(navigator.userAgent))
    ) {
      return;
    }
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e;
      },
      r = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
      o = 'download' in r,
      a = function(e) {
        var t = new MouseEvent('click');
        e.dispatchEvent(t);
      },
      i = /constructor/i.test(e.HTMLElement) || e.safari,
      f = /CriOS\/[\d]+/.test(navigator.userAgent),
      u = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t;
        }, 0);
      },
      s = 'application/octet-stream',
      d = 1e3 * 40,
      c = function(e) {
        var t = function() {
          if (typeof e === 'string') {
            n().revokeObjectURL(e);
          } else {
            e.remove();
          }
        };
        setTimeout(t, d);
      },
      l = function(e, t, n) {
        t = [].concat(t);
        var r = t.length;
        while (r--) {
          var o = e['on' + t[r]];
          if (typeof o === 'function') {
            try {
              o.call(e, n || e);
            } catch (a) {
              u(a);
            }
          }
        }
      },
      p = function(e) {
        if (
          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            e.type
          )
        ) {
          return new Blob([String.fromCharCode(65279), e], { type: e.type });
        }
        return e;
      },
      v = function(t, u, d) {
        if (!d) {
          t = p(t);
        }
        var v = this,
          w = t.type,
          m = w === s,
          y,
          h = function() {
            l(v, 'writestart progress write writeend'.split(' '));
          },
          S = function() {
            if ((f || (m && i)) && e.FileReader) {
              var r = new FileReader();
              r.onloadend = function() {
                var t = f
                  ? r.result
                  : r.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
                var n = e.open(t, '_blank');
                if (!n) e.location.href = t;
                t = undefined;
                v.readyState = v.DONE;
                h();
              };
              r.readAsDataURL(t);
              v.readyState = v.INIT;
              return;
            }
            if (!y) {
              y = n().createObjectURL(t);
            }
            if (m) {
              e.location.href = y;
            } else {
              var o = e.open(y, '_blank');
              if (!o) {
                e.location.href = y;
              }
            }
            v.readyState = v.DONE;
            h();
            c(y);
          };
        v.readyState = v.INIT;
        if (o) {
          y = n().createObjectURL(t);
          setTimeout(function() {
            r.href = y;
            r.download = u;
            a(r);
            h();
            c(y);
            v.readyState = v.DONE;
          });
          return;
        }
        S();
      },
      w = v.prototype,
      m = function(e, t, n) {
        return new v(e, t || e.name || 'download', n);
      };
    if (typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob) {
      return function(e, t, n) {
        t = t || e.name || 'download';
        if (!n) {
          e = p(e);
        }
        return navigator.msSaveOrOpenBlob(e, t);
      };
    }
    w.abort = function() {};
    w.readyState = w.INIT = 0;
    w.WRITING = 1;
    w.DONE = 2;
    w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null;
    return m;
  })(
    (typeof self !== 'undefined' && self) ||
      (typeof window !== 'undefined' && window) ||
      this.content
  );
if (typeof module !== 'undefined' && module.exports) {
  module.exports.saveAs = saveAs;
} else if (
  typeof define !== 'undefined' &&
  define !== null &&
  define.amd !== null
) {
  define('FileSaver.js', function() {
    return saveAs;
  });
}

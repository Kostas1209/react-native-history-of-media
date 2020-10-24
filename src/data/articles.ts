import {ComponentProps} from '../types/ComponentProps';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const articles: Article[] = [
  {
    title: 'Наскальні малюнки',
    breiflyContent:
      'Наскальні малюнки - зображення в печерах, виконані людьми епохи палеоліту, один з видів первісного мистецтва',
    article: [
      {
        type: 'text',
        text:
          "Наскальні малюнки - зображення в печерах, виконані людьми епохи палеоліту, один з видів первісного мистецтва. Печерний живопис - зображення в печерах, виконані людьми епохи палеоліту. Більшість подібних об'єктів знайдено в Європі, оскільки саме там стародавні люди були змушені жити в печерах і гротах, рятую- чись від холодів. Довгі роки сучасна цивілізація не мала уявлень про які-небудь об'єкти стародавнього живопису, проте в 1879 році археолог-любитель",
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'image',
        imageName: 'firstChronologyFirstImage',
        style: {
          width: '100%',
          height: height * 0.3,
          margin: 5,
        },
      },
      {
        type: 'text',
        text:
          "Марселіно Санс де Сау-туола разом зі своєю 9-річною дочкою в ході прогу- лянки випадково натрапив на печеру Альтаміра, скле- піння якої були прикрашені безліччю малюнків давніх людей — знахідка, що не мала аналогів вкрай потряс- ла дослідника і сподвигла його на її пильне вивчення Роком пізніше Саутуола разом зі своїм другом Хуаном Вілановим-і-П'єром з Мадридського університету опублікували результати своїх досліджень, в яких датували виконання малюнків епохою палеоліту. Багато вчених сприйняли це повідомлення вкрай неоднозначно, Саутуолу звинувачували у фальсифікації знахідок, однак пізніше подібні печери були відкриті в багатьох інших куточках планети.",
      },
      {
        type: 'image',
        imageName: 'firstChronologySecondImage',
        style: {
          width: '100%',
          height: height * 0.3,
          margin: 5,
        },
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'text',
        text: 'Цікаві посилання:',
        style: {fontSize: 17},
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'anchor',
        text: '1. Топ 10 стародавніх наскельних малюнків',
        url: 'http://vsviti.com.ua/collections/12342',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '2. Неандертальців уперше спіймали на малюванні',
        url: 'https://www.istpravda.com.ua/short/2018/03/19/152215/',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '3. Неандертальці перші художники',
        url:
          'https://zn.ua/ukr/TECHNOLOGIES/vcheni-nazvali-neandertalciv-pershimi-hudozhnikami-270244_.html',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '4. Найдавніші наскельні малюнки на планеті',
        url:
          'https://www.volyn.com.ua/news/115231-arkheolohy-vyiavyly-naidavnishi-naskelni-maliunky-na-planeti',
        style: {marginBottom: 10},
      },
    ],
    imageName: 'firstChronologyFirstImage',
  },
  {
    title: 'Книгодрукування',
    breiflyContent:
      'Йоганн Гутенберг - це німецький першодрукар. Він створив спосіб друкарства рухливими літерами',
    article: [
      {
        type: 'text',
        text:
          'Йоганн Гутенберг - німецький першодрукар. В середині 1440-х років створив спосіб друкарства рухливи- ми літерами, що зробив величезний вплив не тільки на європейську культуру, але і на всесвітню історію. Геніальний винахід Гутенберга полягало в тому, що він виготовляв з металу «рухливі» опуклі букви, вирізані в зворотному вигляді, набирав з них рядки і за допомо- гою спеціального преса відтискував на папері.',
      },
      {
        type: 'image',
        imageName: 'secondChronologyFirstImage',
        style: {
          width: '100%',
          height: height * 0.3,
          margin: 5,
        },
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'text',
        text: 'Цікаві посилання:',
        style: {fontSize: 17},
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'anchor',
        text: '1. Винахідник книгодрукування',
        url:
          'http://lib.knau.kharkov.ua/bibliotek/2010-yogann-gutenberg-vinahdnik-knigodrukuvannya.html',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '2. Людина тисячоліття',
        url:
          'https://www.dw.com/ru/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B8%D0%BE%D0%B3%D0%B0%D0%BD%D0%BD-%D0%B3%D1%83%D1%82%D0%B5%D0%BD%D0%B1%D0%B5%D1%80%D0%B3/a-1127583',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '3. Роль книгодрукування у розвитку літератури',
        url: 'https://osvita.ua/vnz/reports/culture/11328/',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '4. Винайдення книгодрукування',
        url: 'https://www.youtube.com/watch?v=wY477WgZkpI',
        style: {marginBottom: 10},
      },
    ],
    imageName: 'secondChronologyFirstImage',
  },
  {
    title: 'Фенакистископ',
    breiflyContent:
      'Фенакистископ - це лабораторний прилад для демонстрації рухомих різних малюнків',
    article: [
      {
        type: 'text',
        text:
          'Фенакистископ - це лабораторний прилад який слугує для демонстрації рухомих різних малюнків У 1832 році Жозеф Плато створив прилад оптичного обману, який пізніше був названий фенакистископ. Сам Жозеф охарактеризував свій винахід так: «... принцип дії сучасного кіно, або, скоріше, закон, на якому заснована зйомка або проектування фільмів». Прилад складається з картонного диска з прорізани- ми в ньому отворами, на якому зображені різні фігури.',
      },
      {
        type: 'breakLine',
      },
      {
        type: 'text',
        text:
          'Під час обертання диска перед дзеркалом фігури, які проглядаються в дзеркалі через отвори диска, починають робити рухи в залежності від задумки ілюстрації. Хоча, здавалося б, що вони будуть обер- татися разом з диском. Цікавий факт: майже в цей же час професор геометрії Симон фон Штампфер створив апарат, дуже схожий на фенакистископ, і назвав його «стробоскопом». Ці двоє людей не знали робіт один одного і прийшли до своїх винаходів кожен своїм шляхом.',
      },
      {
        type: 'image',
        imageName: 'thirdChronologyFirstImage',
        style: {
          width: '100%',
          height: height * 0.3,
          margin: 5,
        },
      },
      {
        type: 'image',
        imageName: 'thirdChronologySecondImage',
        style: {
          width: '100%',
          height: height * 0.3,
          margin: 5,
        },
      },
    ],
    imageName: 'thirdChronologyFirstImage',
  },
  {
    title: 'Зоотроп',
    breiflyContent:
      'Зоотроп - цей даний пристрій для демонстрації рухомих малюнків, конструкція якого була заснована',
    article: [
      {
        type: 'text',
        text:
          "Зоотроп - пристрій для демонстрації рухомих малюнків, конструкція якого заснована на персистен- ції, тобто інерції людського зору. Винахідником зоот- роп вважається Вільям Джордж Горнер, але згадки про подібне приладі зустрічаються в китайських літо- писах від 180 року нашої ери. Зоотроп є трансформа- цією фенакистископ.У зоотроп диск з отворами замінений дерев'яним або металевим барабаном, відкритим зверху, прорізаним вертикальними щілинами з боків і обертовим гори- зонтально на осі.",
      },
      {
        type: 'image',
        imageName: 'zootrop1',
        style: {
          width: '100%',
          height: height * 0.3,
        },
      },
      {
        type: 'text',
        text:
          "Зоотроп досі породжує подібні конструкції. Наприклад, в 2001 році американський студент Джошуа Сподек запатентував новий вид реклами. Прямо в тунелі метро розміщувалися підсвічені картинки, а при русі поїзда вони зливалися в рекламний фільм. У 2007 році подібний мультик з'явився в київському метро, ​​між станціями «Лук'янівська» та «Золоті ворота». Лінійний зоотроп 300-метрової довжини дозволяє побачити приблизно 20-секундний ролик. Інший приголомшливий зоотроп побудувала в 2008 році фірма Sony в італійському місті Венария для реклами телевізорів Bravia. Величезне пристрій має діаметр 10 м і важить більше 10 т. Внутрішній тор зоотроп обертається з кутовою швидкістю 44 км / год! Щовечора на цьому зоотроп венарци можуть дивитися, як знаменитий футболіст Кака віртуозно бавиться з м'ячем.",
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'text',
        text: 'Цікаві посилання:',
        style: {fontSize: 17},
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'anchor',
        text: '1. Зображення зоотропу',
        url: 'https://gifer.com/ru/gifs/zoetrope',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '2. Музей зоотропу',
        url: 'https://animamuseum.ru/blogarticle/zootrop',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '3. 8 живих скульптур',
        url:
          'http://www.lookatme.ru/mag/live/inspiration-lists/211073-zoetropes',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '4. Цікаві факти про зоотроп',
        url:
          'https://www.popmech.ru/design/9713-kinoteatr-yurskogo-perioda-chto-takoe-zootrop/',
        style: {marginBottom: 10},
      },
    ],
    imageName: 'fourthChronologyFirstImage',
  },
  {
    title: 'Фонограф',
    breiflyContent:
      'Фонограф - це перший прилад для запису та відтворення звуку. Він винайдений Томасом Едісоном',
    article: [
      {
        type: 'image',
        imageName: 'fifthChronologyFirstImage',
        style: {
          width: '100%',
          height: height * 0.3,
        },
      },
      {
        type: 'text',
        text:
          'Фонограф - перший прилад для запису і відтворення звуку. Винайдено Томасом Едісоном, представлено 21 листопада 1877 року. Звук записується на носії в формі доріжки, глибина якої пропорційна гучності звуку. Звукова доріжка фонографа розміщується по циліндричної спіралі на змінному обертовому бара- бані. При відтворенні голка, що рухається по канавці, передає коливання на пружну мембрану, яка випромінює звук. Винахід став вражаючим подією того часу; подальшим розвитком фонографа стали грамофон і патефон.',
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'text',
        text: 'Цікаві посилання:',
        style: {fontSize: 17},
      },
      {
        type: 'breakLine',
        style: {height: 10},
      },
      {
        type: 'anchor',
        text: '1. Голос 19го віку',
        url: 'https://nplus1.ru/blog/2018/02/19/phonograph',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '2.  Новий винахід століття',
        url: 'https://www.belcanto.ru/fonograf.html',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '3. Історія винаходу',
        url: 'https://ru.qwe.wiki/wiki/Phonograph',
        style: {marginBottom: 10},
      },
      {
        type: 'anchor',
        text: '4. Цікаве відео про фонограф',
        url: 'https://www.youtube.com/watch?v=j0NULtW-GTo',
        style: {marginBottom: 10},
      },
    ],
    imageName: 'fifthChronologyFirstImage',
  },
];

export interface Article {
  title: string;
  breiflyContent: string;
  article: ComponentProps[];
  imageName: string;
}

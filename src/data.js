import HTML from "../icons/html5.svg";
import CSS from "../icons/css.svg";
import JS from "../icons/javascript.svg";
import React from "../icons/jsreact.svg";

export const Data = [
  {
    id: 1,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания гиперссылки?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <a> используется для создания гиперссылок на другие страницы, файлы или ресурсы.",
  },
  {
    id: 2,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания абзаца?",
    options: ["<text>", "<paragraph>", "<p>", "<span>"],
    correctAnswerIndex: 2,
    explanation: "Тег <p> используется для создания текстового абзаца.",
  },
  {
    id: 3,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для заголовка первого уровня?",
    options: ["<heading>", "<h1>", "<head>", "<title>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <h1> обозначает заголовок первого, самого высокого уровня.",
  },
  {
    id: 4,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для вставки изображения?",
    options: ["<image>", "<picture>", "<img>", "<src>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <img> используется для добавления изображения на HTML-страницу.",
  },
  {
    id: 5,
    category: "HTML",
    difficulty: "easy",
    question: "Какой атрибут тега <img> содержит путь к изображению?",
    options: ["href", "src", "path", "url"],
    correctAnswerIndex: 1,
    explanation: "Атрибут src указывает адрес или путь к файлу изображения.",
  },
  {
    id: 6,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания маркированного списка?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <ul> создаёт маркированный список, элементы которого описываются тегами <li>.",
  },
  {
    id: 7,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания нумерованного списка?",
    options: ["<ul>", "<dl>", "<ol>", "<li>"],
    correctAnswerIndex: 2,
    explanation: "Тег <ol> создаёт упорядоченный, обычно нумерованный список.",
  },
  {
    id: 8,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег обозначает отдельный элемент списка?",
    options: ["<item>", "<list>", "<li>", "<ul>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <li> используется для создания отдельного элемента списка.",
  },
  {
    id: 9,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег содержит основное видимое содержимое страницы?",
    options: ["<head>", "<body>", "<main>", "<html>"],
    correctAnswerIndex: 1,
    explanation:
      "Внутри тега <body> размещается содержимое, отображаемое браузером.",
  },
  {
    id: 10,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег содержит метаданные и настройки HTML-документа?",
    options: ["<body>", "<header>", "<head>", "<meta>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <head> содержит метаданные, подключения стилей, заголовок страницы и другие настройки документа.",
  },
  {
    id: 11,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег задаёт название страницы во вкладке браузера?",
    options: ["<header>", "<title>", "<h1>", "<name>"],
    correctAnswerIndex: 1,
    explanation: "Содержимое тега <title> отображается во вкладке браузера.",
  },
  {
    id: 12,
    category: "HTML",
    difficulty: "easy",
    question: "Какой атрибут ссылки содержит адрес перехода?",
    options: ["src", "target", "href", "link"],
    correctAnswerIndex: 2,
    explanation:
      "Атрибут href тега <a> определяет адрес, на который ведёт ссылка.",
  },
  {
    id: 13,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для переноса строки?",
    options: ["<break>", "<br>", "<hr>", "<newline>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <br> создаёт принудительный перенос строки внутри текста.",
  },
  {
    id: 14,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег создаёт горизонтальную тематическую линию?",
    options: ["<line>", "<br>", "<hr>", "<border>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <hr> обозначает тематическое разделение содержимого и обычно отображается горизонтальной линией.",
  },
  {
    id: 15,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания кнопки?",
    options: ["<input>", "<button>", "<click>", "<btn>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <button> создаёт интерактивную кнопку с текстовым или HTML-содержимым.",
  },
  {
    id: 16,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания HTML-формы?",
    options: ["<input>", "<fieldset>", "<form>", "<section>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <form> объединяет элементы управления, предназначенные для ввода и отправки данных.",
  },
  {
    id: 17,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег обычно используется для однострочного поля ввода?",
    options: ["<input>", "<textarea>", "<form>", "<label>"],
    correctAnswerIndex: 0,
    explanation:
      "Тег <input> с подходящим атрибутом type создаёт однострочное поле ввода.",
  },
  {
    id: 18,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для многострочного ввода текста?",
    options: ["<input>", "<text>", "<textarea>", "<multiline>"],
    correctAnswerIndex: 2,
    explanation: "Тег <textarea> создаёт поле для ввода многострочного текста.",
  },
  {
    id: 19,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег связывает текстовую подпись с полем формы?",
    options: ["<span>", "<legend>", "<label>", "<caption>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <label> создаёт подпись для элемента формы и улучшает доступность интерфейса.",
  },
  {
    id: 20,
    category: "HTML",
    difficulty: "easy",
    question: "Какой атрибут задаёт альтернативный текст изображения?",
    options: ["title", "description", "alt", "label"],
    correctAnswerIndex: 2,
    explanation:
      "Атрибут alt содержит текстовое описание изображения на случай, если оно не загрузилось, и помогает скринридерам.",
  },

  {
    id: 21,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег является корневым элементом HTML-документа?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <html> является корневым элементом документа и содержит элементы <head> и <body>.",
  },
  {
    id: 22,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для подключения внешнего CSS-файла?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    correctAnswerIndex: 3,
    explanation:
      'Тег <link> с атрибутом rel="stylesheet" подключает внешний CSS-файл.',
  },
  {
    id: 23,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой тег используется для написания CSS непосредственно в HTML-документе?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <style> позволяет размещать CSS-правила внутри HTML-документа.",
  },
  {
    id: 24,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для подключения JavaScript?",
    options: ["<javascript>", "<script>", "<js>", "<code>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <script> используется для подключения внешнего JavaScript-файла или размещения кода непосредственно в документе.",
  },
  {
    id: 25,
    category: "HTML",
    difficulty: "easy",
    question: "Какой атрибут тега <script> содержит путь к JavaScript-файлу?",
    options: ["href", "src", "path", "link"],
    correctAnswerIndex: 1,
    explanation: "Атрибут src указывает путь к внешнему JavaScript-файлу.",
  },
  {
    id: 26,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для выделения важного текста?",
    options: ["<b>", "<strong>", "<important>", "<mark>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <strong> указывает, что текст имеет повышенную важность, и обычно отображается полужирным.",
  },
  {
    id: 27,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для логического акцента на тексте?",
    options: ["<i>", "<em>", "<accent>", "<strong>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <em> обозначает смысловой акцент и обычно отображается курсивом.",
  },
  {
    id: 28,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для создания таблицы?",
    options: ["<table>", "<grid>", "<tab>", "<tbody>"],
    correctAnswerIndex: 0,
    explanation: "Тег <table> является контейнером для HTML-таблицы.",
  },
  {
    id: 29,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег создаёт строку таблицы?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    correctAnswerIndex: 1,
    explanation: "Тег <tr> создаёт отдельную строку таблицы.",
  },
  {
    id: 30,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег создаёт обычную ячейку таблицы?",
    options: ["<tr>", "<cell>", "<td>", "<th>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <td> создаёт обычную ячейку с данными внутри строки таблицы.",
  },
  {
    id: 31,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег создаёт заголовочную ячейку таблицы?",
    options: ["<thead>", "<header>", "<th>", "<td>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <th> используется для создания заголовочной ячейки таблицы.",
  },
  {
    id: 32,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для вставки видео?",
    options: ["<media>", "<movie>", "<video>", "<source>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <video> используется для размещения видеоматериалов на странице.",
  },
  {
    id: 33,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для вставки аудио?",
    options: ["<sound>", "<audio>", "<music>", "<media>"],
    correctAnswerIndex: 1,
    explanation: "Тег <audio> позволяет встроить аудиофайл в HTML-страницу.",
  },
  {
    id: 34,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой атрибут добавляет стандартные элементы управления аудио или видео?",
    options: ["controls", "buttons", "panel", "manage"],
    correctAnswerIndex: 0,
    explanation:
      "Атрибут controls добавляет кнопки воспроизведения, паузы, громкости и другие элементы управления.",
  },
  {
    id: 35,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой тег используется для выбора одного варианта из выпадающего списка?",
    options: ["<select>", "<dropdown>", "<option>", "<list>"],
    correctAnswerIndex: 0,
    explanation:
      "Тег <select> создаёт выпадающий список, содержащий элементы <option>.",
  },
  {
    id: 36,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег описывает отдельный вариант внутри <select>?",
    options: ["<choice>", "<item>", "<option>", "<select-item>"],
    correctAnswerIndex: 2,
    explanation: "Тег <option> создаёт отдельный доступный для выбора вариант.",
  },
  {
    id: 37,
    category: "HTML",
    difficulty: "easy",
    question: "Какое значение атрибута type создаёт поле для ввода пароля?",
    options: ["secret", "password", "hidden", "private"],
    correctAnswerIndex: 1,
    explanation:
      'Значение type="password" скрывает вводимые пользователем символы.',
  },
  {
    id: 38,
    category: "HTML",
    difficulty: "easy",
    question: "Какое значение атрибута type создаёт флажок?",
    options: ["radio", "check", "checkbox", "switch"],
    correctAnswerIndex: 2,
    explanation:
      'Значение type="checkbox" создаёт флажок, который можно включить или выключить.',
  },
  {
    id: 39,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какое значение атрибута type создаёт переключатель для выбора одного варианта?",
    options: ["checkbox", "radio", "select", "toggle"],
    correctAnswerIndex: 1,
    explanation:
      'Значение type="radio" используется для переключателей, из группы которых обычно выбирают один вариант.',
  },
  {
    id: 40,
    category: "HTML",
    difficulty: "easy",
    question: "Какой атрибут делает поле формы обязательным для заполнения?",
    options: ["validate", "mandatory", "required", "need"],
    correctAnswerIndex: 2,
    explanation:
      "Логический атрибут required запрещает отправку формы, пока поле не будет заполнено корректно.",
  },

  // HTML — EASY

  {
    id: 41,
    category: "HTML",
    difficulty: "easy",
    question: "Какой атрибут задаёт уникальный идентификатор HTML-элемента?",
    options: ["class", "id", "name", "key"],
    correctAnswerIndex: 1,
    explanation:
      "Атрибут id задаёт уникальный идентификатор элемента в пределах HTML-документа.",
  },
  {
    id: 42,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой атрибут позволяет назначить элементу один или несколько CSS-классов?",
    options: ["style", "class", "id", "css"],
    correctAnswerIndex: 1,
    explanation:
      "Атрибут class используется для назначения элементу одного или нескольких CSS-классов.",
  },
  {
    id: 43,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется как универсальный блочный контейнер?",
    options: ["<span>", "<div>", "<section>", "<block>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <div> является универсальным блочным контейнером без собственного семантического значения.",
  },
  {
    id: 44,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется как универсальный строчный контейнер?",
    options: ["<div>", "<inline>", "<span>", "<text>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <span> является универсальным строчным контейнером для небольших частей содержимого.",
  },
  {
    id: 45,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег семантически обозначает основное содержимое страницы?",
    options: ["<content>", "<body>", "<main>", "<section>"],
    correctAnswerIndex: 2,
    explanation: "Тег <main> содержит основное уникальное содержимое страницы.",
  },
  {
    id: 46,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой тег обычно используется для верхней части страницы или раздела?",
    options: ["<top>", "<head>", "<header>", "<main>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <header> представляет вводную или навигационную часть страницы либо отдельного раздела.",
  },
  {
    id: 47,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой тег обычно используется для нижней части страницы или раздела?",
    options: ["<bottom>", "<footer>", "<end>", "<section>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <footer> обычно содержит сведения об авторе, ссылки, контакты и другую заключительную информацию.",
  },
  {
    id: 48,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег семантически обозначает блок навигационных ссылок?",
    options: ["<navigation>", "<links>", "<nav>", "<menu-link>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <nav> предназначен для размещения основных навигационных ссылок.",
  },
  {
    id: 49,
    category: "HTML",
    difficulty: "easy",
    question:
      "Какой тег используется для самостоятельного материала, например статьи или публикации?",
    options: ["<article>", "<post>", "<section>", "<content>"],
    correctAnswerIndex: 0,
    explanation:
      "Тег <article> обозначает самостоятельный материал, который может распространяться независимо от остальной страницы.",
  },
  {
    id: 50,
    category: "HTML",
    difficulty: "easy",
    question: "Какой тег используется для тематического раздела документа?",
    options: ["<div>", "<section>", "<article>", "<group>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <section> обозначает тематически связанный раздел содержимого, обычно имеющий заголовок.",
  },

  // HTML — MEDIUM

  {
    id: 51,
    category: "HTML",
    difficulty: "medium",
    question:
      "Какое значение атрибута target открывает ссылку в новой вкладке?",
    options: ["_self", "_new", "_blank", "_parent"],
    correctAnswerIndex: 2,
    explanation:
      'Значение target="_blank" обычно открывает связанный документ в новой вкладке браузера.',
  },
  {
    id: 52,
    category: "HTML",
    difficulty: "medium",
    question:
      'Какой атрибут следует добавить к ссылке с target="_blank" для повышения безопасности?',
    options: [
      'rel="noopener noreferrer"',
      'type="secure"',
      'referrer="false"',
      'target="secure"',
    ],
    correctAnswerIndex: 0,
    explanation:
      "Значения noopener и noreferrer ограничивают доступ новой страницы к исходному окну и передачу адреса источника.",
  },
  {
    id: 53,
    category: "HTML",
    difficulty: "medium",
    question: "Какой атрибут элемента <label> связывает его с полем формы?",
    options: ["name", "for", "target", "input"],
    correctAnswerIndex: 1,
    explanation:
      "Значение атрибута for должно совпадать со значением id связанного элемента формы.",
  },
  {
    id: 54,
    category: "HTML",
    difficulty: "medium",
    question:
      "Какой атрибут группирует несколько radio-кнопок так, чтобы выбрать можно было только одну?",
    options: ["group", "id", "name", "for"],
    correctAnswerIndex: 2,
    explanation:
      "Radio-кнопки с одинаковым значением атрибута name образуют одну группу выбора.",
  },
  {
    id: 55,
    category: "HTML",
    difficulty: "medium",
    question: "Какой атрибут определяет HTTP-метод отправки HTML-формы?",
    options: ["action", "method", "request", "type"],
    correctAnswerIndex: 1,
    explanation:
      "Атрибут method определяет HTTP-метод отправки формы, например GET или POST.",
  },
  {
    id: 56,
    category: "HTML",
    difficulty: "medium",
    question:
      "Какой атрибут формы указывает адрес, на который отправляются данные?",
    options: ["href", "target", "action", "src"],
    correctAnswerIndex: 2,
    explanation:
      "Атрибут action содержит URL обработчика, которому браузер отправит данные формы.",
  },
  {
    id: 57,
    category: "HTML",
    difficulty: "medium",
    question: "Какой элемент позволяет сгруппировать связанные поля формы?",
    options: ["<formgroup>", "<fieldset>", "<section>", "<group>"],
    correctAnswerIndex: 1,
    explanation:
      "Тег <fieldset> семантически группирует связанные элементы управления формы.",
  },
  {
    id: 58,
    category: "HTML",
    difficulty: "medium",
    question:
      "Какой тег задаёт заголовок для группы элементов внутри <fieldset>?",
    options: ["<caption>", "<label>", "<legend>", "<title>"],
    correctAnswerIndex: 2,
    explanation:
      "Тег <legend> задаёт подпись или заголовок группы элементов внутри <fieldset>.",
  },
  {
    id: 59,
    category: "HTML",
    difficulty: "medium",
    question: "Какой атрибут позволяет браузеру лениво загружать изображение?",
    options: ['defer="image"', 'loading="lazy"', 'async="true"', 'lazy="true"'],
    correctAnswerIndex: 1,
    explanation:
      'Атрибут loading="lazy" позволяет отложить загрузку изображения до приближения его к видимой области.',
  },
  {
    id: 60,
    category: "HTML",
    difficulty: "medium",
    question:
      "Какое объявление должно находиться в начале современного HTML-документа?",
    options: [
      "<!DOCTYPE html>",
      '<html version="5">',
      "<doctype>HTML5</doctype>",
      '<?html version="5"?>',
    ],
    correctAnswerIndex: 0,
    explanation:
      "Объявление <!DOCTYPE html> сообщает браузеру, что документ должен обрабатываться в стандартном режиме HTML.",
  },

  // CSS — EASY

  {
    id: 61,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство изменяет цвет текста?",
    options: ["font-color", "text-color", "color", "foreground"],
    correctAnswerIndex: 2,
    explanation: "Свойство color задаёт цвет текстового содержимого элемента.",
  },
  {
    id: 62,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство задаёт цвет фона элемента?",
    options: ["background-color", "color", "fill", "background-style"],
    correctAnswerIndex: 0,
    explanation: "Свойство background-color задаёт цвет фона элемента.",
  },
  {
    id: 63,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство задаёт размер шрифта?",
    options: ["text-size", "font-size", "size", "font-height"],
    correctAnswerIndex: 1,
    explanation: "Свойство font-size определяет размер шрифта текста.",
  },
  {
    id: 64,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство изменяет семейство шрифта?",
    options: ["font-style", "font-family", "text-font", "font-name"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство font-family задаёт используемое семейство или список семейств шрифтов.",
  },
  {
    id: 65,
    category: "CSS",
    difficulty: "easy",
    question: "Какое значение font-weight обычно делает текст полужирным?",
    options: ["italic", "bold", "strong", "heavy-text"],
    correctAnswerIndex: 1,
    explanation:
      "Значение bold свойства font-weight отображает текст полужирным начертанием.",
  },
  {
    id: 66,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство задаёт внешние отступы элемента?",
    options: ["padding", "spacing", "margin", "gap"],
    correctAnswerIndex: 2,
    explanation:
      "Свойство margin задаёт пространство за пределами границы элемента.",
  },
  {
    id: 67,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство задаёт внутренние отступы элемента?",
    options: ["margin", "padding", "gap", "inset"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство padding задаёт пространство между содержимым элемента и его границей.",
  },
  {
    id: 68,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство задаёт ширину элемента?",
    options: ["size", "width", "element-width", "inline-size-only"],
    correctAnswerIndex: 1,
    explanation: "Свойство width задаёт ширину области элемента.",
  },
  {
    id: 69,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство задаёт высоту элемента?",
    options: ["height", "size-y", "element-height", "block"],
    correctAnswerIndex: 0,
    explanation: "Свойство height задаёт высоту области элемента.",
  },
  {
    id: 70,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство создаёт границу вокруг элемента?",
    options: ["outline", "border", "stroke", "frame"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство border задаёт границу элемента, включая её толщину, стиль и цвет.",
  },
  {
    id: 71,
    category: "CSS",
    difficulty: "easy",
    question: "Какое свойство используется для скругления углов элемента?",
    options: ["corner-radius", "border-radius", "radius", "border-round"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство border-radius задаёт радиус скругления углов границы элемента.",
  },
  {
    id: 72,
    category: "CSS",
    difficulty: "easy",
    question: "Какой селектор выбирает элемент по его id?",
    options: [".element", "#element", "element", "*element"],
    correctAnswerIndex: 1,
    explanation:
      "Символ # используется для выбора элемента по значению атрибута id.",
  },
  {
    id: 73,
    category: "CSS",
    difficulty: "easy",
    question: "Какой селектор выбирает элементы по имени класса?",
    options: ["#card", ".card", "card", "*card"],
    correctAnswerIndex: 1,
    explanation:
      "Точка перед именем используется для выбора элементов по CSS-классу.",
  },
  {
    id: 74,
    category: "CSS",
    difficulty: "easy",
    question: "Какой селектор выбирает все элементы <p>?",
    options: [".p", "#p", "p", "*p"],
    correctAnswerIndex: 2,
    explanation: "Селектор типа p выбирает все HTML-элементы <p>.",
  },
  {
    id: 75,
    category: "CSS",
    difficulty: "easy",
    question: "Какой символ используется в универсальном CSS-селекторе?",
    options: ["#", ".", "*", "&"],
    correctAnswerIndex: 2,
    explanation: "Универсальный селектор * выбирает все подходящие элементы.",
  },
  {
    id: 76,
    category: "CSS",
    difficulty: "easy",
    question:
      "Какое значение display скрывает элемент и удаляет его из потока документа?",
    options: ["hidden", "none", "invisible", "remove"],
    correctAnswerIndex: 1,
    explanation:
      "display: none скрывает элемент, и он перестаёт занимать место в раскладке.",
  },
  {
    id: 77,
    category: "CSS",
    difficulty: "easy",
    question:
      "Какое свойство управляет отображением элемента как блока, строки, flex-контейнера или grid-контейнера?",
    options: ["position", "display", "layout", "visibility"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство display определяет тип внешнего и внутреннего отображения элемента.",
  },
  {
    id: 78,
    category: "CSS",
    difficulty: "easy",
    question: "Какое значение display превращает элемент во flex-контейнер?",
    options: ["flex", "flexbox", "inline-flexbox", "box"],
    correctAnswerIndex: 0,
    explanation: "Значение display: flex создаёт блочный flex-контейнер.",
  },
  {
    id: 79,
    category: "CSS",
    difficulty: "easy",
    question: "Какое значение display превращает элемент в grid-контейнер?",
    options: ["table", "grid", "layout", "columns"],
    correctAnswerIndex: 1,
    explanation: "Значение display: grid создаёт блочный grid-контейнер.",
  },
  {
    id: 80,
    category: "CSS",
    difficulty: "easy",
    question: "Какое CSS-свойство выравнивает текст по горизонтали?",
    options: ["align-text", "text-align", "justify-text", "font-align"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство text-align задаёт горизонтальное выравнивание строчного содержимого.",
  },

  // CSS — MEDIUM

  {
    id: 81,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение box-sizing включает padding и border в заданные width и height?",
    options: ["content-box", "border-box", "padding-box", "full-box"],
    correctAnswerIndex: 1,
    explanation:
      "При box-sizing: border-box указанные width и height включают внутренние отступы и границы.",
  },
  {
    id: 82,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение position позиционирует элемент относительно ближайшего позиционированного предка?",
    options: ["relative", "fixed", "absolute", "static"],
    correctAnswerIndex: 2,
    explanation:
      "Элемент с position: absolute позиционируется относительно ближайшего предка, у которого position отличается от static.",
  },
  {
    id: 83,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение position фиксирует элемент относительно окна браузера?",
    options: ["absolute", "sticky", "fixed", "relative"],
    correctAnswerIndex: 2,
    explanation:
      "position: fixed обычно фиксирует элемент относительно области просмотра браузера.",
  },
  {
    id: 84,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение position позволяет элементу прилипать при прокрутке?",
    options: ["fixed", "sticky", "absolute", "scroll"],
    correctAnswerIndex: 1,
    explanation:
      "position: sticky сочетает обычное положение в потоке и фиксацию при достижении указанного порога.",
  },
  {
    id: 85,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое свойство определяет порядок наложения позиционированных элементов?",
    options: ["layer", "order", "z-index", "stack"],
    correctAnswerIndex: 2,
    explanation:
      "Свойство z-index управляет порядком наложения элементов внутри соответствующего контекста наложения.",
  },
  {
    id: 86,
    category: "CSS",
    difficulty: "medium",
    question: "Какое свойство задаёт направление главной оси flex-контейнера?",
    options: [
      "flex-direction",
      "justify-content",
      "align-items",
      "flex-flow-axis",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Свойство flex-direction определяет направление главной оси и расположения flex-элементов.",
  },
  {
    id: 87,
    category: "CSS",
    difficulty: "medium",
    question: "Какое flex-свойство выравнивает элементы вдоль главной оси?",
    options: ["align-items", "justify-content", "align-content", "place-items"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство justify-content распределяет flex-элементы вдоль главной оси контейнера.",
  },
  {
    id: 88,
    category: "CSS",
    difficulty: "medium",
    question: "Какое flex-свойство выравнивает элементы вдоль поперечной оси?",
    options: ["align-items", "justify-content", "flex-align", "justify-items"],
    correctAnswerIndex: 0,
    explanation:
      "Свойство align-items задаёт выравнивание flex-элементов вдоль поперечной оси.",
  },
  {
    id: 89,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение flex-wrap разрешает перенос элементов на новые строки?",
    options: ["break", "wrap", "next-line", "multiple"],
    correctAnswerIndex: 1,
    explanation:
      "Значение flex-wrap: wrap разрешает перенос flex-элементов на дополнительные строки.",
  },
  {
    id: 90,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое CSS-свойство задаёт расстояние между flex- или grid-элементами?",
    options: ["spacing", "margin-between", "gap", "grid-spacing"],
    correctAnswerIndex: 2,
    explanation:
      "Свойство gap задаёт промежутки между строками и столбцами flex- или grid-контейнера.",
  },
  {
    id: 91,
    category: "CSS",
    difficulty: "medium",
    question: "Какое свойство Grid задаёт структуру столбцов?",
    options: [
      "grid-columns",
      "grid-template-columns",
      "grid-column-layout",
      "template-columns",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Свойство grid-template-columns определяет количество и размеры столбцов grid-контейнера.",
  },
  {
    id: 92,
    category: "CSS",
    difficulty: "medium",
    question: "Что означает единица fr в CSS Grid?",
    options: [
      "Фиксированное количество пикселей",
      "Долю доступного пространства",
      "Размер шрифта корневого элемента",
      "Процент ширины окна",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Единица fr представляет долю свободного пространства внутри grid-контейнера.",
  },
  {
    id: 93,
    category: "CSS",
    difficulty: "medium",
    question: "Что делает запись repeat(3, 1fr) в grid-template-columns?",
    options: [
      "Создаёт три равных столбца",
      "Создаёт одну строку высотой 3fr",
      "Повторяет сетку бесконечно",
      "Создаёт три столбца шириной 1px",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Функция repeat(3, 1fr) создаёт три столбца, каждый из которых занимает одну равную долю пространства.",
  },
  {
    id: 94,
    category: "CSS",
    difficulty: "medium",
    question: "Какое CSS-свойство скрывает вышедшее за границы содержимое?",
    options: ["display", "clip", "overflow", "visibility"],
    correctAnswerIndex: 2,
    explanation:
      "Свойство overflow управляет поведением содержимого, которое выходит за размеры элемента.",
  },
  {
    id: 95,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение overflow добавляет прокрутку только при необходимости?",
    options: ["scroll", "auto", "hidden", "clip"],
    correctAnswerIndex: 1,
    explanation:
      "overflow: auto обычно показывает полосы прокрутки только тогда, когда содержимое не помещается.",
  },
  {
    id: 96,
    category: "CSS",
    difficulty: "medium",
    question: "Какое свойство управляет прозрачностью всего элемента?",
    options: ["visibility", "opacity", "alpha", "transparent"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство opacity задаёт прозрачность элемента и всего его содержимого числом от 0 до 1.",
  },
  {
    id: 97,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какой псевдокласс применяется при наведении указателя на элемент?",
    options: [":focus", ":active", ":hover", ":visited"],
    correctAnswerIndex: 2,
    explanation:
      "Псевдокласс :hover применяется, когда пользователь наводит указатель на элемент.",
  },
  {
    id: 98,
    category: "CSS",
    difficulty: "medium",
    question: "Какой псевдокласс применяется к элементу, получившему фокус?",
    options: [":selected", ":focus", ":checked", ":target"],
    correctAnswerIndex: 1,
    explanation:
      "Псевдокласс :focus применяется к элементу, который получил фокус ввода.",
  },
  {
    id: 99,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какой псевдоэлемент вставляет содержимое перед содержимым выбранного элемента?",
    options: ["::after", "::first", "::before", ":prepend"],
    correctAnswerIndex: 2,
    explanation:
      "Псевдоэлемент ::before создаёт виртуальный элемент перед основным содержимым выбранного элемента.",
  },
  {
    id: 100,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какой псевдоэлемент вставляет содержимое после содержимого выбранного элемента?",
    options: ["::after", "::before", "::last", ":append"],
    correctAnswerIndex: 0,
    explanation:
      "Псевдоэлемент ::after создаёт виртуальный элемент после основного содержимого выбранного элемента.",
  },

  {
    id: 101,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какой комбинатор выбирает только непосредственных дочерних элементов?",
    options: ["Пробел", ">", "+", "~"],
    correctAnswerIndex: 1,
    explanation:
      "Комбинатор > выбирает элементы, которые являются непосредственными дочерними элементами указанного родителя.",
  },
  {
    id: 102,
    category: "CSS",
    difficulty: "medium",
    question: "Какой комбинатор выбирает следующий соседний элемент?",
    options: [">", "~", "+", "Пробел"],
    correctAnswerIndex: 2,
    explanation:
      "Комбинатор + выбирает элемент, который находится сразу после первого элемента на одном уровне вложенности.",
  },
  {
    id: 103,
    category: "CSS",
    difficulty: "medium",
    question: "Какой комбинатор выбирает все последующие соседние элементы?",
    options: ["+", "~", ">", "*"],
    correctAnswerIndex: 1,
    explanation:
      "Комбинатор ~ выбирает все подходящие элементы, расположенные после первого элемента на одном уровне.",
  },
  {
    id: 104,
    category: "CSS",
    difficulty: "medium",
    question: "Какой псевдокласс выбирает первый дочерний элемент?",
    options: [":first", ":first-child", ":child-first", ":nth-child(0)"],
    correctAnswerIndex: 1,
    explanation:
      "Псевдокласс :first-child выбирает элемент, если он является первым ребёнком своего родителя.",
  },
  {
    id: 105,
    category: "CSS",
    difficulty: "medium",
    question: "Какой псевдокласс выбирает последний дочерний элемент?",
    options: [":last-child", ":last", ":final-child", ":nth-last(0)"],
    correctAnswerIndex: 0,
    explanation:
      "Псевдокласс :last-child выбирает элемент, если он является последним ребёнком своего родителя.",
  },
  {
    id: 106,
    category: "CSS",
    difficulty: "medium",
    question: "Как выбрать каждый второй дочерний элемент?",
    options: [
      ":nth-child(2)",
      ":nth-child(even)",
      ":every-child(2)",
      ":child(2n + 1)",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Псевдокласс :nth-child(even) выбирает дочерние элементы с чётными порядковыми номерами.",
  },
  {
    id: 107,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое свойство задаёт плавный переход между значениями CSS-свойств?",
    options: ["animation", "transform", "transition", "timing"],
    correctAnswerIndex: 2,
    explanation:
      "Свойство transition настраивает плавное изменение CSS-свойств между состояниями.",
  },
  {
    id: 108,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое свойство используется для поворота, масштабирования и перемещения элемента?",
    options: ["transition", "transform", "translate", "position"],
    correctAnswerIndex: 1,
    explanation:
      "Свойство transform применяет к элементу преобразования: translate, rotate, scale и другие.",
  },
  {
    id: 109,
    category: "CSS",
    difficulty: "medium",
    question: "Какая функция transform поворачивает элемент?",
    options: ["translate()", "scale()", "rotate()", "skewXOnly()"],
    correctAnswerIndex: 2,
    explanation: "Функция rotate() поворачивает элемент на указанный угол.",
  },
  {
    id: 110,
    category: "CSS",
    difficulty: "medium",
    question: "Какая функция transform изменяет размер элемента?",
    options: ["resize()", "scale()", "zoom()", "size()"],
    correctAnswerIndex: 1,
    explanation: "Функция scale() масштабирует элемент по одной или двум осям.",
  },
  {
    id: 111,
    category: "CSS",
    difficulty: "medium",
    question: "Какое правило используется для создания CSS-анимации?",
    options: ["@animation", "@frames", "@keyframes", "@transition"],
    correctAnswerIndex: 2,
    explanation:
      "Правило @keyframes описывает промежуточные состояния CSS-анимации.",
  },
  {
    id: 112,
    category: "CSS",
    difficulty: "medium",
    question: "Какое свойство указывает имя анимации?",
    options: [
      "animation-name",
      "keyframes-name",
      "animation-id",
      "transition-name",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Свойство animation-name связывает элемент с объявлением @keyframes.",
  },
  {
    id: 113,
    category: "CSS",
    difficulty: "medium",
    question: "Какое свойство задаёт продолжительность анимации?",
    options: [
      "animation-time",
      "animation-duration",
      "transition-duration",
      "animation-delay",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Свойство animation-duration определяет время выполнения одного цикла анимации.",
  },
  {
    id: 114,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое значение animation-iteration-count запускает анимацию бесконечно?",
    options: ["always", "loop", "infinite", "forever"],
    correctAnswerIndex: 2,
    explanation:
      "Значение infinite заставляет CSS-анимацию повторяться бесконечное количество раз.",
  },
  {
    id: 115,
    category: "CSS",
    difficulty: "medium",
    question:
      "Какое правило используется для адаптации стилей под размер экрана?",
    options: ["@screen", "@responsive", "@media", "@viewport"],
    correctAnswerIndex: 2,
    explanation:
      "Правило @media позволяет применять стили в зависимости от ширины экрана и других характеристик устройства.",
  },

  // CSS — HARD

  {
    id: 116,
    category: "CSS",
    difficulty: "hard",
    question: "Что определяет специфичность CSS-селектора?",
    options: [
      "Порядок загрузки HTML",
      "Приоритет селектора при конфликте правил",
      "Скорость применения стилей",
      "Количество CSS-свойств",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Специфичность определяет, какое правило получит приоритет, если несколько правил применяются к одному элементу.",
  },
  {
    id: 117,
    category: "CSS",
    difficulty: "hard",
    question: "Какой селектор обычно имеет наибольшую специфичность?",
    options: ["div", ".card", "#card", "*"],
    correctAnswerIndex: 2,
    explanation:
      "Селектор по id имеет более высокую специфичность, чем селектор класса, тега или универсальный селектор.",
  },
  {
    id: 118,
    category: "CSS",
    difficulty: "hard",
    question: "Что делает ключевое слово !important?",
    options: [
      "Повышает приоритет объявления",
      "Делает свойство обязательным для браузера",
      "Запрещает наследование",
      "Создаёт CSS-переменную",
    ],
    correctAnswerIndex: 0,
    explanation:
      "!important повышает приоритет конкретного объявления, хотя его чрезмерное использование усложняет поддержку стилей.",
  },
  {
    id: 119,
    category: "CSS",
    difficulty: "hard",
    question: "Как объявить пользовательское CSS-свойство?",
    options: [
      "$main-color: red",
      "--main-color: red",
      "@main-color: red",
      "var-main-color: red",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Пользовательские CSS-свойства объявляются с именем, начинающимся с двух дефисов.",
  },
  {
    id: 120,
    category: "CSS",
    difficulty: "hard",
    question: "Как получить значение CSS-переменной --main-color?",
    options: [
      "value(--main-color)",
      "get(--main-color)",
      "var(--main-color)",
      "$(--main-color)",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Функция var() используется для получения значения пользовательского CSS-свойства.",
  },
  {
    id: 121,
    category: "CSS",
    difficulty: "hard",
    question: "Что создаёт новый stacking context?",
    options: [
      "Любой элемент с margin",
      "Элемент с position и z-index, отличным от auto",
      "Любой flex-элемент",
      "Каждый блочный элемент",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Позиционированный элемент с заданным z-index может создать новый контекст наложения.",
  },
  {
    id: 122,
    category: "CSS",
    difficulty: "hard",
    question:
      "Почему z-index иногда не влияет на положение элемента поверх другого?",
    options: [
      "z-index работает только с изображениями",
      "Элементы могут находиться в разных контекстах наложения",
      "z-index поддерживает только значения до 10",
      "Нужно обязательно использовать float",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Значение z-index сравнивается прежде всего внутри соответствующего stacking context.",
  },
  {
    id: 123,
    category: "CSS",
    difficulty: "hard",
    question: "Что означает значение minmax(200px, 1fr) в CSS Grid?",
    options: [
      "Столбец всегда шириной 200px",
      "Столбец от 200px до одной доли доступного пространства",
      "Два столбца: 200px и 1fr",
      "Минимум один столбец и максимум 200",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Функция minmax() задаёт минимальный и максимальный размер grid-дорожки.",
  },
  {
    id: 124,
    category: "CSS",
    difficulty: "hard",
    question: "Что делает auto-fit в функции repeat()?",
    options: [
      "Создаёт фиксированное число столбцов",
      "Размещает максимально возможное количество столбцов и растягивает пустое пространство",
      "Запрещает перенос grid-элементов",
      "Автоматически задаёт высоту строк",
    ],
    correctAnswerIndex: 1,
    explanation:
      "auto-fit создаёт столько дорожек, сколько помещается, а пустые дорожки схлопывает.",
  },
  {
    id: 125,
    category: "CSS",
    difficulty: "hard",
    question: "Чем auto-fill отличается от auto-fit в CSS Grid?",
    options: [
      "auto-fill может сохранять пустые дорожки",
      "auto-fill работает только со строками",
      "auto-fit не поддерживает minmax",
      "Между ними нет разницы",
    ],
    correctAnswerIndex: 0,
    explanation:
      "auto-fill сохраняет созданные пустые дорожки, а auto-fit обычно схлопывает их и растягивает занятые.",
  },

  // JAVASCRIPT — EASY

  {
    id: 126,
    category: "JavaScript",
    difficulty: "easy",
    question:
      "Какое ключевое слово объявляет переменную, значение которой можно изменить?",
    options: ["const", "let", "static", "define"],
    correctAnswerIndex: 1,
    explanation:
      "Ключевое слово let объявляет переменную с блочной областью видимости, значение которой можно переназначить.",
  },
  {
    id: 127,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какое ключевое слово используется для объявления константы?",
    options: ["let", "var", "const", "constant"],
    correctAnswerIndex: 2,
    explanation:
      "Ключевое слово const запрещает переназначение самой переменной после объявления.",
  },
  {
    id: 128,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой тип данных представляет строку?",
    options: ["number", "string", "boolean", "array"],
    correctAnswerIndex: 1,
    explanation: "Тип string используется для хранения текстовых значений.",
  },
  {
    id: 129,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой тип данных имеет значение true?",
    options: ["string", "number", "boolean", "object"],
    correctAnswerIndex: 2,
    explanation: "Значения true и false относятся к логическому типу boolean.",
  },
  {
    id: 130,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор используется для строгого сравнения?",
    options: ["==", "=", "===", "!="],
    correctAnswerIndex: 2,
    explanation:
      "Оператор === сравнивает значения без автоматического приведения типов.",
  },
  {
    id: 131,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор присваивает значение переменной?",
    options: ["==", "=", "===", "=>"],
    correctAnswerIndex: 1,
    explanation:
      "Оператор = присваивает правому операнду значение переменной слева.",
  },
  {
    id: 132,
    category: "JavaScript",
    difficulty: "easy",
    question: "Как получить длину массива arr?",
    options: ["arr.size", "arr.count", "arr.length", "length(arr)"],
    correctAnswerIndex: 2,
    explanation: "Свойство length содержит количество элементов массива.",
  },
  {
    id: 133,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой метод добавляет элемент в конец массива?",
    options: ["push()", "pop()", "shift()", "unshiftEnd()"],
    correctAnswerIndex: 0,
    explanation:
      "Метод push() добавляет один или несколько элементов в конец массива.",
  },
  {
    id: 134,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой метод удаляет последний элемент массива?",
    options: ["shift()", "remove()", "pop()", "slice()"],
    correctAnswerIndex: 2,
    explanation: "Метод pop() удаляет и возвращает последний элемент массива.",
  },
  {
    id: 135,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой метод добавляет элемент в начало массива?",
    options: ["push()", "unshift()", "shift()", "prependArray()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод unshift() добавляет один или несколько элементов в начало массива.",
  },
  {
    id: 136,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой метод удаляет первый элемент массива?",
    options: ["shift()", "pop()", "removeFirst()", "spliceEnd()"],
    correctAnswerIndex: 0,
    explanation: "Метод shift() удаляет и возвращает первый элемент массива.",
  },
  {
    id: 137,
    category: "JavaScript",
    difficulty: "easy",
    question: "Как объявить обычную функцию?",
    options: [
      "function greet() {}",
      "func greet() {}",
      "def greet() {}",
      "create function greet() {}",
    ],
    correctAnswerIndex: 0,
    explanation: "Объявление функции начинается с ключевого слова function.",
  },
  {
    id: 138,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какое ключевое слово возвращает значение из функции?",
    options: ["send", "return", "yieldOnly", "output"],
    correctAnswerIndex: 1,
    explanation:
      "Ключевое слово return завершает выполнение функции и возвращает указанное значение.",
  },
  {
    id: 139,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой метод выводит сообщение в консоль браузера?",
    options: ["console.print()", "log.console()", "console.log()", "print()"],
    correctAnswerIndex: 2,
    explanation:
      "Метод console.log() выводит переданное значение в консоль разработчика.",
  },
  {
    id: 140,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор используется для логического И?",
    options: ["||", "&&", "!", "??"],
    correctAnswerIndex: 1,
    explanation:
      "Оператор && возвращает истинное значение, когда оба операнда являются истинными.",
  },
  {
    id: 141,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор используется для логического ИЛИ?",
    options: ["&&", "||", "!", "==="],
    correctAnswerIndex: 1,
    explanation:
      "Оператор || возвращает истинное значение, если хотя бы один операнд является истинным.",
  },
  {
    id: 142,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор инвертирует логическое значение?",
    options: ["!!", "!", "~", "not"],
    correctAnswerIndex: 1,
    explanation:
      "Оператор ! преобразует значение в boolean и возвращает противоположный логический результат.",
  },
  {
    id: 143,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой цикл выполняется, пока условие истинно?",
    options: ["if", "while", "switch", "map"],
    correctAnswerIndex: 1,
    explanation:
      "Цикл while продолжает выполнять тело, пока его условие оценивается как true.",
  },
  {
    id: 144,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор используется для ветвления по условию?",
    options: ["if", "loop", "caseOnly", "when"],
    correctAnswerIndex: 0,
    explanation:
      "Оператор if выполняет блок кода, если указанное условие истинно.",
  },
  {
    id: 145,
    category: "JavaScript",
    difficulty: "easy",
    question: "Какой оператор используется для нескольких вариантов ветвления?",
    options: ["loop", "switch", "for", "try"],
    correctAnswerIndex: 1,
    explanation:
      "Оператор switch сравнивает выражение с несколькими вариантами case.",
  },

  // JAVASCRIPT — MEDIUM

  {
    id: 146,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод создаёт новый массив, преобразуя каждый элемент исходного?",
    options: ["filter()", "map()", "forEach()", "find()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод map() вызывает функцию для каждого элемента и возвращает новый массив результатов.",
  },
  {
    id: 147,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод создаёт новый массив только из элементов, прошедших проверку?",
    options: ["find()", "filter()", "map()", "reduce()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод filter() возвращает новый массив элементов, для которых callback вернул true.",
  },
  {
    id: 148,
    category: "JavaScript",
    difficulty: "medium",
    question: "Какой метод возвращает первый элемент, подходящий под условие?",
    options: ["filter()", "find()", "some()", "includes()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод find() возвращает первый найденный элемент или undefined.",
  },
  {
    id: 149,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод проверяет, соответствует ли хотя бы один элемент условию?",
    options: ["every()", "some()", "findIndex()", "filter()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод some() возвращает true, если хотя бы один элемент проходит проверку.",
  },
  {
    id: 150,
    category: "JavaScript",
    difficulty: "medium",
    question: "Какой метод проверяет, соответствуют ли все элементы условию?",
    options: ["some()", "all()", "every()", "check()"],
    correctAnswerIndex: 2,
    explanation:
      "Метод every() возвращает true, только если каждый элемент массива проходит проверку.",
  },

  {
    id: 151,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод массива сводит все элементы к одному итоговому значению?",
    options: ["map()", "reduce()", "filter()", "flat()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод reduce() последовательно обрабатывает элементы массива и возвращает одно итоговое значение.",
  },
  {
    id: 152,
    category: "JavaScript",
    difficulty: "medium",
    question: "Какой метод проверяет наличие значения в массиве?",
    options: ["contains()", "includes()", "has()", "exists()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод includes() возвращает true, если массив содержит указанное значение.",
  },
  {
    id: 153,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод возвращает индекс первого элемента, подходящего под условие?",
    options: ["indexOf()", "findIndex()", "find()", "searchIndex()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод findIndex() возвращает индекс первого подходящего элемента или -1.",
  },
  {
    id: 154,
    category: "JavaScript",
    difficulty: "medium",
    question: "Какой метод объединяет элементы массива в строку?",
    options: ["concat()", "join()", "toArray()", "merge()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод join() соединяет элементы массива в строку с указанным разделителем.",
  },
  {
    id: 155,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод возвращает часть массива, не изменяя исходный массив?",
    options: ["splice()", "slice()", "split()", "cut()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод slice() создаёт новый массив из выбранного диапазона элементов.",
  },
  {
    id: 156,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод может удалять, заменять и добавлять элементы внутри исходного массива?",
    options: ["slice()", "splice()", "replace()", "concat()"],
    correctAnswerIndex: 1,
    explanation:
      "Метод splice() изменяет исходный массив, удаляя, заменяя или добавляя элементы.",
  },
  {
    id: 157,
    category: "JavaScript",
    difficulty: "medium",
    question:
      "Какой метод используется для поверхностного объединения объектов?",
    options: [
      "Object.merge()",
      "Object.assign()",
      "Object.join()",
      "Object.combine()",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Object.assign() копирует перечисляемые свойства исходных объектов в целевой объект.",
  },
  {
    id: 158,
    category: "JavaScript",
    difficulty: "medium",
    question: "Как получить массив ключей объекта?",
    options: [
      "Object.values()",
      "Object.keys()",
      "Object.entries()",
      "Object.names()",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Object.keys() возвращает массив собственных перечисляемых ключей объекта.",
  },
  {
    id: 159,
    category: "JavaScript",
    difficulty: "medium",
    question: "Как получить массив значений объекта?",
    options: [
      "Object.keys()",
      "Object.values()",
      "Object.entries()",
      "Object.items()",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Object.values() возвращает массив собственных перечисляемых значений объекта.",
  },
  {
    id: 160,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что возвращает Object.entries(user)?",
    options: [
      "Массив ключей",
      "Массив значений",
      "Массив пар [ключ, значение]",
      "Копию объекта",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Object.entries() возвращает массив пар, где каждая пара содержит ключ и соответствующее значение.",
  },
  {
    id: 161,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что делает оператор spread в записи [...items]?",
    options: [
      "Удаляет массив",
      "Разворачивает элементы массива",
      "Сортирует массив",
      "Преобразует массив в строку",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Spread-оператор разворачивает элементы и часто используется для создания поверхностной копии массива.",
  },
  {
    id: 162,
    category: "JavaScript",
    difficulty: "medium",
    question: "Для чего используется rest-параметр в функции?",
    options: [
      "Для остановки функции",
      "Для сбора оставшихся аргументов в массив",
      "Для копирования объекта",
      "Для возврата нескольких значений",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Rest-параметр собирает оставшиеся аргументы функции в один массив.",
  },
  {
    id: 163,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что позволяет сделать деструктуризация объекта?",
    options: [
      "Удалить объект",
      "Извлечь свойства в отдельные переменные",
      "Заморозить объект",
      "Преобразовать объект в JSON",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Деструктуризация позволяет извлекать значения свойств объекта в отдельные переменные.",
  },
  {
    id: 164,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что возвращает typeof null в JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    correctAnswerIndex: 2,
    explanation:
      'typeof null возвращает строку "object" из-за исторической особенности JavaScript.',
  },
  {
    id: 165,
    category: "JavaScript",
    difficulty: "medium",
    question: "Как корректно проверить, является ли значение массивом?",
    options: [
      'typeof value === "array"',
      "value instanceof Object",
      "Array.isArray(value)",
      'value.type === "array"',
    ],
    correctAnswerIndex: 2,
    explanation:
      "Метод Array.isArray() надёжно определяет, является ли переданное значение массивом.",
  },
  {
    id: 166,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что делает оператор optional chaining ?.?",
    options: [
      "Создаёт необязательную переменную",
      "Безопасно обращается к свойству возможного null или undefined",
      "Проверяет тип объекта",
      "Копирует вложенный объект",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Оператор ?. возвращает undefined вместо ошибки, если значение слева равно null или undefined.",
  },
  {
    id: 167,
    category: "JavaScript",
    difficulty: "medium",
    question: "Когда оператор ?? возвращает правый операнд?",
    options: [
      "Когда левый операнд ложный",
      "Когда левый операнд равен null или undefined",
      "Когда левый операнд равен 0",
      "Когда левый операнд является пустой строкой",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Оператор нулевого слияния ?? использует правое значение только при null или undefined слева.",
  },
  {
    id: 168,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что делает JSON.stringify()?",
    options: [
      "Преобразует JSON-строку в объект",
      "Преобразует значение JavaScript в JSON-строку",
      "Проверяет валидность JSON",
      "Клонирует функцию",
    ],
    correctAnswerIndex: 1,
    explanation:
      "JSON.stringify() сериализует поддерживаемое JavaScript-значение в строку JSON.",
  },
  {
    id: 169,
    category: "JavaScript",
    difficulty: "medium",
    question: "Что делает JSON.parse()?",
    options: [
      "Преобразует JSON-строку в JavaScript-значение",
      "Преобразует объект в строку",
      "Удаляет свойства объекта",
      "Создаёт новый JSON-файл",
    ],
    correctAnswerIndex: 0,
    explanation:
      "JSON.parse() разбирает строку JSON и возвращает соответствующее JavaScript-значение.",
  },
  {
    id: 170,
    category: "JavaScript",
    difficulty: "medium",
    question: "Какой блок используется для обработки исключений?",
    options: ["if...else", "try...catch", "switch...case", "for...of"],
    correctAnswerIndex: 1,
    explanation:
      "Конструкция try...catch позволяет перехватывать и обрабатывать ошибки выполнения.",
  },

  // JAVASCRIPT — HARD

  {
    id: 171,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что такое замыкание в JavaScript?",
    options: [
      "Автоматическое удаление функции",
      "Способность функции сохранять доступ к внешней области видимости",
      "Блокировка изменения объекта",
      "Преобразование функции в строку",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Замыкание возникает, когда функция сохраняет доступ к переменным внешней функции после завершения её выполнения.",
  },
  {
    id: 172,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что произойдёт при обращении к переменной let до её объявления?",
    options: [
      "Вернётся undefined",
      "Возникнет ReferenceError",
      "Вернётся null",
      "Переменная создастся автоматически",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Переменная находится во временной мёртвой зоне до выполнения строки её объявления.",
  },
  {
    id: 173,
    category: "JavaScript",
    difficulty: "hard",
    question: "Чем область видимости var отличается от let?",
    options: [
      "var имеет блочную область видимости",
      "var имеет функциональную область видимости",
      "let доступен глобально всегда",
      "Между ними нет различий",
    ],
    correctAnswerIndex: 1,
    explanation:
      "var ограничивается функцией, а let ограничивается ближайшим блоком фигурных скобок.",
  },
  {
    id: 174,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что означает hoisting?",
    options: [
      "Физическое перемещение кода вверх файла",
      "Обработка объявлений до выполнения соответствующих строк",
      "Удаление неиспользуемых переменных",
      "Асинхронный запуск функций",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Hoisting описывает поведение, при котором объявления обрабатываются до пошагового выполнения кода.",
  },
  {
    id: 175,
    category: "JavaScript",
    difficulty: "hard",
    question: "От чего зависит значение this в обычной функции?",
    options: [
      "Только от места объявления",
      "От способа вызова функции",
      "Только от имени функции",
      "От количества аргументов",
    ],
    correctAnswerIndex: 1,
    explanation:
      "В обычной функции значение this обычно определяется способом её вызова.",
  },
  {
    id: 176,
    category: "JavaScript",
    difficulty: "hard",
    question: "Как стрелочная функция получает значение this?",
    options: [
      "Создаёт собственный this",
      "Наследует this из внешней лексической области",
      "Всегда получает window",
      "Всегда получает undefined",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Стрелочные функции не создают собственный this и используют значение из внешней области.",
  },
  {
    id: 177,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что делает метод bind()?",
    options: [
      "Немедленно вызывает функцию",
      "Возвращает новую функцию с привязанным this",
      "Удаляет контекст функции",
      "Превращает функцию в Promise",
    ],
    correctAnswerIndex: 1,
    explanation:
      "bind() создаёт новую функцию с заранее установленным this и, при необходимости, аргументами.",
  },
  {
    id: 178,
    category: "JavaScript",
    difficulty: "hard",
    question: "В чём основное различие между call() и apply()?",
    options: [
      "call() работает только со стрелочными функциями",
      "apply() принимает аргументы массивом или массивоподобным объектом",
      "call() не позволяет задавать this",
      "apply() возвращает новую функцию без вызова",
    ],
    correctAnswerIndex: 1,
    explanation:
      "call() принимает аргументы по отдельности, а apply() — одним массивом или массивоподобным объектом.",
  },
  {
    id: 179,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что представляет собой Promise?",
    options: [
      "Результат, который обязательно уже получен",
      "Объект, представляющий будущий результат асинхронной операции",
      "Специальный массив callback-функций",
      "Синхронный цикл",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Promise описывает результат асинхронной операции, которая может завершиться успешно или с ошибкой.",
  },
  {
    id: 180,
    category: "JavaScript",
    difficulty: "hard",
    question: "Какие состояния может иметь Promise?",
    options: [
      "start, stop, finish",
      "pending, fulfilled, rejected",
      "waiting, success, error, cancelled",
      "created, running, deleted",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Promise находится в состоянии pending, а затем переходит в fulfilled или rejected.",
  },
  {
    id: 181,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что возвращает async-функция?",
    options: [
      "Только обычное значение",
      "Promise",
      "Всегда undefined",
      "Генератор",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Async-функция всегда возвращает Promise, даже если явно возвращено обычное значение.",
  },
  {
    id: 182,
    category: "JavaScript",
    difficulty: "hard",
    question: "Где разрешено использовать await?",
    options: [
      "Только внутри обычного цикла",
      "Внутри async-функции и на верхнем уровне поддерживаемого ES-модуля",
      "Только внутри callback setTimeout",
      "В любом месте любого скрипта",
    ],
    correctAnswerIndex: 1,
    explanation:
      "await используется внутри async-функций, а также поддерживается на верхнем уровне ES-модулей.",
  },
  {
    id: 183,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что делает Promise.all()?",
    options: [
      "Возвращает первый завершившийся Promise",
      "Ожидает успешного выполнения всех Promise или отклоняется при первой ошибке",
      "Игнорирует отклонённые Promise",
      "Выполняет Promise строго по очереди",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Promise.all() возвращает результаты всех операций, но отклоняется, если хотя бы одна операция завершилась ошибкой.",
  },
  {
    id: 184,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что делает Promise.allSettled()?",
    options: [
      "Ожидает завершения всех Promise независимо от результата",
      "Возвращает только успешные результаты",
      "Останавливается при первой ошибке",
      "Возвращает первый успешный Promise",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Promise.allSettled() ожидает завершения всех операций и возвращает статус каждой из них.",
  },
  {
    id: 185,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что возвращает Promise.race()?",
    options: [
      "Результат первого завершившегося Promise",
      "Результат первого успешного Promise",
      "Массив всех результатов",
      "Последний завершившийся Promise",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Promise.race() принимает состояние первого завершившегося Promise, независимо от успеха или ошибки.",
  },
  {
    id: 186,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что возвращает Promise.any()?",
    options: [
      "Первый завершившийся Promise",
      "Первый успешно выполненный Promise",
      "Все успешно выполненные Promise",
      "Первый отклонённый Promise",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Promise.any() возвращает результат первого успешно выполненного Promise.",
  },
  {
    id: 187,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что выполняется раньше после завершения синхронного кода?",
    options: [
      "Callback setTimeout",
      "Обработчик Promise.then",
      "Событие click",
      "Новый HTTP-запрос",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Обработчики Promise помещаются в очередь микрозадач, которая обрабатывается раньше очереди таймеров.",
  },
  {
    id: 188,
    category: "JavaScript",
    difficulty: "hard",
    question: "Для чего используется AbortController?",
    options: [
      "Для перезапуска браузера",
      "Для отмены поддерживаемых асинхронных операций, например fetch",
      "Для обработки JSON",
      "Для блокировки Event Loop",
    ],
    correctAnswerIndex: 1,
    explanation:
      "AbortController создаёт сигнал, который можно использовать для отмены fetch и других поддерживаемых операций.",
  },
  {
    id: 189,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что такое прототипное наследование?",
    options: [
      "Копирование всех свойств одного объекта в другой",
      "Получение свойств и методов через цепочку прототипов",
      "Наследование только между классами",
      "Преобразование объекта в функцию",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Объект может искать отсутствующие свойства и методы в своём прототипе и далее по цепочке прототипов.",
  },
  {
    id: 190,
    category: "JavaScript",
    difficulty: "hard",
    question: "Что делает Object.create(proto)?",
    options: [
      "Создаёт объект с указанным прототипом",
      "Клонирует объект вместе со всеми вложенными значениями",
      "Замораживает прототип",
      "Создаёт класс",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Object.create() создаёт новый объект, прототипом которого становится переданный объект.",
  },

  // REACT — EASY

  {
    id: 191,
    category: "React",
    difficulty: "easy",
    question: "Что представляет собой React-компонент?",
    options: [
      "Только CSS-файл",
      "Переиспользуемую часть пользовательского интерфейса",
      "Отдельную базу данных",
      "HTTP-сервер",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React-компонент описывает переиспользуемую часть интерфейса и возвращает React-элементы.",
  },
  {
    id: 192,
    category: "React",
    difficulty: "easy",
    question:
      "С какой буквы должно начинаться имя пользовательского React-компонента?",
    options: ["С маленькой", "С заглавной", "С цифры", "С символа #"],
    correctAnswerIndex: 1,
    explanation:
      "Имена пользовательских компонентов начинаются с заглавной буквы, чтобы React отличал их от HTML-тегов.",
  },
  {
    id: 193,
    category: "React",
    difficulty: "easy",
    question: "Что такое JSX?",
    options: [
      "Отдельный язык программирования",
      "Синтаксис для описания интерфейса внутри JavaScript",
      "CSS-препроцессор",
      "Формат базы данных",
    ],
    correctAnswerIndex: 1,
    explanation:
      "JSX позволяет описывать структуру интерфейса с помощью синтаксиса, похожего на HTML.",
  },
  {
    id: 194,
    category: "React",
    difficulty: "easy",
    question: "Как в JSX вставить JavaScript-выражение?",
    options: [
      "В круглых скобках",
      "В фигурных скобках",
      "В квадратных скобках",
      "После символа $ без скобок",
    ],
    correctAnswerIndex: 1,
    explanation:
      "JavaScript-выражения внутри JSX помещаются в фигурные скобки.",
  },
  {
    id: 195,
    category: "React",
    difficulty: "easy",
    question: "Как в JSX указывается CSS-класс?",
    options: ["class", "className", "cssClass", "styleName"],
    correctAnswerIndex: 1,
    explanation: "В JSX для CSS-классов используется атрибут className.",
  },
  {
    id: 196,
    category: "React",
    difficulty: "easy",
    question: "Что такое props в React?",
    options: [
      "Локальная база данных",
      "Входные данные компонента",
      "Только CSS-свойства",
      "Методы браузера",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Props передаются компоненту извне и используются для его настройки.",
  },
  {
    id: 197,
    category: "React",
    difficulty: "easy",
    question:
      "Какой хук используется для хранения локального состояния компонента?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswerIndex: 1,
    explanation:
      "Хук useState добавляет локальное состояние функциональному компоненту.",
  },
  {
    id: 198,
    category: "React",
    difficulty: "easy",
    question: "Что возвращает вызов useState(initialValue)?",
    options: [
      "Только текущее значение",
      "Массив из значения состояния и функции обновления",
      "Объект props",
      "Promise",
    ],
    correctAnswerIndex: 1,
    explanation:
      "useState() возвращает массив с текущим значением и функцией для его обновления.",
  },
  {
    id: 199,
    category: "React",
    difficulty: "easy",
    question: "Как передать обработчик клика кнопке в React?",
    options: [
      "click={handleClick}",
      "onClick={handleClick}",
      'onclick="handleClick()"',
      "onPressOnly={handleClick}",
    ],
    correctAnswerIndex: 1,
    explanation: "В React обработчик клика передаётся через свойство onClick.",
  },
  {
    id: 200,
    category: "React",
    difficulty: "easy",
    question: "Как отобразить массив элементов в JSX?",
    options: [
      "С помощью map()",
      "Только с помощью while",
      "С помощью JSON.stringify()",
      "С помощью Object.assign()",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Метод map() часто используется для преобразования массива данных в массив React-элементов.",
  },

  {
    id: 201,
    category: "React",
    difficulty: "easy",
    question: "Для чего нужен prop key при рендеринге списка?",
    options: [
      "Для стилизации элемента",
      "Для уникальной идентификации элемента списка",
      "Для передачи состояния",
      "Для сортировки массива",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Prop key помогает React определять, какие элементы списка были изменены, добавлены или удалены.",
  },
  {
    id: 202,
    category: "React",
    difficulty: "easy",
    question: "Каким должен быть key у элементов списка?",
    options: [
      "Уникальным среди соседних элементов",
      "Одинаковым для всех элементов",
      "Только числом 0",
      "Случайным при каждом рендере",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Key должен быть стабильным и уникальным среди соседних элементов списка.",
  },
  {
    id: 203,
    category: "React",
    difficulty: "easy",
    question:
      "Какой специальный prop содержит вложенное содержимое компонента?",
    options: ["content", "children", "innerHTML", "nested"],
    correctAnswerIndex: 1,
    explanation:
      "Prop children содержит элементы, переданные между открывающим и закрывающим тегами компонента.",
  },
  {
    id: 204,
    category: "React",
    difficulty: "easy",
    question: "Какой хук используется для выполнения побочных эффектов?",
    options: ["useState", "useEffect", "useMemo", "useContext"],
    correctAnswerIndex: 1,
    explanation:
      "useEffect используется для запросов, подписок, таймеров и других побочных эффектов.",
  },
  {
    id: 205,
    category: "React",
    difficulty: "easy",
    question: "Что произойдёт после вызова функции обновления состояния?",
    options: [
      "React может запланировать новый рендер",
      "Страница обязательно перезагрузится",
      "Компонент будет удалён",
      "Изменится исходный HTML-файл",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Обновление состояния сообщает React, что компонент необходимо отрендерить с новыми данными.",
  },
  {
    id: 206,
    category: "React",
    difficulty: "easy",
    question: "Можно ли напрямую изменять state в React?",
    options: [
      "Да, всегда",
      "Нет, следует использовать функцию обновления",
      "Только внутри JSX",
      "Только для массивов",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Состояние следует обновлять через соответствующую функцию, не изменяя исходное значение напрямую.",
  },
  {
    id: 207,
    category: "React",
    difficulty: "easy",
    question: "Как обычно выполняется условный рендеринг в JSX?",
    options: [
      "С помощью обычных JavaScript-условий и тернарного оператора",
      "Только с помощью CSS",
      "Только с помощью switch внутри HTML",
      "Через специальный тег <if>",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Для условного рендеринга используются JavaScript-выражения, например тернарный оператор или &&.",
  },
  {
    id: 208,
    category: "React",
    difficulty: "easy",
    question: "Что делает React Fragment?",
    options: [
      "Создаёт дополнительный div",
      "Группирует элементы без дополнительного DOM-узла",
      "Удаляет дочерние элементы",
      "Создаёт портал",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Fragment позволяет вернуть несколько элементов без добавления лишнего контейнера в DOM.",
  },
  {
    id: 209,
    category: "React",
    difficulty: "easy",
    question: "Как выглядит сокращённая запись Fragment?",
    options: ["<fragment></fragment>", "<></>", "[]", "<group />"],
    correctAnswerIndex: 1,
    explanation:
      "Пустые JSX-теги <>...</> являются сокращённой записью React Fragment.",
  },
  {
    id: 210,
    category: "React",
    difficulty: "easy",
    question: "Что такое controlled input?",
    options: [
      "Поле, значение которого хранится в React state",
      "Поле без обработчиков",
      "Поле только для чтения",
      "Поле, управляемое CSS",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Управляемое поле получает value из состояния и обновляет его через обработчик события.",
  },

  // REACT — MEDIUM

  {
    id: 211,
    category: "React",
    difficulty: "medium",
    question: "Что означает пустой массив зависимостей у useEffect?",
    options: [
      "Эффект запускается после каждого рендера",
      "Эффект обычно запускается после первого монтирования",
      "Эффект никогда не запускается",
      "Эффект запускается только при удалении компонента",
    ],
    correctAnswerIndex: 1,
    explanation:
      "При пустом массиве зависимостей эффект запускается после монтирования компонента.",
  },
  {
    id: 212,
    category: "React",
    difficulty: "medium",
    question: "Когда useEffect без массива зависимостей выполняется повторно?",
    options: [
      "После каждого рендера",
      "Только один раз",
      "Только после клика",
      "Только при ошибке",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Если массив зависимостей не передан, эффект запускается после каждого завершённого рендера.",
  },
  {
    id: 213,
    category: "React",
    difficulty: "medium",
    question: "Для чего useEffect может возвращать функцию?",
    options: [
      "Для возврата JSX",
      "Для очистки подписок, таймеров и других эффектов",
      "Для обновления props",
      "Для создания состояния",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Функция очистки вызывается перед повторным выполнением эффекта и при размонтировании компонента.",
  },
  {
    id: 214,
    category: "React",
    difficulty: "medium",
    question: "Когда следует использовать функциональное обновление состояния?",
    options: [
      "Когда новое состояние зависит от предыдущего",
      "Только при работе со строками",
      "Только внутри useEffect",
      "Когда состояние никогда не меняется",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Форма setState(prev => ...) безопасно использует актуальное предыдущее значение.",
  },
  {
    id: 215,
    category: "React",
    difficulty: "medium",
    question: "Как правильно добавить элемент в массив состояния?",
    options: [
      "items.push(newItem)",
      "setItems([...items, newItem])",
      "items = newItem",
      "setItems(items.push(newItem))",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Новый массив создаётся через spread, после чего передаётся функции обновления состояния.",
  },
  {
    id: 216,
    category: "React",
    difficulty: "medium",
    question: "Как правильно обновить одно свойство объекта в state?",
    options: [
      'user.name = "Alex"',
      'setUser({ ...user, name: "Alex" })',
      "setUser(user.name)",
      'user.push({ name: "Alex" })',
    ],
    correctAnswerIndex: 1,
    explanation:
      "Объект состояния копируется, а нужное свойство переопределяется в новом объекте.",
  },
  {
    id: 217,
    category: "React",
    difficulty: "medium",
    question: "Для чего используется useContext?",
    options: [
      "Для чтения значения из React-контекста",
      "Для выполнения HTTP-запросов",
      "Для создания CSS-классов",
      "Для маршрутизации",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useContext позволяет компоненту получить текущее значение соответствующего контекста.",
  },
  {
    id: 218,
    category: "React",
    difficulty: "medium",
    question: "Какую проблему помогает решать Context API?",
    options: [
      "Prop drilling",
      "Медленный интернет",
      "Ошибки синтаксиса JSX",
      "Отсутствие CSS",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Context позволяет передавать общие данные глубоко по дереву без ручной передачи props на каждом уровне.",
  },
  {
    id: 219,
    category: "React",
    difficulty: "medium",
    question: "Для чего используется useRef?",
    options: [
      "Для хранения изменяемого значения без обязательного ререндера",
      "Только для HTTP-запросов",
      "Для создания маршрутов",
      "Для изменения props",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useRef хранит объект с полем current, изменение которого само по себе не вызывает рендер.",
  },
  {
    id: 220,
    category: "React",
    difficulty: "medium",
    question: "Как получить ссылку на DOM-элемент через useRef?",
    options: [
      "Передать ref-объект в атрибут ref",
      "Передать ref в className",
      "Использовать document.write",
      "Передать ref в key",
    ],
    correctAnswerIndex: 0,
    explanation:
      "React записывает DOM-узел в ref.current, если ref передан соответствующему элементу.",
  },
  {
    id: 221,
    category: "React",
    difficulty: "medium",
    question: "Для чего используется useMemo?",
    options: [
      "Для мемоизации вычисленного значения",
      "Для хранения DOM-узла",
      "Для выполнения побочных эффектов",
      "Для обработки ошибок",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useMemo сохраняет результат вычисления и пересчитывает его при изменении зависимостей.",
  },
  {
    id: 222,
    category: "React",
    difficulty: "medium",
    question: "Для чего используется useCallback?",
    options: [
      "Для мемоизации функции",
      "Для создания Promise",
      "Для обновления DOM напрямую",
      "Для остановки рендера",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useCallback возвращает мемоизированную функцию, которая меняется при изменении зависимостей.",
  },
  {
    id: 223,
    category: "React",
    difficulty: "medium",
    question: "Что делает React.memo?",
    options: [
      "Может пропустить рендер компонента при неизменившихся props",
      "Сохраняет данные в localStorage",
      "Удаляет состояние",
      "Создаёт контекст",
    ],
    correctAnswerIndex: 0,
    explanation:
      "React.memo сравнивает props и может избежать повторного рендера компонента.",
  },
  {
    id: 224,
    category: "React",
    difficulty: "medium",
    question: "Что такое lifting state up?",
    options: [
      "Перенос общего состояния в ближайший общий родительский компонент",
      "Перенос состояния в CSS",
      "Удаление useState",
      "Копирование состояния в каждый дочерний компонент",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Общее состояние поднимают к ближайшему общему предку, чтобы несколько компонентов могли его использовать.",
  },
  {
    id: 225,
    category: "React",
    difficulty: "medium",
    question: "Почему не рекомендуется использовать индекс массива как key?",
    options: [
      "Он всегда вызывает ошибку",
      "При изменении порядка элементов React может неверно сопоставить состояние",
      "Индекс нельзя передавать в JSX",
      "Индекс работает только со строками",
    ],
    correctAnswerIndex: 1,
    explanation:
      "При вставке, удалении или сортировке индекс перестаёт стабильно идентифицировать конкретный элемент.",
  },
  {
    id: 226,
    category: "React",
    difficulty: "medium",
    question: "Что делает event.preventDefault() в обработчике формы?",
    options: [
      "Предотвращает стандартную отправку и перезагрузку страницы",
      "Удаляет форму",
      "Останавливает React",
      "Очищает все поля автоматически",
    ],
    correctAnswerIndex: 0,
    explanation:
      "preventDefault() отменяет стандартное браузерное поведение события, например отправку формы.",
  },
  {
    id: 227,
    category: "React",
    difficulty: "medium",
    question: "Что такое custom hook?",
    options: [
      "Функция, переиспользующая логику с React-хуками",
      "Специальный JSX-тег",
      "CSS-модуль",
      "Встроенный компонент браузера",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Пользовательский хук позволяет вынести и повторно использовать логику состояния и эффектов.",
  },
  {
    id: 228,
    category: "React",
    difficulty: "medium",
    question: "С чего должно начинаться имя пользовательского хука?",
    options: ["get", "hook", "use", "create"],
    correctAnswerIndex: 2,
    explanation:
      "Имена пользовательских хуков начинаются с use, чтобы React и линтер распознавали их как хуки.",
  },
  {
    id: 229,
    category: "React",
    difficulty: "medium",
    question: "Где можно вызывать React-хуки?",
    options: [
      "На верхнем уровне React-компонента или пользовательского хука",
      "Внутри любого цикла",
      "Внутри любого условия",
      "Только в HTML-файле",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Хуки вызываются на верхнем уровне, чтобы порядок их вызовов оставался стабильным.",
  },
  {
    id: 230,
    category: "React",
    difficulty: "medium",
    question: "Что делает prop drilling?",
    options: [
      "Передаёт props через несколько промежуточных компонентов",
      "Удаляет props",
      "Объединяет состояния",
      "Создаёт серверный запрос",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Prop drilling возникает, когда данные приходится передавать через компоненты, которым они сами не нужны.",
  },

  // REACT — HARD

  {
    id: 231,
    category: "React",
    difficulty: "hard",
    question: "Что такое reconciliation в React?",
    options: [
      "Процесс сравнения деревьев элементов и обновления интерфейса",
      "Удаление всех компонентов",
      "Сериализация состояния",
      "Загрузка CSS",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Во время reconciliation React сравнивает предыдущее и новое дерево элементов и определяет необходимые обновления.",
  },
  {
    id: 232,
    category: "React",
    difficulty: "hard",
    question: "Как React определяет, что компонент в списке остался тем же?",
    options: [
      "По сочетанию типа элемента и key",
      "Только по тексту",
      "Только по CSS-классу",
      "По позиции курсора",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Тип элемента и стабильный key помогают React сопоставлять элементы между рендерами.",
  },
  {
    id: 233,
    category: "React",
    difficulty: "hard",
    question: "Что происходит с состоянием компонента при изменении его key?",
    options: [
      "Состояние обычно сохраняется",
      "Компонент размонтируется и создаётся заново",
      "Изменяется только CSS",
      "Обновляются только props",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Новый key заставляет React воспринимать элемент как другой компонент, поэтому старое состояние сбрасывается.",
  },
  {
    id: 234,
    category: "React",
    difficulty: "hard",
    question: "Для чего подходит useReducer?",
    options: [
      "Для сложной логики состояния с несколькими связанными действиями",
      "Только для DOM-ссылок",
      "Только для CSS-анимаций",
      "Для создания маршрутов",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useReducer удобен, когда состояние изменяется через набор явно описанных действий.",
  },
  {
    id: 235,
    category: "React",
    difficulty: "hard",
    question: "Что должен делать reducer?",
    options: [
      "Возвращать новое состояние на основе текущего состояния и action",
      "Изменять DOM напрямую",
      "Выполнять JSX-разметку",
      "Создавать побочные эффекты при каждом вызове",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Reducer получает state и action и возвращает следующее состояние без прямой мутации исходного.",
  },
  {
    id: 236,
    category: "React",
    difficulty: "hard",
    question:
      "Почему нельзя без необходимости выполнять побочные эффекты во время рендера?",
    options: [
      "Рендер должен оставаться предсказуемым и чистым",
      "JSX не поддерживает функции",
      "React запрещает любые вычисления",
      "Побочные эффекты работают только в CSS",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Фаза рендера может выполняться повторно, поэтому она должна зависеть только от входных данных и не менять внешний мир.",
  },
  {
    id: 237,
    category: "React",
    difficulty: "hard",
    question: "Что такое stale closure в React?",
    options: [
      "Замыкание, использующее устаревшие значения state или props",
      "Удалённый компонент",
      "Ошибка CSS-модуля",
      "Мемоизированный DOM-элемент",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Функция может сохранить значения из старого рендера и позже использовать уже неактуальные данные.",
  },
  {
    id: 238,
    category: "React",
    difficulty: "hard",
    question:
      "Почему важно указывать все используемые значения в зависимостях useEffect?",
    options: [
      "Чтобы эффект синхронизировался с актуальными значениями",
      "Чтобы JSX был короче",
      "Чтобы отключить рендер",
      "Чтобы удалить cleanup",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Пропущенная зависимость может привести к работе эффекта с устаревшими значениями.",
  },
  {
    id: 239,
    category: "React",
    difficulty: "hard",
    question: "Когда useMemo может быть бесполезен?",
    options: [
      "Когда вычисление дешёвое и мемоизация добавляет лишнюю сложность",
      "Когда значение зависит от props",
      "Когда компонент содержит JSX",
      "Когда используется массив",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Мемоизация сама имеет стоимость и не нужна для простых вычислений без реальной проблемы производительности.",
  },
  {
    id: 240,
    category: "React",
    difficulty: "hard",
    question: "Что такое batching обновлений состояния?",
    options: [
      "Объединение нескольких обновлений в один цикл рендера",
      "Удаление старого state",
      "Последовательная загрузка компонентов",
      "Копирование props",
    ],
    correctAnswerIndex: 0,
    explanation:
      "React может группировать несколько обновлений, чтобы сократить количество рендеров.",
  },
  {
    id: 241,
    category: "React",
    difficulty: "hard",
    question: "Что такое React Portal?",
    options: [
      "Способ отрендерить дочерний элемент в другом DOM-узле",
      "Инструмент маршрутизации",
      "Хранилище состояния",
      "Тип CSS Grid",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Portal позволяет визуально разместить элемент вне DOM-контейнера родителя, сохраняя его в React-дереве.",
  },
  {
    id: 242,
    category: "React",
    difficulty: "hard",
    question: "Для каких элементов часто используют Portal?",
    options: [
      "Для модальных окон и всплывающих элементов",
      "Только для таблиц",
      "Только для изображений",
      "Только для форм",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Модалки, tooltip и dropdown часто рендерят через portal, чтобы избежать проблем с overflow и stacking context.",
  },
  {
    id: 243,
    category: "React",
    difficulty: "hard",
    question: "Что делает lazy() в React?",
    options: [
      "Позволяет загружать компонент динамически",
      "Замедляет рендер",
      "Создаёт состояние",
      "Удаляет props",
    ],
    correctAnswerIndex: 0,
    explanation:
      "React.lazy() позволяет загружать код компонента только тогда, когда он потребуется.",
  },
  {
    id: 244,
    category: "React",
    difficulty: "hard",
    question: "Для чего используется Suspense при ленивой загрузке компонента?",
    options: [
      "Для отображения fallback во время загрузки",
      "Для хранения глобального состояния",
      "Для обработки кликов",
      "Для замены useEffect",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Suspense отображает резервный интерфейс, пока лениво загружаемый компонент ещё не готов.",
  },
  {
    id: 245,
    category: "React",
    difficulty: "hard",
    question: "Что такое Error Boundary?",
    options: [
      "Компонент, перехватывающий ошибки рендера в дочернем дереве",
      "Способ проверки формы",
      "Хук для HTTP-ошибок",
      "CSS-класс для ошибок",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Error Boundary может показать резервный интерфейс, если в дочернем дереве произошла ошибка рендера.",
  },
  {
    id: 246,
    category: "React",
    difficulty: "hard",
    question:
      "Перехватывает ли Error Boundary ошибки внутри обработчиков событий?",
    options: [
      "Нет, такие ошибки нужно обрабатывать отдельно",
      "Да, всегда",
      "Только при использовании useEffect",
      "Только в development-режиме",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Error Boundary не перехватывает ошибки обработчиков событий и некоторых асинхронных операций.",
  },
  {
    id: 247,
    category: "React",
    difficulty: "hard",
    question: "Для чего используется StrictMode в development-режиме?",
    options: [
      "Для выявления потенциальных проблем в компонентах",
      "Для ускорения production-сборки",
      "Для создания маршрутов",
      "Для автоматического исправления кода",
    ],
    correctAnswerIndex: 0,
    explanation:
      "StrictMode активирует дополнительные проверки и помогает обнаруживать небезопасные побочные эффекты.",
  },
  {
    id: 248,
    category: "React",
    difficulty: "hard",
    question:
      "Почему эффект в StrictMode может запускаться повторно при разработке?",
    options: [
      "React проверяет корректность логики установки и очистки эффекта",
      "Это всегда ошибка браузера",
      "Из-за отсутствия CSS",
      "Потому что useEffect работает как цикл",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Повторный цикл установки и очистки помогает выявить эффекты, которые неправильно освобождают ресурсы.",
  },
  {
    id: 249,
    category: "React",
    difficulty: "hard",
    question: "Что означает hydration в React?",
    options: [
      "Подключение React-логики к HTML, созданному на сервере",
      "Очистка состояния",
      "Создание CSS-анимации",
      "Загрузка данных из localStorage",
    ],
    correctAnswerIndex: 0,
    explanation:
      "При hydration React добавляет интерактивность к уже существующей серверной HTML-разметке.",
  },
  {
    id: 250,
    category: "React",
    difficulty: "hard",
    question: "Что может вызвать hydration mismatch?",
    options: [
      "Различие серверной и клиентской разметки",
      "Одинаковые props",
      "Использование className",
      "Наличие обработчика onClick",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Hydration mismatch возникает, когда HTML, созданный клиентом, не совпадает с серверной разметкой.",
  },
  {
    id: 251,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут loading=\"lazy\" у тега <img>?",
    options: [
      "Откладывает загрузку изображения до приближения к области видимости",
      "Запрещает кэширование изображения",
      "Загружает изображение только после клика",
      "Уменьшает размер файла изображения",
    ],
    correctAnswerIndex: 0,
    explanation:
      "loading=\"lazy\" позволяет браузеру отложить загрузку изображения, пока оно не понадобится пользователю.",
  },
  {
    id: 252,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего используется атрибут srcset у тега <img>?",
    options: [
      "Для указания набора изображений под разные размеры или плотность экранов",
      "Для задания запасного текста",
      "Для подключения внешней таблицы стилей",
      "Для запрета скачивания изображения",
    ],
    correctAnswerIndex: 0,
    explanation:
      "srcset помогает браузеру выбрать наиболее подходящий файл изображения для текущего устройства и условий отображения.",
  },
  {
    id: 253,
    category: "HTML",
    difficulty: "hard",
    question: "Какую роль выполняет атрибут sizes вместе с srcset?",
    options: [
      "Описывает предполагаемую ширину изображения в разных условиях макета",
      "Задает физический размер исходного файла",
      "Определяет высоту изображения в пикселях",
      "Выбирает формат изображения вручную",
    ],
    correctAnswerIndex: 0,
    explanation:
      "sizes сообщает браузеру, сколько места изображение займет в layout, чтобы он выбрал подходящий ресурс из srcset.",
  },
  {
    id: 254,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего нужен тег <picture>?",
    options: [
      "Для выбора разных источников изображения по условиям media или type",
      "Для создания галереи без CSS",
      "Для обязательной оптимизации всех изображений",
      "Для вставки только SVG-изображений",
    ],
    correctAnswerIndex: 0,
    explanation:
      "<picture> позволяет использовать art direction и отдавать разные изображения или форматы в зависимости от условий.",
  },
  {
    id: 255,
    category: "HTML",
    difficulty: "hard",
    question: "Что означает атрибут defer у тега <script>?",
    options: [
      "Скрипт загружается параллельно и выполняется после разбора HTML",
      "Скрипт выполняется до загрузки HTML",
      "Скрипт блокирует загрузку изображений",
      "Скрипт выполняется только при клике пользователя",
    ],
    correctAnswerIndex: 0,
    explanation:
      "defer не блокирует парсинг документа и выполняет скрипт после построения DOM, сохраняя порядок скриптов.",
  },
  {
    id: 256,
    category: "HTML",
    difficulty: "hard",
    question: "Чем async отличается от defer у <script>?",
    options: [
      "async выполняет скрипт сразу после загрузки, не гарантируя порядок",
      "async всегда выполняется после DOMContentLoaded",
      "async работает только для inline-скриптов",
      "async запрещает загрузку скрипта из сети",
    ],
    correctAnswerIndex: 0,
    explanation:
      "async подходит для независимых скриптов: выполнение начнется, как только файл загрузится, порядок не гарантируется.",
  },
  {
    id: 257,
    category: "HTML",
    difficulty: "hard",
    question: "Какой тег лучше использовать для основной уникальной области страницы?",
    options: ["<main>", "<section>", "<article>", "<div>"],
    correctAnswerIndex: 0,
    explanation:
      "<main> обозначает основное содержимое документа; обычно на странице должен быть один такой landmark.",
  },
  {
    id: 258,
    category: "HTML",
    difficulty: "hard",
    question: "Когда уместно использовать <article>?",
    options: [
      "Когда блок может существовать самостоятельно: пост, карточка новости, комментарий",
      "Только для правой колонки сайта",
      "Только внутри формы",
      "Для любого декоративного контейнера",
    ],
    correctAnswerIndex: 0,
    explanation:
      "<article> описывает самостоятельную единицу контента, которую можно переиспользовать или распространять отдельно.",
  },
  {
    id: 259,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут aria-label?",
    options: [
      "Задает доступное имя элемента для вспомогательных технологий",
      "Меняет видимый текст элемента",
      "Создает подсказку при наведении",
      "Подключает CSS-класс",
    ],
    correctAnswerIndex: 0,
    explanation:
      "aria-label дает элементу имя для accessibility API, особенно когда видимого текстового названия нет.",
  },
  {
    id: 260,
    category: "HTML",
    difficulty: "hard",
    question: "Когда лучше использовать aria-labelledby вместо aria-label?",
    options: [
      "Когда доступное имя уже есть в видимом элементе на странице",
      "Когда нужно скрыть элемент от скринридера",
      "Когда элемент не должен получать фокус",
      "Когда нужно изменить URL ссылки",
    ],
    correctAnswerIndex: 0,
    explanation:
      "aria-labelledby связывает элемент с уже существующим текстом, что помогает не дублировать подписи.",
  },
  {
    id: 261,
    category: "HTML",
    difficulty: "hard",
    question: "Что означает атрибут aria-hidden=\"true\"?",
    options: [
      "Элемент скрывается от вспомогательных технологий",
      "Элемент полностью удаляется из DOM",
      "Элемент становится невидимым в CSS",
      "Элемент автоматически получает display: none",
    ],
    correctAnswerIndex: 0,
    explanation:
      "aria-hidden=\"true\" исключает элемент из дерева доступности, но не скрывает его визуально.",
  },
  {
    id: 262,
    category: "HTML",
    difficulty: "hard",
    question: "Почему не стоит ставить positive tabindex, например tabindex=\"5\"?",
    options: [
      "Он ломает естественный порядок фокуса и усложняет навигацию с клавиатуры",
      "Он запрещен только для ссылок",
      "Он ускоряет загрузку страницы",
      "Он делает элемент недоступным для CSS",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Положительные значения tabindex создают ручной порядок фокуса, который легко становится нелогичным и неудобным.",
  },
  {
    id: 263,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает tabindex=\"-1\"?",
    options: [
      "Позволяет фокусировать элемент программно, но убирает его из обычной Tab-навигации",
      "Полностью запрещает фокус",
      "Перемещает элемент в начало порядка фокуса",
      "Делает элемент обязательным в форме",
    ],
    correctAnswerIndex: 0,
    explanation:
      "tabindex=\"-1\" полезен для управления фокусом через JavaScript, например после открытия модального окна.",
  },
  {
    id: 264,
    category: "HTML",
    difficulty: "hard",
    question: "Какой input type лучше использовать для выбора даты?",
    options: ["date", "calendar", "datetime", "time-date"],
    correctAnswerIndex: 0,
    explanation:
      "type=\"date\" дает браузеру семантический контроль выбора даты и более подходящую клавиатуру на мобильных устройствах.",
  },
  {
    id: 265,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего нужен атрибут autocomplete у полей формы?",
    options: [
      "Чтобы подсказать браузеру, какие данные можно подставлять автоматически",
      "Чтобы проверить поле регулярным выражением",
      "Чтобы отключить отправку формы",
      "Чтобы скрыть поле от пользователя",
    ],
    correctAnswerIndex: 0,
    explanation:
      "autocomplete улучшает UX и доступность, помогая браузеру корректно заполнять знакомые типы данных.",
  },
  {
    id: 266,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут novalidate у формы?",
    options: [
      "Отключает встроенную браузерную валидацию при отправке",
      "Запрещает отправку формы на сервер",
      "Делает все поля необязательными визуально",
      "Удаляет значения полей после отправки",
    ],
    correctAnswerIndex: 0,
    explanation:
      "novalidate говорит браузеру не применять стандартную HTML-валидацию перед отправкой формы.",
  },
  {
    id: 267,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут form у элемента <button> или <input>?",
    options: [
      "Связывает элемент с формой по id, даже если он находится вне нее",
      "Меняет CSS-стили формы",
      "Создает новую форму автоматически",
      "Запрещает элементу отправлять данные",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Атрибут form позволяет управлять формой из другого места DOM, если указать id нужной формы.",
  },
  {
    id: 268,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего используется атрибут contenteditable?",
    options: [
      "Чтобы сделать содержимое элемента редактируемым пользователем",
      "Чтобы запретить изменение текста",
      "Чтобы подключить внешний редактор кода",
      "Чтобы сохранить содержимое в localStorage автоматически",
    ],
    correctAnswerIndex: 0,
    explanation:
      "contenteditable включает редактирование содержимого прямо на странице, но сохранение данных нужно реализовывать отдельно.",
  },
  {
    id: 269,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут inert?",
    options: [
      "Исключает область из фокуса и взаимодействия пользователя",
      "Делает элемент полупрозрачным",
      "Откладывает загрузку элемента",
      "Автоматически закрывает диалог",
    ],
    correctAnswerIndex: 0,
    explanation:
      "inert полезен, например, когда фон страницы должен стать недоступным во время открытого модального окна.",
  },
  {
    id: 270,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего нужен элемент <template>?",
    options: [
      "Для хранения фрагмента HTML, который не отображается до клонирования скриптом",
      "Для подключения шаблона CSS",
      "Для создания обязательного layout страницы",
      "Для замены всех div на странице",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Содержимое <template> не рендерится сразу и может быть использовано JavaScript для создания DOM-фрагментов.",
  },
  {
    id: 271,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут sandbox у <iframe>?",
    options: [
      "Ограничивает возможности встроенной страницы набором разрешений",
      "Ускоряет загрузку iframe",
      "Удаляет iframe после загрузки",
      "Автоматически сжимает содержимое iframe",
    ],
    correctAnswerIndex: 0,
    explanation:
      "sandbox включает ограничения безопасности для iframe; отдельные возможности можно вернуть через allow-* токены.",
  },
  {
    id: 272,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего нужен атрибут srcdoc у <iframe>?",
    options: [
      "Чтобы задать HTML-содержимое iframe прямо в атрибуте",
      "Чтобы указать внешний CSS-файл",
      "Чтобы запретить загрузку iframe",
      "Чтобы задать заголовок iframe",
    ],
    correctAnswerIndex: 0,
    explanation:
      "srcdoc позволяет встроить HTML-документ напрямую, без отдельного URL в src.",
  },
  {
    id: 273,
    category: "HTML",
    difficulty: "hard",
    question: "Что описывает rel=\"noopener\" у ссылки с target=\"_blank\"?",
    options: [
      "Запрещает новой странице доступ к window.opener исходной страницы",
      "Открывает ссылку в той же вкладке",
      "Предзагружает страницу до клика",
      "Запрещает поисковикам индексировать ссылку",
    ],
    correctAnswerIndex: 0,
    explanation:
      "noopener защищает исходную страницу от управления через window.opener после открытия новой вкладки.",
  },
  {
    id: 274,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает rel=\"preload\" в теге <link>?",
    options: [
      "Сообщает браузеру заранее загрузить важный ресурс для текущей страницы",
      "Загружает следующую HTML-страницу после клика",
      "Отключает кэширование ресурса",
      "Подключает JavaScript-модуль",
    ],
    correctAnswerIndex: 0,
    explanation:
      "preload используется для ранней загрузки критичных ресурсов, например шрифтов или hero-изображений.",
  },
  {
    id: 275,
    category: "HTML",
    difficulty: "hard",
    question: "Чем <strong> семантически отличается от <b>?",
    options: [
      "<strong> обозначает важность, а <b> только стилистически выделяет текст",
      "<strong> всегда делает текст красным",
      "<b> доступнее для скринридеров",
      "<strong> можно использовать только внутри заголовков",
    ],
    correctAnswerIndex: 0,
    explanation:
      "<strong> несет смысловую важность, тогда как <b> используется для визуального выделения без дополнительной семантики.",
  },
  {
    id: 276,
    category: "HTML",
    difficulty: "hard",
    question: "Чем <em> семантически отличается от <i>?",
    options: [
      "<em> задает смысловое ударение, а <i> обозначает текст в альтернативном голосе или стиле",
      "<em> всегда означает ошибку",
      "<i> используется только для иконок",
      "<em> нельзя вкладывать в ссылки",
    ],
    correctAnswerIndex: 0,
    explanation:
      "<em> меняет смысловую интонацию текста, а <i> подходит для терминов, мыслей, названий или другого альтернативного оформления.",
  },
  {
    id: 277,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает элемент <dialog>?",
    options: [
      "Предоставляет нативный HTML-элемент для модальных и немодальных диалогов",
      "Создает всплывающую подсказку только через CSS",
      "Автоматически отправляет форму",
      "Заменяет alert во всех браузерах без JavaScript",
    ],
    correctAnswerIndex: 0,
    explanation:
      "<dialog> дает браузерную основу для диалоговых окон, включая методы show(), showModal() и close().",
  },
  {
    id: 278,
    category: "HTML",
    difficulty: "hard",
    question: "Что произойдет, если внутри <dialog> отправить форму с method=\"dialog\"?",
    options: [
      "Диалог закроется, а returnValue может получить значение кнопки",
      "Форма обязательно отправится на сервер",
      "Страница перезагрузится без закрытия диалога",
      "Браузер проигнорирует форму",
    ],
    correctAnswerIndex: 0,
    explanation:
      "method=\"dialog\" предназначен для закрытия dialog без сетевой отправки формы.",
  },
  {
    id: 279,
    category: "HTML",
    difficulty: "hard",
    question: "Для чего используется атрибут fetchpriority?",
    options: [
      "Чтобы подсказать браузеру относительный приоритет загрузки ресурса",
      "Чтобы запретить загрузку по HTTP",
      "Чтобы выполнить fetch-запрос из HTML",
      "Чтобы автоматически кешировать API-ответ",
    ],
    correctAnswerIndex: 0,
    explanation:
      "fetchpriority может помочь повысить или понизить приоритет загрузки важных ресурсов, например главного изображения.",
  },
  {
    id: 280,
    category: "HTML",
    difficulty: "hard",
    question: "Что делает атрибут decoding=\"async\" у <img>?",
    options: [
      "Разрешает браузеру декодировать изображение асинхронно, не блокируя отрисовку",
      "Загружает изображение только через async script",
      "Сжимает изображение перед показом",
      "Отключает отображение alt-текста",
    ],
    correctAnswerIndex: 0,
    explanation:
      "decoding=\"async\" подсказывает браузеру, что декодирование изображения можно выполнить асинхронно.",
  },
];

export const arrStack = [
  { id: 1, technology: "HTML", color: "#E34F26", icon: HTML },
  { id: 2, technology: "CSS", color: "#663399", icon: CSS },
  { id: 3, technology: "JavaScript", color: "#F7DF1E", icon: JS },
  { id: 4, technology: "React", color: "#61DAFB", icon: React },
];

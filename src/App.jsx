import { useEffect, useState } from "react";

function App() {
  const quizData = [
    {
      id: 1,
      type: "multiple-choice",
      question: "Какая планета Солнечной системы является самой горячей?",
      options: ["Марс", "Венера", "Меркурий", "Юпитер"],
      correctAnswerIndex: 1,
      explanation:
        "Несмотря на то, что Меркурий находится ближе к Солнцу, Венера горячее из-за плотной атмосферы, которая удерживает тепло (парниковый эффект).",
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Кто написал роман «1984»?",
      options: [
        "Олдос Хаксли",
        "Рэй Брэдбери",
        "Джордж Оруэлл",
        "Фрэнсис Скотт Фицджеральд",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Роман-антиутопия «1984» был опубликован Джорджем Оруэллом в 1949 году.",
    },
    {
      id: 3,
      type: "multiple-choice",
      question:
        "Какой химический элемент составляет основу органической жизни на Земле?",
      options: ["Водород", "Кислород", "Углерод", "Азот"],
      correctAnswerIndex: 2,
      explanation:
        "Углерод способен формировать стабильные связи с другими элементами, что позволяет создавать сложные органические молекулы.",
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "В каком океане находится Марианская впадина?",
      options: ["Атлантический", "Тихий", "Индийский", "Северный Ледовитый"],
      correctAnswerIndex: 1,
      explanation:
        "Марианская впадина — глубочайший океанический желоб на Земле, расположенный в западной части Тихого океана.",
    },
    {
      id: 5,
      type: "multiple-choice",
      question:
        "Какое культовое архитектурное сооружение было официально открыто в Париже в 1889 году?",
      options: [
        "Эйфелева башня",
        "Лувр",
        "Триумфальная арка",
        "Собор Парижской Богоматери",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Эйфелева башня была построена к Всемирной выставке 1889 года, которая проходила в Париже и была приурочена к столетию Французской революции.",
    },
  ];

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);

  const [choiseOption, setChoiseOption] = useState(null);

  if (count >= quizData.length) {
    return (
      <p>
        Вы ответили на {score} из {quizData.length} вопросов
      </p>
    );
  }

  const { question, options, explanation, correctAnswerIndex } =
    quizData[count];

  function nextQuestion() {
    setCount((prev) => prev + 1);
    setChoiseOption(null);
  }

  function handleClick(index) {
    if (choiseOption === null) {
      setChoiseOption(index);
    }

    if (index === correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  }

  return (
    <div>
      <h2>{question}</h2>
      <div className="flex-class">
        {options.map((option, index) => {
          let classname = ``;

          if (choiseOption !== null) {
            if (index === correctAnswerIndex) {
              classname = "correct";
            } else if (choiseOption === index) {
              classname = `incorrect`;
            }
          }

          return (
            <button
              className={classname}
              key={index}
              disabled={choiseOption !== null}
              onClick={() => handleClick(index)}
            >
              {option}
            </button>
          );
        })}
      </div>

      {choiseOption && <p>{explanation}</p>}

      <button onClick={nextQuestion}>Следующий вопрос</button>

      <div>{score}</div>
    </div>
  );
}

export default App;

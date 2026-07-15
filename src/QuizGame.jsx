import { useEffect, useState, useMemo } from "react";
import { Button, Card, Typography, LinearProgress } from "@mui/material";
import { useParams } from "react-router";
import { Data } from "./data";

function QuizGame() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);

  const [choiseOption, setChoiseOption] = useState(null);

  const filteredQuizArray = Data.filter((data) => data.category === id);

  const quizData = useMemo(() => {
    const filtered = Data.filter((data) => data.category === id);

    const shuffled = [...filtered];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 10);
  }, [id]);
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

  const progressPercent = (count / quizData.length) * 100;

  return (
    <div className="flex pt-20 px-5 justify-center h-screen bg-zinc-800">
      <Card className="w-140 min-h-74 max-h-105 pt-3 px-8 pb-8 rounded-[10px] flex flex-col items-center justify-between gap-4 bg-zinc-700 text-white ">
        <Typography className="text-center " variant="h6" body="2">
          Вопрос {count + 1}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            width: "80%",
            height: 3,
            borderRadius: 4,
            backgroundColor: "#14532d", // фон полоски

            "& .MuiLinearProgress-bar": {
              backgroundColor: "#22c55e", // сама заполненная часть
              borderRadius: 5,
            },
          }}
        />
        <p className="text-center">{question}</p>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => {
            let classname = ``;

            if (choiseOption !== null) {
              if (index === correctAnswerIndex) {
                classname =
                  "bg-green-600! hover:bg-green-600! shadow-[0_0_20px_rgba(34,197,94,0.5)]";
              } else if (choiseOption === index) {
                classname = `bg-red-600! !hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.5)]`;
              }
            }

            return (
              <Button
                sx={{
                  color: "#fff",

                  bgcolor:
                    choiseOption !== null
                      ? index === correctAnswerIndex
                        ? "#16a34a"
                        : choiseOption === index
                          ? "#dc2626"
                          : "#9333ea"
                      : "#9333ea",

                  "&:hover": {
                    bgcolor:
                      choiseOption !== null
                        ? index === correctAnswerIndex
                          ? "#16a34a"
                          : choiseOption === index
                            ? "#dc2626"
                            : "#a855f7"
                        : "#a855f7",
                  },

                  boxShadow:
                    choiseOption !== null
                      ? index === correctAnswerIndex
                        ? "0 0 20px rgba(34,197,94,.5)"
                        : choiseOption === index
                          ? "0 0 20px rgba(239,68,68,.5)"
                          : "0 0 20px rgba(147,51,234,.3)"
                      : "0 0 20px rgba(147,51,234,.3)",

                  transition: ".3s",
                  p: 0,
                  m: 0,
                }}
                key={index}
                disabled={choiseOption !== null}
                onClick={() => handleClick(index)}
                className="text-[0.8rem] max-w-50 px-5 py-2 wrap-break-word text-center  normal-case"
              >
                {option}
              </Button>
            );
          })}
        </div>

        <p className="text-[0.8rem] text-center">
          {choiseOption !== null && explanation}
        </p>

        <Button
          className={`text-white normal-case mb-4 ${choiseOption !== null && `bg-purple-600`}`}
          disabled={choiseOption === null ? true : false}
          onClick={nextQuestion}
        >
          {count === quizData.length - 1
            ? "Подвести итоги"
            : "Следующий вопрос"}
        </Button>
      </Card>
    </div>
  );
}

export default QuizGame;

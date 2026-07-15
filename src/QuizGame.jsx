import { Button, Card, Typography, LinearProgress } from "@mui/material";
import { buttonStyles } from "./utils";
import { useQuiz } from "./QuizContext";

function QuizGame() {
  const {
    count,
    setCount,
    choiseOption,
    setChoiseOption,
    filteredQuizArray,
    score,
    setScore,
    id,
    quizData,
    nextQuestion,
    handleClick,
    progressPercent,
  } = useQuiz();

  if (count >= quizData.length) {
    return (
      <p>
        Вы ответили на {score} из {quizData.length} вопросов
      </p>
    );
  }

  const { question, options, explanation, correctAnswerIndex } =
    quizData[count];

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
                sx={buttonStyles(choiseOption, index, correctAnswerIndex)}
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

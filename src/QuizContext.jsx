import { useEffect, useState, useMemo, createContext, useContext } from "react";
import { useParams } from "react-router";
import { useQuestions } from "./hooks/useQuestions";

const QuizContext = createContext({});

export const QuizProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);

  const [choiseOption, setChoiseOption] = useState(null);

  const { quizData } = useQuestions();

  const progressPercent = (count / quizData.length) * 100;

  function nextQuestion() {
    setCount((prev) => prev + 1);
    setChoiseOption(null);
  }

  function handleClick(index, correctAnswerIndex) {
    if (choiseOption === null) {
      setChoiseOption(index);
    }

    if (index === correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  }

  return (
    <QuizContext.Provider
      value={{
        count,
        setCount,
        choiseOption,
        setChoiseOption,
        score,
        setScore,
        quizData,
        nextQuestion,
        handleClick,
        progressPercent,
        active,
        setActive,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuiz() {
  return useContext(QuizContext);
}

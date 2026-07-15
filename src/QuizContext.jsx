import { useEffect, useState, useMemo, createContext, useContext } from "react";
import { useParams } from "react-router";
import { useQuestions } from "./hooks/useQuestions";

const QuizContext = createContext({});

export const QuizProvider = ({ children }) => {
  const { id } = useParams();
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);

  const [choiseOption, setChoiseOption] = useState(null);

  const { nextQuestion, handleClick, quizData } = useQuestions();

  const progressPercent = (count / quizData.length) * 100;

  return (
    <QuizContext.Provider
      value={{
        count,
        setCount,
        choiseOption,
        setChoiseOption,
        score,
        setScore,
        id,
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

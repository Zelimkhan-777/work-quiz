import { Data } from "../data";
import { useParams } from "react-router";
import { useMemo, useState, useEffect } from "react";

export const useQuestions = () => {
  const { id } = useParams();
  const [currentMode, setCurrentMode] = useState(``);

  const questionAmount =
    (currentMode === "easy" && 10) ||
    (currentMode === "medium" && 15) ||
    (currentMode === "hard" && 20);

  const quizData = useMemo(() => {
    const filtered = Data.filter(
      (data) => data.category === id && data.difficulty === currentMode,
    );

    const shuffled = [...filtered];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, questionAmount);
  }, [id, currentMode]);

  return {
    quizData,
    currentMode,
    setCurrentMode,
  };
};

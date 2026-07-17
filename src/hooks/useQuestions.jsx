import { Data } from "../data";
import { useParams } from "react-router";
import { useMemo } from "react";

export const useQuestions = () => {
  const { id } = useParams();

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

  return {
    quizData,
  };
};

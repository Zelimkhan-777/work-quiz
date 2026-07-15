import { Data } from "./data";

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

export const useQuestions = () => {
  return {
    quizData,
    nextQuestion,
    handleClick,
  };
};

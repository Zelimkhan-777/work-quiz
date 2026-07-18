import { AnimatePresence, motion } from "framer-motion";
import QuizCards from "./QuizCards";
import Preview from "./Preview";
import { useQuiz } from "./QuizContext";
import { fadeUp } from "./motion";

const Content = () => {
  const { active } = useQuiz();

  return (
    <AnimatePresence mode="wait">
      {!active ? (
        <motion.div
          key="preview"
          className="flex w-full flex-1"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          exit={fadeUp.exit}
          transition={fadeUp.transition}
        >
          <Preview />
        </motion.div>
      ) : (
        <motion.div
          key="quiz-cards"
          className="flex w-full flex-1"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          exit={fadeUp.exit}
          transition={fadeUp.transition}
        >
          <QuizCards />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Content;

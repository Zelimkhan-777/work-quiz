import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useQuiz } from "./QuizContext";
import {
  motionDurations,
  motionEase,
  staggerContainer,
  staggerItem,
} from "./motion";

const Preview = () => {
  const { setActive } = useQuiz();

  return (
    <section className="flex min-h-full w-full flex-1 items-center justify-center">
      <motion.div
        className="flex w-full max-w-4xl -translate-y-3 flex-col items-center px-1 py-1 text-center sm:-translate-y-4 sm:px-4 sm:py-3 md:-translate-y-6 md:py-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <Typography
          component={motion.h1}
          variants={staggerItem}
          className="max-w-4xl text-balance text-white"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.45rem",
              md: "3.1rem",
              lg: "3.6rem",
            },
            lineHeight: {
              xs: 1.2,
              md: 1.15,
            },
            pt: {
              xs: 0,
              sm: 2,
              md: 4,
            },
            px: {
              xs: 0.5,
              sm: 1,
            },
          }}
        >
          Проверьте с{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FrontendFlex
          </span>{" "}
          свои знания по вебу
        </Typography>

        <Button
          component={motion.button}
          variants={staggerItem}
          whileHover={{
            y: -2,
            scale: 1.01,
            transition: {
              duration: motionDurations.fast,
              ease: motionEase,
            },
          }}
          whileTap={{
            scale: 0.985,
            transition: {
              duration: 0.12,
            },
          }}
          className="mt-6 rounded-xl border border-purple-500 bg-purple-600 px-5 py-2.5 font-bold text-white capitalize shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] active:scale-95 sm:mt-8 sm:px-6 sm:py-3"
          sx={{
            minWidth: {
              xs: 160,
              sm: 220,
            },
            maxWidth: {
              xs: 220,
              sm: "none",
            },
            fontSize: {
              xs: "0.88rem",
              sm: "1rem",
            },
            minHeight: {
              xs: 40,
              sm: 44,
            },
          }}
          size="medium"
          onClick={() => setActive(true)}
        >
          Перейти
        </Button>
      </motion.div>
    </section>
  );
};

export default Preview;

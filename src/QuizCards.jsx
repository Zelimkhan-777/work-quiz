import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { arrStack } from "./data";
import { staggerContainer, staggerItem } from "./motion";

const QuizCards = () => {
  return (
    <section className="flex min-h-full w-full flex-1 justify-center">
      <motion.div
        className="w-full max-w-6xl py-2 sm:py-4 md:py-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <Typography
          component={motion.h2}
          variants={staggerItem}
          variant="h5"
          className="mb-6 text-center text-white sm:mb-8"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
            },
          }}
        >
          Выберите тему
        </Typography>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
        >
          {arrStack.map(({ id, technology, color, icon }) => {
            return (
              <CategoryCard
                key={id}
                technology={technology}
                color={color}
                icon={icon}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QuizCards;

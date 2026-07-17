import { useParams } from "react-router";
import CategoryCard from "./CategoryCard";
import { Typography } from "@mui/material";
import { arrStack } from "./data";

const QuizCards = () => {
  return (
    <>
      <div className="w-1/2 h-1/2 pt-10">
        <Typography variant="h5" className="text-white text-center mb-8">
          Выберите тему
        </Typography>

        <div className="grid grid-cols-2  gap-4  ">
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
        </div>
      </div>
    </>
  );
};

export default QuizCards;

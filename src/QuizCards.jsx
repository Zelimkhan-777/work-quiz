import HTML from "../icons/html5.svg";
import CSS from "../icons/css.svg";
import JS from "../icons/javascript.svg";
import React from "../icons/jsreact.svg";

import CategoryCard from "./CategoryCard";
import { Typography } from "@mui/material";

const QuizCards = () => {
  const arrStack = [
    { id: 1, technology: "HTML", color: "#E34F26", icon: HTML },
    { id: 2, technology: "CSS", color: "#663399", icon: CSS },
    { id: 3, technology: "JavaScript", color: "#F7DF1E", icon: JS },
    { id: 4, technology: "React", color: "#61DAFB", icon: React },
  ];

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

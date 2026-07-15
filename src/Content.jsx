import { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import QuizCards from "./QuizCards";
import Preview from "./Preview";
import { useQuiz } from "./QuizContext";

const Content = () => {
  const { active } = useQuiz();
  return (
    <>
      {!active && <Preview />}

      {active && <QuizCards />}
    </>
  );
};

export default Content;

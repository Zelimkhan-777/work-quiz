import { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import QuizCards from "./QuizCards";

const Content = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      {!active && (
        <div className="flex flex-col items-center">
          <Typography className="w-100 text-[2.6rem] text-center pt-20 text-white">
            Проверьте с{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              FrontendFlex
            </span>{" "}
            свои знания по вебу
          </Typography>

          <Button
            className="mt-8 px-6 py-3 rounded-xl font-bold text-white bg-purple-600 border border-purple-500
  shadow-[0_0_20px_rgba(147,51,234,0.3)]  hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] active:scale-95 transition-all duration-300 capitalize"
            size="medium"
            onClick={() => setActive(true)}
          >
            Перейти
          </Button>
        </div>
      )}

      {active && <QuizCards />}
    </>
  );
};

export default Content;

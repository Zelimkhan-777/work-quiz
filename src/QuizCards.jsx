import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import HTML from "../icons/html5.svg";
import CSS from "../icons/css.svg";
import JS from "../icons/javascript.svg";
import React from "../icons/jsreact.svg";
import { Link } from "react-router";

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
          {arrStack.map((element) => {
            return (
              <Card
                key={element.id}
                className="bg-zinc-900 hover:bg-zinc-700 rounded-2xl"
              >
                <CardContent>
                  <Box className="flex items-center gap-4">
                    <div>
                      <img
                        style={{ backgroundColor: element.color }}
                        src={element.icon}
                        className={`w-15 h-15 rounded-[10px]`}
                        alt={element.technology}
                      />
                    </div>
                    <p className="text-[1.5rem] text-white">
                      {element.technology}
                    </p>
                  </Box>
                </CardContent>

                <CardActions>
                  <Button className="capitalize text-white hover:text-purple-600">
                    <Link to={`/card/${element.technology}`}>Начать</Link>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuizCards;

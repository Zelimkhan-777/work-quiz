import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useQuiz } from "./QuizContext";
import { motionDurations, motionEase, staggerItem } from "./motion";

const difficulty = [
  { id: 1, title: "Легкий", diffvalue: "easy" },
  { id: 2, title: "Средний", diffvalue: "medium" },
  { id: 3, title: "Тяжелый", diffvalue: "hard" },
];

const selectDisplayProps = {
  sx: {
    display: "flex",
    alignItems: "center",
    minHeight: 40,
  },
};

const selectSx = {
  minWidth: 136,
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background:
    "linear-gradient(180deg, rgba(24, 24, 27, 0.96) 0%, rgba(15, 23, 42, 0.92) 100%)",
  color: "rgba(255, 255, 255, 0.96)",
  fontSize: {
    xs: "0.9rem",
    sm: "1rem",
  },
  fontWeight: 600,
  overflow: "hidden",
  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
  transition:
    "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    borderColor: "rgba(168, 85, 247, 0.32)",
    background:
      "linear-gradient(180deg, rgba(39, 39, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%)",
  },
  "&.Mui-focused": {
    borderColor: "rgba(168, 85, 247, 0.55)",
    boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.18)",
  },
  "& .MuiSelect-select": {
    padding: "9px 38px 9px 14px",
    color: "inherit",
    lineHeight: 1.2,
  },
  "& .MuiSelect-icon": {
    color: "#c084fc",
    fontSize: "1.55rem",
    right: 8,
    transition: "transform 0.2s ease",
  },
  "& .MuiSelect-iconOpen": {
    transform: "rotate(180deg)",
  },
};

const selectMenuProps = {
  slotProps: {
    paper: {
      elevation: 0,
      sx: {
        mt: 1.2,
        borderRadius: "18px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "#111827",
        backgroundImage:
          "linear-gradient(180deg, rgba(39, 39, 42, 0.98) 0%, rgba(24, 24, 27, 0.98) 48%, rgba(15, 23, 42, 0.98) 100%)",
        color: "rgba(255, 255, 255, 0.96)",
        boxShadow:
          "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        overflow: "hidden",
        backdropFilter: "blur(14px)",
      },
    },
    list: {
      sx: {
        p: 0.75,
        backgroundColor: "#111827",
        backgroundImage:
          "linear-gradient(180deg, rgba(39, 39, 42, 0.98) 0%, rgba(24, 24, 27, 0.98) 48%, rgba(15, 23, 42, 0.98) 100%)",
      },
    },
  },
};

const menuItemSx = {
  minHeight: 46,
  fontSize: "0.95rem",
  fontWeight: 500,
  letterSpacing: "0.01em",
  margin: "4px 6px",
  padding: "10px 14px",
  borderRadius: "12px",
  color: "rgba(255, 255, 255, 0.94)",
  backgroundColor: "transparent",
  transition:
    "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(168, 85, 247, 0.14)",
    color: "#ffffff",
    transform: "translateX(2px)",
  },
  "&.Mui-selected": {
    color: "#e9d5ff",
    background:
      "linear-gradient(90deg, rgba(168, 85, 247, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%)",
    boxShadow: "inset 0 0 0 1px rgba(192, 132, 252, 0.16)",
  },
  "&.Mui-selected:hover": {
    background:
      "linear-gradient(90deg, rgba(168, 85, 247, 0.36) 0%, rgba(147, 51, 234, 0.24) 100%)",
  },
};

const CategoryCard = ({ color, technology, icon }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { setCurrentMode } = useQuiz();
  const [mode, setMode] = useState("easy");

  const handleChange = (event) => {
    const value = event.target.value;
    setMode(value);
    setIsSelectOpen(false);
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: {
          duration: motionDurations.fast,
          ease: motionEase,
        },
      }}
      whileTap={{
        scale: 0.992,
        transition: {
          duration: 0.12,
        },
      }}
      className="h-full"
    >
      <Card className="flex h-full flex-col rounded-2xl border border-white/8 bg-zinc-900 text-white transition-colors duration-300 hover:bg-zinc-800">
        <CardContent className=" flex flex-1 items-center justify-between p-4 sm:p-5">
          <Box className="flex items-center gap-3 sm:gap-4">
            <Box
              className="flex shrink-0 items-center justify-center rounded-[14px]"
              sx={{
                width: {
                  xs: 52,
                  sm: 60,
                },
                height: {
                  xs: 52,
                  sm: 60,
                },
                backgroundColor: color,
              }}
            >
              <motion.img
                src={icon}
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                alt={technology}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: motionDurations.normal,
                  ease: motionEase,
                  delay: 0.08,
                }}
              />
            </Box>

            <Typography
              className="min-w-0 wrap-break-word text-white"
              sx={{
                fontSize: {
                  xs: "1.15rem",
                  sm: "1.35rem",
                },
                lineHeight: 1.2,
                fontWeight: 600,
              }}
            >
              {technology}
            </Typography>
          </Box>

          <Box>
            <Select
              variant="standard"
              value={mode}
              onChange={(event) => handleChange(event)}
              open={isSelectOpen}
              onOpen={() => setIsSelectOpen(true)}
              onClose={() => setIsSelectOpen(false)}
              disableUnderline
              SelectDisplayProps={selectDisplayProps}
              sx={selectSx}
              MenuProps={selectMenuProps}
            >
              {difficulty.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    value={item.diffvalue}
                    sx={menuItemSx}
                    onClick={() => setIsSelectOpen(false)}
                  >
                    {item.title}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        </CardContent>

        <CardActions className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
          <Button
            className="w-full rounded-xl border border-purple-500/40 bg-purple-600 text-white transition-all duration-300 hover:bg-purple-500 hover:text-white active:scale-[0.98]"
            sx={{
              minHeight: 44,
            }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-2"
              to={`/card/${technology}`}
              onClick={() => setCurrentMode(mode)}
            >
              Начать
            </Link>
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;

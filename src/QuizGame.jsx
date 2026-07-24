import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  LinearProgress,
  Modal,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router";
import { arrStack } from "./data";
import { useBlockBackButton } from "./hooks/useBlockBackButton";
import {
  motionDurations,
  motionEase,
  staggerContainer,
  staggerItem,
} from "./motion";
import NotFound from "./NotFound";
import { useQuiz } from "./QuizContext";
import QuizResult from "./QuizResult";
import { buttonStyles } from "./utils";

const difficultyMeta = {
  easy: {
    label: "Легкий",
    color: "#22c55e",
    background: "rgba(34, 197, 94, 0.12)",
    border: "rgba(74, 222, 128, 0.24)",
  },
  medium: {
    label: "Средний",
    color: "#facc15",
    background: "rgba(250, 204, 21, 0.12)",
    border: "rgba(250, 204, 21, 0.24)",
  },
  hard: {
    label: "Тяжелый",
    color: "#fb7185",
    background: "rgba(244, 63, 94, 0.14)",
    border: "rgba(251, 113, 133, 0.28)",
  },
};

function QuizGame() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const leaveGame = useBlockBackButton("/");

  const currentCard = arrStack.find((item) => item.technology === id);

  const {
    count,
    choiseOption,
    score,
    setActive,
    resetStatistic,
    quizData,
    nextQuestion,
    handleClick,
    currentMode,
    progressPercent,
  } = useQuiz();

  if (!currentCard) {
    return <NotFound />;
  }

  if (count >= quizData.length) {
    return (
      <QuizResult
        score={score}
        total={quizData.length}
        technology={currentCard.technology}
        onRestart={resetStatistic}
        onBackToThemes={() => {
          resetStatistic();
          setActive(true);
          leaveGame();
        }}
      />
    );
  }

  const { question, options, explanation, correctAnswerIndex } =
    quizData[count];
  const difficulty = difficultyMeta[currentMode] ?? difficultyMeta.easy;

  return (
    <section className="flex min-h-full w-full flex-1 items-start justify-center">
      <motion.div
        className="flex w-full max-w-5xl justify-center py-2 sm:py-4"
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: motionDurations.normal,
          ease: motionEase,
        }}
      >
        <Card className="flex w-full max-w-4xl flex-col gap-5 rounded-[20px] bg-zinc-700 px-4 py-5 text-white shadow-[0_20px_70px_rgba(0,0,0,0.28)] sm:px-6 sm:py-6 md:px-8">
          <motion.div layout className="flex flex-col gap-4">
            <Box className="flex flex-col items-center gap-4">
              <Typography
                className="text-center text-zinc-300"
                sx={{
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                  },
                  fontWeight: 600,
                }}
              >
                Вопрос {count + 1} из {quizData.length}
              </Typography>

              <Box className="flex flex-wrap items-center justify-center gap-2">
                <Chip
                  label={currentCard.technology}
                  className="border border-purple-400/25 bg-purple-500/10 text-white"
                  sx={{
                    height: 32,
                    "& .MuiChip-label": {
                      px: 1.5,
                      fontWeight: 600,
                    },
                  }}
                />

                <Chip
                  label={difficulty.label}
                  className="font-semibold"
                  sx={{
                    height: 32,
                    color: difficulty.color,
                    backgroundColor: difficulty.background,
                    border: `1px solid ${difficulty.border}`,
                    "& .MuiChip-label": {
                      px: 1.5,
                      fontWeight: 700,
                    },
                  }}
                />
              </Box>
            </Box>

            <LinearProgress
              variant="determinate"
              value={progressPercent}
              sx={{
                width: "100%",
                mt: {
                  xs: 0.5,
                  sm: 0,
                },
                maxWidth: {
                  xs: "100%",
                  sm: 520,
                },
                alignSelf: "center",
                height: {
                  xs: 6,
                  sm: 7,
                },
                borderRadius: 999,
                backgroundColor: "#14532d",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#22c55e",
                  borderRadius: 999,
                  transition: "transform 340ms cubic-bezier(0.22, 1, 0.36, 1)",
                },
              }}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              layout
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.992,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.995,
              }}
              transition={{
                duration: motionDurations.normal,
                ease: motionEase,
              }}
              className="flex flex-col gap-5"
            >
              <Typography
                className="mx-auto flex w-full max-w-3xl items-center justify-center break-words text-center text-white"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                  },
                  lineHeight: 1.55,
                  minHeight: {
                    xs: "4.8rem",
                    sm: "5.4rem",
                  },
                  px: {
                    xs: 0.5,
                    sm: 1,
                  },
                }}
              >
                {question}
              </Typography>

              <motion.div
                className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {options.map((option, index) => {
                  const isSelected = choiseOption === index;
                  const isCorrect = index === correctAnswerIndex;

                  return (
                    <motion.div
                      key={`${count}-${index}`}
                      variants={staggerItem}
                      animate={
                        choiseOption !== null
                          ? {
                              scale: isSelected || isCorrect ? 1.015 : 1,
                              y: isSelected || isCorrect ? -2 : 0,
                            }
                          : {
                              scale: 1,
                              y: 0,
                            }
                      }
                      whileHover={
                        choiseOption === null
                          ? {
                              y: -2,
                              scale: 1.01,
                            }
                          : undefined
                      }
                      whileTap={
                        choiseOption === null
                          ? {
                              scale: 0.986,
                            }
                          : undefined
                      }
                      transition={{
                        duration: motionDurations.fast,
                        ease: motionEase,
                      }}
                    >
                      <Button
                        sx={{
                          ...buttonStyles(
                            choiseOption,
                            index,
                            correctAnswerIndex,
                          ),
                          width: "100%",
                          minHeight: {
                            xs: 52,
                            sm: 58,
                          },
                          borderRadius: "16px",
                          px: {
                            xs: 2,
                            sm: 2.5,
                          },
                          py: {
                            xs: 1.25,
                            sm: 1.5,
                          },
                          fontSize: {
                            xs: "0.92rem",
                            sm: "0.98rem",
                          },
                          lineHeight: 1.45,
                          textAlign: "center",
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                        }}
                        disabled={choiseOption !== null}
                        onClick={() => handleClick(index, correctAnswerIndex)}
                        className="normal-case"
                      >
                        {option}
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={
                    choiseOption !== null
                      ? `explanation-${count}`
                      : `placeholder-${count}`
                  }
                  layout
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                  }}
                  transition={{
                    duration: motionDurations.fast,
                    ease: motionEase,
                  }}
                >
                  <Typography
                    className="mx-auto w-full max-w-3xl break-words text-center text-zinc-200"
                    sx={{
                      minHeight: {
                        xs: "4.5rem",
                        sm: "5rem",
                      },
                      fontSize: {
                        xs: "0.88rem",
                        sm: "0.95rem",
                      },
                      lineHeight: 1.5,
                      px: {
                        xs: 0.5,
                        sm: 1,
                      },
                    }}
                  >
                    {choiseOption !== null ? explanation : " "}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          <motion.div
            layout
            className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.06,
              duration: motionDurations.normal,
              ease: motionEase,
            }}
          >
            <motion.div
              whileHover={
                choiseOption !== null
                  ? {
                      y: -2,
                      scale: 1.01,
                    }
                  : undefined
              }
              whileTap={
                choiseOption !== null
                  ? {
                      scale: 0.986,
                    }
                  : undefined
              }
              transition={{
                duration: motionDurations.fast,
                ease: motionEase,
              }}
              className="w-full sm:w-auto"
            >
              <Button
                className={`w-full rounded-xl text-white normal-case transition-all duration-300 sm:w-auto ${choiseOption !== null ? "bg-purple-600" : ""}`}
                sx={{
                  minHeight: 46,
                  px: {
                    xs: 3,
                    sm: 4,
                  },
                }}
                disabled={choiseOption === null}
                onClick={nextQuestion}
              >
                Далее
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.986,
              }}
              transition={{
                duration: motionDurations.fast,
                ease: motionEase,
              }}
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full rounded-xl bg-purple-600 text-white normal-case transition-all duration-300 hover:bg-purple-500 sm:w-auto"
                sx={{
                  minHeight: 46,
                  px: {
                    xs: 3,
                    sm: 4,
                  },
                }}
                onClick={() => setOpen(true)}
              >
                Завершить игру
              </Button>
            </motion.div>

            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="finish-game-title"
            >
              <AnimatePresence>
                {open ? (
                  <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: motionDurations.fast,
                      ease: motionEase,
                    }}
                  >
                    <Box
                      component={motion.div}
                      className="w-full rounded-[18px] border border-zinc-700/60 bg-zinc-800 text-white shadow-[0_18px_60px_rgba(0,0,0,0.4)]"
                      initial={{
                        opacity: 0,
                        y: 18,
                        scale: 0.985,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        scale: 0.99,
                      }}
                      transition={{
                        duration: motionDurations.normal,
                        ease: motionEase,
                      }}
                      sx={{
                        maxWidth: {
                          xs: "calc(100% - 32px)",
                          sm: 440,
                        },
                        p: {
                          xs: 2.5,
                          sm: 3,
                        },
                      }}
                    >
                      <Typography
                        id="finish-game-title"
                        variant="h6"
                        component="h2"
                        className="text-center text-white"
                        sx={{
                          fontSize: {
                            xs: "1rem",
                            sm: "1.15rem",
                          },
                          lineHeight: 1.45,
                        }}
                      >
                        Вы точно хотите закончить игру?
                      </Typography>

                      <Box className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
                        <motion.div
                          whileHover={{
                            y: -2,
                            scale: 1.01,
                          }}
                          whileTap={{
                            scale: 0.986,
                          }}
                          transition={{
                            duration: motionDurations.fast,
                            ease: motionEase,
                          }}
                          className="flex justify-center"
                        >
                          <Button
                            className="rounded-xl bg-purple-600 text-white normal-case hover:bg-purple-500"
                            sx={{
                              minHeight: {
                                xs: 38,
                                sm: 40,
                              },
                              minWidth: {
                                xs: 88,
                                sm: 96,
                              },
                              px: {
                                xs: 3,
                                sm: 3,
                              },
                              fontSize: {
                                xs: "0.84rem",
                                sm: "0.88rem",
                              },
                            }}
                            onClick={() => {
                              resetStatistic();
                              setActive(true);
                              leaveGame();
                            }}
                          >
                            Да
                          </Button>
                        </motion.div>

                        <motion.div
                          whileHover={{
                            y: -2,
                            scale: 1.01,
                          }}
                          whileTap={{
                            scale: 0.986,
                          }}
                          transition={{
                            duration: motionDurations.fast,
                            ease: motionEase,
                          }}
                          className="flex justify-center"
                        >
                          <Button
                            className="rounded-xl bg-purple-600 text-white normal-case hover:bg-purple-500"
                            sx={{
                              minHeight: {
                                xs: 38,
                                sm: 40,
                              },
                              minWidth: {
                                xs: 88,
                                sm: 96,
                              },
                              px: {
                                xs: 3,
                                sm: 3,
                              },
                              fontSize: {
                                xs: "0.84rem",
                                sm: "0.88rem",
                              },
                            }}
                            onClick={() => setOpen(false)}
                          >
                            Нет
                          </Button>
                        </motion.div>
                      </Box>
                    </Box>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </Modal>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}

export default QuizGame;

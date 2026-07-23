import { Button, Card, Chip, LinearProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  motionDurations,
  motionEase,
  staggerContainer,
  staggerItem,
} from "./motion";

const resultMessages = {
  excellent: {
    title: "Отличный результат",
    description:
      "Ты уверенно ориентируешься в теме и хорошо чувствуешь себя в вопросах по фронтенду.",
  },
  good: {
    title: "Очень достойно",
    description:
      "База крепкая. Пара тем просела, но в целом результат уже выглядит сильно.",
  },
  normal: {
    title: "Хороший старт",
    description:
      "Фундамент есть. Ещё немного практики, и следующий проход будет заметно сильнее.",
  },
};

function getResultTone(percent) {
  if (percent >= 80) {
    return resultMessages.excellent;
  }

  if (percent >= 50) {
    return resultMessages.good;
  }

  return resultMessages.normal;
}

function QuizResult({ score, total, technology, onRestart, onBackToThemes }) {
  const percent = Math.round((score / total) * 100);
  const resultTone = getResultTone(percent);

  return (
    <section className="flex min-h-full w-full flex-1 items-center justify-center">
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
        <Card className="relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/8 bg-zinc-900 px-4 py-5 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-6 sm:py-7 md:px-8 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_35%)]" />

          <motion.div
            className="relative flex flex-col gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
            >
              <Chip
                label={technology}
                className="w-fit border border-purple-400/25 bg-purple-500/10 text-white"
                sx={{
                  maxWidth: "100%",
                  "& .MuiChip-label": {
                    display: "block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                }}
              />

              <Typography
                className="wrap-break-word text-zinc-400"
                sx={{
                  fontSize: {
                    xs: "0.85rem",
                    sm: "0.95rem",
                  },
                }}
              >
                Завершено: {total} из {total} вопросов
              </Typography>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-3">
              <Typography
                variant="h4"
                className="font-semibold text-white"
                sx={{
                  fontSize: {
                    xs: "1.65rem",
                    sm: "2rem",
                    md: "2.35rem",
                  },
                  lineHeight: 1.15,
                }}
              >
                {resultTone.title}
              </Typography>

              <Typography
                className="max-w-2xl break-words text-zinc-300"
                sx={{
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                    md: "1.05rem",
                  },
                  lineHeight: 1.6,
                }}
              >
                {resultTone.description}
              </Typography>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]"
            >
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -3,
                  scale: 1.005,
                }}
                transition={{
                  duration: motionDurations.fast,
                  ease: motionEase,
                }}
                className="rounded-[20px] border border-white/8 bg-zinc-800/75 p-4 backdrop-blur sm:p-5"
              >
                <Typography className="text-sm uppercase tracking-[0.2em] text-zinc-500 sm:tracking-[0.24em]">
                  Точность
                </Typography>

                <Typography
                  className="mt-3 font-semibold text-white"
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3rem",
                    },
                    lineHeight: 1,
                  }}
                >
                  {percent}%
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={percent}
                  sx={{
                    mt: 3,
                    height: {
                      xs: 7,
                      sm: 8,
                    },
                    borderRadius: 999,
                    backgroundColor: "rgba(63,63,70,0.8)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg, #818cf8 0%, #a855f7 55%, #ec4899 100%)",
                      transition:
                        "transform 340ms cubic-bezier(0.22, 1, 0.36, 1)",
                    },
                  }}
                />

                <Typography
                  className="mt-3 break-words text-zinc-400"
                  sx={{
                    fontSize: {
                      xs: "0.88rem",
                      sm: "0.95rem",
                    },
                    lineHeight: 1.5,
                  }}
                >
                  Правильных ответов: {score} из {total}
                </Typography>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
              >
                <motion.div
                  variants={staggerItem}
                  whileHover={{
                    y: -3,
                    scale: 1.005,
                  }}
                  transition={{
                    duration: motionDurations.fast,
                    ease: motionEase,
                  }}
                  className="rounded-[20px] border border-emerald-400/15 bg-emerald-500/10 p-4 sm:p-5"
                >
                  <Typography className="text-sm text-emerald-200/80">
                    Верно
                  </Typography>
                  <Typography
                    className="mt-2 font-semibold text-emerald-300"
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2.2rem",
                      },
                      lineHeight: 1.1,
                    }}
                  >
                    {score}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  whileHover={{
                    y: -3,
                    scale: 1.005,
                  }}
                  transition={{
                    duration: motionDurations.fast,
                    ease: motionEase,
                  }}
                  className="rounded-[20px] border border-rose-400/15 bg-rose-500/10 p-4 sm:p-5"
                >
                  <Typography className="text-sm text-rose-200/80">
                    Ошибок
                  </Typography>
                  <Typography
                    className="mt-2 font-semibold text-rose-300"
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2.2rem",
                      },
                      lineHeight: 1.1,
                    }}
                  >
                    {total - score}
                  </Typography>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap"
            >
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
                  onClick={onRestart}
                  className="w-full rounded-xl border border-purple-400/30 bg-purple-600 px-5 py-3 font-semibold normal-case text-white shadow-[0_0_24px_rgba(147,51,234,0.35)] transition-all duration-300 hover:bg-purple-500 sm:w-auto"
                  sx={{
                    minHeight: 46,
                  }}
                >
                  Пройти ещё раз
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
                  onClick={onBackToThemes}
                  className="w-full rounded-xl border border-white/10 bg-zinc-800 px-5 py-3 font-semibold normal-case text-white transition-all duration-300 hover:bg-zinc-700 sm:w-auto"
                  sx={{
                    minHeight: 46,
                  }}
                >
                  К выбору темы
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}

export default QuizResult;

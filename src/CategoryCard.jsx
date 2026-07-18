import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { motionDurations, motionEase, staggerItem } from "./motion";

const CategoryCard = ({ color, technology, icon }) => {
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
        <CardContent className="flex-1 p-4 sm:p-5">
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
              className="min-w-0 break-words text-white"
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

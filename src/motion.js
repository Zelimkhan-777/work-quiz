export const motionDurations = {
  fast: 0.22,
  normal: 0.32,
  slow: 0.42,
};

export const motionEase = [0.22, 1, 0.36, 1];

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.99,
  },
  transition: {
    duration: motionDurations.normal,
    ease: motionEase,
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 16,
    scale: 0.985,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionDurations.normal,
      ease: motionEase,
    },
  },
};

export const buttonStyles = (choiseOption, index, correctAnswerIndex) => ({
  color: "#fff",

  bgcolor:
    choiseOption !== null
      ? index === correctAnswerIndex
        ? "#16a34a"
        : choiseOption === index
          ? "#dc2626"
          : "#9333ea"
      : "#9333ea",

  "&:hover": {
    bgcolor:
      choiseOption !== null
        ? index === correctAnswerIndex
          ? "#16a34a"
          : choiseOption === index
            ? "#dc2626"
            : "#a855f7"
        : "#a855f7",
  },

  boxShadow:
    choiseOption !== null
      ? index === correctAnswerIndex
        ? "0 0 20px rgba(34,197,94,.5)"
        : choiseOption === index
          ? "0 0 20px rgba(239,68,68,.5)"
          : "0 0 20px rgba(147,51,234,.3)"
      : "0 0 20px rgba(147,51,234,.3)",

  transition: ".3s",
  p: 0,
  m: 0,
});

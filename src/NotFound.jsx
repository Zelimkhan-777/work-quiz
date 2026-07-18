import { Box, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          py: 4,
        }}
      >
        {/* 🎨 СТАТИЧНЫЙ РИСУНОК СМАЙЛИКА НА CSS */}
        <Box
          sx={{
            width: { xs: 100, md: 120 },
            height: { xs: 100, md: 120 },
            borderRadius: "50%",
            backgroundColor: "#FFEB3B", // Классический желтый цвет
            border: "4px solid #2C3E50", // Четкий контур рисунка
            position: "relative",
            mb: 4,
            // Левый глаз
            "&::before": {
              content: '""',
              position: "absolute",
              top: "35%",
              left: "28%",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#2C3E50",
              // Правый глаз (через тень первого глаза)
              boxShadow: "36px 0 0 #2C3E50",
            },
            // Грустный рот (перевернутая дуга)
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "25%",
              left: "50%",
              width: "30px",
              height: "15px",
              border: "4px solid #2C3E50",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "30px 30px 0 0",
              transform: "translateX(-50%) rotate(180deg)",
            },
          }}
        />

        {/* ТЕКСТ ПОД РИСУНКОМ */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 1,
            color: "#2C3E50",
            letterSpacing: "-0.5px",
          }}
        >
          404. Страница не найдена
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "360px", lineHeight: 1.6 }}
        >
          Такой страницы нет, потому что Зелимхану плевать на пользователей и на
          себя. Хорошего дня!
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;

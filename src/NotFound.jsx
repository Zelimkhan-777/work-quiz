import { Box, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm" className="px-4 sm:px-6">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)",
          textAlign: "center",
          py: {
            xs: 6,
            sm: 8,
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 100, md: 120 },
            height: { xs: 100, md: 120 },
            borderRadius: "50%",
            backgroundColor: "#FFEB3B",
            border: "4px solid #2C3E50",
            position: "relative",
            mb: 4,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "35%",
              left: "28%",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#2C3E50",
              boxShadow: "36px 0 0 #2C3E50",
            },
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

        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 1,
            color: "#2C3E50",
            letterSpacing: "-0.5px",
            fontSize: {
              xs: "1.75rem",
              sm: "2.125rem",
            },
            lineHeight: 1.2,
          }}
        >
          404. Страница не найдена
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: "360px",
            lineHeight: 1.6,
            fontSize: {
              xs: "0.95rem",
              sm: "1rem",
            },
          }}
        >
          Такой страницы нет. Проверьте адрес или вернитесь на главный экран.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;

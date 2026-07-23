import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Router } from "./Router";

import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

// 2. И в самом конце импортируем стили Tailwind!
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <RouterProvider router={Router} />
    </StyledEngineProvider>
  </StrictMode>,
);

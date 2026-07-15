import { createBrowserRouter } from "react-router";
import Content from "./Content";
import QuizGame from "./QuizGame";
import Layout from "./Layout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    /*   errorElement: <NotFound />, */
    children: [
      { index: true, element: <Content /> },
      { path: "card/:id", element: <QuizGame /> },
    ],
  },
]);

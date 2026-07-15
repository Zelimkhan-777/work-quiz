import Header from "./Header";
import Content from "./Content";
import QuizGame from "./QuizGame";
import QuizCards from "./QuizCards";
import { Outlet } from "react-router";
import { QuizProvider } from "./QuizContext";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="flex justify-center h-screen bg-zinc-800">
        <QuizProvider>
          <Outlet />
        </QuizProvider>
      </main>
    </>
  );
};

export default Layout;

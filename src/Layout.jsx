import Header from "./Header";
import Content from "./Content";
import QuizGame from "./QuizGame";
import QuizCards from "./QuizCards";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="flex justify-center h-screen bg-zinc-800">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

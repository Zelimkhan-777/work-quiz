import Header from "./Header";
import { Outlet } from "react-router";
import { QuizProvider } from "./QuizContext";

const Layout = () => {
  return (
    <>
      <Header />

      <QuizProvider>
        <main className="min-h-[calc(100vh-64px)] bg-zinc-800">
          <div className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-screen-2xl px-4 py-6 sm:px-5 sm:py-8 md:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </QuizProvider>
    </>
  );
};

export default Layout;

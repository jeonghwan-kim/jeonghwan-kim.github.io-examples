import { lazy, Suspense, useState } from "react";

const Button = lazy(() => import("remote/button"));

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <h1>Host</h1>
      <Suspense fallback={"Loading..."}>
        <Button theme={theme} onClick={handleClick}>
          Change theme
        </Button>
      </Suspense>
    </>
  );
}

export default App;

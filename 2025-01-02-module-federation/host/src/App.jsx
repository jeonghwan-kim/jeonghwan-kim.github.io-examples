import React, {lazy, Suspense, useState} from "react";

import("myRemote/math").then(mathModule => {
    const math = mathModule.default;
    console.log(math.add(1,2));
})

const Button = lazy(() => import("myRemote/Button"));


function App() {
  const [theme, setTheme] = useState("light");

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

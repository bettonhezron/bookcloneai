import React from "react";
import { ThemeProvider } from "./context/Theme";
import BookAIClone from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <BookAIClone />
    </ThemeProvider>
  );
}

export default App;

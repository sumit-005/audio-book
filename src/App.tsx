import { useState } from "react";
import "./App.scss";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from "@mantine/core";
import Home from "./assets/svg/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "Poppins, sans-serif",
            colorScheme,
            colors: {
              primary: [
                "#F3F1FE",
                "#DDD7FC",
                "#BBB1FA",
                "#9487F1",
                "#7466E3",
                "#4838D1",
                "#3528B3",
                "#261C96",
                "#191179",
                "#100A64",
              ],
            },
            primaryColor: "primary",
          }}
        >
          <MainLayout />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;

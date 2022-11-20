import "./App.scss";
import { MantineProvider } from "@mantine/core";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <div>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Poppins, sans-serif",
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
    </div>
  );
}

export default App;

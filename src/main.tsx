import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { SlideProvider } from "./context/sidebarCtx";
import { ThemeProvider,  } from "./context/themeCtx";
import '@mantine/carousel/styles.css';

const Base = () => {
  // const { theme } = useThemeCtx();
  return (
    <MantineProvider
      // withNormalizeCSS
      // withGlobalStyles
      // theme={{ colors: theme }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SlideProvider>
        <Base />
      </SlideProvider>
    </ThemeProvider>
  </React.StrictMode>
);

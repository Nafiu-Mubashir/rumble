import "@mantine/core/styles.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "react-color-palette/css";

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import { router } from "./Router";
import { SlideProvider } from "./context/sidebarCtx";
import { ThemeProvider } from "./context/themeCtx";

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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import {  MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
// import '@mantine/carousel/styles.css';

// const theme = {};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      {/* <MantineThemeProvider theme={theme}> */}
        <RouterProvider router={router} />
      {/* </MantineThemeProvider> */}
    </MantineProvider>
  </React.StrictMode>
);

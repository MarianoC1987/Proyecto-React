import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Modal from "./Componentes/Main/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "modal/:id",
    element: <Modal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

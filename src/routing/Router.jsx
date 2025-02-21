import React from "react";
import { routes } from "./routes.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          >
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

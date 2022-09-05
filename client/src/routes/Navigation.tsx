import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routes as RouteInterface } from "../interfaces/routes/Routes";

import NavigationRoutes from "./NavigationRoutes";

function Navigation() {
  return (
    <Routes>
      {NavigationRoutes.map((page: RouteInterface) => {
        return <Route key={page.id} path={page.path} element={<page.component />} />;
      })}
    </Routes>
  );
}

export default Navigation;

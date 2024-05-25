import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import routes from "./config.js";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              Component={lazy(() => import(/* @vite-ignore */`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
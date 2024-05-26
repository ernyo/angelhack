import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";

import Home from "../pages/Home.jsx";
import ModuleScreen from "../pages/ModuleScreen.jsx";
import ModuleTemplate from "../pages/ModuleTemplate.jsx";
import StoryBoard from "../pages/StoryBoard.jsx";
import TextScreen from "../pages/TextScreen.jsx";
import URLScreen from "../pages/URLScreen.jsx";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        <Route
          path={"/"}
          Component={Home}
        />
        <Route
          path={"/text"}
          Component={TextScreen}
        />
        <Route
          path={"/url"}
          Component={URLScreen}
        />
        <Route
          path={"/story"}
          Component={StoryBoard}
        />
        <Route
          path={"/modules"}
          Component={ModuleScreen}
        />
        <Route
          path={"/modules/:id"}
          Component={ModuleTemplate}
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
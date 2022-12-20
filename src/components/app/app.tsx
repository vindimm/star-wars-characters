import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { AppRoute } from "../../const";
import HomePage from "../pages/home-page/home-page";
import CharactersPage from "../pages/characters-page/characters-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={AppRoute.Characters} element={<CharactersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteLayout from "./core/layouts/SiteLayout";
import GamesPage from "./core/pages/GamesPage";
import HomePage from "./core/pages/HomePage/HomePage";
import HangmanPage from "./games/hangman/pages/HangmanPage";
import PermutationPage from "./games/permutation/pages/PermutationPage";
import ComingSoonPage from "./core/pages/ComingSoonPage";

import "./styles.css";

function App() {
  return (
    <BrowserRouter basename="/personal-website">
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />

          <Route path="games">
            <Route index element={<GamesPage />} />
            <Route path="hangman" element={<HangmanPage />} />
            <Route path="permutation" element={<PermutationPage />} />
          </Route>

          <Route path="tools">
            <Route index element={<ComingSoonPage />} />
            <Route path="heic-to-png" element={<ComingSoonPage />} />
            <Route path="image-resizer" element={<ComingSoonPage />} />
            <Route path="file-reducer" element={<ComingSoonPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

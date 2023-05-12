import {
  BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom';

import { CacheProvider } from '@emotion/react';
import { emotionCache } from 'common/const/emotion';
import history from 'common/const/history';
import StyleRoot from 'theme/root';
import Babylon from './Babylon';
import Phaser from './Phaser';
import Three from './Three';
import ReactThree from "./ReactThree/index.jsx";

function GameRouter() {
  return (
    <CacheProvider value={emotionCache}>
      <StyleRoot />
      <Router
        history={history}
      >
        <Routes>
          <Route path="/Babylon" element={<Babylon />} />
          <Route path="/Phaser" element={<Phaser />} />
          <Route path="/Three" element={<Three />} />
          <Route path="/ReactThree" element={<ReactThree />} />
          <Route
            path="*"
            element={<Navigate to="/Babylon" />}
          />
        </Routes>
      </Router>
    </CacheProvider>
  );
}

export default GameRouter;

import logo from './logo.svg';
import './App.css';

import LandingPage from '../src/LandingPage.js';
import FinHubContainer from '../src/FinHub/FinHubContainer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/Home'} element={<FinHubContainer />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameOver from './GameOver';
import Main from './Main';

function App() {
  return (
    <Router basename="/valentines/prod/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </Router>
  );
}

export default App;

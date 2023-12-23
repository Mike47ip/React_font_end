import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;

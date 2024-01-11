import HomePage from '../../minsa/src/Pages/Home';
import AboutPage from './Pages/About';
import '../../minsa/src/Assets/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage />}/>
        <Route path = "/about" element = {<AboutPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

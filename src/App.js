import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import HobbyPage from './Pages/Hobby';
import SkillPage from './Pages/Skill';
import './Assets/style.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//when I need to configure using local host

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Hobby" element={<HobbyPage />} />
        <Route path="/Skill" element={<SkillPage />} />
      </Routes>
    </Router>
  );
}


export default App;

import HomePage from '../../minsa/src/Pages/Home';
import AboutPage from './Pages/About';
import '../../minsa/src/Assets/style.css';
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path = "/" element = {<HomePage />}/>
        <Route path = "/about" element = {<AboutPage />}/>
      </Routes>
  );
}

export default App;

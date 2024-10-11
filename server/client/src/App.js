import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './component/MainPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<MainPage />} />
 
      </Routes>
    </Router>
  );
}

export default App;

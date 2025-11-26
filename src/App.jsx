import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';
import Home from './pages/Home';
import Faelle from './pages/Faelle';
import Dokumente from './pages/Dokumente';
import Visualisierungen from './pages/Visualisierungen';
import Freigaben from './pages/Freigaben';
import Profile from './pages/Profile';
import Einstellungen from './pages/Einstellungen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <SecondaryNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faelle" element={<Faelle />} />
            <Route path="/dokumente" element={<Dokumente />} />
            <Route path="/visualisierungen" element={<Visualisierungen />} />
            <Route path="/freigaben" element={<Freigaben />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/einstellungen" element={<Einstellungen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

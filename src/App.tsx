import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MenuView from './components/MenuView';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu/:slug" element={<MenuView />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Fallback for demo purposes */}
        <Route path="/menu" element={<MenuView />} />
      </Routes>
    </Router>
  );
}

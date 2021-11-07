import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Pages from './pages/Pages';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Pages />
      <Footer />
    </Router>
  );
}

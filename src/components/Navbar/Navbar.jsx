import { Link } from 'react-router-dom';
import { URLS } from '../../pages/Pages';
import { Button } from '../Button/Button';
import './Navbar.css';

export default function Navbar() {
  const { HOME, UNIVERSE, ABOUT } = URLS;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Андалир
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to={HOME.path} className="nav-links">
              {HOME.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={UNIVERSE.path()} className="nav-links">
              {UNIVERSE.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ABOUT.path} className="nav-links">
              {ABOUT.name}
            </Link>
          </li>
        </ul>
        <Button buttonStyle="btn--outline">Войти</Button>
      </div>
    </nav>
  );
}

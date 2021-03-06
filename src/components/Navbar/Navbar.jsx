import { useState } from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../pages/Pages';
import { Button } from '../Button/Button';
import Dropdown from '../DropdownMenu/DropdownMenu';
import './Navbar.css';

const menuList = [
  { id: 1, name: 'Главы', link: '/universe/chapters' },
  { id: 2, name: 'Статьи', link: '/universe/articles' },
  { id: 3, name: 'Карта', link: '/universe/map' },
  { id: 4, name: 'Бестиарий', link: '/universe/bestiary' },
];

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
          <li className="nav-item" id="universe">
            <Dropdown list={menuList}>
              <div className="nav-links">{UNIVERSE.name}</div>
            </Dropdown>
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

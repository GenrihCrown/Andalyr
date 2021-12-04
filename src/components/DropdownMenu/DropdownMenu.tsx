import { cloneElement, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

// const menu = [
// { id: 1, menuItem: 'Главы' },
// { id: 2, menuItem: 'Статьи' },
// { id: 3, menuItem: 'Карта' },
// { id: 4, menuItem: 'Бестиарий' },
// ];

interface DropdownProps {
  list: any[];
  children: ReactElement;
}

export default function Dropdown({ list, children }: DropdownProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ position: 'relative', height: '100%' }}
      onMouseOut={() => setVisible(false)}
      onMouseOver={() => setVisible(true)}
    >
      <div style={{ position: 'relative', height: '100%' }}>
        {cloneElement(children, {
          className: visible ? 'nav-links-hover' : 'nav-links',
        })}
      </div>
      <div
        className={'link-list' + (visible ? '' : '-hidden')}
      >
        {list.map(({ id, name, link }) => (
          <Link className="menu-item" key={id} to={link}>
            <p>{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

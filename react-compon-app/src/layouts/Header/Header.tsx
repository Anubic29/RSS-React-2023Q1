import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <header className={styles['Header']}>
      <div className={styles['Header--inner']}>
        <nav className={styles['navigation']}>
          <ul>
            <li>
              <Link
                to="/"
                className={`${styles['link']} ${
                  activeRoute === '/' ? styles['active'] : ''
                }`.trim()}
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${styles['link']} ${
                  activeRoute === '/about' ? styles['active'] : ''
                }`.trim()}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

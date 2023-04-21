import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

interface HeaderProps {
  activeRoute: string;
}

function Header(props: HeaderProps) {
  return (
    <header className={styles['Header']} data-testid="header">
      <div className={styles['Header--inner']}>
        <nav className={styles['navigation']}>
          <ul>
            <li>
              <Link
                to="/"
                className={`${styles['link']} ${
                  props.activeRoute === '/' ? styles['active'] : ''
                }`.trim()}
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${styles['link']} ${
                  props.activeRoute === '/about' ? styles['active'] : ''
                }`.trim()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/form"
                className={`${styles['link']} ${
                  props.activeRoute === '/form' ? styles['active'] : ''
                }`.trim()}
              >
                Form
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

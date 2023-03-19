import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

interface HeaderProps {
  activeRoute: string;
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className={styles['Header']} data-testid="header">
        <div className={styles['Header--inner']}>
          <nav className={styles['navigation']}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={`${styles['link']} ${
                    this.props.activeRoute === '/' ? styles['active'] : ''
                  }`.trim()}
                >
                  Main
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${styles['link']} ${
                    this.props.activeRoute === '/about' ? styles['active'] : ''
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
}

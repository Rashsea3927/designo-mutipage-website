'use client';

import { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from '@/styles/mobile-navbar.module.scss';
import Link from 'next/link';

const navLinks = [
  {
    name: 'our company',
    href: '/our-company',
  },
  {
    name: 'locations',
    href: '/locations',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

const MobileNavbar = () => {
  const heightRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* Mobile */}
      <button type='button' onClick={() => setIsOpen(!isOpen)} className={clsx(styles.icon, isOpen && styles.open)}>
        <span className={clsx(styles.line, styles['line-1'])}></span>
        <span className={clsx(styles.line, styles['line-2'])}></span>
        <span className={clsx(styles.line, styles['line-3'])}></span>
      </button>

      <ul ref={heightRef} style={isOpen ? { maxHeight: `${heightRef.current?.scrollHeight}px` } : { maxHeight: 0 }} className={clsx(styles['nav-list'], isOpen && styles.open)}>
        {navLinks.map((link) => (
          <li key={link.name} className={styles['nav-item']}>
            <Link className={styles['nav-link']} href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={clsx(styles.modal, isOpen && styles['is-show'])} />
    </nav>
  );
};

export default MobileNavbar;

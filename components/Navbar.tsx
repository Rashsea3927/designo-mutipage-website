'use client';

import styles from '@/styles/navbar.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

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

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {/* Tablet ~ Desktop */}
      <ul className={styles['nav-list']}>
        {navLinks.map((link) => (
          <li key={link.name} className={styles['nav-item']}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

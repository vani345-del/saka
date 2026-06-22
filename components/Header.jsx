'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/o-que-fazemos', label: 'O que fazemos' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '/carreiras', label: 'Carreiras' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <Link href="/" className="header-logo" onClick={closeMenu}>
          SAKA
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Navegação principal">
          <ul className="header-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta">
          <Link href="/contacto" className="btn btn-primary">
            Simular agora
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`}>
        <nav aria-label="Navegação móvel">
          <ul className="mobile-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contacto" className="btn btn-primary" onClick={closeMenu}>
          Simular agora
        </Link>
      </div>
    </header>
  );
}

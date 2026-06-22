import Link from 'next/link';
import './Footer.css';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/o-que-fazemos', label: 'O que fazemos' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '/carreiras', label: 'Carreiras' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              SAKA
            </Link>
            <p className="footer-tagline">
              Financiamos o seu próximo smartphone, em prestações simples.
            </p>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className="footer-heading">Navegação</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div>
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-links">
              <li>
                <span className="confirmar">[CONFIRMAR COM CLIENTE: endereço]</span>
              </li>
              <li>
                <span className="confirmar">[CONFIRMAR COM CLIENTE: telefone]</span>
              </li>
              <li>
                <span className="confirmar">[CONFIRMAR COM CLIENTE: email]</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link href="/politica-de-privacidade">Política de Privacidade</Link>
              </li>
              <li>
                <span className="confirmar">[CONFIRMAR COM CLIENTE: razão social]</span>
              </li>
              <li>
                <span className="confirmar">[CONFIRMAR COM CLIENTE: NIF]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © 2025{' '}
            <span className="confirmar">[CONFIRMAR COM CLIENTE: razão social]</span>.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

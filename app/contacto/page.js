import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';
import './styles.css';

export const metadata = {
  title: 'Contacto — Saka',
  description: 'Entre em contacto com a Saka. Estamos aqui para ajudar com o seu plano de financiamento de smartphones em Angola.',
};

export default function Contacto() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <section className="page-header">
        <div className="container">
          <h1>Fale connosco</h1>
          <p>
            Tem dúvidas sobre o nosso modelo ou quer simular o seu plano? Estamos
            aqui para ajudar.
          </p>
        </div>
      </section>

      {/* ===== Contact Grid ===== */}
      <section className="section">
        <div className="container">
          <div className="contacto-grid">
            {/* Left — Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Right — Contact Info */}
            <ScrollReveal direction="right">
              <div className="contacto-info">
                <h3>Contacto directo</h3>
                <ul className="contacto-info-list">
                  <li>
                    <span className="contacto-info-label">Telefone</span>
                    <span className="confirmar">
                      [CONFIRMAR COM CLIENTE]
                    </span>
                  </li>
                  <li>
                    <span className="contacto-info-label">Email</span>
                    <span className="confirmar">
                      [CONFIRMAR COM CLIENTE]
                    </span>
                  </li>
                  <li>
                    <span className="contacto-info-label">WhatsApp</span>
                    <span className="confirmar">
                      [CONFIRMAR COM CLIENTE]
                    </span>
                  </li>
                </ul>

                <h3>Endereço</h3>
                <p>
                  <span className="confirmar">
                    [CONFIRMAR COM CLIENTE: endereço completo]
                  </span>
                </p>

                <div className="contacto-map-placeholder" aria-label="Mapa placeholder">
                  Mapa será adicionado após confirmação do endereço
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

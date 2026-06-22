import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './styles.css';

export const metadata = {
  title: 'Sobre Nós — Saka',
  description: 'Conheça a Saka — uma empresa angolana ao serviço de quem trabalha todos os dias. A nossa história, identidade e localização.',
};

export default function Sobre() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Sobre Nós</span>
          <h1>Uma empresa angolana, ao serviço de quem trabalha todos os dias.</h1>
        </div>
      </section>

      {/* ===== Porque Existimos ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="sobre-historia">
              <h2>Porque existimos</h2>
              <p>
                A Saka nasceu da ideia simples de que o acesso à tecnologia não
                devia ser um privilégio. Em Angola, um smartphone é, muitas vezes,
                a ferramenta mais importante para trabalhar, comunicar e criar
                oportunidades — e acreditamos que o caminho até ele devia ser
                simples e justo.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Identidade Legal ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="sobre-legal">
              <h2>Identidade legal</h2>
              <table className="legal-table">
                <tbody>
                  <tr>
                    <td>Razão social</td>
                    <td>
                      <span className="confirmar">
                        [CONFIRMAR COM CLIENTE: razão social completa]
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>NIF / Registo comercial</td>
                    <td>
                      <span className="confirmar">
                        [CONFIRMAR COM CLIENTE: NIF / número de registo comercial]
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Estatuto regulatório</td>
                    <td>
                      <span className="confirmar">
                        [CONFIRMAR COM CLIENTE: estatuto regulatório, se aplicável]
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Onde Estamos ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="sobre-onde">
              <h2>Onde estamos</h2>
              <p>
                <span className="confirmar">
                  [CONFIRMAR COM CLIENTE: endereço físico completo]
                </span>
              </p>
              <div className="sobre-map-placeholder" aria-label="Mapa placeholder">
                Mapa será adicionado após confirmação do endereço
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="sobre-cta">
              <h2>Tem perguntas? Fale connosco.</h2>
              <Link href="/contacto" className="btn btn-primary">
                Fale connosco
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

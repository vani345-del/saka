import ScrollReveal from '@/components/ScrollReveal';
import './styles.css';

export const metadata = {
  title: 'Carreiras — Saka',
  description: 'Junte-se à equipa da Saka. Construa o futuro do acesso à tecnologia em Angola.',
};

export default function Carreiras() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Carreiras</span>
          <h1>Construa o futuro do acesso à tecnologia em Angola.</h1>
        </div>
      </section>

      {/* ===== Porque Trabalhar ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="carreiras-porque">
              <h2>Porque trabalhar com a Saka</h2>
              <p>
                Somos uma equipa pequena, ambiciosa, e a crescer. Procuramos
                pessoas que querem causar impacto real na vida de milhares de
                trabalhadores angolanos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Vagas Abertas ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="carreiras-vagas">
              <h2>Vagas abertas</h2>
              <div className="carreiras-no-vagas">
                <p>
                  Não temos vagas abertas neste momento. Mas estamos sempre
                  interessados em conhecer pessoas talentosas — envie-nos o seu CV.
                </p>
                <p>
                  <span className="confirmar">
                    [CONFIRMAR COM CLIENTE: email de RH ou link de candidatura]
                  </span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

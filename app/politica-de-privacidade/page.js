import ScrollReveal from '@/components/ScrollReveal';
import './styles.css';

export const metadata = {
  title: 'Política de Privacidade — Saka',
  description: 'Política de Privacidade da Saka — como tratamos e protegemos os seus dados pessoais.',
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <section className="page-header">
        <div className="container">
          <h1>Política de Privacidade</h1>
          <p>
            Última atualização:{' '}
            <span className="confirmar">[CONFIRMAR COM CLIENTE]</span>
          </p>
        </div>
      </section>

      {/* ===== Legal Content ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="legal-content">
              <div className="privacidade-notice">
                <p>
                  Esta página será atualizada com o texto legal completo da
                  Política de Privacidade da Saka, fornecido pelo cliente ou pelo
                  departamento jurídico. Não é possível publicar uma versão
                  genérica gerada por IA como documento legal final.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

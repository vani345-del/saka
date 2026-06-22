import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ValueCard from '@/components/ValueCard';
import './styles.css';

export const metadata = {
  title: 'O Que Fazemos — Saka',
  description: 'Conheça o modelo de financiamento da Saka. Prestações simples, transparentes e acessíveis para smartphones em Angola.',
};

export default function OQueFazemos() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">O Nosso Modelo</span>
          <h1>Financiamento justo, pensado para quem trabalha.</h1>
          <p>
            Acreditamos que ter acesso a um bom smartphone não devia depender de
            poupar durante meses. Por isso criámos um modelo simples, transparente
            e acessível.
          </p>
        </div>
      </section>

      {/* ===== O Modelo Explicado ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="oqf-modelo">
              <div className="oqf-modelo-content">
                <h2>Como pensamos o financiamento</h2>
                <p>
                  Na Saka, financiamos a compra do seu smartphone e dividimos o
                  valor total num plano de prestações mensais. Em vez de juntar o
                  valor completo antes de comprar, paga uma entrada inicial e o
                  restante em prestações fixas, ao longo de um período definido no
                  momento da simulação.
                </p>
                <p>
                  <span className="confirmar">
                    [CONFIRMAR COM CLIENTE: percentagem da entrada, número de
                    prestações, taxas ou juros aplicáveis]
                  </span>
                </p>
              </div>
              <div className="oqf-modelo-visual" aria-hidden="true">
                <span className="oqf-modelo-visual-text">
                  Entrada
                  <br />+<br />
                  Prestações
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Para Quem É ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="oqf-para-quem">
              <h2>Para quem é a Saka</h2>
              <p>
                Para trabalhadores que precisam de um smartphone fiável para
                trabalhar, comunicar e aceder a oportunidades — e que preferem um
                caminho de pagamento simples e previsível, em vez de uma despesa
                única e pesada.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== O Que Está Incluído ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="oqf-incluido">
              <h2>O que está incluído</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid-3">
              <ValueCard
                icon="📦"
                title="O smartphone escolhido"
                description="Equipamento entregue após aprovação do plano."
              />
              <ValueCard
                icon="📋"
                title="Plano de pagamento claro"
                description="Valores fixos, sem surpresas, definidos antes de aceitar."
              />
              <ValueCard
                icon="💬"
                title="Apoio durante todo o processo"
                description="Da simulação ao último pagamento, com suporte disponível."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Transparência ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="oqf-transparencia">
              <h2>Sem letras pequenas</h2>
              <p>
                Antes de aceitar qualquer plano, sabe exactamente o valor da
                entrada, o valor de cada prestação e a duração total do plano.
                Não existem custos escondidos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section oqf-cta-section">
        <div className="container">
          <ScrollReveal>
            <Link href="/como-funciona" className="oqf-cta-link">
              Veja o processo passo a passo →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

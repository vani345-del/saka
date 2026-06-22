import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import StepCard from '@/components/StepCard';
import FAQAccordion from '@/components/FAQAccordion';
import './styles.css';

export const metadata = {
  title: 'Como Funciona — Saka',
  description: 'Descubra como funciona o financiamento de smartphones da Saka. Processo simples, do pedido ao smartphone na sua mão.',
};

const faqItems = [
  {
    question: 'Preciso de garantias para aplicar?',
    answer: '[CONFIRMAR COM CLIENTE: requisitos de garantia]',
  },
  {
    question: 'O que acontece se eu pagar antes do prazo?',
    answer: '[CONFIRMAR COM CLIENTE: política de pagamento antecipado]',
  },
  {
    question: 'Posso escolher qualquer smartphone?',
    answer:
      'Pode escolher entre os modelos disponíveis no momento da simulação.',
  },
];

export default function ComoFunciona() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Passo a Passo</span>
          <h1>Do pedido ao smartphone na sua mão.</h1>
        </div>
      </section>

      {/* ===== Steps ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="cf-steps-grid">
              <StepCard
                number="01"
                title="Simule o seu plano"
                description="Indique o smartphone que deseja e veja, em segundos, o valor da entrada e das prestações."
              />
              <StepCard
                number="02"
                title="Envie o seu pedido"
                description="Preencha os seus dados. É rápido e não exige burocracia complicada."
              />
              <StepCard
                number="03"
                title="Aguarde a aprovação"
                description="A nossa equipa analisa o seu pedido e responde em pouco tempo."
              />
              <StepCard
                number="04"
                title="Receba o smartphone"
                description="Após aprovação e pagamento da entrada, o smartphone é seu."
              />
              <StepCard
                number="05"
                title="Pague mensalmente"
                description="Pague as prestações nas datas acordadas, de forma simples."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Prazos e Condições ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="cf-prazos">
              <h2>Prazos e condições</h2>
              <p>
                <span className="confirmar">
                  [CONFIRMAR COM CLIENTE: duração do plano, frequência de
                  pagamento, o que acontece em caso de atraso]
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Quem Pode Aplicar ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="cf-quem">
              <h2>Quem pode aplicar</h2>
              <p>
                <span className="confirmar">
                  [CONFIRMAR COM CLIENTE: requisitos de elegibilidade]
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="cf-faq">
              <h2>Perguntas frequentes</h2>
              <div className="cf-faq-wrapper">
                <FAQAccordion items={faqItems} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="section-dark section">
        <div className="container">
          <ScrollReveal>
            <div className="cf-cta-dark">
              <h2>Pronto para simular?</h2>
              <p>Descubra o seu plano em poucos minutos.</p>
              <Link href="/contacto" className="btn btn-primary">
                Simular agora
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

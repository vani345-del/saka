import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import StepCard from '@/components/StepCard';
import ValueCard from '@/components/ValueCard';
import StatBlock from '@/components/StatBlock';
import './home.css';

export default function Home() {
  return (
    <>
      {/* ===== Section 1 — Hero ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow">Financiamento de Smartphones</span>
              <h1 className="hero-headline">
                O seu próximo smartphone, mais perto do que imagina.
              </h1>
              <p className="hero-body">
                Financiamos smartphones para trabalhadores em Angola, com
                pagamento dividido em prestações simples e acessíveis.
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-primary">
                  Simular agora
                </Link>
                <Link href="/como-funciona" className="btn-text">
                  Como funciona →
                </Link>
              </div>
            </div>

            {/* Hero visual — smartphone product image with decorative accents */}
            <div className="hero-visual">
              <div className="hero-glow" aria-hidden="true" />
              <div className="hero-image-wrapper">
                <Image
                  src="/hero-smartphone.png"
                  alt="Smartphone financiado pela Saka"
                  width={520}
                  height={520}
                  priority
                  className="hero-image"
                />
              </div>
              <div className="hero-accent-ring" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2 — Stat Strip ===== */}
      {/* NOTA: números provisórios — confirmar com cliente antes de publicar */}
      <section className="section-alt stat-strip">
        <div className="container">
          <ScrollReveal stagger>
            <div className="grid-3">
              <StatBlock number="500+" label="smartphones financiados" />
              <StatBlock number="3" label="cidades atendidas" />
              <StatBlock number="1000+" label="trabalhadores apoiados" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Section 3 — O que fazemos ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="about-grid">
              <div className="about-content">
                <h2>Simples. Justo. Pensado para si.</h2>
                <p>
                  A Saka existe para que comprar um smartphone não signifique
                  esperar meses para juntar o dinheiro todo de uma vez. Dividimos
                  o valor em prestações simples, para que o seu telefone trabalhe
                  para si desde o primeiro dia.
                </p>
                <Link href="/o-que-fazemos" className="btn-text">
                  Conheça o nosso modelo →
                </Link>
              </div>
              <div className="about-accent" aria-hidden="true">
                <div className="about-accent-bar" />
                <div className="about-accent-circle" />
                <div className="about-accent-block" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Section 4 — Como funciona (preview) ===== */}
      <section className="section section-alt process-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Como funciona</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid-4">
              <StepCard
                number="01"
                title="Escolha o seu smartphone"
                description="Veja as opções disponíveis e escolha o modelo certo para si."
              />
              <StepCard
                number="02"
                title="Simule o seu plano"
                description="Veja o valor da entrada e das prestações mensais, sem compromisso."
              />
              <StepCard
                number="03"
                title="Receba o seu telefone"
                description="Após aprovação, o smartphone é seu para usar imediatamente."
              />
              <StepCard
                number="04"
                title="Pague em prestações"
                description="Pague mensalmente, de forma simples e transparente, até concluir o plano."
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="section-link mt-2xl">
              <Link href="/como-funciona" className="btn-text">
                Ver processo completo →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Section 5 — Porque escolher a Saka ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center">
              <h2>Porque escolher a Saka</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid-4">
              <ValueCard
                icon="🔍"
                title="Transparência total"
                description="Sem letras pequenas. Sabe exactamente quanto vai pagar, desde o início."
              />
              <ValueCard
                icon="📱"
                title="Pensado para o seu dia-a-dia"
                description="Planos de pagamento adaptados à realidade de quem trabalha todos os dias."
              />
              <ValueCard
                icon="⚡"
                title="Processo rápido"
                description="Sem burocracia desnecessária. Do pedido ao smartphone na sua mão, em poucos dias."
              />
              <ValueCard
                icon="🤝"
                title="Suporte real"
                description="Uma equipa disponível para responder às suas dúvidas, sempre que precisar."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Section 6 — Carreiras Teaser ===== */}
      <section className="section-alt carreiras-teaser">
        <div className="container">
          <ScrollReveal>
            <div className="carreiras-teaser-inner">
              <h2>Estamos a crescer.</h2>
              <p>
                Procuramos pessoas ambiciosas que querem causar impacto real.
              </p>
              <Link href="/carreiras" className="btn-text">
                Ver vagas →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Section 7 — Final CTA Band ===== */}
      <section className="section-dark final-cta">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-inner">
              <h2>Pronto para começar?</h2>
              <p>Simule o seu plano em poucos minutos.</p>
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

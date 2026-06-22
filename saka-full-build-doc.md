# SAKA — Website Build Doc (From Scratch, Portuguese, High-Impact)
**Give this entire file to your AI builder / developer / Webflow tool. It is the single source of truth: every page, every section, draft copy, and design instruction.**

---

## ⚠️ READ THIS FIRST — FACT FIELDS

No client content exists yet. All body copy below is **original draft copy in Portuguese**, written to sound like a real, established company. It is good enough to design and build against.

But a handful of fields are **facts, not copywriting** — a real lending company's legal identity, address, and loan terms. These cannot be invented because they create real legal/trust risk if published false. Every one is tagged `[CONFIRMAR COM CLIENTE]` inline below. Before this site goes live, every tagged field must be replaced with a real value from Saka. Nothing else needs client sign-off — this is the entire list of blockers:

1. Legal company name (razão social)
2. NIF / company registration number
3. Physical office address
4. Phone number / WhatsApp number
5. Email address
6. Exact instalment terms (down payment %, number of instalments, any interest/fee — even roughly)
7. Whether Saka holds any financial-services license/registration in Angola (and the licence number, if so)

Everything else in this doc is finished, ready-to-build copy.

---

## DESIGN PHILOSOPHY — what "high-impact, highly professional" means here

Generic instructions like "make it look professional" produce generic results. Here is what separates a premium site from a template-looking one — apply this to every section below, not just the hero.

1. **Scale contrast is the #1 lever.** Premium sites have BIG headlines and noticeably smaller body text — not a gentle size step, a dramatic one. H1 should feel oversized on desktop (60–80px). If headline and body feel similar in size, it reads as a template. Push the contrast further than feels comfortable.

2. **One hero idea per screen, not a wall of text.** High-impact sections say one thing boldly, not five things modestly. If a section has a headline + 3 paragraphs + 2 buttons all competing, it feels cheap. Cut ruthlessly: headline, one supporting line, one action.

3. **Asymmetry over centered symmetry.** Centered-text-centered-image sections are the default everyone uses — and the fastest way to look templated. Off-set images, overlapping elements, large numerals breaking out of their containers, text that runs to the edge — these read as designed, not assembled.

4. **Negative space is a design choice, not empty space.** Premium = restraint. If unsure whether a section has "enough," it almost always has too much. Cut content before cutting whitespace.

5. **Big numbers, used as graphic elements.** Statistics, step numbers, prices — render large (think 80–120px), in Neue Kaine, often in a muted tone or outline style, as a visual anchor for the section, not just a data point in a sentence.

6. **Photography must be specific, not generic.** "Person smiling at phone" stock photography instantly cheapens a finance site. If specific photography isn't available yet, prefer abstract/graphic treatments (gradients, geometric shapes, product mockups) over generic stock — a well-art-directed abstract graphic beats mediocre stock every time.

7. **Micro-interactions signal craft.** Buttons that shift/darken on hover, cards that lift slightly, numbers that count up on scroll, smooth anchor-scroll on nav clicks. Small, not flashy — but present everywhere, consistently.

8. **Consistency is what makes it feel "built by a real team," not assembled from parts.** Every card across the whole site uses identical padding, radius, shadow. Every button. Every section heading style. Variance = amateur. Sameness = professional.

Apply all eight principles to every section in this document. Where a section spec below says "headline + supporting line," that is the point — don't add more.

---

## GLOBAL SYSTEM (build once, before any page)

### Header
- Logo, left
- Nav (Portuguese): **Início · O que fazemos · Como funciona · Sobre nós · Carreiras · Contacto**
- CTA button, filled orange: **"Simular agora"** (or **"Fale connosco"** — pick one and use it consistently as the single primary action across the whole site)
- Sticky on scroll, background goes from transparent (over hero) to solid white with subtle shadow once scrolled — this transition itself is a craft signal, don't skip it
- Mobile: full-screen nav overlay on hamburger tap, large tap targets, CTA repeated at the bottom of the overlay

### Footer
- Col 1: Logo + tagline (draft): **"Financiamos o seu próximo smartphone, em prestações simples."**
- Col 2: Links — same as nav
- Col 3: Contacto — `[CONFIRMAR COM CLIENTE: endereço]` · `[CONFIRMAR COM CLIENTE: telefone]` · `[CONFIRMAR COM CLIENTE: email]`
- Col 4: Legal — link to Política de Privacidade · `[CONFIRMAR COM CLIENTE: razão social completa]` · `[CONFIRMAR COM CLIENTE: NIF]`
- Bottom bar: **"© 2026 [CONFIRMAR COM CLIENTE: razão social]. Todos os direitos reservados."**

### Component library (define once, reuse identically everywhere)
- **Botão primário**: filled #E36B00, white text, slight darken + lift on hover
- **Botão secundário**: outline black/grey, fills on hover
- **Card de passo** (numbered step card) — large number top, title, 1-line description
- **Card de valor** (feature/value card) — icon or number, title, 1–2 line description
- **Card de vaga** (job listing card) — title, location tag, type tag, "Saiba mais" link
- **Bloco de estatística** — oversized number + small label underneath
- Section background alternates white → very light grey (#F7F7F7 or similar) to create rhythm down the page without adding visual weight

### Typography rules
- Neue Kaine: all headlines (H1–H3), big numbers, nav logo wordmark if applicable
- Parabolica: all body copy, labels, buttons, footer
- Never mix — no third font, no system-font fallback visible

### Colour rules
- Black/grey = 85–90% of every screen's visual weight
- Orange = CTAs, links, active states, small accent shapes only
- No orange backgrounds behind large text blocks

---

## PAGE 1 — INÍCIO (Home)

**Principle in play: one hero idea, scale contrast, big numbers as graphics.**

### Section 1.1 — Hero
- Eyebrow tag (small, orange, uppercase): **FINANCIAMENTO DE SMARTPHONES**
- H1 (huge, Neue Kaine): **"O seu próximo smartphone, mais perto do que imagina."**
- Supporting line (one line only, Parabolica, grey): **"Financiamos smartphones para trabalhadores em Angola, com pagamento dividido em prestações simples e acessíveis."**
- Primary CTA button: **"Simular agora"**
- Secondary CTA (text link): **"Como funciona →"**
- Visual: large product shot or abstract geometric graphic, offset to one side (asymmetry principle) — not centered

### Section 1.2 — Stat strip
Three oversized numbers in a row (placeholder structure — replace once real figures exist, or remove section entirely if no real stats are confirmable):
- **[CONFIRMAR: nº]** — "smartphones financiados" *(only publish if true)*
- **[CONFIRMAR: nº]** — "cidades atendidas"
- **[CONFIRMAR: nº]** — "trabalhadores apoiados"
*(If Saka can't confirm real numbers, cut this section. Do not publish placeholder statistics live — that's a fact-field, not a design choice.)*

### Section 1.3 — O que fazemos (short)
- H2: **"Simples. Justo. Pensado para si."**
- Body (short, 2 lines): **"A Saka existe para que comprar um smartphone não signifique esperar meses para juntar o dinheiro todo de uma vez. Dividimos o valor em prestações simples, para que o seu telefone trabalhe para si desde o primeiro dia."**
- Link: **"Conheça o nosso modelo →"** (links to O Que Fazemos page)

### Section 1.4 — Como funciona (preview, 3–4 steps)
- H2: **"Como funciona"**
- Step cards (numbered, large numerals per design philosophy):
  1. **"Escolha o seu smartphone"** — "Veja as opções disponíveis e escolha o modelo certo para si."
  2. **"Simule o seu plano"** — "Veja o valor da entrada e das prestações mensais, sem compromisso."
  3. **"Receba o seu telefone"** — "Após aprovação, o smartphone é seu para usar imediatamente."
  4. **"Pague em prestações"** — "Pague mensalmente, de forma simples e transparente, até concluir o plano."
- Link: **"Ver processo completo →"**

### Section 1.5 — Porque escolher a Saka (value props, 3–4 cards)
- H2: **"Porque escolher a Saka"**
- Cards (draft):
  - **"Transparência total"** — "Sem letras pequenas. Sabe exactamente quanto vai pagar, desde o início."
  - **"Pensado para o seu dia-a-dia"** — "Planos de pagamento adaptados à realidade de quem trabalha todos os dias."
  - **"Processo rápido"** — "Sem burocracia desnecessária. Do pedido ao smartphone na sua mão, em poucos dias."
  - **"Suporte real"** — "Uma equipa disponível para responder às suas dúvidas, sempre que precisar."

### Section 1.6 — Carreiras teaser
- Short band: **"Estamos a crescer."** + 1 line + link **"Ver vagas →"**

### Section 1.7 — Final CTA band
- Full-width, dark background, high contrast
- H2: **"Pronto para começar?"**
- Body: **"Simule o seu plano em poucos minutos."**
- Button: **"Simular agora"**

### Footer

---

## PAGE 2 — O QUE FAZEMOS / NOSSO MODELO

**Principle in play: asymmetry, restraint over density.**

### 2.1 — Page header
- Eyebrow: **O NOSSO MODELO**
- H1: **"Financiamento justo, pensado para quem trabalha."**
- Sub: **"Acreditamos que ter acesso a um bom smartphone não devia depender de poupar durante meses. Por isso criámos um modelo simples, transparente e acessível."**

### 2.2 — O modelo, explicado
- H2: **"Como pensamos o financiamento"**
- Body (draft, full paragraph): **"Na Saka, financiamos a compra do seu smartphone e dividimos o valor total num plano de prestações mensais. Em vez de juntar o valor completo antes de comprar, paga uma entrada inicial e o restante em prestações fixas, ao longo de um período definido no momento da simulação."**
- *(Exact down-payment %, number of instalments, fees → `[CONFIRMAR COM CLIENTE]`, then write the real terms in here once provided — this paragraph is structured so real numbers slot straight in.)*

### 2.3 — Para quem é
- H2: **"Para quem é a Saka"**
- Body: **"Para trabalhadores que precisam de um smartphone fiável para trabalhar, comunicar e aceder a oportunidades — e que preferem um caminho de pagamento simples e previsível, em vez de uma despesa única e pesada."**

### 2.4 — O que está incluído (cards)
- H2: **"O que está incluído"**
- Cards (draft, generic enough to be true regardless of final terms):
  - **"O smartphone escolhido"** — "Equipamento entregue após aprovação do plano."
  - **"Plano de pagamento claro"** — "Valores fixos, sem surpresas, definidos antes de aceitar."
  - **"Apoio durante todo o processo"** — "Da simulação ao último pagamento, com suporte disponível."

### 2.5 — Transparência (trust section — give this real visual weight)
- H2: **"Sem letras pequenas"**
- Body: **"Antes de aceitar qualquer plano, sabe exactamente o valor da entrada, o valor de cada prestação e a duração total do plano. Não existem custos escondidos."**
- *(Only publishable once real terms confirm this is literally true.)*

### 2.6 — CTA → **"Veja o processo passo a passo →"** (links to Como Funciona)

### Footer

---

## PAGE 3 — COMO FUNCIONA

**Principle in play: big numbers as graphics, one idea per step.**

### 3.1 — Page header
- Eyebrow: **PASSO A PASSO**
- H1: **"Do pedido ao smartphone na sua mão."**

### 3.2 — Steps (full version, larger cards than Home preview)
1. **"01 — Simule o seu plano"** — "Indique o smartphone que deseja e veja, em segundos, o valor da entrada e das prestações."
2. **"02 — Envie o seu pedido"** — "Preencha os seus dados. É rápido e não exige burocracia complicada."
3. **"03 — Aguarde a aprovação"** — "A nossa equipa analisa o seu pedido e responde em pouco tempo."
4. **"04 — Receba o smartphone"** — "Após aprovação e pagamento da entrada, o smartphone é seu."
5. **"05 — Pague mensalmente"** — "Pague as prestações nas datas acordadas, de forma simples."
*(Adjust step count once real process is confirmed — this is a placeholder structure, not invented financial terms, so lower risk to draft now.)*

### 3.3 — Prazos e pagamentos
- H2: **"Prazos e condições"**
- Body: `[CONFIRMAR COM CLIENTE: duração do plano, frequência de pagamento, o que acontece em caso de atraso]`
- *(This is a fact-field — do not draft fictional terms here. Leave visually placeholder until confirmed; flag clearly to client as a required input, since lending sites that omit this look evasive to reviewers.)*

### 3.4 — Quem pode pedir
- H2: **"Quem pode aplicar"**
- Body: `[CONFIRMAR COM CLIENTE: requisitos de elegibilidade]`

### 3.5 — FAQ accordion (draft, generic, safe to publish)
- **"Preciso de garantias para aplicar?"** → `[CONFIRMAR]`
- **"O que acontece se eu pagar antes do prazo?"** → `[CONFIRMAR]`
- **"Posso escolher qualquer smartphone?"** → "Pode escolher entre os modelos disponíveis no momento da simulação."

### 3.6 — CTA → **"Simular agora"**

### Footer

---

## PAGE 4 — SOBRE A EMPRESA

**Principle in play: this page IS the trust mechanism — give it weight, not decoration.**

### 4.1 — Page header
- Eyebrow: **SOBRE NÓS**
- H1: **"Uma empresa angolana, ao serviço de quem trabalha todos os dias."**

### 4.2 — A nossa história (draft, generic founding narrative — safe to publish as written, or replace with real story later)
- H2: **"Porque existimos"**
- Body: **"A Saka nasceu da ideia simples de que o acesso à tecnologia não devia ser um privilégio. Em Angola, um smartphone é, muitas vezes, a ferramenta mais importante para trabalhar, comunicar e criar oportunidades — e acreditamos que o caminho até ele devia ser simples e justo."**

### 4.3 — Identidade legal (CRITICAL fact block — do not invent)
- H2: **"Identidade legal"**
- `[CONFIRMAR COM CLIENTE: razão social completa]`
- `[CONFIRMAR COM CLIENTE: NIF / número de registo comercial]`
- `[CONFIRMAR COM CLIENTE: estatuto regulatório, se aplicável — ex: registo como instituição financeira]`
- Display this as a clean, formal block — table or simple list, not buried in paragraph text. This is the section reviewers and partners check first.

### 4.4 — Onde estamos
- H2: **"Onde estamos"**
- `[CONFIRMAR COM CLIENTE: endereço físico completo]`
- Embedded map once address confirmed

### 4.5 — A nossa equipa (only if client provides real names/photos — otherwise omit, do not use placeholder people)

### 4.6 — CTA → **"Fale connosco"**

### Footer

---

## PAGE 5 — CARREIRAS

**Principle in play: never let this page look empty/inactive.**

### 5.1 — Page header
- Eyebrow: **CARREIRAS**
- H1: **"Construa o futuro do acesso à tecnologia em Angola."**

### 5.2 — Porque trabalhar na Saka
- H2: **"Porque trabalhar com a Saka"**
- Body (draft): **"Somos uma equipa pequena, ambiciosa, e a crescer. Procuramos pessoas que querem causar impacto real na vida de milhares de trabalhadores angolanos."**

### 5.3 — Vagas abertas
- If no real openings exist yet: **"Não temos vagas abertas neste momento. Mas estamos sempre interessados em conhecer pessoas talentosas — envie-nos o seu CV."**
- Email/form link: `[CONFIRMAR COM CLIENTE: email de RH ou link de candidatura]`
- *(If real openings exist, list each as a job card: title, location, type, "Saiba mais" link)*

### Footer

---

## PAGE 6 — CONTACTO

### 6.1 — Page header
- H1: **"Fale connosco"**
- Sub: **"Tem dúvidas sobre o nosso modelo ou quer simular o seu plano? Estamos aqui para ajudar."**

### 6.2 — Formulário de contacto
- Fields: **Nome** · **Email** · **Telefone** · **Assunto** · **Mensagem** · Button: **"Enviar mensagem"**
- Success message (Portuguese): **"Mensagem enviada com sucesso. A nossa equipa responderá em breve."**
- Error message (Portuguese): **"Ocorreu um erro. Por favor tente novamente."**

### 6.3 — Contacto directo
- `[CONFIRMAR COM CLIENTE: telefone]` · `[CONFIRMAR COM CLIENTE: email]` · WhatsApp if used

### 6.4 — Endereço + mapa
- `[CONFIRMAR COM CLIENTE: endereço]` — same value as About page, must match exactly

### Footer

---

## PAGE 7 — POLÍTICA DE PRIVACIDADE

This is the one page that should NOT contain AI-drafted legal language. Privacy policies have real legal consequences if wrong or incomplete for the jurisdiction. Flag to the client: **"Precisamos do texto legal da Política de Privacidade — não podemos publicar uma versão genérica gerada por IA como documento legal final."**

Page structure once received:
- Title: **"Política de Privacidade"**
- "Última atualização: [data]"
- Client/lawyer-provided text, verbatim, with clear heading structure

### Footer

---

## BUILD ORDER
1. Design system (typography scale, colours, components, header, footer)
2. Início
3. Sobre a empresa
4. Como funciona
5. O que fazemos
6. Contacto
7. Carreiras
8. Política de Privacidade (last — pending real legal text)

## PRE-LAUNCH CHECKLIST
- [ ] Zero English text anywhere — labels, errors, alt text, meta tags, all Portuguese
- [ ] Zero `[CONFIRMAR COM CLIENTE]` tags remain live on the published site
- [ ] All accents render correctly (UTF-8 throughout)
- [ ] Stat strip on Home either has real confirmed numbers or is removed
- [ ] Privacy Policy is real legal text, not AI-drafted placeholder
- [ ] Mobile tested at 375px, 768px, 1280px+
- [ ] Footer legal name/address matches About + Contact pages exactly
- [ ] Domain + SSL live and verified

'use client';

import { useState } from 'react';

const initialFormData = {
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
};

const assuntoOptions = [
  { value: '', label: 'Selecione um assunto' },
  { value: 'informacoes', label: 'Informações gerais' },
  { value: 'simulacao', label: 'Simulação de plano' },
  { value: 'parcerias', label: 'Parcerias' },
  { value: 'outro', label: 'Outro' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle'); /* idle | sending | success | error */
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, introduza o seu nome.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduza o seu email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, introduza um email válido.';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Por favor, introduza o seu telefone.';
    }

    if (!formData.assunto) {
      newErrors.assunto = 'Por favor, selecione um assunto.';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Por favor, escreva a sua mensagem.';
    }

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    /* Clear field error on change */
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      /* Simulated submission – replace with real API call */
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData(initialFormData);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Nome */}
      <div className="form-group">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          className="form-input"
          placeholder="O seu nome completo"
          value={formData.nome}
          onChange={handleChange}
          aria-invalid={!!errors.nome}
        />
        {errors.nome && <span className="form-error">{errors.nome}</span>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="exemplo@email.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      {/* Telefone */}
      <div className="form-group">
        <label htmlFor="telefone" className="form-label">Telefone</label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          className="form-input"
          placeholder="+244 9XX XXX XXX"
          value={formData.telefone}
          onChange={handleChange}
          aria-invalid={!!errors.telefone}
        />
        {errors.telefone && <span className="form-error">{errors.telefone}</span>}
      </div>

      {/* Assunto */}
      <div className="form-group">
        <label htmlFor="assunto" className="form-label">Assunto</label>
        <select
          id="assunto"
          name="assunto"
          className="form-input"
          value={formData.assunto}
          onChange={handleChange}
          aria-invalid={!!errors.assunto}
        >
          {assuntoOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.assunto && <span className="form-error">{errors.assunto}</span>}
      </div>

      {/* Mensagem */}
      <div className="form-group">
        <label htmlFor="mensagem" className="form-label">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          className="form-textarea"
          placeholder="Escreva aqui a sua mensagem..."
          value={formData.mensagem}
          onChange={handleChange}
          aria-invalid={!!errors.mensagem}
        />
        {errors.mensagem && <span className="form-error">{errors.mensagem}</span>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'A enviar...' : 'Enviar mensagem'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="form-message success">
          Mensagem enviada com sucesso. A nossa equipa responderá em breve.
        </div>
      )}

      {status === 'error' && (
        <div className="form-message error">
          Ocorreu um erro. Por favor tente novamente.
        </div>
      )}
    </form>
  );
}

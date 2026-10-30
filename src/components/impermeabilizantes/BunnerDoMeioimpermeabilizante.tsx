import React, { useState } from 'react';
import './impermeabilizantes.css';

/**
 * Controle de ativação do Banner do Meio.
 * Altere para `true` quando o Guia de Bolso estiver pronto para exibir automaticamente em todas as páginas onde foi adicionado.
 */
const IS_ACTIVE = false;

export const BunnerDoMeioimpermeabilizante: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!IS_ACTIVE) return null;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, segment: 'impermeabilizantes' }),
      });
      if (res.ok) {
        sessionStorage.setItem('emailSubmitted', 'true');
        setStatus('success');
      } else {
        setStatus('idle');
        alert('Erro ao registrar. Tente novamente.');
      }
    } catch {
      setStatus('idle');
      alert('Erro de conexão. Tente novamente.');
    }
  };

  // Se for sucesso, mostra apenas o card de agradecimento
  if (status === 'success') {
    return (
      <div className="imp-mid-banner--success" role="status" aria-live="polite">
        <div className="imp-mid-banner__success-inner">
          <div className="imp-mid-banner__success-icon" aria-hidden="true">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="imp-mid-banner__success-title">
              Quase lá! Seu guia de impermeabilização está a caminho. 🚀
            </h2>
            <p className="imp-mid-banner__success-text">
              Verifique sua caixa de entrada em instantes.
            </p>
            <div className="imp-mid-banner__spam-alert">
              <p>
                ⚠️ IMPORTANTE: Se o e-mail não chegar em 1 minuto, ele pode ter caído por engano no SPAM ou na aba PROMOÇÕES.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Se não for sucesso, mostra o banner com o formulário
  return (
    <div className="imp-mid-banner">
      <h2 className="imp-mid-banner__heading">
        <span role="img" aria-label="proteção contra água">💧</span> Obra Sem Infiltração
      </h2>

      <div className="imp-mid-banner__box">
        <div className="imp-mid-banner__inner">
          {/* Topo: Texto Curto */}
          <div>
            <p className="imp-mid-banner__copy">
              🛠️ <strong>Dica de Especialista:</strong>{'\n'}
              Você sabia que usar o impermeabilizante errado faz a umidade e o mofo voltarem em poucos meses?{'\n'}
              <span className="imp-mid-banner__highlight">Guia Grátis:</span> Aprenda a escolher o impermeabilizante certo para laje, parede ou área úmida sem gastar à toa.
            </p>
          </div>

          {/* Baixo: Formulário */}
          <div className="imp-mid-banner__form-wrap">
            <form onSubmit={handleSubmit} className="imp-mid-banner__form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail aqui..."
                aria-label="Seu melhor e-mail"
                className="imp-mid-banner__input"
                required
              />

              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="imp-mid-banner__button"
              >
                {status === 'submitting' ? 'Aguarde...' : 'QUERO ESCOLHER CERTO'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunnerDoMeioimpermeabilizante;

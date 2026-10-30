import React, { useState, useEffect } from 'react';
import './impermeabilizantes.css';

const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * Controle de ativação do Exit Intent Popup.
 * Altere para `true` quando o Guia de Bolso estiver pronto para ativar automaticamente em todas as páginas onde foi adicionado.
 */
const IS_ACTIVE = false;

export const ExitIntentPopupimpermeabilizante: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    if (!IS_ACTIVE) return;
    if (sessionStorage.getItem('closedAll') || sessionStorage.getItem('emailSubmitted')) return;

    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));

    const triggerPopup = () => {
      if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('emailSubmitted')) {
        setIsVisible(true);
      }
    };

    // Disparo automático por tempo de permanência (30s)
    const elapsed = Date.now() - entryTime;
    const DISCREET_MS = 30000;
    const remainingDiscreet = Math.max(DISCREET_MS - elapsed, 0);
    const discreetTimer = setTimeout(triggerPopup, remainingDiscreet);

    // Disparo por intenção de saída no desktop (mouse saindo pelo topo da janela)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(discreetTimer);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setShowCloseButton(false);
      const timer = setTimeout(() => setShowCloseButton(true), 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    sessionStorage.setItem('closedAll', 'true');
    setIsVisible(false);
  };

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
        setTimeout(() => setIsVisible(false), 5000);
      } else {
        setStatus('idle');
        alert('Erro ao registrar. Tente novamente.');
      }
    } catch {
      setStatus('idle');
      alert('Erro de conexão. Tente novamente.');
    }
  };

  if (!IS_ACTIVE || !isVisible) return null;

  return (
    <div
      className="imp-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="imp-popup-title"
    >
      <div className="imp-popup-modal">
        {showCloseButton && (
          <button
            type="button"
            onClick={handleClose}
            className="imp-popup__close-btn"
            aria-label="Fechar janela"
          >
            <X size={22} />
          </button>
        )}

        {status === 'success' ? (
          <div className="imp-popup__success">
            <div className="imp-popup__success-icon" aria-hidden="true">
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 id="imp-popup-title" className="imp-popup__success-title">
              Inscrição confirmada!
            </h2>
            <p className="imp-popup__success-text">
              Verifique seu e-mail para acessar o guia exclusivo de impermeabilização.
            </p>
          </div>
        ) : (
          <div className="imp-popup__body">
            <span className="imp-popup__badge">Guia Prático Gratuito</span>
            <h2 id="imp-popup-title" className="imp-popup__title">
              Espera aí! Vai impermeabilizar sua obra?
            </h2>
            <p className="imp-popup__desc">
              Não feche antes de baixar nosso <strong>Guia de Bolso de Impermeabilizantes</strong>.
              Insira seu e-mail abaixo e descubra como evitar infiltrações, mofo e retrabalho!
            </p>

            <form onSubmit={handleSubmit} className="imp-popup__form">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                aria-label="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="imp-popup__input"
                required
              />
              <button
                type="submit"
                disabled={!isValidEmail || status === 'submitting'}
                className="imp-popup__submit"
              >
                {status === 'submitting' ? 'Enviando...' : 'Quero meu Guia!'}
              </button>
            </form>

            <div
              className={`imp-popup__dismiss-wrap ${
                showCloseButton
                  ? 'imp-popup__dismiss-wrap--visible'
                  : 'imp-popup__dismiss-wrap--hidden'
              }`}
            >
              <button
                type="button"
                onClick={handleClose}
                className="imp-popup__dismiss-btn"
              >
                Não, obrigado. Já sei qual impermeabilizante escolher.
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopupimpermeabilizante;

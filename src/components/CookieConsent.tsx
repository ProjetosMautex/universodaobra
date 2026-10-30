import { useState, useEffect, useRef } from 'react';

interface CookiePreferences {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const STORAGE_KEY = 'universodaobra_cookie_consent';
const CONSENT_VERSION = 1;

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedRaw = window.localStorage.getItem(STORAGE_KEY);
      if (savedRaw) {
        const parsed = JSON.parse(savedRaw) as Partial<CookiePreferences>;
        if (parsed.version === CONSENT_VERSION && parsed.necessary === true) {
          setAnalytics(Boolean(parsed.analytics));
          setMarketing(Boolean(parsed.marketing));
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }

    const handleOpenEvent = () => {
      try {
        const savedRaw = window.localStorage.getItem(STORAGE_KEY);
        if (savedRaw) {
          const parsed = JSON.parse(savedRaw) as Partial<CookiePreferences>;
          setAnalytics(Boolean(parsed.analytics));
          setMarketing(Boolean(parsed.marketing));
        }
      } catch {
        // Ignora erro de leitura e mantém estado atual
      }
      setIsCustomizing(true);
      setIsVisible(true);
      setTimeout(() => {
        bannerRef.current?.focus();
      }, 50);
    };

    window.addEventListener('universodaobra:open-cookies', handleOpenEvent);
    return () => {
      window.removeEventListener('universodaobra:open-cookies', handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isCustomizing) {
        setIsCustomizing(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isCustomizing]);

  const savePreferences = (nextAnalytics: boolean, nextMarketing: boolean) => {
    const payload: CookiePreferences = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: nextAnalytics,
      marketing: nextMarketing,
      updatedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Caso localStorage esteja indisponível no navegador
    }

    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setIsCustomizing(false);
    setIsVisible(false);

    window.dispatchEvent(
      new CustomEvent('universodaobra:consent-updated', { detail: payload })
    );
  };

  const handleAcceptAll = () => {
    savePreferences(true, true);
  };

  const handleRejectOptional = () => {
    savePreferences(false, false);
  };

  const handleSaveCustom = () => {
    savePreferences(analytics, marketing);
  };

  if (!isVisible) return null;

  return (
    <aside
      ref={bannerRef}
      tabIndex={-1}
      className="cookie-banner"
      role="region"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="cookie-banner__container">
        <div className="cookie-banner__content">
          <h2 id="cookie-banner-title" className="cookie-banner__title">
            Sua privacidade importa
          </h2>
          <p id="cookie-banner-desc" className="cookie-banner__text">
            Utilizamos cookies necessários para o funcionamento do site. Com seu consentimento,
            poderemos utilizar cookies opcionais para analisar a navegação e melhorar sua
            experiência. Você pode consultar nossa{' '}
            <a href="/politica-de-privacidade/" className="cookie-banner__link">
              Política de Privacidade
            </a>{' '}
            para saber mais.
          </p>
        </div>

        {isCustomizing && (
          <div className="cookie-preferences" role="group" aria-label="Categorias de cookies">
            <div className="cookie-category">
              <div className="cookie-category__header">
                <label htmlFor="cookie-necessary" className="cookie-category__label">
                  <strong>Necessários</strong>
                  <span className="cookie-badge cookie-badge--required">Sempre ativos</span>
                </label>
                <input
                  id="cookie-necessary"
                  type="checkbox"
                  checked={true}
                  disabled
                  className="cookie-checkbox"
                />
              </div>
              <p className="cookie-category__desc">
                Essenciais para a navegação básica, segurança e registro da sua preferência de
                privacidade.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category__header">
                <label htmlFor="cookie-analytics" className="cookie-category__label">
                  <strong>Analíticos</strong>
                  <span className="cookie-badge">Opcional</span>
                </label>
                <input
                  id="cookie-analytics"
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="cookie-checkbox"
                />
              </div>
              <p className="cookie-category__desc">
                Ajudam a compreender como os visitantes interagem com as páginas para aprimorar os
                conteúdos do portal.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category__header">
                <label htmlFor="cookie-marketing" className="cookie-category__label">
                  <strong>Marketing</strong>
                  <span className="cookie-badge">Opcional</span>
                </label>
                <input
                  id="cookie-marketing"
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="cookie-checkbox"
                />
              </div>
              <p className="cookie-category__desc">
                Utilizados para medir campanhas ou personalizar recomendações, quando aplicável.
              </p>
            </div>
          </div>
        )}

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-btn cookie-btn--primary"
            onClick={handleAcceptAll}
          >
            Aceitar todos
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--secondary"
            onClick={handleRejectOptional}
          >
            Rejeitar opcionais
          </button>
          {isCustomizing ? (
            <button
              type="button"
              className="cookie-btn cookie-btn--outline"
              onClick={handleSaveCustom}
            >
              Salvar preferências
            </button>
          ) : (
            <button
              type="button"
              className="cookie-btn cookie-btn--outline"
              aria-expanded={isCustomizing}
              onClick={() => setIsCustomizing(true)}
            >
              Personalizar
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

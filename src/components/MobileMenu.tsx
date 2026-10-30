import { useState, useEffect, useRef } from 'react';
import type { NavLink } from '../config/site';

interface MobileMenuProps {
  links: NavLink[];
  currentPath: string;
}

export default function MobileMenu({ links, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <div className="mobile-menu-wrapper">
      <button
        ref={buttonRef}
        type="button"
        className="mobile-menu-trigger"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="mobile-menu-trigger__text">MENU</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-navigation-panel"
          ref={panelRef}
          className="mobile-menu-panel"
          role="region"
          aria-label="Menu móvel"
        >
          <nav aria-label="Navegação principal móvel">
            <ul className="mobile-menu-list">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="mobile-menu-item">
                    <a
                      href={link.href}
                      className={`mobile-menu-link ${active ? 'is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true" className="mobile-menu-arrow">→</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

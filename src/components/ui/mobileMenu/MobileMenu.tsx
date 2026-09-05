import { useEffect } from 'react';
import Button from '../button/Button';
import logo from '../../../assets/logo.svg';
import closeIcon from '../../../assets/X.svg';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Company', href: '#company' },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.body.classList.add('menu-open');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
      aria-hidden={!isOpen}
    >
      <button
        className={styles.overlay}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />

      <div className={styles.drawer}>
        <div className={styles.header}>
          <a
            href="/"
            aria-label="Home"
            tabIndex={isOpen ? 0 : -1}
          >
            <img className={styles.logo} src={logo} alt="" />
          </a>

          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close navigation menu"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <nav className={styles.navigation} aria-label="Mobile navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              className={styles.navigationLink}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          className={styles.cta}
          fullWidth
          tabIndex={isOpen ? 0 : -1}
        >
          Start free trial
        </Button>

        <p className={styles.loginPrompt}>
          Existing customer?{' '}
          <a href="#login" tabIndex={isOpen ? 0 : -1}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
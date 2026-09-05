import styles from './Header.module.css';
import logo from '../../../assets/logo.svg'
import Button from '../button/Button';

const navigationLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Company', href: '#company' },
];

export default function Header() {
    return(
        <header className={styles.header}>
        <a href="/" aria-label="Home">
            <img className={styles.logo} src={logo} alt="" />
        </a>

        <nav className={styles.desktopNavigation} aria-label="Main navigation">
            <div className={styles.navigationLinks}>
            {navigationLinks.map((link) => (
                <a key={link.label} className={styles.navigationLink} href={link.href}>
                {link.label}
                </a>
            ))}
            </div>

            <div className={styles.actions}>
            <a className={styles.loginLink} href="#login">
                Log in
            </a>

            <Button variant="secondary">Start free trial</Button>
            </div>
        </nav>
        </header>
    )
}
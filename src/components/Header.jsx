import { Logo } from '../assets/logo';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

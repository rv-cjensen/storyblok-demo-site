import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles.logo}
          src={`${process.env.IMAGE_PREFIX}/logos/healthline.svg`}
          alt="Healthline logo"
        />
      </Link>
    </header>
  );
}

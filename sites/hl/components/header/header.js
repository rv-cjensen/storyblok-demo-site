import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={`${process.env.IMAGE_PREFIX}/logos/healthline.svg`}
        alt="Healthline logo"
      />
    </header>
  );
}

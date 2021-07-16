import styles from './character.module.scss';

export default function Character({blok}) {
  return (
    <div className={styles.character + " container"}>
      <div style={{ backgroundImage: `url(${blok.image.filename})` }} className={styles.image} />
      <div className={styles.content}>
        <h1>{blok.name}</h1>
      </div>
    </div>
  )
}

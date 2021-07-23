import DynamicComponent from '../dynamicComponent/dynamicComponent.js';
import styles from './rightRail.module.scss';

export default function RightRail({ blok }) {
  return (
    <main className={styles.main}>
      <div className={styles.components}>
        {blok.body
          ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
          : null
        }
      </div>

      <div className={styles.rightRail}>
        <p>I am the right rail</p>
      </div>
    </main>
  )
}

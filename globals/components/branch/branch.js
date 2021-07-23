import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './branch.module.scss';

export default function Branch({ blok }) {
  return (
    <div className="container">
      <div className={styles.branch}>
        <img src={blok.image.filename} alt={blok.name} className={styles.image} />
        <div className={styles.content}>
          <h2>
            {blok.full_slug
              ? <Link href={blok.full_slug}><a>{blok.name}</a></Link>
              : blok.name
            }
          </h2>
        </div>
      </div>
    </div>
  );
}

Branch.propTypes = {
  blok: PropTypes.object
};

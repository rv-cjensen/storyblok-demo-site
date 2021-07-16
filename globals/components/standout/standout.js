import PropTypes from 'prop-types';
import styles from './standout.module.scss';

export default function Standout({ content }) {
  return (
    <div className={styles.standout}>
      <div className="container">
        <div className={styles.card} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

Standout.propTypes = {
  content: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import styles from './hero.module.scss';

export default function Hero({ blok }) {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${blok.image.filename})` }}>
      <div className="container">
        <h1 className="h1-xl">{blok.text1}</h1>
        {blok.text2 &&
          <div className="subheading">{blok.text2}</div>
        }
      </div>
    </div>
  );
}

Hero.propTypes = {
  blok: PropTypes.object
};

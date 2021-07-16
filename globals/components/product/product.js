import PropTypes from 'prop-types';
import styles from './product.module.scss';

export default function Product({ product }) {
  const tagularLocation = 'dk';
  const tagularName = 'kdfkj';
  const tagularFormatType = 'kdfkj';

  return (
    <section className={styles.productCard}>
      <header>
        <div>
          <div className={styles.h2}>
            {/* if price and badge -- mobile only */}
            {((product.price && product.badge) &&
              <div className={styles.priceMobile}>{product.price}</div>
            )}
            <a
              href={product.link.url}
              target='_blank'
              rel='noreferrer'
              data-tagular-click='product'
              data-tagular-view='product'
              data-brand={product.name}
              data-location={tagularLocation}
              data-name={tagularName}
            >
              {product.name}
            </a>
          </div>
          {product.subtitle && (
            <div className={styles.h3}>{product.subtitle}</div>
          )}
          {/* if price and badge */}
          {((product.price && product.badge) &&
            <div className={styles.badge}>{product.badge}</div>
          )}
        </div>
        <div>
          {/* if price and badge */}
          {((product.price && product.badge) &&
            <div className={styles.price}>{product.price}</div>
          )}
          {/* else if badge only */}
          {((!product.price && product.badge) &&
            <div className={styles.badge}>{product.badge}</div>
          )}
        </div>
      </header>

      <div className={styles.cardBody}>
        <div className={styles.cardImage}>
          <a
            href={product.link}
            target='_blank'
            rel='noreferrer'
            data-tagular-click='product'
            data-tagular-view='product'
            data-location={tagularLocation}
            data-brand={product.name}
            data-name={product.tagularName}
          >
            <img src={`${product.logo.filename}`} alt={`${product.name} logo`} />
          </a>
        </div>
        <div className={styles.cardContent}>
          <a
            href={product.link}
            target='_blank'
            className={styles.cta}
            rel='noreferrer'
            data-tagular-click='product'
            data-tagular-view='product'
            data-location={tagularLocation}
            data-name={product.tagularName}
            data-brand={product.name}
            data-text={product.buttonCTA}
            data-type={tagularFormatType}
          >
            {product.buttonCTA}
          </a>
        </div>
      </div>
    </section>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagularLocation: PropTypes.string,
    tagularName: PropTypes.string,
    tagularFormatType: PropTypes.string,
    subtitle: PropTypes.string,
    logo: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    badge: PropTypes.string,
    price: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
    collapsible: PropTypes.shape({
      triggerText: PropTypes.string.isRequired,
      triggerTagularName: PropTypes.string,
      content: PropTypes.string.isRequired,
    }).isRequired,
    tagularName: PropTypes.string,
  }),
};

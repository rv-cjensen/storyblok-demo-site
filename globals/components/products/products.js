import PropTypes from 'prop-types';
import Product from '../product/product';

export default function Products({ blok }) {
  return (
    <div className='container'>
      {blok.Products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

Products.propTypes = {
  tagularLocation: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      badge: PropTypes.string,
      list: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      ).isRequired,
      collapsible: PropTypes.shape({
        triggerText: PropTypes.string,
        content: PropTypes.string,
      }),
    }),
  ).isRequired,
};

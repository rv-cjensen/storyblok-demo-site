// TODO: this makes more sense as a generic "body copy" or "content well" component that allows innerHTML
import PropTypes from 'prop-types';
import { disclaimer, disclaimerHeader, disclaimerContainer } from './disclaimer.module.scss';

export default function Disclaimer({ blok }) {
  return (
    <div className={disclaimer}>
      <div className='container'>
        <div className={disclaimerContainer}>
          <div className={disclaimerHeader}>{blok.header}</div>
          <p>{blok.content}</p>
        </div>
      </div>
    </div>
  );
}

Disclaimer.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
};

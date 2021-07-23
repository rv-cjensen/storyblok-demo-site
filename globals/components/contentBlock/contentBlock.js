import PropTypes from 'prop-types';
import styles from './contentBlock.module.scss';

export default function ContentBlock({ blok }) {
  const { content } = blok.content;

  return (
    <div className={styles.contentBlock}>
      <div className="container">
        {content.map((item, index) => {
          let words = '';
          switch (item.type) {
            case "heading":
              words = `<h${item.attrs.level}>${item.content[0].text}</h${item.attrs.level}>`;
              break;
            case "paragraph":
              words = `<p>${item.content[0].text}</p>`;
              break;
            default:
              words = 'nope';
              break;
          }

          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: words }} />
          )
        })}
      </div>
    </div>
  );
}

ContentBlock.propTypes = {
  blok: PropTypes.object
};

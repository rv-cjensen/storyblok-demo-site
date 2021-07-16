import styles from './standoutCollapsible.module.scss';
import Collapsible from '../collapsible/collapsible';

export default function StandoutCollapsible(props) {
  return (
    <div className={styles.standoutCollapsible}>
      <div className='container'>
        <div className={styles.standoutContainer}>
          <Collapsible {...props}/>
        </div>
      </div>
    </div>
  );
}

StandoutCollapsible.propTypes = {
  ...Collapsible.propTypes,
};

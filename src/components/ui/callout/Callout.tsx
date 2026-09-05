import styles from './Callout.module.css'
import chevronRight from '../../../assets/chevronRight.svg'

export default function Callout(){
    return (
    <a className={styles.callout} href="#careers">
      <span className={styles.badge}>We&apos;re hiring</span>

      <span className={styles.text}>Visit our careers page</span>

      <img
        className={styles.chevron}
        src={chevronRight}
        alt=""
      />
    </a>
  );
}
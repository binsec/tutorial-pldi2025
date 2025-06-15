import clsx from 'clsx';
import styles from './styles.module.css';

export default function Toggle({ title, value, onChange }) {
    return (
        < div className={styles['labeled-switch']}>
            <label style={{ 'font-weight': 'var(--ifm-font-weight-bold)', 'margin-left': '10px', 'margin-right': '5px' }}>{title}</label>
            <label className={styles['switch']}>
                <input type="checkbox" value={value} onChange={onChange} />
                <span className={clsx(styles['slider'], styles['round'])}></span>
            </label>
        </div >)
}
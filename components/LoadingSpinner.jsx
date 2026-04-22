import styles from '../styles/loadingspinner.module.css'

export default function LoadingSpinner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}></div>
            <p className={styles.text}>Loading data...</p>
        </div>
    )
}
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.pageTitle}>
                <h1>Dashboard</h1>
                <p>Welcome back, John</p>
            </div>

            <div className={styles.actions}>
                <div className={styles.searchBar}>
                    <span className={styles.searchIcon}>⌕</span>
                    <input type="text" placeholder="Search..." className={styles.searchInput} />
                </div>
                <button className={styles.notifBtn}>🔔</button>
            </div>
        </header>
    )
}
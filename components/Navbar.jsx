import styles from '../styles/navbar.module.css'

// We now receive onToggle as a prop from LayoutShell
// This is the function that opens and closes the sidebar
export default function Navbar({ onToggle }) {
    return (
        <header className={styles.navbar}>
            <div className={styles.left}>
                {/* Hamburger button — only visible on mobile via CSS */}
                {/* Clicking it calls onToggle which flips sidebarOpen in LayoutShell */}
                <button className={styles.hamburger} onClick={onToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={styles.pageTitle}>
                    <h1>Dashboard</h1>
                    <p>Welcome back, John</p>
                </div>
            </div>

            <div className={styles.actions}>
                <div className={styles.searchBar}>
                    <span className={styles.searchIcon}>⌕</span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                    />
                </div>
                <button className={styles.notifBtn}>🔔</button>
            </div>
        </header>
    )
}
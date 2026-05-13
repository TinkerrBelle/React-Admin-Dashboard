import styles from '../styles/sidebar.module.css'
import Link from 'next/link'

const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '▦' },
    { label: 'Users',     href: '/users',     icon: '◉' },
    { label: 'Orders',    href: '/orders',    icon: '▤' },
    { label: 'Analytics', href: '/analytics', icon: '▲' },
    { label: 'Settings',  href: '/settings',  icon: '⚙' },
]

// We now receive isOpen and onClose as props from LayoutShell
export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
            <div className={styles.brand}>
                <span className={styles.brandIcon}>◈</span>
                <span className={styles.brandName}>AdminPro</span>
            </div>

            <nav>
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            {/* onClose is called when any link is clicked */}
                            {/* This closes the sidebar on mobile after navigation */}
                            <Link
                                href={item.href}
                                className={styles.navLink}
                                onClick={onClose}
                            >
                                <span className={styles.navIcon}>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.userArea}>
                <div className={styles.avatar}>JD</div>
                <div>
                    <p className={styles.userName}>John Doe</p>
                    <p className={styles.userRole}>Administrator</p>
                </div>
            </div>
        </aside>
    )
}
import styles from '../styles/sidebar.module.css'
import Link from 'next/link'

const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '▦' },
    { label: 'Users',     href: '/users',     icon: '◉' },
    { label: 'Orders',    href: '/orders',    icon: '▤' },
    { label: 'Analytics', href: '/analytics', icon: '▲' },
    { label: 'Settings',  href: '/settings',  icon: '⚙' },
]

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.brand}>
                <span className={styles.brandIcon}>◈</span>
                <span className={styles.brandName}>AdminPro</span>
            </div>

            <nav>
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={styles.navLink}>
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
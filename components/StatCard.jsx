import styles from '../styles/statcard.module.css'

// We destructure the props directly in the function signature
// This is cleaner than writing props.title, props.value everywhere
export default function StatCard({ title, value, icon, color, change }) {
    return (
        <div className={styles.card}>

            {/* Top row — icon on the right, title on the left */}
            <div className={styles.cardHeader}>
                <p className={styles.cardTitle}>{title}</p>
                {/* The icon background color comes from the parent via props */}
                {/* This is how one component can look different each time it's used */}
                <div className={styles.iconBox} style={{ backgroundColor: color + '20' }}>
                    <span className={styles.icon} style={{ color: color }}>{icon}</span>
                </div>
            </div>

            {/* The main number */}
            <p className={styles.cardValue}>{value}</p>

            {/* Change indicator — shows growth or decline */}
            <p className={styles.cardChange}>
                {/* If change is positive, show green arrow up. If negative, show red arrow down */}
                <span style={{ color: change >= 0 ? '#10b981' : '#ef4444' }}>
          {change >= 0 ? '▲' : '▼'} {Math.abs(change)}%
        </span>
                {' '}vs last month
            </p>

        </div>
    )
}
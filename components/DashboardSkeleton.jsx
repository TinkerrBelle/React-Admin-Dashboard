import styles from '../styles/dashboardskeleton.module.css'

// A single reusable pulsing box
// Width and height are passed as props so one component covers all cases
function SkeletonBox({ width = '100%', height = '20px', borderRadius = '6px' }) {
    return (
        <div
            className={styles.skeletonBox}
            style={{ width, height, borderRadius }}
        />
    )
}

export default function DashboardSkeleton() {
    return (
        <div className={styles.wrapper}>

            {/* Skeleton stat cards — same grid as the real cards */}
            <div className={styles.statsGrid}>
                {/* We render 4 skeleton cards using Array.from */}
                {/* This creates an array of 4 empty slots just for looping */}
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={styles.skeletonCard}>
                        <div className={styles.cardTop}>
                            <SkeletonBox width="60%" height="14px" />
                            <SkeletonBox width="40px" height="40px" borderRadius="10px" />
                        </div>
                        <SkeletonBox width="40%" height="32px" />
                        <SkeletonBox width="50%" height="12px" />
                    </div>
                ))}
            </div>

            {/* Skeleton search bar */}
            <SkeletonBox width="100%" height="44px" borderRadius="10px" />

            {/* Skeleton table */}
            <div className={styles.skeletonTable}>
                {/* Table header */}
                <div className={styles.tableHeader}>
                    <SkeletonBox width="120px" height="16px" />
                    <SkeletonBox width="60px" height="24px" borderRadius="20px" />
                </div>

                {/* Column headers */}
                <div className={styles.tableRow}>
                    {['30%', '25%', '20%', '15%', '10%'].map((w, i) => (
                        <SkeletonBox key={i} width={w} height="12px" />
                    ))}
                </div>

                {/* Table rows — 7 fake rows */}
                {Array.from({ length: 7 }).map((_, index) => (
                    <div key={index} className={styles.tableRow}>
                        {/* Name cell with avatar */}
                        <div className={styles.nameCell}>
                            <SkeletonBox width="34px" height="34px" borderRadius="50%" />
                            <div className={styles.nameCellText}>
                                <SkeletonBox width="120px" height="14px" />
                                <SkeletonBox width="80px" height="11px" />
                            </div>
                        </div>
                        <SkeletonBox width="140px" height="13px" />
                        <SkeletonBox width="100px" height="13px" />
                        <SkeletonBox width="80px" height="13px" />
                        <SkeletonBox width="60px" height="24px" borderRadius="20px" />
                    </div>
                ))}
            </div>

        </div>
    )
}
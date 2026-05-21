import styles from '../styles/usertable.module.css'

export default function UserTable({ users, searchTerm }) {
    return (
        <div className={styles.tableWrapper}>

            <div className={styles.tableHeader}>
                <h2 className={styles.tableTitle}>Recent Users</h2>
                <span className={styles.tableBadge}>{users.length} total</span>
            </div>

            {/* If users array is empty, show empty state instead of the table */}
            {users.length === 0 ? (
                <div className={styles.emptyState}>
                    <p className={styles.emptyIcon}>🔍</p>
                    <p className={styles.emptyTitle}>No users found</p>
                    <p className={styles.emptySubtitle}>
                        No results for <strong>"{searchTerm}"</strong>. Try a different search.
                    </p>
                </div>
            ) : (
                <div className={styles.tableScrollWrapper}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>City</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className={styles.userCell}>
                                        <div className={styles.avatar}>
                                            {user.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className={styles.userName}>{user.name}</p>
                                            <p className={styles.userUsername}>@{user.username}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.email}>{user.email}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                                <td>
                      <span className={
                          user.id % 2 === 0
                              ? styles.badgeActive
                              : styles.badgeInactive
                      }>
                        {user.id % 2 === 0 ? 'Active' : 'Inactive'}
                      </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}
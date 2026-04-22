import styles from '../styles/usertable.module.css'

// This component receives "users" as a prop from the dashboard page
// It doesn't know where the data came from — it just displays it
// That's exactly how it should be
export default function UserTable({ users }) {
    return (
        <div className={styles.tableWrapper}>

            {/* Table header */}
            <div className={styles.tableHeader}>
                <h2 className={styles.tableTitle}>Recent Users</h2>
                <span className={styles.tableBadge}>{users.length} total</span>
            </div>

            {/* The actual table */}
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
                {/* Loop through every user and create a row for each one */}
                {/* This is the same .map() pattern from Sidebar — now with real data */}
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                            {/* Avatar circle with user initials */}
                            <div className={styles.userCell}>
                                <div className={styles.avatar}>
                                    {/* Gets the first letter of the first and last name */}
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
                            {/* Even ID = Active, Odd ID = Inactive */}
                            {/* Same fake logic as the stat cards — consistent across the app */}
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
    )
}
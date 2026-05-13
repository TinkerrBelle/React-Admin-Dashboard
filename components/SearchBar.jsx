import styles from '../styles/searchbar.module.css'

// This component receives two props from the dashboard page:
// 1. searchTerm — the current value of the search input
// 2. onSearch — a function to call when the user types something
export default function SearchBar({ searchTerm, onSearch }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchContainer}>
                <span className={styles.searchIcon}>⌕</span>
                <input
                    type="text"
                    placeholder="Search users by name, email or company..."
                    className={styles.input}
                    value={searchTerm}
                    // Every time the user types a character, we call onSearch
                    // with the new value of the input
                    // This updates the searchTerm state in the dashboard page
                    onChange={(e) => onSearch(e.target.value)}
                />
                {/* Only show the clear button when there is something typed */}
                {searchTerm && (
                    <button
                        className={styles.clearBtn}
                        // Clicking clear resets searchTerm back to empty string
                        onClick={() => onSearch('')}
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Shows how many results match — only visible when user is searching */}
            {searchTerm && (
                <p className={styles.hint}>
                    Press Escape to clear search
                </p>
            )}
        </div>
    )
}
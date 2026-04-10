import './globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import styles from '../styles/layout.module.css'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'My portfolio dashboard project',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <div className={styles.appShell}>
        <Sidebar />
        <div className={styles.mainArea}>
          <Navbar />
          <main className={styles.pageContent}>
            {children}
          </main>
        </div>
      </div>
      </body>
      </html>
  )
}
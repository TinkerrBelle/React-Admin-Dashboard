'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import styles from '../styles/layout.module.css'

export default function LayoutShell({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <body>
        {sidebarOpen && (
            <div
                className={styles.overlay}
                onClick={() => setSidebarOpen(false)}
            />
        )}

        <div className={styles.appShell}>
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <div className={styles.mainArea}>
                <Navbar onToggle={() => setSidebarOpen(prev => !prev)} />
                <main className={styles.pageContent}>
                    {children}
                </main>
            </div>
        </div>
        </body>
    )
}
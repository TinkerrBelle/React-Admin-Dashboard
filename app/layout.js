import './globals.css'
import LayoutShell from '../components/LayoutShell'

export const metadata = {
    title: 'Admin Dashboard',
    description: 'My portfolio dashboard project',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <LayoutShell>{children}</LayoutShell>
        </html>
    )
}
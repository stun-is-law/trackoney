import './globals.sass'
import styles from '@/styles/layout.module.sass'
import Navbar from '@/components/Navbar/Navbar';

export const metadata = {
  title: 'Trackoney',
  description: 'Track all of your various expenses and incomes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.root}>
          <div className={styles.content}>
            {children}
          </div>
          <div className={styles.navbar}>
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  )
}

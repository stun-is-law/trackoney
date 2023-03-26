import './globals.sass'

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
      <body>{children}</body>
    </html>
  )
}

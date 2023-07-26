import './globals.css'
import Navbar from './componets/Navbar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-500'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import "./globals.css";
import Link from 'next/link'


export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-cyan-400 p-2">
          
          <Link href="/">Home</Link> <span className="mx-2">|</span>
          <Link href="/blog">Blog</Link> <span className="mx-2">|</span>
          <Link href="/about">About</Link> <span className="mx-2"> | </span>
          <Link href="/contact">Contact</Link> <span className="mx-2"> | </span>
          <Link href="/users">Users</Link> <span className="mx-2">  </span>
        </nav>
        {children}
      </body>
    </html>
  )
}
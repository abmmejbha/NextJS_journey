import Link from 'next/link'

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 p-4">
          MY website navbar <br/>
          <Link href="/blog">Blog</Link> <span className="mx-2">|</span>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <hr />
        </nav>
        {children}
      </body>
    </html>
  )
}
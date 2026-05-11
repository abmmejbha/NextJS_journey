import Link from 'next/link'


export default function Navbar() {
  return (
        <nav className="bg-gray-800 text-white p-4 flex gap-4">
          
          <Link href="/">Home</Link> <span className="mx-2">|</span>
          <Link href="/blog">Blog</Link> <span className="mx-2">|</span>
          <Link href="/about">About</Link> <span className="mx-2"> | </span>
          <Link href="/contact">Contact</Link> <span className="mx-2"> | </span>
          <Link href="/users">Users</Link> <span className="mx-2">  </span>
        </nav>
  )
}
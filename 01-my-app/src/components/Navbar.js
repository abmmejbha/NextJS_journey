"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
        <nav className="shadow-lg bg-gray-500 text-white p-4 flex gap-4">
          
          <Link className={pathname === "/" ? "text-blue-400 font-bold" : "hover:text-blue-300"} href="/">Home</Link> 
          <Link className={pathname === "/users" ? "text-blue-400 font-bold" : "hover:text-blue-300"} href="/users">Users</Link>
          <Link className={pathname === "/blog" ? "text-blue-400 font-bold" : "hover:text-blue-300"} href="/blog">Blog</Link>
          <Link className={pathname === "/about" ? "text-blue-400 font-bold" : "hover:text-blue-300"} href="/about">About</Link>
          <Link className={pathname === "/contact" ? "text-blue-400 font-bold" : "hover:text-blue-300"} href="/contact">Contact</Link> 
        </nav>
  )
}
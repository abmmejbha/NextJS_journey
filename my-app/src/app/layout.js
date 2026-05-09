export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 p-4">
          MY website navbar 
        </nav>
        {children}
      </body>
    </html>
  )
}
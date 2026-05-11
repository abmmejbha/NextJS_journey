import Link from 'next/link'

export default async function Page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const jsonData = await data.json()
    return (
        <div>
            <h1 className="font-semibold bg-gray-200">About Us</h1>
            <p>{jsonData.title}</p>
            <Link href="/blog">Please visit our blog</Link>
        </div>
    )
}
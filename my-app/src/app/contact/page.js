"use client"
import Link from 'next/link'

export default function Contact() {
    const handleClick = () => {
        alert("This is the contact page")
    }

    return (
        <main>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-2xl mb-4">Contact US</h1>
                <button 
                    onClick={handleClick}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                        Click Me
                    </button>
            <Link href="/" className="text-blue-500 hover:underline mt-4 block">Go back to Home</Link>
            </div>


        </main>
    )

}
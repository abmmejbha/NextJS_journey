import Link from 'next/link'

export default async function UserDetails({ params }) {
    const { id } = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    
    if (!response.ok) {
        return <div className="p-10 text-red-500">User not found!</div>
    }
    const user = await response.json()

    return (
        <div className="p-10">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
                <div className="bg-blue-600 p-4">
                    <h1 className="text-white text-2xl font-bold">{user.name}</h1>
                </div>

                <div className="p-6 space-y-2">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p className="mt-4 pt-4 border-t">
                        <strong>Company:</strong> {user.company?.name}
                    </p>
                </div>

                <div className="p-6 bg-gray-50 border-t">
                    <Link 
                        href="/users"
                        className='inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors shadow-md'
                    >
                        ← Go back
                    </Link>
                </div>
            </div>
        </div>
    )
}
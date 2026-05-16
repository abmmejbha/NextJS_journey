"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UserListClient({ initialUsers }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(initialUsers)

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        setSearchTerm(value)

        const filtered = initialUsers.filter((user) => {
            return user.name.toLowerCase().includes(value)
        })
        setFilteredUsers(filtered)
    }

    return(
        <div>
            <input type="text" 
                onChange={handleSearch}
                placeholder="Search users by name"
                value={searchTerm}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            <ul className="space-y-2">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="p-4 border border-gray-200 rounded hover:bg-gray-100 transition-colors duration-300">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-600">{user.email}
                            <Link 
                                href={`/users/${user.id}`}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4 inline-block hover:bg-blue-600 transition-colors duration-300"
                            >
                                View Details
                            </Link>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
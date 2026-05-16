"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function UserListClient({ initialUsers }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = initialUsers.filter((user) => {
      return user.name.toLowerCase().includes(value);
    });
    setFilteredUsers(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative mb-8">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search users by name"
          value={searchTerm}
          className="w-full p-4 pl-12 border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus focus:ring-blue-500 text-black transition-all"
          
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="bg-gray-300 p-6 rounded-2xl shadow-lg hover:drop-shadow-lg hover:text-gray-50 hover:bg-gray-400 text-shadow-lg outline-blue-500 transition-all duration-300 transform hover:scale-105 flex flex-col justify-center justify-between"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-400 text-white flex items-center justify-center mb-2 font-bold text-lg text-shadow-lg">
                {user.name.charAt(0).toUpperCase() +
                  user.name.charAt(1).toUpperCase()}
              </div>
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-sm mb-2">{user.email}</p>
              <Link
                href={`/users/${user.id}`}
                className="w-full text-center py-2 bg-blue-500 text-white rounded-xl  block mt-4 shadow-md shadow-blue-500/50 font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105 transform"
              >
                View Details
              </Link>
            </li>
          ))}

          {filteredUsers.length === 0 && (
            <div className="col-span-full text-center text-gray-500 text-lg font-bold mt-8">
              😞 No users found matching `{searchTerm}`
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

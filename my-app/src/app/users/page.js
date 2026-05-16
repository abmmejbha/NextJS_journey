import React from "react";
import UserListClient from "@/components/UserListClient";

export default async function UsersPage() {
  let users = [];

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Data fetching Error");
    }
    users = await response.json();
    
  } catch (error) {
    throw error;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        User List (Fetched from Server)
      </h1>

      <UserListClient initialUsers={users} />
    </div>
  );
}

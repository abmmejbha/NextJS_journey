"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function AddUserPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);

        router.push("/users");
        router.refresh();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting user: ", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-black">Add New User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full px-4 py-2 border border-gray-300 text-black"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 text-black"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white font-bold rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

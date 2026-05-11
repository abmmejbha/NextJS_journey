"use client"

import {useEffect} from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    },[error])

    return(
        <div className='flex flex-col items-center justify-center p-10 text-center'>
            <h2 className='text-2xl font-bold text-red-600'>Oops something Wrong</h2>
            <p className='text-gray-600 mb-4'>We were unable to fetch data</p>
        
            <button 
                onClick={() => reset()}
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
            >
                Try again
            </button>

        </div>
    )
}
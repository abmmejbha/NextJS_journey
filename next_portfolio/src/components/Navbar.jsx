'use client'

import {useTheme} from 'next-themes'

export default function Navbar() {
    const [dark , setDark] = useState(false)

    const toggleDark = () => {
        setDark(!dark)

    
    }
}
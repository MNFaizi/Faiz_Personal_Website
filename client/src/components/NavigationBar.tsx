'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const configs = [
    { name: "Home", url: "/" },
    { name: "About", url: "#about" },
    { name: "Project", url: "#project" },
    { name: "Blog", url: "#blog" }
]

export default function Navigation() {
    const [bgChange, setBgChange] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            console.log(bgChange)
            if(window.scrollY >= 5){
                setBgChange(true)
            }
            else {
                setBgChange(false)
            }
        }
        window.addEventListener('scroll' , handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <>
            <nav className={`${bgChange ? 'sticky top-1' : ''} flex justify-center`}>
                <ul className={`flex justify-center font-bold p-5 my-3 leading-8 rounded-full bg-navbar ${bgChange ? 'shadow-xl' : 'shadow-md'}`}>
                    {configs.map((config, index) => {
                        return (
                            <li key={index} className="mx-1">
                                <Link href={config.url} className=" text-white transition ease-linear delay-100 px-6 py-4 focus:bg-slate-50 rounded-full focus:shadow-2xl focus:text-inherit">{config.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
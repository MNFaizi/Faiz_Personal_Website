"use client"

import Image from "next/image"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faDiscord, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"
import { useEffect } from "react"
library.add(faEnvelope, faGithub, faTwitter, faDiscord, faMedium, faLinkedin)


const config = {
    nama: "Hi, I'am Mochamad NurFaizi",
    profile: '/profile.JPG',
    description: 'Full Stack Developer'
}
const social = [
    { name: 'github', url: 'https://github.com/MNFaizi', icon: faGithub },
    { name: 'twitter', url: 'https://x.com/mochamadnfaizi', icon: faTwitter },
    { name: 'medium', url: 'https://medium.com/@mfaiz1365', icon: faMedium },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mochamad-nurfaizi-a7771b218/', icon: faLinkedin },
    { name: 'email', url: 'mochamadnfaizi@gmail.com', icon: faEnvelope }
]
export default function Hero() {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => config.nama.slice(0, latest))
    useEffect(() => {
        const controls = animate(count, config.nama.length, {
            type: 'tween',
            duration: 4,
            ease: 'easeInOut'
        });
        return controls.stop
    })
    return (
        <div className="text-center min-h-[90vh] flex flex-col items-center">
            <div className="flex justify-center flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                >
                    <Image src={config.profile} height={150} width={150} alt="foto profile faiz" className="rounded-full mx-auto my-10" />
                </motion.div>
                <motion.h1
                    className="font-bold text-6xl uppercase m-5"
                >
                    {displayText}
                </motion.h1>
                <h1 className="font-semibold text-3xl m-5">{config.description}</h1>
            </div>
            <motion.div
                initial={{ x: -1200, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeIn', duration: 3 }}
            >
                <div className="my-10 flex">
                    {social.map((soc, index) => {
                        return (
                            <div key={index} className="transition ease-in-out delay-150 mx-5 hover:scale-125 hover:animate-bounce">
                                <Link href={soc.url} target="_blank" >
                                    <FontAwesomeIcon icon={soc.icon} size="3x" color="white" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <button className="my-15 shadow-xl">
                <a href="#project" className="bg-slate-100 rounded-xl py-2 px-5 font-medium text-xl">Project</a>
            </button>
        </div>
    )
}
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`} passHref>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300 
                ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const MobileLink = ({ href, title, onClick }) => {
    const router = useRouter();

    return (
        <Link
            href={href}
            passHref
            onClick={onClick}
            className={`relative text-2xl font-semibold ${router.asPath === href ? "underline underline-offset-8" : ""}`}
        >
            {title}
        </Link>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="relative w-full px-8 py-8 font-medium sm:px-8 md:px-12 xl:px-20 2xl:px-32 dark:text-light">
            <div className="hidden items-center justify-between xl:flex">
                <nav className="flex items-center">
                    <CustomLink href='/' title="Home" className='mr-4' />
                    <CustomLink href='/about' title="About" className='mx-4' />
                    <CustomLink href='/projects' title="Projects" className='mx-4' />
                    <CustomLink href='/contact' title="Contact" className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href='https://github.com/Off-Aditya' target={"_blank"} rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/aditya-singh-959a31330/' target={"_blank"} rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href='https://x.com/singh_343' target={"_blank"} rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mx-3"
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href='https://www.instagram.com/iam.aditya.sin/' target={"_blank"} rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 ml-2"
                    >
                        <InstagramIcon />
                        
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                        aria-label="Toggle theme"
                    >
                        {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                    </button>
                </nav>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Logo />
                </div>
            </div>

            <div className="relative flex items-center justify-between xl:hidden">
                <button
                    className="relative h-11 w-11"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`absolute left-1.5 top-3 block h-0.5 w-8 bg-dark transition-all duration-300 dark:bg-light ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`absolute left-1.5 top-5 block h-0.5 w-8 bg-dark transition-all duration-300 dark:bg-light ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`absolute left-1.5 top-7 block h-0.5 w-8 bg-dark transition-all duration-300 dark:bg-light ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Logo />
                </div>

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark border border-dark dark:border-light"}`}
                    aria-label="Toggle theme"
                >
                    {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-300 xl:hidden ${isOpen ? "max-h-[36rem] pt-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="rounded-2xl border border-dark bg-light p-6 shadow-md dark:border-light dark:bg-dark">
                    <nav className="flex flex-col items-center gap-5">
                        <MobileLink href='/' title="Home" onClick={() => setIsOpen(false)} />
                        <MobileLink href='/about' title="About" onClick={() => setIsOpen(false)} />
                        <MobileLink href='/projects' title="Projects" onClick={() => setIsOpen(false)} />
                        <MobileLink href='/contact' title="Contact" onClick={() => setIsOpen(false)} />
                    </nav>

                    <div className='mt-8 flex items-center justify-center gap-4'>
                        <motion.a href='https://x.com/' target={"_blank"} rel="noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6"
                        >
                            <TwitterIcon />
                        </motion.a>
                        <motion.a href='https://github.com/' target={"_blank"} rel="noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/' target={"_blank"} rel="noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a href='https://instagram.com/' target={"_blank"} rel="noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8"
                        >
                            <InstagramIcon />
                        </motion.a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar

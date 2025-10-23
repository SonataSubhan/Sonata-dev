"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import "../globals.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const icons = [
        { src: "/giticon.svg", href: "#", alt: "giticon", width: 21, height: 21 },
        { src: "/instaicon.svg", href: "#", alt: "instaicon", width: 21, height: 21 },
        { src: "/facebookicon.svg", href: "#", alt: "facebookicon", width: 25, height: 25 },
    ];

    return (
        <nav className="bg-black  text-white flex justify-between items-center h-[70px] w-screen border-b border-white   px-10 z-50 fixed md:opacity-90 backdrop-blur-lg shadow-2xl">
            <h1 className="text-2xl font-semibold">
                Sonata<span className="text-red-700">-dev</span>
            </h1>

            {/* Desktop links */}
            <div className="hidden md:flex gap-5 font-semibold text-[#8d8c8cff]">
                {links.map((link) => {
                    const isActive = pathName === link.href;
                    return (
                        <div key={link.href} className="relative group">
                            <Link
                                href={link.href}
                                className={`transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                            <span
                                className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-red-500 transition-all duration-400 ease-linear ${isActive
                                    ? "w-full opacity-100"
                                    : "group-hover:w-full group-hover:opacity-100 w-0 opacity-0"
                                    }`}
                            ></span>
                        </div>
                    );
                })}
            </div>

            {/* Desktop icons */}
            <div className="hidden md:flex gap-7">
                {icons.map((icon) => (
                    <Link key={icon.alt} href={icon.href}>
                        <Image
                            src={icon.src}
                            width={icon.width}
                            height={icon.height}
                            alt={icon.alt}
                            className="transition duration-300 hover:scale-110 hover:brightness-0 hover:invert"
                        />
                    </Link>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center ml-auto">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col justify-between w-8 h-5 group cursor-pointer"
                >
                    <span
                        className={`block h-1 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-1 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-1 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile menu */}

            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute top-[70px] left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-8 shadow-2xl">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 text-lg hover:text-red-500 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex gap-7">
                            {icons.map((icon) => (
                                <Link key={icon.alt} href={icon.href}>
                                    <Image
                                        src={icon.src}
                                        width={icon.width}
                                        height={icon.height}
                                        alt={icon.alt}
                                        className="transition duration-300 hover:scale-110 hover:brightness-0 hover:invert"
                                    />
                                </Link>
                            ))}
                        </div>


                    </motion.div>




                )}
            </AnimatePresence>
        </nav>
    );
}

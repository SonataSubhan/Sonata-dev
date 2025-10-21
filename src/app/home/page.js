'use client'
import Image from "next/image"
import Link from "next/link";
import TypingLoopText from "../typingloop";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
    const icons = [
        { src: "/giticon.svg", href: "#", alt: "giticon", width: 21, height: 21 },
        { src: "/instaicon.svg", href: "#", alt: "instaicon", width: 21, height: 21 },
        { src: "/whatsappicon.svg", href: "#", alt: "whatsappicon", width: 25, height: 25 },
        { src: "/linkedinicon.svg", href: "#", alt: "linkedinicon", width: 25, height: 25 },

    ];
    const orbitIcons = [
        { icon: <FaReact size={30} color="#61DBFB" />, delay: 0 },
        { icon: <FaJs size={30} color="#F7DF1E" />, delay: 0.25 },
        { icon: <FaHtml5 size={30} color="#E44D26" />, delay: 0.5 },
        { icon: <FaCss3Alt size={30} color="#1572B6" />, delay: 0.75 },
    ];



    return (
        <div className="h-screen w-screen">


            <div className="flex flex-col md:flex-row-reverse items-center  justify-around h-[85%] md:h-[90%]  ">
                {/* Şəkil wrapper */}
                <div className="text-center flex md:hidden">
                    <h1 className="text-xl text-white font-semibold">Hello, I'm Sübhan!</h1>

                </div>

                <div className="relative w-40 h-40 md:w-60 md:h-60 -z-10 md:z-0 rounded-full 
                border-3 border-yellow-400
                shadow-[0_0_100px_rgba(234,179,8,1)]
                hover:shadow-[0_0_150px_rgba(234,179,8,1)]
                transition-shadow duration-300">

                    <Image
                        src="/profil.jpg"
                        alt="Profile"
                        fill
                        className="object-cover rounded-full"
                    />

                    {orbitIcons.map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2  z-40 "
                            style={{
                                originX: "0px",
                                originY: "0px", // radius məsafəsi
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 8,
                                delay: item.delay,
                            }}
                        >
                            <div className="translate-x-[-400%]  translate-y-[450%]">
                                {item.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Boş div / digər content */}
                <div className="flex flex-col gap-10 p-5 ">
                    <h1 className="text-xl hidden md:flex text-white  font-semibold">Hello, I'm Sübhan!</h1>


                    <TypingLoopText texts={["Problem Solver ", "React Enthusiast ", "UI Designer "]} />

                    <h1 className="text-xl text-center md:text-start text-white font-semibold">Expanding skills and discovering new ways to innovate</h1>
                    <button
                        className="text-red-600 border-2 border-red-700 w-60 h-12 rounded-xl mx-auto md:mx-0
             cursor-pointer text-xl font-bold
             hover:text-white
             hover:shadow-[0_0_25px_red]
             hover:scale-105
             transition-all duration-300">
                        DOWNLOAD CV
                    </button>


                    <div className="flex gap-5 font-semibold justify-center items-center md:justify-start text-[#8d8c8cff]">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

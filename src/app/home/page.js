'use client'
import Image from "next/image"
import Link from "next/link";
import TypingLoopText from "../typingloop";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
    const icons = [
        { src: "/giticon.svg", href: "#", alt: "giticon", width: 21, height: 21, },
        { src: "/instaicon.svg", href: "#", alt: "instaicon", width: 21, height: 21 },
        { src: "/whatsappicon.svg", href: "#", alt: "whatsappicon", width: 25, height: 25 },
        { src: "/linkedinicon.svg", href: "#", alt: "linkedinicon", width: 25, height: 25 },

    ];
    const orbitIcons = [
        {
            src: "/htmlicon.svg",
            alt: "htmlicon",
            radius: 110,
            duration: 11,
            direction: -1,
        },
        {
            src: "/cssicon.svg",
            alt: "cssicon",
            radius: 150,
            duration: 11,
            direction: 1,
        },
        {
            src: "/javascirpticon.svg",
            alt: "javscripticon",
            radius: 190,
            duration: 11,
            direction: 1,
        },
        {
            src: "/giticon2.svg",
            alt: "giticon2",
            radius: 230,
            duration: 11,
            direction: -1, // əks istiqamət
        },
        {
            src: "/reacticon.svg",
            alt: "reacticon",
            radius: 270,
            duration: 11,
            direction: 1, // saat istiqaməti
        },
        {
            src: "/nexticon.svg",
            alt: "nexticon",
            radius: 310,
            duration: 11,
            direction: -1,
        },
    ];



    return (
        <div className="h-screen w-screen">


            <div className="flex flex-col md:flex-row-reverse items-center  justify-around h-[85%] md:h-[90%]  ">
                {/* Şəkil wrapper */}
                <div className="text-center flex md:hidden">
                    <h1 className="text-xl text-white font-semibold">Hello, Im Sübhan!</h1>

                </div>

                <div className="relative w-40 h-40 md:w-40 md:h-40 -z-10 md:z-0  md:mr-50 rounded-full 
                border-3 border-yellow-400
                shadow-[0_0_100px_yellow]
                hover:shadow-[0_0_150px_white]
                transition-all duration-400
                hover:scale-120">

                    <Image
                        src="/profil.jpg"
                        alt="Profile"
                        fill
                        className="object-cover rounded-full "
                    />
                    {orbitIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute top-1/2 left-1/2"
                            style={{
                                width: 50,
                                height: 50,
                                marginLeft: -15,
                                marginTop: -15,
                            }}
                            animate={{
                                rotate: icon.direction * 360, // istiqamətə görə
                            }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: icon.duration,
                            }}
                        >
                            <div
                                style={{
                                    transform: `rotate(${index * (200 / icons.length)}deg) translate(${icon.radius}px)`,
                                }}
                            >
                                <Image src={icon.src} className="rounded-full" alt={icon.alt} width={40} height={40} />
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Boş div / digər content */}
                <div className="flex flex-col gap-10 p-5 ">
                    <h1 className="text-xl hidden md:flex text-white  font-semibold">Hello, Im Sübhan!</h1>


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

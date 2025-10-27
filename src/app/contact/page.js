import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    const icons = [
        { src: "/giticon.svg", href: "#", alt: "giticon", width: 21, height: 21 },
        { src: "/instaicon.svg", href: "#", alt: "instaicon", width: 21, height: 21 },
        { src: "/whatsappicon.svg", href: "#", alt: "whatsappicon", width: 25, height: 25 },
        { src: "/linkedinicon.svg", href: "#", alt: "linkedinicon", width: 25, height: 25 },
    ];

    return (
        <div className="w-full min-h-screen pt-[70px] flex flex-col">
            <h1 className="pt-10 text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center px-4">
                Get In Touch
            </h1>

            <div className="w-20 sm:w-32 mx-auto h-1 bg-[#8B0000] relative mt-3 sm:mt-5"></div>

            {/* MAIN CONTAINER */}
            <div className="w-full flex flex-col lg:flex-row p-6 items-center sm:p-10 lg:p-20 gap-10">
                {/* LEFT SIDE - Desktop */}
                <div className="hidden lg:flex flex-col gap-5 lg:w-4/7 px-2 sm:px-10 lg:px-20">
                    <h1 className="text-white text-center lg:text-left text-base sm:text-lg leading-relaxed">
                        Let's collaborate! I'm always open to discussing exciting projects and new opportunities.
                    </h1>

                    <div className="flex flex-col gap-4 text-sm sm:text-base">
                        <div className="flex items-center gap-3">
                            <Image src="/lettericon.svg" alt="lettericon" width={20} height={20} />
                            <h1 className="text-gray-200 break-all">huseynov.subhan2022@gmail.com</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/telephoneicon.svg" alt="telephoneicon" width={20} height={20} />
                            <h1 className="text-gray-200">+994 070 636 26 27</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/locationicon.svg" alt="locationicon" width={20} height={20} />
                            <h1 className="text-gray-200">Azerbaijan, Baku</h1>
                        </div>
                    </div>

                    {/* SOCIAL ICONS - Desktop */}
                    <div className="flex gap-6 justify-center lg:justify-start mt-4">
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

                {/* MOBILE & TABLET LAYOUT */}
                <div className="flex lg:hidden flex-col w-full items-center gap-8">
                    {/* TITLE */}
                    <h1 className="text-white text-center text-base sm:text-lg leading-relaxed px-4">
                        Let's collaborate! I'm always open to discussing exciting projects and new opportunities.
                    </h1>

                    {/* FORM */}
                    <form className="w-[80%] sm:w-3/4 flex flex-col gap-5 bg-[#1a0000] p-6 rounded-xl shadow-md">
                        <input
                            placeholder="Your Name"
                            className="w-full bg-[#330000] text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                        />
                        <input
                            placeholder="Your Email"
                            className="w-full bg-[#330000] text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                        />
                        <textarea
                            placeholder="Your Message..."
                            rows="4"
                            className="w-full bg-[#330000] text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                        ></textarea>

                        <button
                            className="text-red-600 border-2 border-red-700 w-40 h-10 rounded-xl mx-auto
                 cursor-pointer text-lg font-bold
                 hover:text-white
                 hover:shadow-[0_0_25px_red]
                 hover:scale-105
                 transition-all duration-300"
                        >
                            SEND MESSAGE
                        </button>
                    </form>

                    {/* CONTACT INFO */}
                    <div className="flex flex-col gap-4 text-sm sm:text-base">
                        <div className="flex items-center gap-3">
                            <Image src="/lettericon.svg" alt="lettericon" width={20} height={20} />
                            <h1 className="text-gray-200 break-all">huseynov.subhan2022@gmail.com</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/telephoneicon.svg" alt="telephoneicon" width={20} height={20} />
                            <h1 className="text-gray-200">+994 070 636 26 27</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/locationicon.svg" alt="locationicon" width={20} height={20} />
                            <h1 className="text-gray-200">Azerbaijan, Baku</h1>
                        </div>
                    </div>

                    {/* SOCIAL ICONS - Mobile & Tablet */}
                    <div className="flex gap-6 justify-center mt-4">
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

                {/* FORM - Desktop */}
                <form className="hidden  lg:flex lg:w-3/7 flex-col gap-5 bg-[#1a0000] p-6 rounded-xl shadow-md">
                    <input
                        placeholder="Your Name"
                        className="w-full bg-[#330000] text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                    <input
                        placeholder="Your Email"
                        className="w-full bg-[#330000] text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                    <textarea
                        placeholder="Your Message..."
                        rows="4"
                        className="w-full bg-[#330000] text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    ></textarea>

                    <button
                        className="text-red-600 border-2 border-red-700 w-60 h-12 rounded-xl mx-auto md:mx-0
             cursor-pointer text-xl font-bold
             hover:text-white
             hover:shadow-[0_0_25px_red]
             hover:scale-105
             transition-all duration-300"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
}
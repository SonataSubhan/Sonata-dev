import Image from "next/image";
export default function Projects() {
    const projects = [
        {
            img: "/ecommerce.jpg",
            title: "E-Commerce Platform",
            des: "A complete e-commerce platform with shopping cart, payment integration, and an admin dashboard for managing products and orders.",
            skills: ["React", "Node.js", "MongoDB"],
            demolink: "https://ecommerce-demo.com",
            gitlink: "https://github.com/username/ecommerce-platform"
        },
        {
            img: "/musicplayer.jpg",
            title: "Music Player App",
            des: "A responsive web music player that allows users to play, pause, and manage playlists with smooth UI animations.",
            skills: ["React", "Bootstrap", "Context API"],
            demolink: "https://musicplayer-demo.com",
            gitlink: "https://github.com/username/music-player"
        },
        {
            img: "/portfolioimage.jpg",
            title: "Portfolio Website",
            des: "A modern personal portfolio website showcasing projects, skills, and contact details with dark/light mode support.",
            skills: ["Next.js", "Framer Motion", "TailwindCSS"],
            demolink: "https://portfolio-demo.com",
            gitlink: "https://github.com/username/portfolio-site"
        },
        {
            img: "/chatappimage.jpg",
            title: "Chat Application",
            des: "A real-time chat app with user authentication and WebSocket support, enabling private and group conversations.",
            skills: ["React", "Firebase", "CSS Modules"],
            demolink: "https://chatapp-demo.com",
            gitlink: "https://github.com/username/chat-application"
        },
        {
            img: "/taskmanagerapp.jpg",
            title: "Task Manager",
            des: "A task management app to add, edit, and track daily tasks with filtering and progress tracking features.",
            skills: ["Vue.js", "Express.js", "MongoDB"],
            demolink: "https://taskmanager-demo.com",
            gitlink: "https://github.com/username/task-manager"
        },
        {
            img: "/fitnesstrackerimage.jpg",
            title: "Fitness Tracker",
            des: "A modern fitness tracking web app that allows users to log workouts, set goals, and visualize progress with charts.",
            skills: ["React", "Chart.js", "Firebase"],
            demolink: "https://fitnesstracker-demo.com",
            gitlink: "https://github.com/username/fitness-tracker"
        }
    ];

    return (
        <div className="w-full min-h-screen pt-[70px]">
            <h1 className="pt-10  text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center px-4">
                My Projects
            </h1>
            <div
                className=" w-15 md:w-30 mx-auto h-1 bg-red-500 realtive mt-2 md:mt-5   z-50 "
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center p-6 sm:p-10 lg:p-20 max-w-7xl mx-auto ">
                {projects.map((project, i) => (
                    <div
                        className="w-full max-w-[350px] h-auto md:h-[480px] bg-red-900/10 shadow-2xl shadow-red-500/40 border border-red-500/40 rounded-3xl flex flex-col justify-around hover:shadow-red-500/60 transition-all duration-300 hover:scale-y-105 "
                        key={i}
                    >
                        <div className="w-full rounded-t-3xl overflow-hidden h-[180px] md:h-[40%] bg-red-900/10 flex items-center justify-center relative ">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover "
                            />
                        </div>
                        <div className="p-4 sm:p-5 flex flex-col gap-4">
                            <div className="flex flex-col gap-3 sm:gap-5">
                                <h1 className="text-white text-lg sm:text-xl font-semibold">
                                    {project.title}
                                </h1>
                                <p className="text-white text-sm sm:text-base leading-relaxed">
                                    {project.des}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, idx) => (
                                    <div
                                        className="flex flex-wrap px-3 py-2 bg-red-950/30 text-red-400 border border-red-500/40 rounded-3xl justify-center hover:bg-red-700/50 hover:border-red-400/60 transition-all duration-300 hover:shadow-md hover:shadow-red-500 font-mono text-xs cursor-pointer hover:text-red-200"
                                        key={idx}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                <a
                                    href={project.demolink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2 h-10 text-red-300 bg-red-950/40 border border-red-400/50 rounded-lg cursor-pointer justify-center hover:bg-red-800/60 hover:border-red-300/70 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/40 font-semibold flex items-center text-sm"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.gitlink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2 h-10 text-red-300 bg-red-950/40 border border-red-400/50 rounded-lg cursor-pointer justify-center hover:bg-red-800/60 hover:border-red-300/70 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/40 font-semibold flex items-center text-sm"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
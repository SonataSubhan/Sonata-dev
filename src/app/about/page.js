

export default function About() {
    const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git", "Responsive Design", "UI/UX", "C", "Strapi"]
    return (
        <div className="w-screen h-screen">
            <h1 className="text-5xl mt-10 font-semibold text-center text-white">About Me</h1>

            <div className="flex px-20 items-center justify-center h-full">
                <div className="w-1/2 flex flex-col gap-10">
                    <h1 className="text-white text-2xl ">
                        I'm Sonata-dev, a computer science student exploring diverse fields of technology - from software and web development to artificial intelligence solutions. My goal is to  continuously grow my skills and expand my horizons.
                    </h1>
                    <p className="text-white text-2xl">
                        Skills & Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((item, i) => (
                            <div className=" h-10 text-white border-2 rounded-2xl border-amber-300 p-3 flex items-center" key={i}>
                                {item}
                            </div>

                        )
                        )}
                    </div>
                </div>
                <div className="w-1/2">
                    { }
                </div>
            </div>
        </div>
    )
}
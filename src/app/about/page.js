export default function About() {
    const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git", "Responsive Design", "UI/UX", "C", "Strapi"]
    const codeSnippet = `function developer() {
  const passion = "coding";
  const goal = "innovation";
  
  while (learning) {
    build();
    improve();
    repeat();
  }
  
  return success;
}
// Always evolving...
developer();`
    return (
        <div className="w-full min-h-screen ">
            <h1 className="pt-20 overflow-hidden text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center px-4">
                About Me
            </h1>

            <div className="flex flex-col lg:flex-row w-full my-auto p-4 sm:p-6 lg:p-10 gap-6 lg:gap-5 max-w-7xl mx-auto">
                {/* Sol tərəf - Mətn və Skills */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-10 flex flex-col gap-5">
                    <h1 className="text-sm sm:text-md lg:text-lg text-red-300 leading-relaxed">
                        Im Sonata-dev, a computer science student exploring diverse fields of technology - from software and web development to artificial intelligence solutions. My goal is to continuously grow my skills and expand my horizons.
                    </h1>

                    <h1 className="text-xl sm:text-2xl mt-6 lg:mt-10 text-red-400 font-bold">
                        Skills & Technologies
                    </h1>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {skills.map((skill, i) => (
                            <div
                                className="flex flex-wrap px-3 sm:px-4 py-2 min-w-[50px] bg-red-950/30 text-red-400 border border-red-500/40 rounded-3xl justify-center hover:bg-red-700/50 hover:border-red-400/60 transition-all duration-300 hover:shadow-md hover:shadow-red-500 font-mono text-xs sm:text-sm cursor-pointer hover:text-red-200"
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sağ tərəf - Kod bloku */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-0">
                    <div className="w-full bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg shadow-2xl shadow-red-500/40">
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-red-400/20 bg-red-950/20">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-300"></div>
                            <span className="ml-2 sm:ml-4 text-red-400 text-xs font-mono">developer.js</span>
                        </div>
                        <pre className="text-red-400 font-mono text-xs sm:text-sm leading-relaxed overflow-auto p-4 sm:p-6 bg-gradient-to-br from-red-950/10 via-black/60 to-red-950/20 max-h-[300px] sm:max-h-[400px] lg:max-h-none">
                            <code>{codeSnippet}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
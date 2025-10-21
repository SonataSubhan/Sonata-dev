import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import HomePage from "./home/page";


export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

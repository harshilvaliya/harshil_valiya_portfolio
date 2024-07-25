import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      {/* <h1 className="font-mono text- text-7xl">Harshil Valiya.</h1>
      <br />
      <p className="font-mono lowercase text-3xl">Full-Stack Dev</p> */}
    </main>
  );
}

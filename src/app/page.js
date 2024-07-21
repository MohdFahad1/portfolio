import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex justify-center p-5 ">
      <div className="flex flex-col gap-11 md:w-[600px] w-[333px]">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

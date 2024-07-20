import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex justify-center p-5 ">
      <div className="flex flex-col gap-11 md:w-[600px] w-[400px]">
        <Header />
        <About />
        <Experience />
      </div>
    </div>
  );
}

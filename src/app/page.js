import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex justify-center p-5 ">
      <div className="flex flex-col gap-12 md:w-[600px] w-[400px]">
        <Header />
        <About />
      </div>
    </div>
  );
}

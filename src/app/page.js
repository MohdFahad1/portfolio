"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".item", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.15,
    });
  });

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="size-[20px] w-full"></div>
      <div className="flex flex-col gap-11 md:w-[600px] w-[333px]">
        <div className="translate-y-10 opacity-0 item">
          <Header />
        </div>
        <div className="translate-y-10 opacity-0 item">
          <About />
        </div>

        <div className="translate-y-10 opacity-0 item">
          <Experience />
        </div>

        <div className="translate-y-10 opacity-0 item">
          <Projects />
        </div>

        <div className="translate-y-10 opacity-0 item">
          <Contact />
        </div>
      </div>
    </div>
  );
}

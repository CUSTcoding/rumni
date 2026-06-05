"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import useMousePosition from "@/utils/useMousePosition";
import {motion} from "framer-motion"

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const {x, y} = useMousePosition();

  const [isMousered, setIsMousered] = useState(false);



  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    gsap.set(imagesRef.current, {
      y: "200%",
      opacity: 0,
      scale: 0.9,
      rotate: (i) => [-6, 4, -3, 6][i],
      zIndex: 20, 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600%", 
        scrub: true,
        pin: true,
      },
    });


    tl.to(imagesRef.current, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      stagger: 0.25,
      ease: "power3.out",
    });

    tl.to(imagesRef.current, {
      x: 0,
      y: 0,
      stagger: 0,
      duration: 0.2,
    });


    tl.to(imagesRef.current, {
      x: (i) => [-350, 350, -350, 350][i],
      y: (i) => [-280, -280, 280, 280][i],
      rotate: (i) => [-22, 20, -18, 24][i],
      scale: 0.95,
      ease: "power2.inOut",
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  const images = [
    "/assets/contactNbali.png",
    "/assets/nbali.jpg",
    "/assets/rumani.png",
    "/assets/home.jpg",
  ];

  const maskRef = useRef<HTMLHeadingElement | null>(null);

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const rect = maskRef.current?.getBoundingClientRect();
    if (!rect) return;

    setOffset({
      x: rect.left,
      y: rect.top,
    });
  }, []);

  const maskX = x - offset.x;
  const maskY = y - offset.y;

  const size = isMousered? 350: 100;

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen flex items-center justify-center flex-col text-center overflow-hidden bg-[#FEFAE0] dark:bg-[#1C1B22] text-[#2C2A4A] dark:text-[#EDEDED] p-6"
    >
    


       <span className="relative overflow-hidden  flex-col items-center  justify-center w-full h-screen z-10">
        <motion.div
          className="mask   w-full h-full justify-center items-center"
          style={{
            WebkitMaskPosition: `${maskX - size / 2}px ${maskY - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          animate={{
              opacity: 1
          }}

          transition={{ type: "tween", ease: "backOut" }}
        >
            <span onMouseEnter={() => {setIsMousered(true)}} onMouseLeave={() => {setIsMousered(false)}} className="md:w-1/2 gap-4 p-10 md:p-0 flex flex-col items-start justify-center">
              <h1 className="text-start text-2xl sm:text-3xl  md:text-5xl lg:text-6xl hidden md:flex font-bold uppercase tracking-wider opacity-70 text-[#2C2A4A] dark:text-[#EDEDED]">
                Welcome to my Art Portfolio
              </h1>
              
              <p className="w-full text-start hidden md:block text-lg text-[17px] sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#2C2A4A] dark:text-[#EDEDED]">I`m <span className="text-red-500">Rumni</span> and my background is  <span>Digital & Interactive Media </span></p>

              <p className="text-start text-xs hidden md:block sm:text-sm md:text-base lg:text-lg font-medium opacity-70 mt-2 text-[#2C2A4A] dark:text-[#EDEDED]">
                I turn emotion into form. Memory into texture. Noise into something you can feel.
              </p>


              <div className=" gap-4  w-full hidden md:flex items-center justify-center">
                <button className="px-2 text-sm md:text-md p-5 rounded-2xl border border-[#2C2A4A]/40 dark:border-[#EDEDED]/40 text-[#2C2A4A] dark:text-[#EDEDED] hover:rounded-3xl hover:bg-[#2C2A4A] dark:hover:bg-[#EDEDED] hover:text-[#FEFAE0] dark:hover:text-[#1C1B22] transition">
                  Explore the Work
                </button>

                <button className="px-2 text-sm md:text-md p-5 rounded-2xl bg-[#2C2A4A] text-[#D4A373]  hover:rounded-3xl hover:opacity-80 font-semibold transition">
                  View Gallery
                </button>
              </div>
              
              </span>
          </motion.div>

          <motion.div className="maskbody absolute  justify-center items-center w-full h-full">

            <span className="md:w-1/2 p-10 gap-4 md:p-0 flex flex-col items-start justify-center">

              <h1 className="text-start text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider opacity-70 text-[#2C2A4A] dark:text-[#EDEDED]">
                Welcome to my Art Portfolio
              </h1>

              <p className="w-full text-start text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#2C2A4A] dark:text-[#EDEDED]">I`m <span className="text-red-500">Mbali Nxumalo</span> and my background is  <span>Multidisciplinary Artist </span></p>

              <p className="text-start text-xs sm:text-sm md:text-base lg:text-lg font-medium opacity-70 mt-2 text-[#2C2A4A] dark:text-[#EDEDED]">
                I turn emotion into form. Memory into texture. Noise into something you can feel.
              </p>

              <div className=" gap-4  w-full flex items-center justify-center">
                <button className="px-2 text-sm md:text-md p-5 rounded-2xl border border-[#2C2A4A]/40 dark:border-[#EDEDED]/40 text-[#2C2A4A] dark:text-[#EDEDED] hover:rounded-3xl hover:bg-[#2C2A4A] dark:hover:bg-[#EDEDED] hover:text-[#FEFAE0] dark:hover:text-[#1C1B22] transition">
                  Explore the Work
                </button>

                <button className="px-2 text-sm md:text-md p-5 rounded-2xl bg-[#2C2A4A] text-[#D4A373]  hover:rounded-3xl hover:opacity-80 font-semibold transition">
                  View Gallery
                </button>
              </div>
              </span>
          </motion.div>
          
        </span>



     
      <div className="absolute inset-0 pointer-events-none z-20">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => { imagesRef.current[i] = el; }}
            className="absolute top-1/2 left-1/2 w-[420px] h-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md shadow-2xl"
          >
            <Image
              src={src}
              alt="artwork"
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
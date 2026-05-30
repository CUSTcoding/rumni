"use client"


import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useMusic } from "@/contexts/MusicContext";

interface PreLoaderProps {
  onFinish: () => void;
}

export default function PreLoader({onFinish,}: PreLoaderProps) {

    const hasStartedRef = useRef(false);
    const [isLoading, setIsLoading] = useState(false);
    const { playMusic } = useMusic();

    const startCounter = async () => {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;
        setIsLoading(true);

        try {
            await playMusic();
        } catch (error) {
            console.error("Erro ao tocar música:", error);
        }

        const counter = document.querySelector(".counter");

        if (!(counter instanceof HTMLElement)) return;

        const obj = { value: 0 };

        gsap.to(obj, {
            value: 100,
            duration: 6,
            delay: 0,
            ease: "power1.inOut",
            onUpdate: () => {
                const num = Math.floor(obj.value);
                counter.textContent = `${String(num).padStart(3, '0')}%`;
            }
        });

        gsap.to(".progress-bar", {
            width: "30%",
            duration: 2,
            ease: "power4.inOut",
            delay:6,
        });
        
        gsap.to(".progress-bar",{
            width:"100%",
            opacity: 0,
            duration: 2,
            delay: 7.5,
            ease: "power3.out",
            onComplete: () => {
                gsap.set(".pre-loader", {
                    display: "none",
                })
            }

        })

        gsap.to(".hero-img > img", {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            duration: 2,
            ease: "power4.inOut",
            stagger: 0.45,
            delay:8,
        })

        gsap.to(".hero", {

            scale: 1.25,
            duration: 4,
            ease: "power3.inOut",
            delay: 8,

        })

        gsap.to(".last-img", {
            scale: 1,
            duration: 4,
            ease: "power3.inOut",
            delay: 8,
            onComplete: () => {

                gsap.to(".home-content", {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    y: 0
                });
                
                gsap.from(".home-content", {
                    opacity: 0,
                    y: 20,
                    duration: 1.2,
                    ease: "power3.out"
                });
                
                onFinish();
            }

        });
    };

    return(
        <section className="hero w-dvw  h-screen overflow-hidden md:gap-[3em]  z-20 bg-[#2C2A4A]">
            <div className="pre-loader w-full h-full gap-[0.5em]  fixed top-0 right-0 flex justify-end items-end  overflow-hidden z-50 cursor-pointer" onClick={startCounter}>
                <div className="flex  gap-[0.5em]">
                    <p className="w-max justify-center uppercase text-[40px] md:text-[60px] md:leading-15">{isLoading ? "Loading" : "Click to start"}</p>
                    <div className="counter text-[40px] text-center md:text-[60px] font-[Times_New_Roman] font-normal">000%</div>
                </div>
                <div className="progress-bar relative -top-4 w-0% h-1 bg-[#D4A373]"></div>
            </div>
            <div className="hero-img relative gap-[0.5em] md:gap-[2em] w-full h-full overflow-hidden z-0">


                <Image
                    src="/assets/nbali.jpg"
                    alt="Descrição da imagem"
                    fill
                    className="object-cover absolute [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
                />

                <Image
                    src="/assets/gallery.jpg"
                    alt="Descrição da imagem"
                    fill
                    className="object-cover absolute [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
                />

                <Image
                    src="/assets/rumani.png"
                    alt="Descrição da imagem"
                    fill
                    className="object-cover absolute [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
                />

                <Image
                    src="/assets/exhibitions.jpg"
                    alt="Descrição da imagem"
                    fill
                    className="object-cover absolute [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
                />

                <Image
                    src="/assets/contactNbali.png" 
                    alt="Descrição da imagem"
                    fill
                    className="object-cover absolute [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
                />

                <Image
                    src="/assets/home.jpg"
                    alt="Descrição da imagem"
                    fill
                     className="last-img object-cover absolute scale-[1.25] [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
                />
                       
            </div>
        </section>
    );
}
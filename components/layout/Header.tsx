"use client";

import { JSX, useState, useEffect, useRef } from "react";
import Link from "next/link";
import MenuIcon from "../ui/menuIcon";
import Navbar from "./NavBar";
import { useMenu } from "../../hooks/useMenu";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { transition } from "@/lib/transition";

export default function Header(): JSX.Element {
  const { isOpen, openMenu, closeMenu } = useMenu();
  const router = useRouter();

  const [animateIcon, setAnimateIcon] = useState(false);

  const handleClick = (): void => {
    setAnimateIcon(prev => !prev);
  };

    const handleClose = (): void => {
        setAnimateIcon(false);
        closeMenu();
    };

  const handleFinish = (): void => {
    openMenu(); 
  };

  const handleNavigation = (href: string) => {
    transition.start();
    setTimeout(() => {
      router.push(href);
    }, 600);
  };

  const headerRef = useRef(null);

  useEffect(() => {

    function splitTextIntoSpans(selector: string): void {
      const element = document.querySelector(selector) as HTMLElement | null;

      if (!element) return;

      const text = element.innerText;

      element.innerHTML = text
        .split("")
        .map((char: string) => `<span class="char">${char}</span>`)
        .join("");
    }

    splitTextIntoSpans(".digit-1");
    splitTextIntoSpans(".digit-2");
    splitTextIntoSpans(".digit-3");

  }, []);


  

  return (
    <header ref={headerRef} className="fixed flex items-center justify-between px-10 top-0 right-0 left-0 w-screen h-13 z-50 pointer-events-auto">
      <button onClick={() => handleNavigation("/")} className="font-bold text-2xl hover:opacity-80 transition-opacity">
        Rumani
      </button>

      <button
        onClick={handleClick}
        className="group flex cursor-pointer items-center justify-center gap-1 h-full w-20"
      >
        <span className="hover:font-semibold">Menu</span>

        <MenuIcon
          trigger={animateIcon}
          onFinish={handleFinish}
        />
      </button>

      <AnimatePresence>
        {isOpen && <Navbar closeMenu={handleClose} />}
      </AnimatePresence>
    </header>
  );
}
"use client";

import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { JSX } from "react/jsx-dev-runtime";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MusicPlayer from "../ui/MusicPlayer";
import { transition } from "@/lib/transition";
import { useRouter } from "next/navigation";



type Props = {
  closeMenu: () => void;
};


export default function Navbar ({ closeMenu }: Props): JSX.Element{

    const router = useRouter();

    const [previewImg, setPreviewImg] = useState("/assets/home.jpg");

    const handleRouterNavigation = (href: string) => {
        closeMenu();
        transition.start();
        setTimeout(() => {
            router.push(href);
        }, 600);
    };

    const menuLink = [
        { name: "Home", href: "/", img: "assets/home.jpg" },
        { name: "About", href: "/about", img: "assets/nbali.jpg" },
        { name: "Gallery", href: "/gallery", img: "assets/gallery.jpg" },
        { name: "Blog", href: "/blog", img: "assets/rumani.png" },
        { name: "Exhibitions", href: "/exhibitions", img: "assets/exhibitions.jpg" },
        { name: "Contact", href: "/contact", img: "assets/contactNbali.png" }
    ];

    const socialLink = [
        {"name": "Linkedin", "href":"https://www.linkedin.com/in/rumani-rahmany"},
        {"name": "Instagram", "href":"https://www.linkedin.com/in/rumani-rahmanv"},
        {"name": "Nostr", "href":"https://www.linkedin.com/in/rumani-rahmane"},
        {"name": "TikTok", "href":"https://www.linkedin.com/in/rumani-rahmand"},
        {"name": "X(Twitter)", "href":"https://www.linkedin.com/in/rumani-rahmanr"},
        {"name": "X(Twitter)", "href":"https://www.linkedin.com/in/rumani-rahmakn"},
    ]

    const year = new Date().getFullYear();

    return(
        <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="menu-overlay top-0 bottom-0 w-screen right-0 left-0 bg-gray-500 absolute z-40 h-screen"
        >
            <header className="flex items-center justify-between px-10 top-0 right-0 left-0 w-screen h-13">
                <button onClick={() => {
                    const target = "/" as const;
                    handleRouterNavigation(target);
                }} className="font-bold text-2xl hover:opacity-80 transition-opacity">
                    Rumani
                </button>

                <MusicPlayer/>

                <button
                    onClick={closeMenu}
                    className="group flex cursor-pointer items-center justify-center gap-1 h-full w-20"
                >
                    <span className="hover:font-semibold transition-transform duration-100">Close</span>
                        <X className="transition-transform duration-200 group-hover:rotate-180"/>
                </button>
            </header>

            <main className="menu-items flex items-center justify-center px-20 origin-[left_bottom] will-change-transform will-change-opacity w-screen py-5 ">
                <div className="col-lg flex-3">
                    <div className="preview-img relative h-[450px] overflow-hidden w-[70%]">
                        <motion.div
                            key={previewImg}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="relative h-full w-full"
                            >
                            <Image
                                src={previewImg}
                                alt="preview"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="col-sm flex-2">
                    {menuLink.map((item) => (
                    <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.4 * menuLink.indexOf(item),
                            duration: 0.6,
                        }}
                    >
                        <button
                        className="text-7xl tracking-tight transition-all duration-200 hover:translate-x-4 hover:pl-3 hover:font-semibold hover:py-2 focus:outline-none focus:translate-x-4 focus:font-semibold focus:underline focus:underline-offset-4"
                        onClick={() => handleRouterNavigation(item.href)}
                        onMouseEnter={() => setPreviewImg(`/${item.img}`)}
                        >
                        {item.name}
                        </button>
                    </motion.div>
                    ))}
                </div>
                
            </main>

            <footer className=" flex flex-col justify-center items-center w-screen ">
                <div className="flex justify-around items-center w-full">

                    <div className="socialLinks items-start flex flex-col">
                        <h1 className="text-2xl font-bold" >Social network</h1>
                        {socialLink.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="text-lg flex text-center items-center justify-center hover:underline hover:font-bold transition-transform duration-200 focus:outline-none focus:underline focus:font-bold"
                            >
                                {link.name} <ArrowRight className="-rotate-45"/>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Navegation</h1>
                        {menuLink.map((item) => (
                            
                        <div className="link" key={item.href}>
                            <button
                            className="hover:font-semibold text-lg transition-all duration-200 focus:outline-none focus:font-semibold focus:underline text-left"
                            onClick={() => handleRouterNavigation(item.href)}
                            >
                            {item.name}
                            </button>
                        </div>
                         ))}
                </div>

                </div>

                <div className="container mx-auto text-center text-foreground my-4 text-sm opacity-60">
                    <p>&copy; {new Date().getFullYear()} rumani.All rights reserved.</p>
                </div>

               
                
            </footer>
        </motion.nav>
    );
}
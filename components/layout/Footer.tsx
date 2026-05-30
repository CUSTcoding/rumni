
import Link from "next/link";
import { transition } from "@/lib/transition";
import { useRouter } from "next/navigation";
import InstagramIcon from '@/src/icons/instagram.svg';
import XIcon from '@/src/icons/x.svg';
import WhatsAppIcon from '@/src/icons/whatsapp.svg';
import LinkedInIcon from '@/src/icons/linkedin-svgrepo-com.svg';
import FacebookIcon from '@/src/icons/facebook.svg';
import GitHubIcon from '@/src/icons/github.svg';
import ThreadsIcon from '@/src/icons/threads.svg';
import NostrIcon from '@/src/icons/nostr.svg';


export default function Footer() {

    const router = useRouter();
    

    const menuLink = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about", },
        { name: "Gallery", href: "/gallery"},
        { name: "Blog", href: "/blog"},
        { name: "Exhibitions", href: "/exhibitions"},
        { name: "Contact", href: "/contact" }
    ];

    const contatos = [
        { classicone: 'rute', value: 'Instagram', path: 'https://www.instagram.com/cust.coding.solutions?igsh=NG9icXB6Y2VncjRo', Icon: InstagramIcon },
        { classicone: 'rute', value: 'X (Twitter)', path: 'https://x.com/custCSolutions?t=xCj8XO90CJdgeUG7Y_yLJg&s=09', Icon: XIcon },
        { classicone: 'rute', value: 'WhatsApp', path: 'https://wa.me/message/BFMJUYLO6XNDC1', Icon: WhatsAppIcon },
        { classicone: 'rute', value: 'LinkedIn', path: 'https://www.linkedin.com/company/cust-coding-solutions/', Icon: LinkedInIcon },
        { classicone: 'rute', value: 'Facebook', path: 'https://www.facebook.com/share/1BU8vbC6fQ/', Icon: FacebookIcon },
        { classicone: 'rute', value: 'GitHub', path: 'https://github.com/Cust-Coding', Icon: GitHubIcon },
        { classicone: 'rute', value: 'Threads', path: 'https://www.threads.com/@cust.coding.solutions', Icon: ThreadsIcon },
        { classicone: 'rute', value: 'Nostr', path: 'https://primal.net/p/nprofile1qqs284lnggl7kfvxysenaf0jf3vv4sd800u3jvtnks4y3yhgn8wvnjqxwc95f', Icon: NostrIcon },
    ]

    return (
        <footer className="bg-gray-800 flex flex-col items-center justify-center text-white py-4 mt-auto w-screen h-auto gap-2">
            <div className="content flex md:flex-col w-full">
                <div className="flex items-center justify-center flex-wrap gap-3 text-white/50 hover:text-white/80 ">
                    {contatos.map((contato, index) =>{
                        const Icon = contato.Icon;
                            return(
                                <a
                                    key={index}
                                    href={contato.path}
                                    target="_blank"
                                    className="h-8 w-8 relative group grid place-items-center hover:text-fd-foreground"
                                    >

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-[0.5px] -left-0.25 duration-300 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 z-10 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M3 16v3a2 2 0 0 0 2 2h3"></path></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-[0.5px] -left-0.25 z-10 duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path></svg>

                                    <div className="bg-grid-lines absolute inset-0 ease-out duration-300 group-hover:opacity-50 opacity-0 ![background-position:-15px_-15px]"></div>
                
                                                            
                                        <Icon
                                            className={
                                                "text-gray-500 hover:text-gray-300 transform-3d perspective-distant backface-hidden group-hover:rotate-x-180 group-hover:rotate-z-180 group-hover:-rotate-y-180 duration-1000 " +
                                                (Icon === NostrIcon ? 'w-6 h-6' : 'w-4 h-4')
                                            }
                                        />
                                </a>
                            );
                    })}

            
                </div>

                
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Navegation</h1>
                        {menuLink.map((item) => (
                            
                        <div className="link" key={item.href}>
                            <Link
                            className="hover:font-semibold text-lg transition-all duration-200 focus:outline-none focus:font-semibold focus:underline"
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                transition.start();

                                setTimeout(() => {
                                router.push(item.href);
                                }, 800);
                            }}
                            >
                            {item.name}
                            </Link>
                        </div>
                         ))}
                </div>

            </div>
            <div className="container mx-auto text-center text-foreground text-sm opacity-60">
                <p>&copy; {new Date().getFullYear()} rumani.All rights reserved.</p>
            </div>
        </footer>
    );
}
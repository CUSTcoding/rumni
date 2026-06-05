"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  Images,
  BookOpen,
  Settings,
  ImageIcon,
  Home,
  LogOut,
  X,
    Menu,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Exhibitions",
    href: "/dashboard/exhibitions",
    icon: Images,
  },
  {
    label: "Gallery",
    href: "/dashboard/gallery",
    icon: ImageIcon,
  },
  {
    label: "Blog",
    href: "/dashboard/blog",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    label: "View Site",
    href: "/",
    icon: Home,
  },
];

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex h-screen bg-[#FEFAE0] dark:bg-[#1C1B22] text-[#2C2A4A] dark:text-[#EDEDED] overflow-hidden">
      
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative
          top-0 left-0 z-40
          h-screen w-72
          bg-white dark:bg-[#25242E]
          border-r border-black/10 dark:border-white/10
          transition-transform duration-300 ease-in-out
          md:border-none md:bg-transparent md:dark:bg-transparent
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <nav className="flex h-full flex-col p-5">
          
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">
                Rumni
              </h1>

              <p className="text-sm opacity-60">
                Admin Panel
              </p>
            </div>

            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      group
                      flex items-center gap-3
                      rounded-xl
                      px-4 py-3
                      transition-all duration-200
                      hover:bg-[#C46868]
                      hover:text-white
                      hover:translate-x-1
                    "
                  >
                    <Icon
                      size={20}
                      className="
                        transition-transform duration-200
                        group-hover:scale-110
                      "
                    />

                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

         


          <div className="border-t border-black/10 pt-4 dark:border-white/10">

            <button
                className="
                flex w-full items-center gap-3
                rounded-xl px-4 py-3 cursor-pointer
                text-red-500
                transition-all duration-200
                hover:bg-red-500
                hover:text-white
                "
            >
                <LogOut size={20} />
                <span>Logout</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#C46868]" />

              <div>
                <p className="font-medium">
                  Admin
                </p>

                <p className="text-sm opacity-60">
                  admin@rumani.com
                </p>
              </div>
            </div>
          </div>
        </nav>
      </aside>


      <div className="flex flex-1 flex-col md:rounded-l-[2.5rem] md:bg-[#ebeae6] md:dark:bg-[#39383f] text-[#2C2A4A] dark:text-[#EDEDED]">
        
        <header className="flex items-center gap-4 border-b  border-black/10 p-4 dark:border-white/10">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu size={24} />
          </button>

          <h2 className="font-semibold">
            Dashboard
          </h2>
        </header>

      
        <section className="flex-1 overflow-y-auto p-6">
          Conteúdo
        </section>
      </div>
    </main>
  );
}
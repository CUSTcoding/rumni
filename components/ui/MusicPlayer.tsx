"use client";

import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function MusicPlayer() {
  const { playing, toggleMusic } = useMusic();

  const bars = [10, 4, 8, 10, 5, 11, 7];

  return (
    <div title="The 1975 Yeah I Know">

      <button
        onClick={toggleMusic}
        className="flex items-center cursor-pointer justify-center gap-3 transition-all duration-300 hover:scale-105"
      >
        {playing ? <Pause size={18} /> : <Play size={18} />}

        
        <div className="flex items-center gap-px relative h-6 w-10">

          
          {!playing && (
            <div className="absolute left-0 right-0 top-1/2 h-px bg-green-400/40 rounded-full" />
          )}

         
          {playing &&
            bars.map((height, index) => (
              <motion.span
                key={index}
                className="w-1 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]"
                animate={{
                  height: [
                    `${height * 0.3}px`,
                    `${height}px`,
                    `${height * 0.5}px`,
                    `${height}px`,
                  ],
                  opacity: 1,
                }}
                transition={{
                  height: {
                    duration: 0.9,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.12,
                  },
                }}
              />
            ))}
        </div>
      </button>
    </div>
  );
}
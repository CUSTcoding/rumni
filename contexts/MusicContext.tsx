"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface MusicContextType {
  playing: boolean;
  toggleMusic: () => Promise<void>;
  playMusic: () => Promise<void>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

const getAudioElement = (): HTMLAudioElement => {
  let audio = document.getElementById("global-music-player") as HTMLAudioElement | null;
  
  if (!audio) {
    audio = new Audio("/music/The_1975_Yeah_I_Know.mp3");
    audio.id = "global-music-player";
    audio.loop = true;
    audio.preload = "auto";
    document.body.appendChild(audio);
  }
  
  return audio;
};

let audioInitialized = false;

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = getAudioElement();

    if (!audioInitialized) {
      audioInitialized = true;

      let hasStarted = false;

      const handleFirstInteraction = async () => {
        if (!hasStarted) {
          try {
            hasStarted = true;
            await audio.play();
            setPlaying(true);
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
          } catch (error) {
            hasStarted = false;
          }
        }
      };

      document.addEventListener("click", handleFirstInteraction, true);
      document.addEventListener("touchstart", handleFirstInteraction, true);
      document.addEventListener("keydown", handleFirstInteraction, true);

      const handlePlay = () => setPlaying(true);
      const handlePause = () => setPlaying(false);

      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);
    }

    setPlaying(!audio.paused);

    return () => {
      // NÃO remove o áudio do DOM - apenas limpa listeners do provider
    };
  }, []);

  const toggleMusic = async () => {
    const audio = getAudioElement();

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Erro ao controlar áudio:", error);
    }
  };

  const playMusic = async () => {
    const audio = getAudioElement();

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("Erro ao tocar áudio:", error);
    }
  };

  return (
    <MusicContext.Provider value={{ playing, toggleMusic, playMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic deve ser usado dentro de MusicProvider");
  }
  return context;
}

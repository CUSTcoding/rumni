"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Transaction() {

  const revealTransition = () => {
    return new Promise<void>((resolve) => {
      const blocks = document.querySelectorAll(".blockl");
      if (blocks.length === 0) {
        console.log("❌ Blocos não encontrados em revealTransition");
        resolve();
        return;
      }

      console.log("🎬 Iniciando reveal transition", blocks.length);
      gsap.set(".blockl", { scaleY: 1, visibility: "visible" });

      gsap.to(".blockl", {
        scaleY: 0,
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "start",
          axis: "x",
        },
        ease: "power4.inOut",
        onComplete: () => {
          console.log("✅ Reveal completo");
          resolve();
        },
      });
    });
  };

  const hideTransition = () => {
    return new Promise<void>((resolve) => {
      const blocks = document.querySelectorAll(".blockl");
      if (blocks.length === 0) {
        console.log("❌ Blocos não encontrados em hideTransition");
        resolve();
        return;
      }

      console.log("🎬 Iniciando hide transition", blocks.length);
      gsap.set(".blockl", { visibility: "visible", scaleY: 0 });

      gsap.to(".blockl", {
        scaleY: 1,
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "start",
          axis: "x",
        },
        ease: "power4.inOut",
        onComplete: () => {
          console.log("✅ Hide completo");
          resolve();
        },
      });
    });
  };

  const playTransition = async () => {
    console.log("▶️ Começando transição");
    await hideTransition();
    await revealTransition();
    gsap.set(".blockl", { visibility: "hidden" });
    console.log("⏹️ Transição terminada");
  };

  useEffect(() => {
    console.log("🔧 Transaction montado - executando transição inicial");
    playTransition();
  }, []);

  useEffect(() => {
    const handleRouteOut = () => {
      console.log("🚀 Recebeu evento route:out - executando transição");
      playTransition();
    };

    window.addEventListener("route:out", handleRouteOut);
    console.log("👂 Listener route:out adicionado");
    
    return () => {
      window.removeEventListener("route:out", handleRouteOut);
      console.log("👂 Listener route:out removido");
    };
  }, []);

  return (
    <div className="transaction fixed top-0 left-0 w-screen h-screen flex flex-col z-50 pointer-events-none">

      <div className="flex-1 flex">
        <div className="blockl flex-1 bg-[#D4A373] origin-top"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-top"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-top"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-top"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-top"></div>
      </div>

      <div className="flex-1 flex">
        <div className="blockl flex-1 bg-[#D4A373] origin-bottom"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-bottom"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-bottom"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-bottom"></div>
        <div className="blockl flex-1 bg-[#D4A373] origin-bottom"></div>
      </div>

    </div>
  );
}
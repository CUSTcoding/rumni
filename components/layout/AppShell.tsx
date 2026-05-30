"use client";

import { useState } from "react";
import PreLoader from "./Pre_loader";
import Header from "./Header";
import Footer from "./Footer";
import { useRouteTransition } from "@/hooks/useRouteTransition";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {

  useRouteTransition();

  const [loading, setLoading] = useState(true);

  return (
    <>

      {loading && (
        <div className="fixed inset-0 z-[9999] pointer-events-auto">
          <PreLoader onFinish={() => setLoading(false)} />
        </div>
      )}

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
        style={{
          animation: !loading ? "slideUp 1.2s ease-out" : "none"
        }}
      >
        <Header />
        <main className="flex w-screen min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
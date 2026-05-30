// hooks/useRouteTransition.ts
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { transition } from "@/lib/transition";

export function useRouteTransition() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {

      transition.end();
    }
  }, [pathname]);
}
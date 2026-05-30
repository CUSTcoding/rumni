"use client";

import { useState } from "react";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (): void => {
    setIsOpen(true);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
}
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const firstFrame = requestAnimationFrame(resetScroll);
    const shortDelay = window.setTimeout(resetScroll, 50);
    const restoredPageDelay = window.setTimeout(resetScroll, 250);

    window.addEventListener("pageshow", resetScroll);

    return () => {
      cancelAnimationFrame(firstFrame);
      window.clearTimeout(shortDelay);
      window.clearTimeout(restoredPageDelay);
      window.removeEventListener("pageshow", resetScroll);
    };
  }, [pathname]);

  return null;
}

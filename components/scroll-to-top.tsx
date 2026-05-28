"use client";

import { useEffect, useLayoutEffect } from "react";

function shouldResetOnInitialLoad() {
  const [navigation] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
  const type = navigation?.type;

  return type === "navigate" || type === "reload";
}

export function ScrollToTop() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (shouldResetOnInitialLoad()) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (!shouldResetOnInitialLoad()) {
      return;
    }

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const firstFrame = requestAnimationFrame(resetScroll);
    const shortDelay = window.setTimeout(resetScroll, 50);
    const restoredPageDelay = window.setTimeout(resetScroll, 250);

    return () => {
      cancelAnimationFrame(firstFrame);
      window.clearTimeout(shortDelay);
      window.clearTimeout(restoredPageDelay);
    };
  }, []);

  return null;
}

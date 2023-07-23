import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

// Preservers the home page scroll position
// when navigating to project pages
export default function PreserveScroll() {
  const [location] = useLocation();
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (location === "/") {
        scrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, location]);

  useEffect(() => {
    const scrollToPosition = (y: number) => {
      const canControlScrollRestoration = "scrollRestoration" in window.history;
      if (canControlScrollRestoration) {
        window.history.scrollRestoration = "manual";
      }

      setTimeout(() => {
        window.scrollTo({ behavior: "auto", top: y });
      }, 10);
    };

    if (location === "/") {
      scrollToPosition(scrollY.current);
    } else {
      scrollToPosition(0);
    }
  }, [location]);

  return null;
}

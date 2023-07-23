import { useCallback, useEffect } from "react";
import useToggle from "./useToggle";
import styles from "../../../App.module.css";

type ToggleNavReturnType = [boolean, () => void, () => void];

/**
 * Custom hook to handle toggling the navigation menu
 * - Blurs the background when nav is open
 * - Hides other content from screen readers when nav is open
 * - Closes nav when escape key is pressed
 * - Closes nav when resizing to larger screen than mobile
 * - Traps focus inside nav when open
 * @param initialState Initial state of the nav
 */
const useToggleNav = (initialState: boolean): ToggleNavReturnType => {
  const [isOpen, toggleIsOpen] = useToggle(initialState);

  const handleNavToggle = () => toggleIsOpen();
  const handleNavClose = useCallback(() => {
    if (isOpen) {
      toggleIsOpen();
    }
  }, [isOpen, toggleIsOpen]);

  // Add blur class to body when nav is open
  // Hide other content from screen readers when nav is open
  useEffect(() => {
    document.body.classList.toggle(styles.blur, isOpen);
    // Add aria hidden to [header, main, footer] when nav is open
    const elements = document.querySelectorAll("header, main, footer");
    elements.forEach((element) => {
      isOpen
        ? element.setAttribute("aria-hidden", "true")
        : element.removeAttribute("aria-hidden");
    });
  }, [isOpen]);

  // Close nav when escape key is pressed
  useEffect(() => {
    const closeNavWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleNavClose();
      }
    };

    document.addEventListener("keydown", closeNavWithEscape);

    return () => {
      document.removeEventListener("keydown", closeNavWithEscape);
    };
  }, [handleNavClose]);

  // Close nav when resizing to larger screen than mobile
  useEffect(() => {
    const closeNavWithResize = () => {
      if (window.innerWidth > 632) {
        handleNavClose();
      }
    };

    window.addEventListener("resize", closeNavWithResize);

    return () => {
      window.removeEventListener("resize", closeNavWithResize);
    };
  }, [handleNavClose]);

  // Trap focus inside nav when open
  const handleTabKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isOpen && e.key === "Tab") {
        const nav = document.querySelector("nav");

        if (nav) {
          const focusableElements = nav.querySelectorAll("li a[href], button");
          const firstFocusableElement = focusableElements[0] as HTMLElement;
          const lastFocusableElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          // TAB
          if (!e.shiftKey && document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }

          // SHIFT + TAB
          if (e.shiftKey && document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleTabKeyDown);

    return () => {
      document.removeEventListener("keydown", handleTabKeyDown);
    };
  }, [handleTabKeyDown]);

  return [isOpen, handleNavToggle, handleNavClose];
};

export default useToggleNav;

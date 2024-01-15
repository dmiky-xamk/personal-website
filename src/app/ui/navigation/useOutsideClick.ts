import { useCallback, useEffect, useRef } from "react";

// https://www.robinwieruch.de/react-hook-detect-click-outside-component/

/**
 * Hook that alerts clicks outside the passed ref.
 * @param callback - function to be called when outside click is detected.
 * @returns ref - Ref to be passed to the element which we want to detect outside click.
 */
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return ref;
};

export default useOutsideClick;

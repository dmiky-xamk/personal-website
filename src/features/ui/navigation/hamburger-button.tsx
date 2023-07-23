import styles from "./navigation.module.css";

interface Props {
  isNavOpen: boolean;
  toggleIsNavOpen: () => void;
}

export default function HamburgerButton({ isNavOpen, toggleIsNavOpen }: Props) {
  return (
    <button
      className={styles.hamburger}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={isNavOpen}
      onClick={toggleIsNavOpen}
    >
      <svg width="100%" viewBox="0 0 100 100">
        <rect
          className={`${styles.line} ${styles.top}`}
          x="10"
          y="25"
          width="80"
          height="8"
          rx="5"
        />
        <rect
          className={`${styles.line} ${styles.mid}`}
          x="10"
          y="45"
          width="80"
          height="8"
          rx="5"
        />
        <rect
          className={`${styles.line} ${styles.bot}`}
          x="10"
          y="65"
          width="80"
          height="8"
          rx="5"
        />
      </svg>
    </button>
  );
}

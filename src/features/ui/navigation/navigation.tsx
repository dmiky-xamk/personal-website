import styles from "./navigation.module.css";
import useToggle from "../../../hooks/useToggle";
import useOutsideClick from "../../../hooks/useOutsideClick";

type Props = {
  onMenuToggle?: () => void;
};

// TODO: Check accessibility
export default function Navigation({ onMenuToggle }: Props) {
  const [isExpanded, toggleIsExpanded] = useToggle(false);

  const handleMenuToggle = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
    toggleIsExpanded();
  };

  const toggleIfExpanded = () => {
    if (isExpanded) {
      handleMenuToggle();
    }
  };

  const handleLinkClick = () => toggleIfExpanded();

  // Close the menu when clicking outside of it
  const ref = useOutsideClick(() => toggleIfExpanded());

  return (
    <nav ref={ref} className={`${styles.nav}`} role="navigation">
      <div className={styles.logo}>
        <a className={styles.nav__link} href="/">
          MK
        </a>
      </div>
      {/*<div ref={ref}>*/}
      <button
        className={styles.hamburger}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        aria-expanded={isExpanded}
        onClick={handleMenuToggle}
      >
        <svg width="100%" viewBox="0 0 100 100">
          <rect
            className={`${styles.line} ${styles.top}`}
            x="10"
            y="25"
            width="80"
            height="10"
            rx="5"
          />
          <rect
            className={`${styles.line} ${styles.mid}`}
            x="10"
            y="45"
            width="80"
            height="10"
            rx="5"
          />
          <rect
            className={`${styles.line} ${styles.bot}`}
            x="10"
            y="65"
            width="80"
            height="10"
            rx="5"
          />
        </svg>
      </button>

      {/* 
      No need for 'aria-hidden' as this uses CSS 'visibility'.
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden
      */}
      <div
        id="navigation"
        className={`${styles.aside} ${isExpanded ? styles.open : ""}`}
        // aria-hidden={!isExpanded}
        // tabIndex={isExpanded ? 1 : -1}
      >
        <ul className={styles.nav__list}>
          <li>
            <a
              className={styles.nav__link}
              href="/#about"
              onClick={handleLinkClick}
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={styles.nav__link}
              href="/#projects"
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={styles.nav__link}
              href="/#contact"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/*</div>*/}
    </nav>
  );
}

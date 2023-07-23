import Link from "../link/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link
            customClass={styles.link}
            href="https://github.com/dmiky-xamk"
            variant="tertiary"
            blank
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            customClass={styles.link}
            href="http://www.linkedin.com/in/mkyllonen"
            variant="tertiary"
            blank
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </footer>
  );
}

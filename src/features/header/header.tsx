import Link from "../ui/link/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>
            Hey, my name is <span>Mikael</span>
          </h1>
          <p>I'm studying software development at XAMK.</p>
          <p>
            My interests are in web & mobile full-stack development along with
            cloud solutions.
          </p>
          <div className={styles.actions}>
            <Link variant="primary" href="#internship">
              Internship
            </Link>
            <Link variant="secondary" href="#about">
              About me
            </Link>
          </div>
        </div>
        <img
          className={styles.image}
          src="/src/assets/header/me.png"
          alt="Headshot"
        />
      </div>
    </header>
  );
}

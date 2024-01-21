import Link from "../ui/link/link";
import styles from "./header.module.css";
import headshot from "../../assets/header/me.png";

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
            I'm studying software development at XAMK. My interests are in
            full-stack development for web and mobile platforms in addition to
            leveraging Microsoft Azure.
          </p>
          <div className={styles.actions}>
            <Link variant="primary" href="#contact">
              Contact
            </Link>
            <Link variant="secondary" href="#about">
              About me
            </Link>
          </div>
        </div>
        <img className={styles.image} src={headshot} alt="Headshot" />
      </div>
    </header>
  );
}

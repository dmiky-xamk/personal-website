import Link from "@/app/ui/link/link";
import styles from "./header.module.css";
import me from "@/../public/images/me.png";
import Image from "next/image";

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
            My interests are in full-stack development for web and mobile
            platforms in addition to leveraging Microsoft Azure.
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
        <Image
          className={styles.image}
          src={me}
          alt="Headshot of Mikael"
          priority
        />
      </div>
    </header>
  );
}
